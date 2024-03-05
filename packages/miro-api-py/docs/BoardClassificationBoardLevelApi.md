# miro_api.BoardClassificationBoardLevelApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_dataclassification_board_get**](BoardClassificationBoardLevelApi.md#enterprise_dataclassification_board_get) | **GET** /v2/orgs/{org_id}/teams/{team_id}/boards/{board_id}/data-classification | Get board classification
[**enterprise_dataclassification_board_set**](BoardClassificationBoardLevelApi.md#enterprise_dataclassification_board_set) | **POST** /v2/orgs/{org_id}/teams/{team_id}/boards/{board_id}/data-classification | Update board classification


# **enterprise_dataclassification_board_get**
> BoardDataClassificationLabel enterprise_dataclassification_board_get(org_id, team_id, board_id)

Get board classification

Retrieves board classification for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_classification_board_level_api
from miro_api.model.board_data_classification_label import BoardDataClassificationLabel
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_classification_board_level_api.BoardClassificationBoardLevelApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization
    team_id = "3074457345618265000" # str | id of the team
    board_id = "o9J_kzlUDmo=" # str | Unique identifier of the board that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get board classification
        api_response = api_instance.enterprise_dataclassification_board_get(org_id, team_id, board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardClassificationBoardLevelApi->enterprise_dataclassification_board_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |
 **team_id** | **str**| id of the team |
 **board_id** | **str**| Unique identifier of the board that you want to retrieve. |

### Return type

[**BoardDataClassificationLabel**](BoardDataClassificationLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board classification |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_dataclassification_board_set**
> BoardDataClassificationLabel enterprise_dataclassification_board_set(org_id, team_id, board_id, data_classification_label_id)

Update board classification

Updates board classification for an existing board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_classification_board_level_api
from miro_api.model.board_data_classification_label import BoardDataClassificationLabel
from miro_api.model.data_classification_label_id import DataClassificationLabelId
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_classification_board_level_api.BoardClassificationBoardLevelApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization
    team_id = "3074457345618265000" # str | id of the team
    board_id = "o9J_kzlUDmo=" # str | Unique identifier of the board that you want to update.
    data_classification_label_id = DataClassificationLabelId(
        label_id="3000457366756290996",
    ) # DataClassificationLabelId | 

    # example passing only required values which don't have defaults set
    try:
        # Update board classification
        api_response = api_instance.enterprise_dataclassification_board_set(org_id, team_id, board_id, data_classification_label_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardClassificationBoardLevelApi->enterprise_dataclassification_board_set: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |
 **team_id** | **str**| id of the team |
 **board_id** | **str**| Unique identifier of the board that you want to update. |
 **data_classification_label_id** | [**DataClassificationLabelId**](DataClassificationLabelId.md)|  |

### Return type

[**BoardDataClassificationLabel**](BoardDataClassificationLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board classification |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

