"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _styles = require("@mui/styles");
var _Button = _interopRequireDefault(require("../Inputs/Button"));
var _customClasses = require("../customClasses");
var _excluded = ["title", "children", "open", "setOpen", "onClose", "elementid", "onConfirm", "scroll", "dialogActions"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Dialog = function Dialog(props) {
  var classes = (0, _customClasses.useCustomStyles)();
  var title = props.title,
    children = props.children,
    open = props.open,
    setOpen = props.setOpen,
    _props$onClose = props.onClose,
    _onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-dialog" : _props$elementid,
    onConfirm = props.onConfirm,
    _props$scroll = props.scroll,
    scroll = _props$scroll === void 0 ? "paper" : _props$scroll,
    _props$dialogActions = props.dialogActions,
    dialogActions = _props$dialogActions === void 0 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null) : _props$dialogActions,
    others = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Dialog, _extends({
    open: open,
    elementid: elementid,
    onClose: function onClose() {
      setOpen(false);
      if (_onClose) {
        _onClose();
      }
    },
    scroll: scroll
  }, others), /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body",
    noWrap: true,
    color: "text.primary"
  }, title), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    elementid: "cw-design-system-dialog-close",
    onClick: function onClick() {
      setOpen(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    sx: {
      cursor: "pointer"
    },
    icon: "MaterialIcon.MdClose",
    hoverIcon: "MaterialIcon.MdClose",
    isSelected: false
  })))), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
    className: classes.customDialogContent
  }, /*#__PURE__*/_react["default"].createElement(_material.DialogContentText, {
    id: "scroll-dialog-description",
    tabIndex: -1
  }, children)), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], {
    className: classes.customDialogActions
  }, dialogActions)));
};
var _default = Dialog;
exports["default"] = _default;