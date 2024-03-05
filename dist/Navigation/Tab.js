"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tab;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _customClasses = require("../customClasses");
var _excluded = ["elementid", "className", "labelStyle", "label", "startIcon", "endIcon"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Tab(props) {
  var _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-tab" : _props$elementid,
    className = props.className,
    labelStyle = props.labelStyle,
    label = props.label,
    _props$startIcon = props.startIcon,
    startIcon = _props$startIcon === void 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : _props$startIcon,
    _props$endIcon = props.endIcon,
    endIcon = _props$endIcon === void 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : _props$endIcon,
    others = _objectWithoutProperties(props, _excluded);
  var customClasses = (0, _customClasses.useCustomStyles)();
  return /*#__PURE__*/_react["default"].createElement(_material.Tab, _extends({
    className: className ? "".concat(className, " ").concat(customClasses.customTab) : customClasses.customTab,
    label: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, startIcon, /*#__PURE__*/_react["default"].createElement("span", {
      className: labelStyle ? "".concat(labelStyle, " ").concat(customClasses.customTabsLabel) : customClasses.customTabsLabel
    }, label), endIcon)
  }, others));
}