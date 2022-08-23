#!/usr/bin/env bash

yarn generate

if [[ $(git status -s | wc -l | tr -d ' ') != 0 ]]; then
    echo "FAILED: "
    echo "  There are some differences between the generated code and commited code, see below: "
    echo
    git status -s
    exit 1
fi

