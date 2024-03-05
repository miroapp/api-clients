#!/usr/bin/env bash
set -euo pipefail

target=../miro-api-py

rm -rf "$target/" # {api,model}
mkdir -p "$target/" # {api,model}

openapi-generator-cli generate \
    -i 'spec.json' \
    -o "${target}" \
    -g 'python' \
    -p 'packageName=miro_api' \
    -p "packageVersion=$(jq .version < ../../packages/miro-api/package.json)"
    # -t './typescript-node-template' \


# echo "Removing duplicate imports"

# ./scripts/remove_duplicate_imports.sh

# echo "Generating highlevel models"

# ./scripts/generate_node_highlevel_models.ts | prettier --parser typescript >| "${target}/highlevel/index.ts"

# echo "Running prettier"

# prettier -w ./scripts ../../packages --loglevel error



