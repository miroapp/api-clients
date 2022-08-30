import {MiroApi} from '../api'
import {GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString} from './helpers'

import {Api as BaseApi} from './../highlevel/Api'
import {Organization as BaseOrganization} from './../model/organization'
import {OrganizationMember as BaseOrganizationMember} from './../model/organizationMember'
import {Team as BaseTeam} from './Team'
import {BoardDataClassificationLabel as BaseBoardDataClassification} from './../model/boardDataClassificationLabel'
import {DataClassificationOrganizationSettings as BaseDataClassification} from './../model/dataClassificationOrganizationSettings'
import {TeamMember as BaseTeamMember} from './../model/teamMember'
import {TeamSettings as BaseTeamSettings} from './../model/teamSettings'
import {Board as BaseBoard} from './Board'
import {BoardMember as BaseBoardMember} from './../model/boardMember'
import {Item as BaseItem} from './Item'

import {FrameItem as BaseFrameItem} from './FrameItem'

import {ConnectorWithLinks as BaseConnector} from './../model/connectorWithLinks'
import {Tag as BaseTag} from './../model/tag'

export class Api extends BaseApi {
  /** @hidden */
  _api: MiroApi

  constructor(api: MiroApi, props: KeepBase<BaseApi>) {
    super()
    this._api = api

    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.createBoard} */
  async createBoard(...parameters: GetParameters0<MiroApi['createBoard']>): Promise<Board> {
    const result = (await this._api.createBoard(...parameters)).body

    return new Board(this._api, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificBoard} */
  async getBoard(...parameters: GetParameters0<MiroApi['getSpecificBoard']>): Promise<Board> {
    const result = (await this._api.getSpecificBoard(...parameters)).body

    return new Board(this._api, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getBoards} */
  async getBoards(...parameters: GetParameters0<MiroApi['getBoards']>): Promise<Board[]> {
    const result = (await this._api.getBoards(...parameters)).body

    return result.data
      ? result.data.map((result) => {
          return new Board(this._api, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetOrganization} */
  async getOrganization(...parameters: GetParameters0<MiroApi['enterpriseGetOrganization']>): Promise<Organization> {
    const result = (await this._api.enterpriseGetOrganization(...parameters)).body

    return new Organization(this._api, result.id, result)
  }
}

export class Organization extends BaseOrganization {
  /** @hidden */
  _api: MiroApi

  id: string | undefined

  constructor(api: MiroApi, id: string | undefined, props: KeepBase<BaseOrganization>) {
    super()
    this._api = api
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.enterpriseCreateTeam} */
  async createTeam(...parameters: GetParameters1<MiroApi['enterpriseCreateTeam']>): Promise<Team> {
    const result = (await this._api.enterpriseCreateTeam(this.id?.toString() || '', ...parameters)).body

    return new Team(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationOrganizationSettingsGet} */
  async getDataClassification(
    ...parameters: GetParameters1<MiroApi['enterpriseDataclassificationOrganizationSettingsGet']>
  ): Promise<DataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationOrganizationSettingsGet(this.id?.toString() || '', ...parameters)
    ).body

    return new DataClassification(this._api, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetDefaultTeamSettings} */
  async getDefaultTeamSettings(
    ...parameters: GetParameters1<MiroApi['enterpriseGetDefaultTeamSettings']>
  ): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetDefaultTeamSettings(this.id?.toString() || '', ...parameters)).body

    return new TeamSettings(this._api, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetOrganizationMember} */
  async getOrganizationMember(
    ...parameters: GetParameters1<MiroApi['enterpriseGetOrganizationMember']>
  ): Promise<OrganizationMember> {
    const result = (await this._api.enterpriseGetOrganizationMember(this.id?.toString() || '', ...parameters)).body

    return new OrganizationMember(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetOrganizationMembers} */
  async getOrganizationMembers(
    ...parameters: GetParameters1<MiroApi['enterpriseGetOrganizationMembers']>
  ): Promise<OrganizationMember[]> {
    const result = (await this._api.enterpriseGetOrganizationMembers(this.id?.toString() || '', ...parameters)).body

    return result.data
      ? result.data.map((result) => {
          return new OrganizationMember(this._api, this.id, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeam} */
  async getTeam(...parameters: GetParameters1<MiroApi['enterpriseGetTeam']>): Promise<Team> {
    const result = (await this._api.enterpriseGetTeam(this.id?.toString() || '', ...parameters)).body

    return new Team(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeams} */
  async getTeams(...parameters: GetParameters1<MiroApi['enterpriseGetTeams']>): Promise<Team[]> {
    const result = (await this._api.enterpriseGetTeams(this.id?.toString() || '', ...parameters)).body

    return result
      ? result.map((result) => {
          return new Team(this._api, this.id, result.id, result)
        })
      : []
  }
}

export class OrganizationMember extends BaseOrganizationMember {
  /** @hidden */
  _api: MiroApi

  orgId: string | undefined
  id: string | undefined

  constructor(
    api: MiroApi,
    orgId: string | undefined,
    id: string | undefined,
    props: KeepBase<BaseOrganizationMember>,
  ) {
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

  orgId: string | undefined
  teamId: number | undefined

  constructor(api: MiroApi, orgId: string | undefined, teamId: number | undefined, props: KeepBase<BaseTeam>) {
    super()
    this._api = api
    this.orgId = orgId
    this.teamId = teamId
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDeleteTeam} */
  async deleteTeam(...parameters: GetParameters2<MiroApi['enterpriseDeleteTeam']>): Promise<void> {
    await this._api.enterpriseDeleteTeam(this.orgId?.toString() || '', this.teamId?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDeleteTeamMember} */
  async deleteTeamMember(...parameters: GetParameters2<MiroApi['enterpriseDeleteTeamMember']>): Promise<void> {
    await this._api.enterpriseDeleteTeamMember(
      this.orgId?.toString() || '',
      this.teamId?.toString() || '',
      ...parameters,
    )
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationBoardGet} */
  async getBoardDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationBoardGet']>
  ): Promise<BoardDataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationBoardGet(
        this.orgId?.toString() || '',
        this.teamId?.toString() || '',
        ...parameters,
      )
    ).body

    return new BoardDataClassification(this._api, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationBoardSet} */
  async setBoardDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationBoardSet']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationBoardSet(
      this.orgId?.toString() || '',
      this.teamId?.toString() || '',
      ...parameters,
    )
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationTeamBoardsBulk} */
  async setBoardDataClassificationBulk(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationTeamBoardsBulk']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamBoardsBulk(
      this.orgId?.toString() || '',
      this.teamId?.toString() || '',
      ...parameters,
    )
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationTeamSettingsGet} */
  async getDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationTeamSettingsGet']>
  ): Promise<DataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationTeamSettingsGet(
        this.orgId?.toString() || '',
        this.teamId?.toString() || '',
        ...parameters,
      )
    ).body

    return new DataClassification(this._api, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationTeamSettingsSet} */
  async setDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationTeamSettingsSet']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamSettingsSet(
      this.orgId?.toString() || '',
      this.teamId?.toString() || '',
      ...parameters,
    )
  }

  /** {@inheritDoc api!MiroApi.enterpriseInviteTeamMember} */
  async inviteTeamMember(...parameters: GetParameters2<MiroApi['enterpriseInviteTeamMember']>): Promise<void> {
    await this._api.enterpriseInviteTeamMember(
      this.orgId?.toString() || '',
      this.teamId?.toString() || '',
      ...parameters,
    )
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeamMember} */
  async getTeamMember(...parameters: GetParameters2<MiroApi['enterpriseGetTeamMember']>): Promise<TeamMember> {
    const result = (
      await this._api.enterpriseGetTeamMember(
        this.orgId?.toString() || '',
        this.teamId?.toString() || '',
        ...parameters,
      )
    ).body

    return new TeamMember(this._api, this.orgId, this.teamId, result.memberId, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeamMembers} */
  async getTeamMembers(...parameters: GetParameters2<MiroApi['enterpriseGetTeamMembers']>): Promise<TeamMember[]> {
    const result = (
      await this._api.enterpriseGetTeamMembers(
        this.orgId?.toString() || '',
        this.teamId?.toString() || '',
        ...parameters,
      )
    ).body

    return result
      ? result.map((result) => {
          return new TeamMember(this._api, this.orgId, this.teamId, result.memberId, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.enterpriseUpdateTeam} */
  async updateTeam(...parameters: GetParameters2<MiroApi['enterpriseUpdateTeam']>): Promise<void> {
    await this._api.enterpriseUpdateTeam(this.orgId?.toString() || '', this.teamId?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeamSettings} */
  async getTeamSettings(...parameters: GetParameters1<MiroApi['enterpriseGetTeamSettings']>): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetTeamSettings(this.teamId?.toString() || '', ...parameters)).body

    return new TeamSettings(this._api, result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseUpdateTeamSettings} */
  async updateTeamSettings(...parameters: GetParameters1<MiroApi['enterpriseUpdateTeamSettings']>): Promise<void> {
    await this._api.enterpriseUpdateTeamSettings(this.teamId?.toString() || '', ...parameters)
  }
}

export class BoardDataClassification extends BaseBoardDataClassification {
  /** @hidden */
  _api: MiroApi

  constructor(api: MiroApi, props: KeepBase<BaseBoardDataClassification>) {
    super()
    this._api = api

    Object.assign(this, props)
  }
}

export class DataClassification extends BaseDataClassification {
  /** @hidden */
  _api: MiroApi

  constructor(api: MiroApi, props: KeepBase<BaseDataClassification>) {
    super()
    this._api = api

    Object.assign(this, props)
  }
}

export class TeamMember extends BaseTeamMember {
  /** @hidden */
  _api: MiroApi

  orgId: string | undefined
  teamId: number | undefined
  memberId: number | undefined

  constructor(
    api: MiroApi,
    orgId: string | undefined,
    teamId: number | undefined,
    memberId: number | undefined,
    props: KeepBase<BaseTeamMember>,
  ) {
    super()
    this._api = api
    this.orgId = orgId
    this.teamId = teamId
    this.memberId = memberId
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.enterpriseUpdateTeamMember} */
  async update(...parameters: GetParameters3<MiroApi['enterpriseUpdateTeamMember']>): Promise<void> {
    await this._api.enterpriseUpdateTeamMember(
      this.orgId?.toString() || '',
      this.teamId?.toString() || '',
      this.memberId?.toString() || '',
      ...parameters,
    )
  }
}

export class TeamSettings extends BaseTeamSettings {
  /** @hidden */
  _api: MiroApi

  constructor(api: MiroApi, props: KeepBase<BaseTeamSettings>) {
    super()
    this._api = api

    Object.assign(this, props)
  }
}

export class Board extends BaseBoard {
  /** @hidden */
  _api: MiroApi

  id: string | undefined

  constructor(api: MiroApi, id: string | undefined, props: KeepBase<BaseBoard>) {
    super()
    this._api = api
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.createAppCardItem} */
  async createAppCardItem(...parameters: GetParameters1<MiroApi['createAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.createAppCardItem(this.id?.toString() || '', ...parameters)).body

    return new AppCardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createCardItem} */
  async createCardItem(...parameters: GetParameters1<MiroApi['createCardItem']>): Promise<CardItem> {
    const result = (await this._api.createCardItem(this.id?.toString() || '', ...parameters)).body

    return new CardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createConnector} */
  async createConnector(...parameters: GetParameters1<MiroApi['createConnector']>): Promise<Connector> {
    const result = (await this._api.createConnector(this.id?.toString() || '', ...parameters)).body

    return new Connector(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createDocumentItemUsingUrl} */
  async createDocumentItemUsingUrl(
    ...parameters: GetParameters1<MiroApi['createDocumentItemUsingUrl']>
  ): Promise<DocumentItem> {
    const result = (await this._api.createDocumentItemUsingUrl(this.id?.toString() || '', ...parameters)).body

    return new DocumentItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createEmbedItem} */
  async createEmbedItem(...parameters: GetParameters1<MiroApi['createEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.createEmbedItem(this.id?.toString() || '', ...parameters)).body

    return new EmbedItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createFrameItem} */
  async createFrameItem(...parameters: GetParameters1<MiroApi['createFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.createFrameItem(this.id?.toString() || '', ...parameters)).body

    return new FrameItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createImageItemUsingUrl} */
  async createImageItemUsingUrl(...parameters: GetParameters1<MiroApi['createImageItemUsingUrl']>): Promise<ImageItem> {
    const result = (await this._api.createImageItemUsingUrl(this.id?.toString() || '', ...parameters)).body

    return new ImageItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createShapeItem} */
  async createShapeItem(...parameters: GetParameters1<MiroApi['createShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.createShapeItem(this.id?.toString() || '', ...parameters)).body

    return new ShapeItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createStickyNoteItem} */
  async createStickyNoteItem(...parameters: GetParameters1<MiroApi['createStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.createStickyNoteItem(this.id?.toString() || '', ...parameters)).body

    return new StickyNoteItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createTag} */
  async createTag(...parameters: GetParameters1<MiroApi['createTag']>): Promise<Tag> {
    const result = (await this._api.createTag(this.id?.toString() || '', ...parameters)).body

    return new Tag(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.createTextItem} */
  async createTextItem(...parameters: GetParameters1<MiroApi['createTextItem']>): Promise<TextItem> {
    const result = (await this._api.createTextItem(this.id?.toString() || '', ...parameters)).body

    return new TextItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getBoardMembers} */
  async getMembers(...parameters: GetParameters1<MiroApi['getBoardMembers']>): Promise<BoardMember[]> {
    const result = (await this._api.getBoardMembers(this.id?.toString() || '', ...parameters)).body

    return result.data
      ? result.data.map((result) => {
          return new BoardMember(this._api, this.id, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getAppCardItem} */
  async getAppCardItem(...parameters: GetParameters1<MiroApi['getAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.getAppCardItem(this.id?.toString() || '', ...parameters)).body

    return new AppCardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getCardItem} */
  async getCardItem(...parameters: GetParameters1<MiroApi['getCardItem']>): Promise<CardItem> {
    const result = (await this._api.getCardItem(this.id?.toString() || '', ...parameters)).body

    return new CardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getConnector} */
  async getConnector(...parameters: GetParameters1<MiroApi['getConnector']>): Promise<Connector> {
    const result = (await this._api.getConnector(this.id?.toString() || '', ...parameters)).body

    return new Connector(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getConnectors} */
  async getConnectors(...parameters: GetParameters1<MiroApi['getConnectors']>): Promise<Connector[]> {
    const result = (await this._api.getConnectors(this.id?.toString() || '', ...parameters)).body

    return result.data
      ? result.data.map((result) => {
          return new Connector(this._api, this.id, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getDocumentItem} */
  async getDocumentItem(...parameters: GetParameters1<MiroApi['getDocumentItem']>): Promise<DocumentItem> {
    const result = (await this._api.getDocumentItem(this.id?.toString() || '', ...parameters)).body

    return new DocumentItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getEmbedItem} */
  async getEmbedItem(...parameters: GetParameters1<MiroApi['getEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.getEmbedItem(this.id?.toString() || '', ...parameters)).body

    return new EmbedItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getFrameItem} */
  async getFrameItem(...parameters: GetParameters1<MiroApi['getFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.getFrameItem(this.id?.toString() || '', ...parameters)).body

    return new FrameItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getImageItem} */
  async getImageItem(...parameters: GetParameters1<MiroApi['getImageItem']>): Promise<ImageItem> {
    const result = (await this._api.getImageItem(this.id?.toString() || '', ...parameters)).body

    return new ImageItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getShapeItem} */
  async getShapeItem(...parameters: GetParameters1<MiroApi['getShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.getShapeItem(this.id?.toString() || '', ...parameters)).body

    return new ShapeItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificBoardMember} */
  async getMember(...parameters: GetParameters1<MiroApi['getSpecificBoardMember']>): Promise<BoardMember> {
    const result = (await this._api.getSpecificBoardMember(this.id?.toString() || '', ...parameters)).body

    return new BoardMember(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificItem} */
  async getItem(...parameters: GetParameters1<MiroApi['getSpecificItem']>): Promise<Item> {
    const result = (await this._api.getSpecificItem(this.id?.toString() || '', ...parameters)).body

    return new Item(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getStickyNoteItem} */
  async getStickyNoteItem(...parameters: GetParameters1<MiroApi['getStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.getStickyNoteItem(this.id?.toString() || '', ...parameters)).body

    return new StickyNoteItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getTag} */
  async getTag(...parameters: GetParameters1<MiroApi['getTag']>): Promise<Tag> {
    const result = (await this._api.getTag(this.id?.toString() || '', ...parameters)).body

    return new Tag(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromBoard} */
  async getTags(...parameters: GetParameters1<MiroApi['getTagsFromBoard']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromBoard(this.id?.toString() || '', ...parameters)).body

    return result.data
      ? result.data.map((result) => {
          return new Tag(this._api, this.id, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getTextItem} */
  async getTextItem(...parameters: GetParameters1<MiroApi['getTextItem']>): Promise<TextItem> {
    const result = (await this._api.getTextItem(this.id?.toString() || '', ...parameters)).body

    return new TextItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.getItems} */
  async getItems(...parameters: GetParameters1<MiroApi['getItems']>): Promise<Item[]> {
    const result = (await this._api.getItems(this.id?.toString() || '', ...parameters)).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, this.id, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getItemsWithinFrame} */
  async getItemsWithinFrame(...parameters: GetParameters1<MiroApi['getItemsWithinFrame']>): Promise<Item[]> {
    const result = (await this._api.getItemsWithinFrame(this.id?.toString() || '', ...parameters)).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, this.id, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.copyBoard} */
  async copy(...parameters: GetParameters1<MiroApi['copyBoard']>): Promise<Board> {
    const result = (await this._api.copyBoard(this.id?.toString() || '', ...parameters)).body

    return new Board(this._api, result.id, result)
  }

  /** {@inheritDoc api!MiroApi.shareBoard} */
  async share(...parameters: GetParameters1<MiroApi['shareBoard']>): Promise<void> {
    await this._api.shareBoard(this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.updateBoard} */
  async update(...parameters: GetParameters1<MiroApi['updateBoard']>): Promise<void> {
    await this._api.updateBoard(this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteBoard} */
  async delete(...parameters: GetParameters1<MiroApi['deleteBoard']>): Promise<void> {
    await this._api.deleteBoard(this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.removeBoardMember} */
  async removeMember(...parameters: GetParameters1<MiroApi['removeBoardMember']>): Promise<void> {
    await this._api.removeBoardMember(this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters1<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.id?.toString() || '', ...parameters)
  }
}

export class BoardMember extends BaseBoardMember {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<BaseBoardMember>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateBoardMember} */
  async update(...parameters: GetParameters2<MiroApi['updateBoardMember']>): Promise<void> {
    await this._api.updateBoardMember(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class Item extends BaseItem {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<BaseItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateItemPositionOrParent} */
  async update(...parameters: GetParameters2<MiroApi['updateItemPositionOrParent']>): Promise<void> {
    await this._api.updateItemPositionOrParent(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteItem']>): Promise<void> {
    await this._api.deleteItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class AppCardItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateAppCardItem} */
  async update(...parameters: GetParameters2<MiroApi['updateAppCardItem']>): Promise<void> {
    await this._api.updateAppCardItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteAppCardItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteAppCardItem']>): Promise<void> {
    await this._api.deleteAppCardItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...parameters: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
    ).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...parameters: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class CardItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateCardItem} */
  async update(...parameters: GetParameters2<MiroApi['updateCardItem']>): Promise<void> {
    await this._api.updateCardItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteCardItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteCardItem']>): Promise<void> {
    await this._api.deleteCardItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...parameters: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
    ).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...parameters: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class DocumentItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateDocumentItemUsingUrl} */
  async update(...parameters: GetParameters2<MiroApi['updateDocumentItemUsingUrl']>): Promise<void> {
    await this._api.updateDocumentItemUsingUrl(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteDocumentItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteDocumentItem']>): Promise<void> {
    await this._api.deleteDocumentItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class EmbedItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateEmbedItem} */
  async update(...parameters: GetParameters2<MiroApi['updateEmbedItem']>): Promise<void> {
    await this._api.updateEmbedItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteEmbedItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteEmbedItem']>): Promise<void> {
    await this._api.deleteEmbedItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class FrameItem extends BaseFrameItem {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<BaseFrameItem>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateFrameItem} */
  async update(...parameters: GetParameters2<MiroApi['updateFrameItem']>): Promise<void> {
    await this._api.updateFrameItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteFrameItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteFrameItem']>): Promise<void> {
    await this._api.deleteFrameItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class ImageItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateImageItemUsingUrl} */
  async update(...parameters: GetParameters2<MiroApi['updateImageItemUsingUrl']>): Promise<void> {
    await this._api.updateImageItemUsingUrl(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteImageItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteImageItem']>): Promise<void> {
    await this._api.deleteImageItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class ShapeItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateShapeItem} */
  async update(...parameters: GetParameters2<MiroApi['updateShapeItem']>): Promise<void> {
    await this._api.updateShapeItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteShapeItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteShapeItem']>): Promise<void> {
    await this._api.deleteShapeItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class StickyNoteItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateStickyNoteItem} */
  async update(...parameters: GetParameters2<MiroApi['updateStickyNoteItem']>): Promise<void> {
    await this._api.updateStickyNoteItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteStickyNoteItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteStickyNoteItem']>): Promise<void> {
    await this._api.deleteStickyNoteItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...parameters: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
    ).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...parameters: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class TextItem extends Item {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<Item>) {
    super(api, boardId, id, props)
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateTextItem} */
  async update(...parameters: GetParameters2<MiroApi['updateTextItem']>): Promise<void> {
    await this._api.updateTextItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteTextItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteTextItem']>): Promise<void> {
    await this._api.deleteTextItem(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class Connector extends BaseConnector {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: string | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: string | undefined, props: KeepBase<BaseConnector>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateConnector} */
  async update(...parameters: GetParameters2<MiroApi['updateConnector']>): Promise<void> {
    await this._api.updateConnector(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteConnector} */
  async delete(...parameters: GetParameters2<MiroApi['deleteConnector']>): Promise<void> {
    await this._api.deleteConnector(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }
}

export class Tag extends BaseTag {
  /** @hidden */
  _api: MiroApi

  boardId: string | undefined
  id: number | undefined

  constructor(api: MiroApi, boardId: string | undefined, id: number | undefined, props: KeepBase<BaseTag>) {
    super()
    this._api = api
    this.boardId = boardId
    this.id = id
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.updateTag} */
  async update(...parameters: GetParameters2<MiroApi['updateTag']>): Promise<void> {
    await this._api.updateTag(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.deleteTag} */
  async delete(...parameters: GetParameters2<MiroApi['deleteTag']>): Promise<void> {
    await this._api.deleteTag(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
  }

  /** {@inheritDoc api!MiroApi.getItemsByTag} */
  async getTaggedItems(...parameters: GetParameters2<MiroApi['getItemsByTag']>): Promise<Item[]> {
    const result = (
      await this._api.getItemsByTag(this.boardId?.toString() || '', this.id?.toString() || '', ...parameters)
    ).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, this.boardId, result.id, result)
        })
      : []
  }
}
