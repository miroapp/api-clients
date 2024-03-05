# miro_api.ItemsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_item**](ItemsApi.md#delete_item) | **DELETE** /v2/boards/{board_id_Platform}/items/{item_id} | Delete item
[**delete_item_experimental**](ItemsApi.md#delete_item_experimental) | **DELETE** /v2-experimental/boards/{board_id}/items/{item_id} | Delete item
[**get_items**](ItemsApi.md#get_items) | **GET** /v2/boards/{board_id_Platform}/items | Get items on board
[**get_items_within_frame**](ItemsApi.md#get_items_within_frame) | **GET** /v2/boards/{board_id}/items | Get items within frame
[**get_specific_item**](ItemsApi.md#get_specific_item) | **GET** /v2/boards/{board_id_Platform}/items/{item_id} | Get specific item on board
[**update_item_position_or_parent**](ItemsApi.md#update_item_position_or_parent) | **PATCH** /v2/boards/{board_id_Platform}/items/{item_id} | Update item position or parent


# **delete_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_item(board_id_platform, item_id)

Delete item

Deletes an item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import items_api
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
    api_instance = items_api.ItemsApi(api_client)
    board_id_platform = "board_id_Platform_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete item
        api_response = api_instance.delete_item(board_id_platform, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->delete_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id_platform** | **str**| Unique identifier (ID) of the board from which you want to delete the item. |
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
**204** | Item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_item_experimental**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_item_experimental(board_id, item_id)

Delete item

Deletes an item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import items_api
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
    api_instance = items_api.ItemsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete item
        api_response = api_instance.delete_item_experimental(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->delete_item_experimental: %s\n" % e)
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
**204** | Item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_items**
> GenericItemCursorPaged get_items(board_id_platform)

Get items on board

Retrieves a list of items for a specific board. You can retrieve all items on the board, a list of child items inside a parent item, or a list of specific types of items by specifying URL query parameter values.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import items_api
from miro_api.model.generic_item_cursor_paged import GenericItemCursorPaged
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
    api_instance = items_api.ItemsApi(api_client)
    board_id_platform = "board_id_Platform_example" # str | Unique identifier (ID) of the board for which you want to retrieve the list of available items.
    limit = "10" # str |  (optional) if omitted the server will use the default value of "10"
    type = "text" # str |  (optional)
    cursor = "cursor_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get items on board
        api_response = api_instance.get_items(board_id_platform)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->get_items: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get items on board
        api_response = api_instance.get_items(board_id_platform, limit=limit, type=type, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->get_items: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id_platform** | **str**| Unique identifier (ID) of the board for which you want to retrieve the list of available items. |
 **limit** | **str**|  | [optional] if omitted the server will use the default value of "10"
 **type** | **str**|  | [optional]
 **cursor** | **str**|  | [optional]

### Return type

[**GenericItemCursorPaged**](GenericItemCursorPaged.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Items retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_items_within_frame**
> GenericItemCursorPaged get_items_within_frame(board_id, parent_item_id)

Get items within frame

Retrieves a list of items within a specific frame. A frame is a parent item and all items within a frame are child items. This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import items_api
from miro_api.model.generic_item_cursor_paged import GenericItemCursorPaged
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
    api_instance = items_api.ItemsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board that contains the frame for which you want to retrieve the list of available items.
    parent_item_id = "parent_item_id_example" # str | ID of the frame for which you want to retrieve the list of available items.
    limit = "10" # str |  (optional) if omitted the server will use the default value of "10"
    type = "type_example" # str |  (optional)
    cursor = "cursor_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get items within frame
        api_response = api_instance.get_items_within_frame(board_id, parent_item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->get_items_within_frame: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get items within frame
        api_response = api_instance.get_items_within_frame(board_id, parent_item_id, limit=limit, type=type, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->get_items_within_frame: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board that contains the frame for which you want to retrieve the list of available items. |
 **parent_item_id** | **str**| ID of the frame for which you want to retrieve the list of available items. |
 **limit** | **str**|  | [optional] if omitted the server will use the default value of "10"
 **type** | **str**|  | [optional]
 **cursor** | **str**|  | [optional]

### Return type

[**GenericItemCursorPaged**](GenericItemCursorPaged.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Items within frame retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_specific_item**
> GenericItem get_specific_item(board_id_platform, item_id)

Get specific item on board

Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import items_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.generic_item import GenericItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = items_api.ItemsApi(api_client)
    board_id_platform = "board_id_Platform_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get specific item on board
        api_response = api_instance.get_specific_item(board_id_platform, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->get_specific_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id_platform** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to retrieve. |

### Return type

[**GenericItem**](GenericItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_item_position_or_parent**
> GenericItem update_item_position_or_parent(board_id_platform, item_id, generic_item_update)

Update item position or parent

Updates the position or the parent of an item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import items_api
from miro_api.model.generic_item_update import GenericItemUpdate
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.generic_item import GenericItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = items_api.ItemsApi(api_client)
    board_id_platform = "board_id_Platform_example" # str | Unique identifier (ID) of the board where you want to update the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to update.
    generic_item_update = GenericItemUpdate(
        parent=Parent(
            id="id_example",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
    ) # GenericItemUpdate | 

    # example passing only required values which don't have defaults set
    try:
        # Update item position or parent
        api_response = api_instance.update_item_position_or_parent(board_id_platform, item_id, generic_item_update)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ItemsApi->update_item_position_or_parent: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id_platform** | **str**| Unique identifier (ID) of the board where you want to update the item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to update. |
 **generic_item_update** | [**GenericItemUpdate**](GenericItemUpdate.md)|  |

### Return type

[**GenericItem**](GenericItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

