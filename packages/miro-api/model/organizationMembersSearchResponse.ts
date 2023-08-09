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

import {OrganizationMember} from './organizationMember'

/**
 * @internal
 * Response for query by cursor and filter parameters
 */
export class OrganizationMembersSearchResponse {
  /**
   * Maximum number of results returned based on the limit specified in the request. For example, if there are 20 results, the request has no cursor value, and the limit is set to 20, the size of the results will be 20. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the cursor parameter value.
   */
  'limit'?: number
  /**
   * Number of results returned in the response considering the cursor and the limit values sent in the request. For example, if there are 20 results, the request does not have a cursor value, and the limit set to 10, the size of the results will be 10.
   */
  'size'?: number
  'data'?: Array<OrganizationMember>
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
      type: 'Array<OrganizationMember>',
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
    return OrganizationMembersSearchResponse.attributeTypeMap
  }
}