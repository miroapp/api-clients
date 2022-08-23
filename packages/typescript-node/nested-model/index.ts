import { MiroEndpoints } from "../api";
import {
  GetParameters0,
  GetParameters1,
  GetParameters2,
  GetParameters3,
  KeepBase,
  toString,
} from "./helpers";

import { Organization as BaseOrganization } from "./../model/organization";
import { OrganizationMember as BaseOrganizationMember } from "./../model/organizationMember";
import { Team as BaseTeam } from "./../nested-model/Team";
import { BoardDataClassificationLabel as BaseBoardDataClassification } from "./../model/boardDataClassificationLabel";
import { DataClassificationOrganizationSettings as BaseDataClassification } from "./../model/dataClassificationOrganizationSettings";
import { TeamMember as BaseTeamMember } from "./../model/teamMember";
import { TeamSettings as BaseTeamSettings } from "./../model/teamSettings";
import { Board as BaseBoard } from "./../model/board";
import { BoardMember as BaseBoardMember } from "./../model/boardMember";
import { GenericItem as BaseItem } from "./../model/genericItem";
import { AppCardItem as BaseAppCardItem } from "./../model/appCardItem";
import { CardItem as BaseCardItem } from "./../model/cardItem";
import { DocumentItem as BaseDocumentItem } from "./../model/documentItem";
import { EmbedItem as BaseEmbedItem } from "./../model/embedItem";
import { FrameItem as BaseFrameItem } from "./../model/frameItem";
import { ImageItem as BaseImageItem } from "./../model/imageItem";
import { ShapeItem as BaseShapeItem } from "./../model/shapeItem";
import { StickyNoteItem as BaseStickyNoteItem } from "./../model/stickyNoteItem";
import { TextItem as BaseTextItem } from "./../model/textItem";
import { ConnectorWithLinks as BaseConnector } from "./../model/connectorWithLinks";
import { Tag as BaseTag } from "./../model/tag";

export class Api extends Object {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [];

  constructor(
    api: MiroEndpoints,
    headParams: Api["_headParams"],
    rest: object
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.createBoard} */
  async createBoard(
    ...rest: GetParameters0<MiroEndpoints["createBoard"]>
  ): Promise<Board> {
    const result = (await this._api.createBoard(...this._headParams, ...rest))
      .body;

    return new Board(this._api, [toString(result.id)], result);
  }

