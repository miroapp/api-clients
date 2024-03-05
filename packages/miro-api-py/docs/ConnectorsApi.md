# miro_api.ConnectorsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_connector**](ConnectorsApi.md#create_connector) | **POST** /v2/boards/{board_id}/connectors | Create connector
[**delete_connector**](ConnectorsApi.md#delete_connector) | **DELETE** /v2/boards/{board_id}/connectors/{connector_id} | Delete connector
[**get_connector**](ConnectorsApi.md#get_connector) | **GET** /v2/boards/{board_id}/connectors/{connector_id} | Get specific connector
[**get_connectors**](ConnectorsApi.md#get_connectors) | **GET** /v2/boards/{board_id}/connectors | Get connectors
[**update_connector**](ConnectorsApi.md#update_connector) | **PATCH** /v2/boards/{board_id}/connectors/{connector_id} | Update connector


# **create_connector**
> ConnectorWithLinks create_connector(board_id, connector_creation_data)

Create connector

Adds a connector to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import connectors_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.connector_with_links import ConnectorWithLinks
from miro_api.model.connector_creation_data import ConnectorCreationData
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = connectors_api.ConnectorsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board for which you want to create the connector.
    connector_creation_data = ConnectorCreationData(
        start_item=ItemConnectionCreationData(
            id="3458764517517818867",
            position=RelativeOffset(
                x="50%",
                y="0%",
            ),
            snap_to="auto",
        ),
        end_item=ItemConnectionCreationData(
            id="3458764517517818867",
            position=RelativeOffset(
                x="50%",
                y="0%",
            ),
            snap_to="auto",
        ),
        shape="straight",
        captions=[
            Caption(
                content="<p>Caption text</p>",
                position="50%",
                text_align_vertical="top",
            ),
        ],
        style=ConnectorStyle(
            color="#9510ac",
            end_stroke_cap="none",
            font_size="15",
            start_stroke_cap="none",
            stroke_color="#2d9bf0",
            stroke_style="normal",
            stroke_width="2.0",
            text_orientation="horizontal",
        ),
    ) # ConnectorCreationData | 

    # example passing only required values which don't have defaults set
    try:
        # Create connector
        api_response = api_instance.create_connector(board_id, connector_creation_data)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ConnectorsApi->create_connector: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board for which you want to create the connector. |
 **connector_creation_data** | [**ConnectorCreationData**](ConnectorCreationData.md)|  |

### Return type

[**ConnectorWithLinks**](ConnectorWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_connector**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_connector(board_id, connector_id)

Delete connector

Deletes the specified connector from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import connectors_api
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
    api_instance = connectors_api.ConnectorsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete the connector.
    connector_id = "connector_id_example" # str | Unique identifier (ID) of the connector that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete connector
        api_response = api_instance.delete_connector(board_id, connector_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ConnectorsApi->delete_connector: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to delete the connector. |
 **connector_id** | **str**| Unique identifier (ID) of the connector that you want to delete. |

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
**204** | Connector deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_connector**
> ConnectorWithLinks get_connector(board_id, connector_id)

Get specific connector

Retrieves information for a specific connector on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import connectors_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.connector_with_links import ConnectorWithLinks
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = connectors_api.ConnectorsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a specific connector.
    connector_id = "connector_id_example" # str | Unique identifier (ID) of the connector that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get specific connector
        api_response = api_instance.get_connector(board_id, connector_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ConnectorsApi->get_connector: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a specific connector. |
 **connector_id** | **str**| Unique identifier (ID) of the connector that you want to retrieve. |

### Return type

[**ConnectorWithLinks**](ConnectorWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_connectors**
> ConnectorsCursorPaged get_connectors(board_id)

Get connectors

Retrieves a list of connectors for a specific board.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let's say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import connectors_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.connectors_cursor_paged import ConnectorsCursorPaged
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = connectors_api.ConnectorsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to retrieve a list of connectors.
    limit = "10" # str |  (optional) if omitted the server will use the default value of "10"
    cursor = "cursor_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get connectors
        api_response = api_instance.get_connectors(board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ConnectorsApi->get_connectors: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get connectors
        api_response = api_instance.get_connectors(board_id, limit=limit, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ConnectorsApi->get_connectors: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to retrieve a list of connectors. |
 **limit** | **str**|  | [optional] if omitted the server will use the default value of "10"
 **cursor** | **str**|  | [optional]

### Return type

[**ConnectorsCursorPaged**](ConnectorsCursorPaged.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connectors retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_connector**
> ConnectorWithLinks update_connector(board_id, connector_id, connector_changes_data)

Update connector

Updates a connector on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import connectors_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.connector_changes_data import ConnectorChangesData
from miro_api.model.connector_with_links import ConnectorWithLinks
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = connectors_api.ConnectorsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board for which you want to update the connector.
    connector_id = "connector_id_example" # str | Unique identifier (ID) of the connector that you want to update.
    connector_changes_data = ConnectorChangesData(
        start_item=ItemConnectionChangesData(
            id="3458764517517818867",
            position=RelativeOffset(
                x="50%",
                y="0%",
            ),
            snap_to="auto",
        ),
        end_item=ItemConnectionChangesData(
            id="3458764517517818867",
            position=RelativeOffset(
                x="50%",
                y="0%",
            ),
            snap_to="auto",
        ),
        shape="straight",
        captions=[
            Caption(
                content="<p>Caption text</p>",
                position="50%",
                text_align_vertical="top",
            ),
        ],
        style=ConnectorStyle(
            color="#9510ac",
            end_stroke_cap="none",
            font_size="15",
            start_stroke_cap="none",
            stroke_color="#2d9bf0",
            stroke_style="normal",
            stroke_width="2.0",
            text_orientation="horizontal",
        ),
    ) # ConnectorChangesData | 

    # example passing only required values which don't have defaults set
    try:
        # Update connector
        api_response = api_instance.update_connector(board_id, connector_id, connector_changes_data)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ConnectorsApi->update_connector: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board for which you want to update the connector. |
 **connector_id** | **str**| Unique identifier (ID) of the connector that you want to update. |
 **connector_changes_data** | [**ConnectorChangesData**](ConnectorChangesData.md)|  |

### Return type

[**ConnectorWithLinks**](ConnectorWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connector updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

