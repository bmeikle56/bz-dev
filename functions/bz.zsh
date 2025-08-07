# ~/.zsh/functions/bz.zsh

# make ticket + branch, switch to the branch
# bz make --repo=berzerk-agile-dev --tag=bug --title=fix-typo --notes="fix typo, align buttons"

# fetch tickets
# bz fetch

# work on a ticket
# bz workon --title=ipad-constraints

# pause work on a ticket
# bz pause --title=ipad-constraints

# submit a PR
# bz submit --repo=poker-degen --title=allow-logout

# delete a ticket
# bz delete --title=title

# clear all tickets
# bz clear

dev="braeden"

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
    pause)
      bz_pause "$@"
      ;;
#    status)
#      bz_status "$@"
#      ;;
    *)
      echo "Unknown subcommand: $subcommand"
      return 1
      ;;
  esac
}

bz_make() {
  local repo=""
  local tag=""
  local title=""
  local notes=""

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
        echo "Unknown option: $arg"
        return 1
        ;;
    esac
  done

#    cd "~/Documents/repo/$repo"
#    git checkout -b "$tag/$title"
#    git push --set-upstream origin "$tag/$title"
    
    curl -X POST "https://berzerk-agile-dev-backend-production.up.railway.app/make" \
      --header "Authorization: Bearer bzdev" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"ticket\": {
          \"repo\": \"$repo\",
          \"tag\": \"$tag\",
          \"title\": \"$title\",
          \"notes\": \"$notes\",
          \"dev\": \"$dev\",
          \"status\": \"new\"
        }
      }"
}

bz_fetch() {
    curl -X POST "https://berzerk-agile-dev-backend-production.up.railway.app/fetch" \
      --header "Authorization: Bearer bzdev" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\"
      }"
}

bz_workon() {
  local title=""

  for arg in "$@"; do
    case "$arg" in
      --title=*)
        title="${arg#--title=}"
        ;;
      *)
        echo "Unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    curl -X POST "https://berzerk-agile-dev-backend-production.up.railway.app/update" \
      --header "Authorization: Bearer bzdev" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"title\": \"$title\",
        \"status\": \"active\"
      }"
}

bz_pause() {
  local title=""

  for arg in "$@"; do
    case "$arg" in
      --title=*)
        title="${arg#--title=}"
        ;;
      *)
        echo "Unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    curl -X POST "https://berzerk-agile-dev-backend-production.up.railway.app/update" \
      --header "Authorization: Bearer bzdev" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"title\": \"$title\",
        \"status\": \"new\"
      }"
}

bz_delete() {
  local title=""

  for arg in "$@"; do
    case "$arg" in
      --title=*)
        title="${arg#--title=}"
        ;;
      *)
        echo "Unknown option: $arg"
        return 1
        ;;
    esac
  done
    
    curl -X POST "https://berzerk-agile-dev-backend-production.up.railway.app/delete" \
      --header "Authorization: Bearer bzdev" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"title\": \"$title\"
      }"
}

bz_clear() {
    curl -X POST "https://berzerk-agile-dev-backend-production.up.railway.app/clear" \
      --header "Authorization: Bearer bzdev" \
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
            echo "Unknown option: $arg"
            return 1
            ;;
        esac
      done
      
    response=$(curl -X POST \
      --header "Authorization: token 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" \
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

bz_push() {
    git push
    
    # now we know the ticket is being worked on, set status to active...
    curl -X POST "https://berzerk-agile-dev-backend-production.up.railway.app/update" \
      --header "Authorization: Bearer bzdev" \
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

#bz_status() {
#    git status
#}
