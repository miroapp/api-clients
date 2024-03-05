# miro_api.BoardsApi

All URIs are relative to *https://api.miro.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copy_board**](BoardsApi.md#copy_board) | **PUT** /v2/boards | Copy board
[**create_board**](BoardsApi.md#create_board) | **POST** /v2/boards | Create board
[**delete_board**](BoardsApi.md#delete_board) | **DELETE** /v2/boards/{board_id} | Delete board
[**get_boards**](BoardsApi.md#get_boards) | **GET** /v2/boards | Get boards
[**get_specific_board**](BoardsApi.md#get_specific_board) | **GET** /v2/boards/{board_id} | Get specific board
[**update_board**](BoardsApi.md#update_board) | **PATCH** /v2/boards/{board_id} | Update board


# **copy_board**
> BoardWithLinksAndWithoutProject copy_board(copy_from)

Copy board

Creates a copy of an existing board. You can also update the name, description, sharing policy, and permissions policy for the new board in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import boards_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.copy_board_changes import CopyBoardChanges
from miro_api.model.board_with_links_and_without_project import BoardWithLinksAndWithoutProject
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = boards_api.BoardsApi(api_client)
    copy_from = "copy_from_example" # str | Unique identifier (ID) of the board that you want to copy.
    copy_board_changes = CopyBoardChanges(
        description="description_example",
        name="Untitled",
        policy=BoardPolicyChange(
            permissions_policy=BoardPermissionsPolicy(
                collaboration_tools_start_access="all_editors",
                copy_access="anyone",
                sharing_access="team_members_with_editing_rights",
            ),
            sharing_policy=BoardSharingPolicyChange(
                access="private",
                invite_to_account_and_board_link_access="no_access",
                organization_access="private",
                team_access="private",
            ),
        ),
        team_id="team_id_example",
    ) # CopyBoardChanges |  (optional)

    # example passing only required values which don't have defaults set
    try:
        # Copy board
        api_response = api_instance.copy_board(copy_from)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardsApi->copy_board: %s\n" % e)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Copy board
        api_response = api_instance.copy_board(copy_from, copy_board_changes=copy_board_changes)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardsApi->copy_board: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **copy_from** | **str**| Unique identifier (ID) of the board that you want to copy. |
 **copy_board_changes** | [**CopyBoardChanges**](CopyBoardChanges.md)|  | [optional]

### Return type

[**BoardWithLinksAndWithoutProject**](BoardWithLinksAndWithoutProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Board copied |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_board**
> BoardWithLinks create_board()

Create board

Creates a board with the specified name and sharing policies.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import boards_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.board_with_links import BoardWithLinks
from miro_api.model.board_changes import BoardChanges
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = boards_api.BoardsApi(api_client)
    board_changes = BoardChanges(
        description="description_example",
        name="Untitled",
        policy=BoardPolicyChange(
            permissions_policy=BoardPermissionsPolicy(
                collaboration_tools_start_access="all_editors",
                copy_access="anyone",
                sharing_access="team_members_with_editing_rights",
            ),
            sharing_policy=BoardSharingPolicyChange(
                access="private",
                invite_to_account_and_board_link_access="no_access",
                organization_access="private",
                team_access="private",
            ),
        ),
        team_id="team_id_example",
        project_id="project_id_example",
    ) # BoardChanges |  (optional)

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Create board
        api_response = api_instance.create_board(board_changes=board_changes)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardsApi->create_board: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_changes** | [**BoardChanges**](BoardChanges.md)|  | [optional]

### Return type

[**BoardWithLinks**](BoardWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Board created |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_board**
> {str: (bool, date, datetime, dict, float, int, list, str, none_type)} delete_board(board_id)

Delete board

Deletes a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import boards_api
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
    api_instance = boards_api.BoardsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board that you want to delete.

    # example passing only required values which don't have defaults set
    try:
        # Delete board
        api_response = api_instance.delete_board(board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardsApi->delete_board: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board that you want to delete. |

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
**204** | Board deleted |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_boards**
> BoardsPagedResponse get_boards()

Get boards

Retrieves a list of boards that match the search criteria provided in the request. If you are an Enterprise customer and a Company Admin, you can retrieve all boards, including all private boards (boards that haven't been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see [Content Admin permissions for Company Admins](https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins). Note that you only get results instantaneously when you filter by the `team_id`, `project_id`, or both the `team_id` and `project_id`. If you use any other filter,  you need to give a few seconds for the indexing of newly created boards before retrieving boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import boards_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.boards_paged_response import BoardsPagedResponse
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = boards_api.BoardsApi(api_client)
    team_id = "team_id_example" # str |  (optional)
    project_id = "project_id_example" # str |  (optional)
    query = "query_example" # str |  (optional)
    owner = "owner_example" # str |  (optional)
    limit = "limit_example" # str |  (optional)
    offset = "offset_example" # str |  (optional)
    sort = "default" # str |  (optional) if omitted the server will use the default value of "default"

    # example passing only required values which don't have defaults set
    # and optional values
    try:
        # Get boards
        api_response = api_instance.get_boards(team_id=team_id, project_id=project_id, query=query, owner=owner, limit=limit, offset=offset, sort=sort)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardsApi->get_boards: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  | [optional]
 **project_id** | **str**|  | [optional]
 **query** | **str**|  | [optional]
 **owner** | **str**|  | [optional]
 **limit** | **str**|  | [optional]
 **offset** | **str**|  | [optional]
 **sort** | **str**|  | [optional] if omitted the server will use the default value of "default"

### Return type

[**BoardsPagedResponse**](BoardsPagedResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board search results. |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_specific_board**
> BoardWithLinksAndLastOpened get_specific_board(board_id)

Get specific board

Retrieves information about a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import boards_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.board_with_links_and_last_opened import BoardWithLinksAndLastOpened
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = boards_api.BoardsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board that you want to retrieve.

    # example passing only required values which don't have defaults set
    try:
        # Get specific board
        api_response = api_instance.get_specific_board(board_id)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardsApi->get_specific_board: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board that you want to retrieve. |

### Return type

[**BoardWithLinksAndLastOpened**](BoardWithLinksAndLastOpened.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board retrieved |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_board**
> BoardWithLinks update_board(board_id, board_changes)

Update board

Updates a specific board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>

### Example


```python
import time
import miro_api
from miro_api.api import boards_api
from miro_api.model.create_frame_item400_response import CreateFrameItem400Response
from miro_api.model.board_with_links import BoardWithLinks
from miro_api.model.board_changes import BoardChanges
from pprint import pprint
# Defining the host is optional and defaults to https://api.miro.com
# See configuration.py for a list of all supported configuration parameters.
configuration = miro_api.Configuration(
    host = "https://api.miro.com"
)


# Enter a context with an instance of the API client
with miro_api.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = boards_api.BoardsApi(api_client)
    board_id = "board_id_example" # str | Unique identifier (ID) of the board that you want to update.
    board_changes = BoardChanges(
        description="description_example",
        name="Untitled",
        policy=BoardPolicyChange(
            permissions_policy=BoardPermissionsPolicy(
                collaboration_tools_start_access="all_editors",
                copy_access="anyone",
                sharing_access="team_members_with_editing_rights",
            ),
            sharing_policy=BoardSharingPolicyChange(
                access="private",
                invite_to_account_and_board_link_access="no_access",
                organization_access="private",
                team_access="private",
            ),
        ),
        team_id="team_id_example",
        project_id="project_id_example",
    ) # BoardChanges | 

    # example passing only required values which don't have defaults set
    try:
        # Update board
        api_response = api_instance.update_board(board_id, board_changes)
        pprint(api_response)
    except miro_api.ApiException as e:
        print("Exception when calling BoardsApi->update_board: %s\n" % e)
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **board_id** | **str**| Unique identifier (ID) of the board that you want to update. |
 **board_changes** | [**BoardChanges**](BoardChanges.md)|  |

### Return type

[**BoardWithLinks**](BoardWithLinks.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Board updated |  -  |
**400** | Malformed request |  -  |
**404** | Not found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

