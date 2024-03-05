# AppCardDataPlatform

Contains app card item data, such as the title, description, or fields.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A short text description to add context about the app card. | [optional] 
**fields** | [**[CustomField]**](CustomField.md) | Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view. | [optional] 
**owned** | **bool** | Defines whether the card is owned by the application making the call. | [optional] 
**status** | **str** | Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns &#x60;disabled&#x60;. | [optional] 
**title** | **str** | A short text header to identify the app card. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


