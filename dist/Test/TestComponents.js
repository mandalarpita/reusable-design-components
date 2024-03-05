"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TestComponents;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _TestInputs = _interopRequireDefault(require("./TestInputs"));
var _TestAutoComplete = _interopRequireDefault(require("./TestAutoComplete"));
var _TestAvatars = _interopRequireDefault(require("./TestAvatars"));
var _TestBadge = _interopRequireDefault(require("./TestBadge"));
var _TestChip = _interopRequireDefault(require("./TestChip"));
var _TestIcons = _interopRequireDefault(require("./TestIcons"));
var _TestReports = _interopRequireDefault(require("./TestReports"));
var _TestTabs = _interopRequireDefault(require("./TestTabs"));
var _TestCheckbox = _interopRequireDefault(require("./TestCheckbox"));
var _TestButtons = _interopRequireDefault(require("./TestButtons"));
var _TestSwitch = _interopRequireDefault(require("./TestSwitch"));
var _TestRadioButtons = _interopRequireDefault(require("./TestRadioButtons"));
var _TestDialog = _interopRequireDefault(require("./TestDialog"));
var _TestTooltips = _interopRequireDefault(require("./TestTooltips"));
var _TestKPI = _interopRequireDefault(require("./TestKPI"));
var _TestPopper = _interopRequireDefault(require("./TestPopper"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TestComponents() {
  return /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "column",
    justifyContent: "center",
    alignItems: "stretch",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Inputs"), /*#__PURE__*/_react["default"].createElement(_TestInputs["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, " Select and Multi Select"), /*#__PURE__*/_react["default"].createElement(_TestAutoComplete["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Switch"), /*#__PURE__*/_react["default"].createElement(_TestSwitch["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Radio Button"), /*#__PURE__*/_react["default"].createElement(_TestRadioButtons["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Checkbox"), /*#__PURE__*/_react["default"].createElement(_TestCheckbox["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Buttons"), /*#__PURE__*/_react["default"].createElement(_TestButtons["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Tabs"), /*#__PURE__*/_react["default"].createElement(_TestTabs["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Avatar"), /*#__PURE__*/_react["default"].createElement(_TestAvatars["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Badge"), /*#__PURE__*/_react["default"].createElement(_TestBadge["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Chips"), /*#__PURE__*/_react["default"].createElement(_TestChip["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Icons"), /*#__PURE__*/_react["default"].createElement(_TestIcons["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Dialog"), /*#__PURE__*/_react["default"].createElement(_TestDialog["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Popper"), /*#__PURE__*/_react["default"].createElement(_TestPopper["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Tooltip"), /*#__PURE__*/_react["default"].createElement(_TestTooltips["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "KPI"), /*#__PURE__*/_react["default"].createElement(_TestKPI["default"], null), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Graphs"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Bar"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "BAR"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Column"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "COLUMN"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Line"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "LINE"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Area"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "AREA"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Stack Line"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "STACK_LINE"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Stack Area"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "STACK_AREA"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Stack Bar"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "STACK_BAR"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Stack Column"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "STACK_COLUMN"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Pie"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "PIE"
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, "Donut"), /*#__PURE__*/_react["default"].createElement(_TestReports["default"], {
    chartType: "DONUT"
  }));
}