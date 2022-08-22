
interface Model {
    id?: string,
    props: string[],
    extendedModel?: {
        name: string,
        path: string
    },
    methods: Array<string|{
        method: string,
        alias?: string,
        returns?: keyof Models,
        paginated?: string | true,
        oneId?: boolean
    }>
}

interface NormalizedModel {
    id: string,
    props: string[],
    extendedModel?: {
        name: string,
        path: string
    },
    methods: Array<{
        method: string,
        alias: string,
        returns: keyof Models | undefined,
        paginated?: string | true,
        oneId: boolean
    }>
}

interface Models {
    [key: string]: Model
}

const models: Models  = {
    Api: {
        props: [],
        methods: [
            'createBoard',
            {method: 'getBoards', returns: 'Board', paginated: 'data'},
            {method: 'enterpriseGetOrganization', alias: 'getOrganization', returns: 'Organization'},
        ]
    },

    Organization: {
        props: ['orgId'],
        extendedModel: {
            name: 'Organization',
            path: 'model/organization'
        },
        methods: [
            {method: 'enterpriseCreateTeam', alias: 'createTeam', returns: 'Team'},
            {method: 'enterpriseDataclassificationOrganizationSettingsGet', alias: 'getDataClassification'},

            {method: 'enterpriseGetDefaultTeamSettings', alias: 'getDefaultTeamSettings', returns: 'TeamSettings'},
            {method: 'enterpriseGetOrganizationMember', alias: 'getOrganizationMember'},
            {method: 'enterpriseGetOrganizationMembers', alias: 'getOrganizationMembers', returns: 'OrganizationMember', paginated: 'data'},
            {method: 'enterpriseGetTeam', alias: 'getTeam', returns: 'Team'},
            {method: 'enterpriseGetTeams', alias: 'getTeams', returns: 'Team', paginated: true},

        ]
    },

    OrganizationMember: {
        props: ['orgId', 'userId'],
        extendedModel: {
            name: 'OrganizationMember',
            path: 'model/organizationMember'
        },
        methods: []
    },

    Team: {
        props: ['orgId', 'teamId'],
        extendedModel: {
            name: 'Team',
            path: 'model/team'
        },
        methods: [
            {method: 'enterpriseDeleteTeam', alias: 'deleteTeam'},
            {method: 'enterpriseDeleteTeamMember', alias: 'deleteTeamMember'},
            {method: 'enterpriseDataclassificationBoardGet', alias: 'getBoardDataClassification'},
            {method: 'enterpriseDataclassificationBoardSet', alias: 'setBoardDataClassification'},
            {method: 'enterpriseDataclassificationTeamBoardsBulk', alias: 'setBoardDataClassificationBulk'},

            {method: 'enterpriseDataclassificationTeamSettingsGet', alias: 'getDataClassification'},
            {method: 'enterpriseDataclassificationTeamSettingsSet', alias: 'setDataClassification'},

            {method: 'enterpriseInviteTeamMember', alias: 'inviteTeamMember'},
            {method: 'enterpriseGetTeamMember', alias: 'getTeamMember'},
            {method: 'enterpriseGetTeamMembers', alias: 'getTeamMembers', returns: 'TeamMember', paginated: true},

            {method: 'enterpriseUpdateTeam', alias: 'updateTeam'},

            {method: 'enterpriseGetTeamSettings', alias: 'getTeamSettings', oneId: true},
            {method: 'enterpriseUpdateTeamSettings', alias: 'updateTeamSettings', oneId: true},
            {method: 'getBoards', returns: 'Board', paginated: 'data', oneId: true},
        ]
    },

    BoardDataClassification: {
        props: [],
        extendedModel: {
            name: 'BoardDataClassificationLabel',
            path: 'model/boardDataClassificationLabel'
        },
        methods: []
    },

    DataClassification: {
        props: [],
        extendedModel: {
            name: 'DataClassificationOrganizationSettings',
            path: 'model/dataClassificationOrganizationSettings'
        },
        methods: []
    },

    TeamMember: {
        id: 'memberId',
        props: ['orgId', 'teamId', 'memberId'],
        extendedModel: {
            name: 'TeamMember',
            path: 'model/teamMember'
        },
        methods: [
            {method: 'enterpriseUpdateTeamMember', alias: 'update'},
        ]
    },

    TeamSettings: {
        props: [],
        extendedModel: {
            name: 'TeamSettings',
            path: 'model/teamSettings'
        },
        methods: []
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
            {method: 'updateItemPositionOrParent', alias: 'update'},
            {method: 'deleteItem', alias: 'delete'},
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
            {method: 'deleteAppCardItem', alias: 'delete'},
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
            {method: 'updateCardItem', alias: 'update'},
            {method: 'deleteCardItem', alias: 'delete'},
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
            {method: 'updateDocumentItemUsingUrl', alias: 'update'},
            {method: 'deleteDocumentItem', alias: 'delete'},
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
            {method: 'updateEmbedItem', alias: 'update'},
            {method: 'deleteEmbedItem', alias: 'delete'},
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
            {method: 'updateFrameItem', alias: 'update'},
            {method: 'deleteFrameItem', alias: 'delete'},
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
            {method: 'updateImageItemUsingUrl', alias: 'update'},
            {method: 'deleteImageItem', alias: 'delete'},
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
            {method: 'updateShapeItem', alias: 'update'},
            {method: 'deleteShapeItem', alias: 'delete'},
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
            {method: 'updateStickyNoteItem', alias: 'update'},
            {method: 'deleteStickyNoteItem', alias: 'delete'},
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
            {method: 'updateTextItem', alias: 'update'},
            {method: 'deleteTextItem', alias: 'delete'},
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
            {method: 'updateConnector', alias: 'update'},
            {method: 'deleteConnector', alias: 'delete'},
        ]
    },
    Tag: {
        props: ['boardId', 'id'],
        extendedModel: {
            name: 'Tag',
            path: 'model/tag'
        },
        methods: [
            {method: 'updateTag', alias: 'update'},
            {method: 'deleteTag', alias: 'delete'},
            {method: 'getItemsByTag', returns: 'Item', paginated: 'data'}
        ]
    }
}

