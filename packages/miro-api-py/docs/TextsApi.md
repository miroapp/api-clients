# miro_api.TextsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_text_item**](TextsApi.md#create_text_item) | **POST** /v2/boards/{board_id}/texts | Create text item
[**delete_text_item**](TextsApi.md#delete_text_item) | **DELETE** /v2/boards/{board_id}/texts/{item_id} | Delete text item
[**get_text_item**](TextsApi.md#get_text_item) | **GET** /v2/boards/{board_id}/texts/{item_id} | Get text item
[**update_text_item**](TextsApi.md#update_text_item) | **PATCH** /v2/boards/{board_id}/texts/{item_id} | Update text item


# **create_text_item**
> TextItem create_text_item(board_id, text_create_request)

Create text item

Adds a text item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import texts_api
from miro_api.model.text_item import TextItem
from miro_api.model.text_create_request import TextCreateRequest
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
    api_instance = texts_api.TextsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the item.
    text_create_request = TextCreateRequest(
        data=TextData(
            content="Hello",
        ),
        style=TextStyle(
            color="#1a1a1a",
            fill_color="#e6e6e6",
            fill_opacity="fill_opacity_example",
            font_family="arial",
            font_size="font_size_example",
            text_align="left",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=WidthOnlyAdjustableGeometry(
            rotation=3.14,
            width=3.14,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # TextCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create text item
        api_response = api_instance.create_text_item(board_id, text_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TextsApi->create_text_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the item. |
 **text_create_request** | [**TextCreateRequest**](TextCreateRequest.md)|  |

### Return type

[**TextItem**](TextItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Text item created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_text_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_text_item(board_id, item_id)

Delete text item

Deletes a text item from the board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import texts_api
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
    api_instance = texts_api.TextsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete text item
        api_response = api_instance.delete_text_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TextsApi->delete_text_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to delete the item. |
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
**204** | Text item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_text_item**
> TextItem get_text_item(board_id, item_id)

Get text item

Retrieves information for a specific text item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import texts_api
from miro_api.model.text_item import TextItem
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
    api_instance = texts_api.TextsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get text item
        api_response = api_instance.get_text_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TextsApi->get_text_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to retrieve. |

### Return type

[**TextItem**](TextItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Text item retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_text_item**
> TextItem update_text_item(board_id, item_id, text_update_request)

Update text item

Updates a text item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import texts_api
from miro_api.model.text_item import TextItem
from miro_api.model.text_update_request import TextUpdateRequest
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
    api_instance = texts_api.TextsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to update.
    text_update_request = TextUpdateRequest(
        data=TextData(
            content="Hello",
        ),
        style=TextStyle(
            color="#1a1a1a",
            fill_color="#e6e6e6",
            fill_opacity="fill_opacity_example",
            font_family="arial",
            font_size="font_size_example",
            text_align="left",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=WidthOnlyAdjustableGeometry(
            rotation=3.14,
            width=3.14,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # TextUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update text item
        api_response = api_instance.update_text_item(board_id, item_id, text_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TextsApi->update_text_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update the item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to update. |
 **text_update_request** | [**TextUpdateRequest**](TextUpdateRequest.md)|  |

### Return type

[**TextItem**](TextItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Text item updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

