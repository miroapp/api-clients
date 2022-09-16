import {MiroApi} from '../api'
import {GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase} from './helpers'

import {Api as BaseApi} from './../highlevel/Api'
import {Organization as BaseOrganization} from './Organization'
import {OrganizationMember as BaseOrganizationMember} from './../model/organizationMember'
import {Team as BaseTeam} from './Team'
import {BoardDataClassificationLabel as BaseBoardDataClassification} from './../model/boardDataClassificationLabel'
import {DataClassificationOrganizationSettings as BaseDataClassification} from './../model/dataClassificationOrganizationSettings'
import {TeamMember as BaseTeamMember} from './../model/teamMember'
import {TeamSettings as BaseTeamSettings} from './../model/teamSettings'
import {Board as BaseBoard} from './Board'
import {BoardMember as BaseBoardMember} from './../model/boardMember'
import {GenericItem as BaseItem} from './Item'
import {AppCardItem as BaseAppCardItem} from './AppCardItem'
import {CardItem as BaseCardItem} from './CardItem'
import {DocumentItem as BaseDocumentItem} from './DocumentItem'
import {EmbedItem as BaseEmbedItem} from './EmbedItem'
import {FrameItem as BaseFrameItem} from './FrameItem'
import {ImageItem as BaseImageItem} from './ImageItem'
import {ShapeItem as BaseShapeItem} from './ShapeItem'
import {StickyNoteItem as BaseStickyNoteItem} from './StickyNoteItem'
import {TextItem as BaseTextItem} from './TextItem'
import {ConnectorWithLinks as BaseConnector} from './../model/connectorWithLinks'
import {Tag as BaseTag} from './Tag'

export class Api extends BaseApi {
  /** @hidden */
  _api: MiroApi

  /** @hidden */
  constructor(api: MiroApi, props: KeepBase<BaseApi>) {
    super()
    this._api = api

    Object.assign(this, props)
  }