  /** {@inheritDoc api!MiroEndpoints.getBoards} */
  async getBoards(
    ...rest: GetParameters0<MiroEndpoints["getBoards"]>
  ): Promise<Board[]> {
    const result = (await this._api.getBoards(...this._headParams, ...rest))
      .body;

    return result.data
      ? result.data.map((result) => {
          return new Board(this._api, [toString(result.id)], result);
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetOrganization} */
  async getOrganization(
    ...rest: GetParameters0<MiroEndpoints["enterpriseGetOrganization"]>
  ): Promise<Organization> {
    const result = (
      await this._api.enterpriseGetOrganization(...this._headParams, ...rest)
    ).body;

    return new Organization(this._api, [toString(result.id)], result);
  }
}

export class Organization extends BaseOrganization {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string];

  constructor(
    api: MiroEndpoints,
    headParams: Organization["_headParams"],
    rest: KeepBase<BaseOrganization>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseCreateTeam} */
  async createTeam(
    ...rest: GetParameters1<MiroEndpoints["enterpriseCreateTeam"]>
  ): Promise<Team> {
    const result = (
      await this._api.enterpriseCreateTeam(...this._headParams, ...rest)
    ).body;

    return new Team(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationOrganizationSettingsGet} */
  async getDataClassification(
    ...rest: GetParameters1<
      MiroEndpoints["enterpriseDataclassificationOrganizationSettingsGet"]
    >
  ): Promise<DataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationOrganizationSettingsGet(
        ...this._headParams,
        ...rest
      )
    ).body;

    return new DataClassification(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetDefaultTeamSettings} */
  async getDefaultTeamSettings(
    ...rest: GetParameters1<MiroEndpoints["enterpriseGetDefaultTeamSettings"]>
  ): Promise<TeamSettings> {
    const result = (
      await this._api.enterpriseGetDefaultTeamSettings(
        ...this._headParams,
        ...rest
      )
    ).body;

    return new TeamSettings(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetOrganizationMember} */
  async getOrganizationMember(
    ...rest: GetParameters1<MiroEndpoints["enterpriseGetOrganizationMember"]>
  ): Promise<OrganizationMember> {
    const result = (
      await this._api.enterpriseGetOrganizationMember(
        ...this._headParams,
        ...rest
      )
    ).body;

    return new OrganizationMember(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetOrganizationMembers} */
  async getOrganizationMembers(
    ...rest: GetParameters1<MiroEndpoints["enterpriseGetOrganizationMembers"]>
  ): Promise<OrganizationMember[]> {
    const result = (
      await this._api.enterpriseGetOrganizationMembers(
        ...this._headParams,
        ...rest
      )
    ).body;

    return result.data
      ? result.data.map((result) => {
          return new OrganizationMember(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeam} */
  async getTeam(
    ...rest: GetParameters1<MiroEndpoints["enterpriseGetTeam"]>
  ): Promise<Team> {
    const result = (
      await this._api.enterpriseGetTeam(...this._headParams, ...rest)
    ).body;

    return new Team(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeams} */
  async getTeams(
    ...rest: GetParameters1<MiroEndpoints["enterpriseGetTeams"]>
  ): Promise<Team[]> {
    const result = (
      await this._api.enterpriseGetTeams(...this._headParams, ...rest)
    ).body;

    return result
      ? result.map((result) => {
          return new Team(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }
}

export class OrganizationMember extends BaseOrganizationMember {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: OrganizationMember["_headParams"],
    rest: KeepBase<BaseOrganizationMember>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }
}

export class Team extends BaseTeam {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: Team["_headParams"],
    rest: KeepBase<BaseTeam>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDeleteTeam} */
  async deleteTeam(
    ...rest: GetParameters2<MiroEndpoints["enterpriseDeleteTeam"]>
  ): Promise<void> {
    await this._api.enterpriseDeleteTeam(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDeleteTeamMember} */
  async deleteTeamMember(
    ...rest: GetParameters2<MiroEndpoints["enterpriseDeleteTeamMember"]>
  ): Promise<void> {
    await this._api.enterpriseDeleteTeamMember(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationBoardGet} */
  async getBoardDataClassification(
    ...rest: GetParameters2<
      MiroEndpoints["enterpriseDataclassificationBoardGet"]
    >
  ): Promise<BoardDataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationBoardGet(
        ...this._headParams,
        ...rest
      )
    ).body;

    return new BoardDataClassification(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationBoardSet} */
  async setBoardDataClassification(
    ...rest: GetParameters2<
      MiroEndpoints["enterpriseDataclassificationBoardSet"]
    >
  ): Promise<void> {
    await this._api.enterpriseDataclassificationBoardSet(
      ...this._headParams,
      ...rest
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationTeamBoardsBulk} */
  async setBoardDataClassificationBulk(
    ...rest: GetParameters2<
      MiroEndpoints["enterpriseDataclassificationTeamBoardsBulk"]
    >
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamBoardsBulk(
      ...this._headParams,
      ...rest
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationTeamSettingsGet} */
  async getDataClassification(
    ...rest: GetParameters2<
      MiroEndpoints["enterpriseDataclassificationTeamSettingsGet"]
    >
  ): Promise<DataClassification> {
    const result = (
      await this._api.enterpriseDataclassificationTeamSettingsGet(
        ...this._headParams,
        ...rest
      )
    ).body;

    return new DataClassification(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationTeamSettingsSet} */
  async setDataClassification(
    ...rest: GetParameters2<
      MiroEndpoints["enterpriseDataclassificationTeamSettingsSet"]
    >
  ): Promise<void> {
    await this._api.enterpriseDataclassificationTeamSettingsSet(
      ...this._headParams,
      ...rest
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseInviteTeamMember} */
  async inviteTeamMember(
    ...rest: GetParameters2<MiroEndpoints["enterpriseInviteTeamMember"]>
  ): Promise<void> {
    await this._api.enterpriseInviteTeamMember(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeamMember} */
  async getTeamMember(
    ...rest: GetParameters2<MiroEndpoints["enterpriseGetTeamMember"]>
  ): Promise<TeamMember> {
    const result = (
      await this._api.enterpriseGetTeamMember(...this._headParams, ...rest)
    ).body;

    return new TeamMember(
      this._api,
      [this._headParams[0], this._headParams[1], toString(result.memberId)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeamMembers} */
  async getTeamMembers(
    ...rest: GetParameters2<MiroEndpoints["enterpriseGetTeamMembers"]>
  ): Promise<TeamMember[]> {
    const result = (
      await this._api.enterpriseGetTeamMembers(...this._headParams, ...rest)
    ).body;

    return result
      ? result.map((result) => {
          return new TeamMember(
            this._api,
            [
              this._headParams[0],
              this._headParams[1],
              toString(result.memberId),
            ],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseUpdateTeam} */
  async updateTeam(
    ...rest: GetParameters2<MiroEndpoints["enterpriseUpdateTeam"]>
  ): Promise<void> {
    await this._api.enterpriseUpdateTeam(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeamSettings} */
  async getTeamSettings(
    ...rest: GetParameters1<MiroEndpoints["enterpriseGetTeamSettings"]>
  ): Promise<TeamSettings> {
    const result = (
      await this._api.enterpriseGetTeamSettings(this._headParams[1], ...rest)
    ).body;

    return new TeamSettings(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseUpdateTeamSettings} */
  async updateTeamSettings(
    ...rest: GetParameters1<MiroEndpoints["enterpriseUpdateTeamSettings"]>
  ): Promise<void> {
    await this._api.enterpriseUpdateTeamSettings(this._headParams[1], ...rest);
  }
}

export class BoardDataClassification extends BaseBoardDataClassification {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [];

  constructor(
    api: MiroEndpoints,
    headParams: BoardDataClassification["_headParams"],
    rest: KeepBase<BaseBoardDataClassification>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }
}

export class DataClassification extends BaseDataClassification {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [];

  constructor(
    api: MiroEndpoints,
    headParams: DataClassification["_headParams"],
    rest: KeepBase<BaseDataClassification>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }
}

export class TeamMember extends BaseTeamMember {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string, string];

  constructor(
    api: MiroEndpoints,
    headParams: TeamMember["_headParams"],
    rest: KeepBase<BaseTeamMember>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseUpdateTeamMember} */
  async update(
    ...rest: GetParameters3<MiroEndpoints["enterpriseUpdateTeamMember"]>
  ): Promise<void> {
    await this._api.enterpriseUpdateTeamMember(...this._headParams, ...rest);
  }
}

export class TeamSettings extends BaseTeamSettings {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [];

  constructor(
    api: MiroEndpoints,
    headParams: TeamSettings["_headParams"],
    rest: KeepBase<BaseTeamSettings>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }
}

export class Board extends BaseBoard {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string];

  constructor(
    api: MiroEndpoints,
    headParams: Board["_headParams"],
    rest: KeepBase<BaseBoard>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.createAppCardItem} */
  async createAppCardItem(
    ...rest: GetParameters1<MiroEndpoints["createAppCardItem"]>
  ): Promise<AppCardItem> {
    const result = (
      await this._api.createAppCardItem(...this._headParams, ...rest)
    ).body;

    return new AppCardItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createCardItem} */
  async createCardItem(
    ...rest: GetParameters1<MiroEndpoints["createCardItem"]>
  ): Promise<CardItem> {
    const result = (
      await this._api.createCardItem(...this._headParams, ...rest)
    ).body;

    return new CardItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createConnector} */
  async createConnector(
    ...rest: GetParameters1<MiroEndpoints["createConnector"]>
  ): Promise<Connector> {
    const result = (
      await this._api.createConnector(...this._headParams, ...rest)
    ).body;

    return new Connector(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createDocumentItemUsingUrl} */
  async createDocumentItemUsingUrl(
    ...rest: GetParameters1<MiroEndpoints["createDocumentItemUsingUrl"]>
  ): Promise<DocumentItem> {
    const result = (
      await this._api.createDocumentItemUsingUrl(...this._headParams, ...rest)
    ).body;

    return new DocumentItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createEmbedItem} */
  async createEmbedItem(
    ...rest: GetParameters1<MiroEndpoints["createEmbedItem"]>
  ): Promise<EmbedItem> {
    const result = (
      await this._api.createEmbedItem(...this._headParams, ...rest)
    ).body;

    return new EmbedItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createFrameItem} */
  async createFrameItem(
    ...rest: GetParameters1<MiroEndpoints["createFrameItem"]>
  ): Promise<FrameItem> {
    const result = (
      await this._api.createFrameItem(...this._headParams, ...rest)
    ).body;

    return new FrameItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createImageItemUsingUrl} */
  async createImageItemUsingUrl(
    ...rest: GetParameters1<MiroEndpoints["createImageItemUsingUrl"]>
  ): Promise<ImageItem> {
    const result = (
      await this._api.createImageItemUsingUrl(...this._headParams, ...rest)
    ).body;

    return new ImageItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createShapeItem} */
  async createShapeItem(
    ...rest: GetParameters1<MiroEndpoints["createShapeItem"]>
  ): Promise<ShapeItem> {
    const result = (
      await this._api.createShapeItem(...this._headParams, ...rest)
    ).body;

    return new ShapeItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createStickyNoteItem} */
  async createStickyNoteItem(
    ...rest: GetParameters1<MiroEndpoints["createStickyNoteItem"]>
  ): Promise<StickyNoteItem> {
    const result = (
      await this._api.createStickyNoteItem(...this._headParams, ...rest)
    ).body;

    return new StickyNoteItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createTag} */
  async createTag(
    ...rest: GetParameters1<MiroEndpoints["createTag"]>
  ): Promise<Tag> {
    const result = (await this._api.createTag(...this._headParams, ...rest))
      .body;

    return new Tag(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createTextItem} */
  async createTextItem(
    ...rest: GetParameters1<MiroEndpoints["createTextItem"]>
  ): Promise<TextItem> {
    const result = (
      await this._api.createTextItem(...this._headParams, ...rest)
    ).body;

    return new TextItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getBoardMembers} */
  async getMembers(
    ...rest: GetParameters1<MiroEndpoints["getBoardMembers"]>
  ): Promise<BoardMember[]> {
    const result = (
      await this._api.getBoardMembers(...this._headParams, ...rest)
    ).body;

    return result.data
      ? result.data.map((result) => {
          return new BoardMember(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getAppCardItem} */
  async getAppCardItem(
    ...rest: GetParameters1<MiroEndpoints["getAppCardItem"]>
  ): Promise<AppCardItem> {
    const result = (
      await this._api.getAppCardItem(...this._headParams, ...rest)
    ).body;

    return new AppCardItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getCardItem} */
  async getCardItem(
    ...rest: GetParameters1<MiroEndpoints["getCardItem"]>
  ): Promise<CardItem> {
    const result = (await this._api.getCardItem(...this._headParams, ...rest))
      .body;

    return new CardItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getConnector} */
  async getConnector(
    ...rest: GetParameters1<MiroEndpoints["getConnector"]>
  ): Promise<Connector> {
    const result = (await this._api.getConnector(...this._headParams, ...rest))
      .body;

    return new Connector(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getConnectors} */
  async getConnectors(
    ...rest: GetParameters1<MiroEndpoints["getConnectors"]>
  ): Promise<Connector[]> {
    const result = (await this._api.getConnectors(...this._headParams, ...rest))
      .body;

    return result.data
      ? result.data.map((result) => {
          return new Connector(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getDocumentItem} */
  async getDocumentItem(
    ...rest: GetParameters1<MiroEndpoints["getDocumentItem"]>
  ): Promise<DocumentItem> {
    const result = (
      await this._api.getDocumentItem(...this._headParams, ...rest)
    ).body;

    return new DocumentItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getEmbedItem} */
  async getEmbedItem(
    ...rest: GetParameters1<MiroEndpoints["getEmbedItem"]>
  ): Promise<EmbedItem> {
    const result = (await this._api.getEmbedItem(...this._headParams, ...rest))
      .body;

    return new EmbedItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getFrameItem} */
  async getFrameItem(
    ...rest: GetParameters1<MiroEndpoints["getFrameItem"]>
  ): Promise<FrameItem> {
    const result = (await this._api.getFrameItem(...this._headParams, ...rest))
      .body;

    return new FrameItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getImageItem} */
  async getImageItem(
    ...rest: GetParameters1<MiroEndpoints["getImageItem"]>
  ): Promise<ImageItem> {
    const result = (await this._api.getImageItem(...this._headParams, ...rest))
      .body;

    return new ImageItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getShapeItem} */
  async getShapeItem(
    ...rest: GetParameters1<MiroEndpoints["getShapeItem"]>
  ): Promise<ShapeItem> {
    const result = (await this._api.getShapeItem(...this._headParams, ...rest))
      .body;

    return new ShapeItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getSpecificBoardMember} */
  async getMember(
    ...rest: GetParameters1<MiroEndpoints["getSpecificBoardMember"]>
  ): Promise<BoardMember> {
    const result = (
      await this._api.getSpecificBoardMember(...this._headParams, ...rest)
    ).body;

    return new BoardMember(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getSpecificItem} */
  async getItem(
    ...rest: GetParameters1<MiroEndpoints["getSpecificItem"]>
  ): Promise<Item> {
    const result = (
      await this._api.getSpecificItem(...this._headParams, ...rest)
    ).body;

    return new Item(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getStickyNoteItem} */
  async getStickyNoteItem(
    ...rest: GetParameters1<MiroEndpoints["getStickyNoteItem"]>
  ): Promise<StickyNoteItem> {
    const result = (
      await this._api.getStickyNoteItem(...this._headParams, ...rest)
    ).body;

    return new StickyNoteItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getTag} */
  async getTag(...rest: GetParameters1<MiroEndpoints["getTag"]>): Promise<Tag> {
    const result = (await this._api.getTag(...this._headParams, ...rest)).body;

    return new Tag(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromBoard} */
  async getTags(
    ...rest: GetParameters1<MiroEndpoints["getTagsFromBoard"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromBoard(...this._headParams, ...rest)
    ).body;

    return result.data
      ? result.data.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getTextItem} */
  async getTextItem(
    ...rest: GetParameters1<MiroEndpoints["getTextItem"]>
  ): Promise<TextItem> {
    const result = (await this._api.getTextItem(...this._headParams, ...rest))
      .body;

    return new TextItem(
      this._api,
      [this._headParams[0], toString(result.id)],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getItems} */
  async getItems(
    ...rest: GetParameters1<MiroEndpoints["getItems"]>
  ): Promise<Item[]> {
    const result = (await this._api.getItems(...this._headParams, ...rest))
      .body;

    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getItemsWithinFrame} */
  async getItemsWithinFrame(
    ...rest: GetParameters1<MiroEndpoints["getItemsWithinFrame"]>
  ): Promise<Item[]> {
    const result = (
      await this._api.getItemsWithinFrame(...this._headParams, ...rest)
    ).body;

    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.copyBoard} */
  async copy(
    ...rest: GetParameters1<MiroEndpoints["copyBoard"]>
  ): Promise<void> {
    await this._api.copyBoard(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.shareBoard} */
  async share(
    ...rest: GetParameters1<MiroEndpoints["shareBoard"]>
  ): Promise<void> {
    await this._api.shareBoard(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateBoard} */
  async update(
    ...rest: GetParameters1<MiroEndpoints["updateBoard"]>
  ): Promise<void> {
    await this._api.updateBoard(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteBoard} */
  async delete(
    ...rest: GetParameters1<MiroEndpoints["deleteBoard"]>
  ): Promise<void> {
    await this._api.deleteBoard(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.removeBoardMember} */
  async removeMember(
    ...rest: GetParameters1<MiroEndpoints["removeBoardMember"]>
  ): Promise<void> {
    await this._api.removeBoardMember(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters1<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }
}

export class BoardMember extends BaseBoardMember {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: BoardMember["_headParams"],
    rest: KeepBase<BaseBoardMember>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateBoardMember} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateBoardMember"]>
  ): Promise<void> {
    await this._api.updateBoardMember(...this._headParams, ...rest);
  }
}

export class Item extends BaseItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: Item["_headParams"],
    rest: KeepBase<BaseItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateItemPositionOrParent} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateItemPositionOrParent"]>
  ): Promise<void> {
    await this._api.updateItemPositionOrParent(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteItem"]>
  ): Promise<void> {
    await this._api.deleteItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class AppCardItem extends BaseAppCardItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: AppCardItem["_headParams"],
    rest: KeepBase<BaseAppCardItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateAppCardItem} */
  async updateAppCardItem(
    ...rest: GetParameters2<MiroEndpoints["updateAppCardItem"]>
  ): Promise<void> {
    await this._api.updateAppCardItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteAppCardItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteAppCardItem"]>
  ): Promise<void> {
    await this._api.deleteAppCardItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class CardItem extends BaseCardItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: CardItem["_headParams"],
    rest: KeepBase<BaseCardItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateCardItem} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateCardItem"]>
  ): Promise<void> {
    await this._api.updateCardItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteCardItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteCardItem"]>
  ): Promise<void> {
    await this._api.deleteCardItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class DocumentItem extends BaseDocumentItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: DocumentItem["_headParams"],
    rest: KeepBase<BaseDocumentItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateDocumentItemUsingUrl} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateDocumentItemUsingUrl"]>
  ): Promise<void> {
    await this._api.updateDocumentItemUsingUrl(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteDocumentItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteDocumentItem"]>
  ): Promise<void> {
    await this._api.deleteDocumentItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class EmbedItem extends BaseEmbedItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: EmbedItem["_headParams"],
    rest: KeepBase<BaseEmbedItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateEmbedItem} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateEmbedItem"]>
  ): Promise<void> {
    await this._api.updateEmbedItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteEmbedItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteEmbedItem"]>
  ): Promise<void> {
    await this._api.deleteEmbedItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class FrameItem extends BaseFrameItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: FrameItem["_headParams"],
    rest: KeepBase<BaseFrameItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateFrameItem} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateFrameItem"]>
  ): Promise<void> {
    await this._api.updateFrameItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteFrameItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteFrameItem"]>
  ): Promise<void> {
    await this._api.deleteFrameItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class ImageItem extends BaseImageItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: ImageItem["_headParams"],
    rest: KeepBase<BaseImageItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateImageItemUsingUrl} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateImageItemUsingUrl"]>
  ): Promise<void> {
    await this._api.updateImageItemUsingUrl(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteImageItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteImageItem"]>
  ): Promise<void> {
    await this._api.deleteImageItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class ShapeItem extends BaseShapeItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: ShapeItem["_headParams"],
    rest: KeepBase<BaseShapeItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateShapeItem} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateShapeItem"]>
  ): Promise<void> {
    await this._api.updateShapeItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteShapeItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteShapeItem"]>
  ): Promise<void> {
    await this._api.deleteShapeItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class StickyNoteItem extends BaseStickyNoteItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: StickyNoteItem["_headParams"],
    rest: KeepBase<BaseStickyNoteItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateStickyNoteItem} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateStickyNoteItem"]>
  ): Promise<void> {
    await this._api.updateStickyNoteItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteStickyNoteItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteStickyNoteItem"]>
  ): Promise<void> {
    await this._api.deleteStickyNoteItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class TextItem extends BaseTextItem {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: TextItem["_headParams"],
    rest: KeepBase<BaseTextItem>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateTextItem} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateTextItem"]>
  ): Promise<void> {
    await this._api.updateTextItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteTextItem} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteTextItem"]>
  ): Promise<void> {
    await this._api.deleteTextItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(
    ...rest: GetParameters2<MiroEndpoints["getTagsFromItem"]>
  ): Promise<Tag[]> {
    const result = (
      await this._api.getTagsFromItem(...this._headParams, ...rest)
    ).body;

    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(
    ...rest: GetParameters2<MiroEndpoints["removeTagFromItem"]>
  ): Promise<void> {
    await this._api.removeTagFromItem(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(
    ...rest: GetParameters2<MiroEndpoints["attachTagToItem"]>
  ): Promise<void> {
    await this._api.attachTagToItem(...this._headParams, ...rest);
  }
}

export class Connector extends BaseConnector {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: Connector["_headParams"],
    rest: KeepBase<BaseConnector>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateConnector} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateConnector"]>
  ): Promise<void> {
    await this._api.updateConnector(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteConnector} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteConnector"]>
  ): Promise<void> {
    await this._api.deleteConnector(...this._headParams, ...rest);
  }
}

export class Tag extends BaseTag {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [string, string];

  constructor(
    api: MiroEndpoints,
    headParams: Tag["_headParams"],
    rest: KeepBase<BaseTag>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateTag} */
  async update(
    ...rest: GetParameters2<MiroEndpoints["updateTag"]>
  ): Promise<void> {
    await this._api.updateTag(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.deleteTag} */
  async delete(
    ...rest: GetParameters2<MiroEndpoints["deleteTag"]>
  ): Promise<void> {
    await this._api.deleteTag(...this._headParams, ...rest);
  }

  /** {@inheritDoc api!MiroEndpoints.getItemsByTag} */
  async getItemsByTag(
    ...rest: GetParameters2<MiroEndpoints["getItemsByTag"]>
  ): Promise<Item[]> {
    const result = (await this._api.getItemsByTag(...this._headParams, ...rest))
      .body;

    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this._headParams[0], toString(result.id)],
            result
          );
        })
      : [];
  }
}
