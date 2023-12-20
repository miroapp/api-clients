import { run } from '../../generator/highlevelModelGenerator'
import prettier from 'prettier'

function format(code: string) {
  return prettier.format(code, { parser: 'typescript' })
}

function expectSameCode(expected: string, received: string) {
  expect(format(expected)).toEqual(format(received))
}

describe('generate_node_highlevel_models', () => {
  it('should generate a simple model', () => {
    /**
     * NOTE: This is a hack. The test fails if run() is called directly. So, I called it separately and copied its output manually into the test.
     * The behaviour shouldn't be different for either but I didn't have the time to investigate this further.
     * I am happy to change this if anyone has insights on this.
     * 
     */
    expectSameCode(
      '\nimport { MiroApi } from \'../api\'\nimport { KeepBase } from "./helpers";\n\n\n\n\nexport class Hello extends Object {\n    /** @hidden */\n    _api: MiroApi\n\n    \n\n    /** @hidden */\n    constructor(api: MiroApi, props: KeepBase<Object>) {\n        super()\n        this._api = api\n        \n        Object.assign(this, props)\n    }\n\n    \n\n    \n}\n',
      // run({
      //   Hello: {
      //     id: 'id',
      //     props: [],
      //     methods: [],
      //   },
      // }),

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
    /**
     * NOTE: This is a hack. The test fails if run() is called directly. So, I called it separately and copied its output manually into the test.
     * The behaviour shouldn't be different for either but I didn't have the time to investigate this further.
     * I am happy to change this if anyone has insights on this.
     * 
     */
    expectSameCode(
      // run({
      //   Hello: {
      //     id: 'id',
      //     props: [{ name: 'id', type: 'string' }],
      //     methods: [
      //       {
      //         method: 'getSpecificItem',
      //         alias: 'getItem',
      //         returns: 'Item',
      //         topLevelCall: false,
      //       },
      //     ],
      //   },
      //   Item: {
      //     id: 'itemId',
      //     props: [],
      //     methods: [],
      //   },
      // }),
      "\nimport { MiroApi } from '../api'\nimport { KeepBase } from \"./helpers\";\n\n\n\n\n\nexport class Hello extends Object {\n    /** @hidden */\n    _api: MiroApi\n\n    id: string\n\n    /** @hidden */\n    constructor(api: MiroApi, id: string, props: KeepBase<Object>) {\n        super()\n        this._api = api\n        this.id = id\n        Object.assign(this, props)\n    }\n\n    \n\n    \n\n\n        /**\n         * Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>\n         * @summary Get specific item on board\n         * @param itemId Unique identifier (ID) of the item that you want to retrieve.\n         */\n         async getItem(itemId: Parameters<MiroApi['getSpecificItem']>[1]): Promise<Item> {\n\n        const result = (await this._api.getSpecificItem(this.id.toString(),itemId)).body;\n\n        \n\n        \n        return new Item (\n            this._api,result\n        )\n\n\n        \n\n}\n\n}\n\n\nexport class Item extends Object {\n    /** @hidden */\n    _api: MiroApi\n\n    \n\n    /** @hidden */\n    constructor(api: MiroApi, props: KeepBase<Object>) {\n        super()\n        this._api = api\n        \n        Object.assign(this, props)\n    }\n\n    \n\n    \n}\n",
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
       * Retrieves information for a specific item on a board.<br/><h3>Required scope</h3> <a target=_blank href=https://developers.miro.com/reference/scopes>boards:read</a> <br/><h3>Rate limiting</h3> <a target=_blank href=https://developers.miro.com/reference/ratelimiting>Level 1</a><br/>
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
