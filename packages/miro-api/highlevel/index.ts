import {MiroApi} from '../api'
import {KeepBase} from './helpers'

import {BaseApi} from './../highlevel/Api'
import {BaseOrganization} from './Organization'
import {OrganizationMember as BaseOrganizationMember} from './../model/organizationMember'
import {BaseTeam} from './Team'
import {BoardDataClassificationLabel as BaseBoardDataClassification} from './../model/boardDataClassificationLabel'
import {DataClassificationOrganizationSettings as BaseDataClassification} from './../model/dataClassificationOrganizationSettings'
import {TeamMember as BaseTeamMember} from './../model/teamMember'
import {TeamSettings as BaseTeamSettings} from './../model/teamSettings'
import {BaseBoard} from './Board'
import {BoardMember as BaseBoardMember} from './../model/boardMember'
import {BaseItem} from './Item'
import {BaseAppCardItem} from './AppCardItem'
import {BaseCardItem} from './CardItem'
import {BaseDocumentItem} from './DocumentItem'
import {BaseEmbedItem} from './EmbedItem'
import {BaseFrameItem} from './FrameItem'
import {BaseImageItem} from './ImageItem'
import {BaseShapeItem} from './ShapeItem'
import {BaseStickyNoteItem} from './StickyNoteItem'
import {BaseTextItem} from './TextItem'
import {ConnectorWithLinks as BaseConnector} from './../model/connectorWithLinks'
import {BaseTag} from './Tag'

export class Api extends BaseApi {
  /** @hidden */
  _api: MiroApi

  /** @hidden */
  constructor(api: MiroApi, props: KeepBase<BaseApi>) {
    super()
    this._api = api

    Object.assign(this, props)
  }

  /**
   * Creates a board with the specified name and sharing policies.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Create board
   * @param boardChanges
   */
  async createBoard(boardChanges: Parameters<MiroApi['createBoard']>[0]): Promise<Board> {
    const result = (await this._api.createBoard(boardChanges)).body

    return new Board(this._api, result.id, result)
  }

  /**
   * Retrieves information about a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific board
   * @param boardId [Unique identifier (ID) of the board](https://developers.miro.com/reference/board-model) that you want to retrieve.
   */
  async getBoard(boardId: Parameters<MiroApi['getSpecificBoard']>[0]): Promise<Board> {
    const result = (await this._api.getSpecificBoard(boardId)).body

    return new Board(this._api, result.id, result)
  }

  /**
   * Retrieves organization information.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get organization info
   * @param orgId id of the organization
   */
  async getOrganization(orgId: Parameters<MiroApi['enterpriseGetOrganization']>[0]): Promise<Organization> {
    const result = (await this._api.enterpriseGetOrganization(orgId)).body

    return new Organization(this._api, result.id, result)
  }
}

export class Organization extends BaseOrganization {
  /** @hidden */
  _api: MiroApi

  id: string

