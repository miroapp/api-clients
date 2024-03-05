# ItemConnectionChangesData

The ending point of the connector. If startItem is also provided, endItem.id must be different from startItem.id

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier (ID) of the item to which you want to attach the connector. Note that Frames are not supported at the moment. | [optional] 
**position** | [**RelativeOffset**](RelativeOffset.md) |  | [optional] 
**snap_to** | **str** | The side of the item connector should be attached to, the connection point will be placed in the middle of that side. Option &#x60;auto&#x60; allows to pick a connection point automatically. Only either &#x60;position&#x60; or &#x60;snapTo&#x60; parameter is allowed to be set, if neither provided &#x60;snapTo: auto&#x60; will be used by default. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


