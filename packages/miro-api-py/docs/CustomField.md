# CustomField

Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fill_color** | **str** | Hex value representing the color that fills the background area of the preview field, when it&#39;s displayed on the app card. | [optional] 
**icon_shape** | **str** | The shape of the icon on the preview field. | [optional]  if omitted the server will use the default value of "round"
**icon_url** | **str** | A valid URL pointing to an image available online. The transport protocol must be HTTPS. Possible image file formats: JPG/JPEG, PNG, SVG. | [optional] 
**text_color** | **str** | Hex value representing the color of the text string assigned to &#x60;value&#x60;. | [optional] 
**tooltip** | **str** | A short text displayed in a tooltip when clicking or hovering over the preview field. | [optional] 
**value** | **str** | The actual data value of the custom field. It can be any type of information that you want to convey. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


