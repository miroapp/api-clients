# miro_api.BoardMembersApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_board_members**](BoardMembersApi.md#get_board_members) | **GET** /v2/boards/{board_id}/members | Get all board members
[**get_specific_board_member**](BoardMembersApi.md#get_specific_board_member) | **GET** /v2/boards/{board_id}/members/{board_member_id} | Get specific board member
[**remove_board_member**](BoardMembersApi.md#remove_board_member) | **DELETE** /v2/boards/{board_id}/members/{board_member_id} | Remove board member
[**share_board**](BoardMembersApi.md#share_board) | **POST** /v2/boards/{board_id}/members | Share board
[**update_board_member**](BoardMembersApi.md#update_board_member) | **PATCH** /v2/boards/{board_id}/members/{board_member_id} | Update board member


# **get_board_members**
> BoardMembersPagedResponse get_board_members(board_id)

Get all board members

Retrieves a pageable list of members for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import board_members_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.board_members_paged_response import BoardMembersPagedResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_members_api.BoardMembersApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board to which the board member belongs.
    limit = "limit_example" # str |  (optional)
    offset = "offset_example" # str |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Get all board members
        api_response = api_instance.get_board_members(board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardMembersApi->get_board_members: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get all board members
        api_response = api_instance.get_board_members(board_id, limit=limit, offset=offset)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardMembersApi->get_board_members: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board to which the board member belongs. |
 **limit** | **str**|  | [optional]
 **offset** | **str**|  | [optional]

### Return type

[**BoardMembersPagedResponse**](BoardMembersPagedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board members retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_specific_board_member**
> BoardMemberWithLinks get_specific_board_member(board_id, board_member_id)

Get specific board member

Retrieves information for a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import board_members_api
from miro_api.model.board_member_with_links import BoardMemberWithLinks
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_members_api.BoardMembersApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board to which the board member belongs.
    board_member_id = "board_member_id_example" # str | Unique identifier (ID) of the board member whose role you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get specific board member
        api_response = api_instance.get_specific_board_member(board_id, board_member_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardMembersApi->get_specific_board_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board to which the board member belongs. |
 **board_member_id** | **str**| Unique identifier (ID) of the board member whose role you want to retrieve. |

### Return type

[**BoardMemberWithLinks**](BoardMemberWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board member retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_board_member**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} remove_board_member(board_id, board_member_id)

Remove board member

Removes a board member from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import board_members_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_members_api.BoardMembersApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board from which you want to delete an item.
    board_member_id = "board_member_id_example" # str | Unique identifier (ID) of the board member whose role you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Remove board member
        api_response = api_instance.remove_board_member(board_id, board_member_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardMembersApi->remove_board_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board from which you want to delete an item. |
 **board_member_id** | **str**| Unique identifier (ID) of the board member whose role you want to delete. |

### Return type

**{str: (bool, date, datetime, dict, float, int, list, str, none_type)}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Board member deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **share_board**
> InvitationResult share_board(board_id, board_members_invite)

Share board

Shares the board and Invites new members to collaborate on a board by sending an invitation email. Depending on the board's Sharing policy, there might be various scenarios where membership in the team is required in order to share the board with a user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import board_members_api
from miro_api.model.invitation_result import InvitationResult
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.board_members_invite import BoardMembersInvite
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_members_api.BoardMembersApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board to which the board member belongs.
    board_members_invite = BoardMembersInvite(
        emails=[
            "member@email.com",
        ],
        role="commenter",
        message="Hey there! Join my board and let's collaborate on this project!",
    ) # BoardMembersInvite | 

    # example passing only required values which don't have defaults set
    try:
        # Share board
        api_response = api_instance.share_board(board_id, board_members_invite)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardMembersApi->share_board: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board to which the board member belongs. |
 **board_members_invite** | [**BoardMembersInvite**](BoardMembersInvite.md)|  |

### Return type

[**InvitationResult**](InvitationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Board members invited |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_board_member**
> BoardMemberWithLinks update_board_member(board_id, board_member_id, board_member_changes)

Update board member

Updates the role of a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import board_members_api
from miro_api.model.board_member_changes import BoardMemberChanges
from miro_api.model.board_member_with_links import BoardMemberWithLinks
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = board_members_api.BoardMembersApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board for which you want to update the role of the board member.
    board_member_id = "board_member_id_example" # str | Unique identifier (ID) of the board member whose role you want to update.
    board_member_changes = BoardMemberChanges(
        role="commenter",
    ) # BoardMemberChanges | 

    # example passing only required values which don't have defaults set
    try:
        # Update board member
        api_response = api_instance.update_board_member(board_id, board_member_id, board_member_changes)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardMembersApi->update_board_member: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board for which you want to update the role of the board member. |
 **board_member_id** | **str**| Unique identifier (ID) of the board member whose role you want to update. |
 **board_member_changes** | [**BoardMemberChanges**](BoardMemberChanges.md)|  |

### Return type

[**BoardMemberWithLinks**](BoardMemberWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board member updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

