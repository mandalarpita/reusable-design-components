"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabPanel;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _customClasses = require("../customClasses");
var _excluded = ["children", "value", "index"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function TabPanel(props) {
  var children = props.children,
    value = props.value,
    index = props.index,
    other = _objectWithoutProperties(props, _excluded);
  var customClasses = (0, _customClasses.useCustomStyles)();
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "".concat(props === null || props === void 0 ? void 0 : props.className, " ").concat(customClasses === null || customClasses === void 0 ? void 0 : customClasses.customTabPanel),
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other), value === index && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children));
}
TabPanel.propTypes = {
  children: _propTypes["default"].node,
  index: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].string.isRequired
};