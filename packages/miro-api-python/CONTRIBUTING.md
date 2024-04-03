## Requirements

Python 3.9+
[poetry](https://python-poetry.org/docs/)

## Install dependencies

    poetry install

## Run tests

    poetry run python -m unittest

## Publishing

- Update version in [pyproject.toml](./pyproject.toml)
- Push to main branch which will trigger the build and upload package to pypi, see [publish.yaml][../../.github/workflows/publish.yml]
