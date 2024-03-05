"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _excluded = ["innerContent", "useTrimTextTooltip", "innerContentText", "enterDelay", "enterNextDelay", "innerContentTextClass", "children"]; //To use this as the regular Tooltip just replace the tag by Tooltip.
// Example:
// <Tooltip title={"Apps"} enterDelay={700} enterNextDelay={700}>
//   <CustomIcon icon={"MaterialIcon.MdApps"} style={{ fontSize: "27px", cursor: "pointer" }} />
// </Tooltip>
//To use only when text is trimmed, necessary parameters are as follows:
// useTrimTextTooltip - boolean, true for trimming, false for not trimming
// innerContentText - displayed text to be checked for trimming
// innerContentTextClass - class to be used for displayed text
// IMPORTANT: Custom trimming won't work for Tooltips with children and can only work with text props as mentioned above
// IMPORTANT: Custom trimming will also render the text to be displayed along with the tooltip
// Example:
// <Tooltip
//   useTrimTextTooltip={true}
//   innerContentText={task.createdByName ?? task.createdBy}
//   innerContentTextClass={classes.colSpan}
//   title={task.createdByName ?? task.createdBy}
//   placement="bottom-start"
// />
// All props from Tooltip work out of the box
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Tooltip = function Tooltip(props) {
  var innerContent = props.innerContent,
    useTrimTextTooltip = props.useTrimTextTooltip,
    innerContentText = props.innerContentText,
    enterDelay = props.enterDelay,
    enterNextDelay = props.enterNextDelay,
    innerContentTextClass = props.innerContentTextClass,
    children = props.children,
    other = _objectWithoutProperties(props, _excluded);
  var compareSize = (0, _react.useCallback)(function () {
    var _textElementRef$curre, _textElementRef$curre2;
    var compare = (textElementRef === null || textElementRef === void 0 ? void 0 : (_textElementRef$curre = textElementRef.current) === null || _textElementRef$curre === void 0 ? void 0 : _textElementRef$curre.scrollWidth) >= (textElementRef === null || textElementRef === void 0 ? void 0 : (_textElementRef$curre2 = textElementRef.current) === null || _textElementRef$curre2 === void 0 ? void 0 : _textElementRef$curre2.clientWidth) + 1;
    setHover(compare);
  }, []);
  var textElementRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hoverStatus = _useState2[0],
    setHover = _useState2[1];
  (0, _react.useEffect)(function () {
    if (useTrimTextTooltip) {
      compareSize();
      window.addEventListener("resize", compareSize);
      return function () {
        window.removeEventListener("resize", compareSize);
      };
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, useTrimTextTooltip ? /*#__PURE__*/_react["default"].createElement(_material.Tooltip, _extends({
    disableHoverListener: !hoverStatus
  }, other, {
    enterDelay: enterDelay || 700,
    enterNextDelay: enterNextDelay || 700
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: textElementRef,
    className: innerContentTextClass
  }, innerContentText)) : /*#__PURE__*/_react["default"].createElement(_material.Tooltip, _extends({
    enterDelay: enterDelay || 700,
    enterNextDelay: enterNextDelay || 700
  }, other), children));
};
var _default = Tooltip;
exports["default"] = _default;