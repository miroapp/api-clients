# miro_api.ShapesApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_shape_item**](ShapesApi.md#create_shape_item) | **POST** /v2/boards/{board_id}/shapes | Create shape item
[**delete_shape_item**](ShapesApi.md#delete_shape_item) | **DELETE** /v2/boards/{board_id}/shapes/{item_id} | Delete shape item
[**get_shape_item**](ShapesApi.md#get_shape_item) | **GET** /v2/boards/{board_id}/shapes/{item_id} | Get shape item
[**update_shape_item**](ShapesApi.md#update_shape_item) | **PATCH** /v2/boards/{board_id}/shapes/{item_id} | Update shape item


# **create_shape_item**
> ShapeItem create_shape_item(board_id, shape_create_request)

Create shape item

Adds a shape item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import shapes_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.shape_item import ShapeItem
from miro_api.model.shape_create_request import ShapeCreateRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = shapes_api.ShapesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the item.
    shape_create_request = ShapeCreateRequest(
        data=ShapeData(
            content="Hello",
            shape="rectangle",
        ),
        style=ShapeStyle(
            border_color="border_color_example",
            border_opacity="border_opacity_example",
            border_style="normal",
            border_width="border_width_example",
            color="#1a1a1a",
            fill_color="#8fd14f",
            fill_opacity="fill_opacity_example",
            font_family="arial",
            font_size="font_size_example",
            text_align="left",
            text_align_vertical="top",
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
    ) # ShapeCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create shape item
        api_response = api_instance.create_shape_item(board_id, shape_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ShapesApi->create_shape_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the item. |
 **shape_create_request** | [**ShapeCreateRequest**](ShapeCreateRequest.md)|  |

### Return type

[**ShapeItem**](ShapeItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Shape item created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_shape_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_shape_item(board_id, item_id)

Delete shape item

Deletes a shape item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import shapes_api
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
    api_instance = shapes_api.ShapesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete shape item
        api_response = api_instance.delete_shape_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ShapesApi->delete_shape_item: %s\n" % e)
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
**204** | Shape item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shape_item**
> ShapeItem get_shape_item(board_id, item_id)

Get shape item

Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import shapes_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.shape_item import ShapeItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = shapes_api.ShapesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get shape item
        api_response = api_instance.get_shape_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ShapesApi->get_shape_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to retrieve. |

### Return type

[**ShapeItem**](ShapeItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Shape item retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_shape_item**
> ShapeItem update_shape_item(board_id, item_id, shape_update_request)

Update shape item

Updates a shape item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import shapes_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.shape_item import ShapeItem
from miro_api.model.shape_update_request import ShapeUpdateRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = shapes_api.ShapesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to update.
    shape_update_request = ShapeUpdateRequest(
        data=ShapeData(
            content="Hello",
            shape="rectangle",
        ),
        style=ShapeStyle(
            border_color="border_color_example",
            border_opacity="border_opacity_example",
            border_style="normal",
            border_width="border_width_example",
            color="#1a1a1a",
            fill_color="#8fd14f",
            fill_opacity="fill_opacity_example",
            font_family="arial",
            font_size="font_size_example",
            text_align="left",
            text_align_vertical="top",
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
    ) # ShapeUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update shape item
        api_response = api_instance.update_shape_item(board_id, item_id, shape_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ShapesApi->update_shape_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update the item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to update. |
 **shape_update_request** | [**ShapeUpdateRequest**](ShapeUpdateRequest.md)|  |

### Return type

[**ShapeItem**](ShapeItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Shape item updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

