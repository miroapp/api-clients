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


def lazy_import():
    from miro_api.model.board_links import BoardLinks
    from miro_api.model.board_member import BoardMember
    from miro_api.model.board_policy import BoardPolicy
    from miro_api.model.get_board_user_info_last_opened_by import GetBoardUserInfoLastOpenedBy
    from miro_api.model.picture import Picture
    from miro_api.model.project import Project
    from miro_api.model.team import Team
    from miro_api.model.user_info_short import UserInfoShort
    globals()['BoardLinks'] = BoardLinks
    globals()['BoardMember'] = BoardMember
    globals()['BoardPolicy'] = BoardPolicy
    globals()['GetBoardUserInfoLastOpenedBy'] = GetBoardUserInfoLastOpenedBy
    globals()['Picture'] = Picture
    globals()['Project'] = Project
    globals()['Team'] = Team
    globals()['UserInfoShort'] = UserInfoShort


class BoardWithLinksAndLastOpened(ModelNormal):
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
    }

    validations = {
    }

    @cached_property
    def additional_properties_type():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded
        """
        lazy_import()
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
        lazy_import()
        return {
            'id': (str,),  # noqa: E501
            'name': (str,),  # noqa: E501
            'description': (str,),  # noqa: E501
            'type': (str,),  # noqa: E501
            'team': (Team,),  # noqa: E501
            'project': (Project,),  # noqa: E501
            'picture': (Picture,),  # noqa: E501
            'policy': (BoardPolicy,),  # noqa: E501
            'view_link': (str,),  # noqa: E501
            'owner': (UserInfoShort,),  # noqa: E501
            'current_user_membership': (BoardMember,),  # noqa: E501
            'created_at': (datetime,),  # noqa: E501
            'created_by': (UserInfoShort,),  # noqa: E501
            'last_opened_at': (datetime,),  # noqa: E501
            'last_opened_by': (GetBoardUserInfoLastOpenedBy,),  # noqa: E501
            'modified_at': (datetime,),  # noqa: E501
            'modified_by': (UserInfoShort,),  # noqa: E501
            'links': (BoardLinks,),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None


    attribute_map = {
        'id': 'id',  # noqa: E501
        'name': 'name',  # noqa: E501
        'description': 'description',  # noqa: E501
        'type': 'type',  # noqa: E501
        'team': 'team',  # noqa: E501
        'project': 'project',  # noqa: E501
        'picture': 'picture',  # noqa: E501
        'policy': 'policy',  # noqa: E501
        'view_link': 'viewLink',  # noqa: E501
        'owner': 'owner',  # noqa: E501
        'current_user_membership': 'currentUserMembership',  # noqa: E501
        'created_at': 'createdAt',  # noqa: E501
        'created_by': 'createdBy',  # noqa: E501
        'last_opened_at': 'lastOpenedAt',  # noqa: E501
        'last_opened_by': 'lastOpenedBy',  # noqa: E501
        'modified_at': 'modifiedAt',  # noqa: E501
        'modified_by': 'modifiedBy',  # noqa: E501
        'links': 'links',  # noqa: E501
    }

    read_only_vars = {
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(cls, id, name, description, type, *args, **kwargs):  # noqa: E501
        """BoardWithLinksAndLastOpened - a model defined in OpenAPI

        Args:
            id (str): Unique identifier (ID) of the board.
            name (str): Name of the board.
            description (str): Description of the board.
            type (str): Type of the object that is returned. In this case, type returns `board`.

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
            team (Team): [optional]  # noqa: E501
            project (Project): [optional]  # noqa: E501
            picture (Picture): [optional]  # noqa: E501
            policy (BoardPolicy): [optional]  # noqa: E501
            view_link (str): URL to view the board.. [optional]  # noqa: E501
            owner (UserInfoShort): [optional]  # noqa: E501
            current_user_membership (BoardMember): [optional]  # noqa: E501
            created_at (datetime): Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).. [optional]  # noqa: E501
            created_by (UserInfoShort): [optional]  # noqa: E501
            last_opened_at (datetime): Date and time when the board was last opened by any user. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).. [optional]  # noqa: E501
            last_opened_by (GetBoardUserInfoLastOpenedBy): [optional]  # noqa: E501
            modified_at (datetime): Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).. [optional]  # noqa: E501
            modified_by (UserInfoShort): [optional]  # noqa: E501
            links (BoardLinks): [optional]  # noqa: E501
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

        self.id = id
        self.name = name
        self.description = description
        self.type = type
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
    def __init__(self, id, name, description, type, *args, **kwargs):  # noqa: E501
        """BoardWithLinksAndLastOpened - a model defined in OpenAPI

        Args:
            id (str): Unique identifier (ID) of the board.
            name (str): Name of the board.
            description (str): Description of the board.
            type (str): Type of the object that is returned. In this case, type returns `board`.

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
            team (Team): [optional]  # noqa: E501
            project (Project): [optional]  # noqa: E501
            picture (Picture): [optional]  # noqa: E501
            policy (BoardPolicy): [optional]  # noqa: E501
            view_link (str): URL to view the board.. [optional]  # noqa: E501
            owner (UserInfoShort): [optional]  # noqa: E501
            current_user_membership (BoardMember): [optional]  # noqa: E501
            created_at (datetime): Date and time when the board was created. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).. [optional]  # noqa: E501
            created_by (UserInfoShort): [optional]  # noqa: E501
            last_opened_at (datetime): Date and time when the board was last opened by any user. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).. [optional]  # noqa: E501
            last_opened_by (GetBoardUserInfoLastOpenedBy): [optional]  # noqa: E501
            modified_at (datetime): Date and time when the board was last modified. Format: UTC, adheres to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601), includes a [trailing Z offset](https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)).. [optional]  # noqa: E501
            modified_by (UserInfoShort): [optional]  # noqa: E501
            links (BoardLinks): [optional]  # noqa: E501
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

        self.id = id
        self.name = name
        self.description = description
        self.type = type
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
