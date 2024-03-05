# miro_api.OrganizationsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_get_organization**](OrganizationsApi.md#enterprise_get_organization) | **GET** /v2/orgs/{org_id} | Get organization info


# **enterprise_get_organization**
> Organization enterprise_get_organization(org_id)

Get organization info

Retrieves organization information.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import organizations_api
from miro_api.model.organization import Organization
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = organizations_api.OrganizationsApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization

    # example passing only required values which don't have defaults set
    try:
        # Get organization info
        api_response = api_instance.enterprise_get_organization(org_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling OrganizationsApi->enterprise_get_organization: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |

### Return type

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization found |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**409** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

