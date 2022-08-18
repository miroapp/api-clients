#!/usr/bin/env bash
set -euo pipefail

rm -rf ./docs
for docs in ./*/docs; do
    mkdir -p ./docs
    mv "$docs" "./docs/${docs/\/docs/}"
done
