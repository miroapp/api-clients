# OrganizationMembersSearchResponse

Response for query by cursor and filter parameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** | Maximum number of results returned based on the limit specified in the request. For example, if there are 20 results, the request has no cursor value, and the limit is set to 20, the size of the results will be 20. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the cursor parameter value. | [optional] 
**size** | **int** | Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. | [optional] 
**data** | [**[OrganizationMember]**](OrganizationMember.md) |  | [optional] 
**cursor** | **str** | Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch. | [optional] 
**type** | **str** | Type of the object returned. | [optional]  if omitted the server will use the default value of "cursor-list"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


