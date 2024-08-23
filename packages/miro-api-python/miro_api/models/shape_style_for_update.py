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


class ShapeStyleForUpdate(BaseModel):
    """
    Contains information about the shape style, such as the border color or opacity. <br> All properties in style object are supported for shape types aren't listed below. <br> <table>   <tr>     <th align=\"left\">Shape type</th>     <th align=\"left\">Unsupported properties</th>   </tr>   <tr>     <td>flow_chart_or</td>     <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>   </tr>   <tr>     <td>flow_chart_summing_junction</td>     <td>fontSize, fontFamily, color, textAlign, textAlignVertical</td>   </tr>   <tr>     <td>flow_chart_note_curly_left</td>     <td>fillColor, fillOpacity</td>   </tr>   <tr>     <td>flow_chart_note_curly_right</td>     <td>fillColor, fillOpacity</td>   </tr>   <tr>     <td>flow_chart_note_square</td>     <td>fillColor, fillOpacity</td>   </tr> </table>
    """  # noqa: E501

    border_color: Optional[StrictStr] = Field(
        default=None, description="Defines the color of the border of the shape.", alias="borderColor"
    )
    border_opacity: Optional[Annotated[str, Field(strict=True)]] = Field(
        default=None,
        description="Defines the opacity level of the shape border. Possible values: any number between `0.0` and `1.0`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid",
        alias="borderOpacity",
    )
    border_style: Optional[StrictStr] = Field(
        default=None, description="Defines the style used to represent the border of the shape.", alias="borderStyle"
    )
    border_width: Optional[Annotated[str, Field(strict=True)]] = Field(
        default=None, description="Defines the thickness of the shape border, in dp.", alias="borderWidth"
    )
    color: Optional[StrictStr] = Field(
        default=None, description="Hex value representing the color for the text within the shape item."
    )
    fill_color: Optional[StrictStr] = Field(
        default=None,
        description="Fill color for the shape. Hex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000`",
        alias="fillColor",
    )
    fill_opacity: Optional[Annotated[str, Field(strict=True)]] = Field(
        default=None,
        description="Opacity level of the fill color. Possible values: any number between `0` and `1`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid ",
        alias="fillOpacity",
    )
    font_family: Optional[StrictStr] = Field(
        default=None, description="Defines the font type for the text in the shape item.", alias="fontFamily"
    )
    font_size: Optional[Annotated[str, Field(strict=True)]] = Field(
        default=None, description="Defines the font size, in dp, for the text on the shape.", alias="fontSize"
    )
    text_align: Optional[StrictStr] = Field(
        default=None, description="Defines how the sticky note text is horizontally aligned.", alias="textAlign"
    )
    text_align_vertical: Optional[StrictStr] = Field(
        default=None, description="Defines how the sticky note text is vertically aligned.", alias="textAlignVertical"
    )
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = [
        "borderColor",
        "borderOpacity",
        "borderStyle",
        "borderWidth",
        "color",
        "fillColor",
        "fillOpacity",
        "fontFamily",
        "fontSize",
        "textAlign",
        "textAlignVertical",
    ]

    @field_validator("border_style")
    def border_style_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["normal", "dotted", "dashed"]):
            raise ValueError("must be one of enum values ('normal', 'dotted', 'dashed')")
        return value

    @field_validator("font_family")
    def font_family_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(
            [
                "arial",
                "abril_fatface",
                "bangers",
                "eb_garamond",
                "georgia",
                "graduate",
                "gravitas_one",
                "fredoka_one",
                "nixie_one",
                "open_sans",
                "permanent_marker",
                "pt_sans",
                "pt_sans_narrow",
                "pt_serif",
                "rammetto_one",
                "roboto",
                "roboto_condensed",
                "roboto_slab",
                "caveat",
                "times_new_roman",
                "titan_one",
                "lemon_tuesday",
                "roboto_mono",
                "noto_sans",
                "plex_sans",
                "plex_serif",
                "plex_mono",
                "spoof",
                "tiempos_text",
                "formular",
            ]
        ):
            raise ValueError(
                "must be one of enum values ('arial', 'abril_fatface', 'bangers', 'eb_garamond', 'georgia', 'graduate', 'gravitas_one', 'fredoka_one', 'nixie_one', 'open_sans', 'permanent_marker', 'pt_sans', 'pt_sans_narrow', 'pt_serif', 'rammetto_one', 'roboto', 'roboto_condensed', 'roboto_slab', 'caveat', 'times_new_roman', 'titan_one', 'lemon_tuesday', 'roboto_mono', 'noto_sans', 'plex_sans', 'plex_serif', 'plex_mono', 'spoof', 'tiempos_text', 'formular')"
            )
        return value

    @field_validator("text_align")
    def text_align_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["left", "right", "center"]):
            raise ValueError("must be one of enum values ('left', 'right', 'center')")
        return value

    @field_validator("text_align_vertical")
    def text_align_vertical_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in set(["top", "middle", "bottom"]):
            raise ValueError("must be one of enum values ('top', 'middle', 'bottom')")
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
        """Create an instance of ShapeStyleForUpdate from a JSON string"""
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
        """Create an instance of ShapeStyleForUpdate from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "borderColor": obj.get("borderColor"),
                "borderOpacity": obj.get("borderOpacity"),
                "borderStyle": obj.get("borderStyle"),
                "borderWidth": obj.get("borderWidth"),
                "color": obj.get("color"),
                "fillColor": obj.get("fillColor"),
                "fillOpacity": obj.get("fillOpacity"),
                "fontFamily": obj.get("fontFamily"),
                "fontSize": obj.get("fontSize"),
                "textAlign": obj.get("textAlign"),
                "textAlignVertical": obj.get("textAlignVertical"),
            }
        )
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj
