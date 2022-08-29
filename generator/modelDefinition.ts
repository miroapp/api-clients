const MODELS = {
  Api: {
    props: [],
    extendedModel: {
      name: 'Api',
      path: '../highlevel/Api',
    },
    inherits: 'Board',
    methods: [
      'createBoard',
      {method: 'getSpecificBoard', alias: 'getBoard'},
      {method: 'getBoards', returns: 'Board', paginated: 'data'},
      {
        method: 'enterpriseGetOrganization',
        alias: 'getOrganization',
        returns: 'Organization',
      },
    ],
  },

  Organization: {
    props: ['orgId'],
    extendedModel: {
      name: 'Organization',
      path: '../model/organization',
    },
    methods: [
      {method: 'enterpriseCreateTeam', alias: 'createTeam', returns: 'Team'},
      {
        method: 'enterpriseDataclassificationOrganizationSettingsGet',
        alias: 'getDataClassification',
      },

      {
        method: 'enterpriseGetDefaultTeamSettings',
        alias: 'getDefaultTeamSettings',
        returns: 'TeamSettings',
      },
      {
        method: 'enterpriseGetOrganizationMember',
        alias: 'getOrganizationMember',
      },
      {
        method: 'enterpriseGetOrganizationMembers',
        alias: 'getOrganizationMembers',
        returns: 'OrganizationMember',
        paginated: 'data',
      },
      {method: 'enterpriseGetTeam', alias: 'getTeam', returns: 'Team'},
      {
        method: 'enterpriseGetTeams',
        alias: 'getTeams',
        returns: 'Team',
        paginated: true,
      },
    ],
  },

  OrganizationMember: {
    props: ['orgId', 'userId'],
    extendedModel: {
      name: 'OrganizationMember',
      path: '../model/organizationMember',
    },
    methods: [],
  },

  Team: {
    props: ['orgId', 'teamId'],
    extendedModel: {
      name: 'Team',
      path: 'Team',
    },
    methods: [
      {method: 'enterpriseDeleteTeam', alias: 'deleteTeam'},
      {method: 'enterpriseDeleteTeamMember', alias: 'deleteTeamMember'},
      {
        method: 'enterpriseDataclassificationBoardGet',
        alias: 'getBoardDataClassification',
      },
      {
        method: 'enterpriseDataclassificationBoardSet',
        alias: 'setBoardDataClassification',
      },
      {
        method: 'enterpriseDataclassificationTeamBoardsBulk',
        alias: 'setBoardDataClassificationBulk',
      },

      {
        method: 'enterpriseDataclassificationTeamSettingsGet',
        alias: 'getDataClassification',
      },
      {
        method: 'enterpriseDataclassificationTeamSettingsSet',
        alias: 'setDataClassification',
      },

      {method: 'enterpriseInviteTeamMember', alias: 'inviteTeamMember'},
      {method: 'enterpriseGetTeamMember', alias: 'getTeamMember'},
      {
        method: 'enterpriseGetTeamMembers',
        alias: 'getTeamMembers',
        returns: 'TeamMember',
        paginated: true,
      },

      {method: 'enterpriseUpdateTeam', alias: 'updateTeam'},

      {
        method: 'enterpriseGetTeamSettings',
        alias: 'getTeamSettings',
        topLevelCall: true,
      },
      {
        method: 'enterpriseUpdateTeamSettings',
        alias: 'updateTeamSettings',
        topLevelCall: true,
      },
    ],
  },

  BoardDataClassification: {
    props: [],
    extendedModel: {
      name: 'BoardDataClassificationLabel',
      path: '../model/boardDataClassificationLabel',
    },
    methods: [],
  },

  DataClassification: {
    props: [],
    extendedModel: {
      name: 'DataClassificationOrganizationSettings',
      path: '../model/dataClassificationOrganizationSettings',
    },
    methods: [],
  },

  TeamMember: {
    id: 'memberId',
    props: ['orgId', 'teamId', 'memberId'],
    extendedModel: {
      name: 'TeamMember',
      path: '../model/teamMember',
    },
    methods: [{method: 'enterpriseUpdateTeamMember', alias: 'update'}],
  },

  TeamSettings: {
    props: [],
    extendedModel: {
      name: 'TeamSettings',
      path: '../model/teamSettings',
    },
    methods: [],
  },

  Board: {
    props: ['id'],
    extendedModel: {
      name: 'Board',
      path: 'Board',
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

      {
        method: 'getBoardMembers',
        alias: 'getMembers',
        paginated: 'data',
        returns: 'BoardMember',
      },
      'getAppCardItem',
      'getCardItem',
      'getConnector',
      {method: 'getConnectors', returns: 'Connector', paginated: 'data'},
      {method: 'getDocumentItem', returns: 'DocumentItem'},
      'getEmbedItem',
      'getFrameItem',
      'getImageItem',
      'getShapeItem',
      {
        method: 'getSpecificBoardMember',
        alias: 'getMember',
        returns: 'BoardMember',
      },
      {method: 'getSpecificItem', alias: 'getItem', returns: 'Item'},
      'getStickyNoteItem',
      'getTag',
      {
        method: 'getTagsFromBoard',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'data',
      },
      'getTextItem',
      {method: 'getItems', returns: 'Item', paginated: 'data'},
      {method: 'getItemsWithinFrame', returns: 'Item', paginated: 'data'},

      {method: 'copyBoard', alias: 'copy'},
      {method: 'shareBoard', alias: 'share'},
      {method: 'updateBoard', alias: 'update'},
      {method: 'deleteBoard', alias: 'delete'},
      {method: 'removeBoardMember', alias: 'removeMember'},

      {method: 'removeTagFromItem', alias: 'removeTag'},
    ],
  },

  BoardMember: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'BoardMember',
      path: '../model/boardMember',
    },
    methods: [{method: 'updateBoardMember', alias: 'update'}],
  },

  Item: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
      path: 'Item',
    },
    methods: [
      {method: 'updateItemPositionOrParent', alias: 'update'},
      {method: 'deleteItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  AppCardItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateAppCardItem', alias: 'update'},
      {method: 'deleteAppCardItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  CardItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateCardItem', alias: 'update'},
      {method: 'deleteCardItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  DocumentItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateDocumentItemUsingUrl', alias: 'update'},
      {method: 'deleteDocumentItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  EmbedItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateEmbedItem', alias: 'update'},
      {method: 'deleteEmbedItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  FrameItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'FrameItem',
      path: '../model/frameItem',
    },
    methods: [
      {method: 'updateFrameItem', alias: 'update'},
      {method: 'deleteFrameItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  ImageItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateImageItemUsingUrl', alias: 'update'},
      {method: 'deleteImageItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  ShapeItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateShapeItem', alias: 'update'},
      {method: 'deleteShapeItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  StickyNoteItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateStickyNoteItem', alias: 'update'},
      {method: 'deleteStickyNoteItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  TextItem: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Item',
    },
    methods: [
      {method: 'updateTextItem', alias: 'update'},
      {method: 'deleteTextItem', alias: 'delete'},
      {
        method: 'getTagsFromItem',
        alias: 'getTags',
        returns: 'Tag',
        paginated: 'tags',
      },
      {method: 'removeTagFromItem', alias: 'removeTag'},
      {method: 'attachTagToItem', alias: 'attachTag'},
    ],
  },

  Connector: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'ConnectorWithLinks',
      path: '../model/connectorWithLinks',
    },
    methods: [
      {method: 'updateConnector', alias: 'update'},
      {method: 'deleteConnector', alias: 'delete'},
    ],
  },

  Tag: {
    props: ['boardId', 'id'],
    extendedModel: {
      name: 'Tag',
      path: '../model/tag',
    },
    methods: [
      {method: 'updateTag', alias: 'update'},
      {method: 'deleteTag', alias: 'delete'},
      {method: 'getItemsByTag', returns: 'Item', paginated: 'data'},
    ],
  },
}
export type Models = Record<ModelName, Model>