  /** {@inheritDoc api/apis!MiroApi.createBoard} */
  async createBoard(...parameters: GetParameters0<MiroApi['createBoard']>): Promise<Board> {
    const result = (await this._api.createBoard(...parameters)).body

    return new Board(this._api, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getSpecificBoard} */
  async getBoard(...parameters: GetParameters0<MiroApi['getSpecificBoard']>): Promise<Board> {
    const result = (await this._api.getSpecificBoard(...parameters)).body

    return new Board(this._api, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseGetOrganization} */
  async getOrganization(...parameters: GetParameters0<MiroApi['enterpriseGetOrganization']>): Promise<Organization> {
    const result = (await this._api.enterpriseGetOrganization(...parameters)).body

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

  /** {@inheritDoc api/apis!MiroApi.enterpriseCreateTeam} */
  async createTeam(...parameters: GetParameters1<MiroApi['enterpriseCreateTeam']>): Promise<Team> {
    const result = (await this._api.enterpriseCreateTeam(this.id.toString(), ...parameters)).body

    return new Team(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseDataclassificationOrganizationSettingsGet} */
  async getDataClassification(
    ...parameters: GetParameters1<MiroApi['enterpriseDataclassificationOrganizationSettingsGet']>
  ): Promise<DataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationOrganizationSettingsGet(this.id.toString(), ...parameters)
    ).body

    return new DataClassification(this._api, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseGetDefaultTeamSettings} */
  async getDefaultTeamSettings(
    ...parameters: GetParameters1<MiroApi['enterpriseGetDefaultTeamSettings']>
  ): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetDefaultTeamSettings(this.id.toString(), ...parameters)).body

    return new TeamSettings(this._api, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseGetOrganizationMember} */
  async getOrganizationMember(
    ...parameters: GetParameters1<MiroApi['enterpriseGetOrganizationMember']>
  ): Promise<OrganizationMember> {
    const result = (await this._api.enterpriseGetOrganizationMember(this.id.toString(), ...parameters)).body

    return new OrganizationMember(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseGetTeam} */
  async getTeam(...parameters: GetParameters1<MiroApi['enterpriseGetTeam']>): Promise<Team> {
    const result = (await this._api.enterpriseGetTeam(this.id.toString(), ...parameters)).body

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

  /** {@inheritDoc api/apis!MiroApi.enterpriseDeleteTeam} */
  async deleteTeam(...parameters: GetParameters2<MiroApi['enterpriseDeleteTeam']>): Promise<void> {
    await this._api.enterpriseDeleteTeam(this.orgId.toString(), this.teamId.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseDeleteTeamMember} */
  async deleteTeamMember(...parameters: GetParameters2<MiroApi['enterpriseDeleteTeamMember']>): Promise<void> {
    await this._api.enterpriseDeleteTeamMember(this.orgId.toString(), this.teamId.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseDataclassificationBoardGet} */
  async getBoardDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationBoardGet']>
  ): Promise<BoardDataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationBoardGet(this.orgId.toString(), this.teamId.toString(), ...parameters)
    ).body

    return new BoardDataClassification(this._api, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseDataclassificationBoardSet} */
  async setBoardDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationBoardSet']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationBoardSet(this.orgId.toString(), this.teamId.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseDataclassificationTeamBoardsBulk} */
  async setBoardDataClassificationBulk(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationTeamBoardsBulk']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamBoardsBulk(
      this.orgId.toString(),
      this.teamId.toString(),
      ...parameters,
    )
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseDataclassificationTeamSettingsGet} */
  async getDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationTeamSettingsGet']>
  ): Promise<DataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationTeamSettingsGet(
        this.orgId.toString(),
        this.teamId.toString(),
        ...parameters,
      )
    ).body

    return new DataClassification(this._api, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseDataclassificationTeamSettingsSet} */
  async setDataClassification(
    ...parameters: GetParameters2<MiroApi['enterpriseDataclassificationTeamSettingsSet']>
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamSettingsSet(
      this.orgId.toString(),
      this.teamId.toString(),
      ...parameters,
    )
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseInviteTeamMember} */
  async inviteTeamMember(...parameters: GetParameters2<MiroApi['enterpriseInviteTeamMember']>): Promise<void> {
    await this._api.enterpriseInviteTeamMember(this.orgId.toString(), this.teamId.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseGetTeamMember} */
  async getTeamMember(...parameters: GetParameters2<MiroApi['enterpriseGetTeamMember']>): Promise<TeamMember> {
    const result = (
      await this._api.enterpriseGetTeamMember(this.orgId.toString(), this.teamId.toString(), ...parameters)
    ).body

    return new TeamMember(this._api, this.orgId, this.teamId, result.memberId, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseUpdateTeam} */
  async updateTeam(...parameters: GetParameters2<MiroApi['enterpriseUpdateTeam']>): Promise<void> {
    await this._api.enterpriseUpdateTeam(this.orgId.toString(), this.teamId.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseGetTeamSettings} */
  async getTeamSettings(...parameters: GetParameters1<MiroApi['enterpriseGetTeamSettings']>): Promise<TeamSettings> {
    const result = (await this._api.enterpriseGetTeamSettings(this.teamId.toString(), ...parameters)).body

    return new TeamSettings(this._api, result)
  }

  /** {@inheritDoc api/apis!MiroApi.enterpriseUpdateTeamSettings} */
  async updateTeamSettings(...parameters: GetParameters1<MiroApi['enterpriseUpdateTeamSettings']>): Promise<void> {
    await this._api.enterpriseUpdateTeamSettings(this.teamId.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.enterpriseUpdateTeamMember} */
  async update(...parameters: GetParameters3<MiroApi['enterpriseUpdateTeamMember']>): Promise<void> {
    await this._api.enterpriseUpdateTeamMember(
      this.orgId.toString(),
      this.teamId.toString(),
      this.memberId.toString(),
      ...parameters,
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

  /** {@inheritDoc api/apis!MiroApi.createAppCardItem} */
  async createAppCardItem(...parameters: GetParameters1<MiroApi['createAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.createAppCardItem(this.id.toString(), ...parameters)).body

    return new AppCardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createCardItem} */
  async createCardItem(...parameters: GetParameters1<MiroApi['createCardItem']>): Promise<CardItem> {
    const result = (await this._api.createCardItem(this.id.toString(), ...parameters)).body

    return new CardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createConnector} */
  async createConnector(...parameters: GetParameters1<MiroApi['createConnector']>): Promise<Connector> {
    const result = (await this._api.createConnector(this.id.toString(), ...parameters)).body

    return new Connector(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createDocumentItemUsingUrl} */
  async createDocumentItemUsingUrl(
    ...parameters: GetParameters1<MiroApi['createDocumentItemUsingUrl']>
  ): Promise<DocumentItem> {
    const result = (await this._api.createDocumentItemUsingUrl(this.id.toString(), ...parameters)).body

    return new DocumentItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createEmbedItem} */
  async createEmbedItem(...parameters: GetParameters1<MiroApi['createEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.createEmbedItem(this.id.toString(), ...parameters)).body

    return new EmbedItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createFrameItem} */
  async createFrameItem(...parameters: GetParameters1<MiroApi['createFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.createFrameItem(this.id.toString(), ...parameters)).body

    return new FrameItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createImageItemUsingUrl} */
  async createImageItemUsingUrl(...parameters: GetParameters1<MiroApi['createImageItemUsingUrl']>): Promise<ImageItem> {
    const result = (await this._api.createImageItemUsingUrl(this.id.toString(), ...parameters)).body

    return new ImageItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createShapeItem} */
  async createShapeItem(...parameters: GetParameters1<MiroApi['createShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.createShapeItem(this.id.toString(), ...parameters)).body

    return new ShapeItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createStickyNoteItem} */
  async createStickyNoteItem(...parameters: GetParameters1<MiroApi['createStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.createStickyNoteItem(this.id.toString(), ...parameters)).body

    return new StickyNoteItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createTag} */
  async createTag(...parameters: GetParameters1<MiroApi['createTag']>): Promise<Tag> {
    const result = (await this._api.createTag(this.id.toString(), ...parameters)).body

    return new Tag(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.createTextItem} */
  async createTextItem(...parameters: GetParameters1<MiroApi['createTextItem']>): Promise<TextItem> {
    const result = (await this._api.createTextItem(this.id.toString(), ...parameters)).body

    return new TextItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getAppCardItem} */
  async getAppCardItem(...parameters: GetParameters1<MiroApi['getAppCardItem']>): Promise<AppCardItem> {
    const result = (await this._api.getAppCardItem(this.id.toString(), ...parameters)).body

    return new AppCardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getCardItem} */
  async getCardItem(...parameters: GetParameters1<MiroApi['getCardItem']>): Promise<CardItem> {
    const result = (await this._api.getCardItem(this.id.toString(), ...parameters)).body

    return new CardItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getConnector} */
  async getConnector(...parameters: GetParameters1<MiroApi['getConnector']>): Promise<Connector> {
    const result = (await this._api.getConnector(this.id.toString(), ...parameters)).body

    return new Connector(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getDocumentItem} */
  async getDocumentItem(...parameters: GetParameters1<MiroApi['getDocumentItem']>): Promise<DocumentItem> {
    const result = (await this._api.getDocumentItem(this.id.toString(), ...parameters)).body

    return new DocumentItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getEmbedItem} */
  async getEmbedItem(...parameters: GetParameters1<MiroApi['getEmbedItem']>): Promise<EmbedItem> {
    const result = (await this._api.getEmbedItem(this.id.toString(), ...parameters)).body

    return new EmbedItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getFrameItem} */
  async getFrameItem(...parameters: GetParameters1<MiroApi['getFrameItem']>): Promise<FrameItem> {
    const result = (await this._api.getFrameItem(this.id.toString(), ...parameters)).body

    return new FrameItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getImageItem} */
  async getImageItem(...parameters: GetParameters1<MiroApi['getImageItem']>): Promise<ImageItem> {
    const result = (await this._api.getImageItem(this.id.toString(), ...parameters)).body

    return new ImageItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getShapeItem} */
  async getShapeItem(...parameters: GetParameters1<MiroApi['getShapeItem']>): Promise<ShapeItem> {
    const result = (await this._api.getShapeItem(this.id.toString(), ...parameters)).body

    return new ShapeItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getSpecificBoardMember} */
  async getMember(...parameters: GetParameters1<MiroApi['getSpecificBoardMember']>): Promise<BoardMember> {
    const result = (await this._api.getSpecificBoardMember(this.id.toString(), ...parameters)).body

    return new BoardMember(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getStickyNoteItem} */
  async getStickyNoteItem(...parameters: GetParameters1<MiroApi['getStickyNoteItem']>): Promise<StickyNoteItem> {
    const result = (await this._api.getStickyNoteItem(this.id.toString(), ...parameters)).body

    return new StickyNoteItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getTag} */
  async getTag(...parameters: GetParameters1<MiroApi['getTag']>): Promise<Tag> {
    const result = (await this._api.getTag(this.id.toString(), ...parameters)).body

    return new Tag(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.getTextItem} */
  async getTextItem(...parameters: GetParameters1<MiroApi['getTextItem']>): Promise<TextItem> {
    const result = (await this._api.getTextItem(this.id.toString(), ...parameters)).body

    return new TextItem(this._api, this.id, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.copyBoard} */
  async copy(...parameters: GetParameters1<MiroApi['copyBoard']>): Promise<Board> {
    const result = (await this._api.copyBoard(this.id.toString(), ...parameters)).body

    return new Board(this._api, result.id, result)
  }

  /** {@inheritDoc api/apis!MiroApi.shareBoard} */
  async share(...parameters: GetParameters1<MiroApi['shareBoard']>): Promise<void> {
    await this._api.shareBoard(this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.updateBoard} */
  async update(...parameters: GetParameters1<MiroApi['updateBoard']>): Promise<void> {
    await this._api.updateBoard(this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteBoard} */
  async delete(...parameters: GetParameters1<MiroApi['deleteBoard']>): Promise<void> {
    await this._api.deleteBoard(this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.removeBoardMember} */
  async removeMember(...parameters: GetParameters1<MiroApi['removeBoardMember']>): Promise<void> {
    await this._api.removeBoardMember(this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters1<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateBoardMember} */
  async update(...parameters: GetParameters2<MiroApi['updateBoardMember']>): Promise<void> {
    await this._api.updateBoardMember(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateItemPositionOrParent} */
  async update(...parameters: GetParameters2<MiroApi['updateItemPositionOrParent']>): Promise<void> {
    await this._api.updateItemPositionOrParent(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteItem']>): Promise<void> {
    await this._api.deleteItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateAppCardItem} */
  async update(...parameters: GetParameters2<MiroApi['updateAppCardItem']>): Promise<void> {
    await this._api.updateAppCardItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteAppCardItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteAppCardItem']>): Promise<void> {
    await this._api.deleteAppCardItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.getTagsFromItem} */
  async getAllTags(...parameters: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(this.boardId.toString(), this.id.toString(), ...parameters)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api/apis!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.attachTagToItem} */
  async attachTag(...parameters: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateCardItem} */
  async update(...parameters: GetParameters2<MiroApi['updateCardItem']>): Promise<void> {
    await this._api.updateCardItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteCardItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteCardItem']>): Promise<void> {
    await this._api.deleteCardItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.getTagsFromItem} */
  async getAllTags(...parameters: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(this.boardId.toString(), this.id.toString(), ...parameters)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api/apis!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.attachTagToItem} */
  async attachTag(...parameters: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateDocumentItemUsingUrl} */
  async update(...parameters: GetParameters2<MiroApi['updateDocumentItemUsingUrl']>): Promise<void> {
    await this._api.updateDocumentItemUsingUrl(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteDocumentItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteDocumentItem']>): Promise<void> {
    await this._api.deleteDocumentItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateEmbedItem} */
  async update(...parameters: GetParameters2<MiroApi['updateEmbedItem']>): Promise<void> {
    await this._api.updateEmbedItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteEmbedItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteEmbedItem']>): Promise<void> {
    await this._api.deleteEmbedItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateFrameItem} */
  async update(...parameters: GetParameters2<MiroApi['updateFrameItem']>): Promise<void> {
    await this._api.updateFrameItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteFrameItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteFrameItem']>): Promise<void> {
    await this._api.deleteFrameItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateImageItemUsingUrl} */
  async update(...parameters: GetParameters2<MiroApi['updateImageItemUsingUrl']>): Promise<void> {
    await this._api.updateImageItemUsingUrl(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteImageItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteImageItem']>): Promise<void> {
    await this._api.deleteImageItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateShapeItem} */
  async update(...parameters: GetParameters2<MiroApi['updateShapeItem']>): Promise<void> {
    await this._api.updateShapeItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteShapeItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteShapeItem']>): Promise<void> {
    await this._api.deleteShapeItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateStickyNoteItem} */
  async update(...parameters: GetParameters2<MiroApi['updateStickyNoteItem']>): Promise<void> {
    await this._api.updateStickyNoteItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteStickyNoteItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteStickyNoteItem']>): Promise<void> {
    await this._api.deleteStickyNoteItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.getTagsFromItem} */
  async getAllTags(...parameters: GetParameters2<MiroApi['getTagsFromItem']>): Promise<Tag[]> {
    const result = (await this._api.getTagsFromItem(this.boardId.toString(), this.id.toString(), ...parameters)).body

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(this._api, this.boardId, result.id, result)
        })
      : []
  }

  /** {@inheritDoc api/apis!MiroApi.removeTagFromItem} */
  async removeTag(...parameters: GetParameters2<MiroApi['removeTagFromItem']>): Promise<void> {
    await this._api.removeTagFromItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.attachTagToItem} */
  async attachTag(...parameters: GetParameters2<MiroApi['attachTagToItem']>): Promise<void> {
    await this._api.attachTagToItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateTextItem} */
  async update(...parameters: GetParameters2<MiroApi['updateTextItem']>): Promise<void> {
    await this._api.updateTextItem(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteTextItem} */
  async delete(...parameters: GetParameters2<MiroApi['deleteTextItem']>): Promise<void> {
    await this._api.deleteTextItem(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateConnector} */
  async update(...parameters: GetParameters2<MiroApi['updateConnector']>): Promise<void> {
    await this._api.updateConnector(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteConnector} */
  async delete(...parameters: GetParameters2<MiroApi['deleteConnector']>): Promise<void> {
    await this._api.deleteConnector(this.boardId.toString(), this.id.toString(), ...parameters)
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

  /** {@inheritDoc api/apis!MiroApi.updateTag} */
  async update(...parameters: GetParameters2<MiroApi['updateTag']>): Promise<void> {
    await this._api.updateTag(this.boardId.toString(), this.id.toString(), ...parameters)
  }

  /** {@inheritDoc api/apis!MiroApi.deleteTag} */
  async delete(...parameters: GetParameters2<MiroApi['deleteTag']>): Promise<void> {
    await this._api.deleteTag(this.boardId.toString(), this.id.toString(), ...parameters)
  }
}
