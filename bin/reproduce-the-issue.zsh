#!/bin/zsh

node node_modules/.bin/testcafe \
    -c 1 "chrome --auto-open-devtools-for-tabs" \
    tests/Sample.ts
