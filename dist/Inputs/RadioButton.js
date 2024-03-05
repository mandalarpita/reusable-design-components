"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _Radio = _interopRequireDefault(require("@mui/material/Radio"));
var _customClasses = require("../customClasses");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _excluded = ["control", "rules", "className", "root", "color", "placement", "overrideColor", "onChange", "name", "label", "value", "errors", "elementid", "size", "isValidate"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var RadioButton = function RadioButton(props) {
  var control = props.control,
    rules = props.rules,
    className = props.className,
    root = props.root,
    color = props.color,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? "right" : _props$placement,
    overrideColor = props.overrideColor,
    onChange = props.onChange,
    name = props.name,
    label = props.label,
    value = props.value,
    _props$errors = props.errors,
    errors = _props$errors === void 0 ? {} : _props$errors,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-radiobutton" : _props$elementid,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$isValidate = props.isValidate,
    isValidate = _props$isValidate === void 0 ? name ? true : false : _props$isValidate,
    other = _objectWithoutProperties(props, _excluded);
  // if (root) {
  //   let roots = root.split(".");
  //   errors = errors?.[roots[0]]?.[roots[1]]?.[name];
  //   name = `${root}.${name}`;
  // }
  // let err = false;
  // if (name in errors && "message" in errors[name]) {
  //   err = true;
  // }

  if (root) {
    var _errors, _errors$roots$, _errors$roots$$roots$;
    var roots = root.split(".");
    errors = (_errors = errors) === null || _errors === void 0 ? void 0 : (_errors$roots$ = _errors[roots[0]]) === null || _errors$roots$ === void 0 ? void 0 : (_errors$roots$$roots$ = _errors$roots$[roots[1]]) === null || _errors$roots$$roots$ === void 0 ? void 0 : _errors$roots$$roots$[name];
    name = "".concat(root, ".").concat(name);
  } else {
    var _errors2;
    errors = (_errors2 = errors) === null || _errors2 === void 0 ? void 0 : _errors2[name];
  }
  var colorProps = (0, _customClasses.getColorsProps)(color, overrideColor);
  var options = (0, _customClasses.groupedComponentTextSize)(size, placement);
  var classes = (0, _customClasses.getClassBySize)(size, "customRadio", color, overrideColor);
  var handleChange = function handleChange(e) {
    if (onChange && typeof onChange === "function") {
      onChange(e.target.checked);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isValidate ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Grid["default"], {
    container: true,
    direction: options.direction,
    justifyContent: "start",
    alignItems: "center",
    alignContent: "flex-start",
    width: "fit-content"
  }, /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/React.createElement(_Radio["default"], _extends({
    elementid: elementid
  }, colorProps, {
    checked: value,
    disableTouchRipple: true,
    onChange: handleChange,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes)
  }, other))), label && /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: options.variant
  }, label))), errors && errors[name].message) : /*#__PURE__*/React.createElement(_Grid["default"], {
    container: true,
    direction: options.direction,
    justifyContent: "start",
    alignItems: "center",
    alignContent: "flex-start",
    width: "fit-content"
  }, /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/React.createElement(_Radio["default"], _extends({
    elementid: elementid
  }, colorProps, {
    checked: value,
    disableTouchRipple: true,
    onChange: handleChange,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes)
  }, other))), label && /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: options.variant
  }, label))));
};
var _default = RadioButton;
exports["default"] = _default;