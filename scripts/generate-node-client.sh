#!/usr/bin/env bash
set -euo pipefail

target=packages/typescript-node

rm -rf typescript-node/{api,model}
openapi-generator-cli generate -i 'spec.json' -o "${target}" -g 'typescript-node' -t 'generator/typescript-node-template' -p 'npmName=@mirohq/miro-node'
tsx generator/generate_node_highlevel_models.ts | prettier --parser typescript >| "${target}/nested-model/index.ts"

cd packages/typescript-node
yarn
yarn build
