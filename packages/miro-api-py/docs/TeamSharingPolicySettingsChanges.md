# TeamSharingPolicySettingsChanges

Team sharing policy settings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_listed_domains** | **[str]** | Allow listed domains | [optional] 
**create_asset_access_level** | **str** |  * \&quot;company_admins\&quot;: Only company admins can create assets in a team * \&quot;admins\&quot;: Both team and company admins can create assets in a team. * \&quot;all_members\&quot;: all_members  | [optional] 
**default_board_access** | **str** |  Default board access * \&quot;private\&quot;: Only board owners can access * \&quot;view\&quot;:    Anyone in the team can view * \&quot;comment\&quot;: Anyone in the team can comment * \&quot;edit\&quot;:    Anyone in the team can edit  | [optional] 
**default_organization_access** | **str** |  Default organization access * \&quot;private\&quot;: Only board owners can access * \&quot;view\&quot;:    Anyone in the team can view * \&quot;comment\&quot;: Anyone in the team can comment * \&quot;edit\&quot;:    Anyone in the team can edit  | [optional] 
**default_project_access** | **str** |  Default project access * \&quot;private\&quot;: Only board owners can access * \&quot;view\&quot;:    Anyone in the team can view  | [optional] 
**move_board_to_account** | **str** |  * \&quot;allowed\&quot;: Allow move board to team * \&quot;not_allowed\&quot;: Not allow move board to team  | [optional] 
**restrict_allowed_domains** | **str** |  * \&quot;enabled\&quot;: Enabled. Restrict to listed domain. * \&quot;disabled\&quot;: Disabled. No domain restriction. * \&quot;enabled_with_external_users_access\&quot;: Enabled. Restrict to listed domain but allows external users to access.  | [optional] 
**sharing_on_account** | **str** |  * \&quot;allowed\&quot;: Allow sharing on team * \&quot;not_allowed\&quot;: Not allow sharing on team  | [optional] 
**sharing_on_organization** | **str** |  * \&quot;allowed\&quot;: Allow sharing on organization * \&quot;allowed_with_editing\&quot;: Allow sharing with editing on organization * \&quot;not_allowed\&quot;: Not allow sharing on organization  | [optional] 
**sharing_via_public_link** | **str** |  * \&quot;allowed\&quot;: Allow sharing via public link * \&quot;allowed_with_editing\&quot;: Allow sharing with editing via public link * \&quot;not_allowed\&quot;: Not allow sharing via public link  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


