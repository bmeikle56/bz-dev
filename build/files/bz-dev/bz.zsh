#!/bin/zsh

source "${0:A:h}/config.zsh"

bz() {
  local subcommand=$1
  shift

  case "$subcommand" in
    make)
      bz_make "$@"
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
    update)
      bz_update "$@"
      ;;
    pause)
      bz_pause "$@"
      ;;
    kill)
      bz_kill "$@"
      ;;
    help)
      bz_help "$@"
      ;;
    *)
      echo "type $(bz_color "bz help") to list commands"
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
        echo "use flags $(bz_color "-r") $(bz_color "-k") $(bz_color "-n") only"
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
                echo "use flags $(bz_color "-r") $(bz_color "-k") only"
        return 1
        ;;
    esac
  done
    
    response=$(curl -s -X POST "$backend_url/update" \
      --header "Authorization: Bearer $auth_token" \
      --header "Content-Type: application/json" \
      --data "{
        \"username\": \"$dev\",
        \"key\": \"$key\",
        \"repo\": \"$repo\",
        \"status\": \"active\"
      }")

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
        echo "use flag $(bz_color "-k") only"
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
      echo "use flags $(bz_color "-r") $(bz_color "-k") only"
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

bz_update() {
  json=$(curl -s -X POST "$backend_url/fetch" \
    --header "Authorization: Bearer $auth_token" \
    --header "Content-Type: application/json" \
    --data "{\"username\": \"${dev}\"}")

  echo "{"

  echo "$json" | jq -r '
    .repos[] |
    (
      "  " + .repo + " {\n" +
      ( .tickets | map("    " + .key) | join("\n") ) +
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
        echo "use flag $(bz_color "-r") only"
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

bz_help() {
    echo "{"
    bz_color "  bz make -r=<repo> -k=<key> -n=<notes>\n  bz clear\n  bz delete -r=<repo>\n  bz workon -r=<repo> -k=<key>\n  bz update\n  bz pause -r=<repo> -k=<key>\n  bz kill -r=<repo>"
    echo "}"
}

bz_color() {
  # print all arguments in bright magenta (95) and bold (1)
  echo -e "\e[1;95m$*\e[0m"
}
