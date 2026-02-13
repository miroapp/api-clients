# Miro Python client

The Miro Python client library offers a comprehensive interface for integrating Miro's REST API capabilities into Python-based applications.

You can use the client to implement back-end functionality in your Miro app, such as:

- OAuth 2.0 authorization
- Programmatic data exchange with an external system
- Data storage in the app backend

The library provides two main components:

- A **stateful high-level client** (`Miro` class) for handling user interactions, including authorization and token management.
- A **stateless low-level client** (`MiroApi` object) for back-end communications, automation scripts, and operations requiring the OAuth access token. Additionally, `MiroApi` methods enable retrieving organization information and managing teams and users (available via Enterprise API for users on an Enterprise plan).

## Prerequisites

- Python 3.9 or higher.

## Installation

To integrate the `miro_api` package into your project, you can use either **pip** or **poetry** as follows:

**Using [pip](https://github.com/pypa/pip)**:

```bash
pip install miro_api
```

**Using [poetry](https://python-poetry.org/docs/)**:

```bash
poetry add miro_api
```

## Testing Preview Packages

When a pull request is opened with changes to this library, a preview version is automatically published to GitHub Packages. This allows you to test changes before they're merged and released to PyPI.

### Prerequisites

To install packages from GitHub Packages, you'll need:
- A GitHub account with access to the repository
- A GitHub Personal Access Token (PAT) with `read:packages` scope

### Step 1: Create a GitHub Personal Access Token

1. Go to [GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)](https://github.com/settings/tokens)
2. Click **"Generate new token (classic)"**
3. Give it a descriptive name (e.g., "GitHub Packages Read")
4. Select the **`read:packages`** scope
5. Click **"Generate token"**
6. **Copy the token** (you won't be able to see it again)

### Step 2: Configure Package Installation

#### Option A: Using pip with environment variables

Set your GitHub credentials as environment variables:

```bash
export GITHUB_USERNAME="your-github-username"
export GITHUB_TOKEN="your-personal-access-token"
```

Then install the preview package:

```bash
pip install miro-api==2.2.4.dev123+abc1234 \
  --index-url https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@pypi.pkg.github.com/miroapp/simple/
```

#### Option B: Using pip with inline credentials

```bash
pip install miro-api==2.2.4.dev123+abc1234 \
  --index-url https://your-username:your-token@pypi.pkg.github.com/miroapp/simple/
```

#### Option C: Using Poetry

Add the GitHub Packages repository to your project:

```bash
poetry source add --priority=supplemental github https://pypi.pkg.github.com/miroapp/simple/
poetry config http-basic.github your-username your-token
```

Then add the preview package:

```bash
poetry add miro-api==2.2.4.dev123+abc1234
```

Or add to `pyproject.toml`:

```toml
[[tool.poetry.source]]
name = "github"
url = "https://pypi.pkg.github.com/miroapp/simple/"
priority = "supplemental"

[tool.poetry.dependencies]
miro-api = {version = "2.2.4.dev123+abc1234", source = "github"}
```

#### Option D: Using pip with configuration file

Create or update `~/.pip/pip.conf` (Linux/macOS) or `%APPDATA%\pip\pip.ini` (Windows):

```ini
[global]
extra-index-url = https://your-username:your-token@pypi.pkg.github.com/miroapp/simple/
```

Then install normally:

```bash
pip install miro-api==2.2.4.dev123+abc1234
```

### Step 3: Finding Preview Package Versions

1. Navigate to the pull request you want to test
2. Look for the bot comment titled **"🐍 Python Preview Package Published"**
3. Note the preview version number (format: `2.2.4.dev123+abc1234`)
4. Use the version in the installation commands above

### Security Best Practices

- ⚠️ **Never commit tokens to version control**
- Use environment variables or secure credential storage
- Keep your `pip.conf` or `.pypirc` files private
- Add these files to `.gitignore`:
  ```
  .pypirc
  pip.conf
  pip.ini
  ```
- Rotate tokens periodically
- Use tokens with minimal required scopes (`read:packages` only)

### Troubleshooting

**401 Unauthorized Error:**
- Verify your GitHub token has `read:packages` scope
- Check that your username and token are correct
- Ensure the token hasn't expired

**404 Package Not Found:**
- Verify the package version exists in the PR comment
- Ensure you have access to the repository
- Check that the workflow has completed successfully

**Connection Issues:**
- Ensure you're using `https://` in the index URL
- Verify your network allows connections to `pypi.pkg.github.com`
- Try using a VPN if behind a corporate firewall

## Configuration

The high-level client (`Miro`) automatically loads app configuration from the following environment variables:

- `MIRO_CLIENT_ID`
- `MIRO_CLIENT_SECRET`
- `MIRO_REDIRECT_URL`

Alternatively, these values can be passed directly to the `Miro` constructor.

## Quickstart

To start using the high-level `Miro` client, import it, and then create a new instance:

```python
import miro_api

miro = miro_api.Miro()

print(miro.auth_url)
```

Or, initialize it with custom configuration:

```python
import miro_api

miro = miro_api.Miro(
  client_id='<your_app_client_id>>',
  client_secret='<your_app_client_secret>',
  redirect_url='https://example.com/miro/redirect/url',
)

print(miro.auth_url)
```

To start using the low-level `MiroApi` client, import it, and then create a new instance:

```python
import miro_api

api = miro_api.MiroApi('<access_token>')

print(api.get_boards())
```

## OAuth authorization

The `Miro` client provides methods to manage the OAuth authorization flow:

1. Check if the current user has authorized the app: `miro.is_authorized`.
2. Redirect for authorization if needed: `miro.auth_url`.
3. Exchange authorization code for an access token: `miro.exchange_code_for_access_token(code)`.
4. Make API calls on behalf of the authorized user: `miro.api.get_board(board_id)`

## Storage

For storing user access and refresh tokens, the client library requires persistent storage. The client automatically refreshes access tokens before making API calls, if they are nearing their expiration time.

By default, persistent storage uses an in-memory dictionary to store state information. Pass `storage` to the `Miro` constructor as an option:

```python
miro = miro_api.Miro(
  storage=CustomMiroStorage(),
)
```

To support the client library storage functionality in your app, implement the following `get` and `set` interface:

```python
class Storage(ABC):
    """Abstract class used by the stateful client to set and get State."""

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

- [Miro Python library reference](https://miroapp.github.io/api-clients/python/)

### Examples

See an example of implementing a simple server using Flask library in the [example](https://github.com/miroapp/api-clients/tree/main/packages/miro-api-python/example) directory.
