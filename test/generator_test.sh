#!/usr/bin/env bash
set -euo pipefail

yarn generate

# Check if there are uncommitted changes
# git status -s = list changes, 1 changed file per line
# git status -s | wc -l = Count number of lines, and thus changed files
# git status -s | wc -l | ts -d ' ' = remove spaces
if [[ $(git status -s | wc -l | tr -d ' ') != 0 ]]; then
    echo "FAILED: "
    echo "  There are some differences between the generated code and committed code, see below: "
    echo
    git status -s
    exit 1
fi

