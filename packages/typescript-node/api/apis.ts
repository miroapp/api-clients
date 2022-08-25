import fetch, {Response} from 'node-fetch'

import {AppCardCreateRequest} from '../model/appCardCreateRequest'
import {AppCardItem} from '../model/appCardItem'
import {AppCardUpdateRequest} from '../model/appCardUpdateRequest'
import {GetBoards400Response} from '../model/getBoards400Response'

import {BoardDataClassificationLabel} from '../model/boardDataClassificationLabel'
import {DataClassificationLabelId} from '../model/dataClassificationLabelId'

import {DataClassificationOrganizationSettings} from '../model/dataClassificationOrganizationSettings'

import {DataClassificationTeamSettings} from '../model/dataClassificationTeamSettings'
import {UpdateBoardsDataClassificationLabel} from '../model/updateBoardsDataClassificationLabel'
import {UpdateBoardsDataClassificationLabelRequest} from '../model/updateBoardsDataClassificationLabelRequest'
import {UpdateTeamSettingsRequest} from '../model/updateTeamSettingsRequest'

import {BoardMemberChanges} from '../model/boardMemberChanges'
import {BoardMemberWithLinks} from '../model/boardMemberWithLinks'
import {BoardMembersInvite} from '../model/boardMembersInvite'
import {BoardMembersPagedResponse} from '../model/boardMembersPagedResponse'
import {InvitationResult} from '../model/invitationResult'

import {BoardChanges} from '../model/boardChanges'
import {BoardWithLinks} from '../model/boardWithLinks'
import {BoardsPagedResponse} from '../model/boardsPagedResponse'

import {CardCreateRequest} from '../model/cardCreateRequest'
import {CardItem} from '../model/cardItem'
import {CardUpdateRequest} from '../model/cardUpdateRequest'

import {ConnectorChangesData} from '../model/connectorChangesData'
import {ConnectorCreationData} from '../model/connectorCreationData'
import {ConnectorWithLinks} from '../model/connectorWithLinks'
import {ConnectorsCursorPaged} from '../model/connectorsCursorPaged'

import {DocumentCreateRequest} from '../model/documentCreateRequest'
import {DocumentItem} from '../model/documentItem'
import {DocumentUpdateRequest} from '../model/documentUpdateRequest'

import {EmbedCreateRequest} from '../model/embedCreateRequest'
import {EmbedItem} from '../model/embedItem'
import {EmbedUpdateRequest} from '../model/embedUpdateRequest'

import {FrameCreateRequest} from '../model/frameCreateRequest'
import {FrameItem} from '../model/frameItem'
import {FrameUpdateRequest} from '../model/frameUpdateRequest'

import {ImageCreateRequest} from '../model/imageCreateRequest'
import {ImageItem} from '../model/imageItem'
import {ImageUpdateRequest} from '../model/imageUpdateRequest'

import {GenericItem} from '../model/genericItem'
import {GenericItemCursorPaged} from '../model/genericItemCursorPaged'
import {GenericItemUpdate} from '../model/genericItemUpdate'

import {EnterpriseGetOrganizationMembers200Response} from '../model/enterpriseGetOrganizationMembers200Response'
import {Organization} from '../model/organization'
import {OrganizationMember} from '../model/organizationMember'
import {OrganizationMembersSearchQuery} from '../model/organizationMembersSearchQuery'

import {ShapeCreateRequest} from '../model/shapeCreateRequest'
import {ShapeItem} from '../model/shapeItem'
import {ShapeUpdateRequest} from '../model/shapeUpdateRequest'

import {StickyNoteCreateRequest} from '../model/stickyNoteCreateRequest'
import {StickyNoteItem} from '../model/stickyNoteItem'
import {StickyNoteUpdateRequest} from '../model/stickyNoteUpdateRequest'

