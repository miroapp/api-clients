# EmbedUrlData

Contains information about the embed URL.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | A [valid URL](https://developers.miro.com/reference/data#embeddata) pointing to the content resource that you want to embed in the board. Possible transport protocols: HTTP, HTTPS. | defaults to "https://www.youtube.com/watch?v=HlVSNEiFCBk"
**mode** | **str** | Defines how the content in the embed item is displayed on the board. &#x60;inline&#x60;: The embedded content is displayed directly on the board. &#x60;modal&#x60;: The embedded content is displayed inside a modal overlay on the board. | [optional] 
**preview_url** | **str** | URL of the image to be used as the preview image for the embedded item. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


