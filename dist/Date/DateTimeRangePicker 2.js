"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimeRangePicker = exports.DateTimePicker = void 0;
var React = _interopRequireWildcard(require("react"));
var _rsuite = require("rsuite");
require("rsuite/dist/rsuite.min.css");
require("./styles.css");
var _styles2 = require("@mui/styles");
var _customClasses = require("../../../itm_ui/src/ITM/Controls/customClasses");
var _reactHookForm = require("react-hook-form");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _excluded = ["control", "rules", "name", "errors", "root"],
  _excluded2 = ["ref", "onChange"],
  _excluded3 = ["handleChange", "onChange", "name", "amountOfMonths", "value", "size", "placeholder", "errors"]; // import { DateRangePicker } from "@mantine/dates";
// import DateRangePicker from "rsuite/DateRangePicker";
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var DateTimeRangePicker = function DateTimeRangePicker(props) {
  var control = props.control,
    rules = props.rules,
    _props$name = props.name,
    name = _props$name === void 0 ? "" : _props$name,
    _props$errors = props.errors,
    errors = _props$errors === void 0 ? {} : _props$errors,
    root = props.root,
    other = _objectWithoutProperties(props, _excluded);
  if (root) {
    var _errors, _errors$roots$, _errors$roots$$roots$;
    var roots = root.split(".");
    errors = (_errors = errors) === null || _errors === void 0 ? void 0 : (_errors$roots$ = _errors[roots[0]]) === null || _errors$roots$ === void 0 ? void 0 : (_errors$roots$$roots$ = _errors$roots$[roots[1]]) === null || _errors$roots$$roots$ === void 0 ? void 0 : _errors$roots$$roots$[name];
    name = "".concat(root, ".").concat(name);
  } else {
    var _errors2;
    errors = (_errors2 = errors) === null || _errors2 === void 0 ? void 0 : _errors2[name];
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
    control: control,
    name: name,
    rules: rules,
    render: function render(_ref) {
      var _ref$field = _ref.field,
        ref = _ref$field.ref,
        onChange = _ref$field.onChange,
        fields = _objectWithoutProperties(_ref$field, _excluded2);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DateTimePicker, _extends({
        name: name,
        errors: errors,
        onChange: onChange
      }, fields, other)));
    }
  }));
};
exports.DateTimeRangePicker = DateTimeRangePicker;
var DateTimePicker = function DateTimePicker(props) {
  var handleChange = props.handleChange,
    _onChange = props.onChange,
    _props$name2 = props.name,
    name = _props$name2 === void 0 ? "" : _props$name2,
    _props$amountOfMonths = props.amountOfMonths,
    amountOfMonths = _props$amountOfMonths === void 0 ? 2 : _props$amountOfMonths,
    value = props.value,
    _props$size = props.size,
    size = _props$size === void 0 ? "sm" : _props$size,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? "" : _props$placeholder,
    _props$errors2 = props.errors,
    errors = _props$errors2 === void 0 ? {} : _props$errors2,
    fields = _objectWithoutProperties(props, _excluded3);
  value = value ? [value[0] instanceof Date ? value[0] : new Date(value[0]), value[1] instanceof Date ? value[1] : new Date(value[0])] : null;
  switch (size) {
    case "small":
      {
        size = "sm";
        break;
      }
    case "medium":
      {
        size = "md";
        break;
      }
    case "large":
      {
        size = "lg";
        break;
      }
    default:
      {
        size = "sm";
      }
  }
  var classes = (0, _customClasses.getClassBySize)(size, "cwSmallDRP");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_rsuite.DateRangePicker, {
    className: "cwSmallDRP",
    name: name,
    size: size,
    value: value,
    onChange: function onChange(v) {
      _onChange(v);
      if (handleChange) {
        handleChange(v);
      }
    }
    // disabledDate={disabledDate}
    // {...fields}
  }), /*#__PURE__*/React.createElement(_Typography["default"], {
    className: classes.errorstyle
  }, errors === null || errors === void 0 ? void 0 : errors["message"]));
};
exports.DateTimePicker = DateTimePicker;