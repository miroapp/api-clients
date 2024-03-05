# Position

Contains location information about the item, such as its x coordinate, y coordinate, and the origin of the x and y coordinates.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**origin** | **str** | Area of the item that is referenced by its x and y coordinates. For example, an item with a center origin will have its x and y coordinates point to its center. The center point of the board has x: 0 and y: 0 coordinates. Currently, only one option is supported (center). | [optional]  if omitted the server will use the default value of "center"
**relative_to** | **str** |  | [optional] 
**x** | **float** | X-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has &#x60;x: 0&#x60; and &#x60;y: 0&#x60; coordinates. | [optional] 
**y** | **float** | Y-axis coordinate of the location of the item on the board. By default, all items have absolute positioning to the board, not the current viewport. Default: 0. The center point of the board has &#x60;x: 0&#x60; and &#x60;y: 0&#x60; coordinates. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


