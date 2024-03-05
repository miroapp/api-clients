# miro_api.TeamMembersApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_delete_team_member**](TeamMembersApi.md#enterprise_delete_team_member) | **DELETE** /v2/orgs/{org_id}/teams/{team_id}/members/{member_id} | Delete team member from team
[**enterprise_get_team_member**](TeamMembersApi.md#enterprise_get_team_member) | **GET** /v2/orgs/{org_id}/teams/{team_id}/members/{member_id} | Get team member
[**enterprise_get_team_members**](TeamMembersApi.md#enterprise_get_team_members) | **GET** /v2/orgs/{org_id}/teams/{team_id}/members | List team members
[**enterprise_invite_team_member**](TeamMembersApi.md#enterprise_invite_team_member) | **POST** /v2/orgs/{org_id}/teams/{team_id}/members | Invite team members
[**enterprise_update_team_member**](TeamMembersApi.md#enterprise_update_team_member) | **PATCH** /v2/orgs/{org_id}/teams/{team_id}/members/{member_id} | Update team member


# **enterprise_delete_team_member**
> enterprise_delete_team_member(org_id, team_id, member_id)

Delete team member from team

Deletes team member from team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_members_api
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_members_api.TeamMembersApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.
    member_id = "3074457345618265000" # str | The id of the Team Member

    # example passing only required values which don't have defaults set
    try:
        # Delete team member from team
        api_instance.enterprise_delete_team_member(org_id, team_id, member_id)
    except miro_api.ApiException as e:
        print("Exception when calling TeamMembersApi->enterprise_delete_team_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |
 **member_id** | **str**| The id of the Team Member |

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
**204** | Deleted successfully |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_team_member**
> TeamMember enterprise_get_team_member(org_id, team_id, member_id)

Get team member

Retrieves team member by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_members_api
from miro_api.model.team_member import TeamMember
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_members_api.TeamMembersApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.
    member_id = "3074457345618265000" # str | The id of the Team Member

    # example passing only required values which don't have defaults set
    try:
        # Get team member
        api_response = api_instance.enterprise_get_team_member(org_id, team_id, member_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamMembersApi->enterprise_get_team_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |
 **member_id** | **str**| The id of the Team Member |

### Return type

[**TeamMember**](TeamMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team member object |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_team_members**
> TeamMembersPage enterprise_get_team_members(org_id, team_id)

List team members

Retrieves team members by cursor.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_members_api
from miro_api.model.team_members_page import TeamMembersPage
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_members_api.TeamMembersApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.
    limit = 100 # int |  (optional) if omitted the server will use the default value of 100
    cursor = "3055557345821140500" # str | An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. (optional)
    role = "role_example" # str |  Role query. Filters members by role using full word match. Accepted values are: * \"member\":     Team member with full member permissions. * \"admin\":      Admin of a team. Team member with permission to manage team. * \"non_team\":   External user, non-team user. * \"team_guest\": Team-guest user, user with access only to a team without access to organization.  (optional)

    # example passing only required values which don't have defaults set
    try:
        # List team members
        api_response = api_instance.enterprise_get_team_members(org_id, team_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamMembersApi->enterprise_get_team_members: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # List team members
        api_response = api_instance.enterprise_get_team_members(org_id, team_id, limit=limit, cursor=cursor, role=role)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamMembersApi->enterprise_get_team_members: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |
 **limit** | **int**|  | [optional] if omitted the server will use the default value of 100
 **cursor** | **str**| An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. | [optional]
 **role** | **str**|  Role query. Filters members by role using full word match. Accepted values are: * \&quot;member\&quot;:     Team member with full member permissions. * \&quot;admin\&quot;:      Admin of a team. Team member with permission to manage team. * \&quot;non_team\&quot;:   External user, non-team user. * \&quot;team_guest\&quot;: Team-guest user, user with access only to a team without access to organization.  | [optional]

### Return type

[**TeamMembersPage**](TeamMembersPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of team members that match the search query. |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_invite_team_member**
> TeamMember enterprise_invite_team_member(org_id, team_id, team_member_invite)

Invite team members

Invites a new Miro user to an existing team. The user must exist in your Miro organization. Users who do not exist in your Miro organization can be invited to the team via [SCIM](https://developers.miro.com/docs/scim) and an external identity provider, such as Okta or Azure Active Directory.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_members_api
from miro_api.model.team_member import TeamMember
from miro_api.model.team_member_invite import TeamMemberInvite
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_members_api.TeamMembersApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.
    team_member_invite = TeamMemberInvite(
        email="user@miro.com",
        role="member",
    ) # TeamMemberInvite | 

    # example passing only required values which don't have defaults set
    try:
        # Invite team members
        api_response = api_instance.enterprise_invite_team_member(org_id, team_id, team_member_invite)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamMembersApi->enterprise_invite_team_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |
 **team_member_invite** | [**TeamMemberInvite**](TeamMemberInvite.md)|  |

### Return type

[**TeamMember**](TeamMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Invitation result object |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_update_team_member**
> TeamMember enterprise_update_team_member(org_id, team_id, member_id, team_member_changes)

Update team member

Updates team member role in team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import team_members_api
from miro_api.model.team_member_changes import TeamMemberChanges
from miro_api.model.team_member import TeamMember
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = team_members_api.TeamMembersApi(api_client)
    org_id = "3074457345618265000" # str | The id of the Organization.
    team_id = "3074457345618265000" # str | The id of the Team.
    member_id = "3074457345618265000" # str | The id of the Team Member
    team_member_changes = TeamMemberChanges(
        role="member",
    ) # TeamMemberChanges | 

    # example passing only required values which don't have defaults set
    try:
        # Update team member
        api_response = api_instance.enterprise_update_team_member(org_id, team_id, member_id, team_member_changes)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TeamMembersApi->enterprise_update_team_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The id of the Organization. |
 **team_id** | **str**| The id of the Team. |
 **member_id** | **str**| The id of the Team Member |
 **team_member_changes** | [**TeamMemberChanges**](TeamMemberChanges.md)|  |

### Return type

[**TeamMember**](TeamMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Team member object |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

