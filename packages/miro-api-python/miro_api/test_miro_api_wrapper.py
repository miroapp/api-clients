import unittest
from unittest.mock import patch, MagicMock
import os
import json
from miro_api.miro_api_wrapper import Miro, InMemoryStorage, ApiClient, State
import datetime

class TestMiro(unittest.TestCase):
    def setUp(self):
        self.client_id = "test_client_id"
        self.client_secret = "test_client_secret"
        self.redirect_url = "http://localhost/"
        self.user_id = "test_user"
        self.code = "test_code"
        self.access_token = "test_access_token"
        self.refresh_token = "test_refresh_token"
        self.expires_in = 3600  # 1 hour

        # Mock environment variables if needed
        os.environ["MIRO_CLIENT_ID"] = self.client_id
        os.environ["MIRO_CLIENT_SECRET"] = self.client_secret
        os.environ["MIRO_REDIRECT_URL"] = self.redirect_url

        self.miro = Miro(
            client_id=self.client_id,
            client_secret=self.client_secret,
            redirect_url=self.redirect_url,
            storage=InMemoryStorage(),
        )

    def tearDown(self):
        # Clear environment variables if set during tests
        del os.environ["MIRO_CLIENT_ID"]
        del os.environ["MIRO_CLIENT_SECRET"]
        del os.environ["MIRO_REDIRECT_URL"]

    @patch.object(ApiClient, 'call_api')
    def test_exchange_code_for_access_token(self, mock_call_api):
        # Mocking the ApiClient response
        mock_response = MagicMock()
        mock_response.read.return_value = bytes(
            json.dumps({
                "access_token": self.access_token,
                "refresh_token": self.refresh_token,
                "expires_in": self.expires_in,
            }), 'utf-8'
        )
        mock_call_api.return_value = mock_response

        token = self.miro.exchange_code_for_access_token(self.user_id, self.code)

        self.assertEqual(token, self.access_token)
        mock_call_api.assert_called_once()

    @patch.object(ApiClient, 'call_api')
    def test_refresh_token(self, mock_call_api):
        # Setting up a state that requires token refresh
        expired_time = datetime.datetime.now() - datetime.timedelta(seconds=10)
        state = State(self.user_id, "old_access_token", self.refresh_token, expired_time)
        self.miro._storage.set(self.user_id, state)

        # Mocking ApiClient response for refresh
        mock_response = MagicMock()
        mock_response.read.return_value = bytes(
            json.dumps({
                "access_token": "new_access_token",
                "refresh_token": "new_refresh_token",
                "expires_in": self.expires_in,
            }), 'utf-8'
        )
        mock_call_api.return_value = mock_response

        new_token = self.miro.get_access_token(self.user_id)

        self.assertEqual(new_token, "new_access_token")
        mock_call_api.assert_called_once()

    @patch.object(InMemoryStorage, 'get')
    def test_is_authorized(self, mock_storage_get):
        # Mock storage to simulate authorized user
        mock_storage_get.return_value = State(self.user_id, self.access_token, None, None)

        self.assertTrue(self.miro.is_authorized(self.user_id))

        # Mock storage to simulate unauthorized user
        mock_storage_get.return_value = None

        self.assertFalse(self.miro.is_authorized(self.user_id))
