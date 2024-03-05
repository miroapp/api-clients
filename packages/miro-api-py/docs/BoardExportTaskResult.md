# BoardExportTaskResult

Board export task results.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**board_id** | **str** | Unique identifier of the board. | 
**status** | **str** | Indicates the status of the individual board export task. Possible values: &#x60;SUCCESS&#x60;: the board export task was completed successfully and the results are available. &#x60;ERROR&#x60;: the board export task encountered an error and failed to complete. The &#x60;errorMessage&#x60; field provides more information on the error. | 
**error_message** | **str** | Contains the description of the error that occurred during a board export task. | [optional] 
**export_link** | **str** | URL of the S3 bucket that contains the exported files. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


