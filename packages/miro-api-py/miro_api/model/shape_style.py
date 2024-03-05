"""
    Miro Developer Platform

    <img src=\"https://content.pstmn.io/47449ea6-0ef7-4af2-bac1-e58a70e61c58/aW1hZ2UucG5n\" width=\"1685\" height=\"593\">  ### Miro Developer Platform concepts  - New to the Miro Developer Platform? Interested in learning more about platform concepts?? [Read our introduction page](https://beta.developers.miro.com/docs/introduction) and familiarize yourself with the Miro Developer Platform capabilities in a few minutes.   ### Getting started with the Miro REST API  - [Quickstart (video):](https://beta.developers.miro.com/docs/try-out-the-rest-api-in-less-than-3-minutes) try the REST API in less than 3 minutes. - [Quickstart (article):](https://beta.developers.miro.com/docs/build-your-first-hello-world-app-1) get started and try the REST API in less than 3 minutes.   ### Miro REST API tutorials  Check out our how-to articles with step-by-step instructions and code examples so you can:  - [Get started with OAuth 2.0 and Miro](https://beta.developers.miro.com/docs/getting-started-with-oauth)   ### Miro App Examples  Clone our [Miro App Examples repository](https://github.com/miroapp/app-examples) to get inspiration, customize, and explore apps built on top of Miro's Developer Platform 2.0.   # noqa: E501

    The version of the OpenAPI document: v2.0
    Generated by: https://openapi-generator.tech
"""


import re  # noqa: F401
import sys  # noqa: F401

from miro_api.model_utils import (  # noqa: F401
    ApiTypeError,
    ModelComposed,
    ModelNormal,
    ModelSimple,
    cached_property,
    change_keys_js_to_python,
    convert_js_args_to_python_args,
    date,
    datetime,
    file_type,
    none_type,
    validate_get_composed_info,
    OpenApiModel
)
from miro_api.exceptions import ApiAttributeError



