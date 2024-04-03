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

from pydantic import BaseModel, Field, StrictStr
from typing import Any, ClassVar, Dict, List, Optional
from typing import Optional, Set
from typing_extensions import Self


class ShapeDataForUpdate(BaseModel):
    """
    Contains shape item data, such as the content or the type of the shape.
    """  # noqa: E501

    content: Optional[StrictStr] = Field(
        default=None,
        description="The text you want to display on the shape. **Note: When updating a shape type to one of the types below, existing `content` will be lost.** <br>**Not supported for shapes:** <ul>   <li>flow_chart_or</li>   <li>flow_chart_summing_junction</li> </ul>",
    )
    shape: Optional[StrictStr] = Field(
        default="rectangle",
        description="Defines the geometric shape of the item when it is rendered on the board. <details>   <summary>Basic shapes</summary>   <ul>     <li>rectangle</li>     <li>round_rectangle</li>     <li>circle</li>     <li>triangle</li>     <li>rhombus</li>     <li>parallelogram</li>     <li>trapezoid</li>     <li>pentagon</li>     <li>hexagon</li>     <li>octagon</li>     <li>wedge_round_rectangle_callout</li>     <li>star</li>     <li>flow_chart_predefined_process</li>     <li>cloud</li>     <li>cross</li>     <li>can</li>     <li>right_arrow</li>     <li>left_arrow</li>     <li>left_right_arrow</li>     <li>left_brace</li>     <li>right_brace</li>   </ul> </details> <details>   <summary>Flowchart shapes</summary>   <ul>     <li>flow_chart_connector</li>     <li>flow_chart_magnetic_disk</li>     <li>flow_chart_input_output</li>     <li>flow_chart_decision</li>     <li>flow_chart_delay</li>     <li>flow_chart_display</li>     <li>flow_chart_document</li>     <li>flow_chart_magnetic_drum</li>     <li>flow_chart_internal_storage</li>     <li>flow_chart_manual_input</li>     <li>flow_chart_manual_operation</li>     <li>flow_chart_merge</li>     <li>flow_chart_multidocuments</li>     <li>flow_chart_note_curly_left</li>     <li>flow_chart_note_curly_right</li>     <li>flow_chart_note_square</li>     <li>flow_chart_offpage_connector</li>     <li>flow_chart_or</li>     <li>flow_chart_predefined_process_2</li>     <li>flow_chart_preparation</li>     <li>flow_chart_process</li>     <li>flow_chart_online_storage</li>     <li>flow_chart_summing_junction</li>     <li>flow_chart_terminator</li>   </ul> </details>",
    )
    additional_properties: Dict[str, Any] = {}
    __properties: ClassVar[List[str]] = ["content", "shape"]

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
        """Create an instance of ShapeDataForUpdate from a JSON string"""
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
        """Create an instance of ShapeDataForUpdate from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate(
            {
                "content": obj.get("content"),
                "shape": (
                    obj.get("shape") if obj.get("shape") is not None else "rectangle"
                ),
            }
        )
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj
