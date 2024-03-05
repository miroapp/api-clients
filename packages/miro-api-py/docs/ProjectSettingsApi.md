# miro_api.ProjectSettingsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_get_project_settings**](ProjectSettingsApi.md#enterprise_get_project_settings) | **GET** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/settings | Get project settings
[**enterprise_update_project_settings**](ProjectSettingsApi.md#enterprise_update_project_settings) | **PATCH** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/settings | Update project settings


# **enterprise_get_project_settings**
> ProjectSettings enterprise_get_project_settings(org_id, team_id, project_id)

Get project settings

Retrieves the project settings.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import project_settings_api
from miro_api.model.project_settings import ProjectSettings
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.error403 import Error403
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = project_settings_api.ProjectSettingsApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization to which the project belongs.
    team_id = "3074457345619012091" # str | The ID of the team to which the project belongs.
    project_id = "3074457345618265000" # str | The ID of the project for which you want to retrieve the project settings.

    # example passing only required values which don't have defaults set
    try:
        # Get project settings
        api_response = api_instance.enterprise_get_project_settings(org_id, team_id, project_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectSettingsApi->enterprise_get_project_settings: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to which the project belongs. |
 **team_id** | **str**| The ID of the team to which the project belongs. |
 **project_id** | **str**| The ID of the project for which you want to retrieve the project settings. |

### Return type

[**ProjectSettings**](ProjectSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Defines the sharing policies for the boards within the project. |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_update_project_settings**
> ProjectSettings enterprise_update_project_settings(org_id, team_id, project_id, update_project_settings_request)

Update project settings

Updates the settings of a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import project_settings_api
from miro_api.model.project_settings import ProjectSettings
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.error409 import Error409
from miro_api.model.update_project_settings_request import UpdateProjectSettingsRequest
from miro_api.model.error403 import Error403
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = project_settings_api.ProjectSettingsApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization to which the project belongs.
    team_id = "3074457345619012000" # str | The ID of the team to which the project belongs.
    project_id = "3074457345618265000" # str | The ID of the project whose settings you want to update.
    update_project_settings_request = UpdateProjectSettingsRequest(
        sharing_policy_settings=SharingPolicySettings(
            team_access=TeamAccess("private"),
        ),
    ) # UpdateProjectSettingsRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update project settings
        api_response = api_instance.enterprise_update_project_settings(org_id, team_id, project_id, update_project_settings_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectSettingsApi->enterprise_update_project_settings: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to which the project belongs. |
 **team_id** | **str**| The ID of the team to which the project belongs. |
 **project_id** | **str**| The ID of the project whose settings you want to update. |
 **update_project_settings_request** | [**UpdateProjectSettingsRequest**](UpdateProjectSettingsRequest.md)|  |

### Return type

[**ProjectSettings**](ProjectSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project object |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