  /** @hidden */
  constructor(api: MiroApi, id: string, props: KeepBase<BaseOrganization>) {
    super()
    this._api = api
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Creates a new team in an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Create team
   * @param createTeamRequest
   */
  async createTeam(createTeamRequest: Parameters<MiroApi['enterpriseCreateTeam']>[1]): Promise<Team> {
    const result = (await this._api.enterpriseCreateTeam(this.id.toString(), createTeamRequest)).body

    return new Team(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves board classification settings for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get organization settings
   */
  async getDataClassification(): Promise<DataClassification> {
    const result = (await this._api.enterpriseDataclassificationOrganizationSettingsGet(this.id.toString())).body

    return new DataClassification(this._api, result)
  }

  /**
   * Retrieves default team settings of an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get default team settings
   */
  async getDefaultTeamSettings(): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetDefaultTeamSettings(this.id.toString())).body

    return new TeamSettings(this._api, result)
  }

  /**
   * Retrieves organization member information for an existing organization.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get organization member
   * @param memberId id of the organization member
   */
  async getOrganizationMember(
    memberId: Parameters<MiroApi['enterpriseGetOrganizationMember']>[1],
  ): Promise<OrganizationMember> {
    const result = (await this._api.enterpriseGetOrganizationMember(this.id.toString(), memberId)).body

    return new OrganizationMember(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves team information for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get team
   * @param teamId The id of a Team.
   */
  async getTeam(teamId: Parameters<MiroApi['enterpriseGetTeam']>[1]): Promise<Team> {
    const result = (await this._api.enterpriseGetTeam(this.id.toString(), teamId)).body

    return new Team(this._api, this.id, result.id, result)
  }
}

export class OrganizationMember extends BaseOrganizationMember {
  /** @hidden */
  _api: MiroApi

  orgId: string
  id: string

  /** @hidden */
  constructor(api: MiroApi, orgId: string, id: string, props: KeepBase<BaseOrganizationMember>) {
    super()
    this._api = api
    this.orgId = orgId
    this.id = id
    Object.assign(this, props)
  }
}

export class Team extends BaseTeam {
  /** @hidden */
  _api: MiroApi

  orgId: string
  teamId: number

  /** @hidden */
  constructor(api: MiroApi, orgId: string, teamId: number, props: KeepBase<BaseTeam>) {
    super()
    this._api = api
    this.orgId = orgId
    this.teamId = teamId
    Object.assign(this, props)
  }

  /**
   * Deletes an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Delete team
   */
  async deleteTeam(): Promise<void> {
    await this._api.enterpriseDeleteTeam(this.orgId.toString(), this.teamId.toString())
  }

  /**
   * Deletes team member from team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Delete team member from team
   * @param memberId The id of a Team member.
   */
  async deleteTeamMember(memberId: Parameters<MiroApi['enterpriseDeleteTeamMember']>[2]): Promise<void> {
    await this._api.enterpriseDeleteTeamMember(this.orgId.toString(), this.teamId.toString(), memberId)
  }

  /**
   * Retrieves board classification for a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get board classification
   * @param boardId Unique identifier of the board that you want to retrieve.
   */
  async getBoardDataClassification(
    boardId: Parameters<MiroApi['enterpriseDataclassificationBoardGet']>[2],
  ): Promise<BoardDataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationBoardGet(this.orgId.toString(), this.teamId.toString(), boardId)
    ).body

    return new BoardDataClassification(this._api, result)
  }

  /**
   * Updates board classification for an existing board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Update board classification
   * @param boardId Unique identifier of the board that you want to update.
   * @param dataClassificationLabelId
   */
  async setBoardDataClassification(
    boardId: Parameters<MiroApi['enterpriseDataclassificationBoardSet']>[2],
    dataClassificationLabelId: Parameters<MiroApi['enterpriseDataclassificationBoardSet']>[3],
  ): Promise<void> {
    await this._api.enterpriseDataclassificationBoardSet(
      this.orgId.toString(),
      this.teamId.toString(),
      boardId,
      dataClassificationLabelId,
    )
  }

  /**
   * Updates board classification for not-classified only or all boards in an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Bulk update boards classification
   * @param updateBoardsDataClassificationLabelRequest
   */
  async setBoardDataClassificationBulk(
    updateBoardsDataClassificationLabelRequest: Parameters<MiroApi['enterpriseDataclassificationTeamBoardsBulk']>[2],
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamBoardsBulk(
      this.orgId.toString(),
      this.teamId.toString(),
      updateBoardsDataClassificationLabelRequest,
    )
  }

  /**
   * Retrieves board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get team settings
   */
  async getDataClassification(): Promise<DataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationTeamSettingsGet(this.orgId.toString(), this.teamId.toString())
    ).body

    return new DataClassification(this._api, result)
  }

  /**
   * Updates board classification settings for an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Update team settings
   * @param updateTeamSettingsRequest
   */
  async setDataClassification(
    updateTeamSettingsRequest: Parameters<MiroApi['enterpriseDataclassificationTeamSettingsSet']>[2],
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamSettingsSet(
      this.orgId.toString(),
      this.teamId.toString(),
      updateTeamSettingsRequest,
    )
  }

  /**
   * Invites a new member to an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Invite team members
   * @param teamMemberInvite
   */
  async inviteTeamMember(teamMemberInvite: Parameters<MiroApi['enterpriseInviteTeamMember']>[2]): Promise<void> {
    await this._api.enterpriseInviteTeamMember(this.orgId.toString(), this.teamId.toString(), teamMemberInvite)
  }

  /**
   * Retrieves team member by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get team member
   * @param memberId The id of a Team member.
   */
  async getTeamMember(memberId: Parameters<MiroApi['enterpriseGetTeamMember']>[2]): Promise<TeamMember> {
    const result = (await this._api.enterpriseGetTeamMember(this.orgId.toString(), this.teamId.toString(), memberId))
      .body

    return new TeamMember(this._api, this.orgId, this.teamId, result.memberId, result)
  }

  /**
   * Updates an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Update team
   * @param teamChanges
   */
  async updateTeam(teamChanges: Parameters<MiroApi['enterpriseUpdateTeam']>[2]): Promise<void> {
    await this._api.enterpriseUpdateTeam(this.orgId.toString(), this.teamId.toString(), teamChanges)
  }

  /**
   * Retrieves team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Get team settings
   */
  async getTeamSettings(): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetTeamSettings(this.teamId.toString())).body

    return new TeamSettings(this._api, result)
  }

  /**
   * Updates team settings of an existing team.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Update team settings
   * @param teamSettingsChanges
   */
  async updateTeamSettings(teamSettingsChanges: Parameters<MiroApi['enterpriseUpdateTeamSettings']>[1]): Promise<void> {
    await this._api.enterpriseUpdateTeamSettings(this.teamId.toString(), teamSettingsChanges)
  }
}

