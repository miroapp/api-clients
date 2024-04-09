#!/usr/bin/env sh

# Update __version__ in __init__.py to one from pyproject.toml

INIT_PY_FILE=miro_api/__init__.py
TMP_FILE=$(mktemp)

sed -e 's/^__version__.*/__version__ = "'"$(poetry version -s)"'"/' "$INIT_PY_FILE" > "$TMP_FILE"
mv "$TMP_FILE" "$INIT_PY_FILE" 
