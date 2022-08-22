#!/usr/bin/env bash
set -euo pipefail

rm -rf typescript-node/{api,model}

openapi-generator-cli generate -i "spec.json" -o typescript-node -g typescript-node -t template -p npmName=miro-api

cd typescript-node

tsx scripts/generate_nested_models.ts | prettier --parser typescript >| nested-model/index.ts

yarn
npm run build
