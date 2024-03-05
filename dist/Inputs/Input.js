"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _react = _interopRequireDefault(require("react"));
var _customClasses = require("../customClasses");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _reactHookForm = require("react-hook-form");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _excluded = ["control", "name", "rules", "root", "errors", "isValidate"],
  _excluded2 = ["ref", "onChange"],
  _excluded3 = ["onChange", "isValidate", "handleChange", "color", "elementid", "showCount", "maxLength", "handleBlur", "name", "value", "errors", "size", "fields", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Input = function Input(props) {
  var control = props.control,
    name = props.name,
    _props$rules = props.rules,
    rules = _props$rules === void 0 ? {} : _props$rules,
    root = props.root,
    _props$errors = props.errors,
    errors = _props$errors === void 0 ? {} : _props$errors,
    _props$isValidate = props.isValidate,
    isValidate = _props$isValidate === void 0 ? name ? true : false : _props$isValidate,
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
  var lengthProps = {};
  if (!isValidate || isValidate && props !== null && props !== void 0 && props.showCount) {
    if (typeof (rules === null || rules === void 0 ? void 0 : rules.maxLength) === "number") {
      lengthProps = {
        maxLength: {
          value: rules === null || rules === void 0 ? void 0 : rules.maxLength,
          message: ""
        },
        isValidate: isValidate
      };
    } else {
      var _rules$maxLength, _rules$maxLength2;
      lengthProps = {
        maxLength: {
          value: rules === null || rules === void 0 ? void 0 : (_rules$maxLength = rules.maxLength) === null || _rules$maxLength === void 0 ? void 0 : _rules$maxLength.value,
          message: isValidate ? (rules === null || rules === void 0 ? void 0 : (_rules$maxLength2 = rules.maxLength) === null || _rules$maxLength2 === void 0 ? void 0 : _rules$maxLength2.message) || "" : ""
        },
        isValidate: isValidate
      };
    }
  }
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isValidate ? /*#__PURE__*/_react["default"].createElement(_reactHookForm.Controller, {
    control: control,
    name: name,
    rules: rules,
    render: function render(_ref) {
      var _ref$field = _ref.field,
        ref = _ref$field.ref,
        onChange = _ref$field.onChange,
        field = _objectWithoutProperties(_ref$field, _excluded2);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(InputWrapper, _extends({
        name: name,
        errors: errors,
        onChange: onChange
      }, field, other, lengthProps)));
    }
  }) : /*#__PURE__*/_react["default"].createElement(InputWrapper, _extends({}, other, lengthProps)));
};
var InputWrapper = function InputWrapper(props) {
  var _maxLength7, _maxLength8;
  var _onChange = props.onChange,
    isValidate = props.isValidate,
    handleChange = props.handleChange,
    color = props.color,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-input" : _props$elementid,
    showCount = props.showCount,
    _props$maxLength = props.maxLength,
    maxLength = _props$maxLength === void 0 ? {
      value: 0,
      message: ""
    } : _props$maxLength,
    handleBlur = props.handleBlur,
    name = props.name,
    _props$value = props.value,
    value = _props$value === void 0 ? "" : _props$value,
    _props$errors2 = props.errors,
    errors = _props$errors2 === void 0 ? {} : _props$errors2,
    _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    fields = props.fields,
    className = props.className,
    other = _objectWithoutProperties(props, _excluded3);
  if (typeof maxLength === "number") {
    maxLength = {
      value: maxLength,
      message: ""
    };
  }
  var colorProps = (0, _customClasses.getColorsProps)(color);
  var classes = (0, _customClasses.getClassBySize)(size, "Input", color);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({
    elementid: elementid,
    error: errors === null || errors === void 0 ? void 0 : errors["message"],
    fullWidth: true
  }, colorProps, {
    value: value,
    hiddenLabel: true,
    variant: "outlined",
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes),
    onChange: function onChange(e) {
      var _maxLength, _maxLength2, _maxLength3;
      if (!((_maxLength = maxLength) !== null && _maxLength !== void 0 && _maxLength.value) || (_maxLength2 = maxLength) !== null && _maxLength2 !== void 0 && _maxLength2.value && e.target.value.length <= ((_maxLength3 = maxLength) === null || _maxLength3 === void 0 ? void 0 : _maxLength3.value)) {
        if (_onChange) {
          _onChange(e.target.value.trimStart());
        }
        if (handleChange) {
          handleChange(e.target.value.trimStart());
        }
      }
    },
    onBlur: function onBlur(e) {
      var _maxLength4, _maxLength5, _maxLength6;
      if (!((_maxLength4 = maxLength) !== null && _maxLength4 !== void 0 && _maxLength4.value) || (_maxLength5 = maxLength) !== null && _maxLength5 !== void 0 && _maxLength5.value && e.target.value.length <= ((_maxLength6 = maxLength) === null || _maxLength6 === void 0 ? void 0 : _maxLength6.value)) {
        if (_onChange) {
          _onChange(e.target.value.trimStart());
        }
        if (handleBlur) {
          handleBlur(e.target.value.trimStart());
        }
      }
    }
  }, fields, other))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.errorstyle
  }, showCount && (value === null || value === void 0 ? void 0 : value.length) === ((_maxLength7 = maxLength) === null || _maxLength7 === void 0 ? void 0 : _maxLength7.value) ? maxLength.message || "" : errors === null || errors === void 0 ? void 0 : errors["message"])), showCount && /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sx: {
      alignSelf: "end"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], null, (value === null || value === void 0 ? void 0 : value.length) || 0, maxLength.value !== undefined && "/".concat((_maxLength8 = maxLength) === null || _maxLength8 === void 0 ? void 0 : _maxLength8.value))))));
};
var _default = Input;
exports["default"] = _default;