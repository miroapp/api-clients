# OrganizationMember

Organization member

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the user | 
**active** | **bool** | Flag is user active | 
**email** | **str** | User email | 
**license** | **str** | Name of the current user license in the organization | 
**role** | **str** | Name of the user role in the organization | 
**last_activity_at** | **datetime** | Last time when the user was active | [optional] 
**license_assigned_at** | **datetime** | Time when the license was assigned to the user | [optional] 
**type** | **str** | Type of the object returned. | [optional]  if omitted the server will use the default value of "organization-member"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


