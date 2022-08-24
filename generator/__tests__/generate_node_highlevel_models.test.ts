import { run } from '../../generator/generate_node_highlevel_models'
import prettier from 'prettier'

function format(code: string) {
    return prettier.format(code, {parser: 'typescript'})
}

function expectSameCode(expected: string, received: string) {
    expect(format(expected)).toEqual(format(received))
}

describe('generate_node_highlevel_models', () => {
    it('should generate a simple model', () => {
        expectSameCode(run({
            'Hello': {
                id: 'id',
                props: [],
                methods: []
            }
        }), `
import { MiroEndpoints } from '../api'
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString } from "./helpers";

export class Hello extends Object {
    /** @hidden */
    _api: MiroEndpoints
    /** @hidden */
    _headParams: []

    constructor(api: MiroEndpoints, headParams: Hello['_headParams'], rest: object) {
        super()
        this._api = api
        this._headParams = headParams
        Object.assign(this, rest)
    }
}
`)
    })

    it('should correctly generate a model with a getItem method', () => {
        expectSameCode(run({
            'Hello': {
                id: 'id',
                props: [],
                methods: [
                    {method: 'getSomeItem', alias: 'getItem', returns: 'Item', topLevelCall: false}
                ]
            },
            'Item': {
                id: 'itemId',
                props: [],
                methods: []
            }
        }), `

import { MiroEndpoints } from '../api'
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString } from "./helpers";

export class Hello extends Object {
  /** @hidden */
  _api: MiroEndpoints
  /** @hidden */
  _headParams: []

  constructor(api: MiroEndpoints, headParams: Hello['_headParams'], rest: object) {
    super()
    this._api = api
    this._headParams = headParams
    Object.assign(this, rest)
  }

  /** {@inheritDoc api!MiroEndpoints.getSomeItem} */
  async getItem(
    ...rest: GetParameters0<MiroEndpoints["getSomeItem"]>
  ): Promise<Item> {
    const result = (await this._api.getSomeItem(...this._headParams, ...rest))
      .body;

    return new Item(this._api, [], result);
  }
}

export class Item extends Object {
  /** @hidden */
  _api: MiroEndpoints;
  /** @hidden */
  _headParams: [];

  constructor(
    api: MiroEndpoints,
    headParams: Item["_headParams"],
    rest: object
  ) {
    super();
    this._api = api;
    this._headParams = headParams;
    Object.assign(this, rest);
  }
}
`)
    })
})

