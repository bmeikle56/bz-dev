#!/bin/zsh

source "${0:A:h}/config.zsh"

bz() {
  local subcommand=$1
  shift

  case "$subcommand" in
    make)
      bz_make "$@"
      ;;
    submit)
      bz_submit "$@"
      ;;
    add)
      bz_add "$@"
      ;;
    commit)
      bz_commit "$@"
      ;;
    push)
      bz_push "$@"
      ;;
    fetch)
      bz_fetch "$@"
      ;;
    clear)
      bz_clear "$@"
      ;;
    delete)
      bz_delete "$@"
      ;;
    workon)
      bz_workon "$@"
      ;;
    updateme)
      bz_updateme "$@"
      ;;
    pause)
      bz_pause "$@"
      ;;
    *)
      echo "unknown subcommand: $subcommand"
      return 1
      ;;
  esac
}

bz_make() {
  local repo=""
  local tag=""
  local id=""
  local tag=""
  local notes=""

  for arg in "$@"; do
    case "$arg" in
      --repo=*)
        repo="${arg#--repo=}"
        ;;
      --tag=*)
        tag="${arg#--tag=}"
        ;;
      --id=*)
          full_id="${arg#--id=}"
          if [[ "$full_id" =~ ^(ref|fix|add)-(.+)$ ]]; then
            prefix="${match[1]}"
            id="${match[2]}"
            
            case "$prefix" in
              add) tag="ftr" ;;
              fix) tag="bug" ;;
              ref) tag="ref" ;;
            esac
          else
            echo "invalid ticket id"
            return 1
          fi
          ;;
      --notes=*)
        notes="${arg#--notes=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    response=$(curl -X POST "$backend_url/make" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"ticket\": {
          \"repo\": \"$repo\",
          \"tag\": \"$tag\",
          \"title\": \"$id\",
          \"notes\": \"$notes\",
          \"dev\": \"$dev\",
          \"status\": \"new\"
        }
      }")

    if [[ "$response" == '{"response":"make ticket successful"}' ]]; then
      echo "\033[32mAdded!\033[0m"
    fi
}

bz_fetch() {
    curl -X POST "$backend_url/fetch" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\"
      }"
}

bz_workon() {
  local repo=""
  local title=""

  for arg in "$@"; do
    case "$arg" in
      --repo=*)
        repo="${arg#--repo=}"
        ;;
      --id=*)
        title="${arg#--id=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    response=$(curl -X POST "$backend_url/update" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"title\": \"$title\",
        \"status\": \"active\"
      }")
      
    if [[ "$response" == '{"response":"update status successful"}' ]]; then
      echo "\033[32mAdded!\033[0m"
    fi
      
}

bz_pause() {
  local title=""

  for arg in "$@"; do
    case "$arg" in
      --title=*)
        title="${arg#--title=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    curl -X POST "$backend_url/update" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"title\": \"$title\",
        \"status\": \"new\"
      }"
}

bz_delete() {
  local title=""
  local repo=""

  for arg in "$@"; do
    case "$arg" in
      --id=*)
        title="${arg#--id=}"
        ;;
      --repo=*)
        repo="${arg#--repo=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    response=$(curl -X POST "$backend_url/delete" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"title\": \"$title\",
        \"repo\": \"$repo\"
      }")
    if [[ "$response" == '{"response":"delete ticket successful"}' ]]; then
      echo "\033[32mDeleted!\033[0m"
    fi
}

bz_clear() {
    curl -X POST "$backend_url/clear" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\"
      }"
}

bz_submit() {
      local repo=""
      local tag=""
      local notes=""
      local title=""

      for arg in "$@"; do
        case "$arg" in
          --repo=*)
            repo="${arg#--repo=}"
            ;;
          --tag=*)
            tag="${arg#--tag=}"
            ;;
          --title=*)
            title="${arg#--title=}"
            ;;
          --notes=*)
            notes="${arg#--notes=}"
            ;;
          *)
            echo "unknown option: $arg"
            return 1
            ;;
        esac
      done
      
    response=$(curl -X POST \
      --header "Authorization: token $github_token" \
      --header "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/bmeikle56/$repo/pulls" \
      --data "{
        \"title\": \"My Pull Request Title\",
        \"head\": \"$tag/$title\",
        \"base\": \"master\",
        \"body\": \"$notes\"
      }")
}

bz_add() {
    git add "$1"
}

bz_commit() {
    git commit -m "$1"
}

bz_updateme() {
  json=$(curl -s -X POST "$backend_url/fetch" \
    --header "Authorization: Bearer $auth_token" \
    --header "Content-Type: application/json" \
    --data "{\"username\": \"${dev}\"}")

  echo "{"

  echo "$json" | jq -r '
    .repos[] |
    (
      "  " + .repo + " {\n" +
      ( .tickets | map("    " + .tag + "/" + .title) | join("\n") ) +
      "\n  }"
    )
  '

  echo "}"
}

bz_push() {
    git push
    
    # now we know the ticket is being worked on, set status to active...
    curl -X POST "$backend_url/update" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"ticket\": {
          \"dev\": \"$dev\",
          \"title\": \"$title\",          
          \"status\": \"active\"
        }
      }"
}
