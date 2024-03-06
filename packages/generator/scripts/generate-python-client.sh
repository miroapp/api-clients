#!/usr/bin/env bash
set -euo pipefail

target=../miro-api-python

rm -rf "${target}/miro_api/"

openapi-generator-cli generate \
    -i 'spec.json' \
    -o "${target}" \
    -g 'python' \
    -p 'generateSourceCodeOnly=true' \
    -p 'packageName=miro_api' \
    -p "packageVersion=$(jq .version < ../../packages/miro-api/package.json)" \
    -t './python-template' \
    | grep -v 'writing file' \
    | sed 's/^/  openapi-generator > /'


echo "Removing duplicate imports"
./scripts/remove_duplicate_imports.sh "${target}/miro_api/api/__init__.py"

echo "Remove fluff"

rm -r "${target}/miro_api/docs"
rm -r "${target}/miro_api/test"
rm "${target}/miro_api/api/"*"_api.py"
rm "${target}/miro_api_README.md"

# echo "Generating highlevel models"
# TODO


