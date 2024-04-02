import fetch, {Response, RequestInit} from 'node-fetch'
import {version} from '../package.json'
import FormData = require('form-data')

import {AppCardCreateRequest} from '../model/appCardCreateRequest'
import {AppCardItem} from '../model/appCardItem'
import {AppCardUpdateRequest} from '../model/appCardUpdateRequest'
import {GetBoards400Response} from '../model/getBoards400Response'

import {AuditPage} from '../model/auditPage'

import {BoardDataClassificationLabel} from '../model/boardDataClassificationLabel'
import {DataClassificationLabelId} from '../model/dataClassificationLabelId'

import {DataClassificationOrganizationSettings} from '../model/dataClassificationOrganizationSettings'

import {DataClassificationTeamSettings} from '../model/dataClassificationTeamSettings'
import {UpdateBoardsDataClassificationLabel} from '../model/updateBoardsDataClassificationLabel'
import {UpdateBoardsDataClassificationLabelRequest} from '../model/updateBoardsDataClassificationLabelRequest'
import {UpdateTeamSettingsRequest} from '../model/updateTeamSettingsRequest'

import {GetBoardItemContentLogsResponse} from '../model/getBoardItemContentLogsResponse'

import {BoardExportJobId} from '../model/boardExportJobId'
import {BoardExportJobStatus} from '../model/boardExportJobStatus'
import {BoardExportResult} from '../model/boardExportResult'
import {CreateBoardExportRequest} from '../model/createBoardExportRequest'

import {BoardMemberChanges} from '../model/boardMemberChanges'
import {BoardMemberWithLinks} from '../model/boardMemberWithLinks'
import {BoardMembersInvite} from '../model/boardMembersInvite'
import {BoardMembersPagedResponse} from '../model/boardMembersPagedResponse'
import {InvitationResult} from '../model/invitationResult'

import {BoardChanges} from '../model/boardChanges'
import {BoardWithLinks} from '../model/boardWithLinks'
import {BoardWithLinksAndLastOpened} from '../model/boardWithLinksAndLastOpened'
import {BoardWithLinksAndWithoutProject} from '../model/boardWithLinksAndWithoutProject'
import {BoardsPagedResponse} from '../model/boardsPagedResponse'
import {CopyBoardChanges} from '../model/copyBoardChanges'

import {BulkOperationError} from '../model/bulkOperationError'
import {ItemCreate} from '../model/itemCreate'
import {Items} from '../model/items'

import {CardCreateRequest} from '../model/cardCreateRequest'
import {CardItem} from '../model/cardItem'
import {CardUpdateRequest} from '../model/cardUpdateRequest'

import {ConnectorChangesData} from '../model/connectorChangesData'
import {ConnectorCreationData} from '../model/connectorCreationData'
import {ConnectorWithLinks} from '../model/connectorWithLinks'
import {ConnectorsCursorPaged} from '../model/connectorsCursorPaged'

import {CreateDocumentItemUsingFileFromDeviceRequestData} from '../model/createDocumentItemUsingFileFromDeviceRequestData'
import {DocumentCreateRequest} from '../model/documentCreateRequest'
import {DocumentItem} from '../model/documentItem'
import {DocumentUpdateRequest} from '../model/documentUpdateRequest'
import {UploadFileFromDeviceData} from '../model/uploadFileFromDeviceData'

import {EmbedCreateRequest} from '../model/embedCreateRequest'
import {EmbedItem} from '../model/embedItem'
import {EmbedUpdateRequest} from '../model/embedUpdateRequest'

import {GenericItem} from '../model/genericItem'
import {GenericItemCursorPaged} from '../model/genericItemCursorPaged'
import {ShapeCreateRequest} from '../model/shapeCreateRequest'
import {ShapeItem} from '../model/shapeItem'
import {ShapeUpdateRequest} from '../model/shapeUpdateRequest'

import {FrameCreateRequest} from '../model/frameCreateRequest'
import {FrameItem} from '../model/frameItem'
import {FrameUpdateRequest} from '../model/frameUpdateRequest'

import {ImageCreateRequest} from '../model/imageCreateRequest'
import {ImageItem} from '../model/imageItem'
import {ImageUpdateRequest} from '../model/imageUpdateRequest'

import {GenericItemUpdate} from '../model/genericItemUpdate'

import {MindmapCreateRequest} from '../model/mindmapCreateRequest'
import {MindmapCursorPaged} from '../model/mindmapCursorPaged'
import {MindmapItem} from '../model/mindmapItem'

import {EnterpriseGetOrganizationMembers200Response} from '../model/enterpriseGetOrganizationMembers200Response'
import {OrganizationMember} from '../model/organizationMember'

import {Organization} from '../model/organization'

import {AddProjectMemberRequest} from '../model/addProjectMemberRequest'
import {Error400} from '../model/error400'
import {Error401} from '../model/error401'
import {Error403} from '../model/error403'
import {Error404} from '../model/error404'
import {Error409} from '../model/error409'
import {Error429} from '../model/error429'
import {ProjectMember} from '../model/projectMember'
import {ProjectMemberPage} from '../model/projectMemberPage'
import {UpdateProjectMemberRequest} from '../model/updateProjectMemberRequest'

import {ProjectSettings} from '../model/projectSettings'
import {UpdateProjectSettingsRequest} from '../model/updateProjectSettingsRequest'

import {CreateProjectRequest} from '../model/createProjectRequest'
import {Project} from '../model/project'
import {ProjectPage} from '../model/projectPage'
import {UpdateProjectRequest} from '../model/updateProjectRequest'

import {StickyNoteCreateRequest} from '../model/stickyNoteCreateRequest'
import {StickyNoteItem} from '../model/stickyNoteItem'
import {StickyNoteUpdateRequest} from '../model/stickyNoteUpdateRequest'

import {GetTagsFromItem400Response} from '../model/getTagsFromItem400Response'
import {GetTagsResponse} from '../model/getTagsResponse'
import {ItemPagedResponse} from '../model/itemPagedResponse'
import {TagCreateRequest} from '../model/tagCreateRequest'
import {TagUpdateRequest} from '../model/tagUpdateRequest'
import {TagWithLinks} from '../model/tagWithLinks'
import {TagsPagedResponse} from '../model/tagsPagedResponse'

import {TeamMember} from '../model/teamMember'
import {TeamMemberChanges} from '../model/teamMemberChanges'
import {TeamMemberInvite} from '../model/teamMemberInvite'
import {TeamMembersPage} from '../model/teamMembersPage'

import {TeamSettings} from '../model/teamSettings'
import {TeamSettingsChanges} from '../model/teamSettingsChanges'

import {CreateTeamRequest} from '../model/createTeamRequest'
import {Team} from '../model/team'
import {TeamChanges} from '../model/teamChanges'
import {TeamsPage} from '../model/teamsPage'

import {TextCreateRequest} from '../model/textCreateRequest'
import {TextItem} from '../model/textItem'
import {TextUpdateRequest} from '../model/textUpdateRequest'

import {TokenInformation} from '../model/tokenInformation'

import {BoardSubscription} from '../model/boardSubscription'
import {CreateBoardSubscriptionRequest} from '../model/createBoardSubscriptionRequest'
import {GenericSubscription} from '../model/genericSubscription'
import {GenericSubscriptionsCursorPaged} from '../model/genericSubscriptionsCursorPaged'
import {UpdateBoardSubscriptionRequest} from '../model/updateBoardSubscriptionRequest'

import {ObjectSerializer, RequestFile} from '../model/models'

let defaultBasePath = 'https://api.miro.com'

export type Logger = (...thing: any) => void

export class MiroApi {
  accessToken: string | (() => Promise<string>)
  basePath: string
  logger?: Logger
  httpTimeout?: number

  constructor(
    accessToken: string | (() => Promise<string>),
    basePath: string = defaultBasePath,
    logger?: Logger,
    httpTimeout?: number,
  ) {
    this.accessToken = accessToken
    this.basePath = basePath
    this.logger = logger
    this.httpTimeout = httpTimeout
  }

  /**
   * Adds an app card item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create app card item
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param appCardCreateRequest
   */
  async createAppCardItem(
    boardId: string,
    appCardCreateRequest: AppCardCreateRequest,
  ): Promise<{response: Response; body: AppCardItem}> {
    const localVarPath = '/v2/boards/{board_id}/app_cards'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createAppCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(appCardCreateRequest, 'AppCardCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'AppCardItem')

    return {response, body}
  }

  /**
   * Deletes an app card item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete app card item
   * @param boardId Unique identifier (ID) of the board from which you want to delete an item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteAppCardItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/app_cards/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteAppCardItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteAppCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific app card item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get app card item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getAppCardItem(boardId: string, itemId: string): Promise<{response: Response; body: AppCardItem}> {
    const localVarPath = '/v2/boards/{board_id}/app_cards/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getAppCardItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getAppCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'AppCardItem')

    return {response, body}
  }

  /**
   * Updates an app card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update app card item
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param appCardUpdateRequest
   */
  async updateAppCardItem(
    boardId: string,
    itemId: string,
    appCardUpdateRequest: AppCardUpdateRequest,
  ): Promise<{response: Response; body: AppCardItem}> {
    const localVarPath = '/v2/boards/{board_id}/app_cards/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateAppCardItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateAppCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(appCardUpdateRequest, 'AppCardUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'AppCardItem')

    return {response, body}
  }

  /**
   * Retrieves a page of audit events.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>auditlogs:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a>
   * @summary Get audit logs
   * @param createdAfter Retrieve audit logs created after the date and time provided. This is the start date of the duration for which you want to retrieve audit logs. For example, if you want to retrieve audit logs between &#x60;2023-03-30T17:26:50.000Z&#x60; and &#x60;2023-04-30T17:26:50.000Z&#x60;, provide &#x60;2023-03-30T17:26:50.000Z&#x60; as the value for the &#x60;createdAfter&#x60; parameter.&lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), including milliseconds and a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).\&quot;
   * @param createdBefore Retrieve audit logs created before the date and time provided. This is the end date of the duration for which you want to retrieve audit logs. For example, if you want to retrieve audit logs between &#x60;2023-03-30T17:26:50.000Z&#x60; and &#x60;2023-04-30T17:26:50.000Z&#x60;, provide &#x60;2023-04-30T17:26:50.000Z&#x60; as the value for the &#x60;createdBefore&#x60; parameter.&lt;br&gt;Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), including milliseconds and a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   * @param cursor A cursor-paginated method returns a portion of the total set of results based on the &#x60;limit&#x60; specified and a &#x60;cursor&#x60; that points to the next portion of the results. To retrieve the next set of results of the collection, set the &#x60;cursor&#x60; parameter in your next request to the appropriate cursor value returned in the response.
   * @param limit Maximum number of results returned based on the &#x60;limit&#x60; specified in the request. For example, if there are &#x60;30&#x60; results, the request has no &#x60;cursor&#x60; value, and the &#x60;limit&#x60; is set to &#x60;20&#x60;,the &#x60;size&#x60; of the results will be &#x60;20&#x60;. The rest of the results will not be returned. To retrieve the rest of the results, you must make another request and set the appropriate value for the &#x60;cursor&#x60; parameter value that  you obtained from the response.&lt;br&gt;Default: &#x60;100&#x60;
   * @param sorting Sort order in which you want to view the result set. Based on the value you provide, the results are sorted in an ascending or descending order of the audit log creation date (audit log &#x60;createdAt&#x60; parameter).&lt;br&gt;Default: &#x60;ASC&#x60;
   */
  async enterpriseGetAuditLogs(
    createdAfter: string,
    createdBefore: string,
    query?: {
      cursor?: string

      limit?: number

      sorting?: 'ASC' | 'DESC'
    },
  ): Promise<{response: Response; body: AuditPage}> {
    const localVarPath = '/v2/audit/logs'
    let localVarQueryParameters = new URLSearchParams()

    // verify required parameter 'createdAfter' is not null or undefined
    if (createdAfter === null || createdAfter === undefined) {
      throw new Error('Required parameter createdAfter was null or undefined when calling enterpriseGetAuditLogs.')
    }

    if (createdAfter !== undefined) {
      localVarQueryParameters.append('createdAfter', ObjectSerializer.serialize(createdAfter, 'string'))
    }

    // verify required parameter 'createdBefore' is not null or undefined
    if (createdBefore === null || createdBefore === undefined) {
      throw new Error('Required parameter createdBefore was null or undefined when calling enterpriseGetAuditLogs.')
    }

    if (createdBefore !== undefined) {
      localVarQueryParameters.append('createdBefore', ObjectSerializer.serialize(createdBefore, 'string'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'number'))
    }

    if (query?.sorting !== undefined) {
      localVarQueryParameters.append('sorting', ObjectSerializer.serialize(query?.sorting, "'ASC' | 'DESC'"))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'AuditPage')

    return {response, body}
  }

