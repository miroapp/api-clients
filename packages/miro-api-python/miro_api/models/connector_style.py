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

from pydantic import BaseModel, Field, StrictStr, field_validator
from typing import Any, ClassVar, Dict, List, Optional
from typing_extensions import Annotated
from typing import Optional, Set
from typing_extensions import Self


class ConnectorStyle(BaseModel):
    """
    Contains information about the style of a connector, such as the color or caption font size
    """  # noqa: E501

    color: Optional[StrictStr] = Field(
        default=None,
        description="Hex value representing the color for the captions on the connector. Default: `#1a1a1a`",
    )
    end_stroke_cap: Optional[StrictStr] = Field(
        default=None,
        description="The decoration cap of the connector end, like an arrow or circle. Default: stealth.",
        alias="endStrokeCap",
    )
    font_size: Optional[Annotated[str, Field(strict=True)]] = Field(
        default=None,
        description="Defines the font size, in dp, for the captions on the connector. Default: 14",
        alias="fontSize",
    )
    start_stroke_cap: Optional[StrictStr] = Field(
        default=None,
        description="The decoration cap of the connector end, like an arrow or circle. Default: none.",
        alias="startStrokeCap",
    )
    stroke_color: Optional[StrictStr] = Field(
        default=None, description="Hex value of the color of the connector line. Default: #000000.", alias="strokeColor"
    )
    stroke_style: Optional[StrictStr] = Field(
        default=None, description="The stroke pattern of the connector line. Default: normal.", alias="strokeStyle"
    )
    stroke_width: Optional[Annotated[str, Field(strict=True)]] = Field(
        default=None, description="The thickness of the connector line, in dp. Default: 1.0.", alias="strokeWidth"
    )
    text_orientation: Optional[StrictStr] = Field(
        default=None,
        description="The captions orientation relatively to the connector line curvature. Default: aligned.",
        alias="textOrientation",
    )
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = [
        "color",
        "endStrokeCap",
        "fontSize",
        "startStrokeCap",
        "strokeColor",
        "strokeStyle",
        "strokeWidth",
        "textOrientation",
    ]

    @field_validator("end_stroke_cap")
    def end_stroke_cap_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(
            [
                "none",
                "stealth",
                "rounded_stealth",
                "diamond",
                "filled_diamond",
                "oval",
                "filled_oval",
                "arrow",
                "triangle",
                "filled_triangle",
                "erd_one",
                "erd_many",
                "erd_only_one",
                "erd_zero_or_one",
                "erd_one_or_many",
                "erd_zero_or_many",
                "unknown",
            ]
        ):
            raise ValueError(
                "must be one of enum values ('none', 'stealth', 'rounded_stealth', 'diamond', 'filled_diamond', 'oval', 'filled_oval', 'arrow', 'triangle', 'filled_triangle', 'erd_one', 'erd_many', 'erd_only_one', 'erd_zero_or_one', 'erd_one_or_many', 'erd_zero_or_many', 'unknown')"
            )
        return value

    @field_validator("start_stroke_cap")
    def start_stroke_cap_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(
            [
                "none",
                "stealth",
                "rounded_stealth",
                "diamond",
                "filled_diamond",
                "oval",
                "filled_oval",
                "arrow",
                "triangle",
                "filled_triangle",
                "erd_one",
                "erd_many",
                "erd_only_one",
                "erd_zero_or_one",
                "erd_one_or_many",
                "erd_zero_or_many",
                "unknown",
            ]
        ):
            raise ValueError(
                "must be one of enum values ('none', 'stealth', 'rounded_stealth', 'diamond', 'filled_diamond', 'oval', 'filled_oval', 'arrow', 'triangle', 'filled_triangle', 'erd_one', 'erd_many', 'erd_only_one', 'erd_zero_or_one', 'erd_one_or_many', 'erd_zero_or_many', 'unknown')"
            )
        return value

    @field_validator("stroke_style")
    def stroke_style_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["normal", "dotted", "dashed"]):
            raise ValueError("must be one of enum values ('normal', 'dotted', 'dashed')")
        return value

    @field_validator("text_orientation")
    def text_orientation_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["horizontal", "aligned"]):
            raise ValueError("must be one of enum values ('horizontal', 'aligned')")
        return value

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
        """Create an instance of ConnectorStyle from a JSON string"""
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
        excluded_fields: Set[str] = set(
            [
                "additional_properties",
            ]
        )

        _dict = self.model_dump(
            by_alias=True,
            exclude=excluded_fields,
            exclude_none=True,
        )
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: Optional[Dict[str, Any]]) -> Optional[Self]:
        """Create an instance of ConnectorStyle from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "color": obj.get("color"),
                "endStrokeCap": obj.get("endStrokeCap"),
                "fontSize": obj.get("fontSize"),
                "startStrokeCap": obj.get("startStrokeCap"),
                "strokeColor": obj.get("strokeColor"),
                "strokeStyle": obj.get("strokeStyle"),
                "strokeWidth": obj.get("strokeWidth"),
                "textOrientation": obj.get("textOrientation"),
            }
        )
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj
