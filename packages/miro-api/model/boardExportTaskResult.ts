/**
 * Miro Developer Platform
 * <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro\'s Developer Platform 2.0.
 *
 * The version of the OpenAPI document: v2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @internal
 * Board export task results.
 */
export class BoardExportTaskResult {
  /**
   * Unique identifier of the board.
   */
  'boardId': string
  /**
   * Contains the description of the error that occurred during a board export task.
   */
  'errorMessage'?: string
  /**
   * URL of the S3 bucket that contains the exported files.
   */
  'exportLink'?: string
  /**
   * Indicates the status of the individual board export task. Possible values: `SUCCESS`: the board export task was completed successfully and the results are available. `ERROR`: the board export task encountered an error and failed to complete. The `errorMessage` field provides more information on the error.
   */
  'status': string
  /**
   * Indicates the type of error encountered during the board export task. Possible values: `TEMPORARY`: the board export task encountered a temporary error. Retry the board export task after some time. `FATAL`: the board export failed and cannot be retried. This export will never succeed due to issues such as board corruption, non-existence, or other unrecoverable errors. Please verify the board\'s state or contact support if assistance is needed. `UNKNOWN`: the board export task encountered an unexpected exception. Retry the board export task after some time.
   */
  'errorType'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'boardId',
      baseName: 'boardId',
      type: 'string',
    },
    {
      name: 'errorMessage',
      baseName: 'errorMessage',
      type: 'string',
    },
    {
      name: 'exportLink',
      baseName: 'exportLink',
      type: 'string',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'string',
    },
    {
      name: 'errorType',
      baseName: 'errorType',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardExportTaskResult.attributeTypeMap
  }
}
