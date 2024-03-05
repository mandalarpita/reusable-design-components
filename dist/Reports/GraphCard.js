"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = GraphCard;
var _material = require("@mui/material");
var _react = _interopRequireWildcard(require("react"));
var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));
var _styles = require("@mui/styles");
var _graphUtility = require("./graphUtility");
var _graphConfigs = _interopRequireDefault(require("./graphConfigs"));
var _theme = require("../theme");
var _excluded = ["graphColor", "values", "isLoading", "error", "errMsg", "events", "height", "width"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
var useCustomStyles = (0, _styles.makeStyles)(function () {
  return {
    graphLoader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: function height(_ref) {
        var _height = _ref.height;
        return _height ? _height : "100%";
      },
      width: function width(_ref2) {
        var _width = _ref2.width;
        return _width ? _width : "100%";
      }
    },
    xAxisLabel: {
      alignSelf: "center",
      fontSize: 11,
      color: "rgb(55, 61, 63)",
      fontWeight: 900,
      marginBottom: "2rem"
    },
    illustration: {
      width: "6.75rem"
    },
    width100: {
      width: "100%"
    },
    height100: {
      height: "100%"
    },
    containerMargin: {
      paddingMargin: "1rem"
    }
  };
});
function GraphCard(props) {
  var _values$graphDetails, _graphDimensions$char, _state$graphData, _state$graphData2;
  var _props$graphColor = props.graphColor,
    graphColor = _props$graphColor === void 0 ? _graphUtility.defaultColor : _props$graphColor,
    values = props.values,
    _props$isLoading = props.isLoading,
    isLoading = _props$isLoading === void 0 ? false : _props$isLoading,
    _props$error = props.error,
    error = _props$error === void 0 ? false : _props$error,
    _props$errMsg = props.errMsg,
    errMsg = _props$errMsg === void 0 ? "" : _props$errMsg,
    events = props.events,
    _props$height = props.height,
    height = _props$height === void 0 ? "100%" : _props$height,
    _props$width = props.width,
    width = _props$width === void 0 ? "100%" : _props$width,
    others = _objectWithoutProperties(props, _excluded);
  var chartType = (values === null || values === void 0 ? void 0 : (_values$graphDetails = values.graphDetails) === null || _values$graphDetails === void 0 ? void 0 : _values$graphDetails.chartType) || "";
  var classes = useCustomStyles({
    height: height,
    width: width
  });
  var chartRef = (0, _react.useRef)(null);
  var graphConfig = _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType];
  var getGenerator = function getGenerator(values) {
    var _chartRef$current;
    var graphObj;
    if (chartType === "PIE" || chartType === "DONUT") {
      graphObj = (0, _graphUtility.getPieMetadata)(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    } else if (chartType === "BAR" || chartType === "COLUMN" || chartType === "STACK_COLUMN" || chartType === "STACK_BAR" || chartType === "MIXED" || chartType === "AREA" || chartType === "LINE") {
      graphObj = (0, _graphUtility.getMixedMetadata)(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    } else if (chartType === "BTIMELINE") {
      return (0, _graphUtility.getTimelineMetadata)(chartType, values, graphColor, events);
    } else if (chartType === "BUBBLE") {
      graphObj = (0, _graphUtility.getBubbleMetadata)(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    } else {
      graphObj = (0, _graphUtility.getMixedMetadata)(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    }

    if (chartRef !== null && chartRef !== void 0 && (_chartRef$current = chartRef.current) !== null && _chartRef$current !== void 0 && _chartRef$current.updateOptions) {
      var _chartRef$current2, _graphObj, _graphObj$graphData, _chartRef$current3, _graphObj2, _graphObj2$graphData;
      chartRef === null || chartRef === void 0 ? void 0 : (_chartRef$current2 = chartRef.current) === null || _chartRef$current2 === void 0 ? void 0 : _chartRef$current2.updateOptions((_graphObj = graphObj) === null || _graphObj === void 0 ? void 0 : (_graphObj$graphData = _graphObj.graphData) === null || _graphObj$graphData === void 0 ? void 0 : _graphObj$graphData.options);
      chartRef === null || chartRef === void 0 ? void 0 : (_chartRef$current3 = chartRef.current) === null || _chartRef$current3 === void 0 ? void 0 : _chartRef$current3.updateSeries((_graphObj2 = graphObj) === null || _graphObj2 === void 0 ? void 0 : (_graphObj2$graphData = _graphObj2.graphData) === null || _graphObj2$graphData === void 0 ? void 0 : _graphObj2$graphData.series);
    }
    return graphObj;
  };
  var _useState = (0, _react.useState)({
      chartKey: _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : (_graphDimensions$char = _graphConfigs["default"][chartType]) === null || _graphDimensions$char === void 0 ? void 0 : _graphDimensions$char.chartKey,
      graphData: getGenerator(values)
    }),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  (0, _react.useEffect)(function () {
    setState(function (prev) {
      var _graphDimensions$char2;
      return _objectSpread(_objectSpread({}, prev), {}, {
        chartKey: _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : (_graphDimensions$char2 = _graphConfigs["default"][chartType]) === null || _graphDimensions$char2 === void 0 ? void 0 : _graphDimensions$char2.chartKey,
        graphData: getGenerator(values)
      });
    });
  }, [isLoading, values]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isLoading ? /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    className: "".concat(classes.graphLoader),
    elementid: "cwitm-chart-loader"
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, null)) : error ? /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    className: "".concat(classes.width100, " ").concat(classes.height100, "  ").concat(classes.graphLoader),
    style: {
      backgroundColor: "#FFFFFF"
    },
    justifyContent: "center",
    alignItems: "Center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    sx: {
      color: "#9A9A9A",
      fontWeight: "600"
    },
    className: classes.containerMargin
  }, "Image failed to load"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    sx: {
      color: "#9A9A9A",
      fontWeight: "600"
    },
    className: classes.containerMargin
  }, errMsg)) : /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    elementid: "cwitm-chart-canvas"
  }, /*#__PURE__*/_react["default"].createElement(_reactApexcharts["default"], {
    ref: chartRef,
    options: state === null || state === void 0 ? void 0 : (_state$graphData = state.graphData) === null || _state$graphData === void 0 ? void 0 : _state$graphData.options,
    series: state === null || state === void 0 ? void 0 : (_state$graphData2 = state.graphData) === null || _state$graphData2 === void 0 ? void 0 : _state$graphData2.series,
    type: state === null || state === void 0 ? void 0 : state.chartKey
  })));
}