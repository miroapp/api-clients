# BoardSharingPolicyChange

Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Defines the public-level access to the board. | [optional]  if omitted the server will use the default value of "private"
**invite_to_account_and_board_link_access** | **str** | Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the &#x60;inviteToAccountAndBoardLinkAccess&#x60; parameter is always set to &#x60;no_access&#x60; regardless of the value that you assign for this parameter. | [optional]  if omitted the server will use the default value of "no_access"
**organization_access** | **str** | Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the &#x60;organizationAccess&#x60; parameter is always set to the default value. | [optional]  if omitted the server will use the default value of "private"
**team_access** | **str** | Defines the team-level access to the board. | [optional]  if omitted the server will use the default value of "private"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


