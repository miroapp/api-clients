import {MiroApi} from '../api'
import {GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString} from './helpers'

import {Api as BaseApi} from './../nested-model/Api'
import {Organization as BaseOrganization} from './../model/organization'
import {OrganizationMember as BaseOrganizationMember} from './../model/organizationMember'
import {Team as BaseTeam} from './../nested-model/Team'
import {BoardDataClassificationLabel as BaseBoardDataClassification} from './../model/boardDataClassificationLabel'
import {DataClassificationOrganizationSettings as BaseDataClassification} from './../model/dataClassificationOrganizationSettings'
import {TeamMember as BaseTeamMember} from './../model/teamMember'
import {TeamSettings as BaseTeamSettings} from './../model/teamSettings'
import {Board as BaseBoard} from './../nested-model/Board'
import {BoardMember as BaseBoardMember} from './../model/boardMember'
import {GenericItem as BaseItem} from './../model/genericItem'
import {AppCardItem as BaseAppCardItem} from './../model/appCardItem'
import {CardItem as BaseCardItem} from './../model/cardItem'
import {DocumentItem as BaseDocumentItem} from './../model/documentItem'
import {EmbedItem as BaseEmbedItem} from './../model/embedItem'
import {FrameItem as BaseFrameItem} from './../model/frameItem'
import {ImageItem as BaseImageItem} from './../model/imageItem'
import {ShapeItem as BaseShapeItem} from './../model/shapeItem'
import {StickyNoteItem as BaseStickyNoteItem} from './../model/stickyNoteItem'
import {TextItem as BaseTextItem} from './../model/textItem'
import {ConnectorWithLinks as BaseConnector} from './../model/connectorWithLinks'
import {Tag as BaseTag} from './../model/tag'

export class Api extends BaseApi {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: []

