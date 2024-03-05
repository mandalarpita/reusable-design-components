"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _reactHookForm = require("react-hook-form");
var _customClasses = require("../customClasses");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _excluded = ["control", "rules", "root", "color", "overrideColor", "placement", "disabled", "onChange", "className", "sx", "name", "value", "label", "errors", "elementid", "size", "isValidate"],
  _excluded2 = ["ref", "onChange"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Switch = function Switch(props) {
  var control = props.control,
    rules = props.rules,
    root = props.root,
    color = props.color,
    overrideColor = props.overrideColor,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? "right" : _props$placement,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    onChange = props.onChange,
    className = props.className,
    sx = props.sx,
    name = props.name,
    value = props.value,
    label = props.label,
    _props$errors = props.errors,
    errors = _props$errors === void 0 ? {} : _props$errors,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-switch" : _props$elementid,
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
  if (disabled) {
    if (sx) {
      colorProps = _objectSpread(_objectSpread({}, colorProps), {}, {
        sx: _objectSpread(_objectSpread({}, sx), {}, {
          opacity: 0.4
        }),
        disabled: disabled
      });
    } else {
      colorProps = _objectSpread(_objectSpread({}, colorProps), {}, {
        sx: {
          opacity: 0.4
        },
        disabled: disabled
      });
    }
  }
  var options = (0, _customClasses.groupedComponentTextSize)(size, placement);
  var classes = (0, _customClasses.getClassBySize)(size, "customSwitch", color, overrideColor);
  var handleChange = function handleChange(e) {
    if (onChange && typeof onChange === "function") {
      onChange(e.target.checked);
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isValidate ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
    control: control,
    name: name,
    rules: rules,
    render: function render(_ref) {
      var _ref$field = _ref.field,
        ref = _ref$field.ref,
        onChange = _ref$field.onChange,
        fields = _objectWithoutProperties(_ref$field, _excluded2);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Grid["default"], {
        container: true,
        direction: options.direction,
        justifyContent: "start",
        alignItems: "center",
        alignContent: "flex-start",
        width: "fit-content"
      }, /*#__PURE__*/React.createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/React.createElement(_material.Switch, _extends({}, colorProps, {
        elementid: elementid,
        disableTouchRipple: true,
        className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes),
        onChange: handleChange
      }, fields, other))), label && /*#__PURE__*/React.createElement(_Grid["default"], {
        item: true
      }, /*#__PURE__*/React.createElement(_Typography["default"], {
        variant: options.variant
      }, label))), errors && errors[name].message);
    }
  })) : /*#__PURE__*/React.createElement(_Grid["default"], {
    container: true,
    direction: options.direction,
    justifyContent: "start",
    alignItems: "center",
    alignContent: "flex-start",
    width: "fit-content"
  }, /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/React.createElement(_material.Switch, _extends({}, colorProps, {
    checked: true,
    disabled: true,
    elementid: elementid,
    disableTouchRipple: true,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes)
  }, other))), label && /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/React.createElement(_Typography["default"], {
    variant: options.variant
  }, label))));
};
var _default = Switch;
exports["default"] = _default;