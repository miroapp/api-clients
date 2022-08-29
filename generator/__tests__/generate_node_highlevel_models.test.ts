import {run} from '../../generator/generate_node_highlevel_models'
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
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString } from "./helpers";

export class Hello extends Object {
    /** @hidden */
    _api: MiroApi
    /** @hidden */
    _headParams: []

    constructor(api: MiroApi, headParams: Hello['_headParams'], props: KeepBase<Object>) {
        super()
        this._api = api
        this._headParams = headParams
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
          props: [],
          methods: [
            {
              method: 'getSomeItem',
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
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString } from "./helpers";

export class Hello extends Object {
  /** @hidden */
  _api: MiroApi
  /** @hidden */
  _headParams: []

  constructor(api: MiroApi, headParams: Hello['_headParams'], props: KeepBase<Object>) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, props)
  }

  /** {@inheritDoc api!MiroApi.getSomeItem} */
  async getItem(
    ...args: GetParameters0<MiroApi["getSomeItem"]>
  ): Promise<Item> {
    const result = (await this._api.getSomeItem(...this._headParams, ...args))
      .body;

    return new Item(this._api, [], result);
  }
}

export class Item extends Object {
  /** @hidden */
  _api: MiroApi;
  /** @hidden */
  _headParams: [];

  constructor(
    api: MiroApi,
    headParams: Item["_headParams"],
    props: KeepBase<Object>
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, props);
  }
}
`,
    )
  })
})
