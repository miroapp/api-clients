/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {BoardItemContentLog} from './boardItemContentLog'

/**
 * @internal
 * Response for query using cursor and filter parameters.
 */
export class GetBoardItemContentLogsResponse {
  /**
   * The maximum number of results to return per call. If the number of logs in the response is  greater than the limit specified, the response returns the cursor parameter with a value.
   */
  'limit'?: number
  /**
   * Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10. In this example, the response will also return a cursor value that can be used to retrieve the next set of 10 remaining results in the collection.
   */
  'size'?: number
  /**
   * Contains the list of content logs for a board item.
   */
  'data'?: Array<BoardItemContentLog>
  /**
   * Indicator of the position of the next page of the result. To retrieve the next page, make another query setting its cursor field to the value returned by the current query. If the value is empty, there are no more pages to fetch.
   */
  'cursor'?: string
  /**
   * Type of the object returned.
   */
  'type'?: string = 'cursor-list'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'limit',
      baseName: 'limit',
      type: 'number',
    },
    {
      name: 'size',
      baseName: 'size',
      type: 'number',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<BoardItemContentLog>',
    },
    {
      name: 'cursor',
      baseName: 'cursor',
      type: 'string',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return GetBoardItemContentLogsResponse.attributeTypeMap
  }
}
