# BoardExportJobStatus


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_status** | **str** | Indicates the current state of the board export job. Possible values: &#x60;CREATED&#x60;: the job has been created but not yet started. Retry the status call after some time. &#x60;IN_PROGRESS&#x60;: the job is in progress, and the results are not ready yet. Retry the status call after some time. &#x60;FINISHED&#x60;: the job is complete. You can now get results for the board export job. | 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


