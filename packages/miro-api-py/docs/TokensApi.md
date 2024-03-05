# miro_api.TokensApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**revoke_token**](TokensApi.md#revoke_token) | **POST** /v1/oauth/revoke | Revoke token
[**token_info**](TokensApi.md#token_info) | **GET** /v1/oauth-token | Get access token information


# **revoke_token**
> revoke_token(access_token)

Revoke token

Revoke the current access token. Revoking an access token means that the access token will no longer work. When an access token is revoked, the refresh token is also revoked and no longer valid. This does not uninstall the application for the user.

### Example


```python
import time
import miro_api
from miro_api.api import tokens_api
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tokens_api.TokensApi(api_client)
    access_token = "access_token_example" # str | Access token that you want to revoke

    # example passing only required values which don't have defaults set
    try:
        # Revoke token
        api_instance.revoke_token(access_token)
    except miro_api.ApiException as e:
        print("Exception when calling TokensApi->revoke_token: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **access_token** | **str**| Access token that you want to revoke |

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
**204** | Token revoked |  -  |
**400** | Failed to revoke token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **token_info**
> TokenInformation token_info()

Get access token information

Get information about an access token, such as the token type, scopes, team, user, token creation date and time, and the user who created the token.

### Example


```python
import time
import miro_api
from miro_api.api import tokens_api
from miro_api.model.token_information import TokenInformation
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = tokens_api.TokensApi(api_client)

    # example, this endpoint has no required or optional parameters
    try:
        # Get access token information
        api_response = api_instance.token_info()
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling TokensApi->token_info: %s\n" % e)
```


### Parameters
This endpoint does not need any parameter.

### Return type

[**TokenInformation**](TokenInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token information |  -  |
**400** | Invalid token provided |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

