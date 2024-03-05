"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypesOfButton = exports.ThemedButton = exports.SizesOfButton = exports.OverrideColor = exports.LoadingButton = exports.IconButtons = exports.DisabledButton = void 0;
exports["default"] = TestButtons;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _theme = require("../theme");
var _Button = _interopRequireDefault(require("../Inputs/Button"));
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TestButtons() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(TypesOfButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(SizesOfButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DisabledButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ThemedButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(OverrideColor, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(LoadingButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(IconButtons, null))));
}
var TypesOfButton = function TypesOfButton() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs"
  }, "Default Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    variant: "text"
  }, "Text Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    variant: "outlined"
  }, "Outlined Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    variant: "contained"
  }, "Contained Button"))));
};
exports.TypesOfButton = TypesOfButton;
var SizesOfButton = function SizesOfButton() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    variant: "contained"
  }, "Button Size - xs")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "sm",
    variant: "contained"
  }, "Button Size - sm")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "md",
    variant: "contained"
  }, "Button Size - md")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "lg",
    variant: "contained"
  }, "Button Size - lg")), " ", /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xl",
    variant: "contained"
  }, "Button Size - xl"))));
};
exports.SizesOfButton = SizesOfButton;
var DisabledButton = function DisabledButton() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    disabled: true,
    size: "xs"
  }, "Disabled Default Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    disabled: true,
    size: "xs",
    variant: "text"
  }, "Disabled Text Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    disabled: true,
    size: "xs",
    variant: "outlined"
  }, "Disabled Outlined Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    disabled: true,
    size: "xs",
    variant: "contained"
  }, "Disabled Contained Button"))));
};
exports.DisabledButton = DisabledButton;
var ThemedButton = function ThemedButton() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    direction: "row",
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary"
  }, "Default Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "text"
  }, "Text Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "outlined"
  }, "Outlined Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "contained"
  }, "Contained Button"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary"
  }, "Default Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "text"
  }, "Text Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "outlined"
  }, "Outlined Button")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "contained"
  }, "Contained Button")))));
};
exports.ThemedButton = ThemedButton;
var OverrideColor = function OverrideColor() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    direction: "row",
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "outlined",
    overrideColor: _theme.customTheme.palette.primary.main
  }, "Primary Main Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "outlined",
    overrideColor: _theme.customTheme.palette.primary.light
  }, "Primary Light Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "outlined",
    overrideColor: _theme.customTheme.palette.primary.dark
  }, "Primary Dark Color"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "contained",
    overrideColor: _theme.customTheme.palette.primary.main
  }, "Primary Main Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "contained",
    overrideColor: _theme.customTheme.palette.primary.light
  }, "Primary Light Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "contained",
    overrideColor: _theme.customTheme.palette.primary.dark
  }, "Primary Dark Color"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "outlined",
    overrideColor: _theme.customTheme.palette.secondary.main
  }, "Secondary Main Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "outlined",
    overrideColor: _theme.customTheme.palette.secondary.light
  }, "Secondary Light Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "outlined",
    overrideColor: _theme.customTheme.palette.secondary.dark
  }, "Secondary Dark Color"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "contained",
    overrideColor: _theme.customTheme.palette.secondary.main
  }, "Secondary Main Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "contained",
    overrideColor: _theme.customTheme.palette.secondary.light
  }, "Secondary Light Color")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "contained",
    overrideColor: _theme.customTheme.palette.secondary.dark
  }, "Secondary Dark Color"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    variant: "text",
    overrideColor: "#99627A"
  }, "Overriden Hex - #99627A")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    variant: "outlined",
    overrideColor: "#D25380"
  }, "Overriden Hex - #D25380")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    variant: "contained",
    overrideColor: "#C4DFDF"
  }, "Overriden Hex - #C4DFDF")))));
};
exports.OverrideColor = OverrideColor;
var LoadingButton = function LoadingButton() {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    load = _useState2[0],
    setLoading = _useState2[1];
  var scheduler = Math.random() * (5 - 4) + 4 * 1000;
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoading(false);
    }, scheduler);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    direction: "row",
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "primary"
  }, "Build")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "primary",
    variant: "text"
  }, "Create Bug")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "primary",
    variant: "outlined"
  }, "Book Tickets")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "primary",
    variant: "contained"
  }, "Scan and Pay"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "secondary"
  }, "Build")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "secondary",
    variant: "text"
  }, "Create Bug")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "secondary",
    variant: "outlined"
  }, "Book Tickets")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "secondary",
    variant: "contained"
  }, "Scan and Pay"))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "primary",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosBuild"
    })
  }, "Build")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "primary",
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosBug"
    })
  }, "Create Bug")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "secondary",
    variant: "outlined",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosAirplane"
    })
  }, "Book Tickets")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    loading: load,
    size: "xs",
    color: "secondary",
    variant: "contained",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosFingerPrint"
    })
  }, "Scan and Pay")))));
};
exports.LoadingButton = LoadingButton;
var IconButtons = function IconButtons() {
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    load = _useState4[0],
    setLoading = _useState4[1];
  var scheduler = Math.random() * (5 - 4) + 4 * 1000;
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoading(false);
    }, scheduler);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    direction: "row",
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosGlasses"
    })
  }, "Buy")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "primary",
    variant: "text",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosGitNetwork"
    })
  }, "Connect")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "outlined",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosChatbubbles"
    })
  }, "Chat")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: "xs",
    color: "secondary",
    variant: "contained",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosCloud"
    })
  }, "Download")))));
};
exports.IconButtons = IconButtons;