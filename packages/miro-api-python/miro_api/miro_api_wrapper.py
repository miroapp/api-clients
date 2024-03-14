from dataclasses import dataclass
import json
from typing import Callable, Any, Dict, Optional, Union
from abc import ABC, abstractmethod
import urllib.parse
import os
import datetime

from miro_api.api import MiroApiEndpoints
from miro_api.configuration import Configuration
from miro_api.api_client import ApiClient
from miro_api.rest import RESTClientObject

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


def MiroApi(access_token: Union[str, Callable[[], str]]) -> MiroApiEndpoints:
    client = MiroApiClient(access_token)
    return MiroApiEndpoints(client)


@dataclass
class State:
    user_id: str
    access_token: str
    refresh_token: Optional[str]
    token_expires_at: Optional[datetime.datetime]


class Storage(ABC):
    @abstractmethod
    def set(self, key: str, val: Optional[State]) -> None:
        pass

    @abstractmethod
    def get(self, key: str) -> Optional[State]:
        pass


class InMemoryStorage(Storage):
    def __init__(self):
        self.data: Dict[str, Optional[State]] = {}

    def set(self, key: str, val: Optional[State]) -> None:
        self.data[key] = val

    def get(self, key: str) -> Optional[State]:
        return self.data[key]


class Miro:
    _api_client = ApiClient()

    def __init__(
        self,
        client_id: Optional[str] = None,
        client_secret: Optional[str] = None,
        redirect_url: Optional[str] = None,
        storage: Storage = InMemoryStorage(),
        logger: Optional[Callable[[Any], None]] = None,
        base_path: str = "https://api.miro.com",
    ):
        self.client_id: str = client_id or os.environ.get("MIRO_CLIENT_ID") or ""
        self.client_secret: str = client_secret or os.environ.get('MIRO_CLIENT_SECRET') or ""
        self.redirect_url: str = redirect_url or os.environ.get("MIRO_REDIRECT_URL") or ""

        if not client_id:
            raise Exception(
                "miro-api: MIRO_CLIENT_ID or passing options.clientId is required"
            )
        if not client_secret:
            raise Exception(
                "miro-api: MIRO_CLIENT_SECRET or passing options.clientSecret is required"
            )
        if not redirect_url:
            raise Exception(
                "miro-api: MIRO_REDIRECT_URL or passing options.redirectUrl is required"
            )

        self.logger = logger or (print if os.environ.get("MIRO_DEBUG") else None)
        self.base_path = base_path
        self._storage = storage

    def as_user_with_id(self, user_id):
        return MiroApi(
            lambda: self.get_access_token(user_id),
        )

    def is_authorized(self, user_id):
        try:
            return bool(self.get_access_token(user_id))
        except Exception:
            return False

    @property
    def auth_url(self):
        return self.get_auth_url()

    def get_auth_url(self, state=None, team_id=None):
        auth = {
            "client_id": self.client_id,
            "redirect_uri": self.redirect_url,
            "response_type": "code",
        }
        if state:
            auth["state"] = state
        if team_id:
            auth["team_id"] = team_id

        return urllib.parse.urljoin(
            self.base_path.replace("api.", ""),
            f"/oauth/authorize?{urllib.parse.urlencode(auth)}",
        )

    def exchange_code_for_access_token(self, user_id, url_or_code):
        code = url_or_code
        if "?" in url_or_code:
            url = urllib.parse.urlparse(url_or_code)
            params = urllib.parse.parse_qs(url.query)
            if code_param := params.get("code", [""]):
                code = code_param[0]

        if not code:
            raise Exception("No code provided")

        return self._get_token(user_id, code=code)

    def revoke_token(self, user_id):
        self.as_user_with_id(user_id).revoke_token(self.get_access_token(user_id))
        self._storage.set(user_id, None)

    def _get_token(self, user_id, code: str = "", refresh_token: str = "") -> str:
        token_url = urllib.parse.urljoin(self.base_path, "/v1/oauth/token")
        params = {
            "client_id": self.client_id,
            "client_secret": self.client_secret,
        }
        if code:
            params.update(
                {
                    "code": code,
                    "redirect_uri": self.redirect_url,
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
            user_id,
            payload["access_token"],
            payload.get("refresh_token"),
            (
                datetime.datetime.now()
                + datetime.timedelta(seconds=payload["expires_in"] - 120)
            )
            if payload.get("payload")
            else None,
        )

        self._storage.set(user_id, state)

        return state.access_token

    def get_access_token(self, user_id: str) -> str:
        state = self._storage.get(user_id)

        if not state or not state.access_token:
            raise Exception(
                "No access token stored, run exchangeCodeForAccessToken() first"
            )
        if (
            state.refresh_token
            and state.token_expires_at
            and state.token_expires_at < datetime.datetime.now()
        ):
            return self._get_token(user_id, refresh_token=state.refresh_token)

        return state.access_token
