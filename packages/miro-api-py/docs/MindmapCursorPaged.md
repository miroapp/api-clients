# MindmapCursorPaged


## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**[MindmapItem]**](MindmapItem.md) | Contains the result data. | [optional] 
**total** | **int** | Total number of results available. If the value of the &#x60;total&#x60; parameter is higher than the value of the &#x60;size&#x60; parameter, this means that there are more results that you can retrieve. To retrieve more results, you can make another request and set the &#x60;offset&#x60; value accordingly. For example, if there are &#x60;30&#x60; results, and the request has the &#x60;offset&#x60; set to &#x60;0&#x60; and the &#x60;limit&#x60; set to &#x60;20&#x60;, the &#x60;size&#x60; parameter will return &#x60;20&#x60; and the &#x60;total&#x60; parameter will return &#x60;30&#x60;. This means that there are 9 more results to retrieve (as the offset is zero-based). | [optional] 
**size** | **int** | Number of results returned in the response considering the &#x60;cursor&#x60; and the &#x60;limit&#x60; values sent in the request. For example, if there are &#x60;20&#x60; results, the request does not have a &#x60;cursor&#x60; value, and the &#x60;limit&#x60; set to &#x60;10&#x60;, the &#x60;size&#x60; of the results will be &#x60;10&#x60;.&lt;br&gt;In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.&#39; | [optional] 
**cursor** | **str** | A cursor-paginated method returns a portion of the total set of results based on the &#x60;limit&#x60; specified and a &#x60;cursor&#x60; that points to the next portion of the results. To retrieve the next set of results of the collection, set the &#x60;cursor&#x60; parameter in your next request to the value returned in this parameter.&#39; | [optional] 
**limit** | **int** | Maximum number of results returned based on the &#x60;limit&#x60; specified in the request. For example, if there are &#x60;20&#x60; results, the request has no &#x60;cursor&#x60; value, and the &#x60;limit&#x60; is set to &#x60;20&#x60;,the &#x60;size&#x60; of the results will be &#x60;20&#x60;. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the &#x60;cursor&#x60; parameter value that you obtained from the response.&#39; | [optional] 
**links** | [**PageLinks**](PageLinks.md) |  | [optional] 
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


