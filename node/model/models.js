"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./appCardCreateRequest"), exports);
__exportStar(require("./appCardData"), exports);
__exportStar(require("./appCardDataChanges"), exports);
__exportStar(require("./appCardItem"), exports);
__exportStar(require("./appCardStyle"), exports);
__exportStar(require("./appCardUpdateRequest"), exports);
__exportStar(require("./board"), exports);
__exportStar(require("./boardChanges"), exports);
__exportStar(require("./boardDataClassificationLabel"), exports);
__exportStar(require("./boardLinks"), exports);
__exportStar(require("./boardMember"), exports);
__exportStar(require("./boardMemberChanges"), exports);
__exportStar(require("./boardMemberWithLinks"), exports);
__exportStar(require("./boardMembersInvite"), exports);
__exportStar(require("./boardMembersPagedResponse"), exports);
__exportStar(require("./boardPermissionsPolicy"), exports);
__exportStar(require("./boardPolicy"), exports);
__exportStar(require("./boardPolicyChange"), exports);
__exportStar(require("./boardSharingPolicy"), exports);
__exportStar(require("./boardSharingPolicyChange"), exports);
__exportStar(require("./boardWithLinks"), exports);
__exportStar(require("./boardsPagedResponse"), exports);
__exportStar(require("./caption"), exports);
__exportStar(require("./cardCreateRequest"), exports);
__exportStar(require("./cardData"), exports);
__exportStar(require("./cardItem"), exports);
__exportStar(require("./cardStyle"), exports);
__exportStar(require("./cardUpdateRequest"), exports);
__exportStar(require("./connectorChangesData"), exports);
__exportStar(require("./connectorCreationData"), exports);
__exportStar(require("./connectorStyle"), exports);
__exportStar(require("./connectorWithLinks"), exports);
__exportStar(require("./connectorsCursorPaged"), exports);
__exportStar(require("./createGroupRequest"), exports);
__exportStar(require("./createPictureRequest"), exports);
__exportStar(require("./createTeamRequest"), exports);
__exportStar(require("./createdBy"), exports);
__exportStar(require("./customField"), exports);
__exportStar(require("./customSimpleSearchResultsGroupResource"), exports);
__exportStar(require("./customSimpleSearchResultsUserResource"), exports);
__exportStar(require("./dataClassificationLabel"), exports);
__exportStar(require("./dataClassificationLabelId"), exports);
__exportStar(require("./dataClassificationOrganizationSettings"), exports);
__exportStar(require("./dataClassificationTeamSettings"), exports);
__exportStar(require("./documentCreateRequest"), exports);
__exportStar(require("./documentData"), exports);
__exportStar(require("./documentItem"), exports);
__exportStar(require("./documentUpdateRequest"), exports);
__exportStar(require("./documentUrlData"), exports);
__exportStar(require("./documentUrlDataChanges"), exports);
__exportStar(require("./embedCreateRequest"), exports);
__exportStar(require("./embedData"), exports);
__exportStar(require("./embedItem"), exports);
__exportStar(require("./embedUpdateRequest"), exports);
__exportStar(require("./embedUrlData"), exports);
__exportStar(require("./embedUrlDataChanges"), exports);
__exportStar(require("./enterpriseGetOrganizationMembers200Response"), exports);
__exportStar(require("./errorResponse"), exports);
__exportStar(require("./fixedRatioGeometry"), exports);
__exportStar(require("./fixedRatioNoRotationGeometry"), exports);
__exportStar(require("./frameChanges"), exports);
__exportStar(require("./frameCreateRequest"), exports);
__exportStar(require("./frameData"), exports);
__exportStar(require("./frameItem"), exports);
__exportStar(require("./frameStyle"), exports);
__exportStar(require("./frameUpdateRequest"), exports);
__exportStar(require("./genericItem"), exports);
__exportStar(require("./genericItemCursorPaged"), exports);
__exportStar(require("./genericItemUpdate"), exports);
__exportStar(require("./geometry"), exports);
__exportStar(require("./geometryNoRotation"), exports);
__exportStar(require("./getBoards400Response"), exports);
__exportStar(require("./getTagsResponse"), exports);
__exportStar(require("./groupListResponse"), exports);
__exportStar(require("./groupListResponseAllOf"), exports);
__exportStar(require("./groupMember"), exports);
__exportStar(require("./groupSchema"), exports);
__exportStar(require("./groupSchemaMeta"), exports);
__exportStar(require("./imageCreateRequest"), exports);
__exportStar(require("./imageData"), exports);
__exportStar(require("./imageItem"), exports);
__exportStar(require("./imageUpdateRequest"), exports);
__exportStar(require("./imageUrlData"), exports);
__exportStar(require("./imageUrlDataChanges"), exports);
__exportStar(require("./invitationError"), exports);
__exportStar(require("./invitationResult"), exports);
__exportStar(require("./itemConnectionChangesData"), exports);
__exportStar(require("./itemConnectionCreationData"), exports);
__exportStar(require("./itemConnectionWithLinks"), exports);
__exportStar(require("./itemPagedResponse"), exports);
__exportStar(require("./listResponse"), exports);
__exportStar(require("./meta"), exports);
__exportStar(require("./modifiedBy"), exports);
__exportStar(require("./organization"), exports);
__exportStar(require("./organizationMember"), exports);
__exportStar(require("./organizationMembersSearchByEmailsResponse"), exports);
__exportStar(require("./organizationMembersSearchQuery"), exports);
__exportStar(require("./organizationMembersSearchResponse"), exports);
__exportStar(require("./pageLinks"), exports);
__exportStar(require("./parent"), exports);
__exportStar(require("./parentLinksEnvelope"), exports);
__exportStar(require("./picture"), exports);
__exportStar(require("./position"), exports);
__exportStar(require("./positionChange"), exports);
__exportStar(require("./relativeOffset"), exports);
__exportStar(require("./scimResource"), exports);
__exportStar(require("./selfLink"), exports);
__exportStar(require("./shapeCreateRequest"), exports);
__exportStar(require("./shapeData"), exports);
__exportStar(require("./shapeItem"), exports);
__exportStar(require("./shapeStyle"), exports);
__exportStar(require("./shapeUpdateRequest"), exports);
__exportStar(require("./stickyNoteCreateRequest"), exports);
__exportStar(require("./stickyNoteData"), exports);
__exportStar(require("./stickyNoteItem"), exports);
__exportStar(require("./stickyNoteStyle"), exports);
__exportStar(require("./stickyNoteUpdateRequest"), exports);
__exportStar(require("./tag"), exports);
__exportStar(require("./tagCreateRequest"), exports);
__exportStar(require("./tagUpdateRequest"), exports);
__exportStar(require("./tagWithLinks"), exports);
__exportStar(require("./tagsPagedResponse"), exports);
__exportStar(require("./team"), exports);
__exportStar(require("./teamAccountDiscoverySettings"), exports);
__exportStar(require("./teamAccountDiscoverySettingsChanges"), exports);
__exportStar(require("./teamChanges"), exports);
__exportStar(require("./teamCollaborationSettings"), exports);
__exportStar(require("./teamCollaborationSettingsChanges"), exports);
__exportStar(require("./teamCopyAccessLevelSettings"), exports);
__exportStar(require("./teamCopyAccessLevelSettingsChanges"), exports);
__exportStar(require("./teamInvitationSettings"), exports);
__exportStar(require("./teamInvitationSettingsChanges"), exports);
__exportStar(require("./teamMember"), exports);
__exportStar(require("./teamMemberChanges"), exports);
__exportStar(require("./teamMemberInvite"), exports);
__exportStar(require("./teamSettings"), exports);
__exportStar(require("./teamSettingsChanges"), exports);
__exportStar(require("./teamSharingPolicySettings"), exports);
__exportStar(require("./teamSharingPolicySettingsChanges"), exports);
__exportStar(require("./textCreateRequest"), exports);
__exportStar(require("./textData"), exports);
__exportStar(require("./textItem"), exports);
__exportStar(require("./textStyle"), exports);
__exportStar(require("./textUpdateRequest"), exports);
__exportStar(require("./updateBoardsDataClassificationLabel"), exports);
__exportStar(require("./updateBoardsDataClassificationLabelRequest"), exports);
__exportStar(require("./updateGroupRequest"), exports);
__exportStar(require("./updateGroupRequestOperationsInner"), exports);
__exportStar(require("./updateTeamSettingsRequest"), exports);
__exportStar(require("./updateUserRequest"), exports);
__exportStar(require("./updateUserRequestOperationsInner"), exports);
__exportStar(require("./userId"), exports);
__exportStar(require("./userInfoShort"), exports);
__exportStar(require("./userListResponse"), exports);
__exportStar(require("./userListResponseAllOf"), exports);
__exportStar(require("./userSchema"), exports);
__exportStar(require("./userSchemaEmailsInner"), exports);
__exportStar(require("./userSchemaGroupsInner"), exports);
__exportStar(require("./userSchemaMeta"), exports);
__exportStar(require("./userSchemaName"), exports);
__exportStar(require("./userSchemaPhotosInner"), exports);
__exportStar(require("./userSchemaRolesInner"), exports);
__exportStar(require("./userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User"), exports);
__exportStar(require("./userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager"), exports);
__exportStar(require("./widgetData"), exports);
__exportStar(require("./widgetLinks"), exports);
__exportStar(require("./widthOnlyAdjustableGeometry"), exports);
var appCardCreateRequest_1 = require("./appCardCreateRequest");
var appCardData_1 = require("./appCardData");
var appCardDataChanges_1 = require("./appCardDataChanges");
var appCardItem_1 = require("./appCardItem");
var appCardStyle_1 = require("./appCardStyle");
var appCardUpdateRequest_1 = require("./appCardUpdateRequest");
var board_1 = require("./board");
var boardChanges_1 = require("./boardChanges");
var boardDataClassificationLabel_1 = require("./boardDataClassificationLabel");
var boardLinks_1 = require("./boardLinks");
var boardMember_1 = require("./boardMember");
var boardMemberChanges_1 = require("./boardMemberChanges");
var boardMemberWithLinks_1 = require("./boardMemberWithLinks");
var boardMembersInvite_1 = require("./boardMembersInvite");
var boardMembersPagedResponse_1 = require("./boardMembersPagedResponse");
var boardPermissionsPolicy_1 = require("./boardPermissionsPolicy");
var boardPolicy_1 = require("./boardPolicy");
var boardPolicyChange_1 = require("./boardPolicyChange");
var boardSharingPolicy_1 = require("./boardSharingPolicy");
var boardSharingPolicyChange_1 = require("./boardSharingPolicyChange");
var boardWithLinks_1 = require("./boardWithLinks");
var boardsPagedResponse_1 = require("./boardsPagedResponse");
var caption_1 = require("./caption");
var cardCreateRequest_1 = require("./cardCreateRequest");
var cardData_1 = require("./cardData");
var cardItem_1 = require("./cardItem");
var cardStyle_1 = require("./cardStyle");
var cardUpdateRequest_1 = require("./cardUpdateRequest");
var connectorChangesData_1 = require("./connectorChangesData");
var connectorCreationData_1 = require("./connectorCreationData");
var connectorStyle_1 = require("./connectorStyle");
var connectorWithLinks_1 = require("./connectorWithLinks");
var connectorsCursorPaged_1 = require("./connectorsCursorPaged");
var createGroupRequest_1 = require("./createGroupRequest");
var createPictureRequest_1 = require("./createPictureRequest");
var createTeamRequest_1 = require("./createTeamRequest");
var createdBy_1 = require("./createdBy");
var customField_1 = require("./customField");
var customSimpleSearchResultsGroupResource_1 = require("./customSimpleSearchResultsGroupResource");
var customSimpleSearchResultsUserResource_1 = require("./customSimpleSearchResultsUserResource");
var dataClassificationLabel_1 = require("./dataClassificationLabel");
var dataClassificationLabelId_1 = require("./dataClassificationLabelId");
var dataClassificationOrganizationSettings_1 = require("./dataClassificationOrganizationSettings");
var dataClassificationTeamSettings_1 = require("./dataClassificationTeamSettings");
var documentCreateRequest_1 = require("./documentCreateRequest");
var documentData_1 = require("./documentData");
var documentItem_1 = require("./documentItem");
var documentUpdateRequest_1 = require("./documentUpdateRequest");
var documentUrlData_1 = require("./documentUrlData");
var documentUrlDataChanges_1 = require("./documentUrlDataChanges");
var embedCreateRequest_1 = require("./embedCreateRequest");
var embedData_1 = require("./embedData");
var embedItem_1 = require("./embedItem");
var embedUpdateRequest_1 = require("./embedUpdateRequest");
var embedUrlData_1 = require("./embedUrlData");
var embedUrlDataChanges_1 = require("./embedUrlDataChanges");
var enterpriseGetOrganizationMembers200Response_1 = require("./enterpriseGetOrganizationMembers200Response");
var errorResponse_1 = require("./errorResponse");
var fixedRatioGeometry_1 = require("./fixedRatioGeometry");
var fixedRatioNoRotationGeometry_1 = require("./fixedRatioNoRotationGeometry");
var frameChanges_1 = require("./frameChanges");
var frameCreateRequest_1 = require("./frameCreateRequest");
var frameData_1 = require("./frameData");
var frameItem_1 = require("./frameItem");
var frameStyle_1 = require("./frameStyle");
var frameUpdateRequest_1 = require("./frameUpdateRequest");
var genericItem_1 = require("./genericItem");
var genericItemCursorPaged_1 = require("./genericItemCursorPaged");
var genericItemUpdate_1 = require("./genericItemUpdate");
var geometry_1 = require("./geometry");
var geometryNoRotation_1 = require("./geometryNoRotation");
var getBoards400Response_1 = require("./getBoards400Response");
var getTagsResponse_1 = require("./getTagsResponse");
var groupListResponse_1 = require("./groupListResponse");
var groupListResponseAllOf_1 = require("./groupListResponseAllOf");
var groupMember_1 = require("./groupMember");
var groupSchema_1 = require("./groupSchema");
var groupSchemaMeta_1 = require("./groupSchemaMeta");
var imageCreateRequest_1 = require("./imageCreateRequest");
var imageData_1 = require("./imageData");
var imageItem_1 = require("./imageItem");
var imageUpdateRequest_1 = require("./imageUpdateRequest");
var imageUrlData_1 = require("./imageUrlData");
var imageUrlDataChanges_1 = require("./imageUrlDataChanges");
var invitationError_1 = require("./invitationError");
var invitationResult_1 = require("./invitationResult");
var itemConnectionChangesData_1 = require("./itemConnectionChangesData");
var itemConnectionCreationData_1 = require("./itemConnectionCreationData");
var itemConnectionWithLinks_1 = require("./itemConnectionWithLinks");
var itemPagedResponse_1 = require("./itemPagedResponse");
var listResponse_1 = require("./listResponse");
var meta_1 = require("./meta");
var modifiedBy_1 = require("./modifiedBy");
var organization_1 = require("./organization");
var organizationMember_1 = require("./organizationMember");
var organizationMembersSearchByEmailsResponse_1 = require("./organizationMembersSearchByEmailsResponse");
var organizationMembersSearchQuery_1 = require("./organizationMembersSearchQuery");
var organizationMembersSearchResponse_1 = require("./organizationMembersSearchResponse");
var pageLinks_1 = require("./pageLinks");
var parent_1 = require("./parent");
var parentLinksEnvelope_1 = require("./parentLinksEnvelope");
var picture_1 = require("./picture");
var position_1 = require("./position");
var positionChange_1 = require("./positionChange");
var relativeOffset_1 = require("./relativeOffset");
var scimResource_1 = require("./scimResource");
var selfLink_1 = require("./selfLink");
var shapeCreateRequest_1 = require("./shapeCreateRequest");
var shapeData_1 = require("./shapeData");
var shapeItem_1 = require("./shapeItem");
var shapeStyle_1 = require("./shapeStyle");
var shapeUpdateRequest_1 = require("./shapeUpdateRequest");
var stickyNoteCreateRequest_1 = require("./stickyNoteCreateRequest");
var stickyNoteData_1 = require("./stickyNoteData");
var stickyNoteItem_1 = require("./stickyNoteItem");
var stickyNoteStyle_1 = require("./stickyNoteStyle");
var stickyNoteUpdateRequest_1 = require("./stickyNoteUpdateRequest");
var tag_1 = require("./tag");
var tagCreateRequest_1 = require("./tagCreateRequest");
var tagUpdateRequest_1 = require("./tagUpdateRequest");
var tagWithLinks_1 = require("./tagWithLinks");
var tagsPagedResponse_1 = require("./tagsPagedResponse");
var team_1 = require("./team");
var teamAccountDiscoverySettings_1 = require("./teamAccountDiscoverySettings");
var teamAccountDiscoverySettingsChanges_1 = require("./teamAccountDiscoverySettingsChanges");
var teamChanges_1 = require("./teamChanges");
var teamCollaborationSettings_1 = require("./teamCollaborationSettings");
var teamCollaborationSettingsChanges_1 = require("./teamCollaborationSettingsChanges");
var teamCopyAccessLevelSettings_1 = require("./teamCopyAccessLevelSettings");
var teamCopyAccessLevelSettingsChanges_1 = require("./teamCopyAccessLevelSettingsChanges");
var teamInvitationSettings_1 = require("./teamInvitationSettings");
var teamInvitationSettingsChanges_1 = require("./teamInvitationSettingsChanges");
var teamMember_1 = require("./teamMember");
var teamMemberChanges_1 = require("./teamMemberChanges");
var teamMemberInvite_1 = require("./teamMemberInvite");
var teamSettings_1 = require("./teamSettings");
var teamSettingsChanges_1 = require("./teamSettingsChanges");
var teamSharingPolicySettings_1 = require("./teamSharingPolicySettings");
var teamSharingPolicySettingsChanges_1 = require("./teamSharingPolicySettingsChanges");
var textCreateRequest_1 = require("./textCreateRequest");
var textData_1 = require("./textData");
var textItem_1 = require("./textItem");
var textStyle_1 = require("./textStyle");
var textUpdateRequest_1 = require("./textUpdateRequest");
var updateBoardsDataClassificationLabel_1 = require("./updateBoardsDataClassificationLabel");
var updateBoardsDataClassificationLabelRequest_1 = require("./updateBoardsDataClassificationLabelRequest");
var updateGroupRequest_1 = require("./updateGroupRequest");
var updateGroupRequestOperationsInner_1 = require("./updateGroupRequestOperationsInner");
var updateTeamSettingsRequest_1 = require("./updateTeamSettingsRequest");
var updateUserRequest_1 = require("./updateUserRequest");
var updateUserRequestOperationsInner_1 = require("./updateUserRequestOperationsInner");
var userId_1 = require("./userId");
var userInfoShort_1 = require("./userInfoShort");
var userListResponse_1 = require("./userListResponse");
var userListResponseAllOf_1 = require("./userListResponseAllOf");
var userSchema_1 = require("./userSchema");
var userSchemaEmailsInner_1 = require("./userSchemaEmailsInner");
var userSchemaGroupsInner_1 = require("./userSchemaGroupsInner");
var userSchemaMeta_1 = require("./userSchemaMeta");
var userSchemaName_1 = require("./userSchemaName");
var userSchemaPhotosInner_1 = require("./userSchemaPhotosInner");
var userSchemaRolesInner_1 = require("./userSchemaRolesInner");
var userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User_1 = require("./userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User");
var userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager_1 = require("./userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager");
var widgetData_1 = require("./widgetData");
var widgetLinks_1 = require("./widgetLinks");
var widthOnlyAdjustableGeometry_1 = require("./widthOnlyAdjustableGeometry");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AppCardData.StatusEnum": appCardData_1.AppCardData.StatusEnum,
    "AppCardDataChanges.StatusEnum": appCardDataChanges_1.AppCardDataChanges.StatusEnum,
    "BoardMember.RoleEnum": boardMember_1.BoardMember.RoleEnum,
    "BoardMemberChanges.RoleEnum": boardMemberChanges_1.BoardMemberChanges.RoleEnum,
    "BoardMemberWithLinks.RoleEnum": boardMemberWithLinks_1.BoardMemberWithLinks.RoleEnum,
    "BoardMembersInvite.RoleEnum": boardMembersInvite_1.BoardMembersInvite.RoleEnum,
    "BoardPermissionsPolicy.CollaborationToolsStartAccessEnum": boardPermissionsPolicy_1.BoardPermissionsPolicy.CollaborationToolsStartAccessEnum,
    "BoardPermissionsPolicy.CopyAccessEnum": boardPermissionsPolicy_1.BoardPermissionsPolicy.CopyAccessEnum,
    "BoardPermissionsPolicy.SharingAccessEnum": boardPermissionsPolicy_1.BoardPermissionsPolicy.SharingAccessEnum,
    "BoardSharingPolicy.AccessEnum": boardSharingPolicy_1.BoardSharingPolicy.AccessEnum,
    "BoardSharingPolicy.InviteToAccountAndBoardLinkAccessEnum": boardSharingPolicy_1.BoardSharingPolicy.InviteToAccountAndBoardLinkAccessEnum,
    "BoardSharingPolicy.OrganizationAccessEnum": boardSharingPolicy_1.BoardSharingPolicy.OrganizationAccessEnum,
    "BoardSharingPolicy.TeamAccessEnum": boardSharingPolicy_1.BoardSharingPolicy.TeamAccessEnum,
    "BoardSharingPolicyChange.AccessEnum": boardSharingPolicyChange_1.BoardSharingPolicyChange.AccessEnum,
    "BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum": boardSharingPolicyChange_1.BoardSharingPolicyChange.InviteToAccountAndBoardLinkAccessEnum,
    "BoardSharingPolicyChange.OrganizationAccessEnum": boardSharingPolicyChange_1.BoardSharingPolicyChange.OrganizationAccessEnum,
    "BoardSharingPolicyChange.TeamAccessEnum": boardSharingPolicyChange_1.BoardSharingPolicyChange.TeamAccessEnum,
    "Caption.TextAlignVerticalEnum": caption_1.Caption.TextAlignVerticalEnum,
    "ConnectorChangesData.ShapeEnum": connectorChangesData_1.ConnectorChangesData.ShapeEnum,
    "ConnectorCreationData.ShapeEnum": connectorCreationData_1.ConnectorCreationData.ShapeEnum,
    "ConnectorStyle.EndStrokeCapEnum": connectorStyle_1.ConnectorStyle.EndStrokeCapEnum,
    "ConnectorStyle.StartStrokeCapEnum": connectorStyle_1.ConnectorStyle.StartStrokeCapEnum,
    "ConnectorStyle.StrokeStyleEnum": connectorStyle_1.ConnectorStyle.StrokeStyleEnum,
    "ConnectorStyle.TextOrientationEnum": connectorStyle_1.ConnectorStyle.TextOrientationEnum,
    "ConnectorWithLinks.ShapeEnum": connectorWithLinks_1.ConnectorWithLinks.ShapeEnum,
    "CustomField.IconShapeEnum": customField_1.CustomField.IconShapeEnum,
    "EmbedData.ModeEnum": embedData_1.EmbedData.ModeEnum,
    "EmbedUrlData.ModeEnum": embedUrlData_1.EmbedUrlData.ModeEnum,
    "EmbedUrlDataChanges.ModeEnum": embedUrlDataChanges_1.EmbedUrlDataChanges.ModeEnum,
    "FrameChanges.FormatEnum": frameChanges_1.FrameChanges.FormatEnum,
    "FrameChanges.TypeEnum": frameChanges_1.FrameChanges.TypeEnum,
    "FrameData.FormatEnum": frameData_1.FrameData.FormatEnum,
    "FrameData.TypeEnum": frameData_1.FrameData.TypeEnum,
    "ItemConnectionChangesData.SnapToEnum": itemConnectionChangesData_1.ItemConnectionChangesData.SnapToEnum,
    "ItemConnectionCreationData.SnapToEnum": itemConnectionCreationData_1.ItemConnectionCreationData.SnapToEnum,
    "Organization.PlanEnum": organization_1.Organization.PlanEnum,
    "OrganizationMember.LicenseEnum": organizationMember_1.OrganizationMember.LicenseEnum,
    "OrganizationMember.RoleEnum": organizationMember_1.OrganizationMember.RoleEnum,
    "Position.OriginEnum": position_1.Position.OriginEnum,
    "Position.RelativeToEnum": position_1.Position.RelativeToEnum,
    "PositionChange.OriginEnum": positionChange_1.PositionChange.OriginEnum,
    "ShapeData.ShapeEnum": shapeData_1.ShapeData.ShapeEnum,
    "ShapeStyle.BorderStyleEnum": shapeStyle_1.ShapeStyle.BorderStyleEnum,
    "ShapeStyle.FontFamilyEnum": shapeStyle_1.ShapeStyle.FontFamilyEnum,
    "ShapeStyle.TextAlignEnum": shapeStyle_1.ShapeStyle.TextAlignEnum,
    "ShapeStyle.TextAlignVerticalEnum": shapeStyle_1.ShapeStyle.TextAlignVerticalEnum,
    "StickyNoteData.ShapeEnum": stickyNoteData_1.StickyNoteData.ShapeEnum,
    "StickyNoteStyle.FillColorEnum": stickyNoteStyle_1.StickyNoteStyle.FillColorEnum,
    "StickyNoteStyle.TextAlignEnum": stickyNoteStyle_1.StickyNoteStyle.TextAlignEnum,
    "StickyNoteStyle.TextAlignVerticalEnum": stickyNoteStyle_1.StickyNoteStyle.TextAlignVerticalEnum,
    "Tag.FillColorEnum": tag_1.Tag.FillColorEnum,
    "TagCreateRequest.FillColorEnum": tagCreateRequest_1.TagCreateRequest.FillColorEnum,
    "TagUpdateRequest.FillColorEnum": tagUpdateRequest_1.TagUpdateRequest.FillColorEnum,
    "TagWithLinks.FillColorEnum": tagWithLinks_1.TagWithLinks.FillColorEnum,
    "TeamAccountDiscoverySettings.AccountDiscoveryEnum": teamAccountDiscoverySettings_1.TeamAccountDiscoverySettings.AccountDiscoveryEnum,
    "TeamAccountDiscoverySettingsChanges.AccountDiscoveryEnum": teamAccountDiscoverySettingsChanges_1.TeamAccountDiscoverySettingsChanges.AccountDiscoveryEnum,
    "TeamCollaborationSettings.CoOwnerRoleEnum": teamCollaborationSettings_1.TeamCollaborationSettings.CoOwnerRoleEnum,
    "TeamCollaborationSettingsChanges.CoOwnerRoleEnum": teamCollaborationSettingsChanges_1.TeamCollaborationSettingsChanges.CoOwnerRoleEnum,
    "TeamCopyAccessLevelSettings.CopyAccessLevelEnum": teamCopyAccessLevelSettings_1.TeamCopyAccessLevelSettings.CopyAccessLevelEnum,
    "TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum": teamCopyAccessLevelSettings_1.TeamCopyAccessLevelSettings.CopyAccessLevelLimitationEnum,
    "TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum": teamCopyAccessLevelSettingsChanges_1.TeamCopyAccessLevelSettingsChanges.CopyAccessLevelEnum,
    "TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum": teamCopyAccessLevelSettingsChanges_1.TeamCopyAccessLevelSettingsChanges.CopyAccessLevelLimitationEnum,
    "TeamInvitationSettings.InviteExternalUsersEnum": teamInvitationSettings_1.TeamInvitationSettings.InviteExternalUsersEnum,
    "TeamInvitationSettings.WhoCanInviteEnum": teamInvitationSettings_1.TeamInvitationSettings.WhoCanInviteEnum,
    "TeamInvitationSettingsChanges.InviteExternalUsersEnum": teamInvitationSettingsChanges_1.TeamInvitationSettingsChanges.InviteExternalUsersEnum,
    "TeamInvitationSettingsChanges.WhoCanInviteEnum": teamInvitationSettingsChanges_1.TeamInvitationSettingsChanges.WhoCanInviteEnum,
    "TeamMember.UserRoleEnum": teamMember_1.TeamMember.UserRoleEnum,
    "TeamSharingPolicySettings.CreateAssetAccessLevelEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.CreateAssetAccessLevelEnum,
    "TeamSharingPolicySettings.DefaultBoardAccessEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.DefaultBoardAccessEnum,
    "TeamSharingPolicySettings.DefaultOrganizationAccessEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.DefaultOrganizationAccessEnum,
    "TeamSharingPolicySettings.DefaultProjectAccessEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.DefaultProjectAccessEnum,
    "TeamSharingPolicySettings.MoveBoardToAccountEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.MoveBoardToAccountEnum,
    "TeamSharingPolicySettings.SharingOnAccountEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.SharingOnAccountEnum,
    "TeamSharingPolicySettings.SharingOnOrganizationEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.SharingOnOrganizationEnum,
    "TeamSharingPolicySettings.SharingViaPublicLinkEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.SharingViaPublicLinkEnum,
    "TeamSharingPolicySettings.SharingWithExternalUsersEnum": teamSharingPolicySettings_1.TeamSharingPolicySettings.SharingWithExternalUsersEnum,
    "TeamSharingPolicySettingsChanges.CreateAssetAccessLevelEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.CreateAssetAccessLevelEnum,
    "TeamSharingPolicySettingsChanges.DefaultBoardAccessEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.DefaultBoardAccessEnum,
    "TeamSharingPolicySettingsChanges.DefaultOrganizationAccessEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.DefaultOrganizationAccessEnum,
    "TeamSharingPolicySettingsChanges.DefaultProjectAccessEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.DefaultProjectAccessEnum,
    "TeamSharingPolicySettingsChanges.MoveBoardToAccountEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.MoveBoardToAccountEnum,
    "TeamSharingPolicySettingsChanges.SharingOnAccountEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.SharingOnAccountEnum,
    "TeamSharingPolicySettingsChanges.SharingOnOrganizationEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.SharingOnOrganizationEnum,
    "TeamSharingPolicySettingsChanges.SharingViaPublicLinkEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.SharingViaPublicLinkEnum,
    "TeamSharingPolicySettingsChanges.SharingWithExternalUsersEnum": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges.SharingWithExternalUsersEnum,
    "TextStyle.FontFamilyEnum": textStyle_1.TextStyle.FontFamilyEnum,
    "TextStyle.TextAlignEnum": textStyle_1.TextStyle.TextAlignEnum,
    "UserSchema.UserTypeEnum": userSchema_1.UserSchema.UserTypeEnum,
    "UserSchemaRolesInner.DisplayEnum": userSchemaRolesInner_1.UserSchemaRolesInner.DisplayEnum,
    "UserSchemaRolesInner.ValueEnum": userSchemaRolesInner_1.UserSchemaRolesInner.ValueEnum,
    "WidgetData.ModeEnum": widgetData_1.WidgetData.ModeEnum,
    "WidgetData.StatusEnum": widgetData_1.WidgetData.StatusEnum,
    "WidgetData.ShapeEnum": widgetData_1.WidgetData.ShapeEnum,
    "WidgetData.FormatEnum": widgetData_1.WidgetData.FormatEnum,
    "WidgetData.TypeEnum": widgetData_1.WidgetData.TypeEnum
};
var typeMap = {
    "AppCardCreateRequest": appCardCreateRequest_1.AppCardCreateRequest,
    "AppCardData": appCardData_1.AppCardData,
    "AppCardDataChanges": appCardDataChanges_1.AppCardDataChanges,
    "AppCardItem": appCardItem_1.AppCardItem,
    "AppCardStyle": appCardStyle_1.AppCardStyle,
    "AppCardUpdateRequest": appCardUpdateRequest_1.AppCardUpdateRequest,
    "Board": board_1.Board,
    "BoardChanges": boardChanges_1.BoardChanges,
    "BoardDataClassificationLabel": boardDataClassificationLabel_1.BoardDataClassificationLabel,
    "BoardLinks": boardLinks_1.BoardLinks,
    "BoardMember": boardMember_1.BoardMember,
    "BoardMemberChanges": boardMemberChanges_1.BoardMemberChanges,
    "BoardMemberWithLinks": boardMemberWithLinks_1.BoardMemberWithLinks,
    "BoardMembersInvite": boardMembersInvite_1.BoardMembersInvite,
    "BoardMembersPagedResponse": boardMembersPagedResponse_1.BoardMembersPagedResponse,
    "BoardPermissionsPolicy": boardPermissionsPolicy_1.BoardPermissionsPolicy,
    "BoardPolicy": boardPolicy_1.BoardPolicy,
    "BoardPolicyChange": boardPolicyChange_1.BoardPolicyChange,
    "BoardSharingPolicy": boardSharingPolicy_1.BoardSharingPolicy,
    "BoardSharingPolicyChange": boardSharingPolicyChange_1.BoardSharingPolicyChange,
    "BoardWithLinks": boardWithLinks_1.BoardWithLinks,
    "BoardsPagedResponse": boardsPagedResponse_1.BoardsPagedResponse,
    "Caption": caption_1.Caption,
    "CardCreateRequest": cardCreateRequest_1.CardCreateRequest,
    "CardData": cardData_1.CardData,
    "CardItem": cardItem_1.CardItem,
    "CardStyle": cardStyle_1.CardStyle,
    "CardUpdateRequest": cardUpdateRequest_1.CardUpdateRequest,
    "ConnectorChangesData": connectorChangesData_1.ConnectorChangesData,
    "ConnectorCreationData": connectorCreationData_1.ConnectorCreationData,
    "ConnectorStyle": connectorStyle_1.ConnectorStyle,
    "ConnectorWithLinks": connectorWithLinks_1.ConnectorWithLinks,
    "ConnectorsCursorPaged": connectorsCursorPaged_1.ConnectorsCursorPaged,
    "CreateGroupRequest": createGroupRequest_1.CreateGroupRequest,
    "CreatePictureRequest": createPictureRequest_1.CreatePictureRequest,
    "CreateTeamRequest": createTeamRequest_1.CreateTeamRequest,
    "CreatedBy": createdBy_1.CreatedBy,
    "CustomField": customField_1.CustomField,
    "CustomSimpleSearchResultsGroupResource": customSimpleSearchResultsGroupResource_1.CustomSimpleSearchResultsGroupResource,
    "CustomSimpleSearchResultsUserResource": customSimpleSearchResultsUserResource_1.CustomSimpleSearchResultsUserResource,
    "DataClassificationLabel": dataClassificationLabel_1.DataClassificationLabel,
    "DataClassificationLabelId": dataClassificationLabelId_1.DataClassificationLabelId,
    "DataClassificationOrganizationSettings": dataClassificationOrganizationSettings_1.DataClassificationOrganizationSettings,
    "DataClassificationTeamSettings": dataClassificationTeamSettings_1.DataClassificationTeamSettings,
    "DocumentCreateRequest": documentCreateRequest_1.DocumentCreateRequest,
    "DocumentData": documentData_1.DocumentData,
    "DocumentItem": documentItem_1.DocumentItem,
    "DocumentUpdateRequest": documentUpdateRequest_1.DocumentUpdateRequest,
    "DocumentUrlData": documentUrlData_1.DocumentUrlData,
    "DocumentUrlDataChanges": documentUrlDataChanges_1.DocumentUrlDataChanges,
    "EmbedCreateRequest": embedCreateRequest_1.EmbedCreateRequest,
    "EmbedData": embedData_1.EmbedData,
    "EmbedItem": embedItem_1.EmbedItem,
    "EmbedUpdateRequest": embedUpdateRequest_1.EmbedUpdateRequest,
    "EmbedUrlData": embedUrlData_1.EmbedUrlData,
    "EmbedUrlDataChanges": embedUrlDataChanges_1.EmbedUrlDataChanges,
    "EnterpriseGetOrganizationMembers200Response": enterpriseGetOrganizationMembers200Response_1.EnterpriseGetOrganizationMembers200Response,
    "ErrorResponse": errorResponse_1.ErrorResponse,
    "FixedRatioGeometry": fixedRatioGeometry_1.FixedRatioGeometry,
    "FixedRatioNoRotationGeometry": fixedRatioNoRotationGeometry_1.FixedRatioNoRotationGeometry,
    "FrameChanges": frameChanges_1.FrameChanges,
    "FrameCreateRequest": frameCreateRequest_1.FrameCreateRequest,
    "FrameData": frameData_1.FrameData,
    "FrameItem": frameItem_1.FrameItem,
    "FrameStyle": frameStyle_1.FrameStyle,
    "FrameUpdateRequest": frameUpdateRequest_1.FrameUpdateRequest,
    "GenericItem": genericItem_1.GenericItem,
    "GenericItemCursorPaged": genericItemCursorPaged_1.GenericItemCursorPaged,
    "GenericItemUpdate": genericItemUpdate_1.GenericItemUpdate,
    "Geometry": geometry_1.Geometry,
    "GeometryNoRotation": geometryNoRotation_1.GeometryNoRotation,
    "GetBoards400Response": getBoards400Response_1.GetBoards400Response,
    "GetTagsResponse": getTagsResponse_1.GetTagsResponse,
    "GroupListResponse": groupListResponse_1.GroupListResponse,
    "GroupListResponseAllOf": groupListResponseAllOf_1.GroupListResponseAllOf,
    "GroupMember": groupMember_1.GroupMember,
    "GroupSchema": groupSchema_1.GroupSchema,
    "GroupSchemaMeta": groupSchemaMeta_1.GroupSchemaMeta,
    "ImageCreateRequest": imageCreateRequest_1.ImageCreateRequest,
    "ImageData": imageData_1.ImageData,
    "ImageItem": imageItem_1.ImageItem,
    "ImageUpdateRequest": imageUpdateRequest_1.ImageUpdateRequest,
    "ImageUrlData": imageUrlData_1.ImageUrlData,
    "ImageUrlDataChanges": imageUrlDataChanges_1.ImageUrlDataChanges,
    "InvitationError": invitationError_1.InvitationError,
    "InvitationResult": invitationResult_1.InvitationResult,
    "ItemConnectionChangesData": itemConnectionChangesData_1.ItemConnectionChangesData,
    "ItemConnectionCreationData": itemConnectionCreationData_1.ItemConnectionCreationData,
    "ItemConnectionWithLinks": itemConnectionWithLinks_1.ItemConnectionWithLinks,
    "ItemPagedResponse": itemPagedResponse_1.ItemPagedResponse,
    "ListResponse": listResponse_1.ListResponse,
    "Meta": meta_1.Meta,
    "ModifiedBy": modifiedBy_1.ModifiedBy,
    "Organization": organization_1.Organization,
    "OrganizationMember": organizationMember_1.OrganizationMember,
    "OrganizationMembersSearchByEmailsResponse": organizationMembersSearchByEmailsResponse_1.OrganizationMembersSearchByEmailsResponse,
    "OrganizationMembersSearchQuery": organizationMembersSearchQuery_1.OrganizationMembersSearchQuery,
    "OrganizationMembersSearchResponse": organizationMembersSearchResponse_1.OrganizationMembersSearchResponse,
    "PageLinks": pageLinks_1.PageLinks,
    "Parent": parent_1.Parent,
    "ParentLinksEnvelope": parentLinksEnvelope_1.ParentLinksEnvelope,
    "Picture": picture_1.Picture,
    "Position": position_1.Position,
    "PositionChange": positionChange_1.PositionChange,
    "RelativeOffset": relativeOffset_1.RelativeOffset,
    "ScimResource": scimResource_1.ScimResource,
    "SelfLink": selfLink_1.SelfLink,
    "ShapeCreateRequest": shapeCreateRequest_1.ShapeCreateRequest,
    "ShapeData": shapeData_1.ShapeData,
    "ShapeItem": shapeItem_1.ShapeItem,
    "ShapeStyle": shapeStyle_1.ShapeStyle,
    "ShapeUpdateRequest": shapeUpdateRequest_1.ShapeUpdateRequest,
    "StickyNoteCreateRequest": stickyNoteCreateRequest_1.StickyNoteCreateRequest,
    "StickyNoteData": stickyNoteData_1.StickyNoteData,
    "StickyNoteItem": stickyNoteItem_1.StickyNoteItem,
    "StickyNoteStyle": stickyNoteStyle_1.StickyNoteStyle,
    "StickyNoteUpdateRequest": stickyNoteUpdateRequest_1.StickyNoteUpdateRequest,
    "Tag": tag_1.Tag,
    "TagCreateRequest": tagCreateRequest_1.TagCreateRequest,
    "TagUpdateRequest": tagUpdateRequest_1.TagUpdateRequest,
    "TagWithLinks": tagWithLinks_1.TagWithLinks,
    "TagsPagedResponse": tagsPagedResponse_1.TagsPagedResponse,
    "Team": team_1.Team,
    "TeamAccountDiscoverySettings": teamAccountDiscoverySettings_1.TeamAccountDiscoverySettings,
    "TeamAccountDiscoverySettingsChanges": teamAccountDiscoverySettingsChanges_1.TeamAccountDiscoverySettingsChanges,
    "TeamChanges": teamChanges_1.TeamChanges,
    "TeamCollaborationSettings": teamCollaborationSettings_1.TeamCollaborationSettings,
    "TeamCollaborationSettingsChanges": teamCollaborationSettingsChanges_1.TeamCollaborationSettingsChanges,
    "TeamCopyAccessLevelSettings": teamCopyAccessLevelSettings_1.TeamCopyAccessLevelSettings,
    "TeamCopyAccessLevelSettingsChanges": teamCopyAccessLevelSettingsChanges_1.TeamCopyAccessLevelSettingsChanges,
    "TeamInvitationSettings": teamInvitationSettings_1.TeamInvitationSettings,
    "TeamInvitationSettingsChanges": teamInvitationSettingsChanges_1.TeamInvitationSettingsChanges,
    "TeamMember": teamMember_1.TeamMember,
    "TeamMemberChanges": teamMemberChanges_1.TeamMemberChanges,
    "TeamMemberInvite": teamMemberInvite_1.TeamMemberInvite,
    "TeamSettings": teamSettings_1.TeamSettings,
    "TeamSettingsChanges": teamSettingsChanges_1.TeamSettingsChanges,
    "TeamSharingPolicySettings": teamSharingPolicySettings_1.TeamSharingPolicySettings,
    "TeamSharingPolicySettingsChanges": teamSharingPolicySettingsChanges_1.TeamSharingPolicySettingsChanges,
    "TextCreateRequest": textCreateRequest_1.TextCreateRequest,
    "TextData": textData_1.TextData,
    "TextItem": textItem_1.TextItem,
    "TextStyle": textStyle_1.TextStyle,
    "TextUpdateRequest": textUpdateRequest_1.TextUpdateRequest,
    "UpdateBoardsDataClassificationLabel": updateBoardsDataClassificationLabel_1.UpdateBoardsDataClassificationLabel,
    "UpdateBoardsDataClassificationLabelRequest": updateBoardsDataClassificationLabelRequest_1.UpdateBoardsDataClassificationLabelRequest,
    "UpdateGroupRequest": updateGroupRequest_1.UpdateGroupRequest,
    "UpdateGroupRequestOperationsInner": updateGroupRequestOperationsInner_1.UpdateGroupRequestOperationsInner,
    "UpdateTeamSettingsRequest": updateTeamSettingsRequest_1.UpdateTeamSettingsRequest,
    "UpdateUserRequest": updateUserRequest_1.UpdateUserRequest,
    "UpdateUserRequestOperationsInner": updateUserRequestOperationsInner_1.UpdateUserRequestOperationsInner,
    "UserId": userId_1.UserId,
    "UserInfoShort": userInfoShort_1.UserInfoShort,
    "UserListResponse": userListResponse_1.UserListResponse,
    "UserListResponseAllOf": userListResponseAllOf_1.UserListResponseAllOf,
    "UserSchema": userSchema_1.UserSchema,
    "UserSchemaEmailsInner": userSchemaEmailsInner_1.UserSchemaEmailsInner,
    "UserSchemaGroupsInner": userSchemaGroupsInner_1.UserSchemaGroupsInner,
    "UserSchemaMeta": userSchemaMeta_1.UserSchemaMeta,
    "UserSchemaName": userSchemaName_1.UserSchemaName,
    "UserSchemaPhotosInner": userSchemaPhotosInner_1.UserSchemaPhotosInner,
    "UserSchemaRolesInner": userSchemaRolesInner_1.UserSchemaRolesInner,
    "UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User": userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User_1.UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20User,
    "UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager": userSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager_1.UserSchemaUrnIetfParamsScimSchemasExtensionEnterprise20UserManager,
    "WidgetData": widgetData_1.WidgetData,
    "WidgetLinks": widgetLinks_1.WidgetLinks,
    "WidthOnlyAdjustableGeometry": widthOnlyAdjustableGeometry_1.WidthOnlyAdjustableGeometry
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
