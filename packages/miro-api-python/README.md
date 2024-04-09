# Miro Python client

## Miro python API client library

The Miro python API client is a library that enables Miro REST API functionality in Miro apps based on python.

You can use the client to implement backend functionality in your Miro app, such as:

- OAuth 2.0 authorization
- Programmatic data exchange with an external system
- Data storage in the app backend.

The Miro python library makes a stateful high-level client, and stateless low-level client available:

- The `Miro` class is the stateful high-level client. \
  It contains properties and methods to interact with Miro users. For example, to trigger the authorization flow. \
  The `Miro` methods are related to authorization and access token management.
- The `MiroApi` object is the stateless low-level client. \
  It contains properties and methods for backend-to-backend communication and to run automation scripts. \
  It enables passing the OAuth access token once, and then reusing it in subsequent calls. \
  The `MiroApi` methods enable creating and getting boards associated with the current access token, performing CRUD operations on board items, as well as retrieving organization information and managing teams and users (available on Enterprise API for users on an Enterprise plan.)

## Prerequisites

Python 3.9+

# Getting Started

## Installation

Install the `miro_api` package to your project.

Example using [pip](https://github.com/pypa/pip):

    pip install miro_api

Example using [poetry](https://python-poetry.org/docs/):

    poetry add miro_api

## Configuration

By default, the high-level client loads the app configuration from the following environment variables:

- `MIRO_CLIENT_ID`
- `MIRO_CLIENT_SECRET`
- `MIRO_REDIRECT_URL`

## Quick start

To start using the high-level `Miro` client, import it, and then create a new instance:

```python
import miro_api

miro = miro_api.Miro()

print(miro.api.create_board())
```

Alternatively, you can pass these values to the constructor when you create a new `Miro` instance:

```python
import miro_api

miro = miro_api.Miro(
  clientId='<your_app_client_id>>',
  clientSecret='<your_app_client_secret>',
  redirectUrl='https://example.com/miro/redirect/url',
)
```

To start using the low-level `MiroApi` client, import it, and then create a new instance:

```python
import miro_api

api = miro_api.MiroApi('<access_token>')

print(api.create_board())
```

## OAuth authorization

The `Miro` client features all the necessary methods and options to complete Miro authorization flows, and to make API calls:

1. Check if the current user has authorized the app: `miro.is_authorized`
2. If the user hasn't yet authorized the app, request the user to authorize the app by redirecting them to: `miro.auth_url`
3. As part of the authorization flow, exchange the user temporary authorization code for an access token in the return URL request handler: `miro.exchange_code_for_access_token(code)`
4. Make API calls on behalf of the authorized user: `miro.api.get_board(board_id)`

### Usage Guide

## Storage

The client library requires persistent storage for user access and refresh tokens. \
The client automatically refreshes access tokens before making API calls, if they are nearing their expiration time.

By default, persistent storage uses an in memory dictionary to store state information. \
Pass `storage` to the `Miro` constructor as an option:

```python
miro = miro_api.Miro(
  storage=CustomMiroStorage(),
)
```

To support the client library storage functionality in your app, implement the following get and set interface:

```python
class Storage(ABC):
    """Abstract class that's used by the stateful client to set and get State."""

    @abstractmethod
    def set(self, state: Optional[State]) -> None:
        pass

    @abstractmethod
    def get(self) -> Optional[State]:
        pass
```

> 🚧
>
> For production deployments, we recommend using a custom implementation backed by a database.

### Reference

https://miroapp.github.io/api-clients/python/

### Examples and Tutorials

An example of implementing a simple server using Flask library can be found in the [`example`](`./example/app.py`) directory.
