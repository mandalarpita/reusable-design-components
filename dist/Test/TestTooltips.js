"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TestTooltips;
var _react = _interopRequireDefault(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _styles = require("@mui/styles");
var _Tooltip = _interopRequireDefault(require("../Feedback/Tooltip"));
var _Input = _interopRequireDefault(require("../Inputs/Input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // rds components
// material imports
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    tooltipClass: {
      display: "block",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    }
  };
});
function TestTooltips() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column",
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(BasicUsageExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(DelayedUsageExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    width: "100%"
  }, /*#__PURE__*/_react["default"].createElement(TrimTooltipExample, null))));
}
var BasicUsageExample = function BasicUsageExample() {
  return /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The quick brown fox jumps over the lazy dog."
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body"
  }, "The quick brown fox jumps over the lazy dog.")));
};
var DelayedUsageExample = function DelayedUsageExample() {
  return /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: "The quick brown fox jumps over the lazy dog.",
    enterDelay: 2000
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body"
  }, "The quick brown fox jumps over the lazy dog.")));
};
var TrimTooltipExample = function TrimTooltipExample() {
  var classes = useStyles();
  var _React$useState = _react["default"].useState("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog."),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    width: "70%",
    direction: "column",
    justifyContent: "center",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    sx: {
      backgroundColor: "#F9F5E7",
      padding: "1rem"
    },
    variant: "outlined"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    sx: {
      marginBottom: "1rem"
    }
  }, "Please fill the input box to manipulate length of content."), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: state,
    onChange: function onChange(e) {
      setState(e);
    }
  })), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    justifyContent: "start",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    width: "50%"
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    sx: {
      backgroundColor: "#E3F4F4",
      padding: "1rem"
    },
    variant: "outlined"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    sx: {
      marginBottom: "0.5rem"
    }
  }, "Constant Tooltip"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: state
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body",
    className: classes.tooltipClass
  }, state)))), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    width: "50%"
  }, /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    sx: {
      backgroundColor: "#F8E8EE",
      padding: "1rem"
    },
    variant: "outlined"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    sx: {
      marginBottom: "0.5rem"
    }
  }, "Conditional Tooltip"), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: state,
    useTrimTextTooltip: true,
    innerContentText: state,
    innerContentTextClass: classes.tooltipClass
  }))))));
};