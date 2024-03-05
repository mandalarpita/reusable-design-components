"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _customClasses = require("../customClasses");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _excluded = ["onChange", "rules", "root", "name", "color", "placement", "overrideColor", "value", "label", "errors", "elementid", "size", "isValidate", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CheckBox = function CheckBox(props) {
  var onChange = props.onChange,
    rules = props.rules,
    root = props.root,
    name = props.name,
    color = props.color,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? "right" : _props$placement,
    overrideColor = props.overrideColor,
    value = props.value,
    label = props.label,
    _props$errors = props.errors,
    errors = _props$errors === void 0 ? {} : _props$errors,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-checkbox" : _props$elementid,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    _props$isValidate = props.isValidate,
    isValidate = _props$isValidate === void 0 ? name ? true : false : _props$isValidate,
    className = props.className,
    other = _objectWithoutProperties(props, _excluded);
  // if (root) {
  //   let roots = root.split(".");
  //   errors = errors?.[roots[0]]?.[roots[1]]?.[name];
  //   name = `${root}.${name}`;
  // }
  // let err = false;
  // if (name && errors[name] && "message" in errors?.[name]) {
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
  var options = (0, _customClasses.groupedComponentTextSize)(size, placement);
  var colorProps = (0, _customClasses.getColorsProps)(color, overrideColor);
  var classes = (0, _customClasses.getClassBySize)(size, "customCheckbox", color, overrideColor);
  var handleChange = function handleChange(e) {
    if (onChange && typeof onChange === "function") {
      onChange(e.target.checked);
    }
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isValidate ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: options.direction,
    justifyContent: "start",
    alignItems: "center",
    alignContent: "flex-start",
    width: "fit-content"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Checkbox, _extends({}, colorProps, {
    elementid: elementid,
    disableTouchRipple: true,
    checked: value,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes),
    onChange: handleChange
  }, other))), label && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: options.variant
  }, label))), errors && errors[name].message) : /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: options.direction,
    justifyContent: "start",
    alignItems: "center",
    alignContent: "flex-start",
    width: "fit-content"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Checkbox, _extends({}, colorProps, {
    elementid: elementid,
    disableTouchRipple: true,
    checked: value,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes),
    onChange: handleChange
  }, other))), label && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: options.variant
  }, label))));
};
var _default = CheckBox;
exports["default"] = _default;