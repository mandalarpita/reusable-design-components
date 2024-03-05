"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AutoComplete;
var _react = _interopRequireWildcard(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Select = _interopRequireDefault(require("../Inputs/Select"));
var _material = require("@mui/material");
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _reactHookForm = require("react-hook-form");
var _MultiSelect = _interopRequireDefault(require("../Inputs/MultiSelect"));
var _Avatar = _interopRequireDefault(require("../DataDisplay/Avatar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function AutoComplete() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BasicUsageExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(SelectSizesExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(PlaceholdeSingleSelectExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BasicMultiSelectExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(MultiSelectSizesExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(PlaceholderMultiSelectExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(LimitTagsMultiSelectExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(AutoCompleteReadOnlyExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(AutoCompleteDisabledExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(CustomiseOptionsExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(OptionsGroupingExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DisabledOptionsExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(FixedOptionsExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  })));
}
var BasicUsageExample = function BasicUsageExample() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    selected = _useState2[0],
    setSelected = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: dropdownData,
    placeholder: "Single Select - Select from Employee Data",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    }
  }));
};
var SelectSizesExample = function SelectSizesExample() {
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    selected = _useState4[0],
    setSelected = _useState4[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    size: "xs",
    options: dropdownData,
    placeholder: "XS - Select from Employee Data",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    size: "sm",
    options: dropdownData,
    placeholder: "SM - Select from Employee Data",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    size: "md",
    options: dropdownData,
    placeholder: "MD - Select from Employee Data",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    size: "lg",
    options: dropdownData,
    placeholder: "LG - Select from Employee Data",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    size: "xl",
    options: dropdownData,
    placeholder: "XL - Select from Employee Data",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    }
  }));
};
var PlaceholdeSingleSelectExample = function PlaceholdeSingleSelectExample() {
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    selected = _useState6[0],
    setSelected = _useState6[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: dropdownData,
    placeholder: "Single Select - This is placeholder text",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    }
  }));
};
var BasicMultiSelectExample = function BasicMultiSelectExample() {
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    aselected = _useState8[0],
    setASelected = _useState8[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }));
};
var PlaceholderMultiSelectExample = function PlaceholderMultiSelectExample() {
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    aselected = _useState10[0],
    setASelected = _useState10[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }));
};
var MultiSelectSizesExample = function MultiSelectSizesExample() {
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    aselected = _useState12[0],
    setASelected = _useState12[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    size: "xs",
    placeholder: "XS - Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    size: "sm",
    placeholder: "SM - Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    size: "md",
    placeholder: "MD - Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    size: "lg",
    placeholder: "LG - Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    size: "xl",
    placeholder: "XL - Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }));
};
var LimitTagsMultiSelectExample = function LimitTagsMultiSelectExample() {
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    aselected = _useState14[0],
    setASelected = _useState14[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    limitTags: 2,
    options: dropdownData,
    placeholder: "Multi Select - Select from Employee Data",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    }
  }));
};
var AutoCompleteDisabledExample = function AutoCompleteDisabledExample() {
  var _useState15 = (0, _react.useState)("RES025"),
    _useState16 = _slicedToArray(_useState15, 2),
    selected = _useState16[0],
    setSelected = _useState16[1];
  var _useState17 = (0, _react.useState)(["SUP013", "FIN017"]),
    _useState18 = _slicedToArray(_useState17, 2),
    aselected = _useState18[0],
    setASelected = _useState18[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: dropdownData,
    placeholder: "Single Select - Disabled",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    },
    disabled: true
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Disabled",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    },
    disabled: true
  }));
};
var AutoCompleteReadOnlyExample = function AutoCompleteReadOnlyExample() {
  var _useState19 = (0, _react.useState)("RES025"),
    _useState20 = _slicedToArray(_useState19, 2),
    selected = _useState20[0],
    setSelected = _useState20[1];
  var _useState21 = (0, _react.useState)(["SUP013", "FIN017"]),
    _useState22 = _slicedToArray(_useState21, 2),
    aselected = _useState22[0],
    setASelected = _useState22[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: dropdownData,
    placeholder: "Single Select - Read Only",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    },
    readOnly: true
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Read Only",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    },
    readOnly: true
  }));
};
var CustomiseOptionsExample = function CustomiseOptionsExample() {
  var _useState23 = (0, _react.useState)("RES025"),
    _useState24 = _slicedToArray(_useState23, 2),
    selected = _useState24[0],
    setSelected = _useState24[1];
  var _useState25 = (0, _react.useState)(["SUP013", "FIN017"]),
    _useState26 = _slicedToArray(_useState25, 2),
    aselected = _useState26[0],
    setASelected = _useState26[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: dropdownData,
    placeholder: "Single Select - Options ised",
    value: selected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 2,
            flexShrink: 0
          }
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
        size: "sm",
        name: option.name,
        generateBackground: true
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, option.name, " - ", option.role)));
    }
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Options ised",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 2,
            flexShrink: 0
          }
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
        size: "sm",
        name: option.name,
        generateBackground: true
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, option.name, " - ", option.employeeId)));
    }
  }));
};
var OptionsGroupingExample = function OptionsGroupingExample() {
  var _useState27 = (0, _react.useState)("RES025"),
    _useState28 = _slicedToArray(_useState27, 2),
    selected = _useState28[0],
    setSelected = _useState28[1];
  var _useState29 = (0, _react.useState)(["SUP013", "FIN017"]),
    _useState30 = _slicedToArray(_useState29, 2),
    aselected = _useState30[0],
    setASelected = _useState30[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: dropdownData,
    placeholder: "Single Select - Options ised",
    value: selected,
    groupBy: function groupBy(option) {
      return option.role;
    },
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 2,
            flexShrink: 0
          }
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
        size: "sm",
        name: option.name,
        generateBackground: true
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, option.name, " - ", option.role)));
    }
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Options ised",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    groupBy: function groupBy(option) {
      return option.role;
    },
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 2,
            flexShrink: 0
          }
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
        size: "sm",
        name: option.name,
        generateBackground: true
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, option.name, " - ", option.employeeId)));
    }
  }));
};
var DisabledOptionsExample = function DisabledOptionsExample() {
  var _useState31 = (0, _react.useState)("RES025"),
    _useState32 = _slicedToArray(_useState31, 2),
    selected = _useState32[0],
    setSelected = _useState32[1];
  var _useState33 = (0, _react.useState)(["SUP013", "FIN017"]),
    _useState34 = _slicedToArray(_useState33, 2),
    aselected = _useState34[0],
    setASelected = _useState34[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    options: dropdownData,
    placeholder: "Single Select - Options Disabled for HR Coordinator",
    value: selected,
    groupBy: function groupBy(option) {
      return option.role;
    },
    optionKey: "employeeId",
    optionLabel: "name",
    onChange: function onChange(oSelected) {
      setSelected(oSelected);
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 2,
            flexShrink: 0
          }
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
        size: "sm",
        name: option.name,
        generateBackground: true
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, option.name, " - ", option.role)));
    },
    getOptionDisabled: function getOptionDisabled(option) {
      return (option === null || option === void 0 ? void 0 : option.role) === "HR Coordinator";
    }
  }), /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Options Disabled for John Doe",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    getOptionDisabled: function getOptionDisabled(option) {
      return (option === null || option === void 0 ? void 0 : option.name) === "John Doe";
    },
    groupBy: function groupBy(option) {
      return option.role;
    },
    onChange: function onChange(oSelected) {
      setASelected(oSelected);
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 2,
            flexShrink: 0
          }
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
        size: "sm",
        name: option.name,
        generateBackground: true
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, option.name, " - ", option.employeeId)));
    }
  }));
};
var FixedOptionsExample = function FixedOptionsExample() {
  var _useState35 = (0, _react.useState)(["SUP013", "FIN017"]),
    _useState36 = _slicedToArray(_useState35, 2),
    aselected = _useState36[0],
    setASelected = _useState36[1];
  var fixedOptionsMultiSelect = [dropdownData[11].employeeId, dropdownData[10].employeeId];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_MultiSelect["default"], {
    options: dropdownData,
    placeholder: "Multi Select - Options Disabled for John Doe",
    value: aselected,
    optionKey: "employeeId",
    optionLabel: "name",
    getOptionDisabled: function getOptionDisabled(option) {
      return (option === null || option === void 0 ? void 0 : option.name) === "John Doe";
    },
    groupBy: function groupBy(option) {
      return option.role;
    },
    onChange: function onChange(oSelected) {
      setASelected([].concat(_toConsumableArray(oSelected), fixedOptionsMultiSelect));
    },
    renderOption: function renderOption(props, option) {
      return /*#__PURE__*/_react["default"].createElement(_material.Box, _extends({
        component: "li",
        sx: {
          "& > img": {
            mr: 2,
            flexShrink: 0
          }
        }
      }, props), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 2,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
        size: "sm",
        name: option.name,
        generateBackground: true
      })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true
      }, option.name, " - ", option.employeeId)));
    }
  }));
};
var dropdownData = [{
  id: 2,
  name: "Jane Smith",
  role: "Architect",
  employeeId: "DEV002"
}, {
  id: 3,
  name: "Michael Johnson",
  role: "Architect",
  employeeId: "DSN003"
}, {
  id: 6,
  name: "Olivia Wilson",
  role: "Architect",
  employeeId: "ENG006"
}, {
  id: 7,
  name: "James Taylor",
  role: "Architect",
  employeeId: "ADM007"
}, {
  id: 11,
  name: "Ethan Thomas",
  role: "Architect",
  employeeId: "SCR011"
}, {
  id: 12,
  name: "Ava White",
  role: "Architect",
  employeeId: "QA012"
}, {
  id: 13,
  name: "Matthew Thompson",
  role: "Architect",
  employeeId: "SUP013"
}, {
  id: 15,
  name: "William Robinson",
  role: "Architect",
  employeeId: "SLS015"
}, {
  id: 16,
  name: "Abigail Clark",
  role: "HR Coordinator",
  employeeId: "HRC016"
}, {
  id: 17,
  name: "Benjamin Lewis",
  role: "HR Coordinator",
  employeeId: "FIN017"
}, {
  id: 20,
  name: "Sofia Hernandez",
  role: "HR Coordinator",
  employeeId: "DSC020"
}, {
  id: 21,
  name: "Andrew King",
  role: "HR Coordinator",
  employeeId: "CNT021"
}, {
  id: 22,
  name: "Grace Adams",
  role: "HR Coordinator",
  employeeId: "GPH022"
}, {
  id: 1,
  name: "John Doe",
  role: "Manager",
  employeeId: "EMP001"
}, {
  id: 9,
  name: "Daniel Martinez",
  role: "Manager",
  employeeId: "PRJ009"
}, {
  id: 14,
  name: "Emma Garcia",
  role: "Manager",
  employeeId: "MKT014"
}, {
  id: 19,
  name: "Henry Young",
  role: "Manager",
  employeeId: "OPM019"
}, {
  id: 10,
  name: "Mia Johnson",
  role: "Product Owner",
  employeeId: "PRO010"
}, {
  id: 4,
  name: "Emily Davis",
  role: "Researcher",
  employeeId: "TST004"
}, {
  id: 5,
  name: "David Brown",
  role: "Researcher",
  employeeId: "ANA005"
}, {
  id: 8,
  name: "Sophia Anderson",
  role: "Researcher",
  employeeId: "ARC008"
}, {
  id: 18,
  name: "Harper Hall",
  role: "Researcher",
  employeeId: "CUS018"
}, {
  id: 23,
  name: "Joseph Turner",
  role: "Researcher",
  employeeId: "ITA023"
}, {
  id: 24,
  name: "Chloe Walker",
  role: "Researcher",
  employeeId: "BAN024"
}, {
  id: 25,
  name: "Liam Moore",
  role: "Researcher",
  employeeId: "RES025"
}];