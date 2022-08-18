
interface Models {
    [key: string]: {
        props: string[],
        extendedModel?: {
            name: string,
            path: string
        },
        methods: Array<string|{method: string, alias?: string, returns?: keyof Models, paginated?: string}>
    }
}

const models: Models  = {
    Api: {
        props: [],
        methods: [
            'createBoard',
            {method: 'getBoards', returns: 'Board', paginated: 'data'}
        ]
    },

    Board: {
        props: ['id'],
        extendedModel: {
            name: 'Board',
            path: 'model/board'
        },
        methods: [
            'createAppCardItem',
            'createCardItem',
            'createConnector',
            {method: 'createDocumentItemUsingUrl', returns: 'DocumentItem'},
            'createEmbedItem',
            'createFrameItem',
            {method: 'createImageItemUsingUrl', returns: 'ImageItem'},
            'createShapeItem',
            'createStickyNoteItem',
            'createTag',
            'createTextItem',

            {method: 'getBoardMembers', alias: 'getMembers', paginated: 'data', returns: 'BoardMember'},
            'getAppCardItem',
            'getCardItem',
            'getConnector',
            {method: 'getConnectors', returns: 'Connector', paginated: 'data'},
            {method: 'getDocumentItem', returns: 'DocumentItem'},
            'getEmbedItem',
            'getFrameItem',
            'getImageItem',
            'getShapeItem',
            {method: 'getSpecificBoardMember', alias: 'getMember', returns: 'BoardMember'},
            {method: 'getSpecificItem', alias: 'getItem', returns: 'Item'},
            'getStickyNoteItem',
            'getTag',
            {method: 'getTagsFromBoard', alias: 'getTags', returns: 'Tag', paginated: 'data'},
            'getTextItem',
            {method: 'getItems', returns: 'Item', paginated: 'data'},
            {method: 'getItemsWithinFrame', returns: 'Item', paginated: 'data'},

            {method: 'copyBoard', alias: 'copy'},
            {method: 'shareBoard', alias: 'share'},
            {method: 'updateBoard', alias: 'update'},
            {method: 'deleteBoard', alias: 'delete'},
            {method: 'removeBoardMember', alias: 'removeMember'},

            {method: 'removeTagFromItem', alias: 'removeTag'},
        ]
    },
    BoardMember: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'BoardMember',
            path: 'model/boardMember'
        },
        methods: [
            {method: 'updateBoardMember', alias: 'update'},
        ]
    },
    Item: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'GenericItem',
            path: 'model/genericItem'
        },
        methods: [
            'updateItemPositionOrParent',
            'deleteItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    AppCardItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'AppCardItem',
            path: 'model/appCardItem'
        },
        methods: [
            'updateAppCardItem',
            'deleteAppCardItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    CardItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'CardItem',
            path: 'model/cardItem'
        },
        methods: [
            'updateCardItem',
            'deleteCardItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    DocumentItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'DocumentItem',
            path: 'model/documentItem'
        },
        methods: [
            {method: 'updateDocumentItemUsingUrl', alias: 'updateDocumentItem'},
            'deleteDocumentItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    EmbedItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'EmbedItem',
            path: 'model/embedItem'
        },
        methods: [
            'updateEmbedItem',
            'deleteEmbedItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    FrameItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'FrameItem',
            path: 'model/frameItem'
        },
        methods: [
            'updateFrameItem',
            'deleteFrameItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    ImageItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'ImageItem',
            path: 'model/imageItem'
        },
        methods: [
            {method: 'updateImageItemUsingUrl', alias: 'updateImageItem'},
            'deleteImageItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    ShapeItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'ShapeItem',
            path: 'model/shapeItem'
        },
        methods: [
            'updateShapeItem',
            'deleteShapeItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    StickyNoteItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'StickyNoteItem',
            path: 'model/stickyNoteItem'
        },
        methods: [
            'updateStickyNoteItem',
            'deleteStickyNoteItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    TextItem: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'TextItem',
            path: 'model/textItem'
        },
        methods: [
            'updateTextItem',
            'deleteTextItem',
            {method: 'getTagsFromItem', alias: 'getTags', returns: 'Tag', paginated: 'tags'},
            {method: 'removeTagFromItem', alias: 'removeTag'},
            {method: 'attachTagToItem', alias: 'attachTag'},
        ]
    },
    Connector: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'ConnectorWithLinks',
            path: 'model/connectorWithLinks'
        },
        methods: [
            'updateConnector',
            'deleteConnector',
        ]
    },
    Tag: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'Tag',
            path: 'model/tag'
        },
        methods: [
            'updateTag',
            'deleteTag',
            {method: 'getItemsByTag', returns: 'Item', paginated: 'data'}
        ]
    }
}



console.log(`
import { MiroEndpoints } from './api'
${Object.keys(models).map(name => {
    const extendedModel = models[name].extendedModel
    if (!extendedModel) return ''
    return `import { ${extendedModel.name} as Base${name}}  from './${extendedModel.path}';`
}).join('\n')
}

type GetRest0<
Method extends (p1: any, ...rest: any[]) => any,
> = []


type GetRest1<
Method extends (p1: any, ...rest: any[]) => any,
> = Method extends (p1: any, ...rest: infer Rest) => any
? Rest
: never

type GetRest2<
Method extends (p1: any, p2: any, ...rest: any[]) => any,
> = Method extends (p1: any, p2: any, ...rest: infer Rest) => any
? Rest
: never

`)

for (const name of Object.keys(models)) {
    const model = models[name];

    const pathParams = '[' + model.props.map(_ => `string`).join(', ') + ']'

    console.log(`

export class ${name} extends ${model.extendedModel ? `Base${name}` : 'Object' } {
    private _api: MiroEndpoints
    private pathParams: ${pathParams}

    constructor(api: MiroEndpoints, pathParams: ${pathParams}, rest: ${model.extendedModel ? `Base${name}` : 'object' }) {
        super()
        this._api = api
        this.pathParams = pathParams
        Object.assign(this, rest)
    }

    ${model.methods.map(methodConfig => {
    const m = typeof methodConfig === 'string' ? {method: methodConfig} : methodConfig;

    const returnsModel = m.returns || (m.method.startsWith('get') || m.method.startsWith('create') ? m.method.replace(/^(create|get)/, '') : undefined);

    const body = `(await this._api.${m.method}(...this.pathParams, ...rest)).body`

    return `
    /** {@inheritDoc api!MiroEndpoints.${m.method}} */
    async ${m.alias || m.method}(...rest: GetRest${model.props.length}<MiroEndpoints['${m.method}']>) {
        ${returnsModel ? `const result = ${body}` : body}
        ${m.paginated ? `return result.${m.paginated} ? result.${m.paginated}.map(result => { ` : ''}
        ${returnsModel ? `return new ${returnsModel} (
            this._api,
            [${models[returnsModel].props.map((_, i, {length}) => i === length - 1 ? '`${result.id}`': `this.pathParams[${i}]`)}],
            result
        )` : '' }
        ${m.paginated ? '}) : []' : ''}
    }
    `}).join('\n')}
}

`)
}
