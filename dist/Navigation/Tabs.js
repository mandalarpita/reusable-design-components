"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tabs;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _customClasses = require("../customClasses");
var _excluded = ["elementid", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Tabs(props) {
  var _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-tabs" : _props$elementid,
    className = props.className,
    others = _objectWithoutProperties(props, _excluded);
  var customClasses = (0, _customClasses.useCustomStyles)();
  return /*#__PURE__*/_react["default"].createElement(_material.Tabs, _extends({
    elementid: true,
    className: className ? "".concat(className, " ").concat(customClasses.customTabs) : customClasses.customTabs,
    variant: "scrollable",
    scrollButtons: true,
    allowScrollButtonsMobile: true,
    "aria-label": "scrollable"
  }, others));
}