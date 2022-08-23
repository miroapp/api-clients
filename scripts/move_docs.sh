#!/usr/bin/env bash
set -euo pipefail

rm -rf ./docs

for docs in ./packages/*/docs; do
    mkdir -p ./docs
    newdir=$(basename "$(dirname "$docs")")
    mv "$docs" "./docs/$newdir"
done
