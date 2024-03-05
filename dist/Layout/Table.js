"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRows = exports.TableRowContainer = exports.TableHeader = void 0;
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _styles = require("@mui/styles");
var _react = _interopRequireWildcard(require("react"));
var _theme = require("../theme");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
var useCustomStyles = (0, _styles.makeStyles)(function (theme) {
  if (Object.keys(theme).length === 0) {
    theme = _theme.customTheme;
  }
  return {
    listHeader: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
      height: 62,
      borderRadius: 4,
      marginBottom: theme.spacing(1),
      overflow: "hidden"
    },
    listItem: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      height: 62,
      borderRadius: 4,
      width: "100%",
      border: "1px solid ".concat(theme.palette.primary.light),
      boxShadow: "0px 0px 16px rgb(207 207 207 / 25%), 0px 0px 2px #e0e0e0"
    }
  };
});
var TableHeader = function TableHeader(props) {
  var classes = useCustomStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    justifyContent: props !== null && props !== void 0 && props.justifyContent ? props === null || props === void 0 ? void 0 : props.justifyContent : "space-between",
    style: props !== null && props !== void 0 && props.style ? props === null || props === void 0 ? void 0 : props.style : {},
    sx: props.sx ? props.sx : {},
    className:
    // cwitmScroll
    props.className ? "".concat(props.className, " ").concat(classes.listHeader) : "".concat(classes.listHeader),
    direction: "row",
    alignItems: "center"
  }, props.children)));
};
exports.TableHeader = TableHeader;
var TableRows = function TableRows(props) {
  var classes = useCustomStyles();
  return /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    justifyContent: props !== null && props !== void 0 && props.justifyContent ? props === null || props === void 0 ? void 0 : props.justifyContent : "space-between",
    className: "".concat(classes.listItem, " ").concat(props.className),
    style: props.style,
    sx: props.sx,
    alignItems: "center",
    onClick: function onClick() {
      if (props.onClick) {
        props.onClick(props === null || props === void 0 ? void 0 : props.row);
      }
    }
  }, props === null || props === void 0 ? void 0 : props.children);
};
exports.TableRows = TableRows;
var TableRowContainer = function TableRowContainer(props) {
  var _Array$from;
  var classes = useCustomStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    spacing: 1,
    justifyContent: "start",
    alignItems: "center",
    className: props.className ? "cwitmScroll cwitmSetWidth100 ".concat(props.className) : "cwitmScroll cwitmSetWidth100",
    style: props === null || props === void 0 ? void 0 : props.style,
    sx: props === null || props === void 0 ? void 0 : props.sx
  }, props !== null && props !== void 0 && props.enableLoading ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, (_Array$from = Array.from(new Array((props === null || props === void 0 ? void 0 : props.skeletonLength) || 10))) === null || _Array$from === void 0 ? void 0 : _Array$from.map(function (index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index,
      className: "cwitmSetWidth100"
    }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
      className: classes.listItem
      // width={"100%"}
      // height={110}
      ,
      component: "div",
      variant: "rectangular"
    }));
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.children)));
};
exports.TableRowContainer = TableRowContainer;