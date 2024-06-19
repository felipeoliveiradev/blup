#!/bin/bash

# Função recursiva para trocar "project" por "project" em pastas e arquivos
function replace_project_project() {
  local dir="$1"

  # Loop em todos os arquivos e pastas na pasta atual
  for item in "$dir"/*; do
    # Se for um arquivo, faça a substituição
    if [ -f "$item" ]; then
      if [[ "$item" =~ .*\.project.* ]]; then
        new_name="${item%.*}.project.${item##*.}"
        mv "$item" "$new_name"
      fi
    # Se for uma pasta, chame a função recursivamente
    elif [ -d "$item" ]; then
      if [[ "$item" =~ .*\.project.* ]]; then
        new_name="${item%.*}.project"
        mv "$item" "$new_name"
        replace_project_project "$new_name"
      else
        replace_project_project "$item"
      fi
    fi
  done
}

# Comece a recursão na pasta atual
replace_project_project .