import {GetTagsResponse} from '../model/getTagsResponse'
import {ItemPagedResponse} from '../model/itemPagedResponse'
import {TagCreateRequest} from '../model/tagCreateRequest'
import {TagUpdateRequest} from '../model/tagUpdateRequest'
import {TagWithLinks} from '../model/tagWithLinks'
import {TagsPagedResponse} from '../model/tagsPagedResponse'

import {TeamMember} from '../model/teamMember'
import {TeamMemberChanges} from '../model/teamMemberChanges'
import {TeamMemberInvite} from '../model/teamMemberInvite'

import {TeamSettings} from '../model/teamSettings'
import {TeamSettingsChanges} from '../model/teamSettingsChanges'

import {CreateTeamRequest} from '../model/createTeamRequest'
import {Team} from '../model/team'
import {TeamChanges} from '../model/teamChanges'

import {TextCreateRequest} from '../model/textCreateRequest'
import {TextItem} from '../model/textItem'
import {TextUpdateRequest} from '../model/textUpdateRequest'

import {ObjectSerializer} from '../model/models'

let defaultBasePath = 'https://api.miro.com'

export type Logger = (...thing: any) => void

export class MiroApi {
  accessToken: string | (() => Promise<string>)
  basePath: string
  logger?: Logger

  constructor(accessToken: string | (() => Promise<string>), basePath: string = defaultBasePath, logger?: Logger) {
    this.accessToken = accessToken
    this.basePath = basePath
    this.logger = logger
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(appCardCreateRequest, 'AppCardCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'AppCardItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'AppCardItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(appCardUpdateRequest, 'AppCardUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'AppCardItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardDataClassificationLabel')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(dataClassificationLabelId, 'DataClassificationLabelId')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardDataClassificationLabel')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DataClassificationOrganizationSettings')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DataClassificationTeamSettings')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(updateTeamSettingsRequest, 'UpdateTeamSettingsRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DataClassificationTeamSettings')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardMembersPagedResponse')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardMemberWithLinks')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(boardMembersInvite, 'BoardMembersInvite')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'InvitationResult')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(boardMemberChanges, 'BoardMemberChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardMemberWithLinks')

    return {response, body}
  }

  async copyBoard(
    copyFrom: string,

    boardChanges?: BoardChanges,
  ): Promise<{response: Response; body: BoardWithLinks}> {
    const localVarPath = '/v2/boards'
    let localVarQueryParameters = new URLSearchParams()

    // verify required parameter 'copyFrom' is not null or undefined
    if (copyFrom === null || copyFrom === undefined) {
      throw new Error('Required parameter copyFrom was null or undefined when calling copyBoard.')
    }

    if (copyFrom !== undefined) {
      localVarQueryParameters.append('copy_from', ObjectSerializer.serialize(copyFrom, 'string'))
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PUT',
      resource,
      JSON.stringify(ObjectSerializer.serialize(boardChanges, 'BoardChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinks')

    return {response, body}
  }

  async createBoard(boardChanges?: BoardChanges): Promise<{response: Response; body: BoardWithLinks}> {
    const localVarPath = '/v2/boards'
    let localVarQueryParameters = new URLSearchParams()

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(boardChanges, 'BoardChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinks')

    return {response, body}
  }

  async deleteBoard(boardId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2/boards/{board_id}'.replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling deleteBoard.')
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  async getBoards(query?: {
    teamId?: string

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardsPagedResponse')

    return {response, body}
  }

  async getSpecificBoard(boardId: string): Promise<{response: Response; body: BoardWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}'.replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling getSpecificBoard.')
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinks')

    return {response, body}
  }

  async updateBoard(boardId: string, boardChanges: BoardChanges): Promise<{response: Response; body: BoardWithLinks}> {
    const localVarPath = '/v2/boards/{board_id}'.replace('{' + 'board_id' + '}', encodeURIComponent(String(boardId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling updateBoard.')
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(boardChanges, 'BoardChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'BoardWithLinks')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(cardCreateRequest, 'CardCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'CardItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'CardItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(cardUpdateRequest, 'CardUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'CardItem')

    return {response, body}
  }

  async createConnector(
    boardId: string,
    connectorCreationData: ConnectorCreationData,
  ): Promise<{response: Response; body: ConnectorWithLinks}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/connectors'.replace(
      '{' + 'board_id' + '}',
      encodeURIComponent(String(boardId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'boardId' is not null or undefined
    if (boardId === null || boardId === undefined) {
      throw new Error('Required parameter boardId was null or undefined when calling createConnector.')
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(connectorCreationData, 'ConnectorCreationData')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorWithLinks')

    return {response, body}
  }

  async deleteConnector(boardId: string, connectorId: string): Promise<{response: Response; body: object}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/connectors/{connector_id}'
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  async getConnector(boardId: string, connectorId: string): Promise<{response: Response; body: ConnectorWithLinks}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/connectors/{connector_id}'
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorWithLinks')

    return {response, body}
  }

  async getConnectors(
    boardId: string,
    query?: {
      limit?: string

      cursor?: string
    },
  ): Promise<{response: Response; body: ConnectorsCursorPaged}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/connectors'.replace(
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorsCursorPaged')

    return {response, body}
  }

  async updateConnector(
    boardId: string,
    connectorId: string,
    connectorChangesData: ConnectorChangesData,
  ): Promise<{response: Response; body: ConnectorWithLinks}> {
    const localVarPath = '/v2-experimental/boards/{board_id}/connectors/{connector_id}'
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(connectorChangesData, 'ConnectorChangesData')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ConnectorWithLinks')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(documentCreateRequest, 'DocumentCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(documentUpdateRequest, 'DocumentUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'DocumentItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(embedCreateRequest, 'EmbedCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EmbedItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EmbedItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(embedUpdateRequest, 'EmbedUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EmbedItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(frameCreateRequest, 'FrameCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'FrameItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'FrameItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(frameUpdateRequest, 'FrameUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'FrameItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(imageCreateRequest, 'ImageCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(imageUpdateRequest, 'ImageUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ImageItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

  async getItems(
    boardId: string,
    query?: {
      limit?: string

      type?: string

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
      localVarQueryParameters.append('type', ObjectSerializer.serialize(query?.type, 'string'))
    }

    if (query?.cursor !== undefined) {
      localVarQueryParameters.append('cursor', ObjectSerializer.serialize(query?.cursor, 'string'))
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItemCursorPaged')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItemCursorPaged')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(genericItemUpdate, 'GenericItemUpdate')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GenericItem')

    return {response, body}
  }

  async enterpriseGetOrganization(orgId: string): Promise<{response: Response; body: Organization}> {
    const localVarPath = '/v2/orgs/{org_id}'.replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganization.')
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Organization')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'OrganizationMember')

    return {response, body}
  }

  async enterpriseGetOrganizationMembers(
    orgId: string,
    query: OrganizationMembersSearchQuery,
  ): Promise<{response: Response; body: EnterpriseGetOrganizationMembers200Response}> {
    const localVarPath = '/v2/orgs/{org_id}/members'.replace('{' + 'org_id' + '}', encodeURIComponent(String(orgId)))
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'orgId' is not null or undefined
    if (orgId === null || orgId === undefined) {
      throw new Error('Required parameter orgId was null or undefined when calling enterpriseGetOrganizationMembers.')
    }

    // verify required parameter 'query' is not null or undefined
    if (query === null || query === undefined) {
      throw new Error('Required parameter query was null or undefined when calling enterpriseGetOrganizationMembers.')
    }

    if (query !== undefined) {
      localVarQueryParameters.append('query', ObjectSerializer.serialize(query, 'OrganizationMembersSearchQuery'))
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'EnterpriseGetOrganizationMembers200Response')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(shapeCreateRequest, 'ShapeCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(shapeUpdateRequest, 'ShapeUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ShapeItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(stickyNoteCreateRequest, 'StickyNoteCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(stickyNoteUpdateRequest, 'StickyNoteUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'StickyNoteItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(tagCreateRequest, 'TagCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagWithLinks')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'ItemPagedResponse')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagWithLinks')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagsPagedResponse')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'GetTagsResponse')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(tagUpdateRequest, 'TagUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TagWithLinks')

    return {response, body}
  }

  async enterpriseDeleteTeamMember(
    orgId: string,
    teamId: string,
    memberId: string,
  ): Promise<{response: Response; body: object}> {
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamMember')

    return {response, body}
  }

  async enterpriseGetTeamMembers(
    orgId: string,
    teamId: string,
    query?: {
      limit?: number

      cursor?: string

      filterQuery?: string
    },
  ): Promise<{response: Response; body: Array<TeamMember>}> {
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

    if (query?.filterQuery !== undefined) {
      localVarQueryParameters.append('filterQuery', ObjectSerializer.serialize(query?.filterQuery, 'string'))
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Array<TeamMember>')

    return {response, body}
  }

  async enterpriseInviteTeamMember(
    orgId: string,
    teamId: string,
    teamMemberInvite: TeamMemberInvite,
  ): Promise<{response: Response; body: InvitationResult}> {
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(teamMemberInvite, 'TeamMemberInvite')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'InvitationResult')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(teamMemberChanges, 'TeamMemberChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamMember')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamSettings')

    return {response, body}
  }

  async enterpriseGetTeamSettings(teamId: string): Promise<{response: Response; body: TeamSettings}> {
    const localVarPath = '/v2/teams_settings/{team_id}'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseGetTeamSettings.')
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamSettings')

    return {response, body}
  }

  async enterpriseUpdateTeamSettings(
    teamId: string,
    teamSettingsChanges: TeamSettingsChanges,
  ): Promise<{response: Response; body: TeamSettings}> {
    const localVarPath = '/v2/teams_settings/{team_id}'.replace(
      '{' + 'team_id' + '}',
      encodeURIComponent(String(teamId)),
    )
    let localVarQueryParameters = new URLSearchParams()
    // verify required parameter 'teamId' is not null or undefined
    if (teamId === null || teamId === undefined) {
      throw new Error('Required parameter teamId was null or undefined when calling enterpriseUpdateTeamSettings.')
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(teamSettingsChanges, 'TeamSettingsChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TeamSettings')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(createTeamRequest, 'CreateTeamRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Team')

    return {response, body}
  }

  async enterpriseDeleteTeam(orgId: string, teamId: string): Promise<{response: Response; body: object}> {
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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Team')

    return {response, body}
  }

  async enterpriseGetTeams(
    orgId: string,
    query?: {
      limit?: number

      cursor?: string

      filterQuery?: string
    },
  ): Promise<{response: Response; body: Array<Team>}> {
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

    if (query?.filterQuery !== undefined) {
      localVarQueryParameters.append('filterQuery', ObjectSerializer.serialize(query?.filterQuery, 'string'))
    }

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Array<Team>')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(teamChanges, 'TeamChanges')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'Team')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'POST',
      resource,
      JSON.stringify(ObjectSerializer.serialize(textCreateRequest, 'TextCreateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TextItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'DELETE',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'object')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'GET',
      resource,
      undefined,

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TextItem')

    return {response, body}
  }

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

    const resource = new URL(localVarPath, this.basePath)
    resource.search = localVarQueryParameters.toString()

    const {response, bodyAsJson} = await makeJsonRequest(
      typeof this.accessToken === 'function' ? await this.accessToken() : this.accessToken,
      'PATCH',
      resource,
      JSON.stringify(ObjectSerializer.serialize(textUpdateRequest, 'TextUpdateRequest')),

      this.logger,
    )

    const body = ObjectSerializer.deserialize(bodyAsJson, 'TextItem')

    return {response, body}
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
  body?: string,
  logger?: (...thing: any) => void,
) {
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body,
  }

  const hasLogger = typeof logger === 'function'

  if (hasLogger) logger('FETCH', url.toString(), options)

  const response = await fetch(url, options)

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
