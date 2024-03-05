# TagsPagedResponse


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[Tag]**](Tag.md) | Contains the result data. | [optional] 
**total** | **int** | Total number of results available. If the value of the &#x60;total&#x60; parameter is higher than the value of the &#x60;size&#x60; parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the &#x60;offset&#x60; value accordingly. For example, if there are &#x60;30&#x60; results, and the request has the &#x60;offset&#x60; set to &#x60;0&#x60; and the &#x60;limit&#x60; set to &#x60;20&#x60;, the &#x60;size&#x60; parameter will return &#x60;20&#x60; and the &#x60;total&#x60; parameter will return &#x60;30&#x60;. This means that there are 9 more results to retrieve (as the offset is zero-based). | [optional] 
**size** | **int** | Number of results returned in the response. The &#x60;size&#x60; is the number of results returned considering the &#x60;offset&#x60; and the &#x60;limit&#x60; values sent in the request. For example, if there are &#x60;30&#x60; results, and the request has the offset set to &#x60;0&#x60; and the &#x60;limit&#x60; set to &#x60;20&#x60;, the &#x60;size&#x60; of the results will be &#x60;20&#x60;.&lt;br&gt;If there are &#x60;10&#x60; results, and the request has the offset set to &#x60;0&#x60; and the &#x60;limit&#x60; set to &#x60;20&#x60;, the &#x60;size&#x60; of the results will be &#x60;10&#x60;.&lt;br&gt;If there are &#x60;30&#x60; results, and the request has the offset set to &#x60;28&#x60; and the &#x60;limit&#x60; set to &#x60;20&#x60;, the &#x60;size&#x60; of the results will be &#x60;2&#x60; as the &#x60;offset&#x60; is the zero-based offset of the first item in the collection. | [optional] 
**offset** | **int** | Zero-based index of the first item in the collection. For example, If there are &#x60;30&#x60; results, and the request has the offset set to &#x60;28&#x60;, the response will return &#x60;2&#x60; results. | [optional] 
**limit** | **int** | Maximum number of results returned based on the &#x60;limit&#x60; specified in the request. For example, if there are &#x60;30&#x60; results, and the request has the offset set to &#x60;0&#x60; and the &#x60;limit&#x60; set to &#x60;20&#x60;, the &#x60;size&#x60; of the results will be &#x60;20&#x60;. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the offset parameter. In this example, you will set the offset parameter to 20 as the offset is zero-based.  | [optional] 
**links** | [**PageLinks**](PageLinks.md) |  | [optional] 
**type** | **str** |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


