# WidthOnlyAdjustableGeometry

Contains geometrical information about the item, such as its width or rotation. You can only specify the width of the text item as the height is dynamically updated based on the content.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rotation** | **float** | Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively. | [optional] 
**width** | **float** | Width of the item, in pixels. The minimum &#x60;width&#x60; of a &#x60;text&#x60; widget is relative to the font size of the &#x60;text&#x60; widget. The width must be at least 1.7 times wider than the font size. For example, if the font size of the &#x60;text&#x60; item is &#x60;14&#x60;, the minimum &#x60;width&#x60; is &#x60;24&#x60;. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