  /**
   * Retrieves board classification for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get board classification
   * @param orgId id of the organization
   * @param teamId id of the team
   * @param boardId Unique identifier of the board that you want to retrieve.
   */
  async enterpriseDataclassificationBoardGet(
    orgId: string,
    teamId: string,
    boardId: string,
  ): Promise<{response: Response; body: BoardDataClassificationLabel}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/boards/{board_id}/data-classification'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error(
        'Required parameter orgId was null or undefined when calling enterpriseDataclassificationBoardGet.',
      )
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error(
        'Required parameter teamId was null or undefined when calling enterpriseDataclassificationBoardGet.',
      )
    }
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error(
        'Required parameter boardId was null or undefined when calling enterpriseDataclassificationBoardGet.',
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardDataClassificationLabel')

    return {response, body}
  }

  /**
   * Updates board classification for an existing board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update board classification
   * @param orgId id of the organization
   * @param teamId id of the team
   * @param boardId Unique identifier of the board that you want to update.
   * @param dataClassificationLabelId
   */
  async enterpriseDataclassificationBoardSet(
    orgId: string,
    teamId: string,
    boardId: string,
    dataClassificationLabelId: DataClassificationLabelId,
  ): Promise<{response: Response; body: BoardDataClassificationLabel}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/boards/{board_id}/data-classification'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error(
        'Required parameter orgId was null or undefined when calling enterpriseDataclassificationBoardSet.',
      )
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error(
        'Required parameter teamId was null or undefined when calling enterpriseDataclassificationBoardSet.',
      )
    }
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error(
        'Required parameter boardId was null or undefined when calling enterpriseDataclassificationBoardSet.',
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(dataClassificationLabelId, 'DataClassificationLabelId')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardDataClassificationLabel')

    return {response, body}
  }

  /**
   * Retrieves board classification settings for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get organization settings
   * @param orgId id of the organization
   */
  async enterpriseDataclassificationOrganizationSettingsGet(
    orgId: string,
  ): Promise<{response: Response; body: DataClassificationOrganizationSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/data-classification-settings'.replace(
      '{' + 'org_id' + '}',
      encodeURIComponent(String(orgId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error(
        'Required parameter orgId was null or undefined when calling enterpriseDataclassificationOrganizationSettingsGet.',
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DataClassificationOrganizationSettings')

    return {response, body}
  }

  /**
   * Updates board classification for not-classified only or all boards in an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Bulk update boards classification
   * @param orgId id of the organization
   * @param teamId id of the team
   * @param updateBoardsDataClassificationLabelRequest
   */
  async enterpriseDataclassificationTeamBoardsBulk(
    orgId: string,
    teamId: string,
    updateBoardsDataClassificationLabelRequest: UpdateBoardsDataClassificationLabelRequest,
  ): Promise<{response: Response; body: UpdateBoardsDataClassificationLabel}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/data-classification'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error(
        'Required parameter orgId was null or undefined when calling enterpriseDataclassificationTeamBoardsBulk.',
      )
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error(
        'Required parameter teamId was null or undefined when calling enterpriseDataclassificationTeamBoardsBulk.',
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(
        ObjectSerializer.serialize(
          updateBoardsDataClassificationLabelRequest,
          'UpdateBoardsDataClassificationLabelRequest',
        ),
      ),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'UpdateBoardsDataClassificationLabel')

    return {response, body}
  }

  /**
   * Retrieves board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get team settings
   * @param orgId id of the organization
   * @param teamId id of the team
   */
  async enterpriseDataclassificationTeamSettingsGet(
    orgId: string,
    teamId: string,
  ): Promise<{response: Response; body: DataClassificationTeamSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/data-classification-settings'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error(
        'Required parameter orgId was null or undefined when calling enterpriseDataclassificationTeamSettingsGet.',
      )
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error(
        'Required parameter teamId was null or undefined when calling enterpriseDataclassificationTeamSettingsGet.',
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DataClassificationTeamSettings')

    return {response, body}
  }

  /**
   * Updates board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update team settings
   * @param orgId id of the organization
   * @param teamId id of the team
   * @param updateTeamSettingsRequest
   */
  async enterpriseDataclassificationTeamSettingsSet(
    orgId: string,
    teamId: string,
    updateTeamSettingsRequest: UpdateTeamSettingsRequest,
  ): Promise<{response: Response; body: DataClassificationTeamSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/data-classification-settings'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error(
        'Required parameter orgId was null or undefined when calling enterpriseDataclassificationTeamSettingsSet.',
      )
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error(
        'Required parameter teamId was null or undefined when calling enterpriseDataclassificationTeamSettingsSet.',
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(updateTeamSettingsRequest, 'UpdateTeamSettingsRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DataClassificationTeamSettings')

    return {response, body}
  }

  /**
   * Retrieves content changes for board items within your organization. Content changes are actions that users can perform on board items, such as updating a sticky note\'s text. You can retrieve results for a specific time period. You can also filter results based on the board IDs and the emails of users who created, modified, or deleted a board item. Additionally, results can be paginated for easier viewing and processing. <br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>contentlogs:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin.</p>
   * @summary Retrieve content change logs of board items
   * @param orgId Unique identifier of the organization.
   * @param from Filter content logs based on the date and time when the board item was last modified. This is the start date and time for the modified date duration. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   * @param to Filter content logs based on the date and time when the board item was last modified. This is the end date and time for the modified date duration. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).
   * @param boardIds List of board IDs for which you want to retrieve the content logs.
   * @param emails Filter content logs based on the list of emails of users who created, modified, or deleted the board item.
   * @param cursor A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, set the cursor parameter equal to the cursor value you received in the response of the previous request.
   * @param limit The maximum number of results to return per call. If the number of logs in the response is greater than the limit specified, the response returns the cursor parameter with a value.
   * @param sorting Sort order in which you want to view the result set based on the modified date. To sort by an ascending modified date, specify &#x60;asc&#x60;. To sort by a descending modified date, specify &#x60;desc&#x60;.
   */
  async enterpriseBoardContentItemLogsFetch(
    orgId: string,
    from: Date,
    to: Date,
    query?: {
      boardIds?: Array<string>

      emails?: Array<string>

      cursor?: string

      limit?: number

      sorting?: 'asc' | 'desc'
    },
  ): Promise<{response: Response; body: GetBoardItemContentLogsResponse}> {
    const localVarPath = '/v2/orgs/{org_id}/content-logs/items'.replace(
      '{' + 'org_id' + '}',
      encodeURIComponent(String(orgId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error(
        'Required parameter orgId was null or undefined when calling enterpriseBoardContentItemLogsFetch.',
      )
    }

    if (query?.boardIds !== undefined) {
      localVarQueryParameters.append('board_ids', ObjectSerializer.serialize(query?.boardIds, 'Array<string>'))
    }

    if (query?.emails !== undefined) {
      localVarQueryParameters.append('emails', ObjectSerializer.serialize(query?.emails, 'Array<string>'))
    }

    // verify required parameter 'from' is not null or undefined
    if (from === null || from === undefined) {
      throw new Error('Required parameter from was null or undefined when calling enterpriseBoardContentItemLogsFetch.')
    }

    if (from !== undefined) {
      localVarQueryParameters.append('from', ObjectSerializer.serialize(from, 'Date'))
    }

    // verify required parameter 'to' is not null or undefined
    if (to === null || to === undefined) {
      throw new Error('Required parameter to was null or undefined when calling enterpriseBoardContentItemLogsFetch.')
    }

    if (to !== undefined) {
      localVarQueryParameters.append('to', ObjectSerializer.serialize(to, 'Date'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'number'))
    }

    if (query?.sorting !== undefined) {
      localVarQueryParameters.append('sorting', ObjectSerializer.serialize(query?.sorting, "'asc' | 'desc'"))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GetBoardItemContentLogsResponse')

    return {response, body}
  }

  /**
   * Retrieves the result of the board export job. The response provides more information about the board export job, such as the S3 link to the files created.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin and eDiscovery is enabled in the Settings. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get results for board export job
   * @param orgId Unique identifier of the organization.
   * @param jobId Unique identifier of the job.
   */
  async enterpriseBoardExportJobResults(
    orgId: string,
    jobId: string,
  ): Promise<{response: Response; body: BoardExportResult}> {
    const localVarPath = '/v2/orgs/{org_id}/boards/export/jobs/{job_id}/results'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseBoardExportJobResults.')
    }
    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new Error('Required parameter jobId was null or undefined when calling enterpriseBoardExportJobResults.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardExportResult')

    return {response, body}
  }

  /**
   * Retrieves the status of the board export job.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin and eDiscovery is enabled in the Settings. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get board export job status
   * @param orgId Unique identifier of the organization.
   * @param jobId Unique identifier of the board export job.
   */
  async enterpriseBoardExportJobStatus(
    orgId: string,
    jobId: string,
  ): Promise<{response: Response; body: BoardExportJobStatus}> {
    const localVarPath = '/v2/orgs/{org_id}/boards/export/jobs/{job_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'job_id' + '}', encodeURIComponent(String(jobId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseBoardExportJobStatus.')
    }
    // verify required parameter 'jobId' is not null or undefined
    if (jobId === null || jobId === undefined) {
      throw new Error('Required parameter jobId was null or undefined when calling enterpriseBoardExportJobStatus.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardExportJobStatus')

    return {response, body}
  }

  /**
   * Creates an export job for one or more boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:export</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin and eDiscovery is enabled in the Settings. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Create board export job
   * @param orgId Unique identifier of the organization.
   * @param requestId Unique identifier of the board export job.
   * @param createBoardExportRequest
   */
  async enterpriseCreateBoardExport(
    orgId: string,
    requestId: string,
    createBoardExportRequest: CreateBoardExportRequest,
  ): Promise<{response: Response; body: BoardExportJobId}> {
    const localVarPath = '/v2/orgs/{org_id}/boards/export/jobs'.replace(
      '{' + 'org_id' + '}',
      encodeURIComponent(String(orgId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseCreateBoardExport.')
    }

    // verify required parameter 'requestId' is not null or undefined
    if (requestId === null || requestId === undefined) {
      throw new Error('Required parameter requestId was null or undefined when calling enterpriseCreateBoardExport.')
    }

    if (requestId !== undefined) {
      localVarQueryParameters.append('request_id', ObjectSerializer.serialize(requestId, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(createBoardExportRequest, 'CreateBoardExportRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardExportJobId')

    return {response, body}
  }

  /**
   * Retrieves a pageable list of members for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get all board members
   * @param boardId Unique identifier (ID) of the board to which the board member belongs.
   * @param limit
   * @param offset
   */
  async getBoardMembers(
    boardId: string,
    query?: {
      limit?: string

      offset?: string
    },
  ): Promise<{response: Response; body: BoardMembersPagedResponse}> {
    const localVarPath = '/v2/boards/{board_id}/members'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getBoardMembers.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.offset !== undefined) {
      localVarQueryParameters.append('offset', ObjectSerializer.serialize(query?.offset, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardMembersPagedResponse')

    return {response, body}
  }

  /**
   * Retrieves information for a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific board member
   * @param boardId Unique identifier (ID) of the board to which the board member belongs.
   * @param boardMemberId Unique identifier (ID) of the board member whose role you want to retrieve.
   */
  async getSpecificBoardMember(
    boardId: string,
    boardMemberId: string,
  ): Promise<{response: Response; body: BoardMemberWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/members/{board_member_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'board_member_id' + '}', encodeURIComponent(String(boardMemberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getSpecificBoardMember.')
    }
    // verify required parameter 'boardMemberId' is not null or undefined
    if (boardMemberId === null || boardMemberId === undefined) {
      throw new Error('Required parameter boardMemberId was null or undefined when calling getSpecificBoardMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardMemberWithLinks')

    return {response, body}
  }

  /**
   * Removes a board member from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Remove board member
   * @param boardId Unique identifier (ID) of the board from which you want to delete an item.
   * @param boardMemberId Unique identifier (ID) of the board member whose role you want to delete.
   */
  async removeBoardMember(boardId: string, boardMemberId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/members/{board_member_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'board_member_id' + '}', encodeURIComponent(String(boardMemberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling removeBoardMember.')
    }
    // verify required parameter 'boardMemberId' is not null or undefined
    if (boardMemberId === null || boardMemberId === undefined) {
      throw new Error('Required parameter boardMemberId was null or undefined when calling removeBoardMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Shares the board and Invites new members to collaborate on a board by sending an invitation email. Depending on the board\'s Sharing policy, there might be various scenarios where membership in the team is required in order to share the board with a user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Share board
   * @param boardId Unique identifier (ID) of the board to which the board member belongs.
   * @param boardMembersInvite
   */
  async shareBoard(
    boardId: string,
    boardMembersInvite: BoardMembersInvite,
  ): Promise<{response: Response; body: InvitationResult}> {
    const localVarPath = '/v2/boards/{board_id}/members'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling shareBoard.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(boardMembersInvite, 'BoardMembersInvite')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'InvitationResult')

    return {response, body}
  }

  /**
   * Updates the role of a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update board member
   * @param boardId Unique identifier (ID) of the board for which you want to update the role of the board member.
   * @param boardMemberId Unique identifier (ID) of the board member whose role you want to update.
   * @param boardMemberChanges
   */
  async updateBoardMember(
    boardId: string,
    boardMemberId: string,
    boardMemberChanges: BoardMemberChanges,
  ): Promise<{response: Response; body: BoardMemberWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/members/{board_member_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'board_member_id' + '}', encodeURIComponent(String(boardMemberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateBoardMember.')
    }
    // verify required parameter 'boardMemberId' is not null or undefined
    if (boardMemberId === null || boardMemberId === undefined) {
      throw new Error('Required parameter boardMemberId was null or undefined when calling updateBoardMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(boardMemberChanges, 'BoardMemberChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardMemberWithLinks')

    return {response, body}
  }

  /**
   * Creates a copy of an existing board. You can also update the name, description, sharing policy, and permissions policy for the new board in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>
   * @summary Copy board
   * @param copyFrom Unique identifier (ID) of the board that you want to copy.
   * @param copyBoardChanges
   */
  async copyBoard(
    copyFrom: string,

    copyBoardChanges?: CopyBoardChanges,
  ): Promise<{response: Response; body: BoardWithLinksAndWithoutProject}> {
    const localVarPath = '/v2/boards'
    let localVarQueryParameters = new URLSearchParams()

    // verify required parameter 'copyFrom' is not null or undefined
    if (copyFrom === null || copyFrom === undefined) {
      throw new Error('Required parameter copyFrom was null or undefined when calling copyBoard.')
    }

    if (copyFrom !== undefined) {
      localVarQueryParameters.append('copy_from', ObjectSerializer.serialize(copyFrom, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PUT',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(copyBoardChanges, 'CopyBoardChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinksAndWithoutProject')

    return {response, body}
  }

  /**
   * Creates a board with the specified name and sharing policies.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Create board
   * @param boardChanges
   */
  async createBoard(boardChanges?: BoardChanges): Promise<{response: Response; body: BoardWithLinks}> {
    const localVarPath = '/v2/boards'
    let localVarQueryParameters = new URLSearchParams()

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(boardChanges, 'BoardChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinks')

    return {response, body}
  }

  /**
   * Deletes a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete board
   * @param boardId Unique identifier (ID) of the board that you want to delete.
   */
  async deleteBoard(boardId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}'.replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteBoard.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves a list of boards that match the search criteria provided in the request. If you are an Enterprise customer and a Company Admin, you can retrieve all boards, including all private boards (boards that haven\'t been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see [Content Admin permissions for Company Admins](https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins). Note that you only get results instantaneously when you filter by the `team_id`, `project_id`, or both the `team_id` and `project_id`. If you use any other filter,  you need to give a few seconds for the indexing of newly created boards before retrieving boards.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get boards
   * @param teamId
   * @param projectId
   * @param query
   * @param owner
   * @param limit
   * @param offset
   * @param sort
   */
  async getBoards(query?: {
    teamId?: string

    projectId?: string

    query?: string

    owner?: string

    limit?: string

    offset?: string

    sort?: 'default' | 'last_modified' | 'last_opened' | 'last_created' | 'alphabetically'
  }): Promise<{response: Response; body: BoardsPagedResponse}> {
    const localVarPath = '/v2/boards'
    let localVarQueryParameters = new URLSearchParams()

    if (query?.teamId !== undefined) {
      localVarQueryParameters.append('team_id', ObjectSerializer.serialize(query?.teamId, 'string'))
    }

    if (query?.projectId !== undefined) {
      localVarQueryParameters.append('project_id', ObjectSerializer.serialize(query?.projectId, 'string'))
    }

    if (query?.query !== undefined) {
      localVarQueryParameters.append('query', ObjectSerializer.serialize(query?.query, 'string'))
    }

    if (query?.owner !== undefined) {
      localVarQueryParameters.append('owner', ObjectSerializer.serialize(query?.owner, 'string'))
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.offset !== undefined) {
      localVarQueryParameters.append('offset', ObjectSerializer.serialize(query?.offset, 'string'))
    }

    if (query?.sort !== undefined) {
      localVarQueryParameters.append(
        'sort',
        ObjectSerializer.serialize(
          query?.sort,
          "'default' | 'last_modified' | 'last_opened' | 'last_created' | 'alphabetically'",
        ),
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardsPagedResponse')

    return {response, body}
  }

  /**
   * Retrieves information about a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific board
   * @param boardId Unique identifier (ID) of the board that you want to retrieve.
   */
  async getSpecificBoard(boardId: string): Promise<{response: Response; body: BoardWithLinksAndLastOpened}> {
    const localVarPath = '/v2/boards/{board_id}'.replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getSpecificBoard.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinksAndLastOpened')

    return {response, body}
  }

  /**
   * Updates a specific board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update board
   * @param boardId Unique identifier (ID) of the board that you want to update.
   * @param boardChanges
   */
  async updateBoard(boardId: string, boardChanges: BoardChanges): Promise<{response: Response; body: BoardWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}'.replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateBoard.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(boardChanges, 'BoardChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinks')

    return {response, body}
  }

  /**
   * Adds different types of items to a board. You can add up to 20 items of the same or different type per create call. For example, you can create 3 shape items, 4 card items, and 5 sticky notes in one create call. The bulk create operation is transactional. If any item\'s create operation fails, the create operation for all the remaining items also fails, and none of the items will be created. <br/><br>To try out this API in our documentation:<br/><br>1. In the **BODY PARAMS** section, scroll down until you see **ADD OBJECT** (Figure 1).<br><br><img alt=“add src=\"https://files.readme.io/570dac1-small-add_object.png\"><br>Figure 1. Add object user interface in readme<br><br>2. Click **ADD OBJECT**, and then select or enter the appropriate values for parameters of the item that you want to add.<br><br>3. Repeat steps 1 and 2 for each item that you want to add.<br> <br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> per item. For example, if you want to create one sticky note, one card, and one shape item in one call, the rate limiting applicable will be 300 credits. This is because create item calls take Level 2 rate limiting of 100 credits each, 100 for sticky note, 100 for card, and 100 for shape item.
   * @summary Create items in bulk
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param itemCreate
   */
  async createItems(boardId: string, itemCreate: Array<ItemCreate>): Promise<{response: Response; body: Items}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/items/bulk'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createItems.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(itemCreate, 'Array<ItemCreate>')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Items')

    return {response, body}
  }

  /**
   * Adds different types of items to a board using files from device. You can add up to 20 items of the same or different type per create call. For example, you can create 3 shape items, 4 card items, and 5 sticky notes in one create call. The bulk create operation is transactional. If any item\'s create operation fails, the create operation for all the remaining items also fails, and none of the items will be created. <br/><br>To try out this API in our documentation:<br/><br>1. In the **BODY PARAMS** section, scroll down until you see **ADD OBJECT** (Figure 1).<br><br><img alt=“add src=\"https://files.readme.io/570dac1-small-add_object.png\"><br>Figure 1. Add object user interface in readme<br><br>2. Click **ADD OBJECT**, and then select or enter the appropriate values for parameters of the item that you want to add.<br><br>3. Repeat steps 1 and 2 for each item that you want to add.<br> <br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> per item. For example, if you want to create one sticky note, one card, and one shape item in one call, the rate limiting applicable will be 300 credits. This is because create item calls take Level 2 rate limiting of 100 credits each, 100 for sticky note, 100 for card, and 100 for shape item.
   * @summary Create items in bulk using file from device
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param data Select a file containing json object describing files to upload
   * @param resources Select files to upload
   */
  async createItemsInBulkUsingFileFromDevice(
    boardId: string,

    data?: RequestFile,

    resources?: RequestFile,
  ): Promise<{response: Response; body: Items}> {
    const localVarPath =
      '/v2-experimental/boards/{board_id_PlatformBulkCreateOperationExperimentalReleaseUsingFileFromDevice}/items/bulk'.replace(
        '{' + 'board_id' + '}',
        encodeURIComponent(String(boardId)),
      )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error(
        'Required parameter boardId was null or undefined when calling createItemsInBulkUsingFileFromDevice.',
      )
    }

    const formData = new FormData()
    let extension = ''
    if (data) {
      if ('createItemsInBulkUsingFileFromDevice'.includes('Image')) {
        extension = '.png'
      } else if ('createItemsInBulkUsingFileFromDevice'.includes('Document')) {
        extension = '.pdf'
      }
      formData.append('data', data, 'file' + extension)
    }
    if (resources) {
      if ('createItemsInBulkUsingFileFromDevice'.includes('Image')) {
        extension = '.png'
      } else if ('createItemsInBulkUsingFileFromDevice'.includes('Document')) {
        extension = '.pdf'
      }
      formData.append('resources', resources, 'file' + extension)
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      formData,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Items')

    return {response, body}
  }

  /**
   * Adds a card item to a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create card item
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param cardCreateRequest
   */
  async createCardItem(
    boardId: string,
    cardCreateRequest: CardCreateRequest,
  ): Promise<{response: Response; body: CardItem}> {
    const localVarPath = '/v2/boards/{board_id}/cards'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(cardCreateRequest, 'CardCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'CardItem')

    return {response, body}
  }

  /**
   * Deletes a card item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete card item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteCardItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/cards/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteCardItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific card item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get card item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getCardItem(boardId: string, itemId: string): Promise<{response: Response; body: CardItem}> {
    const localVarPath = '/v2/boards/{board_id}/cards/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getCardItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'CardItem')

    return {response, body}
  }

  /**
   * Updates a card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update card item
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param cardUpdateRequest
   */
  async updateCardItem(
    boardId: string,
    itemId: string,
    cardUpdateRequest: CardUpdateRequest,
  ): Promise<{response: Response; body: CardItem}> {
    const localVarPath = '/v2/boards/{board_id}/cards/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateCardItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateCardItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(cardUpdateRequest, 'CardUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'CardItem')

    return {response, body}
  }

  /**
   * Adds a connector to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create connector
   * @param boardId Unique identifier (ID) of the board for which you want to create the connector.
   * @param connectorCreationData
   */
  async createConnector(
    boardId: string,
    connectorCreationData: ConnectorCreationData,
  ): Promise<{response: Response; body: ConnectorWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/connectors'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createConnector.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(connectorCreationData, 'ConnectorCreationData')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorWithLinks')

    return {response, body}
  }

  /**
   * Deletes the specified connector from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete connector
   * @param boardId Unique identifier (ID) of the board from which you want to delete the connector.
   * @param connectorId Unique identifier (ID) of the connector that you want to delete.
   */
  async deleteConnector(boardId: string, connectorId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/connectors/{connector_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'connector_id' + '}', encodeURIComponent(String(connectorId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteConnector.')
    }
    // verify required parameter 'connectorId' is not null or undefined
    if (connectorId === null || connectorId === undefined) {
      throw new Error('Required parameter connectorId was null or undefined when calling deleteConnector.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific connector on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific connector
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific connector.
   * @param connectorId Unique identifier (ID) of the connector that you want to retrieve.
   */
  async getConnector(boardId: string, connectorId: string): Promise<{response: Response; body: ConnectorWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/connectors/{connector_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'connector_id' + '}', encodeURIComponent(String(connectorId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getConnector.')
    }
    // verify required parameter 'connectorId' is not null or undefined
    if (connectorId === null || connectorId === undefined) {
      throw new Error('Required parameter connectorId was null or undefined when calling getConnector.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorWithLinks')

    return {response, body}
  }

  /**
   * Retrieves a list of connectors for a specific board.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let\'s say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Get connectors
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a list of connectors.
   * @param limit
   * @param cursor
   */
  async getConnectors(
    boardId: string,
    query?: {
      limit?: string

      cursor?: string
    },
  ): Promise<{response: Response; body: ConnectorsCursorPaged}> {
    const localVarPath = '/v2/boards/{board_id}/connectors'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getConnectors.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorsCursorPaged')

    return {response, body}
  }

  /**
   * Updates a connector on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update connector
   * @param boardId Unique identifier (ID) of the board for which you want to update the connector.
   * @param connectorId Unique identifier (ID) of the connector that you want to update.
   * @param connectorChangesData
   */
  async updateConnector(
    boardId: string,
    connectorId: string,
    connectorChangesData: ConnectorChangesData,
  ): Promise<{response: Response; body: ConnectorWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/connectors/{connector_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'connector_id' + '}', encodeURIComponent(String(connectorId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateConnector.')
    }
    // verify required parameter 'connectorId' is not null or undefined
    if (connectorId === null || connectorId === undefined) {
      throw new Error('Required parameter connectorId was null or undefined when calling updateConnector.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(connectorChangesData, 'ConnectorChangesData')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorWithLinks')

    return {response, body}
  }

  /**
   * Adds a document item to a board by selecting file from device.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create document item using file from device
   * @param boardIdPlatformFileUpload Unique identifier (ID) of the board where you want to create the item.
   * @param resource Select a file to upload
   * @param data
   */
  async createDocumentItemUsingFileFromDevice(
    boardIdPlatformFileUpload: string,
    resource: RequestFile,

    data?: CreateDocumentItemUsingFileFromDeviceRequestData,
  ): Promise<{response: Response; body: DocumentItem}> {
    const localVarPath = '/v2/boards/{board_id_PlatformFileUpload}/documents'.replace(
      '{' + 'board_id_PlatformFileUpload' + '}',
      encodeURIComponent(String(boardIdPlatformFileUpload)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformFileUpload' is not null or undefined
    if (boardIdPlatformFileUpload === null || boardIdPlatformFileUpload === undefined) {
      throw new Error(
        'Required parameter boardIdPlatformFileUpload was null or undefined when calling createDocumentItemUsingFileFromDevice.',
      )
    }

    const formData = new FormData()
    let extension = ''
    if (data) {
      formData.append(
        'data',
        JSON.stringify(ObjectSerializer.serialize(data, 'CreateDocumentItemUsingFileFromDeviceRequestData')),
      )
    }
    if (resource) {
      if ('createDocumentItemUsingFileFromDevice'.includes('Image')) {
        extension = '.png'
      } else if ('createDocumentItemUsingFileFromDevice'.includes('Document')) {
        extension = '.pdf'
      }
      formData.append('resource', resource, 'file' + extension)
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      formData,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

  /**
   * Adds a document item to a board by specifying the URL where the document is hosted.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create document item using URL
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param documentCreateRequest
   */
  async createDocumentItemUsingUrl(
    boardId: string,
    documentCreateRequest: DocumentCreateRequest,
  ): Promise<{response: Response; body: DocumentItem}> {
    const localVarPath = '/v2/boards/{board_id}/documents'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createDocumentItemUsingUrl.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(documentCreateRequest, 'DocumentCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

  /**
   * Deletes a document item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete document item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteDocumentItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/documents/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteDocumentItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteDocumentItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get document item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getDocumentItem(boardId: string, itemId: string): Promise<{response: Response; body: DocumentItem}> {
    const localVarPath = '/v2/boards/{board_id}/documents/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getDocumentItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getDocumentItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

  /**
   * Updates a document item on a board by using file from a device<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update document item using file from device
   * @param boardIdPlatformFileUpload Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param resource Select a file to upload
   * @param data
   */
  async updateDocumentItemUsingFileFromDevice(
    boardIdPlatformFileUpload: string,
    itemId: string,
    resource: RequestFile,

    data?: UploadFileFromDeviceData,
  ): Promise<{response: Response; body: DocumentItem}> {
    const localVarPath = '/v2/boards/{board_id_PlatformFileUpload}/documents/{item_id}'
      .replace('{' + 'board_id_PlatformFileUpload' + '}', encodeURIComponent(String(boardIdPlatformFileUpload)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformFileUpload' is not null or undefined
    if (boardIdPlatformFileUpload === null || boardIdPlatformFileUpload === undefined) {
      throw new Error(
        'Required parameter boardIdPlatformFileUpload was null or undefined when calling updateDocumentItemUsingFileFromDevice.',
      )
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error(
        'Required parameter itemId was null or undefined when calling updateDocumentItemUsingFileFromDevice.',
      )
    }

    const formData = new FormData()
    let extension = ''
    if (data) {
      formData.append('data', JSON.stringify(ObjectSerializer.serialize(data, 'UploadFileFromDeviceData')))
    }
    if (resource) {
      if ('updateDocumentItemUsingFileFromDevice'.includes('Image')) {
        extension = '.png'
      } else if ('updateDocumentItemUsingFileFromDevice'.includes('Document')) {
        extension = '.pdf'
      }
      formData.append('resource', resource, 'file' + extension)
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      formData,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

  /**
   * Updates a document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update document item using URL
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param documentUpdateRequest
   */
  async updateDocumentItemUsingUrl(
    boardId: string,
    itemId: string,
    documentUpdateRequest: DocumentUpdateRequest,
  ): Promise<{response: Response; body: DocumentItem}> {
    const localVarPath = '/v2/boards/{board_id}/documents/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateDocumentItemUsingUrl.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateDocumentItemUsingUrl.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(documentUpdateRequest, 'DocumentUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

  /**
   * Adds an embed item containing external content to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create embed item
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param embedCreateRequest
   */
  async createEmbedItem(
    boardId: string,
    embedCreateRequest: EmbedCreateRequest,
  ): Promise<{response: Response; body: EmbedItem}> {
    const localVarPath = '/v2/boards/{board_id}/embeds'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createEmbedItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(embedCreateRequest, 'EmbedCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EmbedItem')

    return {response, body}
  }

  /**
   * Deletes an embed item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete embed item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteEmbedItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/embeds/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteEmbedItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteEmbedItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific embed item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get embed item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getEmbedItem(boardId: string, itemId: string): Promise<{response: Response; body: EmbedItem}> {
    const localVarPath = '/v2/boards/{board_id}/embeds/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getEmbedItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getEmbedItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EmbedItem')

    return {response, body}
  }

  /**
   * Updates an embed item on a board based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update embed item
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param embedUpdateRequest
   */
  async updateEmbedItem(
    boardId: string,
    itemId: string,
    embedUpdateRequest: EmbedUpdateRequest,
  ): Promise<{response: Response; body: EmbedItem}> {
    const localVarPath = '/v2/boards/{board_id}/embeds/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateEmbedItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateEmbedItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(embedUpdateRequest, 'EmbedUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EmbedItem')

    return {response, body}
  }

  /**
   * Adds a flowchart shape item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create shape item
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param shapeCreateRequest
   */
  async createShapeItemFlowchart(
    boardId: string,
    shapeCreateRequest: ShapeCreateRequest,
  ): Promise<{response: Response; body: ShapeItem}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/shapes'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createShapeItemFlowchart.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(shapeCreateRequest, 'ShapeCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

  /**
   * Deletes a flowchart shape item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete shape item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteShapeItemFlowchart(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/shapes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteShapeItemFlowchart.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteShapeItemFlowchart.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves a list of items for a specific board. You can retrieve all items on the board, a list of child items inside a parent item, or a list of specific types of items by specifying URL query parameter values.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let\'s say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Get items on board
   * @param boardIdPlatformExperimentalFeatures Unique identifier (ID) of the board for which you want to retrieve the list of available items.
   * @param limit
   * @param type
   * @param cursor
   */
  async getItemsExperimental(
    boardIdPlatformExperimentalFeatures: string,
    query?: {
      limit?: string

      type?: 'shape'

      cursor?: string
    },
  ): Promise<{response: Response; body: GenericItemCursorPaged}> {
    const localVarPath = '/v2-experimental/boards/{board_id_PlatformExperimentalFeatures}/items'.replace(
      '{' + 'board_id_PlatformExperimentalFeatures' + '}',
      encodeURIComponent(String(boardIdPlatformExperimentalFeatures)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformExperimentalFeatures' is not null or undefined
    if (boardIdPlatformExperimentalFeatures === null || boardIdPlatformExperimentalFeatures === undefined) {
      throw new Error(
        'Required parameter boardIdPlatformExperimentalFeatures was null or undefined when calling getItemsExperimental.',
      )
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.type !== undefined) {
      localVarQueryParameters.append('type', ObjectSerializer.serialize(query?.type, "'shape'"))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItemCursorPaged')

    return {response, body}
  }

  /**
   * Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get shape item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getShapeItemFlowchart(boardId: string, itemId: string): Promise<{response: Response; body: ShapeItem}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/shapes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getShapeItemFlowchart.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getShapeItemFlowchart.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

  /**
   * Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific item on board
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getSpecificItemExperimental(boardId: string, itemId: string): Promise<{response: Response; body: GenericItem}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/items/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getSpecificItemExperimental.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getSpecificItemExperimental.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItem')

    return {response, body}
  }

  /**
   * Updates a flowchart shape item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update shape item
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param shapeUpdateRequest
   */
  async updateShapeItemFlowchart(
    boardId: string,
    itemId: string,
    shapeUpdateRequest: ShapeUpdateRequest,
  ): Promise<{response: Response; body: ShapeItem}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/shapes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateShapeItemFlowchart.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateShapeItemFlowchart.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(shapeUpdateRequest, 'ShapeUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

  /**
   * Adds a frame to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create frame
   * @param boardId Unique identifier (ID) of the board where you want to create a frame.
   * @param frameCreateRequest
   */
  async createFrameItem(
    boardId: string,
    frameCreateRequest: FrameCreateRequest,
  ): Promise<{response: Response; body: FrameItem}> {
    const localVarPath = '/v2/boards/{board_id}/frames'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createFrameItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(frameCreateRequest, 'FrameCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'FrameItem')

    return {response, body}
  }

  /**
   * Deletes a frame from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete frame
   * @param boardId Unique identifier (ID) of the board from which you want to delete the frame.
   * @param itemId Unique identifier (ID) of the frame that you want to delete.
   */
  async deleteFrameItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/frames/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteFrameItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteFrameItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific frame on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get frame
   * @param boardId Unique identifier (ID) of the board that contains the frame that you want to retrieve
   * @param itemId Unique identifier (ID) of the frame that you want to retrieve.
   */
  async getFrameItem(boardId: string, itemId: string): Promise<{response: Response; body: FrameItem}> {
    const localVarPath = '/v2/boards/{board_id}/frames/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getFrameItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getFrameItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'FrameItem')

    return {response, body}
  }

  /**
   * Updates a frame on a board based on the data, style, or geometry properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update frame
   * @param boardId Unique identifier (ID) of the board where you want to update the frame.
   * @param itemId Unique identifier (ID) of the frame that you want to update.
   * @param frameUpdateRequest
   */
  async updateFrameItem(
    boardId: string,
    itemId: string,
    frameUpdateRequest: FrameUpdateRequest,
  ): Promise<{response: Response; body: FrameItem}> {
    const localVarPath = '/v2/boards/{board_id}/frames/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateFrameItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateFrameItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(frameUpdateRequest, 'FrameUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'FrameItem')

    return {response, body}
  }

  /**
   * Adds an image item to a board by specifying a file from device.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create image item using file from device
   * @param boardIdPlatformFileUpload Unique identifier (ID) of the board where you want to create the item.
   * @param resource Select a file to upload
   * @param data
   */
  async createImageItemUsingLocalFile(
    boardIdPlatformFileUpload: string,
    resource: RequestFile,

    data?: UploadFileFromDeviceData,
  ): Promise<{response: Response; body: ImageItem}> {
    const localVarPath = '/v2/boards/{board_id_PlatformFileUpload}/images'.replace(
      '{' + 'board_id_PlatformFileUpload' + '}',
      encodeURIComponent(String(boardIdPlatformFileUpload)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformFileUpload' is not null or undefined
    if (boardIdPlatformFileUpload === null || boardIdPlatformFileUpload === undefined) {
      throw new Error(
        'Required parameter boardIdPlatformFileUpload was null or undefined when calling createImageItemUsingLocalFile.',
      )
    }

    const formData = new FormData()
    let extension = ''
    if (data) {
      formData.append('data', JSON.stringify(ObjectSerializer.serialize(data, 'UploadFileFromDeviceData')))
    }
    if (resource) {
      if ('createImageItemUsingLocalFile'.includes('Image')) {
        extension = '.png'
      } else if ('createImageItemUsingLocalFile'.includes('Document')) {
        extension = '.pdf'
      }
      formData.append('resource', resource, 'file' + extension)
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      formData,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

  /**
   * Adds an image item to a board by specifying an image URL.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create image item using URL
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param imageCreateRequest
   */
  async createImageItemUsingUrl(
    boardId: string,
    imageCreateRequest: ImageCreateRequest,
  ): Promise<{response: Response; body: ImageItem}> {
    const localVarPath = '/v2/boards/{board_id}/images'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createImageItemUsingUrl.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(imageCreateRequest, 'ImageCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

  /**
   * Deletes an image item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete image item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteImageItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/images/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteImageItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteImageItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get image item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getImageItem(boardId: string, itemId: string): Promise<{response: Response; body: ImageItem}> {
    const localVarPath = '/v2/boards/{board_id}/images/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getImageItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getImageItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

  /**
   * Updates an image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update image item using file from device
   * @param boardIdPlatformFileUpload Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param resource Select a file to upload
   * @param data
   */
  async updateImageItemUsingFileFromDevice(
    boardIdPlatformFileUpload: string,
    itemId: string,
    resource: RequestFile,

    data?: UploadFileFromDeviceData,
  ): Promise<{response: Response; body: ImageItem}> {
    const localVarPath = '/v2/boards/{board_id_PlatformFileUpload}/images/{item_id}'
      .replace('{' + 'board_id_PlatformFileUpload' + '}', encodeURIComponent(String(boardIdPlatformFileUpload)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformFileUpload' is not null or undefined
    if (boardIdPlatformFileUpload === null || boardIdPlatformFileUpload === undefined) {
      throw new Error(
        'Required parameter boardIdPlatformFileUpload was null or undefined when calling updateImageItemUsingFileFromDevice.',
      )
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error(
        'Required parameter itemId was null or undefined when calling updateImageItemUsingFileFromDevice.',
      )
    }

    const formData = new FormData()
    let extension = ''
    if (data) {
      formData.append('data', JSON.stringify(ObjectSerializer.serialize(data, 'UploadFileFromDeviceData')))
    }
    if (resource) {
      if ('updateImageItemUsingFileFromDevice'.includes('Image')) {
        extension = '.png'
      } else if ('updateImageItemUsingFileFromDevice'.includes('Document')) {
        extension = '.pdf'
      }
      formData.append('resource', resource, 'file' + extension)
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      formData,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

  /**
   * Updates an image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update image item using URL
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param imageUpdateRequest
   */
  async updateImageItemUsingUrl(
    boardId: string,
    itemId: string,
    imageUpdateRequest: ImageUpdateRequest,
  ): Promise<{response: Response; body: ImageItem}> {
    const localVarPath = '/v2/boards/{board_id}/images/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateImageItemUsingUrl.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateImageItemUsingUrl.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(imageUpdateRequest, 'ImageUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

  /**
   * Deletes an item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/items/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Deletes an item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteItemExperimental(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/items/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteItemExperimental.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteItemExperimental.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves a list of items for a specific board. You can retrieve all items on the board, a list of child items inside a parent item, or a list of specific types of items by specifying URL query parameter values.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let\'s say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Get items on board
   * @param boardId Unique identifier (ID) of the board for which you want to retrieve the list of available items.
   * @param limit
   * @param type
   * @param cursor
   */
  async getItems(
    boardId: string,
    query?: {
      limit?: string

      type?:
        | 'text'
        | 'shape'
        | 'sticky_note'
        | 'image'
        | 'document'
        | 'card'
        | 'app_card'
        | 'preview'
        | 'frame'
        | 'embed'

      cursor?: string
    },
  ): Promise<{response: Response; body: GenericItemCursorPaged}> {
    const localVarPath = '/v2/boards/{board_id}/items'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getItems.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.type !== undefined) {
      localVarQueryParameters.append(
        'type',
        ObjectSerializer.serialize(
          query?.type,
          "'text' | 'shape' | 'sticky_note' | 'image' | 'document' | 'card' | 'app_card' | 'preview' | 'frame' | 'embed'",
        ),
      )
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItemCursorPaged')

    return {response, body}
  }

  /**
   * Retrieves a list of items within a specific frame. A frame is a parent item and all items within a frame are child items. This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let\'s say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Get items within frame
   * @param boardIdPlatformContainers Unique identifier (ID) of the board that contains the frame for which you want to retrieve the list of available items.
   * @param parentItemId ID of the frame for which you want to retrieve the list of available items.
   * @param limit
   * @param type
   * @param cursor
   */
  async getItemsWithinFrame(
    boardIdPlatformContainers: string,
    parentItemId: string,
    query?: {
      limit?: string

      type?: string

      cursor?: string
    },
  ): Promise<{response: Response; body: GenericItemCursorPaged}> {
    const localVarPath = '/v2/boards/{board_id_PlatformContainers}/items'.replace(
      '{' + 'board_id_PlatformContainers' + '}',
      encodeURIComponent(String(boardIdPlatformContainers)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformContainers' is not null or undefined
    if (boardIdPlatformContainers === null || boardIdPlatformContainers === undefined) {
      throw new Error(
        'Required parameter boardIdPlatformContainers was null or undefined when calling getItemsWithinFrame.',
      )
    }

    // verify required parameter 'parentItemId' is not null or undefined
    if (parentItemId === null || parentItemId === undefined) {
      throw new Error('Required parameter parentItemId was null or undefined when calling getItemsWithinFrame.')
    }

    if (parentItemId !== undefined) {
      localVarQueryParameters.append('parent_item_id', ObjectSerializer.serialize(parentItemId, 'string'))
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.type !== undefined) {
      localVarQueryParameters.append('type', ObjectSerializer.serialize(query?.type, 'string'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItemCursorPaged')

    return {response, body}
  }

  /**
   * Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific item on board
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getSpecificItem(boardId: string, itemId: string): Promise<{response: Response; body: GenericItem}> {
    const localVarPath = '/v2/boards/{board_id}/items/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getSpecificItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getSpecificItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItem')

    return {response, body}
  }

  /**
   * Updates the position or the parent of an item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update item position or parent
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param genericItemUpdate
   */
  async updateItemPositionOrParent(
    boardId: string,
    itemId: string,
    genericItemUpdate: GenericItemUpdate,
  ): Promise<{response: Response; body: GenericItem}> {
    const localVarPath = '/v2/boards/{board_id}/items/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateItemPositionOrParent.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateItemPositionOrParent.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(genericItemUpdate, 'GenericItemUpdate')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItem')

    return {response, body}
  }

  /**
   * Adds a mind map node to a board. A root node is the starting point of a mind map. A node that is created under a root node is a child node. For information on mind maps, use cases, mind map structure, and more, see the <a href=\"https://developers.miro.com/docs/mind-maps\" target=_blank>Mind Map Overview</a> page. <br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/><br/> <b>Known limitations on node placement: </b> Currently, the create API supports explicit positions for nodes. This means that users can only place nodes based on the x, y coordinates provided in the position parameters. If the position is not provided in the request, nodes default to coordinates x=0, y=0, effectively placing them at the center of the board. <br /><br /><b>Upcoming changes:</b> We understand the importance of flexibility in node placement. We are actively working on implementing changes to support positioning nodes relative to their parent node as well. This enhancement offers a more dynamic and intuitive mind mapping experience. <br /><br />Additionally, we are actively working on providing the update API, further enhancing the functionality of mind map APIs.
   * @summary Create mind map node
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param mindmapCreateRequest
   */
  async createMindmapNodesExperimental(
    boardId: string,
    mindmapCreateRequest: MindmapCreateRequest,
  ): Promise<{response: Response; body: MindmapItem}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/mindmap_nodes'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createMindmapNodesExperimental.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(mindmapCreateRequest, 'MindmapCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'MindmapItem')

    return {response, body}
  }

  /**
   * Deletes a mind map node item and its child nodes from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete mind map node
   * @param boardId Unique identifier (ID) of the board from which you want to delete the mind map node.
   * @param itemId Unique identifier (ID) of the mind map node that you want to delete.
   */
  async deleteMindmapNodeExperimental(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/mindmap_nodes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteMindmapNodeExperimental.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteMindmapNodeExperimental.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific mind map node on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific mind map node
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a mind map node.
   * @param itemId Unique identifier (ID) of the mind map node that you want to retrieve.
   */
  async getMindmapNodeExperimental(boardId: string, itemId: string): Promise<{response: Response; body: MindmapItem}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/mindmap_nodes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getMindmapNodeExperimental.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getMindmapNodeExperimental.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'MindmapItem')

    return {response, body}
  }

  /**
   * Retrieves a list of mind map nodes for a specific board.  This method returns results using a cursor-based approach. A cursor-paginated method returns a portion of the total set of results based on the limit specified and a cursor that points to the next portion of the results. To retrieve the next portion of the collection, on your next call to the same method, set the `cursor` parameter equal to the `cursor` value you received in the response of the previous request. For example, if you set the `limit` query parameter to `10` and the board contains 20 objects, the first call will return information about the first 10 objects in the response along with a cursor parameter and value. In this example, let\'s say the cursor parameter value returned in the response is `foo`. If you want to retrieve the next set of objects, on your next call to the same method, set the cursor parameter value to `foo`.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Get mind map nodes
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve mind map nodes.
   * @param limit Maximum number of results returned
   * @param cursor Points to the next portion of the results set
   */
  async getMindmapNodesExperimental(
    boardId: string,
    query?: {
      limit?: string

      cursor?: string
    },
  ): Promise<{response: Response; body: MindmapCursorPaged}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/mindmap_nodes'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getMindmapNodesExperimental.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'MindmapCursorPaged')

    return {response, body}
  }

  /**
   * Retrieves organization member information for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get organization member
   * @param orgId id of the organization
   * @param memberId id of the organization member
   */
  async enterpriseGetOrganizationMember(
    orgId: string,
    memberId: string,
  ): Promise<{response: Response; body: OrganizationMember}> {
    const localVarPath = '/v2/orgs/{org_id}/members/{member_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganizationMember.')
    }
    // verify required parameter 'memberId' is not null or undefined
    if (memberId === null || memberId === undefined) {
      throw new Error('Required parameter memberId was null or undefined when calling enterpriseGetOrganizationMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'OrganizationMember')

    return {response, body}
  }

  /**
   * Retrieves organization members based on the organization ID and the cursor, or based on the user emails provided in the request.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get organization members
   * @param orgId id of the organization
   * @param emails
   * @param role
   * @param license
   * @param active
   * @param cursor
   * @param limit
   */
  async enterpriseGetOrganizationMembers(
    orgId: string,
    query?: {
      emails?: string

      role?:
        | 'organization_internal_admin'
        | 'organization_internal_user'
        | 'organization_external_user'
        | 'organization_team_guest_user'
        | 'unknown'

      license?: 'full' | 'occasional' | 'free' | 'free_restricted' | 'full_trial' | 'unknown'

      active?: boolean

      cursor?: string

      limit?: number
    },
  ): Promise<{response: Response; body: EnterpriseGetOrganizationMembers200Response}> {
    const localVarPath = '/v2/orgs/{org_id}/members'.replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganizationMembers.')
    }

    if (query?.emails !== undefined) {
      localVarQueryParameters.append('emails', ObjectSerializer.serialize(query?.emails, 'string'))
    }

    if (query?.role !== undefined) {
      localVarQueryParameters.append(
        'role',
        ObjectSerializer.serialize(
          query?.role,
          "'organization_internal_admin' | 'organization_internal_user' | 'organization_external_user' | 'organization_team_guest_user' | 'unknown'",
        ),
      )
    }

    if (query?.license !== undefined) {
      localVarQueryParameters.append(
        'license',
        ObjectSerializer.serialize(
          query?.license,
          "'full' | 'occasional' | 'free' | 'free_restricted' | 'full_trial' | 'unknown'",
        ),
      )
    }

    if (query?.active !== undefined) {
      localVarQueryParameters.append('active', ObjectSerializer.serialize(query?.active, 'boolean'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'number'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EnterpriseGetOrganizationMembers200Response')

    return {response, body}
  }

  /**
   * Retrieves organization information.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get organization info
   * @param orgId id of the organization
   */
  async enterpriseGetOrganization(orgId: string): Promise<{response: Response; body: Organization}> {
    const localVarPath = '/v2/orgs/{org_id}'.replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganization.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Organization')

    return {response, body}
  }

  /**
   * Add a Miro user to a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Add member in a project
   * @param orgId The ID of the organization to which the project belongs.
   * @param teamId The ID of the team to which the project belongs.
   * @param projectId The ID of the project to which you want to add a user.
   * @param addProjectMemberRequest
   */
  async enterpriseAddProjectMember(
    orgId: string,
    teamId: string,
    projectId: string,
    addProjectMemberRequest: AddProjectMemberRequest,
  ): Promise<{response: Response; body: ProjectMember}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseAddProjectMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseAddProjectMember.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseAddProjectMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(addProjectMemberRequest, 'AddProjectMemberRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ProjectMember')

    return {response, body}
  }

  /**
   * Remove a member from a project. The user remains in the team even after the member is removed from a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Remove project member
   * @param orgId The ID of the organization to which the project belongs.
   * @param teamId The ID of the team to which the project belongs.
   * @param projectId The ID of the project from which you want to remove a member.
   * @param memberId The ID of the member that you want to remove from a project.
   */
  async enterpriseDeleteProjectMember(
    orgId: string,
    teamId: string,
    projectId: string,
    memberId: string,
  ): Promise<{response: Response; body?: any}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
      .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseDeleteProjectMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseDeleteProjectMember.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseDeleteProjectMember.')
    }
    // verify required parameter 'memberId' is not null or undefined
    if (memberId === null || memberId === undefined) {
      throw new Error('Required parameter memberId was null or undefined when calling enterpriseDeleteProjectMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = bodyAsJson

    return {response, body}
  }

  /**
   * Retrieves information for a specific project member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get project member
   * @param orgId The ID of the organization to which the project belongs.
   * @param teamId The ID of the team to which the project belongs.
   * @param projectId The ID of the project from which you want to retrieve specific member information.
   * @param memberId The ID of the member for which you want to retrieve information.
   */
  async enterpriseGetProjectMember(
    orgId: string,
    teamId: string,
    projectId: string,
    memberId: string,
  ): Promise<{response: Response; body: ProjectMember}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
      .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetProjectMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetProjectMember.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseGetProjectMember.')
    }
    // verify required parameter 'memberId' is not null or undefined
    if (memberId === null || memberId === undefined) {
      throw new Error('Required parameter memberId was null or undefined when calling enterpriseGetProjectMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ProjectMember')

    return {response, body}
  }

  /**
   * Retrieves the list of members for a specific project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary List of project members
   * @param orgId The ID of the organization to which the project belongs.
   * @param teamId The ID of the team to which the project belongs.
   * @param projectId The ID of the project for which you want to retrieve the list of members.
   * @param limit The maximum number of results to return per call. If the number of project members in the response is greater than the limit specified, the response returns the cursor parameter with a value.
   * @param cursor An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.
   */
  async enterpriseGetProjectMembers(
    orgId: string,
    teamId: string,
    projectId: string,
    query?: {
      limit?: number

      cursor?: string
    },
  ): Promise<{response: Response; body: ProjectMemberPage}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetProjectMembers.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetProjectMembers.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseGetProjectMembers.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'number'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ProjectMemberPage')

    return {response, body}
  }

  /**
   * Updates details of a project member, such as the member\'s role.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update project member
   * @param orgId The ID of the organization to which the project member belongs.
   * @param teamId The ID of the team to which the project member belongs.
   * @param projectId The ID of a Project.
   * @param memberId The ID of the member whose details you want to update.
   * @param updateProjectMemberRequest
   */
  async enterpriseUpdateProjectMember(
    orgId: string,
    teamId: string,
    projectId: string,
    memberId: string,
    updateProjectMemberRequest: UpdateProjectMemberRequest,
  ): Promise<{response: Response; body: ProjectMember}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/members/{member_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
      .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseUpdateProjectMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateProjectMember.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseUpdateProjectMember.')
    }
    // verify required parameter 'memberId' is not null or undefined
    if (memberId === null || memberId === undefined) {
      throw new Error('Required parameter memberId was null or undefined when calling enterpriseUpdateProjectMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(updateProjectMemberRequest, 'UpdateProjectMemberRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ProjectMember')

    return {response, body}
  }

  /**
   * Retrieves the project settings.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get project settings
   * @param orgId The ID of the organization to which the project belongs.
   * @param teamId The ID of the team to which the project belongs.
   * @param projectId The ID of the project for which you want to retrieve the project settings.
   */
  async enterpriseGetProjectSettings(
    orgId: string,
    teamId: string,
    projectId: string,
  ): Promise<{response: Response; body: ProjectSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/settings'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetProjectSettings.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetProjectSettings.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseGetProjectSettings.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ProjectSettings')

    return {response, body}
  }

  /**
   * Updates the settings of a project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update project settings
   * @param orgId The ID of the organization to which the project belongs.
   * @param teamId The ID of the team to which the project belongs.
   * @param projectId The ID of the project whose settings you want to update.
   * @param updateProjectSettingsRequest
   */
  async enterpriseUpdateProjectSettings(
    orgId: string,
    teamId: string,
    projectId: string,
    updateProjectSettingsRequest: UpdateProjectSettingsRequest,
  ): Promise<{response: Response; body: ProjectSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}/settings'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseUpdateProjectSettings.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateProjectSettings.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error(
        'Required parameter projectId was null or undefined when calling enterpriseUpdateProjectSettings.',
      )
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(updateProjectSettingsRequest, 'UpdateProjectSettingsRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ProjectSettings')

    return {response, body}
  }

  /**
   * Projects are essentially folders of boards with the option to manage user access for a smaller group of people within a team. Projects are here to help you organize your boards and make them easier to find and share. In other words, a project is a group of boards that you can share with your teammates all at once. For more information, see our <a href=\"https://help.miro.com/hc/en-us/articles/360018262033-Projects\" target=_blank>Help Center page on Projects</a>. <br><br>This API creates a new project in an existing team of an organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Create project
   * @param orgId The ID of the organization within which you you want to create a project.
   * @param teamId The ID of the team within which you you want to create a project.
   * @param createProjectRequest
   */
  async enterpriseCreateProject(
    orgId: string,
    teamId: string,
    createProjectRequest: CreateProjectRequest,
  ): Promise<{response: Response; body: Project}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseCreateProject.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseCreateProject.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(createProjectRequest, 'CreateProjectRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Project')

    return {response, body}
  }

  /**
   * Deletes a project. After a project is deleted, all boards and users that belong to the project remain in the team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Delete project
   * @param orgId The ID of the organization from which you want to delete a project.
   * @param teamId The ID of the team from which you want to delete a project.
   * @param projectId The ID of the project that you want to delete.
   */
  async enterpriseDeleteProject(
    orgId: string,
    teamId: string,
    projectId: string,
  ): Promise<{response: Response; body?: any}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseDeleteProject.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseDeleteProject.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseDeleteProject.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = bodyAsJson

    return {response, body}
  }

  /**
   * Retrieves project information, such as a name for an existing project.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get project
   * @param orgId The ID of the organization from which you want to retrieve the project information.
   * @param teamId The ID of the team from which you want to retrieve the project information.
   * @param projectId The ID of the project for which you want to retrieve the information.
   */
  async enterpriseGetProject(
    orgId: string,
    teamId: string,
    projectId: string,
  ): Promise<{response: Response; body: Project}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetProject.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetProject.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseGetProject.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Project')

    return {response, body}
  }

  /**
   * Retrieves the list of projects in an existing team of an organization. You can retrieve all projects, including all private projects (projects that haven\'t been specifically shared with you) by enabling Content Admin permissions. To enable Content Admin permissions, see [Content Admin permissions for Company Admins](https://help.miro.com/hc/en-us/articles/360012777280-Content-Admin-permissions-for-Company-Admins).<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary List of projects
   * @param orgId The ID of the organization from which you want to retrieve the list of available projects.
   * @param teamId The ID of the team from which you want to retrieve the list of available projects.
   * @param limit The maximum number of results to return per call. If the number of projects in the response is greater than the limit specified, the response returns the cursor parameter with a value.
   * @param cursor An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.
   */
  async enterpriseGetProjects(
    orgId: string,
    teamId: string,
    query?: {
      limit?: number

      cursor?: string
    },
  ): Promise<{response: Response; body: ProjectPage}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetProjects.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetProjects.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'number'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ProjectPage')

    return {response, body}
  }

  /**
   * Update information about a project, such as the project name.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>projects:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update project
   * @param orgId The ID of an Organization.
   * @param teamId The ID of a Team.
   * @param projectId The ID of a Project.
   * @param updateProjectRequest
   */
  async enterpriseUpdateProject(
    orgId: string,
    teamId: string,
    projectId: string,
    updateProjectRequest: UpdateProjectRequest,
  ): Promise<{response: Response; body: Project}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/projects/{project_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'project_id' + '}', encodeURIComponent(String(projectId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseUpdateProject.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateProject.')
    }
    // verify required parameter 'projectId' is not null or undefined
    if (projectId === null || projectId === undefined) {
      throw new Error('Required parameter projectId was null or undefined when calling enterpriseUpdateProject.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(updateProjectRequest, 'UpdateProjectRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Project')

    return {response, body}
  }

  /**
   * Reset all sessions of a user.  Admins can now take immediate action to restrict user access to company data in case of security concerns. Calling this API ends all active Miro sessions across devices for a particular user, requiring the user to sign in again. This is useful in situations where a user leaves the company, their credentials are compromised, or there\'s suspicious activity on their account.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>sessions:delete</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Reset all sessions of a user
   * @param email Email ID of the user whose sessions you want to reset. Note that this user will be signed out from all devices.
   */
  async enterprisePostUserSessionsReset(email: string): Promise<{response: Response; body?: any}> {
    const localVarPath = '/v2/sessions/reset_all'
    let localVarQueryParameters = new URLSearchParams()

    // verify required parameter 'email' is not null or undefined
    if (email === null || email === undefined) {
      throw new Error('Required parameter email was null or undefined when calling enterprisePostUserSessionsReset.')
    }

    if (email !== undefined) {
      localVarQueryParameters.append('email', ObjectSerializer.serialize(email, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      undefined,

      this.logger,
    )

    const body = bodyAsJson

    return {response, body}
  }

  /**
   * Adds a shape item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create shape item
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param shapeCreateRequest
   */
  async createShapeItem(
    boardId: string,
    shapeCreateRequest: ShapeCreateRequest,
  ): Promise<{response: Response; body: ShapeItem}> {
    const localVarPath = '/v2/boards/{board_id}/shapes'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createShapeItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(shapeCreateRequest, 'ShapeCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

  /**
   * Deletes a shape item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete shape item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteShapeItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/shapes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteShapeItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteShapeItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get shape item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getShapeItem(boardId: string, itemId: string): Promise<{response: Response; body: ShapeItem}> {
    const localVarPath = '/v2/boards/{board_id}/shapes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getShapeItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getShapeItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

  /**
   * Updates a shape item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update shape item
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param shapeUpdateRequest
   */
  async updateShapeItem(
    boardId: string,
    itemId: string,
    shapeUpdateRequest: ShapeUpdateRequest,
  ): Promise<{response: Response; body: ShapeItem}> {
    const localVarPath = '/v2/boards/{board_id}/shapes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateShapeItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateShapeItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(shapeUpdateRequest, 'ShapeUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

  /**
   * Adds a sticky note item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create sticky note item
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param stickyNoteCreateRequest
   */
  async createStickyNoteItem(
    boardId: string,
    stickyNoteCreateRequest: StickyNoteCreateRequest,
  ): Promise<{response: Response; body: StickyNoteItem}> {
    const localVarPath = '/v2/boards/{board_id}/sticky_notes'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createStickyNoteItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(stickyNoteCreateRequest, 'StickyNoteCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

    return {response, body}
  }

  /**
   * Deletes a sticky note item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete sticky note item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteStickyNoteItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/sticky_notes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteStickyNoteItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteStickyNoteItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific sticky note item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get sticky note item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getStickyNoteItem(boardId: string, itemId: string): Promise<{response: Response; body: StickyNoteItem}> {
    const localVarPath = '/v2/boards/{board_id}/sticky_notes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getStickyNoteItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getStickyNoteItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

    return {response, body}
  }

  /**
   * Updates a sticky note item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update sticky note item
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param stickyNoteUpdateRequest
   */
  async updateStickyNoteItem(
    boardId: string,
    itemId: string,
    stickyNoteUpdateRequest: StickyNoteUpdateRequest,
  ): Promise<{response: Response; body: StickyNoteItem}> {
    const localVarPath = '/v2/boards/{board_id}/sticky_notes/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateStickyNoteItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateStickyNoteItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(stickyNoteUpdateRequest, 'StickyNoteUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

    return {response, body}
  }

  /**
   * Attach an existing tag to the specified item. Card and sticky note items can have up to 8 tags. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:   [Remove tag from item](https://developers.miro.com/reference/remove-tag-from-item),  [Update tag](https://developers.miro.com/reference/update-tag),  [Delete tag](https://developers.miro.com/reference/delete-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Attach tag to item
   * @param boardIdPlatformTags Unique identifier (ID) of the board with the item that you want to add a tag to.
   * @param itemId Unique identifier (ID) of the item to which you want to add a tag.
   * @param tagId Unique identifier (ID) of the tag you want to add to the item.
   */
  async attachTagToItem(
    boardIdPlatformTags: string,
    itemId: string,
    tagId: string,
  ): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id_PlatformTags}/items/{item_id}'
      .replace('{' + 'board_id_PlatformTags' + '}', encodeURIComponent(String(boardIdPlatformTags)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformTags' is not null or undefined
    if (boardIdPlatformTags === null || boardIdPlatformTags === undefined) {
      throw new Error('Required parameter boardIdPlatformTags was null or undefined when calling attachTagToItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling attachTagToItem.')
    }

    // verify required parameter 'tagId' is not null or undefined
    if (tagId === null || tagId === undefined) {
      throw new Error('Required parameter tagId was null or undefined when calling attachTagToItem.')
    }

    if (tagId !== undefined) {
      localVarQueryParameters.append('tag_id', ObjectSerializer.serialize(tagId, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Creates a tag on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Create tag
   * @param boardId Unique identifier (ID) of the board where you want to create the tag.
   * @param tagCreateRequest
   */
  async createTag(
    boardId: string,
    tagCreateRequest: TagCreateRequest,
  ): Promise<{response: Response; body: TagWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/tags'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createTag.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(tagCreateRequest, 'TagCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagWithLinks')

    return {response, body}
  }

  /**
   * Deletes the specified tag from the board. The tag is also removed from all cards and sticky notes on the board. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:  [Attach tag to item](https://developers.miro.com/reference/attach-tag-to-item),  [Remove tag from item](https://developers.miro.com/reference/remove-tag-from-item),  [Update tag](https://developers.miro.com/reference/update-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Delete tag
   * @param boardId Unique identifier (ID) of the board where you want to delete a specific tag.
   * @param tagId Unique identifier (ID) of the tag that you want to delete.
   */
  async deleteTag(boardId: string, tagId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/tags/{tag_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'tag_id' + '}', encodeURIComponent(String(tagId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteTag.')
    }
    // verify required parameter 'tagId' is not null or undefined
    if (tagId === null || tagId === undefined) {
      throw new Error('Required parameter tagId was null or undefined when calling deleteTag.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves all the items that have the specified tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get items by tag
   * @param boardIdPlatformTags Unique identifier (ID) of the board where you want to retrieve a specific tag.
   * @param tagId Unique identifier (ID) of the tag that you want to retrieve.
   * @param limit
   * @param offset
   */
  async getItemsByTag(
    boardIdPlatformTags: string,
    tagId: string,
    query?: {
      limit?: string

      offset?: string
    },
  ): Promise<{response: Response; body: ItemPagedResponse}> {
    const localVarPath = '/v2/boards/{board_id_PlatformTags}/items'.replace(
      '{' + 'board_id_PlatformTags' + '}',
      encodeURIComponent(String(boardIdPlatformTags)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformTags' is not null or undefined
    if (boardIdPlatformTags === null || boardIdPlatformTags === undefined) {
      throw new Error('Required parameter boardIdPlatformTags was null or undefined when calling getItemsByTag.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.offset !== undefined) {
      localVarQueryParameters.append('offset', ObjectSerializer.serialize(query?.offset, 'string'))
    }

    // verify required parameter 'tagId' is not null or undefined
    if (tagId === null || tagId === undefined) {
      throw new Error('Required parameter tagId was null or undefined when calling getItemsByTag.')
    }

    if (tagId !== undefined) {
      localVarQueryParameters.append('tag_id', ObjectSerializer.serialize(tagId, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ItemPagedResponse')

    return {response, body}
  }

  /**
   * Retrieves information for a specific tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get tag
   * @param boardId Unique identifier (ID) of the board where you want to retrieve a specific tag.
   * @param tagId Unique identifier (ID) of the tag that you want to retrieve.
   */
  async getTag(boardId: string, tagId: string): Promise<{response: Response; body: TagWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/tags/{tag_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'tag_id' + '}', encodeURIComponent(String(tagId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getTag.')
    }
    // verify required parameter 'tagId' is not null or undefined
    if (tagId === null || tagId === undefined) {
      throw new Error('Required parameter tagId was null or undefined when calling getTag.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagWithLinks')

    return {response, body}
  }

  /**
   * Retrieves all the tags from the specified board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get tags from board
   * @param boardId Unique identifier (ID) of the board whose tags you want to retrieve.
   * @param limit
   * @param offset
   */
  async getTagsFromBoard(
    boardId: string,
    query?: {
      limit?: string

      offset?: string
    },
  ): Promise<{response: Response; body: TagsPagedResponse}> {
    const localVarPath = '/v2/boards/{board_id}/tags'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getTagsFromBoard.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.offset !== undefined) {
      localVarQueryParameters.append('offset', ObjectSerializer.serialize(query?.offset, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagsPagedResponse')

    return {response, body}
  }

  /**
   * Retrieves all the tags from the specified item.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get tags from item
   * @param boardId Unique identifier (ID) of the board with the item whose tags you want to retrieve.
   * @param itemId Unique identifier (ID) of the item whose tags you want to retrieve.
   */
  async getTagsFromItem(boardId: string, itemId: string): Promise<{response: Response; body: GetTagsResponse}> {
    const localVarPath = '/v2/boards/{board_id}/items/{item_id}/tags'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getTagsFromItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getTagsFromItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GetTagsResponse')

    return {response, body}
  }

  /**
   * Removes the specified tag from the specified item. The tag still exists on the board. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:  [Attach tag to item](https://developers.miro.com/reference/attach-tag-to-item),   [Update tag](https://developers.miro.com/reference/update-tag),  [Delete tag](https://developers.miro.com/reference/delete-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Remove tag from item
   * @param boardIdPlatformTags Unique identifier (ID) of the board with the item that you want to remove a tag from.
   * @param itemId Unique identifier (ID) of the item that you want to remove the tag from.
   * @param tagId Unique identifier (ID) of the tag that you want to remove from the item.
   */
  async removeTagFromItem(
    boardIdPlatformTags: string,
    itemId: string,
    tagId: string,
  ): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id_PlatformTags}/items/{item_id}'
      .replace('{' + 'board_id_PlatformTags' + '}', encodeURIComponent(String(boardIdPlatformTags)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardIdPlatformTags' is not null or undefined
    if (boardIdPlatformTags === null || boardIdPlatformTags === undefined) {
      throw new Error('Required parameter boardIdPlatformTags was null or undefined when calling removeTagFromItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling removeTagFromItem.')
    }

    // verify required parameter 'tagId' is not null or undefined
    if (tagId === null || tagId === undefined) {
      throw new Error('Required parameter tagId was null or undefined when calling removeTagFromItem.')
    }

    if (tagId !== undefined) {
      localVarQueryParameters.append('tag_id', ObjectSerializer.serialize(tagId, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Updates a tag based on the data properties provided in the request body. <br><blockquote><strong>Note:</strong> Updates to tags made via the REST API  will not be reflected on the board in realtime. To see REST API updates to tags on a board,  you need to refresh the board. This applies to the following endpoints:  [Attach tag to item](https://developers.miro.com/reference/attach-tag-to-item),  [Remove tag from item](https://developers.miro.com/reference/remove-tag-from-item),   [Delete tag](https://developers.miro.com/reference/delete-tag).</blockquote><br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Update tag
   * @param boardId Unique identifier (ID) of the board where you want to update a specific tag.
   * @param tagId Unique identifier (ID) of the tag that you want to update.
   * @param tagUpdateRequest
   */
  async updateTag(
    boardId: string,
    tagId: string,
    tagUpdateRequest: TagUpdateRequest,
  ): Promise<{response: Response; body: TagWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}/tags/{tag_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'tag_id' + '}', encodeURIComponent(String(tagId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateTag.')
    }
    // verify required parameter 'tagId' is not null or undefined
    if (tagId === null || tagId === undefined) {
      throw new Error('Required parameter tagId was null or undefined when calling updateTag.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(tagUpdateRequest, 'TagUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagWithLinks')

    return {response, body}
  }

  /**
   * Deletes team member from team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Delete team member from team
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   * @param memberId The id of the Team Member
   */
  async enterpriseDeleteTeamMember(
    orgId: string,
    teamId: string,
    memberId: string,
  ): Promise<{response: Response; body?: any}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseDeleteTeamMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseDeleteTeamMember.')
    }
    // verify required parameter 'memberId' is not null or undefined
    if (memberId === null || memberId === undefined) {
      throw new Error('Required parameter memberId was null or undefined when calling enterpriseDeleteTeamMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = bodyAsJson

    return {response, body}
  }

  /**
   * Retrieves team member by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get team member
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   * @param memberId The id of the Team Member
   */
  async enterpriseGetTeamMember(
    orgId: string,
    teamId: string,
    memberId: string,
  ): Promise<{response: Response; body: TeamMember}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetTeamMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeamMember.')
    }
    // verify required parameter 'memberId' is not null or undefined
    if (memberId === null || memberId === undefined) {
      throw new Error('Required parameter memberId was null or undefined when calling enterpriseGetTeamMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamMember')

    return {response, body}
  }

  /**
   * Retrieves team members by cursor.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary List team members
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   * @param limit
   * @param cursor An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.
   * @param role  Role query. Filters members by role using full word match. Accepted values are: * \&quot;member\&quot;:     Team member with full member permissions. * \&quot;admin\&quot;:      Admin of a team. Team member with permission to manage team. * \&quot;non_team\&quot;:   External user, non-team user. * \&quot;team_guest\&quot;: Team-guest user, user with access only to a team without access to organization.
   */
  async enterpriseGetTeamMembers(
    orgId: string,
    teamId: string,
    query?: {
      limit?: number

      cursor?: string

      role?: string
    },
  ): Promise<{response: Response; body: TeamMembersPage}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetTeamMembers.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeamMembers.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'number'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    if (query?.role !== undefined) {
      localVarQueryParameters.append('role', ObjectSerializer.serialize(query?.role, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamMembersPage')

    return {response, body}
  }

  /**
   * Invites a new Miro user to an existing team. The user must exist in your Miro organization. Users who do not exist in your Miro organization can be invited to the team via [SCIM](https://developers.miro.com/docs/scim) and an external identity provider, such as Okta or Azure Active Directory.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Invite team members
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   * @param teamMemberInvite
   */
  async enterpriseInviteTeamMember(
    orgId: string,
    teamId: string,
    teamMemberInvite: TeamMemberInvite,
  ): Promise<{response: Response; body: TeamMember}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseInviteTeamMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseInviteTeamMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(teamMemberInvite, 'TeamMemberInvite')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamMember')

    return {response, body}
  }

  /**
   * Updates team member role in team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update team member
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   * @param memberId The id of the Team Member
   * @param teamMemberChanges
   */
  async enterpriseUpdateTeamMember(
    orgId: string,
    teamId: string,
    memberId: string,
    teamMemberChanges: TeamMemberChanges,
  ): Promise<{response: Response; body: TeamMember}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
      .replace('{' + 'member_id' + '}', encodeURIComponent(String(memberId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseUpdateTeamMember.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateTeamMember.')
    }
    // verify required parameter 'memberId' is not null or undefined
    if (memberId === null || memberId === undefined) {
      throw new Error('Required parameter memberId was null or undefined when calling enterpriseUpdateTeamMember.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(teamMemberChanges, 'TeamMemberChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamMember')

    return {response, body}
  }

  /**
   * Retrieves default team settings of an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get default team settings
   * @param orgId The id of an Organization.
   */
  async enterpriseGetDefaultTeamSettings(orgId: string): Promise<{response: Response; body: TeamSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/default_teams_settings'.replace(
      '{' + 'org_id' + '}',
      encodeURIComponent(String(orgId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetDefaultTeamSettings.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamSettings')

    return {response, body}
  }

  /**
   * Retrieves team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get team settings
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   */
  async enterpriseGetTeamSettings(orgId: string, teamId: string): Promise<{response: Response; body: TeamSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/settings'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetTeamSettings.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeamSettings.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamSettings')

    return {response, body}
  }

  /**
   * Updates team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update team settings
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   * @param teamSettingsChanges
   */
  async enterpriseUpdateTeamSettings(
    orgId: string,
    teamId: string,
    teamSettingsChanges: TeamSettingsChanges,
  ): Promise<{response: Response; body: TeamSettings}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}/settings'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseUpdateTeamSettings.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateTeamSettings.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(teamSettingsChanges, 'TeamSettingsChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamSettings')

    return {response, body}
  }

  /**
   * Creates a new team in an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Create team
   * @param orgId The id of the Organization.
   * @param createTeamRequest
   */
  async enterpriseCreateTeam(
    orgId: string,
    createTeamRequest: CreateTeamRequest,
  ): Promise<{response: Response; body: Team}> {
    const localVarPath = '/v2/orgs/{org_id}/teams'.replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseCreateTeam.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(createTeamRequest, 'CreateTeamRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Team')

    return {response, body}
  }

  /**
   * Deletes an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Delete team
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   */
  async enterpriseDeleteTeam(orgId: string, teamId: string): Promise<{response: Response; body?: any}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseDeleteTeam.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseDeleteTeam.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = bodyAsJson

    return {response, body}
  }

  /**
   * Retrieves team information for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Get team
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   */
  async enterpriseGetTeam(orgId: string, teamId: string): Promise<{response: Response; body: Team}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetTeam.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeam.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Team')

    return {response, body}
  }

  /**
   * Retrieves list of teams in an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary List teams
   * @param orgId The id of the Organization.
   * @param limit
   * @param cursor An indicator of the position of a page in the full set of results. To obtain the first page leave it empty. To obtain subsequent pages set it to the value returned in the cursor field of the previous request.
   * @param name Name query. Filters teams by name using case insensitive partial match. A value \&quot;dev\&quot; will return both \&quot;Developer\&#39;s team\&quot; and \&quot;Team for developers\&quot;.
   */
  async enterpriseGetTeams(
    orgId: string,
    query?: {
      limit?: number

      cursor?: string

      name?: string
    },
  ): Promise<{response: Response; body: TeamsPage}> {
    const localVarPath = '/v2/orgs/{org_id}/teams'.replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetTeams.')
    }

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'number'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    if (query?.name !== undefined) {
      localVarQueryParameters.append('name', ObjectSerializer.serialize(query?.name, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamsPage')

    return {response, body}
  }

  /**
   * Updates an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users. You can only use this endpoint if you have the role of a Company Admin. You can request temporary access to Enterprise APIs using <a target=_blank href=\"https://miro-survey.typeform.com/to/BVPTNWJ9\">this form</a>.</p>
   * @summary Update team
   * @param orgId The id of the Organization.
   * @param teamId The id of the Team.
   * @param teamChanges
   */
  async enterpriseUpdateTeam(
    orgId: string,
    teamId: string,
    teamChanges: TeamChanges,
  ): Promise<{response: Response; body: Team}> {
    const localVarPath = '/v2/orgs/{org_id}/teams/{team_id}'
      .replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
      .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseUpdateTeam.')
    }
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateTeam.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(teamChanges, 'TeamChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Team')

    return {response, body}
  }

  /**
   * Adds a text item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create text item
   * @param boardId Unique identifier (ID) of the board where you want to create the item.
   * @param textCreateRequest
   */
  async createTextItem(
    boardId: string,
    textCreateRequest: TextCreateRequest,
  ): Promise<{response: Response; body: TextItem}> {
    const localVarPath = '/v2/boards/{board_id}/texts'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createTextItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(textCreateRequest, 'TextCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TextItem')

    return {response, body}
  }

  /**
   * Deletes a text item from the board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete text item
   * @param boardId Unique identifier (ID) of the board from which you want to delete the item.
   * @param itemId Unique identifier (ID) of the item that you want to delete.
   */
  async deleteTextItem(boardId: string, itemId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}/texts/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteTextItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling deleteTextItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific text item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get text item
   * @param boardId Unique identifier (ID) of the board from which you want to retrieve a specific item.
   * @param itemId Unique identifier (ID) of the item that you want to retrieve.
   */
  async getTextItem(boardId: string, itemId: string): Promise<{response: Response; body: TextItem}> {
    const localVarPath = '/v2/boards/{board_id}/texts/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getTextItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling getTextItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TextItem')

    return {response, body}
  }

  /**
   * Updates a text item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update text item
   * @param boardId Unique identifier (ID) of the board where you want to update the item.
   * @param itemId Unique identifier (ID) of the item that you want to update.
   * @param textUpdateRequest
   */
  async updateTextItem(
    boardId: string,
    itemId: string,
    textUpdateRequest: TextUpdateRequest,
  ): Promise<{response: Response; body: TextItem}> {
    const localVarPath = '/v2/boards/{board_id}/texts/{item_id}'
      .replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
      .replace('{' + 'item_id' + '}', encodeURIComponent(String(itemId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateTextItem.')
    }
    // verify required parameter 'itemId' is not null or undefined
    if (itemId === null || itemId === undefined) {
      throw new Error('Required parameter itemId was null or undefined when calling updateTextItem.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(textUpdateRequest, 'TextUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TextItem')

    return {response, body}
  }

  /**
   * Revoke the current access token. Revoking an access token means that the access token will no longer work. When an access token is revoked, the refresh token is also revoked and no longer valid. This does not uninstall the application for the user.
   * @summary Revoke token
   * @param accessToken Access token that you want to revoke
   */
  async revokeToken(accessToken: string): Promise<{response: Response; body?: any}> {
    const localVarPath = '/v1/oauth/revoke'
    let localVarQueryParameters = new URLSearchParams()

    // verify required parameter 'accessToken' is not null or undefined
    if (accessToken === null || accessToken === undefined) {
      throw new Error('Required parameter accessToken was null or undefined when calling revokeToken.')
    }

    if (accessToken !== undefined) {
      localVarQueryParameters.append('access_token', ObjectSerializer.serialize(accessToken, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      undefined,

      this.logger,
    )

    const body = bodyAsJson

    return {response, body}
  }

  /**
   * Get information about an access token, such as the token type, scopes, team, user, token creation date and time, and the user who created the token.
   * @summary Get access token information
   */
  async tokenInfo(): Promise<{response: Response; body: TokenInformation}> {
    const localVarPath = '/v1/oauth-token'
    let localVarQueryParameters = new URLSearchParams()

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TokenInformation')

    return {response, body}
  }

  /**
   * Creates a webhook subscription to receive notifications when an item on a board is updated. Subscriptions are created per user, per board. You can create multiple subscriptions. We currently support all board items barring tags, connectors, and comments. Changes in item position do not trigger an event at the moment.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create webhook subscription
   * @param createBoardSubscriptionRequest
   */
  async createBoardSubscription(
    createBoardSubscriptionRequest: CreateBoardSubscriptionRequest,
  ): Promise<{response: Response; body: BoardSubscription}> {
    const localVarPath = '/v2-experimental/webhooks/board_subscriptions'
    let localVarQueryParameters = new URLSearchParams()

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(createBoardSubscriptionRequest, 'CreateBoardSubscriptionRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardSubscription')

    return {response, body}
  }

  /**
   * Deletes the specified webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Delete webhook subscription
   * @param subscriptionId Unique identifier (ID) of the subscription that you want to delete
   */
  async deleteSubscriptionById(subscriptionId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2-experimental/webhooks/subscriptions/{subscription_id}'.replace(
      '{' + 'subscription_id' + '}',
      encodeURIComponent(String(subscriptionId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('Required parameter subscriptionId was null or undefined when calling deleteSubscriptionById.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  /**
   * Retrieves information for a specific webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Get specific webhook subscription
   * @param subscriptionId Unique identifier (ID) of the subscription that you want to retrieve
   */
  async getSubscriptionById(subscriptionId: string): Promise<{response: Response; body: GenericSubscription}> {
    const localVarPath = '/v2-experimental/webhooks/subscriptions/{subscription_id}'.replace(
      '{' + 'subscription_id' + '}',
      encodeURIComponent(String(subscriptionId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('Required parameter subscriptionId was null or undefined when calling getSubscriptionById.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericSubscription')

    return {response, body}
  }

  /**
   * Retrieves information about all webhook subscriptions for a specific user.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>
   * @summary Get webhook subscriptions
   * @param limit
   * @param cursor
   */
  async getUserSubscriptions(query?: {
    limit?: string

    cursor?: string
  }): Promise<{response: Response; body: GenericSubscriptionsCursorPaged}> {
    const localVarPath = '/v2-experimental/webhooks/subscriptions'
    let localVarQueryParameters = new URLSearchParams()

    if (query?.limit !== undefined) {
      localVarQueryParameters.append('limit', ObjectSerializer.serialize(query?.limit, 'string'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      urlResource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericSubscriptionsCursorPaged')

    return {response, body}
  }

  /**
   * Updates the status or the callback URL of an existing webhook subscription.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update webhook subscription
   * @param subscriptionId
   * @param updateBoardSubscriptionRequest
   */
  async updateBoardSubscription(
    subscriptionId: string,
    updateBoardSubscriptionRequest: UpdateBoardSubscriptionRequest,
  ): Promise<{response: Response; body: BoardSubscription}> {
    const localVarPath = '/v2-experimental/webhooks/board_subscriptions/{subscription_id}'.replace(
      '{' + 'subscription_id' + '}',
      encodeURIComponent(String(subscriptionId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'subscriptionId' is not null or undefined
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('Required parameter subscriptionId was null or undefined when calling updateBoardSubscription.')
    }

    const urlResource = new URL(localVarPath, this.basePath)
    urlResource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      urlResource,
      JSON.stringify(ObjectSerializer.serialize(updateBoardSubscriptionRequest, 'UpdateBoardSubscriptionRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardSubscription')

    return {response, body}
  }

  async call(method: string, url: string, body?: string | FormData) {
    const resource = new URL(url, this.basePath)
    const {bodyAsJson, response} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      method,
      resource,
      body,

      this.logger,
    )

    return {body: bodyAsJson, response}
  }
}

export class HttpError extends Error {
  constructor(public response: Response, public body: any, public statusCode?: number) {
    super('HTTP request failed')
    this.name = 'HttpError'
  }
}

export async function makeJsonRequest(
  token: string,
  method: string,
  url: URL,
  body?: string | FormData,
  logger?: (...thing: any) => void,
  httpTimeout: number = 15000,
) {
  const options: RequestInit = {
    method,
    headers: {
      'User-Agent': `miro-api:${version}`,
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body,
    timeout: httpTimeout,
  }

  if (typeof body === 'string') {
    options.headers = {...options.headers, 'Content-Type': 'application/json'}
  }

  const hasLogger = typeof logger === 'function'

  if (hasLogger) logger('FETCH', url.toString(), options)

  const response = await fetch(url.toString(), options)

  if (hasLogger) logger('RESPONSE', response)

  let bodyAsJson: unknown
  try {
    bodyAsJson = await response.json()
  } catch (err) {
    // Body doesn't have valid json
  }

  if (hasLogger && bodyAsJson) logger('BODY', bodyAsJson)

  if (!response.ok) {
    throw new HttpError(response, bodyAsJson, response.status)
  }

  return {bodyAsJson, response}
}
