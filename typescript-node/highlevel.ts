import { MiroEndpoints } from "./api";

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

type GetRest0<Method extends (p1: any, ...rest: any[]) => any> = [];

type GetRest1<Method extends (p1: any, ...rest: any[]) => any> =
  Method extends (p1: any, ...rest: infer Rest) => any ? Rest : never;

type GetRest2<Method extends (p1: any, p2: any, ...rest: any[]) => any> =
  Method extends (p1: any, p2: any, ...rest: infer Rest) => any ? Rest : never;

export class Miro extends Object {
  private _api: MiroEndpoints;
  pathParams: [];

  constructor(api: MiroEndpoints, pathParams: [], rest: object) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  async createBoard(...rest: GetRest0<MiroEndpoints["createBoard"]>) {
    const result = (await this._api.createBoard(...this.pathParams, ...rest))
      .body;

    return new Board(this._api, [`${result.id}`], result);
  }

  async getBoards(...rest: GetRest0<MiroEndpoints["getBoards"]>) {
    const result = (await this._api.getBoards(...this.pathParams, ...rest))
      .body;
    return result.data
      ? result.data.map((result) => {
          return new Board(this._api, [`${result.id}`], result);
        })
      : [];
  }
}

export class Board extends BaseBoard {
  private _api: MiroEndpoints;
  pathParams: [string];

