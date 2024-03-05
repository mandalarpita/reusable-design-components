"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeBadge = exports.SizesBadge = exports.BasicUsageExample = void 0;
exports["default"] = Badge;
var _react = _interopRequireDefault(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _styles = require("@mui/material/styles");
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// rds components
// material imports
// theme and external imports
function Badge() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BasicUsageExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(SizesBadge, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ThemeBadge, null))));
}
var BasicUsageExample = function BasicUsageExample() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile",
    color: "primary"
  })));
};
exports.BasicUsageExample = BasicUsageExample;
var SizesBadge = function SizesBadge() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "xs",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "sm",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "md",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "lg",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "xl",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })));
};
exports.SizesBadge = SizesBadge;
var ThemeBadge = function ThemeBadge() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile",
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile",
    color: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile",
    overrideColor: _theme.customTheme.palette.primary.light
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile",
    color: "primary",
    overrideColor: _theme.customTheme.palette.primary.light
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile",
    color: "secondary",
    overrideColor: _theme.customTheme.palette.secondary.light
  }), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile",
    color: "secondary",
    overrideColor: _theme.customTheme.palette.secondary.dark
  })));
};
exports.ThemeBadge = ThemeBadge;