export class BoardDataClassification extends BaseBoardDataClassification {
  /** @hidden */
  _api: MiroApi

  /** @hidden */
  constructor(api: MiroApi, props: KeepBase<BaseBoardDataClassification>) {
    super()
    this._api = api

    Object.assign(this, props)
  }
}

export class DataClassification extends BaseDataClassification {
  /** @hidden */
  _api: MiroApi

  /** @hidden */
  constructor(api: MiroApi, props: KeepBase<BaseDataClassification>) {
    super()
    this._api = api

    Object.assign(this, props)
  }
}

export class TeamMember extends BaseTeamMember {
  /** @hidden */
  _api: MiroApi

  orgId: string
  teamId: number
  memberId: number

  /** @hidden */
  constructor(api: MiroApi, orgId: string, teamId: number, memberId: number, props: KeepBase<BaseTeamMember>) {
    super()
    this._api = api
    this.orgId = orgId
    this.teamId = teamId
    this.memberId = memberId
    Object.assign(this, props)
  }

  /**
   * Updates team member role in team by id.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>organizations:teams:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a> <br/><h3>Enterprise only</h3> <p>This API is available only for <a target=_blank href=\"/reference/api-reference#enterprise-plan\">Enterprise plan</a> users.</p>
   * @summary Update team member
   * @param teamMemberChanges
   */
  async update(teamMemberChanges: Parameters<MiroApi['enterpriseUpdateTeamMember']>[3]): Promise<void> {
    await this._api.enterpriseUpdateTeamMember(
      this.orgId.toString(),
      this.teamId.toString(),
      this.memberId.toString(),
      teamMemberChanges,
    )
  }
}

export class TeamSettings extends BaseTeamSettings {
  /** @hidden */
  _api: MiroApi

  /** @hidden */
  constructor(api: MiroApi, props: KeepBase<BaseTeamSettings>) {
    super()
    this._api = api

    Object.assign(this, props)
  }
}

export class Board extends BaseBoard {
  /** @hidden */
  _api: MiroApi

  id: string

