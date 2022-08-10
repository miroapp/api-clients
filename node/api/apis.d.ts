/// <reference types="node" />
import * as http from 'http';
export declare class HttpError extends Error {
    response: http.IncomingMessage;
    body: any;
    statusCode?: number;
    constructor(response: http.IncomingMessage, body: any, statusCode?: number);
}
export { RequestFile } from '../model/models';
export declare function MiroApi(accessToken: string): {
    scimCreateUser: (xClientType?: string, userSchema?: import("../model/userSchema").UserSchema) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/userSchema").UserSchema;
    }>;
    scimDeleteUser: (userId: number) => Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    scimGetUser: (userId: number) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/userSchema").UserSchema;
    }>;
    scimGetUsers: (attributes?: string, filter?: string, startIndex?: number, count?: number, sortBy?: string, sortOrder?: "ascending" | "descending") => Promise<{
        response: http.IncomingMessage;
        body: import("../model/userListResponse").UserListResponse;
    }>;
    scimReplaceUser: (userId: number, xClientType?: string, userSchema?: import("../model/userSchema").UserSchema) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/userSchema").UserSchema;
    }>;
    scimUpdateUser: (userId: number, xClientType?: string, updateUserRequest?: import("../model/updateUserRequest").UpdateUserRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/userSchema").UserSchema;
    }>;
    createTextItem: (boardId: string, textCreateRequest: import("../model/textCreateRequest").TextCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/textItem").TextItem;
    }>;
    deleteTextItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getTextItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/textItem").TextItem;
    }>;
    updateTextItem: (boardId: string, itemId: string, textUpdateRequest: import("../model/textUpdateRequest").TextUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/textItem").TextItem;
    }>;
    enterpriseCreateTeam: (orgId: string, createTeamRequest: import("../model/createTeamRequest").CreateTeamRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/team").Team;
    }>;
    enterpriseDeleteTeam: (orgId: string, teamId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    enterpriseGetTeam: (orgId: string, teamId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/team").Team;
    }>;
    enterpriseGetTeams: (orgId: string, limit?: number, cursor?: string, filterQuery?: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/team").Team[];
    }>;
    enterpriseUpdateTeam: (orgId: string, teamId: string, teamChanges: import("../model/teamChanges").TeamChanges) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/team").Team;
    }>;
    enterpriseGetDefaultTeamSettings: (orgId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/teamSettings").TeamSettings;
    }>;
    enterpriseGetTeamSettings: (teamId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/teamSettings").TeamSettings;
    }>;
    enterpriseUpdateTeamSettings: (teamId: string, teamSettingsChanges: import("../model/teamSettingsChanges").TeamSettingsChanges) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/teamSettings").TeamSettings;
    }>;
    enterpriseDeleteTeamMember: (orgId: string, teamId: string, memberId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    enterpriseGetTeamMember: (orgId: string, teamId: string, memberId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/teamMember").TeamMember;
    }>;
    enterpriseGetTeamMembers: (orgId: string, teamId: string, limit?: number, cursor?: string, filterQuery?: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/teamMember").TeamMember[];
    }>;
    enterpriseInviteTeamMember: (orgId: string, teamId: string, teamMemberInvite: import("../model/teamMemberInvite").TeamMemberInvite) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/invitationResult").InvitationResult;
    }>;
    enterpriseUpdateTeamMember: (orgId: string, teamId: string, memberId: string, teamMemberChanges: import("../model/teamMemberChanges").TeamMemberChanges) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/teamMember").TeamMember;
    }>;
    attachTagToItem: (boardId: string, itemId: string, tagId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    createTag: (boardId: string, tagCreateRequest: import("../model/tagCreateRequest").TagCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/tagWithLinks").TagWithLinks;
    }>;
    deleteTag: (boardId: string, tagId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getItemsByTag: (boardId: string, tagId: string, limit?: string, offset?: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/itemPagedResponse").ItemPagedResponse;
    }>;
    getTag: (boardId: string, tagId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/tagWithLinks").TagWithLinks;
    }>;
    getTagsFromBoard: (boardId: string, limit?: string, offset?: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/tagsPagedResponse").TagsPagedResponse;
    }>;
    getTagsFromItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/getTagsResponse").GetTagsResponse;
    }>;
    removeTagFromItem: (boardId: string, itemId: string, tagId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    updateTag: (boardId: string, tagId: string, tagUpdateRequest: import("../model/tagUpdateRequest").TagUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/tagWithLinks").TagWithLinks;
    }>;
    createStickyNoteItem: (boardId: string, stickyNoteCreateRequest: import("../model/stickyNoteCreateRequest").StickyNoteCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/stickyNoteItem").StickyNoteItem;
    }>;
    deleteStickyNoteItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getStickyNoteItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/stickyNoteItem").StickyNoteItem;
    }>;
    updateStickyNoteItem: (boardId: string, itemId: string, stickyNoteUpdateRequest: import("../model/stickyNoteUpdateRequest").StickyNoteUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/stickyNoteItem").StickyNoteItem;
    }>;
    createShapeItem: (boardId: string, shapeCreateRequest: import("../model/shapeCreateRequest").ShapeCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/shapeItem").ShapeItem;
    }>;
    deleteShapeItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getShapeItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/shapeItem").ShapeItem;
    }>;
    updateShapeItem: (boardId: string, itemId: string, shapeUpdateRequest: import("../model/shapeUpdateRequest").ShapeUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/shapeItem").ShapeItem;
    }>;
    enterpriseGetOrganization: (orgId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/organization").Organization;
    }>;
    enterpriseGetOrganizationMember: (orgId: string, memberId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/organizationMember").OrganizationMember;
    }>;
    enterpriseGetOrganizationMembers: (orgId: string, query: import("../model/organizationMembersSearchQuery").OrganizationMembersSearchQuery) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/enterpriseGetOrganizationMembers200Response").EnterpriseGetOrganizationMembers200Response;
    }>;
    getSpecificItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/genericItem").GenericItem;
    }>;
    updateItemPositionOrParent: (boardId: string, itemId: string, genericItemUpdate: import("../model/genericItemUpdate").GenericItemUpdate) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/genericItem").GenericItem;
    }>;
    createImageItemUsingUrl: (boardId: string, imageCreateRequest: import("../model/imageCreateRequest").ImageCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/imageItem").ImageItem;
    }>;
    deleteImageItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getImageItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/imageItem").ImageItem;
    }>;
    updateImageItemUsingUrl: (boardId: string, itemId: string, imageUpdateRequest: import("../model/imageUpdateRequest").ImageUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/imageItem").ImageItem;
    }>;
    scimCreateGroup: (createGroupRequest?: import("../model/createGroupRequest").CreateGroupRequest) => Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    scimDeleteGroup: (groupId: number) => Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    scimGetGroup: (groupId: number) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/groupSchema").GroupSchema;
    }>;
    scimGetGroups: (attributes?: string, filter?: string, startIndex?: number, count?: number, sortBy?: string, sortOrder?: "ascending" | "descending") => Promise<{
        response: http.IncomingMessage;
        body: import("../model/groupListResponse").GroupListResponse;
    }>;
    scimUpdateGroup: (groupId: number, updateGroupRequest?: import("../model/updateGroupRequest").UpdateGroupRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/groupSchema").GroupSchema;
    }>;
    createFrameItem: (boardId: string, frameCreateRequest: import("../model/frameCreateRequest").FrameCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/frameItem").FrameItem;
    }>;
    deleteFrameItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getFrameItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/frameItem").FrameItem;
    }>;
    updateFrameItem: (boardId: string, itemId: string, frameUpdateRequest: import("../model/frameUpdateRequest").FrameUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/frameItem").FrameItem;
    }>;
    createEmbedItem: (boardId: string, embedCreateRequest: import("../model/embedCreateRequest").EmbedCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/embedItem").EmbedItem;
    }>;
    deleteEmbedItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getEmbedItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/embedItem").EmbedItem;
    }>;
    updateEmbedItem: (boardId: string, itemId: string, embedUpdateRequest: import("../model/embedUpdateRequest").EmbedUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/embedItem").EmbedItem;
    }>;
    createDocumentItemUsingUrl: (boardId: string, documentCreateRequest: import("../model/documentCreateRequest").DocumentCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/documentItem").DocumentItem;
    }>;
    deleteDocumentItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getDocumentItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/documentItem").DocumentItem;
    }>;
    updateDocumentItemUsingUrl: (boardId: string, itemId: string, documentUpdateRequest: import("../model/documentUpdateRequest").DocumentUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/documentItem").DocumentItem;
    }>;
    createConnector: (boardId: string, connectorCreationData: import("../model/connectorCreationData").ConnectorCreationData) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/connectorWithLinks").ConnectorWithLinks;
    }>;
    deleteConnector: (boardId: string, connectorId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getConnector: (boardId: string, connectorId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/connectorWithLinks").ConnectorWithLinks;
    }>;
    getConnectors: (boardId: string, limit?: string, cursor?: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/connectorsCursorPaged").ConnectorsCursorPaged;
    }>;
    updateConnector: (boardId: string, connectorId: string, connectorChangesData: import("../model/connectorChangesData").ConnectorChangesData) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/connectorWithLinks").ConnectorWithLinks;
    }>;
    createCardItem: (boardId: string, cardCreateRequest: import("../model/cardCreateRequest").CardCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/cardItem").CardItem;
    }>;
    deleteCardItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getCardItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/cardItem").CardItem;
    }>;
    updateCardItem: (boardId: string, itemId: string, cardUpdateRequest: import("../model/cardUpdateRequest").CardUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/cardItem").CardItem;
    }>;
    copyBoard: (copyFrom: string, boardChanges?: import("../model/boardChanges").BoardChanges) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardWithLinks").BoardWithLinks;
    }>;
    createBoard: (boardChanges?: import("../model/boardChanges").BoardChanges) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardWithLinks").BoardWithLinks;
    }>;
    deleteBoard: (boardId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getBoards: (teamId?: string, query?: string, owner?: string, limit?: string, offset?: string, sort?: "default" | "last_modified" | "last_opened" | "last_created" | "alphabetically") => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardsPagedResponse").BoardsPagedResponse;
    }>;
    getSpecificBoard: (boardId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardWithLinks").BoardWithLinks;
    }>;
    updateBoard: (boardId: string, boardChanges: import("../model/boardChanges").BoardChanges) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardWithLinks").BoardWithLinks;
    }>;
    getBoardMembers: (boardId: string, limit?: string, offset?: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardMembersPagedResponse").BoardMembersPagedResponse;
    }>;
    getSpecificBoardMember: (boardId: string, boardMemberId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardMemberWithLinks").BoardMemberWithLinks;
    }>;
    removeBoardMember: (boardId: string, boardMemberId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    shareBoard: (boardId: string, boardMembersInvite: import("../model/boardMembersInvite").BoardMembersInvite) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/invitationResult").InvitationResult;
    }>;
    updateBoardMember: (boardId: string, boardMemberId: string, boardMemberChanges: import("../model/boardMemberChanges").BoardMemberChanges) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardMemberWithLinks").BoardMemberWithLinks;
    }>;
    enterpriseDataclassificationTeamBoardsBulk: (orgId: string, teamId: string, updateBoardsDataClassificationLabelRequest: import("../model/updateBoardsDataClassificationLabelRequest").UpdateBoardsDataClassificationLabelRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/updateBoardsDataClassificationLabel").UpdateBoardsDataClassificationLabel;
    }>;
    enterpriseDataclassificationTeamSettingsGet: (orgId: string, teamId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/dataClassificationTeamSettings").DataClassificationTeamSettings;
    }>;
    enterpriseDataclassificationTeamSettingsSet: (orgId: string, teamId: string, updateTeamSettingsRequest: import("../model/updateTeamSettingsRequest").UpdateTeamSettingsRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/dataClassificationTeamSettings").DataClassificationTeamSettings;
    }>;
    enterpriseDataclassificationOrganizationSettingsGet: (orgId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/dataClassificationOrganizationSettings").DataClassificationOrganizationSettings;
    }>;
    enterpriseDataclassificationBoardGet: (orgId: string, teamId: string, boardId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardDataClassificationLabel").BoardDataClassificationLabel;
    }>;
    enterpriseDataclassificationBoardSet: (orgId: string, teamId: string, boardId: string, dataClassificationLabelId: import("../model/dataClassificationLabelId").DataClassificationLabelId) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/boardDataClassificationLabel").BoardDataClassificationLabel;
    }>;
    createAppCardItem: (boardId: string, appCardCreateRequest: import("../model/appCardCreateRequest").AppCardCreateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/appCardItem").AppCardItem;
    }>;
    deleteAppCardItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    getAppCardItem: (boardId: string, itemId: string) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/appCardItem").AppCardItem;
    }>;
    updateAppCardItem: (boardId: string, itemId: string, appCardUpdateRequest: import("../model/appCardUpdateRequest").AppCardUpdateRequest) => Promise<{
        response: http.IncomingMessage;
        body: import("../model/appCardItem").AppCardItem;
    }>;
};
