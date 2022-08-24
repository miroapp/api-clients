import {normalizeTheModel} from '../modelDefinition'
describe('modelDefinition#normalizeTheModel', () => {
    it('infers the return type from the method name', () => {
        expect(
            normalizeTheModel({
                props: [],
                methods: [
                    'getItem'
                ]
            })).toEqual({
                id: 'id',
                props: [],
                methods: [{
                    method: 'getItem',
                    alias: 'getItem',
                    returns: 'Item',
                    paginated: undefined,
                    topLevelCall: false
                }]
            })
    })

    it('infers the return type from the method alias', () => {
        expect(
            normalizeTheModel({
                props: [],
                methods: [
                    {method: 'getItemSomething', alias: 'getItem'}
                ]
            })).toEqual({
                id: 'id',
                props: [],
                methods: [{
                    method: 'getItemSomething',
                    alias: 'getItem',
                    returns: 'Item',
                    paginated: undefined,
                    topLevelCall: false
                }]
            })
    })

})