  /** @hidden */
  constructor(api: MiroApi, id: string, props: KeepBase<BaseBoard>) {
    super()
    this._api = api
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Adds an app card item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create app card item
   * @param appCardCreateRequest
   */
  async createAppCardItem(appCardCreateRequest: Parameters<MiroApi['createAppCardItem']>[1]): Promise<AppCardItem> {
    const result = (await this._api.createAppCardItem(this.id.toString(), appCardCreateRequest)).body

    return new AppCardItem(this._api, this.id, result.id, result)
  }

  /**
   * Adds a card item to a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create card item
   * @param cardCreateRequest
   */
  async createCardItem(cardCreateRequest: Parameters<MiroApi['createCardItem']>[1]): Promise<CardItem> {
    const result = (await this._api.createCardItem(this.id.toString(), cardCreateRequest)).body

    return new CardItem(this._api, this.id, result.id, result)
  }

  /**
   * Adds a connector to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create connector
   * @param connectorCreationData
   */
  async createConnector(connectorCreationData: Parameters<MiroApi['createConnector']>[1]): Promise<Connector> {
    const result = (await this._api.createConnector(this.id.toString(), connectorCreationData)).body

    return new Connector(this._api, this.id, result.id, result)
  }

  /**
   * Adds an embed item containing external content to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create embed item
   * @param embedCreateRequest
   */
  async createEmbedItem(embedCreateRequest: Parameters<MiroApi['createEmbedItem']>[1]): Promise<EmbedItem> {
    const result = (await this._api.createEmbedItem(this.id.toString(), embedCreateRequest)).body

    return new EmbedItem(this._api, this.id, result.id, result)
  }

  /**
   * Adds a frame to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create frame
   * @param frameCreateRequest
   */
  async createFrameItem(frameCreateRequest: Parameters<MiroApi['createFrameItem']>[1]): Promise<FrameItem> {
    const result = (await this._api.createFrameItem(this.id.toString(), frameCreateRequest)).body

    return new FrameItem(this._api, this.id, result.id, result)
  }

  /**
   * Adds a shape item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create shape item
   * @param shapeCreateRequest
   */
  async createShapeItem(shapeCreateRequest: Parameters<MiroApi['createShapeItem']>[1]): Promise<ShapeItem> {
    const result = (await this._api.createShapeItem(this.id.toString(), shapeCreateRequest)).body

    return new ShapeItem(this._api, this.id, result.id, result)
  }

  /**
   * Adds a sticky note item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create sticky note item
   * @param stickyNoteCreateRequest
   */
  async createStickyNoteItem(
    stickyNoteCreateRequest: Parameters<MiroApi['createStickyNoteItem']>[1],
  ): Promise<StickyNoteItem> {
    const result = (await this._api.createStickyNoteItem(this.id.toString(), stickyNoteCreateRequest)).body

    return new StickyNoteItem(this._api, this.id, result.id, result)
  }

  /**
   * Creates a tag on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Create tag
   * @param tagCreateRequest
   */
  async createTag(tagCreateRequest: Parameters<MiroApi['createTag']>[1]): Promise<Tag> {
    const result = (await this._api.createTag(this.id.toString(), tagCreateRequest)).body

    return new Tag(this._api, this.id, result.id, result)
  }

  /**
   * Adds a text item to a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Create text item
   * @param textCreateRequest
   */
  async createTextItem(textCreateRequest: Parameters<MiroApi['createTextItem']>[1]): Promise<TextItem> {
    const result = (await this._api.createTextItem(this.id.toString(), textCreateRequest)).body

    return new TextItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific app card item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get app card item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getAppCardItem(itemId: Parameters<MiroApi['getAppCardItem']>[1]): Promise<AppCardItem> {
    const result = (await this._api.getAppCardItem(this.id.toString(), itemId)).body

    return new AppCardItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific card item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get card item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getCardItem(itemId: Parameters<MiroApi['getCardItem']>[1]): Promise<CardItem> {
    const result = (await this._api.getCardItem(this.id.toString(), itemId)).body

    return new CardItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific connector on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific connector
   * @param connectorId [Unique identifier (ID) of the connector](https://developers.miro.com/reference/rest-api-connector-model) that you want to retrieve.
   */
  async getConnector(connectorId: Parameters<MiroApi['getConnector']>[1]): Promise<Connector> {
    const result = (await this._api.getConnector(this.id.toString(), connectorId)).body

    return new Connector(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific document item on a board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get document item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getDocumentItem(itemId: Parameters<MiroApi['getDocumentItem']>[1]): Promise<DocumentItem> {
    const result = (await this._api.getDocumentItem(this.id.toString(), itemId)).body

    return new DocumentItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific embed item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get embed item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getEmbedItem(itemId: Parameters<MiroApi['getEmbedItem']>[1]): Promise<EmbedItem> {
    const result = (await this._api.getEmbedItem(this.id.toString(), itemId)).body

    return new EmbedItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific frame on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get frame
   * @param itemId [Unique identifier (ID) of the frame](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getFrameItem(itemId: Parameters<MiroApi['getFrameItem']>[1]): Promise<FrameItem> {
    const result = (await this._api.getFrameItem(this.id.toString(), itemId)).body

    return new FrameItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific image item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get image item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getImageItem(itemId: Parameters<MiroApi['getImageItem']>[1]): Promise<ImageItem> {
    const result = (await this._api.getImageItem(this.id.toString(), itemId)).body

    return new ImageItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific shape item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get shape item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getShapeItem(itemId: Parameters<MiroApi['getShapeItem']>[1]): Promise<ShapeItem> {
    const result = (await this._api.getShapeItem(this.id.toString(), itemId)).body

    return new ShapeItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get specific board member
   * @param boardMemberId Unique identifier (ID) of the board member whose role you want to retrieve.
   */
  async getMember(boardMemberId: Parameters<MiroApi['getSpecificBoardMember']>[1]): Promise<BoardMember> {
    const result = (await this._api.getSpecificBoardMember(this.id.toString(), boardMemberId)).body

    return new BoardMember(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific sticky note item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get sticky note item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getStickyNoteItem(itemId: Parameters<MiroApi['getStickyNoteItem']>[1]): Promise<StickyNoteItem> {
    const result = (await this._api.getStickyNoteItem(this.id.toString(), itemId)).body

    return new StickyNoteItem(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific tag.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get tag
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) that you want to retrieve.
   */
  async getTag(tagId: Parameters<MiroApi['getTag']>[1]): Promise<Tag> {
    const result = (await this._api.getTag(this.id.toString(), tagId)).body

    return new Tag(this._api, this.id, result.id, result)
  }

  /**
   * Retrieves information for a specific text item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get text item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to retrieve.
   */
  async getTextItem(itemId: Parameters<MiroApi['getTextItem']>[1]): Promise<TextItem> {
    const result = (await this._api.getTextItem(this.id.toString(), itemId)).body

    return new TextItem(this._api, this.id, result.id, result)
  }

  /**
   * Creates a copy of an existing board. You can also update the name, description, sharing policy, and permissions policy for the new board in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 4</a><br/>
   * @summary Copy board
   * @param boardChanges
   */
  async copy(boardChanges: Parameters<MiroApi['copyBoard']>[1]): Promise<Board> {
    const result = (await this._api.copyBoard(this.id.toString(), boardChanges)).body

    return new Board(this._api, result.id, result)
  }

  /**
   * Shares the board and Invites new members to collaborate on a board by sending an invitation email. Depending on the board\'s [Sharing policy](https://developers.miro.com/reference/rest-api-policy-data-model#sharing-policy), there might be various scenarios where membership in the team is required in order to share the board with a user. For more information on sharing policy and different scenarios, see [Sharing policy](https://developers.miro.com/reference/rest-api-policy-data-model#sharing-policy).<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Share board
   * @param boardMembersInvite
   */
  async share(boardMembersInvite: Parameters<MiroApi['shareBoard']>[1]): Promise<void> {
    await this._api.shareBoard(this.id.toString(), boardMembersInvite)
  }

  /**
   *
   * @summary Update board
   * @param boardChanges
   */
  async update(boardChanges: Parameters<MiroApi['updateBoard']>[1]): Promise<void> {
    await this._api.updateBoard(this.id.toString(), boardChanges)
  }

  /**
   *
   * @summary Delete board
   */
  async delete(): Promise<void> {
    await this._api.deleteBoard(this.id.toString())
  }

  /**
   * Removes a board member from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Remove board member
   * @param boardMemberId Unique identifier (ID) of the board member whose role you want to delete.
   */
  async removeMember(boardMemberId: Parameters<MiroApi['removeBoardMember']>[1]): Promise<void> {
    await this._api.removeBoardMember(this.id.toString(), boardMemberId)
  }

  /**
   * Removes the specified tag from the specified item. The tag still exists on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Remove tag from item
   * @param itemId [Unique identifier (ID) of the item](https://developers.miro.com/reference/rest-api-item-model) that you want to remove the tag from.
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) that you want to remove from the item.
   */
  async removeTag(
    itemId: Parameters<MiroApi['removeTagFromItem']>[1],
    tagId: Parameters<MiroApi['removeTagFromItem']>[2],
  ): Promise<void> {
    await this._api.removeTagFromItem(this.id.toString(), itemId, tagId)
  }
}

export class BoardMember extends BaseBoardMember {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseBoardMember>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates the role of a board member.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update board member
   * @param boardMemberChanges
   */
  async update(boardMemberChanges: Parameters<MiroApi['updateBoardMember']>[2]): Promise<void> {
    await this._api.updateBoardMember(this.boardId.toString(), this.id.toString(), boardMemberChanges)
  }
}

export class Item extends BaseItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates the position or the parent of an item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update item position or parent
   * @param genericItemUpdate
   */
  async update(genericItemUpdate: Parameters<MiroApi['updateItemPositionOrParent']>[2]): Promise<void> {
    await this._api.updateItemPositionOrParent(this.boardId.toString(), this.id.toString(), genericItemUpdate)
  }

  /**
   * Deletes an item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete item
   */
  async delete(): Promise<void> {
    await this._api.deleteItem(this.boardId.toString(), this.id.toString())
  }
}

export class AppCardItem extends BaseAppCardItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseAppCardItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates an app card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update app card item
   * @param appCardUpdateRequest
   */
  async update(appCardUpdateRequest: Parameters<MiroApi['updateAppCardItem']>[2]): Promise<void> {
    await this._api.updateAppCardItem(this.boardId.toString(), this.id.toString(), appCardUpdateRequest)
  }

  /**
   * Deletes an app card item from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete app card item
   */
  async delete(): Promise<void> {
    await this._api.deleteAppCardItem(this.boardId.toString(), this.id.toString())
  }

  /**
   * Retrieves all the tags from the specified item.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get tags from item
   */
  async getAllTags(): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(this.boardId.toString(), this.id.toString())).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /**
   * Removes the specified tag from the specified item. The tag still exists on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Remove tag from item
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) that you want to remove from the item.
   */
  async removeTag(tagId: Parameters<MiroApi['removeTagFromItem']>[2]): Promise<void> {
    await this._api.removeTagFromItem(this.boardId.toString(), this.id.toString(), tagId)
  }

  /**
   * Attach an existing tag to the specified item. Card and sticky note items can have up to 8 tags.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Attach tag to item
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) you want to add to the item.
   */
  async attachTag(tagId: Parameters<MiroApi['attachTagToItem']>[2]): Promise<void> {
    await this._api.attachTagToItem(this.boardId.toString(), this.id.toString(), tagId)
  }
}

export class CardItem extends BaseCardItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseCardItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates a card item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update card item
   * @param cardUpdateRequest
   */
  async update(cardUpdateRequest: Parameters<MiroApi['updateCardItem']>[2]): Promise<void> {
    await this._api.updateCardItem(this.boardId.toString(), this.id.toString(), cardUpdateRequest)
  }

  /**
   * Deletes a card item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete card item
   */
  async delete(): Promise<void> {
    await this._api.deleteCardItem(this.boardId.toString(), this.id.toString())
  }

  /**
   * Retrieves all the tags from the specified item.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get tags from item
   */
  async getAllTags(): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(this.boardId.toString(), this.id.toString())).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /**
   * Removes the specified tag from the specified item. The tag still exists on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Remove tag from item
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) that you want to remove from the item.
   */
  async removeTag(tagId: Parameters<MiroApi['removeTagFromItem']>[2]): Promise<void> {
    await this._api.removeTagFromItem(this.boardId.toString(), this.id.toString(), tagId)
  }

  /**
   * Attach an existing tag to the specified item. Card and sticky note items can have up to 8 tags.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Attach tag to item
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) you want to add to the item.
   */
  async attachTag(tagId: Parameters<MiroApi['attachTagToItem']>[2]): Promise<void> {
    await this._api.attachTagToItem(this.boardId.toString(), this.id.toString(), tagId)
  }
}

export class DocumentItem extends BaseDocumentItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseDocumentItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Deletes a document item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete document item
   */
  async delete(): Promise<void> {
    await this._api.deleteDocumentItem(this.boardId.toString(), this.id.toString())
  }
}

export class EmbedItem extends BaseEmbedItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseEmbedItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates an embed item on a board based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update embed item
   * @param embedUpdateRequest
   */
  async update(embedUpdateRequest: Parameters<MiroApi['updateEmbedItem']>[2]): Promise<void> {
    await this._api.updateEmbedItem(this.boardId.toString(), this.id.toString(), embedUpdateRequest)
  }

  /**
   * Deletes an embed item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete embed item
   */
  async delete(): Promise<void> {
    await this._api.deleteEmbedItem(this.boardId.toString(), this.id.toString())
  }
}

export class FrameItem extends BaseFrameItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseFrameItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates a frame on a board based on the data, style, or geometry properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update frame
   * @param frameUpdateRequest
   */
  async update(frameUpdateRequest: Parameters<MiroApi['updateFrameItem']>[2]): Promise<void> {
    await this._api.updateFrameItem(this.boardId.toString(), this.id.toString(), frameUpdateRequest)
  }

  /**
   * Deletes a frame from a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete frame
   */
  async delete(): Promise<void> {
    await this._api.deleteFrameItem(this.boardId.toString(), this.id.toString())
  }
}

export class ImageItem extends BaseImageItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseImageItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Deletes an image item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete image item
   */
  async delete(): Promise<void> {
    await this._api.deleteImageItem(this.boardId.toString(), this.id.toString())
  }
}

export class ShapeItem extends BaseShapeItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseShapeItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates a shape item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update shape item
   * @param shapeUpdateRequest
   */
  async update(shapeUpdateRequest: Parameters<MiroApi['updateShapeItem']>[2]): Promise<void> {
    await this._api.updateShapeItem(this.boardId.toString(), this.id.toString(), shapeUpdateRequest)
  }

  /**
   * Deletes a shape item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete shape item
   */
  async delete(): Promise<void> {
    await this._api.deleteShapeItem(this.boardId.toString(), this.id.toString())
  }
}

export class StickyNoteItem extends BaseStickyNoteItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseStickyNoteItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates a sticky note item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update sticky note item
   * @param stickyNoteUpdateRequest
   */
  async update(stickyNoteUpdateRequest: Parameters<MiroApi['updateStickyNoteItem']>[2]): Promise<void> {
    await this._api.updateStickyNoteItem(this.boardId.toString(), this.id.toString(), stickyNoteUpdateRequest)
  }

  /**
   * Deletes a sticky note item from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete sticky note item
   */
  async delete(): Promise<void> {
    await this._api.deleteStickyNoteItem(this.boardId.toString(), this.id.toString())
  }

  /**
   * Retrieves all the tags from the specified item.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Get tags from item
   */
  async getAllTags(): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(this.boardId.toString(), this.id.toString())).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /**
   * Removes the specified tag from the specified item. The tag still exists on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Remove tag from item
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) that you want to remove from the item.
   */
  async removeTag(tagId: Parameters<MiroApi['removeTagFromItem']>[2]): Promise<void> {
    await this._api.removeTagFromItem(this.boardId.toString(), this.id.toString(), tagId)
  }

  /**
   * Attach an existing tag to the specified item. Card and sticky note items can have up to 8 tags.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Attach tag to item
   * @param tagId [Unique identifier (ID) of the tag](https://developers.miro.com/reference/rest-api-tag-data-model) you want to add to the item.
   */
  async attachTag(tagId: Parameters<MiroApi['attachTagToItem']>[2]): Promise<void> {
    await this._api.attachTagToItem(this.boardId.toString(), this.id.toString(), tagId)
  }
}

export class TextItem extends BaseTextItem {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseTextItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates a text item on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update text item
   * @param textUpdateRequest
   */
  async update(textUpdateRequest: Parameters<MiroApi['updateTextItem']>[2]): Promise<void> {
    await this._api.updateTextItem(this.boardId.toString(), this.id.toString(), textUpdateRequest)
  }

  /**
   * Deletes a text item from the board<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete text item
   */
  async delete(): Promise<void> {
    await this._api.deleteTextItem(this.boardId.toString(), this.id.toString())
  }
}

export class Connector extends BaseConnector {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: string

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: string, props: KeepBase<BaseConnector>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates a connector on a board based on the data and style properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 2</a><br/>
   * @summary Update connector
   * @param connectorChangesData
   */
  async update(connectorChangesData: Parameters<MiroApi['updateConnector']>[2]): Promise<void> {
    await this._api.updateConnector(this.boardId.toString(), this.id.toString(), connectorChangesData)
  }

  /**
   * Deletes the specified connector from the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 3</a><br/>
   * @summary Delete connector
   */
  async delete(): Promise<void> {
    await this._api.deleteConnector(this.boardId.toString(), this.id.toString())
  }
}

export class Tag extends BaseTag {
  /** @hidden */
  _api: MiroApi

  boardId: string
  id: number

  /** @hidden */
  constructor(api: MiroApi, boardId: string, id: number, props: KeepBase<BaseTag>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /**
   * Updates a tag based on the data properties provided in the request body.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Update tag
   * @param tagUpdateRequest
   */
  async update(tagUpdateRequest: Parameters<MiroApi['updateTag']>[2]): Promise<void> {
    await this._api.updateTag(this.boardId.toString(), this.id.toString(), tagUpdateRequest)
  }

  /**
   * Deletes the specified tag from the board. The tag is also removed from all cards and sticky notes on the board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:write</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
   * @summary Delete tag
   */
  async delete(): Promise<void> {
    await this._api.deleteTag(this.boardId.toString(), this.id.toString())
  }
}
