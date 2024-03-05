# ConnectorWithLinks

Contains the result data.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier (ID) of a connector. | 
**captions** | [**[Caption]**](Caption.md) | Blocks of text you want to display on the connector. | [optional] 
**created_at** | **datetime** | Date and time when the connector was created. &lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**created_by** | [**CreatedBy**](CreatedBy.md) |  | [optional] 
**end_item** | [**ItemConnectionWithLinks**](ItemConnectionWithLinks.md) |  | [optional] 
**is_supported** | **bool** | Indicates whether the connector is supported at the moment. If this parameter returns &#x60;false&#x60;, we do not support the connector at the moment. We do not allow updates for unsupported connectors and we might not return all data about the connector, such as intermediate points and connection points to the canvas. | [optional] 
**links** | [**SelfLink**](SelfLink.md) |  | [optional] 
**modified_at** | **datetime** | Date and time when the connector was last modified. &lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). | [optional] 
**modified_by** | [**ModifiedBy**](ModifiedBy.md) |  | [optional] 
**shape** | **str** | The path type of the connector line, defines curvature. Default: curved. | [optional]  if omitted the server will use the default value of "curved"
**start_item** | [**ItemConnectionWithLinks**](ItemConnectionWithLinks.md) |  | [optional] 
**style** | [**ConnectorStyle**](ConnectorStyle.md) |  | [optional] 
**type** | **str** | Type of board object that is returned. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


