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
    echo test statement1: "$(git status -s)"
    echo test statement2: "$(git status -s | wc -l)"
    echo test statement3: "$(git status -s | wc -l | tr -d ' ')"
    echo test statement4: "$(git status -s | wc -l | tr -d ' ')" != 0
    echo
    git status -s
    exit 1
fi

