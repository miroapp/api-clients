# miro_api.TeamSettingsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_get_default_team_settings**](TeamSettingsApi.md#enterprise_get_default_team_settings) | **GET** /v2/orgs/{org_id}/default_teams_settings | Get default team settings
[**enterprise_get_team_settings**](TeamSettingsApi.md#enterprise_get_team_settings) | **GET** /v2/orgs/{org_id}/teams/{team_id}/settings | Get team settings
[**enterprise_update_team_settings**](TeamSettingsApi.md#enterprise_update_team_settings) | **PATCH** /v2/orgs/{org_id}/teams/{team_id}/settings | Update team settings


# **enterprise_get_default_team_settings**
> TeamSettings enterprise_get_default_team_settings(org_id)

Get default team settings

Retrieves default team settings of an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_settings_api
from miro_api.model.team_settings import TeamSettings
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_settings_api.TeamSettingsApi(api_client)
    org_id = "3074457345618265000" # str | The id of an Organization.

    # example passing only required values which don't have defaults set
    try:
        # Get default team settings
        api_response = api_instance.enterprise_get_default_team_settings(org_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamSettingsApi->enterprise_get_default_team_settings: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of an Organization. |

### Return type

[**TeamSettings**](TeamSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team settings |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_team_settings**
> TeamSettings enterprise_get_team_settings(org_id, team_id)

Get team settings

Retrieves team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_settings_api
from miro_api.model.team_settings import TeamSettings
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_settings_api.TeamSettingsApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.

    # example passing only required values which don't have defaults set
    try:
        # Get team settings
        api_response = api_instance.enterprise_get_team_settings(org_id, team_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamSettingsApi->enterprise_get_team_settings: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |

### Return type

[**TeamSettings**](TeamSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team settings |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_update_team_settings**
> TeamSettings enterprise_update_team_settings(org_id, team_id, team_settings_changes)

Update team settings

Updates team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_settings_api
from miro_api.model.team_settings import TeamSettings
from miro_api.model.team_settings_changes import TeamSettingsChanges
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_settings_api.TeamSettingsApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.
    team_settings_changes = TeamSettingsChanges(
        team_account_discovery_settings=TeamAccountDiscoverySettingsChanges(
            account_discovery="hidden",
        ),
        team_collaboration_settings=TeamCollaborationSettingsChanges(
            co_owner_role="enabled",
        ),
        team_copy_access_level_settings=TeamCopyAccessLevelSettingsChanges(
            copy_access_level="anyone",
            copy_access_level_limitation="anyone",
        ),
        team_invitation_settings=TeamInvitationSettingsChanges(
            invite_external_users="allowed",
            who_can_invite="only_org_admins",
        ),
        team_sharing_policy_settings=TeamSharingPolicySettingsChanges(
            allow_listed_domains=[
                "allow_listed_domains_example",
            ],
            create_asset_access_level="company_admins",
            default_board_access="private",
            default_organization_access="private",
            default_project_access="private",
            move_board_to_account="allowed",
            restrict_allowed_domains="enabled",
            sharing_on_account="allowed",
            sharing_on_organization="allowed",
            sharing_via_public_link="allowed",
        ),
    ) # TeamSettingsChanges | 

    # example passing only required values which don't have defaults set
    try:
        # Update team settings
        api_response = api_instance.enterprise_update_team_settings(org_id, team_id, team_settings_changes)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamSettingsApi->enterprise_update_team_settings: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |
 **team_settings_changes** | [**TeamSettingsChanges**](TeamSettingsChanges.md)|  |

### Return type

[**TeamSettings**](TeamSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team settings |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

