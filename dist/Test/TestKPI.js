"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingKPI = LoadingKPI;
exports.StandardKPI = StandardKPI;
exports["default"] = TestKPI;
var _react = _interopRequireWildcard(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _KPICard = _interopRequireDefault(require("../Reports/KPICard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // rds components
// material imports
function TestKPI() {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(StandardKPI, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(LoadingKPI, null)));
}
function StandardKPI() {
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sx: {
      width: "25%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_KPICard["default"], {
    value: 45,
    graphName: "Total Tasks",
    isLoading: false
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sx: {
      width: "25%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_KPICard["default"], {
    value: 20,
    graphName: "In Progress Tasks",
    isLoading: false
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sx: {
      width: "25%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_KPICard["default"], {
    value: 5,
    graphName: "Breached Tasks",
    isLoading: false
  })));
}
function LoadingKPI() {
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loadTotalTasks = _useState2[0],
    setLoadingTotalTasks = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loadInprogress = _useState4[0],
    setLoadingInprogress = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadBreached = _useState6[0],
    setLoadingBreached = _useState6[1];
  var time = [getRandomArbitrary(1, 2), getRandomArbitrary(3, 4), getRandomArbitrary(2, 3)];
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoadingTotalTasks(false);
    }, time[0]);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoadingInprogress(false);
    }, time[1]);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoadingBreached(false);
    }, time[2]);
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sx: {
      width: "25%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_KPICard["default"], {
    value: 45,
    graphName: "Total Tasks",
    isLoading: loadTotalTasks
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sx: {
      width: "25%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_KPICard["default"], {
    value: 20,
    graphName: "In Progress Tasks",
    isLoading: loadInprogress
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true,
    sx: {
      width: "25%"
    }
  }, /*#__PURE__*/_react["default"].createElement(_KPICard["default"], {
    value: 5,
    graphName: "Breached Tasks",
    isLoading: loadBreached
  })));
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min * 1000;
}