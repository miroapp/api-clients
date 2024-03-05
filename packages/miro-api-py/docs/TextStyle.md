# TextStyle

Contains information about the style of a text item, such as the fill color or font family.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color** | **str** | Hex value representing the color for the text within the text item. Default: &#x60;#1a1a1a&#x60;. | [optional] 
**fill_color** | **str** | Background color of the text item. Default: &#x60;#ffffff&#x60;. | [optional] 
**fill_opacity** | **str** | Opacity level of the background color. Possible values: any number between &#x60;0.0&#x60; and &#x60;1.0&#x60;, where: &#x60;0.0&#x60;: the background color is completely transparent or invisible &#x60;1.0&#x60;: the background color is completely opaque or solid Default: &#x60;1.0&#x60; if &#x60;fillColor&#x60; provided, &#x60;0.0&#x60; if &#x60;fillColor&#x60; is not provided. | [optional] 
**font_family** | **str** | Font type for the text in the text item. Default: &#x60;arial&#x60;. | [optional] 
**font_size** | **str** | Font size, in dp. Default: &#x60;14&#x60;. | [optional] 
**text_align** | **str** | Horizontal alignment for the item&#39;s content. Default: &#x60;center.&#x60; | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


