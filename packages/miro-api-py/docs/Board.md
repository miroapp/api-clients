# Board

Contains the result data.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the board. | 
**id** | **str** | Unique identifier (ID) of the board. | 
**name** | **str** | Name of the board. | 
**type** | **str** | Type of the object that is returned. In this case, type returns &#x60;board&#x60;. | 
**created_at** | **datetime** | Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**created_by** | [**UserInfoShort**](UserInfoShort.md) |  | [optional] 
**current_user_membership** | [**BoardMember**](BoardMember.md) |  | [optional] 
**last_opened_at** | **datetime** | Date and time when the board was last opened by any user. This information is only available when the boards are sorted by &#x60;last_opened&#x60;. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**last_opened_by** | [**UserInfoLastOpenedBy**](UserInfoLastOpenedBy.md) |  | [optional] 
**modified_at** | **datetime** | Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**modified_by** | [**UserInfoShort**](UserInfoShort.md) |  | [optional] 
**owner** | [**UserInfoShort**](UserInfoShort.md) |  | [optional] 
**picture** | [**Picture**](Picture.md) |  | [optional] 
**policy** | [**BoardPolicy**](BoardPolicy.md) |  | [optional] 
**team** | [**Team**](Team.md) |  | [optional] 
**project** | [**Project**](Project.md) |  | [optional] 
**view_link** | **str** | URL to view the board. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


