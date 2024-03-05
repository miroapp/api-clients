# DocumentData


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document_url** | **str** | The URL to download the resource. You must use your access token to access the URL. The URL contains the &#x60;redirect&#x60; parameter to control the request execution. &#x60;redirect&#x60;: By default, the &#x60;redirect&#x60; parameter is set to &#x60;false&#x60; and the resource object containing the URL and the resource type is returned with a 200 OK HTTP code. This URL is valid for 60 seconds. You can use this URL to retrieve the resource file. If the &#x60;redirect&#x60; parameter is set to &#x60;true&#x60;, a 307 TEMPORARY_REDIRECT HTTP response is returned. If you follow HTTP 3xx responses as redirects, you will automatically be redirected to the resource file and the content type returned is &#x60;application/octet-stream&#x60;. | [optional] 
**title** | **str** | A short text header to identify the document. | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


