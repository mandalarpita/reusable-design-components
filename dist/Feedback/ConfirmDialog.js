"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../Inputs/Button"));
var _Dialog = _interopRequireDefault(require("@mui/material/Dialog"));
var _DialogActions = _interopRequireDefault(require("@mui/material/DialogActions"));
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _DialogTitle = _interopRequireDefault(require("@mui/material/DialogTitle"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ConfirmDialog = function ConfirmDialog(props) {
  var title = props.title,
    children = props.children,
    open = props.open,
    setOpen = props.setOpen,
    _props$cancelLabel = props.cancelLabel,
    cancelLabel = _props$cancelLabel === void 0 ? "No" : _props$cancelLabel,
    _props$submitLabel = props.submitLabel,
    submitLabel = _props$submitLabel === void 0 ? "Yes" : _props$submitLabel,
    onConfirm = props.onConfirm,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-confirm-dialog" : _props$elementid,
    _props$elementidlefta = props.elementidleftaction,
    elementidleftaction = _props$elementidlefta === void 0 ? "cw-design-system-confirm-dialog-cancel" : _props$elementidlefta,
    _props$elementidright = props.elementidrightaction,
    elementidrightaction = _props$elementidright === void 0 ? "cw-design-system-confirm-dialog-submit" : _props$elementidright;
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    elementid: elementid,
    open: open,
    onClose: function onClose() {
      return setOpen(false);
    },
    "aria-labelledby": "confirm-dialog"
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    id: "confirm-dialog"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body1",
    noWrap: true,
    color: "text.primary"
  }, title)), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    noWrap: true,
    color: "text.primary"
  }, children)), /*#__PURE__*/_react["default"].createElement(_DialogActions["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    elementid: elementidleftaction,
    variant: "outlined",
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      setOpen(false);
    },
    color: "primary"
  }, cancelLabel), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    elementid: elementidrightaction,
    variant: "contained",
    onClick: function onClick(e) {
      e.stopPropagation();
      e.preventDefault();
      setOpen(false);
      onConfirm();
    },
    color: "primary"
  }, submitLabel)));
};
var _default = ConfirmDialog;
exports["default"] = _default;