/**
 * Miro Developer Platform
 * <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.
 *
 * The version of the OpenAPI document: v2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class BoardDataClassificationLabel {
  /**
   * Label color.
   */
  'color'?: string
  /**
   * Label description.
   */
  'description'?: string
  /**
   * Label id.
   */
  'id'?: string
  /**
   * Label name.
   */
  'name'?: string
  /**
   * Sharing Recommendation (one of NO_SHARING_RESTRICTIONS, ONLY_WITHIN_ORGANIZATION, ONLY_WITHIN_TEAM or ONLY_WITH_AUTHORIZED_TEAM_MEMBERS ).
   */
  'sharingRecommendation'?: string
  /**
   * Indicates the URL for the board classification label guidelines.
   */
  'guidelineUrl'?: string
  /**
   * Type of the object returned.
   */
  'type'?: string = 'board-data-classification-label'

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'color',
      baseName: 'color',
      type: 'string',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
    },
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
    },
    {
      name: 'sharingRecommendation',
      baseName: 'sharingRecommendation',
      type: 'string',
    },
    {
      name: 'guidelineUrl',
      baseName: 'guidelineUrl',
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
    return BoardDataClassificationLabel.attributeTypeMap
  }
}
