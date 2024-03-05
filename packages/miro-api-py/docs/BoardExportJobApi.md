# miro_api.BoardExportJobApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enterprise_board_export_job_results**](BoardExportJobApi.md#enterprise_board_export_job_results) | **GET** /v2/orgs/{org_id}/boards/export/jobs/{job_id}/results | Get results for board export job
[**enterprise_board_export_job_status**](BoardExportJobApi.md#enterprise_board_export_job_status) | **GET** /v2/orgs/{org_id}/boards/export/jobs/{job_id} | Get board export job status
[**enterprise_create_board_export**](BoardExportJobApi.md#enterprise_create_board_export) | **POST** /v2/orgs/{org_id}/boards/export/jobs | Create board export job


# **enterprise_board_export_job_results**
> BoardExportResult enterprise_board_export_job_results(org_id, job_id)

Get results for board export job

Retrieves the result of the board export job. The response provides more information about the board export job, such as the S3 link to the files created.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin and eDiscovery is enabled in the Settings. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_export_job_api
from miro_api.model.board_export_result import BoardExportResult
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_export_job_api.BoardExportJobApi(api_client)
    org_id = "3074457345821141000" # str | Unique identifier of the organization.
    job_id = "92343229-c532-446d-b8cb-2f155bedb807" # str | Unique identifier of the job.

    # example passing only required values which don't have defaults set
    try:
        # Get results for board export job
        api_response = api_instance.enterprise_board_export_job_results(org_id, job_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardExportJobApi->enterprise_board_export_job_results: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Unique identifier of the organization. |
 **job_id** | **str**| Unique identifier of the job. |

### Return type

[**BoardExportResult**](BoardExportResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board export job result |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_board_export_job_status**
> BoardExportJobStatus enterprise_board_export_job_status(org_id, job_id)

Get board export job status

Retrieves the status of the board export job.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin and eDiscovery is enabled in the Settings. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_export_job_api
from miro_api.model.board_export_job_status import BoardExportJobStatus
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_export_job_api.BoardExportJobApi(api_client)
    org_id = "3074457345821141000" # str | Unique identifier of the organization.
    job_id = "92343229-c532-446d-b8cb-2f155bedb807" # str | Unique identifier of the board export job.

    # example passing only required values which don't have defaults set
    try:
        # Get board export job status
        api_response = api_instance.enterprise_board_export_job_status(org_id, job_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardExportJobApi->enterprise_board_export_job_status: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Unique identifier of the organization. |
 **job_id** | **str**| Unique identifier of the board export job. |

### Return type

[**BoardExportJobStatus**](BoardExportJobStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board export job status |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enterprise_create_board_export**
> BoardExportJobId enterprise_create_board_export(org_id, request_id, create_board_export_request)

Create board export job

Creates an export job for one or more boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin and eDiscovery is enabled in the Settings. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>

### Example


```python
import time
import miro_api
from miro_api.api import board_export_job_api
from miro_api.model.create_board_export_request import CreateBoardExportRequest
from miro_api.model.board_export_job_id import BoardExportJobId
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_export_job_api.BoardExportJobApi(api_client)
    org_id = "3074457345821141000" # str | Unique identifier of the organization.
    request_id = "92343229-c532-446d-b8cb-2f155bedb807" # str | Unique identifier of the board export job.
    create_board_export_request = CreateBoardExportRequest(
        board_ids=[
            "o9J_kzlUDmo=",
        ],
    ) # CreateBoardExportRequest | 

    # example passing only required values which don't have defaults set
    try:
        # Create board export job
        api_response = api_instance.enterprise_create_board_export(org_id, request_id, create_board_export_request)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardExportJobApi->enterprise_create_board_export: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Unique identifier of the organization. |
 **request_id** | **str**| Unique identifier of the board export job. |
 **create_board_export_request** | [**CreateBoardExportRequest**](CreateBoardExportRequest.md)|  |

### Return type

[**BoardExportJobId**](BoardExportJobId.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unique identifier of the board export job |  -  |
**400** |  |  -  |
**401** |  |  -  |
**403** |  |  -  |
**404** |  |  -  |
**429** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

