# miro_api.WebhooksExperimentalApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_board_subscription**](WebhooksExperimentalApi.md#create_board_subscription) | **POST** /v2-experimental/webhooks/board_subscriptions | Create webhook subscription
[**delete_subscription_by_id**](WebhooksExperimentalApi.md#delete_subscription_by_id) | **DELETE** /v2-experimental/webhooks/subscriptions/{subscription_id} | Delete webhook subscription
[**get_subscription_by_id**](WebhooksExperimentalApi.md#get_subscription_by_id) | **GET** /v2-experimental/webhooks/subscriptions/{subscription_id} | Get specific webhook subscription
[**get_user_subscriptions**](WebhooksExperimentalApi.md#get_user_subscriptions) | **GET** /v2-experimental/webhooks/subscriptions | Get webhook subscriptions
[**update_board_subscription**](WebhooksExperimentalApi.md#update_board_subscription) | **PATCH** /v2-experimental/webhooks/board_subscriptions/{subscription_id} | Update webhook subscription


# **create_board_subscription**
> BoardSubscription create_board_subscription(create_board_subscription_request)

Create webhook subscription

Creates a webhook subscription to receive notifications when an item on a board is updated. Subscriptions are created per user, per board. You can create multiple subscriptions. We currently support all board items barring tags, connectors, and comments. Changes in item position do not trigger an event at the moment.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import webhooks_experimental_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.create_board_subscription_request import CreateBoardSubscriptionRequest
from miro_api.model.board_subscription import BoardSubscription
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = webhooks_experimental_api.WebhooksExperimentalApi(api_client)
    create_board_subscription_request = CreateBoardSubscriptionRequest(
        board_id="board_id_example",
        callback_url="https://yourwebhooklistener.com/v2/webhooks_endpoint",
        status="enabled",
    ) # CreateBoardSubscriptionRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create webhook subscription
        api_response = api_instance.create_board_subscription(create_board_subscription_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling WebhooksExperimentalApi->create_board_subscription: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_board_subscription_request** | [**CreateBoardSubscriptionRequest**](CreateBoardSubscriptionRequest.md)|  |

### Return type

[**BoardSubscription**](BoardSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Subscription created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_subscription_by_id**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_subscription_by_id(subscription_id)

Delete webhook subscription

Deletes the specified webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import webhooks_experimental_api
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
    api_instance = webhooks_experimental_api.WebhooksExperimentalApi(api_client)
    subscription_id = "subscription_id_example" # str | Unique identifier (ID) of the subscription that you want to delete

    # example passing only required values which don't have defaults set
    try:
        # Delete webhook subscription
        api_response = api_instance.delete_subscription_by_id(subscription_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling WebhooksExperimentalApi->delete_subscription_by_id: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier (ID) of the subscription that you want to delete |

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
**204** | Subscription deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_subscription_by_id**
> GenericSubscription get_subscription_by_id(subscription_id)

Get specific webhook subscription

Retrieves information for a specific webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import webhooks_experimental_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.generic_subscription import GenericSubscription
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = webhooks_experimental_api.WebhooksExperimentalApi(api_client)
    subscription_id = "subscription_id_example" # str | Unique identifier (ID) of the subscription that you want to retrieve

    # example passing only required values which don't have defaults set
    try:
        # Get specific webhook subscription
        api_response = api_instance.get_subscription_by_id(subscription_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling WebhooksExperimentalApi->get_subscription_by_id: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Unique identifier (ID) of the subscription that you want to retrieve |

### Return type

[**GenericSubscription**](GenericSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_subscriptions**
> GenericSubscriptionsCursorPaged get_user_subscriptions()

Get webhook subscriptions

Retrieves information about all webhook subscriptions for a specific user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import webhooks_experimental_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.generic_subscriptions_cursor_paged import GenericSubscriptionsCursorPaged
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = webhooks_experimental_api.WebhooksExperimentalApi(api_client)
    limit = "10" # str |  (optional) if omitted the server will use the default value of "10"
    cursor = "cursor_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get webhook subscriptions
        api_response = api_instance.get_user_subscriptions(limit=limit, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling WebhooksExperimentalApi->get_user_subscriptions: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **str**|  | [optional] if omitted the server will use the default value of "10"
 **cursor** | **str**|  | [optional]

### Return type

[**GenericSubscriptionsCursorPaged**](GenericSubscriptionsCursorPaged.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscriptions retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_board_subscription**
> BoardSubscription update_board_subscription(subscription_id, update_board_subscription_request)

Update webhook subscription

Updates the status or the callback URL of an existing webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import webhooks_experimental_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.board_subscription import BoardSubscription
from miro_api.model.update_board_subscription_request import UpdateBoardSubscriptionRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = webhooks_experimental_api.WebhooksExperimentalApi(api_client)
    subscription_id = "subscription_id_example" # str | 
    update_board_subscription_request = UpdateBoardSubscriptionRequest(
        callback_url="https://yourwebhooklistener.com/v2/webhooks_endpoint",
        status="enabled",
    ) # UpdateBoardSubscriptionRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update webhook subscription
        api_response = api_instance.update_board_subscription(subscription_id, update_board_subscription_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling WebhooksExperimentalApi->update_board_subscription: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**|  |
 **update_board_subscription_request** | [**UpdateBoardSubscriptionRequest**](UpdateBoardSubscriptionRequest.md)|  |

### Return type

[**BoardSubscription**](BoardSubscription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Subscription updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

