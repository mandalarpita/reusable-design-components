"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemedRadioButton = exports.SizesOfRadioButton = exports.RadioGroupExample = exports.LabelRadio = exports.DisabledRadioButton = void 0;
exports["default"] = TestRadioButtons;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _material = require("@mui/material");
var _theme = require("../theme");
var _RadioButton = _interopRequireDefault(require("../Inputs/RadioButton"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TestRadioButtons() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(SizesOfRadioButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ThemedRadioButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DisabledRadioButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(RadioGroupExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(LabelRadio, null))));
}
var SizesOfRadioButton = function SizesOfRadioButton() {
  return (
    /*#__PURE__*/
    // <BrowserWindow url="Example : Sizes of Radio Button">
    _react["default"].createElement(_styles.ThemeProvider, {
      theme: _theme.customTheme
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      size: "xs"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      size: "sm"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      size: "md"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      size: "lg"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      size: "xl"
    }))))
    // </BrowserWindow>
  );
};
exports.SizesOfRadioButton = SizesOfRadioButton;
var ThemedRadioButton = function ThemedRadioButton() {
  return (
    /*#__PURE__*/
    // <BrowserWindow url="Example : Themed Radio Button">
    _react["default"].createElement(_styles.ThemeProvider, {
      theme: _theme.customTheme
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      conatiner: true,
      spacing: "2"
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      color: "primary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      color: "secondary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      overrideColor: _theme.customTheme.palette.primary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      overrideColor: _theme.customTheme.palette.primary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      overrideColor: _theme.customTheme.palette.secondary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      overrideColor: _theme.customTheme.palette.secondary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      overrideColor: "#99627A"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      overrideColor: "#D25380"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      overrideColor: "#C4DFDF"
    })))))
    // </BrowserWindow>
  );
};
exports.ThemedRadioButton = ThemedRadioButton;
var DisabledRadioButton = function DisabledRadioButton() {
  return (
    /*#__PURE__*/
    // <BrowserWindow url="Example : Disabled Radio Button">
    _react["default"].createElement(_styles.ThemeProvider, {
      theme: _theme.customTheme
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      conatiner: true,
      spacing: "2"
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      color: "primary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      color: "secondary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.primary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.primary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.secondary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.secondary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      overrideColor: "#99627A"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      overrideColor: "#D25380"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      disabled: true,
      checked: true,
      overrideColor: "#C4DFDF"
    })))))
    // </BrowserWindow>
  );
};
exports.DisabledRadioButton = DisabledRadioButton;
var RadioGroupExample = function RadioGroupExample() {
  var _useState = (0, _react.useState)("female"),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var handleChange = function handleChange(event) {
    setValue(event.target.value);
  };
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControl, null, /*#__PURE__*/_react["default"].createElement(_material.RadioGroup, {
    "aria-labelledby": "demo-radio-buttons-group-label",
    defaultValue: "female",
    value: value,
    onChange: handleChange,
    name: "radio-buttons-group"
  }, /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "female",
    control: /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      color: "secondary"
    }),
    label: "Female"
  }), /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "male",
    control: /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      color: "secondary"
    }),
    label: "Male"
  }), /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    value: "other",
    control: /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
      color: "secondary"
    }),
    label: "Other"
  }))));
};
exports.RadioGroupExample = RadioGroupExample;
var LabelRadio = function LabelRadio() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    size: "xs",
    label: "Create PR"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    size: "sm",
    label: "Placement - top",
    placement: "top"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    size: "md",
    label: "Placement - right",
    placement: "right"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    size: "lg",
    label: "Placement - bottom",
    placement: "bottom"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    size: "xl",
    label: "Placement - left",
    placement: "left"
  }))));
};
exports.LabelRadio = LabelRadio;