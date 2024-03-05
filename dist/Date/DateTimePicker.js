"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePicker = void 0;
var React = _interopRequireWildcard(require("react"));
var _AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var _LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var _DatePicker = require("@mui/x-date-pickers/DatePicker");
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _customClasses = require("../../../itm_ui/src/ITM/Controls/customClasses");
var _reactHookForm = require("react-hook-form");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _customClasses2 = require("../customClasses");
var _excluded = ["control", "name", "rules", "errors"],
  _excluded2 = ["ref", "onChange"],
  _excluded3 = ["handleChange", "onChange", "name", "color", "size", "errors", "value", "minDate", "maxDate"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var adapter = new _AdapterDayjs.AdapterDayjs();
var DateTimePicker = function DateTimePicker(props) {
  var control = props.control,
    _props$name = props.name,
    name = _props$name === void 0 ? "" : _props$name,
    rules = props.rules,
    errors = props.errors,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
    control: control,
    name: name,
    rules: {
      required: "Required"
    },
    render: function render(_ref) {
      var _ref$field = _ref.field,
        ref = _ref$field.ref,
        onChange = _ref$field.onChange,
        field = _objectWithoutProperties(_ref$field, _excluded2);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AddDatePicker, _extends({
        errors: errors,
        name: name,
        onChange: onChange
      }, other, field)));
    }
  }));
};
exports.DateTimePicker = DateTimePicker;
var AddDatePicker = function AddDatePicker(props) {
  var handleChange = props.handleChange,
    _onChange = props.onChange,
    _props$name2 = props.name,
    name = _props$name2 === void 0 ? "" : _props$name2,
    color = props.color,
    _props$size = props.size,
    size = _props$size === void 0 ? "small" : _props$size,
    _props$errors = props.errors,
    errors = _props$errors === void 0 ? {} : _props$errors,
    _props$value = props.value,
    value = _props$value === void 0 ? null : _props$value,
    _props$minDate = props.minDate,
    minDate = _props$minDate === void 0 ? null : _props$minDate,
    _props$maxDate = props.maxDate,
    maxDate = _props$maxDate === void 0 ? null : _props$maxDate,
    fields = _objectWithoutProperties(props, _excluded3);
  var err = false;
  if (name in errors && "message" in errors[name]) {
    err = true;
  }
  if (minDate) {
    minDate = new Date(adapter.date(new Date(minDate)));
  }
  if (maxDate) {
    maxDate = new Date(adapter.date(new Date(maxDate)));
  }
  var classes = (0, _customClasses.getClassBySize)(size, "customAutoComplete", color);
  var colorProps = (0, _customClasses2.getColorsProps)(color);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_LocalizationProvider.LocalizationProvider, {
    dateAdapter: _AdapterDayjs.AdapterDayjs
  }, /*#__PURE__*/React.createElement(_DatePicker.DatePicker, _extends({
    name: name
  }, colorProps, {
    className: "".concat(props === null || props === void 0 ? void 0 : props.className, " ").concat(classes.classes),
    minDate: minDate,
    maxDate: maxDate,
    inputFormat: "DD/MM/YYYY",
    value: value ? new Date(adapter.date(new Date(value))) : null,
    onChange: function onChange(newValue) {
      _onChange(newValue);
      if (handleChange) {
        handleChange(newValue);
      }
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(_TextField["default"], _extends({
        name: name,
        className: "".concat(props === null || props === void 0 ? void 0 : props.className, " ").concat(classes.classes)
      }, params));
    },
    size: size
  }, fields))), /*#__PURE__*/React.createElement(_Typography["default"], {
    className: classes.errorstyle
  }, err && errors[name].message));
};