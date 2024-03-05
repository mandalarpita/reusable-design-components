"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _customClasses = require("../customClasses");
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _styles = require("@mui/styles");
var _excluded = ["size", "startIcon", "disabled", "variant", "children", "elementid", "loading", "className", "color", "overrideColor"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
var spinStyles = (0, _styles.makeStyles)(function () {
  return {
    spinningIcon: {
      animation: "$spin 1s infinite linear"
    },
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)"
      },
      to: {
        transform: "rotate(360deg)"
      }
    }
  };
});
var Button = function Button(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$startIcon = props.startIcon,
    startIcon = _props$startIcon === void 0 ? /*#__PURE__*/React.createElement(React.Fragment, null) : _props$startIcon,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? "default" : _props$variant,
    children = props.children,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-button" : _props$elementid,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    className = props.className,
    color = props.color,
    overrideColor = props.overrideColor,
    others = _objectWithoutProperties(props, _excluded);
  var classes = (0, _customClasses.getClassBySize)(size, "customButton", color, overrideColor);
  var colorProps = (0, _customClasses.getColorsProps)(color, overrideColor);
  var spinClasses = spinStyles();
  if (loading) {
    startIcon = /*#__PURE__*/React.createElement(_Icon["default"], {
      icon: "AntIcon.AiOutlineLoading3Quarters",
      className: spinClasses.spinningIcon
    });
    disabled = true;
  }
  return /*#__PURE__*/React.createElement(_material.Button, _extends({
    elementid: elementid,
    disabled: disabled,
    startIcon: startIcon,
    disableTouchRipple: true,
    variant: variant
  }, colorProps, {
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes)
  }, others), children);
};
var _default = Button;
exports["default"] = _default;