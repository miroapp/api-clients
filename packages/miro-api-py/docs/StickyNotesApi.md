# miro_api.StickyNotesApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_sticky_note_item**](StickyNotesApi.md#create_sticky_note_item) | **POST** /v2/boards/{board_id}/sticky_notes | Create sticky note item
[**delete_sticky_note_item**](StickyNotesApi.md#delete_sticky_note_item) | **DELETE** /v2/boards/{board_id}/sticky_notes/{item_id} | Delete sticky note item
[**get_sticky_note_item**](StickyNotesApi.md#get_sticky_note_item) | **GET** /v2/boards/{board_id}/sticky_notes/{item_id} | Get sticky note item
[**update_sticky_note_item**](StickyNotesApi.md#update_sticky_note_item) | **PATCH** /v2/boards/{board_id}/sticky_notes/{item_id} | Update sticky note item


# **create_sticky_note_item**
> StickyNoteItem create_sticky_note_item(board_id, sticky_note_create_request)

Create sticky note item

Adds a sticky note item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import sticky_notes_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.sticky_note_create_request import StickyNoteCreateRequest
from miro_api.model.sticky_note_item import StickyNoteItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = sticky_notes_api.StickyNotesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the item.
    sticky_note_create_request = StickyNoteCreateRequest(
        data=StickyNoteData(
            content="Hello",
            shape="square",
        ),
        style=StickyNoteStyle(
            fill_color="gray",
            text_align="left",
            text_align_vertical="top",
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
    ) # StickyNoteCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create sticky note item
        api_response = api_instance.create_sticky_note_item(board_id, sticky_note_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling StickyNotesApi->create_sticky_note_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the item. |
 **sticky_note_create_request** | [**StickyNoteCreateRequest**](StickyNoteCreateRequest.md)|  |

### Return type

[**StickyNoteItem**](StickyNoteItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Sticky Note item created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_sticky_note_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_sticky_note_item(board_id, item_id)

Delete sticky note item

Deletes a sticky note item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import sticky_notes_api
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
    api_instance = sticky_notes_api.StickyNotesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete sticky note item
        api_response = api_instance.delete_sticky_note_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling StickyNotesApi->delete_sticky_note_item: %s\n" % e)
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
**204** | Sticky Note item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sticky_note_item**
> StickyNoteItem get_sticky_note_item(board_id, item_id)

Get sticky note item

Retrieves information for a specific sticky note item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import sticky_notes_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.sticky_note_item import StickyNoteItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = sticky_notes_api.StickyNotesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get sticky note item
        api_response = api_instance.get_sticky_note_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling StickyNotesApi->get_sticky_note_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to retrieve. |

### Return type

[**StickyNoteItem**](StickyNoteItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sticky Note item retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_sticky_note_item**
> StickyNoteItem update_sticky_note_item(board_id, item_id, sticky_note_update_request)

Update sticky note item

Updates a sticky note item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import sticky_notes_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.sticky_note_update_request import StickyNoteUpdateRequest
from miro_api.model.sticky_note_item import StickyNoteItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = sticky_notes_api.StickyNotesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to update.
    sticky_note_update_request = StickyNoteUpdateRequest(
        data=StickyNoteData(
            content="Hello",
            shape="square",
        ),
        style=StickyNoteStyle(
            fill_color="gray",
            text_align="left",
            text_align_vertical="top",
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
    ) # StickyNoteUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update sticky note item
        api_response = api_instance.update_sticky_note_item(board_id, item_id, sticky_note_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling StickyNotesApi->update_sticky_note_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update the item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to update. |
 **sticky_note_update_request** | [**StickyNoteUpdateRequest**](StickyNoteUpdateRequest.md)|  |

### Return type

[**StickyNoteItem**](StickyNoteItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Sticky Note item updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

