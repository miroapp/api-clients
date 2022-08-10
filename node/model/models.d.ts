/// <reference types="node" />
/// <reference types="node" />
import localVarRequest from 'request';
export * from './appCardCreateRequest';
export * from './appCardData';
export * from './appCardDataChanges';
export * from './appCardItem';
export * from './appCardStyle';
export * from './appCardUpdateRequest';
export * from './board';
export * from './boardChanges';
export * from './boardDataClassificationLabel';
export * from './boardLinks';
export * from './boardMember';
export * from './boardMemberChanges';
export * from './boardMemberWithLinks';
export * from './boardMembersInvite';
export * from './boardMembersPagedResponse';
export * from './boardPermissionsPolicy';
export * from './boardPolicy';
export * from './boardPolicyChange';
export * from './boardSharingPolicy';
export * from './boardSharingPolicyChange';
export * from './boardWithLinks';
export * from './boardsPagedResponse';
export * from './caption';
export * from './cardCreateRequest';
export * from './cardData';
export * from './cardItem';
export * from './cardStyle';
export * from './cardUpdateRequest';
export * from './connectorChangesData';
export * from './connectorCreationData';
export * from './connectorStyle';
export * from './connectorWithLinks';
export * from './connectorsCursorPaged';
export * from './createGroupRequest';
export * from './createPictureRequest';
export * from './createTeamRequest';
export * from './createdBy';
export * from './customField';
export * from './customSimpleSearchResultsGroupResource';
export * from './customSimpleSearchResultsUserResource';
export * from './dataClassificationLabel';
export * from './dataClassificationLabelId';
export * from './dataClassificationOrganizationSettings';
export * from './dataClassificationTeamSettings';
export * from './documentCreateRequest';
export * from './documentData';
export * from './documentItem';
export * from './documentUpdateRequest';
export * from './documentUrlData';
export * from './documentUrlDataChanges';
export * from './embedCreateRequest';
export * from './embedData';
export * from './embedItem';
export * from './embedUpdateRequest';
export * from './embedUrlData';
export * from './embedUrlDataChanges';
export * from './enterpriseGetOrganizationMembers200Response';
export * from './errorResponse';
export * from './fixedRatioGeometry';
export * from './fixedRatioNoRotationGeometry';
export * from './frameChanges';
export * from './frameCreateRequest';
export * from './frameData';
export * from './frameItem';
export * from './frameStyle';
export * from './frameUpdateRequest';
export * from './genericItem';
export * from './genericItemCursorPaged';
export * from './genericItemUpdate';
export * from './geometry';
export * from './geometryNoRotation';
export * from './getBoards400Response';
export * from './getTagsResponse';
export * from './groupListResponse';
export * from './groupListResponseAllOf';
export * from './groupMember';
export * from './groupSchema';
export * from './groupSchemaMeta';
export * from './imageCreateRequest';
export * from './imageData';
export * from './imageItem';
export * from './imageUpdateRequest';
export * from './imageUrlData';
export * from './imageUrlDataChanges';
export * from './invitationError';
export * from './invitationResult';
export * from './itemConnectionChangesData';
export * from './itemConnectionCreationData';
export * from './itemConnectionWithLinks';
export * from './itemPagedResponse';
export * from './listResponse';
export * from './meta';
export * from './modifiedBy';
export * from './organization';
export * from './organizationMember';
export * from './organizationMembersSearchByEmailsResponse';
export * from './organizationMembersSearchQuery';
export * from './organizationMembersSearchResponse';
export * from './pageLinks';
export * from './parent';
export * from './parentLinksEnvelope';
export * from './picture';
export * from './position';
export * from './positionChange';
export * from './relativeOffset';
export * from './scimResource';
export * from './selfLink';
export * from './shapeCreateRequest';
export * from './shapeData';
export * from './shapeItem';
export * from './shapeStyle';
export * from './shapeUpdateRequest';
export * from './stickyNoteCreateRequest';
export * from './stickyNoteData';
export * from './stickyNoteItem';
export * from './stickyNoteStyle';
export * from './stickyNoteUpdateRequest';
export * from './tag';
export * from './tagCreateRequest';
export * from './tagUpdateRequest';
export * from './tagWithLinks';
export * from './tagsPagedResponse';
export * from './team';
export * from './teamAccountDiscoverySettings';
export * from './teamAccountDiscoverySettingsChanges';
export * from './teamChanges';
export * from './teamCollaborationSettings';
export * from './teamCollaborationSettingsChanges';
export * from './teamCopyAccessLevelSettings';
export * from './teamCopyAccessLevelSettingsChanges';
export * from './teamInvitationSettings';
export * from './teamInvitationSettingsChanges';
export * from './teamMember';
export * from './teamMemberChanges';
export * from './teamMemberInvite';
export * from './teamSettings';
export * from './teamSettingsChanges';
export * from './teamSharingPolicySettings';
export * from './teamSharingPolicySettingsChanges';
export * from './textCreateRequest';
export * from './textData';
export * from './textItem';
export * from './textStyle';
export * from './textUpdateRequest';
export * from './updateBoardsDataClassificationLabel';
export * from './updateBoardsDataClassificationLabelRequest';
export * from './updateGroupRequest';
export * from './updateGroupRequestOperationsInner';
export * from './updateTeamSettingsRequest';
export * from './updateUserRequest';
export * from './updateUserRequestOperationsInner';
export * from './userId';
export * from './userInfoShort';
export * from './userListResponse';
export * from './userListResponseAllOf';
export * from './userSchema';
export * from './userSchemaEmailsInner';
export * from './userSchemaGroupsInner';
export * from './userSchemaMeta';
export * from './userSchemaName';
export * from './userSchemaPhotosInner';
export * from './userSchemaRolesInner';
export * from './userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User';
export * from './userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager';
export * from './widgetData';
export * from './widgetLinks';
export * from './widthOnlyAdjustableGeometry';
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export declare type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
