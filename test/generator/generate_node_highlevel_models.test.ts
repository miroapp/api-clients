import { run } from '../../generator/generate_node_highlevel_models'

describe('generate_node_highlevel_models', () => {
    it('should generate a simple model', () => {
        expect(run({
            'Hello': {
                id: 'Id',
                props: ['one', 'two'],
                methods: []
            }
        })).toEqual(`
import { MiroEndpoints } from '../api'
import { GetParameters0, GetParameters1, GetParameters2, GetParameters3, KeepBase, toString } from "./helpers";




export class Hello extends Object {
    /** @hidden */
    _api: MiroEndpoints
    /** @hidden */
    _headParams: [string, string]

    constructor(api: MiroEndpoints, headParams: Hello['_headParams'], rest: object) {
        super()
        this._api = api
        this._headParams = headParams
        Object.assign(this, rest)
    }



}
`)
    })
})
