#!/usr/bin/env bash
set -euo pipefail

target=../miro-api

rm -rf "$target/"{api,model}
openapi-generator-cli generate -i 'spec.json' -o "${target}" -g 'typescript-node' -t './typescript-node-template' -p 'npmName=@mirohq/miro-api' -p "npmVersion=$(jq .version < ../../packages/miro-api/package.json)"

./scripts/remove_duplicate_imports.sh

./scripts/generate_node_highlevel_models.ts | prettier --parser typescript >| "${target}/highlevel/index.ts"

prettier -w ./scripts ../../packages

