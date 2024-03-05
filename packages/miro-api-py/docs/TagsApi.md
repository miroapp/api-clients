# miro_api.TagsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attach_tag_to_item**](TagsApi.md#attach_tag_to_item) | **POST** /v2/boards/{board_id}/items/{item_id} | Attach tag to item
[**create_tag**](TagsApi.md#create_tag) | **POST** /v2/boards/{board_id}/tags | Create tag
[**delete_tag**](TagsApi.md#delete_tag) | **DELETE** /v2/boards/{board_id}/tags/{tag_id} | Delete tag
[**get_items_by_tag**](TagsApi.md#get_items_by_tag) | **GET** /v2/boards/{board_id_PlatformTags}/items | Get items by tag
[**get_tag**](TagsApi.md#get_tag) | **GET** /v2/boards/{board_id}/tags/{tag_id} | Get tag
[**get_tags_from_board**](TagsApi.md#get_tags_from_board) | **GET** /v2/boards/{board_id}/tags | Get tags from board
[**get_tags_from_item**](TagsApi.md#get_tags_from_item) | **GET** /v2/boards/{board_id}/items/{item_id}/tags | Get tags from item
[**remove_tag_from_item**](TagsApi.md#remove_tag_from_item) | **DELETE** /v2/boards/{board_id}/items/{item_id} | Remove tag from item
[**update_tag**](TagsApi.md#update_tag) | **PATCH** /v2/boards/{board_id}/tags/{tag_id} | Update tag


# **attach_tag_to_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} attach_tag_to_item(board_id, item_id, tag_id)

Attach tag to item

Attach an existing tag to the specified item. Card and sticky note items can have up to 8 tags. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:   [Remove tag from item](https://developers.miro.com/reference/remove-tag-from-item),  [Update tag](https://developers.miro.com/reference/update-tag),  [Delete tag](https://developers.miro.com/reference/delete-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board with the item that you want to add a tag to.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item to which you want to add a tag.
    tag_id = "tag_id_example" # str | Unique identifier (ID) of the tag you want to add to the item.

    # example passing only required values which don't have defaults set
    try:
        # Attach tag to item
        api_response = api_instance.attach_tag_to_item(board_id, item_id, tag_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->attach_tag_to_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board with the item that you want to add a tag to. |
 **item_id** | **str**| Unique identifier (ID) of the item to which you want to add a tag. |
 **tag_id** | **str**| Unique identifier (ID) of the tag you want to add to the item. |

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
**204** | Add a tag to an item |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_tag**
> TagWithLinks create_tag(board_id, tag_create_request)

Create tag

Creates a tag on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.tag_with_links import TagWithLinks
from miro_api.model.tag_create_request import TagCreateRequest
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the tag.
    tag_create_request = TagCreateRequest(
        fill_color="red",
        title="to do",
    ) # TagCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create tag
        api_response = api_instance.create_tag(board_id, tag_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->create_tag: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the tag. |
 **tag_create_request** | [**TagCreateRequest**](TagCreateRequest.md)|  |

### Return type

[**TagWithLinks**](TagWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Tag created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_tag**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_tag(board_id, tag_id)

Delete tag

Deletes the specified tag from the board. The tag is also removed from all cards and sticky notes on the board. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:  [Attach tag to item](https://developers.miro.com/reference/attach-tag-to-item),  [Remove tag from item](https://developers.miro.com/reference/remove-tag-from-item),  [Update tag](https://developers.miro.com/reference/update-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to delete a specific tag.
    tag_id = "tag_id_example" # str | Unique identifier (ID) of the tag that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete tag
        api_response = api_instance.delete_tag(board_id, tag_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->delete_tag: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to delete a specific tag. |
 **tag_id** | **str**| Unique identifier (ID) of the tag that you want to delete. |

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
**204** | Tag deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_items_by_tag**
> ItemPagedResponse get_items_by_tag(board_id_platform_tags, tag_id)

Get items by tag

Retrieves all the items that have the specified tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.item_paged_response import ItemPagedResponse
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id_platform_tags = "board_id_PlatformTags_example" # str | Unique identifier (ID) of the board where you want to retrieve a specific tag.
    tag_id = "tag_id_example" # str | Unique identifier (ID) of the tag that you want to retrieve.
    limit = "limit_example" # str |  (optional)
    offset = "offset_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get items by tag
        api_response = api_instance.get_items_by_tag(board_id_platform_tags, tag_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->get_items_by_tag: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get items by tag
        api_response = api_instance.get_items_by_tag(board_id_platform_tags, tag_id, limit=limit, offset=offset)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->get_items_by_tag: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id_platform_tags** | **str**| Unique identifier (ID) of the board where you want to retrieve a specific tag. |
 **tag_id** | **str**| Unique identifier (ID) of the tag that you want to retrieve. |
 **limit** | **str**|  | [optional]
 **offset** | **str**|  | [optional]

### Return type

[**ItemPagedResponse**](ItemPagedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Item with certain tag |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tag**
> TagWithLinks get_tag(board_id, tag_id)

Get tag

Retrieves information for a specific tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.tag_with_links import TagWithLinks
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to retrieve a specific tag.
    tag_id = "tag_id_example" # str | Unique identifier (ID) of the tag that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get tag
        api_response = api_instance.get_tag(board_id, tag_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->get_tag: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to retrieve a specific tag. |
 **tag_id** | **str**| Unique identifier (ID) of the tag that you want to retrieve. |

### Return type

[**TagWithLinks**](TagWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag retrieved by id |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tags_from_board**
> TagsPagedResponse get_tags_from_board(board_id)

Get tags from board

Retrieves all the tags from the specified board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from miro_api.model.tags_paged_response import TagsPagedResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board whose tags you want to retrieve.
    limit = "limit_example" # str |  (optional)
    offset = "offset_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get tags from board
        api_response = api_instance.get_tags_from_board(board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->get_tags_from_board: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get tags from board
        api_response = api_instance.get_tags_from_board(board_id, limit=limit, offset=offset)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->get_tags_from_board: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board whose tags you want to retrieve. |
 **limit** | **str**|  | [optional]
 **offset** | **str**|  | [optional]

### Return type

[**TagsPagedResponse**](TagsPagedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board tags retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tags_from_item**
> GetTagsResponse get_tags_from_item(board_id, item_id)

Get tags from item

Retrieves all the tags from the specified item.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.get_tags_response import GetTagsResponse
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board with the item whose tags you want to retrieve.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item whose tags you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get tags from item
        api_response = api_instance.get_tags_from_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->get_tags_from_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board with the item whose tags you want to retrieve. |
 **item_id** | **str**| Unique identifier (ID) of the item whose tags you want to retrieve. |

### Return type

[**GetTagsResponse**](GetTagsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get tags from an item |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_tag_from_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} remove_tag_from_item(board_id, item_id, tag_id)

Remove tag from item

Removes the specified tag from the specified item. The tag still exists on the board. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:  [Attach tag to item](https://developers.miro.com/reference/attach-tag-to-item),   [Update tag](https://developers.miro.com/reference/update-tag),  [Delete tag](https://developers.miro.com/reference/delete-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board with the item that you want to remove a tag from.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to remove the tag from.
    tag_id = "tag_id_example" # str | Unique identifier (ID) of the tag that you want to remove from the item.

    # example passing only required values which don't have defaults set
    try:
        # Remove tag from item
        api_response = api_instance.remove_tag_from_item(board_id, item_id, tag_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->remove_tag_from_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board with the item that you want to remove a tag from. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to remove the tag from. |
 **tag_id** | **str**| Unique identifier (ID) of the tag that you want to remove from the item. |

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
**204** | Tag removed from an item |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_tag**
> TagWithLinks update_tag(board_id, tag_id, tag_update_request)

Update tag

Updates a tag based on the data properties provided in the request body. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:  [Attach tag to item](https://developers.miro.com/reference/attach-tag-to-item),  [Remove tag from item](https://developers.miro.com/reference/remove-tag-from-item),   [Delete tag](https://developers.miro.com/reference/delete-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import tags_api
from miro_api.model.tag_with_links import TagWithLinks
from miro_api.model.tag_update_request import TagUpdateRequest
from miro_api.model.attach_tag_to_item400_response import AttachTagToItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tags_api.TagsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update a specific tag.
    tag_id = "tag_id_example" # str | Unique identifier (ID) of the tag that you want to update.
    tag_update_request = TagUpdateRequest(
        fill_color="red",
        title="done",
    ) # TagUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update tag
        api_response = api_instance.update_tag(board_id, tag_id, tag_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TagsApi->update_tag: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update a specific tag. |
 **tag_id** | **str**| Unique identifier (ID) of the tag that you want to update. |
 **tag_update_request** | [**TagUpdateRequest**](TagUpdateRequest.md)|  |

### Return type

[**TagWithLinks**](TagWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tag updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

