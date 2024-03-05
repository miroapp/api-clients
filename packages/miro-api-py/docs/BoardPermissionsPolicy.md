# BoardPermissionsPolicy

Defines the permissions policies for the board.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collaboration_tools_start_access** | **str** | Defines who can start or stop timer, voting, video chat, screen sharing, attention management. Others will only be able to join. To change the value for the &#x60;collaborationToolsStartAccess&#x60; parameter, contact Miro Customer Support. | [optional]  if omitted the server will use the default value of "all_editors"
**copy_access** | **str** | Defines who can copy the board, copy objects, download images, and save the board as a template or PDF. | [optional]  if omitted the server will use the default value of "anyone"
**sharing_access** | **str** | Defines who can change access and invite users to this board. To change the value for the &#x60;sharingAccess&#x60; parameter, contact Miro Customer Support. | [optional]  if omitted the server will use the default value of "team_members_with_editing_rights"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


