# miro_api.AppCardsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_app_card_item**](AppCardsApi.md#create_app_card_item) | **POST** /v2/boards/{board_id}/app_cards | Create app card item
[**delete_app_card_item**](AppCardsApi.md#delete_app_card_item) | **DELETE** /v2/boards/{board_id}/app_cards/{item_id} | Delete app card item
[**get_app_card_item**](AppCardsApi.md#get_app_card_item) | **GET** /v2/boards/{board_id}/app_cards/{item_id} | Get app card item
[**update_app_card_item**](AppCardsApi.md#update_app_card_item) | **PATCH** /v2/boards/{board_id}/app_cards/{item_id} | Update app card item


# **create_app_card_item**
> AppCardItem create_app_card_item(board_id, app_card_create_request)

Create app card item

Adds an app card item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import app_cards_api
from miro_api.model.app_card_create_request import AppCardCreateRequest
from miro_api.model.app_card_item import AppCardItem
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = app_cards_api.AppCardsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the item.
    app_card_create_request = AppCardCreateRequest(
        data=AppCardDataChanges(
            description="Sample app card description",
            fields=[
                CustomField(
                    fill_color="#2fa9e3",
                    icon_shape="round",
                    icon_url="https://cdn-icons-png.flaticon.com/512/5695/5695864.png",
                    text_color="#1a1a1a",
                    tooltip="Completion status indicator",
                    value="Status: in progress",
                ),
            ],
            status="disconnected",
            title="sample app card item",
        ),
        style=AppCardStyle(
            fill_color="#2d9bf0",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=Geometry(
            height=60,
            rotation=3.14,
            width=320,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # AppCardCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create app card item
        api_response = api_instance.create_app_card_item(board_id, app_card_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling AppCardsApi->create_app_card_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the item. |
 **app_card_create_request** | [**AppCardCreateRequest**](AppCardCreateRequest.md)|  |

### Return type

[**AppCardItem**](AppCardItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | App card item created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_app_card_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_app_card_item(board_id, item_id)

Delete app card item

Deletes an app card item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import app_cards_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = app_cards_api.AppCardsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete an item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete app card item
        api_response = api_instance.delete_app_card_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling AppCardsApi->delete_app_card_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to delete an item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to delete. |

### Return type

**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | App card item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_card_item**
> AppCardItem get_app_card_item(board_id, item_id)

Get app card item

Retrieves information for a specific app card item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import app_cards_api
from miro_api.model.app_card_item import AppCardItem
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = app_cards_api.AppCardsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get app card item
        api_response = api_instance.get_app_card_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling AppCardsApi->get_app_card_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to retrieve. |

### Return type

[**AppCardItem**](AppCardItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | App card item retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_app_card_item**
> AppCardItem update_app_card_item(board_id, item_id, app_card_update_request)

Update app card item

Updates an app card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import app_cards_api
from miro_api.model.app_card_item import AppCardItem
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.app_card_update_request import AppCardUpdateRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = app_cards_api.AppCardsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to update.
    app_card_update_request = AppCardUpdateRequest(
        data=AppCardDataChanges(
            description="Sample app card description",
            fields=[
                CustomField(
                    fill_color="#2fa9e3",
                    icon_shape="round",
                    icon_url="https://cdn-icons-png.flaticon.com/512/5695/5695864.png",
                    text_color="#1a1a1a",
                    tooltip="Completion status indicator",
                    value="Status: in progress",
                ),
            ],
            status="disconnected",
            title="sample app card item",
        ),
        style=AppCardStyle(
            fill_color="#2d9bf0",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=Geometry(
            height=60,
            rotation=3.14,
            width=320,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # AppCardUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update app card item
        api_response = api_instance.update_app_card_item(board_id, item_id, app_card_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling AppCardsApi->update_app_card_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update the item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to update. |
 **app_card_update_request** | [**AppCardUpdateRequest**](AppCardUpdateRequest.md)|  |

### Return type

[**AppCardItem**](AppCardItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Card item updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

