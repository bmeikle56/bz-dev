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
    kill)
      bz_kill "$@"
      ;;
    status)
      bz_status "$@"
      ;;
    *)
      echo "unknown subcommand: $subcommand"
      return 1
      ;;
  esac
}

bz_make() {
  local repo=""
  local key=""
  local notes=""

  for arg in "$@"; do
    case "$arg" in
      -r=*)
        repo="${arg#-r=}"
        ;;
      -k=*)
        key="${arg#-k=}"
          ;;
      -n=*)
        notes="${arg#-n=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    response=$(curl -s -X POST "$backend_url/make" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"ticket\": {
          \"repo\": \"$repo\",
          \"key\": \"$key\",
          \"notes\": \"$notes\",
          \"dev\": \"$dev\",
          \"status\": \"new\"
        }
      }")

    if [[ "$response" == '{"response":"make ticket successful"}' ]]; then
      bz_color "Added!"
    fi
}

bz_fetch() {
    curl -s -X POST "$backend_url/fetch" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\"
      }"
}

bz_workon() {
  local repo=""
  local key=""

  for arg in "$@"; do
    case "$arg" in
      -r=*)
        repo="${arg#-r=}"
        ;;
      -k=*)
        key="${arg#-k=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
  
#    cd "~/Documents/repos/$repo"
#    git checkout -b "$key"
#    git push --set-upstream origin "$key"
    
    response=$(curl -s -X POST "$backend_url/update" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"key\": \"$key\",
        \"repo\": \"$repo\",
        \"status\": \"active\"
      }")
      
      echo "$response"
      
    if [[ "$response" == '{"response":"update status successful"}' ]]; then
        bz_color "Activated!"
    fi
      
}

bz_pause() {
  local key=""

  for arg in "$@"; do
    case "$arg" in
      -k=*)
        key="${arg#-k=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    curl -s -X POST "$backend_url/update" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"key\": \"$key\",
        \"status\": \"new\"
      }"
}

bz_delete() {
  local key=""
  local repo=""

  for arg in "$@"; do
    case "$arg" in
      -k=*)
        key="${arg#-k=}"
        ;;
      -r=*)
        repo="${arg#-r=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    response=$(curl -s -X POST "$backend_url/delete" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"key\": \"$key\",
        \"repo\": \"$repo\"
      }")

    if [[ "$response" == '{"response":"delete ticket successful"}' ]]; then
        bz_color "Deleted!"
    fi
}

bz_clear() {
    echo -n "Confirm you want to clear all data (y/n): "
    read confirm
    if [[ "$confirm" =~ ^[Yy]$ ]]; then
        response=$(curl -s -X POST "$backend_url/clear" \
          --header "Authorization: Bearer $auth_token" \
          --header "Content-Type: application/json" \
          --data "{
            \"username\": \"$dev\"
          }")
    else
        bz_color "Cancelled!"
    fi

    if [[ "$response" == '{"response":"clear tickets successful"}' ]]; then
        bz_color "Cleared!"
    fi
}


bz_submit() {
      local repo=""
      local tag=""
      local notes=""
      local key=""

      for arg in "$@"; do
        case "$arg" in
          -r=*)
            repo="${arg#-r=}"
            ;;
          -t=*)
            tag="${arg#-t=}"
            ;;
          -k=*)
            key="${arg#-k=}"
            ;;
          -n=*)
            notes="${arg#-n=}"
            ;;
          *)
            echo "unknown option: $arg"
            return 1
            ;;
        esac
      done
      
    response=$(curl -s -X POST \
      --header "Authorization: token $github_token" \
      --header "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/bmeikle56/$repo/pulls" \
      --data "{
        \"title\": \"My Pull Request Title\",
        \"head\": \"$tag/$key\",
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
      ( .tickets | map("    " + .tag + "/" + .key) | join("\n") ) +
      "\n  }"
    )
  '

  echo "}"
}

bz_kill() {
  local repo=""

  for arg in "$@"; do
    case "$arg" in
      -r=*)
        repo="${arg#-r=}"
        ;;
      *)
        echo "unknown option: $arg"
        return 1
        ;;
    esac
  done
  
    response=$(curl -s -X POST "$backend_url/kill" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"repo\": \"$repo\"
      }")

    if [[ "$response" == '{"response":"repo killed successful"}' ]]; then
        bz_color "Killed!"
    fi
}

bz_push() {
    git push
}

bz_status() {
    git status
}

bz_color() {
  # print all arguments in bright magenta (95) and bold (1)
  echo -e "\e[1;95m$*\e[0m"
}
