# miro_api.FlowchartShapesExperimentalApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_shape_item_flowchart**](FlowchartShapesExperimentalApi.md#create_shape_item_flowchart) | **POST** /v2-experimental/boards/{board_id}/shapes | Create shape item
[**delete_shape_item_flowchart**](FlowchartShapesExperimentalApi.md#delete_shape_item_flowchart) | **DELETE** /v2-experimental/boards/{board_id}/shapes/{item_id} | Delete shape item
[**get_items_experimental**](FlowchartShapesExperimentalApi.md#get_items_experimental) | **GET** /v2-experimental/boards/{board_id}/items | Get items on board
[**get_shape_item_flowchart**](FlowchartShapesExperimentalApi.md#get_shape_item_flowchart) | **GET** /v2-experimental/boards/{board_id}/shapes/{item_id} | Get shape item
[**get_specific_item_experimental**](FlowchartShapesExperimentalApi.md#get_specific_item_experimental) | **GET** /v2-experimental/boards/{board_id}/items/{item_id} | Get specific item on board
[**update_shape_item_flowchart**](FlowchartShapesExperimentalApi.md#update_shape_item_flowchart) | **PATCH** /v2-experimental/boards/{board_id}/shapes/{item_id} | Update shape item


# **create_shape_item_flowchart**
> ShapeItem create_shape_item_flowchart(board_id, shape_create_request)

Create shape item

Adds a flowchart shape item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import flowchart_shapes_experimental_api
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
    api_instance = flowchart_shapes_experimental_api.FlowchartShapesExperimentalApi(api_client)
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
        api_response = api_instance.create_shape_item_flowchart(board_id, shape_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FlowchartShapesExperimentalApi->create_shape_item_flowchart: %s\n" % e)
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

# **delete_shape_item_flowchart**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_shape_item_flowchart(board_id, item_id)

Delete shape item

Deletes a flowchart shape item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import flowchart_shapes_experimental_api
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
    api_instance = flowchart_shapes_experimental_api.FlowchartShapesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete shape item
        api_response = api_instance.delete_shape_item_flowchart(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FlowchartShapesExperimentalApi->delete_shape_item_flowchart: %s\n" % e)
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

# **get_items_experimental**
> GenericItemCursorPaged get_items_experimental(board_id)

Get items on board

Retrieves a list of items for a specific board. You can retrieve all items on the board, a list of child items inside a parent item, or a list of specific types of items by specifying URL query parameter values.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import flowchart_shapes_experimental_api
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
    api_instance = flowchart_shapes_experimental_api.FlowchartShapesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board for which you want to retrieve the list of available items.
    limit = "10" # str |  (optional) if omitted the server will use the default value of "10"
    type = "shape" # str |  (optional) if omitted the server will use the default value of "shape"
    cursor = "cursor_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get items on board
        api_response = api_instance.get_items_experimental(board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FlowchartShapesExperimentalApi->get_items_experimental: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get items on board
        api_response = api_instance.get_items_experimental(board_id, limit=limit, type=type, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FlowchartShapesExperimentalApi->get_items_experimental: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board for which you want to retrieve the list of available items. |
 **limit** | **str**|  | [optional] if omitted the server will use the default value of "10"
 **type** | **str**|  | [optional] if omitted the server will use the default value of "shape"
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

# **get_shape_item_flowchart**
> ShapeItem get_shape_item_flowchart(board_id, item_id)

Get shape item

Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import flowchart_shapes_experimental_api
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
    api_instance = flowchart_shapes_experimental_api.FlowchartShapesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get shape item
        api_response = api_instance.get_shape_item_flowchart(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FlowchartShapesExperimentalApi->get_shape_item_flowchart: %s\n" % e)
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

# **get_specific_item_experimental**
> GenericItem get_specific_item_experimental(board_id, item_id)

Get specific item on board

Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import flowchart_shapes_experimental_api
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
    api_instance = flowchart_shapes_experimental_api.FlowchartShapesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get specific item on board
        api_response = api_instance.get_specific_item_experimental(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FlowchartShapesExperimentalApi->get_specific_item_experimental: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
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

# **update_shape_item_flowchart**
> ShapeItem update_shape_item_flowchart(board_id, item_id, shape_update_request)

Update shape item

Updates a flowchart shape item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import flowchart_shapes_experimental_api
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
    api_instance = flowchart_shapes_experimental_api.FlowchartShapesExperimentalApi(api_client)
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
        api_response = api_instance.update_shape_item_flowchart(board_id, item_id, shape_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FlowchartShapesExperimentalApi->update_shape_item_flowchart: %s\n" % e)
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

