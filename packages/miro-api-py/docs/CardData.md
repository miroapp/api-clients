# CardData

Contains card item data, such as the title, description, due date, or assignee ID.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee_id** | **str** | Unique user identifier. In the GUI, the user ID is mapped to the name of the user who is assigned as the owner of the task or activity described in the card. The identifier is a string containing numbers, and it is automatically assigned to a user when they first sign up. | [optional] 
**description** | **str** | A short text description to add context about the card. | [optional] 
**due_date** | **datetime** | The date when the task or activity described in the card is due to be completed. In the GUI, users can select the due date from a calendar. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**title** | **str** | A short text header for the card. | [optional]  if omitted the server will use the default value of "sample card item"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