class ShapeStyle(ModelNormal):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
      attribute_map (dict): The key is attribute name
          and the value is json key in definition.
      discriminator_value_class_map (dict): A dict to go from the discriminator
          variable value to the discriminator class name.
      validations (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          that stores validations for max_length, min_length, max_items,
          min_items, exclusive_maximum, inclusive_maximum, exclusive_minimum,
          inclusive_minimum, and regex.
      additional_properties_type (tuple): A tuple of classes accepted
          as additional properties values.
    """

    allowed_values = {
        ('border_style',): {
            'NORMAL': "normal",
            'DOTTED': "dotted",
            'DASHED': "dashed",
        },
        ('font_family',): {
            'ARIAL': "arial",
            'ABRIL_FATFACE': "abril_fatface",
            'BANGERS': "bangers",
            'EB_GARAMOND': "eb_garamond",
            'GEORGIA': "georgia",
            'GRADUATE': "graduate",
            'GRAVITAS_ONE': "gravitas_one",
            'FREDOKA_ONE': "fredoka_one",
            'NIXIE_ONE': "nixie_one",
            'OPEN_SANS': "open_sans",
            'PERMANENT_MARKER': "permanent_marker",
            'PT_SANS': "pt_sans",
            'PT_SANS_NARROW': "pt_sans_narrow",
            'PT_SERIF': "pt_serif",
            'RAMMETTO_ONE': "rammetto_one",
            'ROBOTO': "roboto",
            'ROBOTO_CONDENSED': "roboto_condensed",
            'ROBOTO_SLAB': "roboto_slab",
            'CAVEAT': "caveat",
            'TIMES_NEW_ROMAN': "times_new_roman",
            'TITAN_ONE': "titan_one",
            'LEMON_TUESDAY': "lemon_tuesday",
            'ROBOTO_MONO': "roboto_mono",
            'NOTO_SANS': "noto_sans",
            'PLEX_SANS': "plex_sans",
            'PLEX_SERIF': "plex_serif",
            'PLEX_MONO': "plex_mono",
            'SPOOF': "spoof",
            'TIEMPOS_TEXT': "tiempos_text",
            'FORMULAR': "formular",
        },
        ('text_align',): {
            'LEFT': "left",
            'RIGHT': "right",
            'CENTER': "center",
        },
        ('text_align_vertical',): {
            'TOP': "top",
            'MIDDLE': "middle",
            'BOTTOM': "bottom",
        },
    }

    validations = {
        ('border_opacity',): {
        },
        ('border_width',): {
        },
        ('fill_opacity',): {
        },
        ('font_size',): {
        },
    }

    @cached_property
    def additional_properties_type():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded
        """
        return (bool, date, datetime, dict, float, int, list, str, none_type,)  # noqa: E501

    _nullable = False

    @cached_property
    def openapi_types():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded

        Returns
            openapi_types (dict): The key is attribute name
                and the value is attribute type.
        """
        return {
            'border_color': (str,),  # noqa: E501
            'border_opacity': (str,),  # noqa: E501
            'border_style': (str,),  # noqa: E501
            'border_width': (str,),  # noqa: E501
            'color': (str,),  # noqa: E501
            'fill_color': (str,),  # noqa: E501
            'fill_opacity': (str,),  # noqa: E501
            'font_family': (str,),  # noqa: E501
            'font_size': (str,),  # noqa: E501
            'text_align': (str,),  # noqa: E501
            'text_align_vertical': (str,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'border_color': 'borderColor',  # noqa: E501
        'border_opacity': 'borderOpacity',  # noqa: E501
        'border_style': 'borderStyle',  # noqa: E501
        'border_width': 'borderWidth',  # noqa: E501
        'color': 'color',  # noqa: E501
        'fill_color': 'fillColor',  # noqa: E501
        'fill_opacity': 'fillOpacity',  # noqa: E501
        'font_family': 'fontFamily',  # noqa: E501
        'font_size': 'fontSize',  # noqa: E501
        'text_align': 'textAlign',  # noqa: E501
        'text_align_vertical': 'textAlignVertical',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, *args, **kwargs):  # noqa: E501
        """ShapeStyle - a model defined in OpenAPI

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            border_color (str): Defines the color of the border of the shape. Default: `#1a1a1a` (dark gray).. [optional]  # noqa: E501
            border_opacity (str): Defines the opacity level of the shape border. Possible values: any number between `0.0` and `1.0`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` (solid color).. [optional]  # noqa: E501
            border_style (str): Defines the style used to represent the border of the shape. Default: `normal`.. [optional]  # noqa: E501
            border_width (str): Defines the thickness of the shape border, in dp. Default: `2.0`.. [optional]  # noqa: E501
            color (str): Hex value representing the color for the text within the shape item. Default: `#1a1a1a`.. [optional]  # noqa: E501
            fill_color (str): Fill color for the shape. Hex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000` Default: #ffffff.. [optional]  # noqa: E501
            fill_opacity (str): Opacity level of the fill color. Possible values: any number between `0` and `1`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided. . [optional]  # noqa: E501
            font_family (str): Defines the font type for the text in the shape item. Default: `arial`.. [optional]  # noqa: E501
            font_size (str): Defines the font size, in dp, for the text on the shape. Default: `14`.. [optional]  # noqa: E501
            text_align (str): Defines how the sticky note text is horizontally aligned. Default: `center`.. [optional]  # noqa: E501
            text_align_vertical (str): Defines how the sticky note text is vertically aligned. Default: `top`.. [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', True)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        self = super(OpenApiModel, cls).__new__(cls)

        if args:
            for arg in args:
                if isinstance(arg, dict):
                    kwargs.update(arg)
                else:
                    raise ApiTypeError(
                        "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                            args,
                            self.__class__.__name__,
                        ),
                        path_to_item=_path_to_item,
                        valid_classes=(self.__class__,),
                    )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
        return self

    required_properties = set([
        '_data_store',
        '_check_type',
        '_spec_property_naming',
        '_path_to_item',
        '_configuration',
        '_visited_composed_classes',
    ])

    @convert_js_args_to_python_args
    def __init__(self, *args, **kwargs):  # noqa: E501
        """ShapeStyle - a model defined in OpenAPI

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            border_color (str): Defines the color of the border of the shape. Default: `#1a1a1a` (dark gray).. [optional]  # noqa: E501
            border_opacity (str): Defines the opacity level of the shape border. Possible values: any number between `0.0` and `1.0`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` (solid color).. [optional]  # noqa: E501
            border_style (str): Defines the style used to represent the border of the shape. Default: `normal`.. [optional]  # noqa: E501
            border_width (str): Defines the thickness of the shape border, in dp. Default: `2.0`.. [optional]  # noqa: E501
            color (str): Hex value representing the color for the text within the shape item. Default: `#1a1a1a`.. [optional]  # noqa: E501
            fill_color (str): Fill color for the shape. Hex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000` Default: #ffffff.. [optional]  # noqa: E501
            fill_opacity (str): Opacity level of the fill color. Possible values: any number between `0` and `1`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided. . [optional]  # noqa: E501
            font_family (str): Defines the font type for the text in the shape item. Default: `arial`.. [optional]  # noqa: E501
            font_size (str): Defines the font size, in dp, for the text on the shape. Default: `14`.. [optional]  # noqa: E501
            text_align (str): Defines how the sticky note text is horizontally aligned. Default: `center`.. [optional]  # noqa: E501
            text_align_vertical (str): Defines how the sticky note text is vertically aligned. Default: `top`.. [optional]  # noqa: E501
        """

        _check_type = kwargs.pop('_check_type', True)
        _spec_property_naming = kwargs.pop('_spec_property_naming', False)
        _path_to_item = kwargs.pop('_path_to_item', ())
        _configuration = kwargs.pop('_configuration', None)
        _visited_composed_classes = kwargs.pop('_visited_composed_classes', ())

        if args:
            for arg in args:
                if isinstance(arg, dict):
                    kwargs.update(arg)
                else:
                    raise ApiTypeError(
                        "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments." % (
                            args,
                            self.__class__.__name__,
                        ),
                        path_to_item=_path_to_item,
                        valid_classes=(self.__class__,),
                    )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        for var_name, var_value in kwargs.items():
            if var_name not in self.attribute_map and \
                        self._configuration is not None and \
                        self._configuration.discard_unknown_keys and \
                        self.additional_properties_type is None:
                # discard variable.
                continue
            setattr(self, var_name, var_value)
            if var_name in self.read_only_vars:
                raise ApiAttributeError(f"`{var_name}` is a read-only attribute. Use `from_openapi_data` to instantiate "
                                     f"class with read only attributes.")
