import { MiroEndpoints } from "./api";

import { Organization as BaseOrganization } from "./model/organization";
import { OrganizationMember as BaseOrganizationMember } from "./model/organizationMember";
import { Team as BaseTeam } from "./model/team";
import { BoardDataClassificationLabel as BaseBoardDataClassification } from "./model/boardDataClassificationLabel";
import { DataClassificationOrganizationSettings as BaseDataClassification } from "./model/dataClassificationOrganizationSettings";
import { TeamMember as BaseTeamMember } from "./model/teamMember";
import { TeamSettings as BaseTeamSettings } from "./model/teamSettings";
import { Board as BaseBoard } from "./model/board";
import { BoardMember as BaseBoardMember } from "./model/boardMember";
import { GenericItem as BaseItem } from "./model/genericItem";
import { AppCardItem as BaseAppCardItem } from "./model/appCardItem";
import { CardItem as BaseCardItem } from "./model/cardItem";
import { DocumentItem as BaseDocumentItem } from "./model/documentItem";
import { EmbedItem as BaseEmbedItem } from "./model/embedItem";
import { FrameItem as BaseFrameItem } from "./model/frameItem";
import { ImageItem as BaseImageItem } from "./model/imageItem";
import { ShapeItem as BaseShapeItem } from "./model/shapeItem";
import { StickyNoteItem as BaseStickyNoteItem } from "./model/stickyNoteItem";
import { TextItem as BaseTextItem } from "./model/textItem";
import { ConnectorWithLinks as BaseConnector } from "./model/connectorWithLinks";
import { Tag as BaseTag } from "./model/tag";

type GetRest0<Method extends (p1: any, ...rest: any[]) => any> =
  Method extends (...rest: infer Rest) => any ? Rest : never;

type GetRest1<Method extends (p1: any, ...rest: any[]) => any> =
  Method extends (p1: any, ...rest: infer Rest) => any ? Rest : never;

type GetRest2<Method extends (p1: any, p2: any, ...rest: any[]) => any> =
  Method extends (p1: any, p2: any, ...rest: infer Rest) => any ? Rest : never;

type GetRest3<
  Method extends (p1: any, p2: any, p3: any, ...rest: any[]) => any
> = Method extends (p1: any, p2: any, p3: any, ...rest: infer Rest) => any
  ? Rest
  : never;

export class Api extends Object {
  private _api: MiroEndpoints;
  private pathParams: [];

