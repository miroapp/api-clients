# miro_api.FramesApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_frame_item**](FramesApi.md#create_frame_item) | **POST** /v2/boards/{board_id}/frames | Create frame
[**delete_frame_item**](FramesApi.md#delete_frame_item) | **DELETE** /v2/boards/{board_id}/frames/{item_id} | Delete frame
[**get_frame_item**](FramesApi.md#get_frame_item) | **GET** /v2/boards/{board_id}/frames/{item_id} | Get frame
[**update_frame_item**](FramesApi.md#update_frame_item) | **PATCH** /v2/boards/{board_id}/frames/{item_id} | Update frame


# **create_frame_item**
> FrameItem create_frame_item(board_id, frame_create_request)

Create frame

Adds a frame to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import frames_api
from miro_api.model.frame_item import FrameItem
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.frame_create_request import FrameCreateRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = frames_api.FramesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create a frame.
    frame_create_request = FrameCreateRequest(
        data=FrameChanges(
            format="custom",
            title="Sample frame title",
            type="freeform",
            show_content=True,
        ),
        style=FrameStyle(
            fill_color="#ffffffff",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=GeometryNoRotation(
            height=3.14,
            width=3.14,
        ),
    ) # FrameCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create frame
        api_response = api_instance.create_frame_item(board_id, frame_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FramesApi->create_frame_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create a frame. |
 **frame_create_request** | [**FrameCreateRequest**](FrameCreateRequest.md)|  |

### Return type

[**FrameItem**](FrameItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Frame created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_frame_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_frame_item(board_id, item_id)

Delete frame

Deletes a frame from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import frames_api
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
    api_instance = frames_api.FramesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the frame.
    item_id = "item_id_example" # str | Unique identifier (ID) of the frame that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete frame
        api_response = api_instance.delete_frame_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FramesApi->delete_frame_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to delete the frame. |
 **item_id** | **str**| Unique identifier (ID) of the frame that you want to delete. |

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
**204** | Frame deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_frame_item**
> FrameItem get_frame_item(board_id, item_id)

Get frame

Retrieves information for a specific frame on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import frames_api
from miro_api.model.frame_item import FrameItem
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
    api_instance = frames_api.FramesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board that contains the frame that you want to retrieve
    item_id = "item_id_example" # str | Unique identifier (ID) of the frame that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get frame
        api_response = api_instance.get_frame_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FramesApi->get_frame_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board that contains the frame that you want to retrieve |
 **item_id** | **str**| Unique identifier (ID) of the frame that you want to retrieve. |

### Return type

[**FrameItem**](FrameItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Frame retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_frame_item**
> FrameItem update_frame_item(board_id, item_id, frame_update_request)

Update frame

Updates a frame on a board based on the data, style, or geometry properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import frames_api
from miro_api.model.frame_update_request import FrameUpdateRequest
from miro_api.model.frame_item import FrameItem
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
    api_instance = frames_api.FramesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update the frame.
    item_id = "item_id_example" # str | Unique identifier (ID) of the frame that you want to update.
    frame_update_request = FrameUpdateRequest(
        data=FrameChanges(
            format="custom",
            title="Sample frame title",
            type="freeform",
            show_content=True,
        ),
        style=FrameStyle(
            fill_color="#ffffffff",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=GeometryNoRotation(
            height=3.14,
            width=3.14,
        ),
    ) # FrameUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update frame
        api_response = api_instance.update_frame_item(board_id, item_id, frame_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling FramesApi->update_frame_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update the frame. |
 **item_id** | **str**| Unique identifier (ID) of the frame that you want to update. |
 **frame_update_request** | [**FrameUpdateRequest**](FrameUpdateRequest.md)|  |

### Return type

[**FrameItem**](FrameItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Frame updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

