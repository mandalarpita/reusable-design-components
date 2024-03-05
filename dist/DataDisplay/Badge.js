"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomBadge;
var _react = _interopRequireDefault(require("react"));
var _Badge = _interopRequireDefault(require("@mui/material/Badge"));
var _customClasses = require("../customClasses");
var _colorUtility = require("../Utility/colorUtility");
var _excluded = ["size", "name", "color", "sx", "overrideColor", "children", "elementid", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// default export of custom avater component takes src and name
function CustomBadge(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    name = props.name,
    color = props.color,
    sx = props.sx,
    overrideColor = props.overrideColor,
    children = props.children,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-badge" : _props$elementid,
    className = props.className,
    others = _objectWithoutProperties(props, _excluded);
  var classes = (0, _customClasses.getClassBySize)(size, "", color, overrideColor);
  var colorProps = (0, _customClasses.getColorsProps)(color, overrideColor);
  if (overrideColor) {
    var badgeStyle = {
      "& .MuiBadge-badge": {
        color: (0, _colorUtility.getContrastTextColor)(overrideColor),
        backgroundColor: overrideColor
      }
    };
    colorProps = _objectSpread(_objectSpread({
      sx: badgeStyle
    }, colorProps), sx);
  } else {
    colorProps = _objectSpread(_objectSpread({}, colorProps), sx);
  }
  return /*#__PURE__*/_react["default"].createElement(_Badge["default"], _extends({
    disableTouchRipple: true
  }, colorProps, {
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes),
    elementid: elementid
  }, others), children);
}