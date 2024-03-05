# TeamsPage

Page of teams that match the search query.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | [**PageLimit**](PageLimit.md) |  | 
**size** | [**PageSize**](PageSize.md) |  | 
**data** | [**[Team]**](Team.md) | List of teams | 
**cursor** | **str** | Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch. | [optional] 
**type** | **str** | Type of the object returned. | [optional]  if omitted the server will use the default value of "cursor-list"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


