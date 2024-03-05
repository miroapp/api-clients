# miro_api.EmbedsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_embed_item**](EmbedsApi.md#create_embed_item) | **POST** /v2/boards/{board_id}/embeds | Create embed item
[**delete_embed_item**](EmbedsApi.md#delete_embed_item) | **DELETE** /v2/boards/{board_id}/embeds/{item_id} | Delete embed item
[**get_embed_item**](EmbedsApi.md#get_embed_item) | **GET** /v2/boards/{board_id}/embeds/{item_id} | Get embed item
[**update_embed_item**](EmbedsApi.md#update_embed_item) | **PATCH** /v2/boards/{board_id}/embeds/{item_id} | Update embed item


# **create_embed_item**
> EmbedItem create_embed_item(board_id, embed_create_request)

Create embed item

Adds an embed item containing external content to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import embeds_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.embed_create_request import EmbedCreateRequest
from miro_api.model.embed_item import EmbedItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = embeds_api.EmbedsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the item.
    embed_create_request = EmbedCreateRequest(
        data=EmbedUrlData(
            mode="inline",
            preview_url="preview_url_example",
            url="https://www.youtube.com/watch?v=HlVSNEiFCBk",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=FixedRatioNoRotationGeometry(
            height=3.14,
            width=3.14,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # EmbedCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create embed item
        api_response = api_instance.create_embed_item(board_id, embed_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling EmbedsApi->create_embed_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the item. |
 **embed_create_request** | [**EmbedCreateRequest**](EmbedCreateRequest.md)|  |

### Return type

[**EmbedItem**](EmbedItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Embed item created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_embed_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_embed_item(board_id, item_id)

Delete embed item

Deletes an embed item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import embeds_api
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
    api_instance = embeds_api.EmbedsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete embed item
        api_response = api_instance.delete_embed_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling EmbedsApi->delete_embed_item: %s\n" % e)
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
**204** | Embed item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_embed_item**
> EmbedItem get_embed_item(board_id, item_id)

Get embed item

Retrieves information for a specific embed item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import embeds_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.embed_item import EmbedItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = embeds_api.EmbedsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get embed item
        api_response = api_instance.get_embed_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling EmbedsApi->get_embed_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to retrieve. |

### Return type

[**EmbedItem**](EmbedItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Embed item retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_embed_item**
> EmbedItem update_embed_item(board_id, item_id, embed_update_request)

Update embed item

Updates an embed item on a board based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import embeds_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.embed_update_request import EmbedUpdateRequest
from miro_api.model.embed_item import EmbedItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = embeds_api.EmbedsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to update.
    embed_update_request = EmbedUpdateRequest(
        data=EmbedUrlDataChanges(
            mode="inline",
            preview_url="preview_url_example",
            url="https://www.youtube.com/watch?v=HlVSNEiFCBk",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=FixedRatioNoRotationGeometry(
            height=3.14,
            width=3.14,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # EmbedUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update embed item
        api_response = api_instance.update_embed_item(board_id, item_id, embed_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling EmbedsApi->update_embed_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update the item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to update. |
 **embed_update_request** | [**EmbedUpdateRequest**](EmbedUpdateRequest.md)|  |

### Return type

[**EmbedItem**](EmbedItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Embed item updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

