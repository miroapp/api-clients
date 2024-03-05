# miro_api.BoardClassificationTeamLevelApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_dataclassification_team_boards_bulk**](BoardClassificationTeamLevelApi.md#enterprise_dataclassification_team_boards_bulk) | **PATCH** /v2/orgs/{org_id}/teams/{team_id}/data-classification | Bulk update boards classification
[**enterprise_dataclassification_team_settings_get**](BoardClassificationTeamLevelApi.md#enterprise_dataclassification_team_settings_get) | **GET** /v2/orgs/{org_id}/teams/{team_id}/data-classification-settings | Get team settings
[**enterprise_dataclassification_team_settings_set**](BoardClassificationTeamLevelApi.md#enterprise_dataclassification_team_settings_set) | **PATCH** /v2/orgs/{org_id}/teams/{team_id}/data-classification-settings | Update team settings


# **enterprise_dataclassification_team_boards_bulk**
> UpdateBoardsDataClassificationLabel enterprise_dataclassification_team_boards_bulk(org_id, team_id, update_boards_data_classification_label_request)

Bulk update boards classification

Updates board classification for not-classified only or all boards in an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_classification_team_level_api
from miro_api.model.update_boards_data_classification_label_request import UpdateBoardsDataClassificationLabelRequest
from miro_api.model.update_boards_data_classification_label import UpdateBoardsDataClassificationLabel
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_classification_team_level_api.BoardClassificationTeamLevelApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization
    team_id = "3074457345618265000" # str | id of the team
    update_boards_data_classification_label_request = UpdateBoardsDataClassificationLabelRequest(
        label_id=3000457366756291000,
        not_classified_only=True,
    ) # UpdateBoardsDataClassificationLabelRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Bulk update boards classification
        api_response = api_instance.enterprise_dataclassification_team_boards_bulk(org_id, team_id, update_boards_data_classification_label_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardClassificationTeamLevelApi->enterprise_dataclassification_team_boards_bulk: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |
 **team_id** | **str**| id of the team |
 **update_boards_data_classification_label_request** | [**UpdateBoardsDataClassificationLabelRequest**](UpdateBoardsDataClassificationLabelRequest.md)|  |

### Return type

[**UpdateBoardsDataClassificationLabel**](UpdateBoardsDataClassificationLabel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Number of updated boards |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_dataclassification_team_settings_get**
> DataClassificationTeamSettings enterprise_dataclassification_team_settings_get(org_id, team_id)

Get team settings

Retrieves board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_classification_team_level_api
from miro_api.model.data_classification_team_settings import DataClassificationTeamSettings
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_classification_team_level_api.BoardClassificationTeamLevelApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization
    team_id = "3074457345618265000" # str | id of the team

    # example passing only required values which don't have defaults set
    try:
        # Get team settings
        api_response = api_instance.enterprise_dataclassification_team_settings_get(org_id, team_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardClassificationTeamLevelApi->enterprise_dataclassification_team_settings_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |
 **team_id** | **str**| id of the team |

### Return type

[**DataClassificationTeamSettings**](DataClassificationTeamSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team board classification settings |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_dataclassification_team_settings_set**
> DataClassificationTeamSettings enterprise_dataclassification_team_settings_set(org_id, team_id, update_team_settings_request)

Update team settings

Updates board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_classification_team_level_api
from miro_api.model.update_team_settings_request import UpdateTeamSettingsRequest
from miro_api.model.data_classification_team_settings import DataClassificationTeamSettings
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_classification_team_level_api.BoardClassificationTeamLevelApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization
    team_id = "3074457345618265000" # str | id of the team
    update_team_settings_request = UpdateTeamSettingsRequest(
        default_label_id=3000457366756291000,
        enabled=True,
    ) # UpdateTeamSettingsRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update team settings
        api_response = api_instance.enterprise_dataclassification_team_settings_set(org_id, team_id, update_team_settings_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardClassificationTeamLevelApi->enterprise_dataclassification_team_settings_set: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |
 **team_id** | **str**| id of the team |
 **update_team_settings_request** | [**UpdateTeamSettingsRequest**](UpdateTeamSettingsRequest.md)|  |

### Return type

[**DataClassificationTeamSettings**](DataClassificationTeamSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team board classification settings |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

