# UpdateBoardSubscriptionRequest

Contains updated information about a subscription.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** | Indicates the HTTPS URL to which Miro sends a webhook when an event occurs. | [optional] 
**status** | **str** | Indicates whether the status of the webhook subscription. &#x60;enabled&#x60;: Miro sends a webhook when an event occurs in the associated board. &#x60;disabled&#x60;: Miro does not send a webhook even when an event occurs in the associated board. &#x60;lost_access&#x60;: The user with which the webhook subscription is associated has lost access to the board. The user needs to regain access to the board, and then reenable the webhook subscription by updating the webhook subscription status to &#x60;enabled&#x60; by using the update webhook endpoint. | [optional]  if omitted the server will use the default value of "enabled"
**any string name** | **bool, date, datetime, dict, float, int, list, str, none_type** | any string name can be used but the value must be the correct type | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


