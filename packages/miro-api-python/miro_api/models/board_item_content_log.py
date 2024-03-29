# coding: utf-8

"""
    Miro Developer Platform

    <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro's Developer Platform 2.0. 

    The version of the OpenAPI document: v2.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from pydantic import BaseModel, Field, StrictBool, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from miro_api.models.board_content_log_data import BoardContentLogData
from miro_api.models.user import User
from typing import Optional, Set
from typing_extensions import Self

class BoardItemContentLog(BaseModel):
    """
    Contains information about the content log of for a board item.
    """ # noqa: E501
    id: Optional[StrictStr] = Field(default=None, description="Unique identifier of the content log.")
    item_id: Optional[StrictStr] = Field(default=None, description="Unique identifier of the board item.", alias="itemId")
    type: Optional[Any] = Field(default=None, description="Type of the board item.")
    action: Optional[StrictStr] = Field(default=None, description="User action in the form of insert, update, or delete.")
    board_key: Optional[StrictStr] = Field(default=None, description="Unique identification of the board to which the item belongs.", alias="boardKey")
    hidden: Optional[StrictBool] = Field(default=None, description="Indicates if the board is a hidden board. Returns `true` if board item is hidden.")
    created_at: Optional[datetime] = Field(default=None, description="Date and time when the board item was created.<br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). ", alias="createdAt")
    created_by: Optional[User] = Field(default=None, alias="createdBy")
    modified_at: Optional[datetime] = Field(default=None, description="Date and time when the board item was last modified.<br>Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)). ", alias="modifiedAt")
    modified_by: Optional[User] = Field(default=None, alias="modifiedBy")
    log_data: Optional[BoardContentLogData] = Field(default=None, alias="logData")
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["id", "itemId", "type", "action", "boardKey", "hidden", "createdAt", "createdBy", "modifiedAt", "modifiedBy", "logData"]

    model_config = {
        "populate_by_name": True,
        "validate_assignment": True,
        "protected_namespaces": (),
    }


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Optional[Self]:
        """Create an instance of BoardItemContentLog from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        * Fields in `self.additional_properties` are added to the output dict.
        """
        excluded_fields: Set[str] = set([
            "additional_properties",
        ])

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of created_by
        if self.created_by:
            _dict['createdBy'] = self.created_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of modified_by
        if self.modified_by:
            _dict['modifiedBy'] = self.modified_by.to_dict()
        # override the default output from pydantic by calling `to_dict()` of log_data
        if self.log_data:
            _dict['logData'] = self.log_data.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        # set to None if type (nullable) is None
        # and model_fields_set contains the field
        if self.type is None and "type" in self.model_fields_set:
            _dict['type'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of BoardItemContentLog from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "id": obj.get("id"),
            "itemId": obj.get("itemId"),
            "type": obj.get("type"),
            "action": obj.get("action"),
            "boardKey": obj.get("boardKey"),
            "hidden": obj.get("hidden"),
            "createdAt": obj.get("createdAt"),
            "createdBy": User.from_dict(obj["createdBy"]) if obj.get("createdBy") is not None else None,
            "modifiedAt": obj.get("modifiedAt"),
            "modifiedBy": User.from_dict(obj["modifiedBy"]) if obj.get("modifiedBy") is not None else None,
            "logData": BoardContentLogData.from_dict(obj["logData"]) if obj.get("logData") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj

