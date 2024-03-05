# TeamMember


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Team member id. | 
**role** | **str** |  Role of the team member. * \&quot;member\&quot;:     Team member with full member permissions. * \&quot;admin\&quot;:      Admin of a team. Team member with permission to manage team. * \&quot;non_team\&quot;:   External user, non-team user. * \&quot;team_guest\&quot;: Team-guest user, user with access only to a team without access to organization.  | 
**team_id** | **str** | Team id | 
**created_at** | **datetime** | Date and time when member was invited to the team. | [optional] 
**created_by** | **str** | Id of the user who invited the team member. | [optional] 
**modified_at** | **datetime** | Date and time when the user&#39;s membership was last updated. | [optional] 
**modified_by** | **str** | Id of the user who last updated the user&#39;s membership. | [optional] 
**type** | **str** | Type of the object returned. | [optional]  if omitted the server will use the default value of "team-member"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


