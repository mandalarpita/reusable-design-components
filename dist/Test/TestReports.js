"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorsGraph = ColorsGraph;
exports.GraphEvents = GraphEvents;
exports.LoadingGraph = LoadingGraph;
exports.StandardGraph = StandardGraph;
exports["default"] = TestReports;
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _GraphCard = _interopRequireDefault(require("../Reports/GraphCard"));
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _theme = require("../theme");
var _material = require("@mui/material");
var _graphConfigs = _interopRequireDefault(require("../Reports/graphConfigs"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // rds components
// material imports
// theme and external imports
// import { graphDimensions } from "../Reports/graphConfigs";
var boxStyling = {
  width: "50%"
};
function TestReports(_ref) {
  var chartType = _ref.chartType;
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: boxStyling
  }, /*#__PURE__*/_react["default"].createElement(StandardGraph, {
    chartType: chartType
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: boxStyling
  }, /*#__PURE__*/_react["default"].createElement(LoadingGraph, {
    chartType: chartType
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: boxStyling
  }, /*#__PURE__*/_react["default"].createElement(ColorsGraph, {
    chartType: chartType
  })), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: boxStyling
  }, /*#__PURE__*/_react["default"].createElement(GraphEvents, {
    chartType: chartType
  }))));
}
function StandardGraph(_ref2) {
  var chartType = _ref2.chartType;
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_GraphCard["default"], {
    height: "30rem",
    values: getValues(chartType),
    isLoading: false
  }));
}
function LoadingGraph(_ref3) {
  var chartType = _ref3.chartType;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    load = _useState2[0],
    setLoading = _useState2[1];
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoading(false);
    }, getRandomArbitrary(2, 3));
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_GraphCard["default"], {
    height: "30rem",
    graphColor: color1,
    values: getValues(chartType),
    isLoading: load
  }));
}
function ColorsGraph(_ref4) {
  var chartType = _ref4.chartType;
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    load = _useState4[0],
    setLoading = _useState4[1];
  var graphColor = color2;
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoading(false);
    }, getRandomArbitrary(2, 3));
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_GraphCard["default"], {
    height: "30rem",
    graphColor: graphColor,
    values: getValues(chartType),
    isLoading: load
  }));
}
function GraphEvents(_ref5) {
  var chartType = _ref5.chartType;
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    load = _useState6[0],
    setLoading = _useState6[1];
  var graphColor = color3;
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      setLoading(false);
    }, getRandomArbitrary(2, 3));
    return function () {
      return clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_GraphCard["default"], {
    height: "30rem",
    graphColor: graphColor,
    values: getValues(chartType),
    isLoading: load,
    events: {
      onClick: function onClick(data) {
        console.log("onClick", data);
      }
    }
  }));
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min * 1000;
}
function getValues(chartType) {
  var values;
  if (chartType === "PIE" || chartType === "DONUT") {
    values = {
      data: [],
      graphDetails: {
        chartType: "PIE",
        filterDefinition: "",
        graphConfigId: "",
        graphName: "Popularity of Browsers in 2021",
        library: "APEX",
        sequence: -1,
        showLegends: "True",
        userId: "",
        xTitle: "Browsers",
        yTitle: "Popularity in %"
      },
      id: ["Chrome-2021", "Safari-2021", "Edge-2021", "Mozilla-Fifefox-2021"],
      label: ["Chrome", "Safari", "Edge", "Mozilla-Fifefox"],
      series: [80, 38, 3, 6],
      xyPayload: {}
    };
  } else {
    values = {
      graphDetails: {
        graphConfigId: "",
        xTitle: "Popular web browsers",
        yTitle: "Popularity in %",
        showLegends: "True",
        userId: "",
        graphName: graphName,
        library: "APEX",
        chartType: chartType,
        sequence: -1,
        filterDefinition: ""
      },
      data: [{
        name: "Google Chrome",
        type: _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType].chartKey,
        data: [{
          x: "2012",
          y: 35,
          id: "Chrome-2012"
        }, {
          x: "2013",
          y: 40,
          id: "Chrome-2013"
        }, {
          x: "2014",
          y: 45,
          id: "Chrome-2014"
        }, {
          x: "2015",
          y: 50,
          id: "Chrome-2015"
        }, {
          x: "2016",
          y: 55,
          id: "Chrome-2016"
        }, {
          x: "2017",
          y: 60,
          id: "Chrome-2017"
        }, {
          x: "2018",
          y: 65,
          id: "Chrome-2018"
        }, {
          x: "2019",
          y: 70,
          id: "Chrome-2019"
        }, {
          x: "2020",
          y: 75,
          id: "Chrome-2020"
        }, {
          x: "2021",
          y: 80,
          id: "Chrome-2021"
        }]
      }, {
        name: "Mozilla Firefox",
        type: _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType].chartKey,
        data: [{
          x: "2012",
          y: 20,
          id: "Firefox-2012"
        }, {
          x: "2013",
          y: 18,
          id: "Firefox-2013"
        }, {
          x: "2014",
          y: 16,
          id: "Firefox-2014"
        }, {
          x: "2015",
          y: 14,
          id: "Firefox-2015"
        }, {
          x: "2016",
          y: 12,
          id: "Firefox-2016"
        }, {
          x: "2017",
          y: 10,
          id: "Firefox-2017"
        }, {
          x: "2018",
          y: 9,
          id: "Firefox-2018"
        }, {
          x: "2019",
          y: 8,
          id: "Firefox-2019"
        }, {
          x: "2020",
          y: 7,
          id: "Firefox-2020"
        }, {
          x: "2021",
          y: 6,
          id: "Firefox-2021"
        }]
      }, {
        name: "Safari",
        type: _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType].chartKey,
        data: [{
          x: "2012",
          y: 15,
          id: "Safari-2012"
        }, {
          x: "2013",
          y: 18,
          id: "Safari-2013"
        }, {
          x: "2014",
          y: 20,
          id: "Safari-2014"
        }, {
          x: "2015",
          y: 22,
          id: "Safari-2015"
        }, {
          x: "2016",
          y: 25,
          id: "Safari-2016"
        }, {
          x: "2017",
          y: 28,
          id: "Safari-2017"
        }, {
          x: "2018",
          y: 30,
          id: "Safari-2018"
        }, {
          x: "2019",
          y: 32,
          id: "Safari-2019"
        }, {
          x: "2020",
          y: 35,
          id: "Safari-2020"
        }, {
          x: "2021",
          y: 38,
          id: "Safari-2021"
        }]
      }, {
        name: "Microsoft Edge",
        type: _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType].chartKey,
        data: [{
          x: "2012",
          y: 10,
          id: "Edge-2012"
        }, {
          x: "2013",
          y: 9,
          id: "Edge-2013"
        }, {
          x: "2014",
          y: 8,
          id: "Edge-2014"
        }, {
          x: "2015",
          y: 7,
          id: "Edge-2015"
        }, {
          x: "2016",
          y: 6,
          id: "Edge-2016"
        }, {
          x: "2017",
          y: 5,
          id: "Edge-2017"
        }, {
          x: "2018",
          y: 6,
          id: "Edge-2018"
        }, {
          x: "2019",
          y: 5,
          id: "Edge-2019"
        }, {
          x: "2020",
          y: 4,
          id: "Edge-2020"
        }, {
          x: "2021",
          y: 3,
          id: "Edge-2021"
        }]
      }],
      xyPayload: {
        xAxis: "cw_itm_wn_system_master.SYSTEM_NAME",
        yAxis: [{
          name: "",
          column: "cw_itm_wn_tasks.TASK_ID",
          aggregation: "Count"
        }],
        xLabel: []
      }
    };
  }
  if (!(_graphConfigs["default"] !== null && _graphConfigs["default"] !== void 0 && _graphConfigs["default"][chartType].stacked)) {
    values.data = values.data.splice(0, 1);
  }
  return values;
}
var color1 = ["#E74646", "#FA9884", "#FFE5CA", "#FFF3E2"];
var color2 = ["#AA77FF", "#C9EEFF", "#97DEFF", "#62CDFF"];
var color3 = ["#86626E", "#DBAFC1", "#E7C8DD", "#E2E4F6"];
var graphName = "stack_line_graph_example";
var data = [{
  x: "2012",
  y: 20,
  id: "Firefox-2012"
}, {
  x: "2013",
  y: 18,
  id: "Firefox-2013"
}, {
  x: "2014",
  y: 16,
  id: "Firefox-2014"
}, {
  x: "2015",
  y: 14,
  id: "Firefox-2015"
}, {
  x: "2016",
  y: 12,
  id: "Firefox-2016"
}, {
  x: "2017",
  y: 10,
  id: "Firefox-2017"
}, {
  x: "2018",
  y: 9,
  id: "Firefox-2018"
}, {
  x: "2019",
  y: 8,
  id: "Firefox-2019"
}, {
  x: "2020",
  y: 7,
  id: "Firefox-2020"
}, {
  x: "2021",
  y: 6,
  id: "Firefox-2021"
}];