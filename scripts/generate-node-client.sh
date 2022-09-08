#!/usr/bin/env bash
set -euo pipefail

target=packages/typescript-node

rm -rf "$target/"{api,model}
openapi-generator-cli generate -i 'spec.json' -o "${target}" -g 'typescript-node' -t 'generator/typescript-node-template' -p 'npmName=@mirohq/miro-node' -p "npmVersion=$(jq .version < ./packages/typescript-node/package.json)"
scripts/remove_duplicate_imports.sh

./scripts/generate_node_highlevel_models.ts | prettier --parser typescript >| "${target}/highlevel/index.ts"

prettier -w ./scripts ./generator ./packages/typescript-node

cd packages/typescript-node

yarn
yarn build
