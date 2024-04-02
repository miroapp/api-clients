# Miro API python client

## Requirements.

Python 3.9+

## Installation & Usage

Install the `miro_api` package to your project. Example using [poetry](https://python-poetry.org/docs/):

    poetry add miro_api

## Getting Started

```python
import miro_api

client = miro_api.MiroApi('your access token')

print(client.create_board())
```
