"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _customClasses = require("../customClasses");
var _reactHookForm = require("react-hook-form");
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _material = require("@mui/material");
var _excluded = ["control", "rules", "name", "errors", "root", "isValidate"],
  _excluded2 = ["ref", "onChange"],
  _excluded3 = ["handleChange", "onChange", "name", "placeholder", "elementid", "className", "value", "optionLabel", "optionKey", "size", "options", "errors"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var MultiSelectWrapper = function MultiSelectWrapper(props) {
  var control = props.control,
    rules = props.rules,
    _props$name = props.name,
    name = _props$name === void 0 ? "" : _props$name,
    _props$errors = props.errors,
    errors = _props$errors === void 0 ? {} : _props$errors,
    root = props.root,
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, isValidate ? /*#__PURE__*/React.createElement(_reactHookForm.Controller, {
    control: control,
    name: name,
    rules: rules,
    render: function render(_ref) {
      var _ref$field = _ref.field,
        ref = _ref$field.ref,
        onChange = _ref$field.onChange,
        fields = _objectWithoutProperties(_ref$field, _excluded2);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MultiSelect, _extends({
        name: name
        // options={options}
        ,
        errors: errors,
        onChange: onChange
      }, fields, other)));
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MultiSelect, other)));
};
var MultiSelect = function MultiSelect(props) {
  var _options$filter;
  var handleChange = props.handleChange,
    _onChange = props.onChange,
    _props$name2 = props.name,
    name = _props$name2 === void 0 ? "" : _props$name2,
    _props$placeholder = props.placeholder,
    placeholder = _props$placeholder === void 0 ? "" : _props$placeholder,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-multiselect" : _props$elementid,
    className = props.className,
    _props$value = props.value,
    value = _props$value === void 0 ? null : _props$value,
    optionLabel = props.optionLabel,
    optionKey = props.optionKey,
    _props$size = props.size,
    size = _props$size === void 0 ? "small" : _props$size,
    _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$errors2 = props.errors,
    errors = _props$errors2 === void 0 ? {} : _props$errors2,
    fields = _objectWithoutProperties(props, _excluded3);
  var classes = (0, _customClasses.getClassBySize)(size, "customAutoComplete");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Autocomplete["default"], _extends({
    elementid: elementid,
    name: name,
    multiple: true,
    options: options,
    autoComplete: true,
    disableCloseOnSelect: true,
    forcePopupIcon: true,
    fullWidth: true,
    onChange: function onChange(e, v) {
      var aSelected = v;
      if (optionKey) {
        aSelected = aSelected.map(function (obj) {
          return obj[optionKey];
        });
      }
      _onChange(aSelected);
      if (handleChange) {
        handleChange(aSelected, v);
      }
    },
    getOptionLabel: function getOptionLabel(option) {
      return optionKey && optionLabel ? option === null || option === void 0 ? void 0 : option[optionLabel] : option;
    },
    filterOptions: props === null || props === void 0 ? void 0 : props.filterOptions,
    value: optionKey ? (_options$filter = options.filter(function (option) {
      return value.includes(option[optionKey]);
    })) !== null && _options$filter !== void 0 ? _options$filter : [] : value,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes),
    openOnFocus: true,
    clearOnBlur: true,
    filterSelectedOptions: true,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/React.createElement(_TextField["default"], _extends({
        className: "customAutoCompleteMultiple"
      }, params, {
        error: errors === null || errors === void 0 ? void 0 : errors["message"],
        variant: "outlined",
        size: "small",
        InputProps: _objectSpread({
          placeholder: placeholder
        }, params.InputProps)
      }));
    },
    renderTags: function renderTags(tagValue, getTagProps) {
      return tagValue.map(function (option, index) {
        return /*#__PURE__*/React.createElement(_material.Chip, _extends({}, getTagProps({
          index: index
        }), {
          sx: {
            margin: "0 0.25rem"
          },
          size: "small",
          label: optionLabel ? option[optionLabel] : option
        }));
      });
    }
  }, fields)), /*#__PURE__*/React.createElement(_Typography["default"], {
    className: classes.errorstyle
  }, errors === null || errors === void 0 ? void 0 : errors["message"]));
};
var _default = MultiSelectWrapper;
exports["default"] = _default;