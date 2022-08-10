"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.MiroApi = exports.HttpError = void 0;
var appCardsApi_1 = require("./appCardsApi");
var boardClassificationBoardLevelApi_1 = require("./boardClassificationBoardLevelApi");
var boardClassificationOrganizationLevelApi_1 = require("./boardClassificationOrganizationLevelApi");
var boardClassificationTeamLevelApi_1 = require("./boardClassificationTeamLevelApi");
var boardMembersApi_1 = require("./boardMembersApi");
var boardsApi_1 = require("./boardsApi");
var cardsApi_1 = require("./cardsApi");
var connectorsApi_1 = require("./connectorsApi");
var documentsApi_1 = require("./documentsApi");
var embedsApi_1 = require("./embedsApi");
var framesApi_1 = require("./framesApi");
var groupApi_1 = require("./groupApi");
var imagesApi_1 = require("./imagesApi");
var itemsApi_1 = require("./itemsApi");
var organizationsApi_1 = require("./organizationsApi");
var shapesApi_1 = require("./shapesApi");
var stickyNotesApi_1 = require("./stickyNotesApi");
var tagsApi_1 = require("./tagsApi");
var teamMembersApiApi_1 = require("./teamMembersApiApi");
var teamSettingsApiApi_1 = require("./teamSettingsApiApi");
var teamsApiApi_1 = require("./teamsApiApi");
var textsApi_1 = require("./textsApi");
var userApi_1 = require("./userApi");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
function MiroApi(accessToken) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (0, appCardsApi_1.AppCardsApi)(accessToken)), (0, boardClassificationBoardLevelApi_1.BoardClassificationBoardLevelApi)(accessToken)), (0, boardClassificationOrganizationLevelApi_1.BoardClassificationOrganizationLevelApi)(accessToken)), (0, boardClassificationTeamLevelApi_1.BoardClassificationTeamLevelApi)(accessToken)), (0, boardMembersApi_1.BoardMembersApi)(accessToken)), (0, boardsApi_1.BoardsApi)(accessToken)), (0, cardsApi_1.CardsApi)(accessToken)), (0, connectorsApi_1.ConnectorsApi)(accessToken)), (0, documentsApi_1.DocumentsApi)(accessToken)), (0, embedsApi_1.EmbedsApi)(accessToken)), (0, framesApi_1.FramesApi)(accessToken)), (0, groupApi_1.GroupApi)(accessToken)), (0, imagesApi_1.ImagesApi)(accessToken)), (0, itemsApi_1.ItemsApi)(accessToken)), (0, organizationsApi_1.OrganizationsApi)(accessToken)), (0, shapesApi_1.ShapesApi)(accessToken)), (0, stickyNotesApi_1.StickyNotesApi)(accessToken)), (0, tagsApi_1.TagsApi)(accessToken)), (0, teamMembersApiApi_1.TeamMembersApiApi)(accessToken)), (0, teamSettingsApiApi_1.TeamSettingsApiApi)(accessToken)), (0, teamsApiApi_1.TeamsApiApi)(accessToken)), (0, textsApi_1.TextsApi)(accessToken)), (0, userApi_1.UserApi)(accessToken));
}
exports.MiroApi = MiroApi;
