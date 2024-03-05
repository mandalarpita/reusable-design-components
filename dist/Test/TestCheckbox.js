"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemedCheckBox = exports.SizesOfCheckBox = exports.LabelCheckbox = exports.DisabledCheckbox = exports.CustomiseIcon = void 0;
exports["default"] = TestCheckbox;
var _material = require("@mui/material");
var _system = require("@mui/system");
var _react = _interopRequireWildcard(require("react"));
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _CheckBox = _interopRequireDefault(require("../Inputs/CheckBox"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function TestCheckbox() {
  return /*#__PURE__*/_react["default"].createElement(_system.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(SizesOfCheckBox, null)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ThemedCheckBox, null)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DisabledCheckbox, null)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(LabelCheckbox, null)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(CustomiseIcon, null))));
}
var SizesOfCheckBox = function SizesOfCheckBox() {
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "xs"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "sm"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "md"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "lg"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "xl"
  })));
};
exports.SizesOfCheckBox = SizesOfCheckBox;
var ThemedCheckBox = function ThemedCheckBox() {
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    conatiner: true,
    spacing: "2"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    color: "primary"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    color: "secondary"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    overrideColor: _theme.customTheme.palette.primary.light
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    overrideColor: _theme.customTheme.palette.primary.dark
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    overrideColor: _theme.customTheme.palette.secondary.light
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    overrideColor: _theme.customTheme.palette.secondary.dark
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    overrideColor: "#99627A"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    overrideColor: "#D25380"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    overrideColor: "#C4DFDF"
  }))));
};
exports.ThemedCheckBox = ThemedCheckBox;
var DisabledCheckbox = function DisabledCheckbox() {
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    conatiner: true,
    spacing: "2"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    color: "primary"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    color: "secondary"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    overrideColor: _theme.customTheme.palette.primary.light
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    overrideColor: _theme.customTheme.palette.primary.dark
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    overrideColor: _theme.customTheme.palette.secondary.light
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    overrideColor: _theme.customTheme.palette.secondary.dark
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    overrideColor: "#99627A"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    overrideColor: "#D25380"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    disabled: true,
    checked: true,
    overrideColor: "#C4DFDF"
  }))));
};
exports.DisabledCheckbox = DisabledCheckbox;
var LabelCheckbox = function LabelCheckbox() {
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "xs",
    label: "Create PR"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "sm",
    label: "Placement - top",
    placement: "top"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "md",
    label: "Placement - right",
    placement: "right"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "lg",
    label: "Placement - bottom",
    placement: "bottom"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "xl",
    label: "Placement - left",
    placement: "left"
  })));
};
exports.LabelCheckbox = LabelCheckbox;
var CustomiseIcon = function CustomiseIcon() {
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    color: "primary",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "RemixIcon.RiAdvertisementLine"
    }),
    checkedIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "RemixIcon.RiAdvertisementFill"
    }),
    label: "Display Ads"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "lg",
    color: "secondary",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "MaterialIcon.MdDocumentScanner"
    }),
    checkedIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "MaterialIcon.MdDocumentScanner"
    }),
    label: "Scan Document"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
    size: "xl",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "BoxIcon.BiBellOff"
    }),
    checkedIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "BoxIcon.BiBell"
    }),
    overrideColor: "#E91E62",
    label: "Enable Notification"
  })));
};
exports.CustomiseIcon = CustomiseIcon;