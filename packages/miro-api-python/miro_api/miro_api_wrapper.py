from miro_api.api import MiroApiEndpoints
from miro_api.api_client import ApiClient
from . import __version__

def MiroApi(access_token: str) -> MiroApiEndpoints:
    client = ApiClient()
    client.set_default_header('Authorization', f'Bearer {access_token}')
    client.user_agent = f'miro-api-python:{__version__}'
    return MiroApiEndpoints(client)
