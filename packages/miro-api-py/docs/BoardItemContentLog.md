# BoardItemContentLog

Contains information about the content log of for a board item.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the content log. | [optional] 
**item_id** | **str** | Unique identifier of the board item. | [optional] 
**type** | **bool, date, datetime, dict, float, int, list, str, none_type** | Type of the board item. | [optional] 
**action** | **str** | User action in the form of insert, update, or delete. | [optional] 
**board_key** | **str** | Unique identification of the board to which the item belongs. | [optional] 
**hidden** | **bool** | Indicates if the board is a hidden board. Returns &#x60;true&#x60; if board item is hidden. | [optional] 
**created_at** | **datetime** | Date and time when the board item was created.&lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).  | [optional] 
**created_by** | [**User**](User.md) |  | [optional] 
**modified_at** | **datetime** | Date and time when the board item was last modified.&lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).  | [optional] 
**modified_by** | [**User**](User.md) |  | [optional] 
**log_data** | [**BoardContentLogData**](BoardContentLogData.md) |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


