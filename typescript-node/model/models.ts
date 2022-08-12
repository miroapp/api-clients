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
    }
}



import { AppCardCreateRequest } from './appCardCreateRequest';
import { AppCardData } from './appCardData';
import { AppCardDataChanges } from './appCardDataChanges';
import { AppCardItem } from './appCardItem';
import { AppCardStyle } from './appCardStyle';
import { AppCardUpdateRequest } from './appCardUpdateRequest';
import { Board } from './board';
import { BoardChanges } from './boardChanges';
import { BoardDataClassificationLabel } from './boardDataClassificationLabel';
import { BoardLinks } from './boardLinks';
import { BoardMember } from './boardMember';
import { BoardMemberChanges } from './boardMemberChanges';
import { BoardMemberWithLinks } from './boardMemberWithLinks';
import { BoardMembersInvite } from './boardMembersInvite';
import { BoardMembersPagedResponse } from './boardMembersPagedResponse';
import { BoardPermissionsPolicy } from './boardPermissionsPolicy';
import { BoardPolicy } from './boardPolicy';
import { BoardPolicyChange } from './boardPolicyChange';
import { BoardSharingPolicy } from './boardSharingPolicy';
import { BoardSharingPolicyChange } from './boardSharingPolicyChange';
import { BoardWithLinks } from './boardWithLinks';
import { BoardsPagedResponse } from './boardsPagedResponse';
import { Caption } from './caption';
import { CardCreateRequest } from './cardCreateRequest';
import { CardData } from './cardData';
import { CardItem } from './cardItem';
import { CardStyle } from './cardStyle';
import { CardUpdateRequest } from './cardUpdateRequest';
import { ConnectorChangesData } from './connectorChangesData';
import { ConnectorCreationData } from './connectorCreationData';
import { ConnectorStyle } from './connectorStyle';
import { ConnectorWithLinks } from './connectorWithLinks';
import { ConnectorsCursorPaged } from './connectorsCursorPaged';
import { CreateGroupRequest } from './createGroupRequest';
import { CreatePictureRequest } from './createPictureRequest';
import { CreateTeamRequest } from './createTeamRequest';
import { CreatedBy } from './createdBy';
import { CustomField } from './customField';
import { CustomSimpleSearchResultsGroupResource } from './customSimpleSearchResultsGroupResource';
import { CustomSimpleSearchResultsUserResource } from './customSimpleSearchResultsUserResource';
import { DataClassificationLabel } from './dataClassificationLabel';
import { DataClassificationLabelId } from './dataClassificationLabelId';
import { DataClassificationOrganizationSettings } from './dataClassificationOrganizationSettings';
import { DataClassificationTeamSettings } from './dataClassificationTeamSettings';
import { DocumentCreateRequest } from './documentCreateRequest';
import { DocumentData } from './documentData';
import { DocumentItem } from './documentItem';
import { DocumentUpdateRequest } from './documentUpdateRequest';
import { DocumentUrlData } from './documentUrlData';
import { DocumentUrlDataChanges } from './documentUrlDataChanges';
import { EmbedCreateRequest } from './embedCreateRequest';
import { EmbedData } from './embedData';
import { EmbedItem } from './embedItem';
import { EmbedUpdateRequest } from './embedUpdateRequest';
import { EmbedUrlData } from './embedUrlData';
import { EmbedUrlDataChanges } from './embedUrlDataChanges';
import { EnterpriseGetOrganizationMembers200Response } from './enterpriseGetOrganizationMembers200Response';
import { ErrorResponse } from './errorResponse';
import { FixedRatioGeometry } from './fixedRatioGeometry';
import { FixedRatioNoRotationGeometry } from './fixedRatioNoRotationGeometry';
import { FrameChanges } from './frameChanges';
import { FrameCreateRequest } from './frameCreateRequest';
import { FrameData } from './frameData';
import { FrameItem } from './frameItem';
import { FrameStyle } from './frameStyle';
import { FrameUpdateRequest } from './frameUpdateRequest';
import { GenericItem } from './genericItem';
import { GenericItemCursorPaged } from './genericItemCursorPaged';
import { GenericItemUpdate } from './genericItemUpdate';
import { Geometry } from './geometry';
import { GeometryNoRotation } from './geometryNoRotation';
import { GetBoards400Response } from './getBoards400Response';
import { GetTagsResponse } from './getTagsResponse';
import { GroupListResponse } from './groupListResponse';
import { GroupListResponseAllOf } from './groupListResponseAllOf';
import { GroupMember } from './groupMember';
import { GroupSchema } from './groupSchema';
import { GroupSchemaMeta } from './groupSchemaMeta';
import { ImageCreateRequest } from './imageCreateRequest';
import { ImageData } from './imageData';
import { ImageItem } from './imageItem';
import { ImageUpdateRequest } from './imageUpdateRequest';
import { ImageUrlData } from './imageUrlData';
import { ImageUrlDataChanges } from './imageUrlDataChanges';
import { InvitationError } from './invitationError';
import { InvitationResult } from './invitationResult';
import { ItemConnectionChangesData } from './itemConnectionChangesData';
import { ItemConnectionCreationData } from './itemConnectionCreationData';
import { ItemConnectionWithLinks } from './itemConnectionWithLinks';
import { ItemPagedResponse } from './itemPagedResponse';
import { ListResponse } from './listResponse';
import { Meta } from './meta';
import { ModifiedBy } from './modifiedBy';
import { Organization } from './organization';
import { OrganizationMember } from './organizationMember';
import { OrganizationMembersSearchByEmailsResponse } from './organizationMembersSearchByEmailsResponse';
import { OrganizationMembersSearchQuery } from './organizationMembersSearchQuery';
import { OrganizationMembersSearchResponse } from './organizationMembersSearchResponse';
import { PageLinks } from './pageLinks';
import { Parent } from './parent';
import { ParentLinksEnvelope } from './parentLinksEnvelope';
import { Picture } from './picture';
import { Position } from './position';
import { PositionChange } from './positionChange';
import { RelativeOffset } from './relativeOffset';
import { ScimResource } from './scimResource';
import { SelfLink } from './selfLink';
import { ShapeCreateRequest } from './shapeCreateRequest';
import { ShapeData } from './shapeData';
import { ShapeItem } from './shapeItem';
import { ShapeStyle } from './shapeStyle';
import { ShapeUpdateRequest } from './shapeUpdateRequest';
import { StickyNoteCreateRequest } from './stickyNoteCreateRequest';
import { StickyNoteData } from './stickyNoteData';
import { StickyNoteItem } from './stickyNoteItem';
import { StickyNoteStyle } from './stickyNoteStyle';
import { StickyNoteUpdateRequest } from './stickyNoteUpdateRequest';
import { Tag } from './tag';
import { TagCreateRequest } from './tagCreateRequest';
import { TagUpdateRequest } from './tagUpdateRequest';
import { TagWithLinks } from './tagWithLinks';
import { TagsPagedResponse } from './tagsPagedResponse';
import { Team } from './team';
import { TeamAccountDiscoverySettings } from './teamAccountDiscoverySettings';
import { TeamAccountDiscoverySettingsChanges } from './teamAccountDiscoverySettingsChanges';
import { TeamChanges } from './teamChanges';
import { TeamCollaborationSettings } from './teamCollaborationSettings';
import { TeamCollaborationSettingsChanges } from './teamCollaborationSettingsChanges';
import { TeamCopyAccessLevelSettings } from './teamCopyAccessLevelSettings';
import { TeamCopyAccessLevelSettingsChanges } from './teamCopyAccessLevelSettingsChanges';
import { TeamInvitationSettings } from './teamInvitationSettings';
import { TeamInvitationSettingsChanges } from './teamInvitationSettingsChanges';
import { TeamMember } from './teamMember';
import { TeamMemberChanges } from './teamMemberChanges';
import { TeamMemberInvite } from './teamMemberInvite';
import { TeamSettings } from './teamSettings';
import { TeamSettingsChanges } from './teamSettingsChanges';
import { TeamSharingPolicySettings } from './teamSharingPolicySettings';
import { TeamSharingPolicySettingsChanges } from './teamSharingPolicySettingsChanges';
import { TextCreateRequest } from './textCreateRequest';
import { TextData } from './textData';
import { TextItem } from './textItem';
import { TextStyle } from './textStyle';
import { TextUpdateRequest } from './textUpdateRequest';
import { UpdateBoardsDataClassificationLabel } from './updateBoardsDataClassificationLabel';
import { UpdateBoardsDataClassificationLabelRequest } from './updateBoardsDataClassificationLabelRequest';
import { UpdateGroupRequest } from './updateGroupRequest';
import { UpdateGroupRequestOperationsInner } from './updateGroupRequestOperationsInner';
import { UpdateTeamSettingsRequest } from './updateTeamSettingsRequest';
import { UpdateUserRequest } from './updateUserRequest';
import { UpdateUserRequestOperationsInner } from './updateUserRequestOperationsInner';
import { UserId } from './userId';
import { UserInfoShort } from './userInfoShort';
import { UserListResponse } from './userListResponse';
import { UserListResponseAllOf } from './userListResponseAllOf';
import { UserSchema } from './userSchema';
import { UserSchemaEmailsInner } from './userSchemaEmailsInner';
import { UserSchemaGroupsInner } from './userSchemaGroupsInner';
import { UserSchemaMeta } from './userSchemaMeta';
import { UserSchemaName } from './userSchemaName';
import { UserSchemaPhotosInner } from './userSchemaPhotosInner';
import { UserSchemaRolesInner } from './userSchemaRolesInner';
import { UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User } from './userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User';
import { UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager } from './userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager';
import { WidgetData } from './widgetData';
import { WidgetLinks } from './widgetLinks';
import { WidthOnlyAdjustableGeometry } from './widthOnlyAdjustableGeometry';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AppCardData.StatusEnum": AppCardData.StatusEnum,
        "AppCardDataChanges.StatusEnum": AppCardDataChanges.StatusEnum,
        "BoardMember.RoleEnum": BoardMember.RoleEnum,
        "BoardMemberChanges.RoleEnum": BoardMemberChanges.RoleEnum,
        "BoardMemberWithLinks.RoleEnum": BoardMemberWithLinks.RoleEnum,
        "BoardMembersInvite.RoleEnum": BoardMembersInvite.RoleEnum,
        "BoardPermissionsPolicy.CollaborationToolsStartAccessEnum": BoardPermissionsPolicy.CollaborationToolsStartAccessEnum,
        "BoardPermissionsPolicy.CopyAccessEnum": BoardPermissionsPolicy.CopyAccessEnum,
        "BoardPermissionsPolicy.SharingAccessEnum": BoardPermissionsPolicy.SharingAccessEnum,
        "BoardSharingPolicy.AccessEnum": BoardSharingPolicy.AccessEnum,
        "BoardSharingPolicy.InviteToAccountAndBoardLinkAccessEnum": BoardSharingPolicy.InviteToAccountAndBoardLinkAccessEnum,
        "BoardSharingPolicy.OrganizationAccessEnum": BoardSharingPolicy.OrganizationAccessEnum,
        "BoardSharingPolicy.TeamAccessEnum": BoardSharingPolicy.TeamAccessEnum,
        "BoardSharingPolicyChange.AccessEnum": BoardSharingPolicyChange.AccessEnum,
        "BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum": BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum,
        "BoardSharingPolicyChange.OrganizationAccessEnum": BoardSharingPolicyChange.OrganizationAccessEnum,
        "BoardSharingPolicyChange.TeamAccessEnum": BoardSharingPolicyChange.TeamAccessEnum,
        "Caption.TextAlignVerticalEnum": Caption.TextAlignVerticalEnum,
        "ConnectorChangesData.ShapeEnum": ConnectorChangesData.ShapeEnum,
        "ConnectorCreationData.ShapeEnum": ConnectorCreationData.ShapeEnum,
        "ConnectorStyle.EndStrokeCapEnum": ConnectorStyle.EndStrokeCapEnum,
        "ConnectorStyle.StartStrokeCapEnum": ConnectorStyle.StartStrokeCapEnum,
        "ConnectorStyle.StrokeStyleEnum": ConnectorStyle.StrokeStyleEnum,
        "ConnectorStyle.TextOrientationEnum": ConnectorStyle.TextOrientationEnum,
        "ConnectorWithLinks.ShapeEnum": ConnectorWithLinks.ShapeEnum,
        "CustomField.IconShapeEnum": CustomField.IconShapeEnum,
        "EmbedData.ModeEnum": EmbedData.ModeEnum,
        "EmbedUrlData.ModeEnum": EmbedUrlData.ModeEnum,
        "EmbedUrlDataChanges.ModeEnum": EmbedUrlDataChanges.ModeEnum,
        "FrameChanges.FormatEnum": FrameChanges.FormatEnum,
        "FrameChanges.TypeEnum": FrameChanges.TypeEnum,
        "FrameData.FormatEnum": FrameData.FormatEnum,
        "FrameData.TypeEnum": FrameData.TypeEnum,
        "ItemConnectionChangesData.SnapToEnum": ItemConnectionChangesData.SnapToEnum,
        "ItemConnectionCreationData.SnapToEnum": ItemConnectionCreationData.SnapToEnum,
        "Organization.PlanEnum": Organization.PlanEnum,
        "OrganizationMember.LicenseEnum": OrganizationMember.LicenseEnum,
        "OrganizationMember.RoleEnum": OrganizationMember.RoleEnum,
        "Position.OriginEnum": Position.OriginEnum,
        "Position.RelativeToEnum": Position.RelativeToEnum,
        "PositionChange.OriginEnum": PositionChange.OriginEnum,
        "ShapeData.ShapeEnum": ShapeData.ShapeEnum,
        "ShapeStyle.BorderStyleEnum": ShapeStyle.BorderStyleEnum,
        "ShapeStyle.FontFamilyEnum": ShapeStyle.FontFamilyEnum,
        "ShapeStyle.TextAlignEnum": ShapeStyle.TextAlignEnum,
        "ShapeStyle.TextAlignVerticalEnum": ShapeStyle.TextAlignVerticalEnum,
        "StickyNoteData.ShapeEnum": StickyNoteData.ShapeEnum,
        "StickyNoteStyle.FillColorEnum": StickyNoteStyle.FillColorEnum,
        "StickyNoteStyle.TextAlignEnum": StickyNoteStyle.TextAlignEnum,
        "StickyNoteStyle.TextAlignVerticalEnum": StickyNoteStyle.TextAlignVerticalEnum,
        "Tag.FillColorEnum": Tag.FillColorEnum,
        "TagCreateRequest.FillColorEnum": TagCreateRequest.FillColorEnum,
        "TagUpdateRequest.FillColorEnum": TagUpdateRequest.FillColorEnum,
        "TagWithLinks.FillColorEnum": TagWithLinks.FillColorEnum,
        "TeamAccountDiscoverySettings.AccountDiscoveryEnum": TeamAccountDiscoverySettings.AccountDiscoveryEnum,
        "TeamAccountDiscoverySettingsChanges.AccountDiscoveryEnum": TeamAccountDiscoverySettingsChanges.AccountDiscoveryEnum,
        "TeamCollaborationSettings.CoOwnerRoleEnum": TeamCollaborationSettings.CoOwnerRoleEnum,
        "TeamCollaborationSettingsChanges.CoOwnerRoleEnum": TeamCollaborationSettingsChanges.CoOwnerRoleEnum,
        "TeamCopyAccessLevelSettings.CopyAccessLevelEnum": TeamCopyAccessLevelSettings.CopyAccessLevelEnum,
        "TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum": TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum,
        "TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum": TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum,
        "TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum": TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum,
        "TeamInvitationSettings.InviteExternalUsersEnum": TeamInvitationSettings.InviteExternalUsersEnum,
        "TeamInvitationSettings.WhoCanInviteEnum": TeamInvitationSettings.WhoCanInviteEnum,
        "TeamInvitationSettingsChanges.InviteExternalUsersEnum": TeamInvitationSettingsChanges.InviteExternalUsersEnum,
        "TeamInvitationSettingsChanges.WhoCanInviteEnum": TeamInvitationSettingsChanges.WhoCanInviteEnum,
        "TeamMember.UserRoleEnum": TeamMember.UserRoleEnum,
        "TeamSharingPolicySettings.CreateAssetAccessLevelEnum": TeamSharingPolicySettings.CreateAssetAccessLevelEnum,
        "TeamSharingPolicySettings.DefaultBoardAccessEnum": TeamSharingPolicySettings.DefaultBoardAccessEnum,
        "TeamSharingPolicySettings.DefaultOrganizationAccessEnum": TeamSharingPolicySettings.DefaultOrganizationAccessEnum,
        "TeamSharingPolicySettings.DefaultProjectAccessEnum": TeamSharingPolicySettings.DefaultProjectAccessEnum,
        "TeamSharingPolicySettings.MoveBoardToAccountEnum": TeamSharingPolicySettings.MoveBoardToAccountEnum,
        "TeamSharingPolicySettings.SharingOnAccountEnum": TeamSharingPolicySettings.SharingOnAccountEnum,
        "TeamSharingPolicySettings.SharingOnOrganizationEnum": TeamSharingPolicySettings.SharingOnOrganizationEnum,
        "TeamSharingPolicySettings.SharingViaPublicLinkEnum": TeamSharingPolicySettings.SharingViaPublicLinkEnum,
        "TeamSharingPolicySettings.SharingWithExternalUsersEnum": TeamSharingPolicySettings.SharingWithExternalUsersEnum,
        "TeamSharingPolicySettingsChanges.CreateAssetAccessLevelEnum": TeamSharingPolicySettingsChanges.CreateAssetAccessLevelEnum,
        "TeamSharingPolicySettingsChanges.DefaultBoardAccessEnum": TeamSharingPolicySettingsChanges.DefaultBoardAccessEnum,
        "TeamSharingPolicySettingsChanges.DefaultOrganizationAccessEnum": TeamSharingPolicySettingsChanges.DefaultOrganizationAccessEnum,
        "TeamSharingPolicySettingsChanges.DefaultProjectAccessEnum": TeamSharingPolicySettingsChanges.DefaultProjectAccessEnum,
        "TeamSharingPolicySettingsChanges.MoveBoardToAccountEnum": TeamSharingPolicySettingsChanges.MoveBoardToAccountEnum,
        "TeamSharingPolicySettingsChanges.SharingOnAccountEnum": TeamSharingPolicySettingsChanges.SharingOnAccountEnum,
        "TeamSharingPolicySettingsChanges.SharingOnOrganizationEnum": TeamSharingPolicySettingsChanges.SharingOnOrganizationEnum,
        "TeamSharingPolicySettingsChanges.SharingViaPublicLinkEnum": TeamSharingPolicySettingsChanges.SharingViaPublicLinkEnum,
        "TeamSharingPolicySettingsChanges.SharingWithExternalUsersEnum": TeamSharingPolicySettingsChanges.SharingWithExternalUsersEnum,
        "TextStyle.FontFamilyEnum": TextStyle.FontFamilyEnum,
        "TextStyle.TextAlignEnum": TextStyle.TextAlignEnum,
        "UserSchema.UserTypeEnum": UserSchema.UserTypeEnum,
        "UserSchemaRolesInner.DisplayEnum": UserSchemaRolesInner.DisplayEnum,
        "UserSchemaRolesInner.ValueEnum": UserSchemaRolesInner.ValueEnum,
        "WidgetData.ModeEnum": WidgetData.ModeEnum,
        "WidgetData.StatusEnum": WidgetData.StatusEnum,
        "WidgetData.ShapeEnum": WidgetData.ShapeEnum,
        "WidgetData.FormatEnum": WidgetData.FormatEnum,
        "WidgetData.TypeEnum": WidgetData.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AppCardCreateRequest": AppCardCreateRequest,
    "AppCardData": AppCardData,
    "AppCardDataChanges": AppCardDataChanges,
    "AppCardItem": AppCardItem,
    "AppCardStyle": AppCardStyle,
    "AppCardUpdateRequest": AppCardUpdateRequest,
    "Board": Board,
    "BoardChanges": BoardChanges,
    "BoardDataClassificationLabel": BoardDataClassificationLabel,
    "BoardLinks": BoardLinks,
    "BoardMember": BoardMember,
    "BoardMemberChanges": BoardMemberChanges,
    "BoardMemberWithLinks": BoardMemberWithLinks,
    "BoardMembersInvite": BoardMembersInvite,
    "BoardMembersPagedResponse": BoardMembersPagedResponse,
    "BoardPermissionsPolicy": BoardPermissionsPolicy,
    "BoardPolicy": BoardPolicy,
    "BoardPolicyChange": BoardPolicyChange,
    "BoardSharingPolicy": BoardSharingPolicy,
    "BoardSharingPolicyChange": BoardSharingPolicyChange,
    "BoardWithLinks": BoardWithLinks,
    "BoardsPagedResponse": BoardsPagedResponse,
    "Caption": Caption,
    "CardCreateRequest": CardCreateRequest,
    "CardData": CardData,
    "CardItem": CardItem,
    "CardStyle": CardStyle,
    "CardUpdateRequest": CardUpdateRequest,
    "ConnectorChangesData": ConnectorChangesData,
    "ConnectorCreationData": ConnectorCreationData,
    "ConnectorStyle": ConnectorStyle,
    "ConnectorWithLinks": ConnectorWithLinks,
    "ConnectorsCursorPaged": ConnectorsCursorPaged,
    "CreateGroupRequest": CreateGroupRequest,
    "CreatePictureRequest": CreatePictureRequest,
    "CreateTeamRequest": CreateTeamRequest,
    "CreatedBy": CreatedBy,
    "CustomField": CustomField,
    "CustomSimpleSearchResultsGroupResource": CustomSimpleSearchResultsGroupResource,
    "CustomSimpleSearchResultsUserResource": CustomSimpleSearchResultsUserResource,
    "DataClassificationLabel": DataClassificationLabel,
    "DataClassificationLabelId": DataClassificationLabelId,
    "DataClassificationOrganizationSettings": DataClassificationOrganizationSettings,
    "DataClassificationTeamSettings": DataClassificationTeamSettings,
    "DocumentCreateRequest": DocumentCreateRequest,
    "DocumentData": DocumentData,
    "DocumentItem": DocumentItem,
    "DocumentUpdateRequest": DocumentUpdateRequest,
    "DocumentUrlData": DocumentUrlData,
    "DocumentUrlDataChanges": DocumentUrlDataChanges,
    "EmbedCreateRequest": EmbedCreateRequest,
    "EmbedData": EmbedData,
    "EmbedItem": EmbedItem,
    "EmbedUpdateRequest": EmbedUpdateRequest,
    "EmbedUrlData": EmbedUrlData,
    "EmbedUrlDataChanges": EmbedUrlDataChanges,
    "EnterpriseGetOrganizationMembers200Response": EnterpriseGetOrganizationMembers200Response,
    "ErrorResponse": ErrorResponse,
    "FixedRatioGeometry": FixedRatioGeometry,
    "FixedRatioNoRotationGeometry": FixedRatioNoRotationGeometry,
    "FrameChanges": FrameChanges,
    "FrameCreateRequest": FrameCreateRequest,
    "FrameData": FrameData,
    "FrameItem": FrameItem,
    "FrameStyle": FrameStyle,
    "FrameUpdateRequest": FrameUpdateRequest,
    "GenericItem": GenericItem,
    "GenericItemCursorPaged": GenericItemCursorPaged,
    "GenericItemUpdate": GenericItemUpdate,
    "Geometry": Geometry,
    "GeometryNoRotation": GeometryNoRotation,
    "GetBoards400Response": GetBoards400Response,
    "GetTagsResponse": GetTagsResponse,
    "GroupListResponse": GroupListResponse,
    "GroupListResponseAllOf": GroupListResponseAllOf,
    "GroupMember": GroupMember,
    "GroupSchema": GroupSchema,
    "GroupSchemaMeta": GroupSchemaMeta,
    "ImageCreateRequest": ImageCreateRequest,
    "ImageData": ImageData,
    "ImageItem": ImageItem,
    "ImageUpdateRequest": ImageUpdateRequest,
    "ImageUrlData": ImageUrlData,
    "ImageUrlDataChanges": ImageUrlDataChanges,
    "InvitationError": InvitationError,
    "InvitationResult": InvitationResult,
    "ItemConnectionChangesData": ItemConnectionChangesData,
    "ItemConnectionCreationData": ItemConnectionCreationData,
    "ItemConnectionWithLinks": ItemConnectionWithLinks,
    "ItemPagedResponse": ItemPagedResponse,
    "ListResponse": ListResponse,
    "Meta": Meta,
    "ModifiedBy": ModifiedBy,
    "Organization": Organization,
    "OrganizationMember": OrganizationMember,
    "OrganizationMembersSearchByEmailsResponse": OrganizationMembersSearchByEmailsResponse,
    "OrganizationMembersSearchQuery": OrganizationMembersSearchQuery,
    "OrganizationMembersSearchResponse": OrganizationMembersSearchResponse,
    "PageLinks": PageLinks,
    "Parent": Parent,
    "ParentLinksEnvelope": ParentLinksEnvelope,
    "Picture": Picture,
    "Position": Position,
    "PositionChange": PositionChange,
    "RelativeOffset": RelativeOffset,
    "ScimResource": ScimResource,
    "SelfLink": SelfLink,
    "ShapeCreateRequest": ShapeCreateRequest,
    "ShapeData": ShapeData,
    "ShapeItem": ShapeItem,
    "ShapeStyle": ShapeStyle,
    "ShapeUpdateRequest": ShapeUpdateRequest,
    "StickyNoteCreateRequest": StickyNoteCreateRequest,
    "StickyNoteData": StickyNoteData,
    "StickyNoteItem": StickyNoteItem,
    "StickyNoteStyle": StickyNoteStyle,
    "StickyNoteUpdateRequest": StickyNoteUpdateRequest,
    "Tag": Tag,
    "TagCreateRequest": TagCreateRequest,
    "TagUpdateRequest": TagUpdateRequest,
    "TagWithLinks": TagWithLinks,
    "TagsPagedResponse": TagsPagedResponse,
    "Team": Team,
    "TeamAccountDiscoverySettings": TeamAccountDiscoverySettings,
    "TeamAccountDiscoverySettingsChanges": TeamAccountDiscoverySettingsChanges,
    "TeamChanges": TeamChanges,
    "TeamCollaborationSettings": TeamCollaborationSettings,
    "TeamCollaborationSettingsChanges": TeamCollaborationSettingsChanges,
    "TeamCopyAccessLevelSettings": TeamCopyAccessLevelSettings,
    "TeamCopyAccessLevelSettingsChanges": TeamCopyAccessLevelSettingsChanges,
    "TeamInvitationSettings": TeamInvitationSettings,
    "TeamInvitationSettingsChanges": TeamInvitationSettingsChanges,
    "TeamMember": TeamMember,
    "TeamMemberChanges": TeamMemberChanges,
    "TeamMemberInvite": TeamMemberInvite,
    "TeamSettings": TeamSettings,
    "TeamSettingsChanges": TeamSettingsChanges,
    "TeamSharingPolicySettings": TeamSharingPolicySettings,
    "TeamSharingPolicySettingsChanges": TeamSharingPolicySettingsChanges,
    "TextCreateRequest": TextCreateRequest,
    "TextData": TextData,
    "TextItem": TextItem,
    "TextStyle": TextStyle,
    "TextUpdateRequest": TextUpdateRequest,
    "UpdateBoardsDataClassificationLabel": UpdateBoardsDataClassificationLabel,
    "UpdateBoardsDataClassificationLabelRequest": UpdateBoardsDataClassificationLabelRequest,
    "UpdateGroupRequest": UpdateGroupRequest,
    "UpdateGroupRequestOperationsInner": UpdateGroupRequestOperationsInner,
    "UpdateTeamSettingsRequest": UpdateTeamSettingsRequest,
    "UpdateUserRequest": UpdateUserRequest,
    "UpdateUserRequestOperationsInner": UpdateUserRequestOperationsInner,
    "UserId": UserId,
    "UserInfoShort": UserInfoShort,
    "UserListResponse": UserListResponse,
    "UserListResponseAllOf": UserListResponseAllOf,
    "UserSchema": UserSchema,
    "UserSchemaEmailsInner": UserSchemaEmailsInner,
    "UserSchemaGroupsInner": UserSchemaGroupsInner,
    "UserSchemaMeta": UserSchemaMeta,
    "UserSchemaName": UserSchemaName,
    "UserSchemaPhotosInner": UserSchemaPhotosInner,
    "UserSchemaRolesInner": UserSchemaRolesInner,
    "UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User": UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User,
    "UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager": UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager,
    "WidgetData": WidgetData,
    "WidgetLinks": WidgetLinks,
    "WidthOnlyAdjustableGeometry": WidthOnlyAdjustableGeometry,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
