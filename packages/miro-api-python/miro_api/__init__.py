# coding: utf-8
"""
Miro API python client exposes two classes: `MiroApi` and `Miro`

`MiroApi` class is the stateless low-level client.
It contains methods for backend-to-backend communication and to run automation scripts.
It enables passing the OAuth access token once, and then reusing it in subsequent calls.

`Miro` is the stateful high-level client.
It contains properties and methods to interact with Miro users. For example, to trigger the authorization flow.
The Miro methods are related to authorization and access token management.
"""

__version__ = "2.1.2"


from miro_api.miro_api_wrapper import MiroApi, Miro

MiroApi = MiroApi
Miro = Miro
