# miro_api.TeamsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_create_team**](TeamsApi.md#enterprise_create_team) | **POST** /v2/orgs/{org_id}/teams | Create team
[**enterprise_delete_team**](TeamsApi.md#enterprise_delete_team) | **DELETE** /v2/orgs/{org_id}/teams/{team_id} | Delete team
[**enterprise_get_team**](TeamsApi.md#enterprise_get_team) | **GET** /v2/orgs/{org_id}/teams/{team_id} | Get team
[**enterprise_get_teams**](TeamsApi.md#enterprise_get_teams) | **GET** /v2/orgs/{org_id}/teams | List teams
[**enterprise_update_team**](TeamsApi.md#enterprise_update_team) | **PATCH** /v2/orgs/{org_id}/teams/{team_id} | Update team


# **enterprise_create_team**
> Team enterprise_create_team(org_id, create_team_request)

Create team

Creates a new team in an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import teams_api
from miro_api.model.team import Team
from miro_api.model.create_team_request import CreateTeamRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = teams_api.TeamsApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    create_team_request = CreateTeamRequest(
        name="My Team",
    ) # CreateTeamRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create team
        api_response = api_instance.enterprise_create_team(org_id, create_team_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamsApi->enterprise_create_team: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **create_team_request** | [**CreateTeamRequest**](CreateTeamRequest.md)|  |

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Team object |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_delete_team**
> enterprise_delete_team(org_id, team_id)

Delete team

Deletes an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import teams_api
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = teams_api.TeamsApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.

    # example passing only required values which don't have defaults set
    try:
        # Delete team
        api_instance.enterprise_delete_team(org_id, team_id)
    except miro_api.ApiException as e:
        print("Exception when calling TeamsApi->enterprise_delete_team: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Team deleted |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_team**
> Team enterprise_get_team(org_id, team_id)

Get team

Retrieves team information for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import teams_api
from miro_api.model.team import Team
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = teams_api.TeamsApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.

    # example passing only required values which don't have defaults set
    try:
        # Get team
        api_response = api_instance.enterprise_get_team(org_id, team_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamsApi->enterprise_get_team: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team object |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_teams**
> TeamsPage enterprise_get_teams(org_id)

List teams

Retrieves list of teams in an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import teams_api
from miro_api.model.teams_page import TeamsPage
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = teams_api.TeamsApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    limit = 100 # int |  (optional) if omitted the server will use the default value of 100
    cursor = "3055557345821140500" # str | An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. (optional)
    name = "My team" # str | Name query. Filters teams by name using case insensitive partial match. A value \"dev\" will return both \"Developer's team\" and \"Team for developers\". (optional)

    # example passing only required values which don't have defaults set
    try:
        # List teams
        api_response = api_instance.enterprise_get_teams(org_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamsApi->enterprise_get_teams: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # List teams
        api_response = api_instance.enterprise_get_teams(org_id, limit=limit, cursor=cursor, name=name)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamsApi->enterprise_get_teams: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **limit** | **int**|  | [optional] if omitted the server will use the default value of 100
 **cursor** | **str**| An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. | [optional]
 **name** | **str**| Name query. Filters teams by name using case insensitive partial match. A value \&quot;dev\&quot; will return both \&quot;Developer&#39;s team\&quot; and \&quot;Team for developers\&quot;. | [optional]

### Return type

[**TeamsPage**](TeamsPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of teams that match the search query. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_update_team**
> Team enterprise_update_team(org_id, team_id, team_changes)

Update team

Updates an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import teams_api
from miro_api.model.team import Team
from miro_api.model.team_changes import TeamChanges
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = teams_api.TeamsApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.
    team_changes = TeamChanges(
        name="My Team",
    ) # TeamChanges | 

    # example passing only required values which don't have defaults set
    try:
        # Update team
        api_response = api_instance.enterprise_update_team(org_id, team_id, team_changes)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamsApi->enterprise_update_team: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |
 **team_changes** | [**TeamChanges**](TeamChanges.md)|  |

### Return type

[**Team**](Team.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team object |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