export function getModels() {
  const normalModels: Record<string, Model> = {}
  for (const name of Object.keys(MODELS)) {
    normalModels[name] = normalizeTheModel(MODELS[name])
  }
  return normalModels
}

export interface SimpleModel {
  id?: string
  props: string[]
  extendedModel?: {
    name: string
    path: string
  }
  inherits?: ModelName
  methods: Array<
    | string
    | {
        method: string
        alias?: string
        returns?: ModelName
        paginated?: string | true
        topLevelCall?: boolean
      }
  >
}

export interface Model {
  id: string
  props: string[]
  extendedModel?: {
    name: string
    path: string
  }
  inherits?: ModelName
  methods: Array<{
    method: string
    alias: string
    returns: ModelName | undefined
    paginated?: string | true
    topLevelCall: boolean
  }>
}

function deriveReturnTypeFromName(name: string) {
  return name.startsWith('get') || name.startsWith('create') ? name.replace(/^(create|get)/, '') : undefined
}

function isCorrectModelName(n: string | undefined): n is ModelName | undefined {
  return n === undefined || MODELS[n]
}

export function normalizeTheModel(model: SimpleModel): Model {
  return {
    id: model.id || 'id',
    props: model.props || [],
    extendedModel: model.extendedModel,
    inherits: model.inherits,
    methods: model.methods.map((methodConfig) => {
      const method = typeof methodConfig === 'string' ? {method: methodConfig} : methodConfig
      const alias = method.alias || method.method
      const returns = method.returns || deriveReturnTypeFromName(alias)
      if (!isCorrectModelName(returns)) throw new Error('Undefined model ' + returns)

      return {
        method: method.method,
        alias,
        returns,
        paginated: method.paginated,
        topLevelCall: !!method.topLevelCall,
      }
    }),
  }
}

type ModelName = keyof typeof MODELS
