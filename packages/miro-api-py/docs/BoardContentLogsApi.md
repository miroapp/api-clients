# miro_api.BoardContentLogsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_board_content_item_logs_fetch**](BoardContentLogsApi.md#enterprise_board_content_item_logs_fetch) | **GET** /v2/orgs/{org_id}/content-logs/items | Retrieve content change logs of board items


# **enterprise_board_content_item_logs_fetch**
> GetBoardItemContentLogsResponse enterprise_board_content_item_logs_fetch(org_id, _from, to)

Retrieve content change logs of board items

Retrieves content changes for board items within your organization. Content changes are actions that users can perform on board items, such as updating a sticky note's text. You can retrieve results for a specific time period. You can also filter results based on the board IDs and the emails of users who created, modified, or deleted a board item. Additionally, results can be paginated for easier viewing and processing. <br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>contentlogs:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin.</p> 

### Example


```python
import time
import miro_api
from miro_api.api import board_content_logs_api
from miro_api.model.get_board_item_content_logs_response import GetBoardItemContentLogsResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_content_logs_api.BoardContentLogsApi(api_client)
    org_id = "3074457345821141000" # str | Unique identifier of the organization.
    _from = dateutil_parser('2022-03-30T17:26:50Z') # datetime | Filter content logs based on the date and time when the board item was last modified. This is the start date and time for the modified date duration. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). 
    to = dateutil_parser('2023-03-30T17:26:50Z') # datetime | Filter content logs based on the date and time when the board item was last modified. This is the end date and time for the modified date duration. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). 
    board_ids = ["o9J_kzlUDmo=","u8J_kllZmDk="] # [str] | List of board IDs for which you want to retrieve the content logs. (optional)
    emails = ["someone@domain.com","someoneelse@domain.com"] # [str] | Filter content logs based on the list of emails of users who created, modified, or deleted the board item. (optional)
    cursor = "MTY2OTg4NTIwMDAwMHwxMjM=" # str | A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, set the cursor parameter equal to the cursor value you received in the response of the previous request.  (optional)
    limit = 1000 # int | The maximum number of results to return per call. If the number of logs in the response is greater than the limit specified, the response returns the cursor parameter with a value.  (optional) if omitted the server will use the default value of 1000
    sorting = "asc" # str | Sort order in which you want to view the result set based on the modified date. To sort by an ascending modified date, specify `asc`. To sort by a descending modified date, specify `desc`.  (optional) if omitted the server will use the default value of "asc"

    # example passing only required values which don't have defaults set
    try:
        # Retrieve content change logs of board items
        api_response = api_instance.enterprise_board_content_item_logs_fetch(org_id, _from, to)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardContentLogsApi->enterprise_board_content_item_logs_fetch: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Retrieve content change logs of board items
        api_response = api_instance.enterprise_board_content_item_logs_fetch(org_id, _from, to, board_ids=board_ids, emails=emails, cursor=cursor, limit=limit, sorting=sorting)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardContentLogsApi->enterprise_board_content_item_logs_fetch: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Unique identifier of the organization. |
 **_from** | **datetime**| Filter content logs based on the date and time when the board item was last modified. This is the start date and time for the modified date duration. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).  |
 **to** | **datetime**| Filter content logs based on the date and time when the board item was last modified. This is the end date and time for the modified date duration. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).  |
 **board_ids** | **[str]**| List of board IDs for which you want to retrieve the content logs. | [optional]
 **emails** | **[str]**| Filter content logs based on the list of emails of users who created, modified, or deleted the board item. | [optional]
 **cursor** | **str**| A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, set the cursor parameter equal to the cursor value you received in the response of the previous request.  | [optional]
 **limit** | **int**| The maximum number of results to return per call. If the number of logs in the response is greater than the limit specified, the response returns the cursor parameter with a value.  | [optional] if omitted the server will use the default value of 1000
 **sorting** | **str**| Sort order in which you want to view the result set based on the modified date. To sort by an ascending modified date, specify &#x60;asc&#x60;. To sort by a descending modified date, specify &#x60;desc&#x60;.  | [optional] if omitted the server will use the default value of "asc"

### Return type

[**GetBoardItemContentLogsResponse**](GetBoardItemContentLogsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response from the API that includes content logs of board items such as data, size of the data list, pagination cursor, and pagination limit.  |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

