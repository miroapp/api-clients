# miro_api.OrganizationMembersApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_get_organization_member**](OrganizationMembersApi.md#enterprise_get_organization_member) | **GET** /v2/orgs/{org_id}/members/{member_id} | Get organization member
[**enterprise_get_organization_members**](OrganizationMembersApi.md#enterprise_get_organization_members) | **GET** /v2/orgs/{org_id}/members | Get organization members


# **enterprise_get_organization_member**
> OrganizationMember enterprise_get_organization_member(org_id, member_id)

Get organization member

Retrieves organization member information for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import organization_members_api
from miro_api.model.organization_member import OrganizationMember
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = organization_members_api.OrganizationMembersApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization
    member_id = "3055557345821141000" # str | id of the organization member

    # example passing only required values which don't have defaults set
    try:
        # Get organization member
        api_response = api_instance.enterprise_get_organization_member(org_id, member_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling OrganizationMembersApi->enterprise_get_organization_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |
 **member_id** | **str**| id of the organization member |

### Return type

[**OrganizationMember**](OrganizationMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization member found |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_get_organization_members**
> EnterpriseGetOrganizationMembers200Response enterprise_get_organization_members(org_id)

Get organization members

Retrieves organization members based on the organization ID and the cursor, or based on the user emails provided in the request.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import organization_members_api
from miro_api.model.enterprise_get_organization_members200_response import EnterpriseGetOrganizationMembers200Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = organization_members_api.OrganizationMembersApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization
    emails = "someEmail1@miro.com" # str |  (optional)
    role = "organization_internal_admin" # str |  (optional)
    license = "full" # str |  (optional)
    active = True # bool |  (optional)
    cursor = "3055557345821141000" # str |  (optional)
    limit = 100 # int |  (optional) if omitted the server will use the default value of 100

    # example passing only required values which don't have defaults set
    try:
        # Get organization members
        api_response = api_instance.enterprise_get_organization_members(org_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling OrganizationMembersApi->enterprise_get_organization_members: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get organization members
        api_response = api_instance.enterprise_get_organization_members(org_id, emails=emails, role=role, license=license, active=active, cursor=cursor, limit=limit)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling OrganizationMembersApi->enterprise_get_organization_members: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |
 **emails** | **str**|  | [optional]
 **role** | **str**|  | [optional]
 **license** | **str**|  | [optional]
 **active** | **bool**|  | [optional]
 **cursor** | **str**|  | [optional]
 **limit** | **int**|  | [optional] if omitted the server will use the default value of 100

### Return type

[**EnterpriseGetOrganizationMembers200Response**](EnterpriseGetOrganizationMembers200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization members queries successfully |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

