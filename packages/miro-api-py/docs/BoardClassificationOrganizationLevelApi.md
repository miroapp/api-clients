# miro_api.BoardClassificationOrganizationLevelApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_dataclassification_organization_settings_get**](BoardClassificationOrganizationLevelApi.md#enterprise_dataclassification_organization_settings_get) | **GET** /v2/orgs/{org_id}/data-classification-settings | Get organization settings


# **enterprise_dataclassification_organization_settings_get**
> DataClassificationOrganizationSettings enterprise_dataclassification_organization_settings_get(org_id)

Get organization settings

Retrieves board classification settings for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_classification_organization_level_api
from miro_api.model.data_classification_organization_settings import DataClassificationOrganizationSettings
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_classification_organization_level_api.BoardClassificationOrganizationLevelApi(api_client)
    org_id = "3074457345821141000" # str | id of the organization

    # example passing only required values which don't have defaults set
    try:
        # Get organization settings
        api_response = api_instance.enterprise_dataclassification_organization_settings_get(org_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardClassificationOrganizationLevelApi->enterprise_dataclassification_organization_settings_get: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| id of the organization |

### Return type

[**DataClassificationOrganizationSettings**](DataClassificationOrganizationSettings.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Organization board classification settings |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

