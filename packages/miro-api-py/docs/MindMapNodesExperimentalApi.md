# miro_api.MindMapNodesExperimentalApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_mindmap_nodes_experimental**](MindMapNodesExperimentalApi.md#create_mindmap_nodes_experimental) | **POST** /v2-experimental/boards/{board_id}/mindmap_nodes | Create mind map node
[**delete_mindmap_node_experimental**](MindMapNodesExperimentalApi.md#delete_mindmap_node_experimental) | **DELETE** /v2-experimental/boards/{board_id}/mindmap_nodes/{item_id} | Delete mind map node
[**get_mindmap_node_experimental**](MindMapNodesExperimentalApi.md#get_mindmap_node_experimental) | **GET** /v2-experimental/boards/{board_id}/mindmap_nodes/{item_id} | Get specific mind map node
[**get_mindmap_nodes_experimental**](MindMapNodesExperimentalApi.md#get_mindmap_nodes_experimental) | **GET** /v2-experimental/boards/{board_id}/mindmap_nodes | Get mind map nodes


# **create_mindmap_nodes_experimental**
> MindmapItem create_mindmap_nodes_experimental(board_id, mindmap_create_request)

Create mind map node

Adds a mind map node to a board. A root node is the starting point of a mind map. A node that is created under a root node is a child node. For information on mind maps, use cases, mind map structure, and more, see the <a href=\"https://developers.miro.com/docs/mind-maps\" target=_blank>Mind Map Overview</a> page. <br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/><br/> <b>Known limitations on node placement: </b> Currently, the create API supports explicit positions for nodes. This means that users can only place nodes based on the x, y coordinates provided in the position parameters. If the position is not provided in the request, nodes default to coordinates x=0, y=0, effectively placing them at the center of the board. <br /><br /><b>Upcoming changes:</b> We understand the importance of flexibility in node placement. We are actively working on implementing changes to support positioning nodes relative to their parent node as well. This enhancement offers a more dynamic and intuitive mind mapping experience. <br /><br />Additionally, we are actively working on providing the update API, further enhancing the functionality of mind map APIs.

### Example


```python
import time
import miro_api
from miro_api.api import mind_map_nodes_experimental_api
from miro_api.model.mindmap_create_request import MindmapCreateRequest
from miro_api.model.mindmap_item import MindmapItem
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
    api_instance = mind_map_nodes_experimental_api.MindMapNodesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the item.
    mindmap_create_request = MindmapCreateRequest(
        data=MindmapDataForCreate(
            node_view=MindmapNode(
                data=MindmapNodeTextData(
                    type="text",
                    content="Sample text",
                ),
            ),
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
    ) # MindmapCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create mind map node
        api_response = api_instance.create_mindmap_nodes_experimental(board_id, mindmap_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling MindMapNodesExperimentalApi->create_mindmap_nodes_experimental: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the item. |
 **mindmap_create_request** | [**MindmapCreateRequest**](MindmapCreateRequest.md)|  |

### Return type

[**MindmapItem**](MindmapItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Mind map node created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_mindmap_node_experimental**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_mindmap_node_experimental(board_id, item_id)

Delete mind map node

Deletes a mind map node item and its child nodes from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import mind_map_nodes_experimental_api
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
    api_instance = mind_map_nodes_experimental_api.MindMapNodesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the mind map node.
    item_id = "item_id_example" # str | Unique identifier (ID) of the mind map node that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete mind map node
        api_response = api_instance.delete_mindmap_node_experimental(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling MindMapNodesExperimentalApi->delete_mindmap_node_experimental: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to delete the mind map node. |
 **item_id** | **str**| Unique identifier (ID) of the mind map node that you want to delete. |

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
**204** | Mind map node deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mindmap_node_experimental**
> MindmapItem get_mindmap_node_experimental(board_id, item_id)

Get specific mind map node

Retrieves information for a specific mind map node on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import mind_map_nodes_experimental_api
from miro_api.model.mindmap_item import MindmapItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = mind_map_nodes_experimental_api.MindMapNodesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a mind map node.
    item_id = "item_id_example" # str | Unique identifier (ID) of the mind map node that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get specific mind map node
        api_response = api_instance.get_mindmap_node_experimental(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling MindMapNodesExperimentalApi->get_mindmap_node_experimental: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a mind map node. |
 **item_id** | **str**| Unique identifier (ID) of the mind map node that you want to retrieve. |

### Return type

[**MindmapItem**](MindmapItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mind map node retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_mindmap_nodes_experimental**
> MindmapCursorPaged get_mindmap_nodes_experimental(board_id)

Get mind map nodes

Retrieves a list of mind map nodes for a specific board.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import mind_map_nodes_experimental_api
from miro_api.model.mindmap_cursor_paged import MindmapCursorPaged
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = mind_map_nodes_experimental_api.MindMapNodesExperimentalApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve mind map nodes.
    limit = "limit_example" # str | Maximum number of results returned (optional)
    cursor = "cursor_example" # str | Points to the next portion of the results set (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get mind map nodes
        api_response = api_instance.get_mindmap_nodes_experimental(board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling MindMapNodesExperimentalApi->get_mindmap_nodes_experimental: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get mind map nodes
        api_response = api_instance.get_mindmap_nodes_experimental(board_id, limit=limit, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling MindMapNodesExperimentalApi->get_mindmap_nodes_experimental: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve mind map nodes. |
 **limit** | **str**| Maximum number of results returned | [optional]
 **cursor** | **str**| Points to the next portion of the results set | [optional]

### Return type

[**MindmapCursorPaged**](MindmapCursorPaged.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Mind map nodes retrieved |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

