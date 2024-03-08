# Miro api python client

## Requirements.

Python 3.7+

## Installation & Usage

This python library package is generated without supporting files like setup.py or requirements files

To be able to use it, you will need these dependencies in your own package that uses this library:

- urllib3 >= 1.25.3
- python-dateutil
- pydantic

## Getting Started

In your own code, to use this library to connect and interact with miro-api, you can run the following:

```python
import miro_api

client = miro_api.MiroApi('your access token')

client.create_board()
```
