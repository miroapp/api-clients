# miro_api.ImagesApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_image_item_using_url**](ImagesApi.md#create_image_item_using_url) | **POST** /v2/boards/{board_id}/images | Create image item using URL
[**delete_image_item**](ImagesApi.md#delete_image_item) | **DELETE** /v2/boards/{board_id}/images/{item_id} | Delete image item
[**get_image_item**](ImagesApi.md#get_image_item) | **GET** /v2/boards/{board_id}/images/{item_id} | Get image item
[**update_image_item_using_url**](ImagesApi.md#update_image_item_using_url) | **PATCH** /v2/boards/{board_id}/images/{item_id} | Update image item using URL


# **create_image_item_using_url**
> ImageItem create_image_item_using_url(board_id, image_create_request)

Create image item using URL

Adds an image item to a board by specifying an image URL.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import images_api
from miro_api.model.image_create_request import ImageCreateRequest
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.image_item import ImageItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = images_api.ImagesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to create the item.
    image_create_request = ImageCreateRequest(
        data=ImageUrlData(
            title="Sample image title",
            url="https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=FixedRatioGeometry(
            height=3.14,
            width=3.14,
            rotation=3.14,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # ImageCreateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create image item using URL
        api_response = api_instance.create_image_item_using_url(board_id, image_create_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ImagesApi->create_image_item_using_url: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to create the item. |
 **image_create_request** | [**ImageCreateRequest**](ImageCreateRequest.md)|  |

### Return type

[**ImageItem**](ImageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Image item created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_image_item**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_image_item(board_id, item_id)

Delete image item

Deletes an image item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import images_api
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
    api_instance = images_api.ImagesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete image item
        api_response = api_instance.delete_image_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ImagesApi->delete_image_item: %s\n" % e)
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
**204** | Image item deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_image_item**
> ImageItem get_image_item(board_id, item_id)

Get image item

Retrieves information for a specific image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import images_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.image_item import ImageItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = images_api.ImagesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get image item
        api_response = api_instance.get_image_item(board_id, item_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ImagesApi->get_image_item: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to retrieve. |

### Return type

[**ImageItem**](ImageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image item retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_image_item_using_url**
> ImageItem update_image_item_using_url(board_id, item_id, image_update_request)

Update image item using URL

Updates an image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import images_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.image_update_request import ImageUpdateRequest
from miro_api.model.image_item import ImageItem
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = images_api.ImagesApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board where you want to update the item.
    item_id = "item_id_example" # str | Unique identifier (ID) of the item that you want to update.
    image_update_request = ImageUpdateRequest(
        data=ImageUrlDataChanges(
            title="Test image title",
            url="https://miro.com/static/images/page/mr-index/localization/en/slider/ideation_brainstorming.png",
        ),
        position=PositionChange(
            x=100,
            y=100,
        ),
        geometry=FixedRatioGeometry(
            height=3.14,
            width=3.14,
            rotation=3.14,
        ),
        parent=Parent(
            id="id_example",
        ),
    ) # ImageUpdateRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update image item using URL
        api_response = api_instance.update_image_item_using_url(board_id, item_id, image_update_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ImagesApi->update_image_item_using_url: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board where you want to update the item. |
 **item_id** | **str**| Unique identifier (ID) of the item that you want to update. |
 **image_update_request** | [**ImageUpdateRequest**](ImageUpdateRequest.md)|  |

### Return type

[**ImageItem**](ImageItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Image item updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

