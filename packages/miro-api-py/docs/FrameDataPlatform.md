# FrameDataPlatform

Contains frame item data, such as the title, frame type, or frame format.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | Only custom frames are supported at the moment. | [optional]  if omitted the server will use the default value of "custom"
**title** | **str** | Title of the frame. This title appears at the top of the frame. | [optional] 
**type** | **str** | Only free form frames are supported at the moment. | [optional]  if omitted the server will use the default value of "freeform"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