function deriveReturnTypeFromName (name: string) {
    return name.startsWith('get') || name.startsWith('create') ? name.replace(/^(create|get)/, '') : undefined
}

function normalizeTheModel (model: Model): NormalizedModel {
    return {
        id: model.id || 'id',
        props: model.props || [],
        extendedModel: model.extendedModel ? {
            name: model.extendedModel ? `Base${model.extendedModel.name}` : 'Object',
            path: model.extendedModel.path,
        } : undefined,
        methods: model.methods.map(methodConfig => {
            const method = typeof methodConfig === 'string' ? {method: methodConfig} : methodConfig;
            const alias = method.alias || method.method
            const returns = method.returns || deriveReturnTypeFromName(alias)
            if (returns && !models[returns]) throw new Error('Undefined model ' + returns)

            return {
                method: method.method,
                alias,
                returns,
                paginated: method.paginated,
                oneId: !!method.oneId
            }
        })
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
`)

for (const name of Object.keys(models)) {
    const model = normalizeTheModel(models[name]);

    const pathParams = '[' + model.props.map(_ => `string`).join(', ') + ']'

    console.log(`

export class ${name} extends ${model.extendedModel ? `Base${name}` : 'Object' } {
    private _api: MiroEndpoints
    private pathParams: ${pathParams}

    constructor(api: MiroEndpoints, pathParams: ${pathParams}, model: ${model.extendedModel ? `Base${name}` : 'object' }) {
        super()
        this._api = api
        this.pathParams = pathParams
        Object.assign(this, model)
    }

${model.methods.map(m => {

    const returns = m.returns

    return `
    /** {@inheritDoc api!MiroEndpoints.${m.method}} */
    async ${m.alias}(...args: GetArguments${m.oneId ? 1 : model.props.length}<MiroEndpoints['${m.method}']>): Promise<${returns ? returns : 'void'}${m.paginated ? '[]' : '' }> {
        ${renderFunctionBody(m, model)}
    }

`}).join('\n')}

}
`)
}

function renderFunctionBody (m: NormalizedModel['methods'][number], model: NormalizedModel) {
    const apiCall = `await this._api.${m.method}(${m.oneId ? `this.pathParams[${model.props.length-1}]` : '...this.pathParams'}, ...args)`
    const returns = m.returns
    if (!returns) return apiCall

    const paginatedData = m.paginated === true ? 'result' : `result.${m.paginated}`

    return `
        const result = (${apiCall}).body;

        ${m.paginated ? `return ${paginatedData} ? ${paginatedData}.map(result => { ` : ''}
        return new ${returns} (
            this._api,
            [${models[returns].props.map((_, i, {length}) =>
                i === length - 1
                ? `toString(result.${normalizeTheModel(models[returns]).id})`
                : `this.pathParams[${i}]`
            )}],
            result
        )
        ${m.paginated ? '}) : []' : ''}
`
}

console.log(`

function toString(id: number | string | undefined) {
    return id ? id.toString() : ''
}

type GetArguments0<
    Method extends (p1: any, ...args: any[]) => any,
> = Method extends (...args: infer Args) => any
    ? Args
    : never


type GetArguments1<
    Method extends (p1: any, ...args: any[]) => any,
> = Method extends (p1: any, ...args: infer Args) => any
    ? Args
    : never

type GetArguments2<
Method extends (p1: any, p2: any, ...args: any[]) => any,
> = Method extends (p1: any, p2: any, ...args: infer Args) => any
    ? Args
    : never

type GetArguments3<
Method extends (p1: any, p2: any, p3: any, ...args: any[]) => any,
> = Method extends (p1: any, p2: any, p3: any, ...args: infer Args) => any
    ? Args
    : never

`)
