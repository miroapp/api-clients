import json
from typing import Callable, Dict, Optional, Union
import urllib.parse
import os
import datetime

from miro_api.api_extended import MiroApiExtended
from miro_api.configuration import Configuration
from miro_api.api_client import ApiClient
from miro_api.rest import RESTClientObject
from miro_api.storage import Storage, InMemoryStorage, State

from . import __version__


class MiroApiClient(ApiClient):
    """Overwrite default_headers to set Authorization and User-Agent headers"""

    def __init__(self, access_token: Union[str, Callable[[], str]]) -> None:
        self.configuration = Configuration.get_default()
        self.rest_client = RESTClientObject(self.configuration)
        self.cookie = None
        self.miro_user_agent = f"miro-api-python:{__version__}"
        self.client_side_validation = self.configuration.client_side_validation
        self.access_token = access_token

    @property
    def default_headers(self) -> Dict[str, str]:
        return {
            "User-Agent": self.miro_user_agent,
            "Authorization": f"Bearer {self.access_token if isinstance(self.access_token, str) else self.access_token()}",
        }


class MiroApi(MiroApiExtended):
    """
    Exposes api endpoints as methods
    """

    def __init__(self, access_token: Union[str, Callable[[], str]]) -> None:
        """
        Initialize the client by passing an access token.

        ```python
        # Import the 'MiroApi' object
        from miro_api import MiroApi

        # Create a new instance of the 'MiroApi' object,
        # and pass the OAuth access token as a parameter
        api = MiroApi('<access_token>')

        # Use the 'MiroApi' instance to send a request to the Miro REST API,
        # and to create a new board in the team where the App is installed
        boards = api.create_board()
        ```
        """
        self.api_client = MiroApiClient(access_token)


class Miro:
    """
    This is the highlevel client
    """

    _api_client = ApiClient()
    _client_id: str
    _client_secret: str
    _redirect_url: str
    _storage: Storage

    def __init__(
        self,
        client_id: Optional[str] = None,
        client_secret: Optional[str] = None,
        redirect_url: Optional[str] = None,
        storage: Storage = InMemoryStorage(),
    ):
        """
        Initializes the Miro client with the given client id and client secret

        Parameters are optional if the environment variables are defined

            client_id: MIRO_CLIENT_ID
            client_secret: MIRO_CLIENT_SECRET
            redirect_url: MIRO_REDIRECT_URL

        This method will raise an Exception if any of these are not defined.

        Storage is used to persist state needed by the client (access token, refresh token).
        By default the client uses in memory storage for state. For production usage we recommend implementing one backed up by a permanent database.
        """
        self._client_id: str = client_id or os.environ.get("MIRO_CLIENT_ID") or ""
        self._client_secret: str = (
            client_secret or os.environ.get("MIRO_CLIENT_SECRET") or ""
        )
        self._redirect_url: str = (
            redirect_url or os.environ.get("MIRO_REDIRECT_URL") or ""
        )

        if not self._client_id:
            raise Exception(
                "miro-api: MIRO_CLIENT_ID environment variable or passing clientId is required"
            )
        if not self._client_secret:
            raise Exception(
                "miro-api: MIRO_CLIENT_SECRET environment variable or passing clientSecret is required"
            )
        if not self._redirect_url:
            raise Exception(
                "miro-api: MIRO_REDIRECT_URL environment variable or passing redirectUrl is required"
            )

        self._storage = storage

    @property
    def api(self) -> MiroApi:
        """Returns an instance of MiroApi using access token from given storage"""
        return MiroApi(lambda: self.access_token)

    @property
    def is_authorized(self) -> bool:
        """Returns True if there's a valid access token.
        If this is False then you will need to run Miro.exchange_code_for_access_token(code) with code received through OAuth 2 flow.
        """
        try:
            return bool(self.access_token)
        except Exception:
            return False

    @property
    def auth_url(self) -> str:
        """Returns a URL that user should be redirected to in order to authorize the application"""
        return self.get_auth_url()

    def get_auth_url(self, state=None, team_id=None) -> str:
        """Returns a URL that user should be redirected to in order to authorize the application, accepts an optional state argument and a teamId that will be used as a default"""
        auth = {
            "client_id": self._client_id,
            "redirect_uri": self._redirect_url,
            "response_type": "code",
        }
        if state:
            auth["state"] = state
        if team_id:
            auth["team_id"] = team_id

        return f"https://miro.com/oauth/authorize?{urllib.parse.urlencode(auth)}"

    def exchange_code_for_access_token(self, url_or_code) -> str:
        """Exchanges the authorization code for an access token by calling the token endpoint It will store the token information in storage for later reuse"""
        code = url_or_code
        if "?" in url_or_code:
            url = urllib.parse.urlparse(url_or_code)
            params = urllib.parse.parse_qs(url.query)
            if code_param := params.get("code", [""]):
                code = code_param[0]

        if not code:
            raise Exception("No code provided")

        return self._get_token(code=code)

    def revoke_token(self) -> None:
        """Revokes currently stored access token"""
        self.api.revoke_token(self.access_token)
        self._storage.set(None)

    def _get_token(self, code: str = "", refresh_token: str = "") -> str:
        token_url = "https://api.miro.com/v1/oauth/token"
        params = {
            "client_id": self._client_id,
            "client_secret": self._client_secret,
        }
        if code:
            params.update(
                {
                    "code": code,
                    "redirect_uri": self._redirect_url,
                    "grant_type": "authorization_code",
                }
            )
        elif refresh_token:
            params.update(
                {"refresh_token": refresh_token, "grant_type": "refresh_token"}
            )

        token_url = f"{token_url}?{urllib.parse.urlencode(params)}"

        response = self._api_client.call_api("POST", token_url)
        payload = json.loads(response.read().decode("utf-8"))

        state = State(
            payload["access_token"],
            payload.get("refresh_token"),
            (
                (
                    datetime.datetime.now()
                    + datetime.timedelta(seconds=payload["expires_in"] - 120)
                )
                if payload.get("payload")
                else None
            ),
        )

        self._storage.set(state)

        return state.access_token

    @property
    def access_token(self) -> str:
        """Returns currently stored access token. If it has expired the client will request a new access token using the stored refresh token."""
        state = self._storage.get()

        if not state or not state.access_token:
            raise Exception(
                "No access token stored, run exchangeCodeForAccessToken() first"
            )
        if (
            state.refresh_token
            and state.token_expires_at
            and state.token_expires_at < datetime.datetime.now()
        ):
            return self._get_token(refresh_token=state.refresh_token)

        return state.access_token