  constructor(api: MiroEndpoints, pathParams: [], rest: object) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.createBoard} */
  async createBoard(...rest: GetRest0<MiroEndpoints["createBoard"]>) {
    const result = (await this._api.createBoard(...this.pathParams, ...rest))
      .body;

    return new Board(this._api, [`${result["id"]}`], result);
  }

  /** {@inheritDoc api!MiroEndpoints.getBoards} */
  async getBoards(...rest: GetRest0<MiroEndpoints["getBoards"]>) {
    const result = (await this._api.getBoards(...this.pathParams, ...rest))
      .body;
    return result.data
      ? result.data.map((result) => {
          return new Board(this._api, [`${result["id"]}`], result);
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetOrganization} */
  async getOrganization(
    ...rest: GetRest0<MiroEndpoints["enterpriseGetOrganization"]>
  ) {
    const result = (
      await this._api.enterpriseGetOrganization(...this.pathParams, ...rest)
    ).body;

    return new Organization(this._api, [`${result["id"]}`], result);
  }
}

export class Organization extends BaseOrganization {
  private _api: MiroEndpoints;
  private pathParams: [string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string],
    rest: BaseOrganization
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseCreateTeam} */
  async createTeam(...rest: GetRest1<MiroEndpoints["enterpriseCreateTeam"]>) {
    const result = (
      await this._api.enterpriseCreateTeam(...this.pathParams, ...rest)
    ).body;

    return new Team(this._api, [this.pathParams[0], `${result["id"]}`], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationOrganizationSettingsGet} */
  async getDataClassification(
    ...rest: GetRest1<
      MiroEndpoints["enterpriseDataclassificationOrganizationSettingsGet"]
    >
  ) {
    const result = (
      await this._api.enterpriseDataclassificationOrganizationSettingsGet(
        ...this.pathParams,
        ...rest
      )
    ).body;

    return new DataClassification(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetDefaultTeamSettings} */
  async getDefaultTeamSettings(
    ...rest: GetRest1<MiroEndpoints["enterpriseGetDefaultTeamSettings"]>
  ) {
    const result = (
      await this._api.enterpriseGetDefaultTeamSettings(
        ...this.pathParams,
        ...rest
      )
    ).body;

    return new TeamSettings(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetOrganizationMember} */
  async getOrganizationMember(
    ...rest: GetRest1<MiroEndpoints["enterpriseGetOrganizationMember"]>
  ) {
    const result = (
      await this._api.enterpriseGetOrganizationMember(
        ...this.pathParams,
        ...rest
      )
    ).body;

    return new OrganizationMember(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetOrganizationMembers} */
  async getOrganizationMembers(
    ...rest: GetRest1<MiroEndpoints["enterpriseGetOrganizationMembers"]>
  ) {
    const result = (
      await this._api.enterpriseGetOrganizationMembers(
        ...this.pathParams,
        ...rest
      )
    ).body;
    return result.data
      ? result.data.map((result) => {
          return new OrganizationMember(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeam} */
  async getTeam(...rest: GetRest1<MiroEndpoints["enterpriseGetTeam"]>) {
    const result = (
      await this._api.enterpriseGetTeam(...this.pathParams, ...rest)
    ).body;

    return new Team(this._api, [this.pathParams[0], `${result["id"]}`], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeams} */
  async getTeams(...rest: GetRest1<MiroEndpoints["enterpriseGetTeams"]>) {
    const result = (
      await this._api.enterpriseGetTeams(...this.pathParams, ...rest)
    ).body;
    return result
      ? result.map((result) => {
          return new Team(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }
}

export class OrganizationMember extends BaseOrganizationMember {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseOrganizationMember
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }
}

export class Team extends BaseTeam {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseTeam
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDeleteTeam} */
  async deleteTeam(...rest: GetRest2<MiroEndpoints["enterpriseDeleteTeam"]>) {
    (await this._api.enterpriseDeleteTeam(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDeleteTeamMember} */
  async deleteTeamMember(
    ...rest: GetRest2<MiroEndpoints["enterpriseDeleteTeamMember"]>
  ) {
    (await this._api.enterpriseDeleteTeamMember(...this.pathParams, ...rest))
      .body;
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationBoardGet} */
  async getBoardDataClassification(
    ...rest: GetRest2<MiroEndpoints["enterpriseDataclassificationBoardGet"]>
  ) {
    const result = (
      await this._api.enterpriseDataclassificationBoardGet(
        ...this.pathParams,
        ...rest
      )
    ).body;

    return new BoardDataClassification(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationBoardSet} */
  async setBoardDataClassification(
    ...rest: GetRest2<MiroEndpoints["enterpriseDataclassificationBoardSet"]>
  ) {
    (
      await this._api.enterpriseDataclassificationBoardSet(
        ...this.pathParams,
        ...rest
      )
    ).body;
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationTeamBoardsBulk} */
  async setBoardDataClassificationBulk(
    ...rest: GetRest2<
      MiroEndpoints["enterpriseDataclassificationTeamBoardsBulk"]
    >
  ) {
    (
      await this._api.enterpriseDataclassificationTeamBoardsBulk(
        ...this.pathParams,
        ...rest
      )
    ).body;
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationTeamSettingsGet} */
  async getDataClassification(
    ...rest: GetRest2<
      MiroEndpoints["enterpriseDataclassificationTeamSettingsGet"]
    >
  ) {
    const result = (
      await this._api.enterpriseDataclassificationTeamSettingsGet(
        ...this.pathParams,
        ...rest
      )
    ).body;

    return new DataClassification(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseDataclassificationTeamSettingsSet} */
  async setDataClassification(
    ...rest: GetRest2<
      MiroEndpoints["enterpriseDataclassificationTeamSettingsSet"]
    >
  ) {
    (
      await this._api.enterpriseDataclassificationTeamSettingsSet(
        ...this.pathParams,
        ...rest
      )
    ).body;
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseInviteTeamMember} */
  async inviteTeamMember(
    ...rest: GetRest2<MiroEndpoints["enterpriseInviteTeamMember"]>
  ) {
    (await this._api.enterpriseInviteTeamMember(...this.pathParams, ...rest))
      .body;
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeamMember} */
  async getTeamMember(
    ...rest: GetRest2<MiroEndpoints["enterpriseGetTeamMember"]>
  ) {
    const result = (
      await this._api.enterpriseGetTeamMember(...this.pathParams, ...rest)
    ).body;

    return new TeamMember(
      this._api,
      [this.pathParams[0], this.pathParams[1], `${result["memberId"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeamMembers} */
  async getTeamMembers(
    ...rest: GetRest2<MiroEndpoints["enterpriseGetTeamMembers"]>
  ) {
    const result = (
      await this._api.enterpriseGetTeamMembers(...this.pathParams, ...rest)
    ).body;
    return result
      ? result.map((result) => {
          return new TeamMember(
            this._api,
            [this.pathParams[0], this.pathParams[1], `${result["memberId"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseUpdateTeam} */
  async updateTeam(...rest: GetRest2<MiroEndpoints["enterpriseUpdateTeam"]>) {
    (await this._api.enterpriseUpdateTeam(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseGetTeamSettings} */
  async getTeamSettings(
    ...rest: GetRest1<MiroEndpoints["enterpriseGetTeamSettings"]>
  ) {
    const result = (
      await this._api.enterpriseGetTeamSettings(this.pathParams[1], ...rest)
    ).body;

    return new TeamSettings(this._api, [], result);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseUpdateTeamSettings} */
  async updateTeamSettings(
    ...rest: GetRest1<MiroEndpoints["enterpriseUpdateTeamSettings"]>
  ) {
    (await this._api.enterpriseUpdateTeamSettings(this.pathParams[1], ...rest))
      .body;
  }

  /** {@inheritDoc api!MiroEndpoints.getBoards} */
  async getBoards(...rest: GetRest1<MiroEndpoints["getBoards"]>) {
    const result = (await this._api.getBoards(this.pathParams[1], ...rest))
      .body;
    return result.data
      ? result.data.map((result) => {
          return new Board(this._api, [`${result["id"]}`], result);
        })
      : [];
  }
}

export class BoardDataClassification extends BaseBoardDataClassification {
  private _api: MiroEndpoints;
  private pathParams: [];

  constructor(
    api: MiroEndpoints,
    pathParams: [],
    rest: BaseBoardDataClassification
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }
}

export class DataClassification extends BaseDataClassification {
  private _api: MiroEndpoints;
  private pathParams: [];

  constructor(
    api: MiroEndpoints,
    pathParams: [],
    rest: BaseDataClassification
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }
}

export class TeamMember extends BaseTeamMember {
  private _api: MiroEndpoints;
  private pathParams: [string, string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string, string],
    rest: BaseTeamMember
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.enterpriseUpdateTeamMember} */
  async update(...rest: GetRest3<MiroEndpoints["enterpriseUpdateTeamMember"]>) {
    (await this._api.enterpriseUpdateTeamMember(...this.pathParams, ...rest))
      .body;
  }
}

export class TeamSettings extends BaseTeamSettings {
  private _api: MiroEndpoints;
  private pathParams: [];

  constructor(api: MiroEndpoints, pathParams: [], rest: BaseTeamSettings) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }
}

export class Board extends BaseBoard {
  private _api: MiroEndpoints;
  private pathParams: [string];

  constructor(api: MiroEndpoints, pathParams: [string], rest: BaseBoard) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.createAppCardItem} */
  async createAppCardItem(
    ...rest: GetRest1<MiroEndpoints["createAppCardItem"]>
  ) {
    const result = (
      await this._api.createAppCardItem(...this.pathParams, ...rest)
    ).body;

    return new AppCardItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createCardItem} */
  async createCardItem(...rest: GetRest1<MiroEndpoints["createCardItem"]>) {
    const result = (await this._api.createCardItem(...this.pathParams, ...rest))
      .body;

    return new CardItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createConnector} */
  async createConnector(...rest: GetRest1<MiroEndpoints["createConnector"]>) {
    const result = (
      await this._api.createConnector(...this.pathParams, ...rest)
    ).body;

    return new Connector(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createDocumentItemUsingUrl} */
  async createDocumentItemUsingUrl(
    ...rest: GetRest1<MiroEndpoints["createDocumentItemUsingUrl"]>
  ) {
    const result = (
      await this._api.createDocumentItemUsingUrl(...this.pathParams, ...rest)
    ).body;

    return new DocumentItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createEmbedItem} */
  async createEmbedItem(...rest: GetRest1<MiroEndpoints["createEmbedItem"]>) {
    const result = (
      await this._api.createEmbedItem(...this.pathParams, ...rest)
    ).body;

    return new EmbedItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createFrameItem} */
  async createFrameItem(...rest: GetRest1<MiroEndpoints["createFrameItem"]>) {
    const result = (
      await this._api.createFrameItem(...this.pathParams, ...rest)
    ).body;

    return new FrameItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createImageItemUsingUrl} */
  async createImageItemUsingUrl(
    ...rest: GetRest1<MiroEndpoints["createImageItemUsingUrl"]>
  ) {
    const result = (
      await this._api.createImageItemUsingUrl(...this.pathParams, ...rest)
    ).body;

    return new ImageItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createShapeItem} */
  async createShapeItem(...rest: GetRest1<MiroEndpoints["createShapeItem"]>) {
    const result = (
      await this._api.createShapeItem(...this.pathParams, ...rest)
    ).body;

    return new ShapeItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createStickyNoteItem} */
  async createStickyNoteItem(
    ...rest: GetRest1<MiroEndpoints["createStickyNoteItem"]>
  ) {
    const result = (
      await this._api.createStickyNoteItem(...this.pathParams, ...rest)
    ).body;

    return new StickyNoteItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.createTag} */
  async createTag(...rest: GetRest1<MiroEndpoints["createTag"]>) {
    const result = (await this._api.createTag(...this.pathParams, ...rest))
      .body;

    return new Tag(this._api, [this.pathParams[0], `${result["id"]}`], result);
  }

  /** {@inheritDoc api!MiroEndpoints.createTextItem} */
  async createTextItem(...rest: GetRest1<MiroEndpoints["createTextItem"]>) {
    const result = (await this._api.createTextItem(...this.pathParams, ...rest))
      .body;

    return new TextItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getBoardMembers} */
  async getMembers(...rest: GetRest1<MiroEndpoints["getBoardMembers"]>) {
    const result = (
      await this._api.getBoardMembers(...this.pathParams, ...rest)
    ).body;
    return result.data
      ? result.data.map((result) => {
          return new BoardMember(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getAppCardItem} */
  async getAppCardItem(...rest: GetRest1<MiroEndpoints["getAppCardItem"]>) {
    const result = (await this._api.getAppCardItem(...this.pathParams, ...rest))
      .body;

    return new AppCardItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getCardItem} */
  async getCardItem(...rest: GetRest1<MiroEndpoints["getCardItem"]>) {
    const result = (await this._api.getCardItem(...this.pathParams, ...rest))
      .body;

    return new CardItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getConnector} */
  async getConnector(...rest: GetRest1<MiroEndpoints["getConnector"]>) {
    const result = (await this._api.getConnector(...this.pathParams, ...rest))
      .body;

    return new Connector(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getConnectors} */
  async getConnectors(...rest: GetRest1<MiroEndpoints["getConnectors"]>) {
    const result = (await this._api.getConnectors(...this.pathParams, ...rest))
      .body;
    return result.data
      ? result.data.map((result) => {
          return new Connector(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getDocumentItem} */
  async getDocumentItem(...rest: GetRest1<MiroEndpoints["getDocumentItem"]>) {
    const result = (
      await this._api.getDocumentItem(...this.pathParams, ...rest)
    ).body;

    return new DocumentItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getEmbedItem} */
  async getEmbedItem(...rest: GetRest1<MiroEndpoints["getEmbedItem"]>) {
    const result = (await this._api.getEmbedItem(...this.pathParams, ...rest))
      .body;

    return new EmbedItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getFrameItem} */
  async getFrameItem(...rest: GetRest1<MiroEndpoints["getFrameItem"]>) {
    const result = (await this._api.getFrameItem(...this.pathParams, ...rest))
      .body;

    return new FrameItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getImageItem} */
  async getImageItem(...rest: GetRest1<MiroEndpoints["getImageItem"]>) {
    const result = (await this._api.getImageItem(...this.pathParams, ...rest))
      .body;

    return new ImageItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getShapeItem} */
  async getShapeItem(...rest: GetRest1<MiroEndpoints["getShapeItem"]>) {
    const result = (await this._api.getShapeItem(...this.pathParams, ...rest))
      .body;

    return new ShapeItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getSpecificBoardMember} */
  async getMember(...rest: GetRest1<MiroEndpoints["getSpecificBoardMember"]>) {
    const result = (
      await this._api.getSpecificBoardMember(...this.pathParams, ...rest)
    ).body;

    return new BoardMember(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getSpecificItem} */
  async getItem(...rest: GetRest1<MiroEndpoints["getSpecificItem"]>) {
    const result = (
      await this._api.getSpecificItem(...this.pathParams, ...rest)
    ).body;

    return new Item(this._api, [this.pathParams[0], `${result["id"]}`], result);
  }

  /** {@inheritDoc api!MiroEndpoints.getStickyNoteItem} */
  async getStickyNoteItem(
    ...rest: GetRest1<MiroEndpoints["getStickyNoteItem"]>
  ) {
    const result = (
      await this._api.getStickyNoteItem(...this.pathParams, ...rest)
    ).body;

    return new StickyNoteItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getTag} */
  async getTag(...rest: GetRest1<MiroEndpoints["getTag"]>) {
    const result = (await this._api.getTag(...this.pathParams, ...rest)).body;

    return new Tag(this._api, [this.pathParams[0], `${result["id"]}`], result);
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromBoard} */
  async getTags(...rest: GetRest1<MiroEndpoints["getTagsFromBoard"]>) {
    const result = (
      await this._api.getTagsFromBoard(...this.pathParams, ...rest)
    ).body;
    return result.data
      ? result.data.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getTextItem} */
  async getTextItem(...rest: GetRest1<MiroEndpoints["getTextItem"]>) {
    const result = (await this._api.getTextItem(...this.pathParams, ...rest))
      .body;

    return new TextItem(
      this._api,
      [this.pathParams[0], `${result["id"]}`],
      result
    );
  }

  /** {@inheritDoc api!MiroEndpoints.getItems} */
  async getItems(...rest: GetRest1<MiroEndpoints["getItems"]>) {
    const result = (await this._api.getItems(...this.pathParams, ...rest)).body;
    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.getItemsWithinFrame} */
  async getItemsWithinFrame(
    ...rest: GetRest1<MiroEndpoints["getItemsWithinFrame"]>
  ) {
    const result = (
      await this._api.getItemsWithinFrame(...this.pathParams, ...rest)
    ).body;
    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.copyBoard} */
  async copy(...rest: GetRest1<MiroEndpoints["copyBoard"]>) {
    (await this._api.copyBoard(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.shareBoard} */
  async share(...rest: GetRest1<MiroEndpoints["shareBoard"]>) {
    (await this._api.shareBoard(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.updateBoard} */
  async update(...rest: GetRest1<MiroEndpoints["updateBoard"]>) {
    (await this._api.updateBoard(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteBoard} */
  async delete(...rest: GetRest1<MiroEndpoints["deleteBoard"]>) {
    (await this._api.deleteBoard(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.removeBoardMember} */
  async removeMember(...rest: GetRest1<MiroEndpoints["removeBoardMember"]>) {
    (await this._api.removeBoardMember(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest1<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }
}

export class BoardMember extends BaseBoardMember {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseBoardMember
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateBoardMember} */
  async update(...rest: GetRest2<MiroEndpoints["updateBoardMember"]>) {
    (await this._api.updateBoardMember(...this.pathParams, ...rest)).body;
  }
}

export class Item extends BaseItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateItemPositionOrParent} */
  async update(...rest: GetRest2<MiroEndpoints["updateItemPositionOrParent"]>) {
    (await this._api.updateItemPositionOrParent(...this.pathParams, ...rest))
      .body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteItem"]>) {
    (await this._api.deleteItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class AppCardItem extends BaseAppCardItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseAppCardItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateAppCardItem} */
  async updateAppCardItem(
    ...rest: GetRest2<MiroEndpoints["updateAppCardItem"]>
  ) {
    (await this._api.updateAppCardItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteAppCardItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteAppCardItem"]>) {
    (await this._api.deleteAppCardItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class CardItem extends BaseCardItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseCardItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateCardItem} */
  async update(...rest: GetRest2<MiroEndpoints["updateCardItem"]>) {
    (await this._api.updateCardItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteCardItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteCardItem"]>) {
    (await this._api.deleteCardItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class DocumentItem extends BaseDocumentItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseDocumentItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateDocumentItemUsingUrl} */
  async update(...rest: GetRest2<MiroEndpoints["updateDocumentItemUsingUrl"]>) {
    (await this._api.updateDocumentItemUsingUrl(...this.pathParams, ...rest))
      .body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteDocumentItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteDocumentItem"]>) {
    (await this._api.deleteDocumentItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class EmbedItem extends BaseEmbedItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseEmbedItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateEmbedItem} */
  async update(...rest: GetRest2<MiroEndpoints["updateEmbedItem"]>) {
    (await this._api.updateEmbedItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteEmbedItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteEmbedItem"]>) {
    (await this._api.deleteEmbedItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class FrameItem extends BaseFrameItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseFrameItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateFrameItem} */
  async update(...rest: GetRest2<MiroEndpoints["updateFrameItem"]>) {
    (await this._api.updateFrameItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteFrameItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteFrameItem"]>) {
    (await this._api.deleteFrameItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class ImageItem extends BaseImageItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseImageItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateImageItemUsingUrl} */
  async update(...rest: GetRest2<MiroEndpoints["updateImageItemUsingUrl"]>) {
    (await this._api.updateImageItemUsingUrl(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteImageItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteImageItem"]>) {
    (await this._api.deleteImageItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class ShapeItem extends BaseShapeItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseShapeItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateShapeItem} */
  async update(...rest: GetRest2<MiroEndpoints["updateShapeItem"]>) {
    (await this._api.updateShapeItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteShapeItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteShapeItem"]>) {
    (await this._api.deleteShapeItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class StickyNoteItem extends BaseStickyNoteItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseStickyNoteItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateStickyNoteItem} */
  async update(...rest: GetRest2<MiroEndpoints["updateStickyNoteItem"]>) {
    (await this._api.updateStickyNoteItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteStickyNoteItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteStickyNoteItem"]>) {
    (await this._api.deleteStickyNoteItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class TextItem extends BaseTextItem {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseTextItem
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateTextItem} */
  async update(...rest: GetRest2<MiroEndpoints["updateTextItem"]>) {
    (await this._api.updateTextItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteTextItem} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteTextItem"]>) {
    (await this._api.deleteTextItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getTagsFromItem} */
  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }

  /** {@inheritDoc api!MiroEndpoints.removeTagFromItem} */
  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.attachTagToItem} */
  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class Connector extends BaseConnector {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(
    api: MiroEndpoints,
    pathParams: [string, string],
    rest: BaseConnector
  ) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateConnector} */
  async update(...rest: GetRest2<MiroEndpoints["updateConnector"]>) {
    (await this._api.updateConnector(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteConnector} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteConnector"]>) {
    (await this._api.deleteConnector(...this.pathParams, ...rest)).body;
  }
}

export class Tag extends BaseTag {
  private _api: MiroEndpoints;
  private pathParams: [string, string];

  constructor(api: MiroEndpoints, pathParams: [string, string], rest: BaseTag) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  /** {@inheritDoc api!MiroEndpoints.updateTag} */
  async update(...rest: GetRest2<MiroEndpoints["updateTag"]>) {
    (await this._api.updateTag(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.deleteTag} */
  async delete(...rest: GetRest2<MiroEndpoints["deleteTag"]>) {
    (await this._api.deleteTag(...this.pathParams, ...rest)).body;
  }

  /** {@inheritDoc api!MiroEndpoints.getItemsByTag} */
  async getItemsByTag(...rest: GetRest2<MiroEndpoints["getItemsByTag"]>) {
    const result = (await this._api.getItemsByTag(...this.pathParams, ...rest))
      .body;
    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this.pathParams[0], `${result["id"]}`],
            result
          );
        })
      : [];
  }
}
