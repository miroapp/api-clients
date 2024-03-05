# miro_api.ProjectMembersApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_add_project_member**](ProjectMembersApi.md#enterprise_add_project_member) | **POST** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members | Add member in a project
[**enterprise_delete_project_member**](ProjectMembersApi.md#enterprise_delete_project_member) | **DELETE** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id} | Remove project member
[**enterprise_get_project_member**](ProjectMembersApi.md#enterprise_get_project_member) | **GET** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id} | Get project member
[**enterprise_get_project_members**](ProjectMembersApi.md#enterprise_get_project_members) | **GET** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members | List of project members
[**enterprise_update_project_member**](ProjectMembersApi.md#enterprise_update_project_member) | **PATCH** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id} | Update project member


# **enterprise_add_project_member**
> ProjectMember enterprise_add_project_member(org_id, team_id, project_id, add_project_member_request)

Add member in a project

Add a Miro user to a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import project_members_api
from miro_api.model.error429 import Error429
from miro_api.model.add_project_member_request import AddProjectMemberRequest
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.project_member import ProjectMember
from miro_api.model.error401 import Error401
from miro_api.model.error409 import Error409
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
    api_instance = project_members_api.ProjectMembersApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization to which the project belongs.
    team_id = "3074457345619012000" # str | The ID of the team to which the project belongs.
    project_id = "3074457345618265000" # str | The ID of the project to which you want to add a user.
    add_project_member_request = AddProjectMemberRequest(
        email="someone@domain.com",
        role=ProjectRole("viewer"),
    ) # AddProjectMemberRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Add member in a project
        api_response = api_instance.enterprise_add_project_member(org_id, team_id, project_id, add_project_member_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectMembersApi->enterprise_add_project_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to which the project belongs. |
 **team_id** | **str**| The ID of the team to which the project belongs. |
 **project_id** | **str**| The ID of the project to which you want to add a user. |
 **add_project_member_request** | [**AddProjectMemberRequest**](AddProjectMemberRequest.md)|  |

### Return type

[**ProjectMember**](ProjectMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Project object |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_delete_project_member**
> enterprise_delete_project_member(org_id, team_id, project_id, member_id)

Remove project member

Remove a member from a project. The user remains in the team even after the member is removed from a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import project_members_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.error409 import Error409
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
    api_instance = project_members_api.ProjectMembersApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization to which the project belongs.
    team_id = "3074457345619012000" # str | The ID of the team to which the project belongs.
    project_id = "3074457345618265000" # str | The ID of the project from which you want to remove a member.
    member_id = "3074457345618265000" # str | The ID of the member that you want to remove from a project.

    # example passing only required values which don't have defaults set
    try:
        # Remove project member
        api_instance.enterprise_delete_project_member(org_id, team_id, project_id, member_id)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectMembersApi->enterprise_delete_project_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to which the project belongs. |
 **team_id** | **str**| The ID of the team to which the project belongs. |
 **project_id** | **str**| The ID of the project from which you want to remove a member. |
 **member_id** | **str**| The ID of the member that you want to remove from a project. |

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Project member removed |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_project_member**
> ProjectMember enterprise_get_project_member(org_id, team_id, project_id, member_id)

Get project member

Retrieves information for a specific project member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import project_members_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.project_member import ProjectMember
from miro_api.model.error401 import Error401
from miro_api.model.error409 import Error409
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
    api_instance = project_members_api.ProjectMembersApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization to which the project belongs.
    team_id = "3074457345619012000" # str | The ID of the team to which the project belongs.
    project_id = "3074457345618265000" # str | The ID of the project from which you want to retrieve specific member information.
    member_id = "307445734562315000" # str | The ID of the member for which you want to retrieve information.

    # example passing only required values which don't have defaults set
    try:
        # Get project member
        api_response = api_instance.enterprise_get_project_member(org_id, team_id, project_id, member_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectMembersApi->enterprise_get_project_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to which the project belongs. |
 **team_id** | **str**| The ID of the team to which the project belongs. |
 **project_id** | **str**| The ID of the project from which you want to retrieve specific member information. |
 **member_id** | **str**| The ID of the member for which you want to retrieve information. |

### Return type

[**ProjectMember**](ProjectMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains information about the project member, such as the member&#39;s role. |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_project_members**
> ProjectMemberPage enterprise_get_project_members(org_id, team_id, project_id)

List of project members

Retrieves the list of members for a specific project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import project_members_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.project_member_page import ProjectMemberPage
from miro_api.model.error401 import Error401
from miro_api.model.error409 import Error409
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
    api_instance = project_members_api.ProjectMembersApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization to which the project belongs.
    team_id = "3074457345619012000" # str | The ID of the team to which the project belongs.
    project_id = "3074457345618265000" # str | The ID of the project for which you want to retrieve the list of members.
    limit = 100 # int | The maximum number of results to return per call. If the number of project members in the response is greater than the limit specified, the response returns the cursor parameter with a value. (optional) if omitted the server will use the default value of 100
    cursor = "3074457345618265000" # str | An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. (optional)

    # example passing only required values which don't have defaults set
    try:
        # List of project members
        api_response = api_instance.enterprise_get_project_members(org_id, team_id, project_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectMembersApi->enterprise_get_project_members: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # List of project members
        api_response = api_instance.enterprise_get_project_members(org_id, team_id, project_id, limit=limit, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectMembersApi->enterprise_get_project_members: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to which the project belongs. |
 **team_id** | **str**| The ID of the team to which the project belongs. |
 **project_id** | **str**| The ID of the project for which you want to retrieve the list of members. |
 **limit** | **int**| The maximum number of results to return per call. If the number of project members in the response is greater than the limit specified, the response returns the cursor parameter with a value. | [optional] if omitted the server will use the default value of 100
 **cursor** | **str**| An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. | [optional]

### Return type

[**ProjectMemberPage**](ProjectMemberPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of project member |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_update_project_member**
> ProjectMember enterprise_update_project_member(org_id, team_id, project_id, member_id, update_project_member_request)

Update project member

Updates details of a project member, such as the member's role.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import project_members_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.project_member import ProjectMember
from miro_api.model.error401 import Error401
from miro_api.model.update_project_member_request import UpdateProjectMemberRequest
from miro_api.model.error409 import Error409
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
    api_instance = project_members_api.ProjectMembersApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization to which the project member belongs.
    team_id = "3074457345619012000" # str | The ID of the team to which the project member belongs.
    project_id = "3074457345618265000" # str | The ID of a Project.
    member_id = "307445734562315000" # str | The ID of the member whose details you want to update.
    update_project_member_request = UpdateProjectMemberRequest(
        role=ProjectRole("viewer"),
    ) # UpdateProjectMemberRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update project member
        api_response = api_instance.enterprise_update_project_member(org_id, team_id, project_id, member_id, update_project_member_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectMembersApi->enterprise_update_project_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization to which the project member belongs. |
 **team_id** | **str**| The ID of the team to which the project member belongs. |
 **project_id** | **str**| The ID of a Project. |
 **member_id** | **str**| The ID of the member whose details you want to update. |
 **update_project_member_request** | [**UpdateProjectMemberRequest**](UpdateProjectMemberRequest.md)|  |

### Return type

[**ProjectMember**](ProjectMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains information about the project member, such as the member&#39;s role. |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

