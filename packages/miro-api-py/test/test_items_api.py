"""
    Miro Developer Platform

    <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro's Developer Platform 2.0.   # noqa: E501

    The version of the OpenAPI document: v2.0
    Generated by: https://openapi-generator.tech
"""


import unittest

import miro_api
from miro_api.api.items_api import ItemsApi  # noqa: E501


class TestItemsApi(unittest.TestCase):
    """ItemsApi unit test stubs"""

    def setUp(self):
        self.api = ItemsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_delete_item(self):
        """Test case for delete_item

        Delete item  # noqa: E501
        """
        pass

    def test_delete_item_experimental(self):
        """Test case for delete_item_experimental

        Delete item  # noqa: E501
        """
        pass

    def test_get_items(self):
        """Test case for get_items

        Get items on board  # noqa: E501
        """
        pass

    def test_get_items_within_frame(self):
        """Test case for get_items_within_frame

        Get items within frame  # noqa: E501
        """
        pass

    def test_get_specific_item(self):
        """Test case for get_specific_item

        Get specific item on board  # noqa: E501
        """
        pass

    def test_update_item_position_or_parent(self):
        """Test case for update_item_position_or_parent

        Update item position or parent  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
