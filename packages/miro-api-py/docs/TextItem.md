# TextItem


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier (ID) of an item. | 
**type** | **str** | Type of item that is returned. | 
**data** | [**TextData**](TextData.md) |  | [optional] 
**style** | [**TextStyle**](TextStyle.md) |  | [optional] 
**position** | [**Position**](Position.md) |  | [optional] 
**geometry** | [**Geometry**](Geometry.md) |  | [optional] 
**created_at** | **datetime** | Date and time when the item was created. &lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**created_by** | [**CreatedBy**](CreatedBy.md) |  | [optional] 
**modified_at** | **datetime** | Date and time when the item was last modified. &lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**modified_by** | [**ModifiedBy**](ModifiedBy.md) |  | [optional] 
**parent** | [**ParentLinksEnvelope**](ParentLinksEnvelope.md) |  | [optional] 
**links** | [**WidgetLinks**](WidgetLinks.md) |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