  constructor(api: MiroEndpoints, pathParams: [string], rest: BaseBoard) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  async createAppCardItem(
    ...rest: GetRest1<MiroEndpoints["createAppCardItem"]>
  ) {
    const result = (
      await this._api.createAppCardItem(...this.pathParams, ...rest)
    ).body;

    return new AppCardItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createCardItem(...rest: GetRest1<MiroEndpoints["createCardItem"]>) {
    const result = (await this._api.createCardItem(...this.pathParams, ...rest))
      .body;

    return new CardItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createConnector(...rest: GetRest1<MiroEndpoints["createConnector"]>) {
    const result = (
      await this._api.createConnector(...this.pathParams, ...rest)
    ).body;

    return new Connector(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createDocumentItemUsingUrl(
    ...rest: GetRest1<MiroEndpoints["createDocumentItemUsingUrl"]>
  ) {
    const result = (
      await this._api.createDocumentItemUsingUrl(...this.pathParams, ...rest)
    ).body;

    return new DocumentItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createEmbedItem(...rest: GetRest1<MiroEndpoints["createEmbedItem"]>) {
    const result = (
      await this._api.createEmbedItem(...this.pathParams, ...rest)
    ).body;

    return new EmbedItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createFrameItem(...rest: GetRest1<MiroEndpoints["createFrameItem"]>) {
    const result = (
      await this._api.createFrameItem(...this.pathParams, ...rest)
    ).body;

    return new FrameItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createImageItemUsingUrl(
    ...rest: GetRest1<MiroEndpoints["createImageItemUsingUrl"]>
  ) {
    const result = (
      await this._api.createImageItemUsingUrl(...this.pathParams, ...rest)
    ).body;

    return new ImageItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createShapeItem(...rest: GetRest1<MiroEndpoints["createShapeItem"]>) {
    const result = (
      await this._api.createShapeItem(...this.pathParams, ...rest)
    ).body;

    return new ShapeItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createStickyNoteItem(
    ...rest: GetRest1<MiroEndpoints["createStickyNoteItem"]>
  ) {
    const result = (
      await this._api.createStickyNoteItem(...this.pathParams, ...rest)
    ).body;

    return new StickyNoteItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async createTag(...rest: GetRest1<MiroEndpoints["createTag"]>) {
    const result = (await this._api.createTag(...this.pathParams, ...rest))
      .body;

    return new Tag(this._api, [this.pathParams[0], `${result.id}`], result);
  }

  async createTextItem(...rest: GetRest1<MiroEndpoints["createTextItem"]>) {
    const result = (await this._api.createTextItem(...this.pathParams, ...rest))
      .body;

    return new TextItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getMembers(...rest: GetRest1<MiroEndpoints["getBoardMembers"]>) {
    const result = (
      await this._api.getBoardMembers(...this.pathParams, ...rest)
    ).body;
    return result.data
      ? result.data.map((result) => {
          return new BoardMember(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async getAppCardItem(...rest: GetRest1<MiroEndpoints["getAppCardItem"]>) {
    const result = (await this._api.getAppCardItem(...this.pathParams, ...rest))
      .body;

    return new AppCardItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getCardItem(...rest: GetRest1<MiroEndpoints["getCardItem"]>) {
    const result = (await this._api.getCardItem(...this.pathParams, ...rest))
      .body;

    return new CardItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getConnector(...rest: GetRest1<MiroEndpoints["getConnector"]>) {
    const result = (await this._api.getConnector(...this.pathParams, ...rest))
      .body;

    return new Connector(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getConnectors(...rest: GetRest1<MiroEndpoints["getConnectors"]>) {
    const result = (await this._api.getConnectors(...this.pathParams, ...rest))
      .body;
    return result.data
      ? result.data.map((result) => {
          return new Connector(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async getDocumentItem(...rest: GetRest1<MiroEndpoints["getDocumentItem"]>) {
    const result = (
      await this._api.getDocumentItem(...this.pathParams, ...rest)
    ).body;

    return new DocumentItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getEmbedItem(...rest: GetRest1<MiroEndpoints["getEmbedItem"]>) {
    const result = (await this._api.getEmbedItem(...this.pathParams, ...rest))
      .body;

    return new EmbedItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getFrameItem(...rest: GetRest1<MiroEndpoints["getFrameItem"]>) {
    const result = (await this._api.getFrameItem(...this.pathParams, ...rest))
      .body;

    return new FrameItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getImageItem(...rest: GetRest1<MiroEndpoints["getImageItem"]>) {
    const result = (await this._api.getImageItem(...this.pathParams, ...rest))
      .body;

    return new ImageItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getShapeItem(...rest: GetRest1<MiroEndpoints["getShapeItem"]>) {
    const result = (await this._api.getShapeItem(...this.pathParams, ...rest))
      .body;

    return new ShapeItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getMember(...rest: GetRest1<MiroEndpoints["getSpecificBoardMember"]>) {
    const result = (
      await this._api.getSpecificBoardMember(...this.pathParams, ...rest)
    ).body;

    return new BoardMember(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getItem(...rest: GetRest1<MiroEndpoints["getSpecificItem"]>) {
    const result = (
      await this._api.getSpecificItem(...this.pathParams, ...rest)
    ).body;

    return new Item(this._api, [this.pathParams[0], `${result.id}`], result);
  }

  async getStickyNoteItem(
    ...rest: GetRest1<MiroEndpoints["getStickyNoteItem"]>
  ) {
    const result = (
      await this._api.getStickyNoteItem(...this.pathParams, ...rest)
    ).body;

    return new StickyNoteItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getTag(...rest: GetRest1<MiroEndpoints["getTag"]>) {
    const result = (await this._api.getTag(...this.pathParams, ...rest)).body;

    return new Tag(this._api, [this.pathParams[0], `${result.id}`], result);
  }

  async getTags(...rest: GetRest1<MiroEndpoints["getTagsFromBoard"]>) {
    const result = (
      await this._api.getTagsFromBoard(...this.pathParams, ...rest)
    ).body;
    return result.data
      ? result.data.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async getTextItem(...rest: GetRest1<MiroEndpoints["getTextItem"]>) {
    const result = (await this._api.getTextItem(...this.pathParams, ...rest))
      .body;

    return new TextItem(
      this._api,
      [this.pathParams[0], `${result.id}`],
      result
    );
  }

  async getItems(...rest: GetRest1<MiroEndpoints["getItems"]>) {
    const result = (await this._api.getItems(...this.pathParams, ...rest)).body;
    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

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
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async copy(...rest: GetRest1<MiroEndpoints["copyBoard"]>) {
    (await this._api.copyBoard(...this.pathParams, ...rest)).body;
  }

  async share(...rest: GetRest1<MiroEndpoints["shareBoard"]>) {
    (await this._api.shareBoard(...this.pathParams, ...rest)).body;
  }

  async update(...rest: GetRest1<MiroEndpoints["updateBoard"]>) {
    (await this._api.updateBoard(...this.pathParams, ...rest)).body;
  }

  async delete(...rest: GetRest1<MiroEndpoints["deleteBoard"]>) {
    (await this._api.deleteBoard(...this.pathParams, ...rest)).body;
  }

  async removeMember(...rest: GetRest1<MiroEndpoints["removeBoardMember"]>) {
    (await this._api.removeBoardMember(...this.pathParams, ...rest)).body;
  }

  async removeTag(...rest: GetRest1<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }
}

export class BoardMember extends BaseBoardMember {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async update(...rest: GetRest2<MiroEndpoints["updateBoardMember"]>) {
    (await this._api.updateBoardMember(...this.pathParams, ...rest)).body;
  }
}

export class Item extends BaseItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateItemPositionOrParent(
    ...rest: GetRest2<MiroEndpoints["updateItemPositionOrParent"]>
  ) {
    (await this._api.updateItemPositionOrParent(...this.pathParams, ...rest))
      .body;
  }

  async deleteItem(...rest: GetRest2<MiroEndpoints["deleteItem"]>) {
    (await this._api.deleteItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class AppCardItem extends BaseAppCardItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateAppCardItem(
    ...rest: GetRest2<MiroEndpoints["updateAppCardItem"]>
  ) {
    (await this._api.updateAppCardItem(...this.pathParams, ...rest)).body;
  }

  async deleteAppCardItem(
    ...rest: GetRest2<MiroEndpoints["deleteAppCardItem"]>
  ) {
    (await this._api.deleteAppCardItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class CardItem extends BaseCardItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateCardItem(...rest: GetRest2<MiroEndpoints["updateCardItem"]>) {
    (await this._api.updateCardItem(...this.pathParams, ...rest)).body;
  }

  async deleteCardItem(...rest: GetRest2<MiroEndpoints["deleteCardItem"]>) {
    (await this._api.deleteCardItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class DocumentItem extends BaseDocumentItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateDocumentItem(
    ...rest: GetRest2<MiroEndpoints["updateDocumentItemUsingUrl"]>
  ) {
    (await this._api.updateDocumentItemUsingUrl(...this.pathParams, ...rest))
      .body;
  }

  async deleteDocumentItem(
    ...rest: GetRest2<MiroEndpoints["deleteDocumentItem"]>
  ) {
    (await this._api.deleteDocumentItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class EmbedItem extends BaseEmbedItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateEmbedItem(...rest: GetRest2<MiroEndpoints["updateEmbedItem"]>) {
    (await this._api.updateEmbedItem(...this.pathParams, ...rest)).body;
  }

  async deleteEmbedItem(...rest: GetRest2<MiroEndpoints["deleteEmbedItem"]>) {
    (await this._api.deleteEmbedItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class FrameItem extends BaseFrameItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateFrameItem(...rest: GetRest2<MiroEndpoints["updateFrameItem"]>) {
    (await this._api.updateFrameItem(...this.pathParams, ...rest)).body;
  }

  async deleteFrameItem(...rest: GetRest2<MiroEndpoints["deleteFrameItem"]>) {
    (await this._api.deleteFrameItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class ImageItem extends BaseImageItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateImageItem(
    ...rest: GetRest2<MiroEndpoints["updateImageItemUsingUrl"]>
  ) {
    (await this._api.updateImageItemUsingUrl(...this.pathParams, ...rest)).body;
  }

  async deleteImageItem(...rest: GetRest2<MiroEndpoints["deleteImageItem"]>) {
    (await this._api.deleteImageItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class ShapeItem extends BaseShapeItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateShapeItem(...rest: GetRest2<MiroEndpoints["updateShapeItem"]>) {
    (await this._api.updateShapeItem(...this.pathParams, ...rest)).body;
  }

  async deleteShapeItem(...rest: GetRest2<MiroEndpoints["deleteShapeItem"]>) {
    (await this._api.deleteShapeItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class StickyNoteItem extends BaseStickyNoteItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateStickyNoteItem(
    ...rest: GetRest2<MiroEndpoints["updateStickyNoteItem"]>
  ) {
    (await this._api.updateStickyNoteItem(...this.pathParams, ...rest)).body;
  }

  async deleteStickyNoteItem(
    ...rest: GetRest2<MiroEndpoints["deleteStickyNoteItem"]>
  ) {
    (await this._api.deleteStickyNoteItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class TextItem extends BaseTextItem {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateTextItem(...rest: GetRest2<MiroEndpoints["updateTextItem"]>) {
    (await this._api.updateTextItem(...this.pathParams, ...rest)).body;
  }

  async deleteTextItem(...rest: GetRest2<MiroEndpoints["deleteTextItem"]>) {
    (await this._api.deleteTextItem(...this.pathParams, ...rest)).body;
  }

  async getTags(...rest: GetRest2<MiroEndpoints["getTagsFromItem"]>) {
    const result = (
      await this._api.getTagsFromItem(...this.pathParams, ...rest)
    ).body;
    return result.tags
      ? result.tags.map((result) => {
          return new Tag(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }

  async removeTag(...rest: GetRest2<MiroEndpoints["removeTagFromItem"]>) {
    (await this._api.removeTagFromItem(...this.pathParams, ...rest)).body;
  }

  async attachTag(...rest: GetRest2<MiroEndpoints["attachTagToItem"]>) {
    (await this._api.attachTagToItem(...this.pathParams, ...rest)).body;
  }
}

export class Connector extends BaseConnector {
  private _api: MiroEndpoints;
  pathParams: [string, string];

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

  async updateConnector(...rest: GetRest2<MiroEndpoints["updateConnector"]>) {
    (await this._api.updateConnector(...this.pathParams, ...rest)).body;
  }

  async deleteConnector(...rest: GetRest2<MiroEndpoints["deleteConnector"]>) {
    (await this._api.deleteConnector(...this.pathParams, ...rest)).body;
  }
}

export class Tag extends BaseTag {
  private _api: MiroEndpoints;
  pathParams: [string, string];

  constructor(api: MiroEndpoints, pathParams: [string, string], rest: BaseTag) {
    super();
    this._api = api;
    this.pathParams = pathParams;
    Object.assign(this, rest);
  }

  async updateTag(...rest: GetRest2<MiroEndpoints["updateTag"]>) {
    (await this._api.updateTag(...this.pathParams, ...rest)).body;
  }

  async deleteTag(...rest: GetRest2<MiroEndpoints["deleteTag"]>) {
    (await this._api.deleteTag(...this.pathParams, ...rest)).body;
  }

  async getItemsByTag(...rest: GetRest2<MiroEndpoints["getItemsByTag"]>) {
    const result = (await this._api.getItemsByTag(...this.pathParams, ...rest))
      .body;
    return result.data
      ? result.data.map((result) => {
          return new Item(
            this._api,
            [this.pathParams[0], `${result.id}`],
            result
          );
        })
      : [];
  }
}
