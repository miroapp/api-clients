#!/usr/bin/env sh

poetry run pdoc miro_api \
    '!miro_api.rest' \
    '!miro_api.api_response' \
    '!miro_api.client' \
    '!miro_api.configuration' \
    '!miro_api.autopaginated_endpoints' \
    '!miro_api.test_miro_api_wrapper' \
    '!miro_api.api_client' \
    '!miro_api.miro_api_wrapper' \
    '!miro_api.exceptions' \
    -d markdown -t ./docs-template -o docs-out 
