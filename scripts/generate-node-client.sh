#!/usr/bin/env bash
set -euo pipefail

spec_file=spec.json

scripts/fetch-spec.mjs > "$spec_file"

rm -rf typescript-node/{api,model}

openapi-generator-cli generate -i "$spec_file" -o typescript-node -g typescript-node -t template -p npmName=miro-api

cd typescript-node

tsx scripts/generate_high_level_models.ts | prettier --parser typescript >| highlevel.ts

yarn
npm run build