  constructor(api: MiroApi, headParams: Api['_headParams'], rest: KeepBase<BaseApi>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.createAppCardItem} */
  async createAppCardItem(...rest: GetParameters0<MiroApi['createAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.createAppCardItem(...this._headParams, ...rest)).body

    return new AppCardItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createCardItem} */
  async createCardItem(...rest: GetParameters0<MiroApi['createCardItem']>): Promise<CardItem> {
    const result = (await this._api.createCardItem(...this._headParams, ...rest)).body

    return new CardItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createConnector} */
  async createConnector(...rest: GetParameters0<MiroApi['createConnector']>): Promise<Connector> {
    const result = (await this._api.createConnector(...this._headParams, ...rest)).body

    return new Connector(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createDocumentItemUsingUrl} */
  async createDocumentItemUsingUrl(
    ...rest: GetParameters0<MiroApi['createDocumentItemUsingUrl']>
  ): Promise<DocumentItem> {
    const result = (await this._api.createDocumentItemUsingUrl(...this._headParams, ...rest)).body

    return new DocumentItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createEmbedItem} */
  async createEmbedItem(...rest: GetParameters0<MiroApi['createEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.createEmbedItem(...this._headParams, ...rest)).body

    return new EmbedItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createFrameItem} */
  async createFrameItem(...rest: GetParameters0<MiroApi['createFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.createFrameItem(...this._headParams, ...rest)).body

    return new FrameItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createImageItemUsingUrl} */
  async createImageItemUsingUrl(...rest: GetParameters0<MiroApi['createImageItemUsingUrl']>): Promise<ImageItem> {
    const result = (await this._api.createImageItemUsingUrl(...this._headParams, ...rest)).body

    return new ImageItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createShapeItem} */
  async createShapeItem(...rest: GetParameters0<MiroApi['createShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.createShapeItem(...this._headParams, ...rest)).body

    return new ShapeItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createStickyNoteItem} */
  async createStickyNoteItem(...rest: GetParameters0<MiroApi['createStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.createStickyNoteItem(...this._headParams, ...rest)).body

    return new StickyNoteItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createTag} */
  async createTag(...rest: GetParameters0<MiroApi['createTag']>): Promise<Tag> {
    const result = (await this._api.createTag(...this._headParams, ...rest)).body

    return new Tag(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createTextItem} */
  async createTextItem(...rest: GetParameters0<MiroApi['createTextItem']>): Promise<TextItem> {
    const result = (await this._api.createTextItem(...this._headParams, ...rest)).body

    return new TextItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getBoardMembers} */
  async getMembers(...rest: GetParameters0<MiroApi['getBoardMembers']>): Promise<BoardMember[]> {
    const result = (await this._api.getBoardMembers(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new BoardMember(this._api, [rest[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getAppCardItem} */
  async getAppCardItem(...rest: GetParameters0<MiroApi['getAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.getAppCardItem(...this._headParams, ...rest)).body

    return new AppCardItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getCardItem} */
  async getCardItem(...rest: GetParameters0<MiroApi['getCardItem']>): Promise<CardItem> {
    const result = (await this._api.getCardItem(...this._headParams, ...rest)).body

    return new CardItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getConnector} */
  async getConnector(...rest: GetParameters0<MiroApi['getConnector']>): Promise<Connector> {
    const result = (await this._api.getConnector(...this._headParams, ...rest)).body

    return new Connector(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getConnectors} */
  async getConnectors(...rest: GetParameters0<MiroApi['getConnectors']>): Promise<Connector[]> {
    const result = (await this._api.getConnectors(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Connector(this._api, [rest[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getDocumentItem} */
  async getDocumentItem(...rest: GetParameters0<MiroApi['getDocumentItem']>): Promise<DocumentItem> {
    const result = (await this._api.getDocumentItem(...this._headParams, ...rest)).body

    return new DocumentItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getEmbedItem} */
  async getEmbedItem(...rest: GetParameters0<MiroApi['getEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.getEmbedItem(...this._headParams, ...rest)).body

    return new EmbedItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getFrameItem} */
  async getFrameItem(...rest: GetParameters0<MiroApi['getFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.getFrameItem(...this._headParams, ...rest)).body

    return new FrameItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getImageItem} */
  async getImageItem(...rest: GetParameters0<MiroApi['getImageItem']>): Promise<ImageItem> {
    const result = (await this._api.getImageItem(...this._headParams, ...rest)).body

    return new ImageItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getShapeItem} */
  async getShapeItem(...rest: GetParameters0<MiroApi['getShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.getShapeItem(...this._headParams, ...rest)).body

    return new ShapeItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificBoardMember} */
  async getMember(...rest: GetParameters0<MiroApi['getSpecificBoardMember']>): Promise<BoardMember> {
    const result = (await this._api.getSpecificBoardMember(...this._headParams, ...rest)).body

    return new BoardMember(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificItem} */
  async getItem(...rest: GetParameters0<MiroApi['getSpecificItem']>): Promise<Item> {
    const result = (await this._api.getSpecificItem(...this._headParams, ...rest)).body

    return new Item(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getStickyNoteItem} */
  async getStickyNoteItem(...rest: GetParameters0<MiroApi['getStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.getStickyNoteItem(...this._headParams, ...rest)).body

    return new StickyNoteItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getTag} */
  async getTag(...rest: GetParameters0<MiroApi['getTag']>): Promise<Tag> {
    const result = (await this._api.getTag(...this._headParams, ...rest)).body

    return new Tag(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromBoard} */
  async getTags(...rest: GetParameters0<MiroApi['getTagsFromBoard']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromBoard(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Tag(this._api, [rest[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getTextItem} */
  async getTextItem(...rest: GetParameters0<MiroApi['getTextItem']>): Promise<TextItem> {
    const result = (await this._api.getTextItem(...this._headParams, ...rest)).body

    return new TextItem(this._api, [rest[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getItems} */
  async getItems(...rest: GetParameters0<MiroApi['getItems']>): Promise<Item[]> {
    const result = (await this._api.getItems(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, [rest[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getItemsWithinFrame} */
  async getItemsWithinFrame(...rest: GetParameters0<MiroApi['getItemsWithinFrame']>): Promise<Item[]> {
    const result = (await this._api.getItemsWithinFrame(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, [rest[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.copyBoard} */
  async copy(...rest: GetParameters0<MiroApi['copyBoard']>): Promise<void> {
    await this._api.copyBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.shareBoard} */
  async share(...rest: GetParameters0<MiroApi['shareBoard']>): Promise<void> {
    await this._api.shareBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.updateBoard} */
  async update(...rest: GetParameters0<MiroApi['updateBoard']>): Promise<void> {
    await this._api.updateBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteBoard} */
  async delete(...rest: GetParameters0<MiroApi['deleteBoard']>): Promise<void> {
    await this._api.deleteBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.removeBoardMember} */
  async removeMember(...rest: GetParameters0<MiroApi['removeBoardMember']>): Promise<void> {
    await this._api.removeBoardMember(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters0<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.createBoard} */
  async createBoard(...rest: GetParameters0<MiroApi['createBoard']>): Promise<Board> {
    const result = (await this._api.createBoard(...this._headParams, ...rest)).body

    return new Board(this._api, [toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificBoard} */
  async getBoard(...rest: GetParameters0<MiroApi['getSpecificBoard']>): Promise<Board> {
    const result = (await this._api.getSpecificBoard(...this._headParams, ...rest)).body

    return new Board(this._api, [toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getBoards} */
  async getBoards(...rest: GetParameters0<MiroApi['getBoards']>): Promise<Board[]> {
    const result = (await this._api.getBoards(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Board(this._api, [toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetOrganization} */
  async getOrganization(...rest: GetParameters0<MiroApi['enterpriseGetOrganization']>): Promise<Organization> {
    const result = (await this._api.enterpriseGetOrganization(...this._headParams, ...rest)).body

    return new Organization(this._api, [toString(result.id)], result)
  }
}

export class Organization extends BaseOrganization {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string]

  constructor(api: MiroApi, headParams: Organization['_headParams'], rest: KeepBase<BaseOrganization>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseCreateTeam} */
  async createTeam(...rest: GetParameters1<MiroApi['enterpriseCreateTeam']>): Promise<Team> {
    const result = (await this._api.enterpriseCreateTeam(...this._headParams, ...rest)).body

    return new Team(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationOrganizationSettingsGet} */
  async getDataClassification(
    ...rest: GetParameters1<MiroApi['enterpriseDataclassificationOrganizationSettingsGet']>
  ): Promise<DataClassification> {
    const result = (await this._api.enterpriseDataclassificationOrganizationSettingsGet(...this._headParams, ...rest))
      .body

    return new DataClassification(this._api, [], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetDefaultTeamSettings} */
  async getDefaultTeamSettings(
    ...rest: GetParameters1<MiroApi['enterpriseGetDefaultTeamSettings']>
  ): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetDefaultTeamSettings(...this._headParams, ...rest)).body

    return new TeamSettings(this._api, [], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetOrganizationMember} */
  async getOrganizationMember(
    ...rest: GetParameters1<MiroApi['enterpriseGetOrganizationMember']>
  ): Promise<OrganizationMember> {
    const result = (await this._api.enterpriseGetOrganizationMember(...this._headParams, ...rest)).body

    return new OrganizationMember(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetOrganizationMembers} */
  async getOrganizationMembers(
    ...rest: GetParameters1<MiroApi['enterpriseGetOrganizationMembers']>
  ): Promise<OrganizationMember[]> {
    const result = (await this._api.enterpriseGetOrganizationMembers(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new OrganizationMember(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeam} */
  async getTeam(...rest: GetParameters1<MiroApi['enterpriseGetTeam']>): Promise<Team> {
    const result = (await this._api.enterpriseGetTeam(...this._headParams, ...rest)).body

    return new Team(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeams} */
  async getTeams(...rest: GetParameters1<MiroApi['enterpriseGetTeams']>): Promise<Team[]> {
    const result = (await this._api.enterpriseGetTeams(...this._headParams, ...rest)).body

    return result
      ? result.map((result) => {
          return new Team(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }
}

export class OrganizationMember extends BaseOrganizationMember {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: OrganizationMember['_headParams'], rest: KeepBase<BaseOrganizationMember>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }
}

export class Team extends BaseTeam {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: Team['_headParams'], rest: KeepBase<BaseTeam>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDeleteTeam} */
  async deleteTeam(...rest: GetParameters2<MiroApi['enterpriseDeleteTeam']>): Promise<void> {
    await this._api.enterpriseDeleteTeam(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDeleteTeamMember} */
  async deleteTeamMember(...rest: GetParameters2<MiroApi['enterpriseDeleteTeamMember']>): Promise<void> {
    await this._api.enterpriseDeleteTeamMember(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationBoardGet} */
  async getBoardDataClassification(
    ...rest: GetParameters2<MiroApi['enterpriseDataclassificationBoardGet']>
  ): Promise<BoardDataClassification> {
    const result = (await this._api.enterpriseDataclassificationBoardGet(...this._headParams, ...rest)).body

    return new BoardDataClassification(this._api, [], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationBoardSet} */
  async setBoardDataClassification(
    ...rest: GetParameters2<MiroApi['enterpriseDataclassificationBoardSet']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationBoardSet(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationTeamBoardsBulk} */
  async setBoardDataClassificationBulk(
    ...rest: GetParameters2<MiroApi['enterpriseDataclassificationTeamBoardsBulk']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamBoardsBulk(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationTeamSettingsGet} */
  async getDataClassification(
    ...rest: GetParameters2<MiroApi['enterpriseDataclassificationTeamSettingsGet']>
  ): Promise<DataClassification> {
    const result = (await this._api.enterpriseDataclassificationTeamSettingsGet(...this._headParams, ...rest)).body

    return new DataClassification(this._api, [], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseDataclassificationTeamSettingsSet} */
  async setDataClassification(
    ...rest: GetParameters2<MiroApi['enterpriseDataclassificationTeamSettingsSet']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamSettingsSet(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseInviteTeamMember} */
  async inviteTeamMember(...rest: GetParameters2<MiroApi['enterpriseInviteTeamMember']>): Promise<void> {
    await this._api.enterpriseInviteTeamMember(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeamMember} */
  async getTeamMember(...rest: GetParameters2<MiroApi['enterpriseGetTeamMember']>): Promise<TeamMember> {
    const result = (await this._api.enterpriseGetTeamMember(...this._headParams, ...rest)).body

    return new TeamMember(this._api, [this._headParams[0], this._headParams[1], toString(result.memberId)], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeamMembers} */
  async getTeamMembers(...rest: GetParameters2<MiroApi['enterpriseGetTeamMembers']>): Promise<TeamMember[]> {
    const result = (await this._api.enterpriseGetTeamMembers(...this._headParams, ...rest)).body

    return result
      ? result.map((result) => {
          return new TeamMember(
            this._api,
            [this._headParams[0], this._headParams[1], toString(result.memberId)],
            result,
          )
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.enterpriseUpdateTeam} */
  async updateTeam(...rest: GetParameters2<MiroApi['enterpriseUpdateTeam']>): Promise<void> {
    await this._api.enterpriseUpdateTeam(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseGetTeamSettings} */
  async getTeamSettings(...rest: GetParameters1<MiroApi['enterpriseGetTeamSettings']>): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetTeamSettings(this._headParams[1], ...rest)).body

    return new TeamSettings(this._api, [], result)
  }

  /** {@inheritDoc api!MiroApi.enterpriseUpdateTeamSettings} */
  async updateTeamSettings(...rest: GetParameters1<MiroApi['enterpriseUpdateTeamSettings']>): Promise<void> {
    await this._api.enterpriseUpdateTeamSettings(this._headParams[1], ...rest)
  }
}

export class BoardDataClassification extends BaseBoardDataClassification {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: []

  constructor(
    api: MiroApi,
    headParams: BoardDataClassification['_headParams'],
    rest: KeepBase<BaseBoardDataClassification>,
  ) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }
}

export class DataClassification extends BaseDataClassification {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: []

  constructor(api: MiroApi, headParams: DataClassification['_headParams'], rest: KeepBase<BaseDataClassification>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }
}

export class TeamMember extends BaseTeamMember {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string, string]

  constructor(api: MiroApi, headParams: TeamMember['_headParams'], rest: KeepBase<BaseTeamMember>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.enterpriseUpdateTeamMember} */
  async update(...rest: GetParameters3<MiroApi['enterpriseUpdateTeamMember']>): Promise<void> {
    await this._api.enterpriseUpdateTeamMember(...this._headParams, ...rest)
  }
}

export class TeamSettings extends BaseTeamSettings {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: []

  constructor(api: MiroApi, headParams: TeamSettings['_headParams'], rest: KeepBase<BaseTeamSettings>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }
}

export class Board extends BaseBoard {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string]

  constructor(api: MiroApi, headParams: Board['_headParams'], rest: KeepBase<BaseBoard>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.createAppCardItem} */
  async createAppCardItem(...rest: GetParameters1<MiroApi['createAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.createAppCardItem(...this._headParams, ...rest)).body

    return new AppCardItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createCardItem} */
  async createCardItem(...rest: GetParameters1<MiroApi['createCardItem']>): Promise<CardItem> {
    const result = (await this._api.createCardItem(...this._headParams, ...rest)).body

    return new CardItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createConnector} */
  async createConnector(...rest: GetParameters1<MiroApi['createConnector']>): Promise<Connector> {
    const result = (await this._api.createConnector(...this._headParams, ...rest)).body

    return new Connector(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createDocumentItemUsingUrl} */
  async createDocumentItemUsingUrl(
    ...rest: GetParameters1<MiroApi['createDocumentItemUsingUrl']>
  ): Promise<DocumentItem> {
    const result = (await this._api.createDocumentItemUsingUrl(...this._headParams, ...rest)).body

    return new DocumentItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createEmbedItem} */
  async createEmbedItem(...rest: GetParameters1<MiroApi['createEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.createEmbedItem(...this._headParams, ...rest)).body

    return new EmbedItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createFrameItem} */
  async createFrameItem(...rest: GetParameters1<MiroApi['createFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.createFrameItem(...this._headParams, ...rest)).body

    return new FrameItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createImageItemUsingUrl} */
  async createImageItemUsingUrl(...rest: GetParameters1<MiroApi['createImageItemUsingUrl']>): Promise<ImageItem> {
    const result = (await this._api.createImageItemUsingUrl(...this._headParams, ...rest)).body

    return new ImageItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createShapeItem} */
  async createShapeItem(...rest: GetParameters1<MiroApi['createShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.createShapeItem(...this._headParams, ...rest)).body

    return new ShapeItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createStickyNoteItem} */
  async createStickyNoteItem(...rest: GetParameters1<MiroApi['createStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.createStickyNoteItem(...this._headParams, ...rest)).body

    return new StickyNoteItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createTag} */
  async createTag(...rest: GetParameters1<MiroApi['createTag']>): Promise<Tag> {
    const result = (await this._api.createTag(...this._headParams, ...rest)).body

    return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.createTextItem} */
  async createTextItem(...rest: GetParameters1<MiroApi['createTextItem']>): Promise<TextItem> {
    const result = (await this._api.createTextItem(...this._headParams, ...rest)).body

    return new TextItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getBoardMembers} */
  async getMembers(...rest: GetParameters1<MiroApi['getBoardMembers']>): Promise<BoardMember[]> {
    const result = (await this._api.getBoardMembers(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new BoardMember(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getAppCardItem} */
  async getAppCardItem(...rest: GetParameters1<MiroApi['getAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.getAppCardItem(...this._headParams, ...rest)).body

    return new AppCardItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getCardItem} */
  async getCardItem(...rest: GetParameters1<MiroApi['getCardItem']>): Promise<CardItem> {
    const result = (await this._api.getCardItem(...this._headParams, ...rest)).body

    return new CardItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getConnector} */
  async getConnector(...rest: GetParameters1<MiroApi['getConnector']>): Promise<Connector> {
    const result = (await this._api.getConnector(...this._headParams, ...rest)).body

    return new Connector(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getConnectors} */
  async getConnectors(...rest: GetParameters1<MiroApi['getConnectors']>): Promise<Connector[]> {
    const result = (await this._api.getConnectors(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Connector(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getDocumentItem} */
  async getDocumentItem(...rest: GetParameters1<MiroApi['getDocumentItem']>): Promise<DocumentItem> {
    const result = (await this._api.getDocumentItem(...this._headParams, ...rest)).body

    return new DocumentItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getEmbedItem} */
  async getEmbedItem(...rest: GetParameters1<MiroApi['getEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.getEmbedItem(...this._headParams, ...rest)).body

    return new EmbedItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getFrameItem} */
  async getFrameItem(...rest: GetParameters1<MiroApi['getFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.getFrameItem(...this._headParams, ...rest)).body

    return new FrameItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getImageItem} */
  async getImageItem(...rest: GetParameters1<MiroApi['getImageItem']>): Promise<ImageItem> {
    const result = (await this._api.getImageItem(...this._headParams, ...rest)).body

    return new ImageItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getShapeItem} */
  async getShapeItem(...rest: GetParameters1<MiroApi['getShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.getShapeItem(...this._headParams, ...rest)).body

    return new ShapeItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificBoardMember} */
  async getMember(...rest: GetParameters1<MiroApi['getSpecificBoardMember']>): Promise<BoardMember> {
    const result = (await this._api.getSpecificBoardMember(...this._headParams, ...rest)).body

    return new BoardMember(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getSpecificItem} */
  async getItem(...rest: GetParameters1<MiroApi['getSpecificItem']>): Promise<Item> {
    const result = (await this._api.getSpecificItem(...this._headParams, ...rest)).body

    return new Item(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getStickyNoteItem} */
  async getStickyNoteItem(...rest: GetParameters1<MiroApi['getStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.getStickyNoteItem(...this._headParams, ...rest)).body

    return new StickyNoteItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getTag} */
  async getTag(...rest: GetParameters1<MiroApi['getTag']>): Promise<Tag> {
    const result = (await this._api.getTag(...this._headParams, ...rest)).body

    return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromBoard} */
  async getTags(...rest: GetParameters1<MiroApi['getTagsFromBoard']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromBoard(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getTextItem} */
  async getTextItem(...rest: GetParameters1<MiroApi['getTextItem']>): Promise<TextItem> {
    const result = (await this._api.getTextItem(...this._headParams, ...rest)).body

    return new TextItem(this._api, [this._headParams[0], toString(result.id)], result)
  }

  /** {@inheritDoc api!MiroApi.getItems} */
  async getItems(...rest: GetParameters1<MiroApi['getItems']>): Promise<Item[]> {
    const result = (await this._api.getItems(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.getItemsWithinFrame} */
  async getItemsWithinFrame(...rest: GetParameters1<MiroApi['getItemsWithinFrame']>): Promise<Item[]> {
    const result = (await this._api.getItemsWithinFrame(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.copyBoard} */
  async copy(...rest: GetParameters1<MiroApi['copyBoard']>): Promise<void> {
    await this._api.copyBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.shareBoard} */
  async share(...rest: GetParameters1<MiroApi['shareBoard']>): Promise<void> {
    await this._api.shareBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.updateBoard} */
  async update(...rest: GetParameters1<MiroApi['updateBoard']>): Promise<void> {
    await this._api.updateBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteBoard} */
  async delete(...rest: GetParameters1<MiroApi['deleteBoard']>): Promise<void> {
    await this._api.deleteBoard(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.removeBoardMember} */
  async removeMember(...rest: GetParameters1<MiroApi['removeBoardMember']>): Promise<void> {
    await this._api.removeBoardMember(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters1<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }
}

export class BoardMember extends BaseBoardMember {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: BoardMember['_headParams'], rest: KeepBase<BaseBoardMember>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateBoardMember} */
  async update(...rest: GetParameters2<MiroApi['updateBoardMember']>): Promise<void> {
    await this._api.updateBoardMember(...this._headParams, ...rest)
  }
}

export class Item extends BaseItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: Item['_headParams'], rest: KeepBase<BaseItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateItemPositionOrParent} */
  async update(...rest: GetParameters2<MiroApi['updateItemPositionOrParent']>): Promise<void> {
    await this._api.updateItemPositionOrParent(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteItem']>): Promise<void> {
    await this._api.deleteItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class AppCardItem extends BaseAppCardItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: AppCardItem['_headParams'], rest: KeepBase<BaseAppCardItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateAppCardItem} */
  async updateAppCardItem(...rest: GetParameters2<MiroApi['updateAppCardItem']>): Promise<void> {
    await this._api.updateAppCardItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteAppCardItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteAppCardItem']>): Promise<void> {
    await this._api.deleteAppCardItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class CardItem extends BaseCardItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: CardItem['_headParams'], rest: KeepBase<BaseCardItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateCardItem} */
  async update(...rest: GetParameters2<MiroApi['updateCardItem']>): Promise<void> {
    await this._api.updateCardItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteCardItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteCardItem']>): Promise<void> {
    await this._api.deleteCardItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class DocumentItem extends BaseDocumentItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: DocumentItem['_headParams'], rest: KeepBase<BaseDocumentItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateDocumentItemUsingUrl} */
  async update(...rest: GetParameters2<MiroApi['updateDocumentItemUsingUrl']>): Promise<void> {
    await this._api.updateDocumentItemUsingUrl(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteDocumentItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteDocumentItem']>): Promise<void> {
    await this._api.deleteDocumentItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class EmbedItem extends BaseEmbedItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: EmbedItem['_headParams'], rest: KeepBase<BaseEmbedItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateEmbedItem} */
  async update(...rest: GetParameters2<MiroApi['updateEmbedItem']>): Promise<void> {
    await this._api.updateEmbedItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteEmbedItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteEmbedItem']>): Promise<void> {
    await this._api.deleteEmbedItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class FrameItem extends BaseFrameItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: FrameItem['_headParams'], rest: KeepBase<BaseFrameItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateFrameItem} */
  async update(...rest: GetParameters2<MiroApi['updateFrameItem']>): Promise<void> {
    await this._api.updateFrameItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteFrameItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteFrameItem']>): Promise<void> {
    await this._api.deleteFrameItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class ImageItem extends BaseImageItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: ImageItem['_headParams'], rest: KeepBase<BaseImageItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateImageItemUsingUrl} */
  async update(...rest: GetParameters2<MiroApi['updateImageItemUsingUrl']>): Promise<void> {
    await this._api.updateImageItemUsingUrl(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteImageItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteImageItem']>): Promise<void> {
    await this._api.deleteImageItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class ShapeItem extends BaseShapeItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: ShapeItem['_headParams'], rest: KeepBase<BaseShapeItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateShapeItem} */
  async update(...rest: GetParameters2<MiroApi['updateShapeItem']>): Promise<void> {
    await this._api.updateShapeItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteShapeItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteShapeItem']>): Promise<void> {
    await this._api.deleteShapeItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class StickyNoteItem extends BaseStickyNoteItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: StickyNoteItem['_headParams'], rest: KeepBase<BaseStickyNoteItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateStickyNoteItem} */
  async update(...rest: GetParameters2<MiroApi['updateStickyNoteItem']>): Promise<void> {
    await this._api.updateStickyNoteItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteStickyNoteItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteStickyNoteItem']>): Promise<void> {
    await this._api.deleteStickyNoteItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class TextItem extends BaseTextItem {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: TextItem['_headParams'], rest: KeepBase<BaseTextItem>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateTextItem} */
  async update(...rest: GetParameters2<MiroApi['updateTextItem']>): Promise<void> {
    await this._api.updateTextItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteTextItem} */
  async delete(...rest: GetParameters2<MiroApi['deleteTextItem']>): Promise<void> {
    await this._api.deleteTextItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getTagsFromItem} */
  async getTags(...rest: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(...this._headParams, ...rest)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }

  /** {@inheritDoc api!MiroApi.removeTagFromItem} */
  async removeTag(...rest: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.attachTagToItem} */
  async attachTag(...rest: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest)
  }
}

export class Connector extends BaseConnector {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: Connector['_headParams'], rest: KeepBase<BaseConnector>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateConnector} */
  async update(...rest: GetParameters2<MiroApi['updateConnector']>): Promise<void> {
    await this._api.updateConnector(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteConnector} */
  async delete(...rest: GetParameters2<MiroApi['deleteConnector']>): Promise<void> {
    await this._api.deleteConnector(...this._headParams, ...rest)
  }
}

export class Tag extends BaseTag {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: [string, string]

  constructor(api: MiroApi, headParams: Tag['_headParams'], rest: KeepBase<BaseTag>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroApi.updateTag} */
  async update(...rest: GetParameters2<MiroApi['updateTag']>): Promise<void> {
    await this._api.updateTag(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.deleteTag} */
  async delete(...rest: GetParameters2<MiroApi['deleteTag']>): Promise<void> {
    await this._api.deleteTag(...this._headParams, ...rest)
  }

  /** {@inheritDoc api!MiroApi.getItemsByTag} */
  async getItemsByTag(...rest: GetParameters2<MiroApi['getItemsByTag']>): Promise<Item[]> {
    const result = (await this._api.getItemsByTag(...this._headParams, ...rest)).body

    return result.data
      ? result.data.map((result) => {
          return new Item(this._api, [this._headParams[0], toString(result.id)], result)
        })
      : []
  }
}
