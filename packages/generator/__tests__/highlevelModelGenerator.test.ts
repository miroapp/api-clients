import {run} from '../../generator/highlevelModelGenerator'
import prettier from 'prettier'

function format(code: string) {
  return prettier.format(code, {parser: 'typescript'})
}

function expectSameCode(expected: string, received: string) {
  expect(format(expected)).toEqual(format(received))
}

describe('generate_node_highlevel_models', () => {
  it('should generate a simple model', () => {
    expectSameCode(
      run({
        Hello: {
          id: 'id',
          props: [],
          methods: [],
        },
      }),
      `
import { MiroApi } from '../api'
import { KeepBase } from "./helpers";

export class Hello extends Object {
    /** @hidden */
    _api: MiroApi

    /** @hidden */
    constructor(api: MiroApi, props: KeepBase<Object>) {
        super()
        this._api = api

        Object.assign(this, props)
    }
}
`,
    )
  })

  it('should correctly generate a model with a getItem method', () => {
    expectSameCode(
      run({
        Hello: {
          id: 'id',
          props: [{name: 'id', type: 'string'}],
          methods: [
            {
              method: 'getSpecificItem',
              alias: 'getItem',
              returns: 'Item',
              topLevelCall: false,
            },
          ],
        },
        Item: {
          id: 'itemId',
          props: [],
          methods: [],
        },
      }),
      `

import { MiroApi } from '../api'
import { KeepBase } from "./helpers";

export class Hello extends Object {
  /** @hidden */
  _api: MiroApi

  id: string

  /** @hidden */
  constructor(api: MiroApi, id: string, props: KeepBase<Object>) {
    super()
    this._api = api
    this.id = id
    Object.assign(this, props)
  }

    /**
     * Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=\"/docs/miro-rest-api-introduction#rate-limiting\">Level 1</a><br/>
    * @summary Get specific item on board
    * @param itemId Unique identifier (ID) of the item that you want to retrieve.
    */
  async getItem(
    itemId: Parameters<MiroApi["getSpecificItem"]>[1]
  ): Promise<Item> {
      const result = (await this._api.getSpecificItem(this.id.toString(), itemId))
      .body;

    return new Item(this._api, result);
  }
}

export class Item extends Object {
  /** @hidden */
  _api: MiroApi;

  /** @hidden */
  constructor(
    api: MiroApi,
    props: KeepBase<Object>
  ) {
    super();
    this._api = api;

    Object.assign(this, props);
  }
}
`,
    )
  })
})
