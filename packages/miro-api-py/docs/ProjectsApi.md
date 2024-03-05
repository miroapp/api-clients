# miro_api.ProjectsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_create_project**](ProjectsApi.md#enterprise_create_project) | **POST** /v2/orgs/{org_id}/teams/{team_id}/projects | Create project
[**enterprise_delete_project**](ProjectsApi.md#enterprise_delete_project) | **DELETE** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id} | Delete project
[**enterprise_get_project**](ProjectsApi.md#enterprise_get_project) | **GET** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id} | Get project
[**enterprise_get_projects**](ProjectsApi.md#enterprise_get_projects) | **GET** /v2/orgs/{org_id}/teams/{team_id}/projects | List of projects
[**enterprise_update_project**](ProjectsApi.md#enterprise_update_project) | **PATCH** /v2/orgs/{org_id}/teams/{team_id}/projects/{project_id} | Update project


# **enterprise_create_project**
> Project enterprise_create_project(org_id, team_id, create_project_request)

Create project

Projects are essentially folders of boards with the option to manage user access for a smaller group of people within a team. Projects are here to help you organize your boards and make them easier to find and share. In other words, a project is a group of boards that you can share with your teammates all at once. For more information, see our <a href=\"https://help.miro.com/hc/en-us/articles/360018262033-Projects\" target=_blank>Help Center page on Projects</a>. <br><br>This API creates a new project in an existing team of an organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import projects_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.create_project_request import CreateProjectRequest
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.project import Project
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
    api_instance = projects_api.ProjectsApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization within which you you want to create a project.
    team_id = "3074457345619012000" # str | The ID of the team within which you you want to create a project.
    create_project_request = CreateProjectRequest(
        name="Product Guild project",
    ) # CreateProjectRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create project
        api_response = api_instance.enterprise_create_project(org_id, team_id, create_project_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectsApi->enterprise_create_project: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization within which you you want to create a project. |
 **team_id** | **str**| The ID of the team within which you you want to create a project. |
 **create_project_request** | [**CreateProjectRequest**](CreateProjectRequest.md)|  |

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Contains information about the project, such as the project name. |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_delete_project**
> enterprise_delete_project(org_id, team_id, project_id)

Delete project

Deletes a project. After a project is deleted, all boards and users that belong to the project remain in the team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import projects_api
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
    api_instance = projects_api.ProjectsApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization from which you want to delete a project.
    team_id = "3074457345619012000" # str | The ID of the team from which you want to delete a project.
    project_id = "3074457345618265000" # str | The ID of the project that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete project
        api_instance.enterprise_delete_project(org_id, team_id, project_id)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectsApi->enterprise_delete_project: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization from which you want to delete a project. |
 **team_id** | **str**| The ID of the team from which you want to delete a project. |
 **project_id** | **str**| The ID of the project that you want to delete. |

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
**204** | Project deleted |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_project**
> Project enterprise_get_project(org_id, team_id, project_id)

Get project

Retrieves project information, such as a name for an existing project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import projects_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.project import Project
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
    api_instance = projects_api.ProjectsApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization from which you want to retrieve the project information.
    team_id = "3074457345619012000" # str | The ID of the team from which you want to retrieve the project information.
    project_id = "3074457345618265000" # str | The ID of the project for which you want to retrieve the information.

    # example passing only required values which don't have defaults set
    try:
        # Get project
        api_response = api_instance.enterprise_get_project(org_id, team_id, project_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectsApi->enterprise_get_project: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization from which you want to retrieve the project information. |
 **team_id** | **str**| The ID of the team from which you want to retrieve the project information. |
 **project_id** | **str**| The ID of the project for which you want to retrieve the information. |

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Project object |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_projects**
> ProjectPage enterprise_get_projects(org_id, team_id)

List of projects

Retrieves the list of projects in an existing team of an organization. You can retrieve all projects, including all private projects (projects that haven't been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see [Content Admin permissions for Company Admins](https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins).<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import projects_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.project_page import ProjectPage
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
    api_instance = projects_api.ProjectsApi(api_client)
    org_id = "3074457345618265000" # str | The ID of the organization from which you want to retrieve the list of available projects.
    team_id = "3074457345619012000" # str | The ID of the team from which you want to retrieve the list of available projects.
    limit = 100 # int | The maximum number of results to return per call. If the number of projects in the response is greater than the limit specified, the response returns the cursor parameter with a value. (optional) if omitted the server will use the default value of 100
    cursor = "3074457345618265000" # str | An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. (optional)

    # example passing only required values which don't have defaults set
    try:
        # List of projects
        api_response = api_instance.enterprise_get_projects(org_id, team_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectsApi->enterprise_get_projects: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # List of projects
        api_response = api_instance.enterprise_get_projects(org_id, team_id, limit=limit, cursor=cursor)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectsApi->enterprise_get_projects: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of the organization from which you want to retrieve the list of available projects. |
 **team_id** | **str**| The ID of the team from which you want to retrieve the list of available projects. |
 **limit** | **int**| The maximum number of results to return per call. If the number of projects in the response is greater than the limit specified, the response returns the cursor parameter with a value. | [optional] if omitted the server will use the default value of 100
 **cursor** | **str**| An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request. | [optional]

### Return type

[**ProjectPage**](ProjectPage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains the result set information, such as the content, limit, cursor, or size. |  -  |
**400** | Malformed request |  -  |
**401** | Invalid authentication credentials |  -  |
**403** | Invalid access |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_update_project**
> Project enterprise_update_project(org_id, team_id, project_id, update_project_request)

Update project

Update information about a project, such as the project name.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import projects_api
from miro_api.model.error429 import Error429
from miro_api.model.error404 import Error404
from miro_api.model.error400 import Error400
from miro_api.model.error401 import Error401
from miro_api.model.project import Project
from miro_api.model.error409 import Error409
from miro_api.model.error403 import Error403
from miro_api.model.update_project_request import UpdateProjectRequest
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = projects_api.ProjectsApi(api_client)
    org_id = "3074457345618265000" # str | The ID of an Organization.
    team_id = "3074457345619012000" # str | The ID of a Team.
    project_id = "3074457345618265000" # str | The ID of a Project.
    update_project_request = UpdateProjectRequest(
        name="Product Guild project",
    ) # UpdateProjectRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Update project
        api_response = api_instance.enterprise_update_project(org_id, team_id, project_id, update_project_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling ProjectsApi->enterprise_update_project: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The ID of an Organization. |
 **team_id** | **str**| The ID of a Team. |
 **project_id** | **str**| The ID of a Project. |
 **update_project_request** | [**UpdateProjectRequest**](UpdateProjectRequest.md)|  |

### Return type

[**Project**](Project.md)

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

