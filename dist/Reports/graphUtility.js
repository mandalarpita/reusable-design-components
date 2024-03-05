"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultColor = void 0;
exports.getBubbleMetadata = getBubbleMetadata;
exports.getMixedMetadata = getMixedMetadata;
exports.getPieMetadata = getPieMetadata;
exports.getTimelineMetadata = getTimelineMetadata;
var _graphConfigs = _interopRequireDefault(require("./graphConfigs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Add events for these
//  onClick;
// onLegendClick;
// onMarkerClick;
// onXAxisLabelClick;
var defaultColor = ["#FFC887", "#FEA69B", "#8276CB", "#5CC0B4", "#E6DCF4", "#C4C4C4", "#A1C9F1", "#FF6B6B", "#0D8A6A", "#FFA6A6", "#957DAD"];
exports.defaultColor = defaultColor;
function getMixedMetadata(chartType, values, graphColor, events) {
  var _series$, _graphConfig$stacked, _values$graphDetails2, _values$graphDetails3, _values$graphDetails4, _values$graphDetails5, _values$graphDetails6, _values$graphDetails7, _values$graphDetails8, _values$graphDetails9, _values$graphDetails10;
  var series = structuredClone(values === null || values === void 0 ? void 0 : values.data);
  if ((series === null || series === void 0 ? void 0 : series.length) === 1 && !(series !== null && series !== void 0 && (_series$ = series[0]) !== null && _series$ !== void 0 && _series$.name)) {
    var _values$graphDetails;
    series[0].name = (values === null || values === void 0 ? void 0 : (_values$graphDetails = values.graphDetails) === null || _values$graphDetails === void 0 ? void 0 : _values$graphDetails.yTitle) || "";
  }
  var _zoomed = false,
    _dataPointSelection = false;
  var graphConfig = _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType];
  var state = {
    series: series || [],
    options: {
      legend: {
        show: true,
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "14px",
        fontFamily: "Roboto",
        fontWeight: 400,
        itemMargin: {
          horizontal: 16,
          vertical: 32
        }
      },
      stroke: {
        curve: "smooth"
      },
      chart: {
        type: (graphConfig === null || graphConfig === void 0 ? void 0 : graphConfig.chartKey) || "bar",
        stacked: (_graphConfig$stacked = graphConfig === null || graphConfig === void 0 ? void 0 : graphConfig.stacked) !== null && _graphConfig$stacked !== void 0 ? _graphConfig$stacked : false,
        width: "100%",
        height: "100%",
        fontFamily: "Roboto",
        fontSize: "25px",
        events: {
          // // Check if this works
          // legendClick: function (chartContext, seriesIndex, config) {
          //   if (events?.onLegendClick) {
          //     let selectedName = config.config.series[seriesIndex].name;
          //     events.onLegendClick(
          //       {
          //         selectedDataPoint: {},
          //         name: selectedName,
          //         type: graphConfig?.chartKey || "bar",
          //         chartKey: chartType,
          //         dataPointIndex: null,
          //         seriesIndex: seriesIndex,
          // values:values,

          //         //////eventType: "legendClick",
          //       },
          //       event,
          //       chartContext,
          //       config
          //     );
          //   }
          //   // to be checked later
          // },

          zoomed: function zoomed(chartContext, _ref) {
            var xaxis = _ref.xaxis,
              yaxis = _ref.yaxis;
            _zoomed = true;
          },
          click: function click(event, chartContext, config) {
            if (_zoomed) {
              _zoomed = false;
              return false; // Prevent click event during pan and zoom
            }

            if (_dataPointSelection) {
              _dataPointSelection = false;
              return false; // Prevent click event during dataPointSelection
            }
            //  && graphConfig?.chartKey !== "bar" && graphConfig?.chartKey !== "column" && !event.target.className.animVal.includes("hovering-zoom")
            if (events !== null && events !== void 0 && events.onClick) {
              var _config$config, _config$config$series, _selectedSeries$data;
              var selectedSeries = config === null || config === void 0 ? void 0 : (_config$config = config.config) === null || _config$config === void 0 ? void 0 : (_config$config$series = _config$config.series) === null || _config$config$series === void 0 ? void 0 : _config$config$series[config === null || config === void 0 ? void 0 : config.seriesIndex];
              var selectedValue = selectedSeries === null || selectedSeries === void 0 ? void 0 : (_selectedSeries$data = selectedSeries.data) === null || _selectedSeries$data === void 0 ? void 0 : _selectedSeries$data[config === null || config === void 0 ? void 0 : config.dataPointIndex];
              if (selectedSeries && selectedValue) {
                events.onClick({
                  selectedDataPoint: selectedValue,
                  name: selectedSeries === null || selectedSeries === void 0 ? void 0 : selectedSeries.name,
                  type: selectedSeries === null || selectedSeries === void 0 ? void 0 : selectedSeries.type,
                  chartKey: chartType,
                  dataPointIndex: config === null || config === void 0 ? void 0 : config.dataPointIndex,
                  seriesIndex: config === null || config === void 0 ? void 0 : config.seriesIndex,
                  values: values
                }, event, chartContext, config);
              }
            }
          },
          dataPointSelection: function dataPointSelection(event, chartContext, config) {
            if (events !== null && events !== void 0 && events.onClick) {
              var _config$w, _config$w$config, _config$w$config$seri, _selectedSeries$data2;
              var selectedSeries = config === null || config === void 0 ? void 0 : (_config$w = config.w) === null || _config$w === void 0 ? void 0 : (_config$w$config = _config$w.config) === null || _config$w$config === void 0 ? void 0 : (_config$w$config$seri = _config$w$config.series) === null || _config$w$config$seri === void 0 ? void 0 : _config$w$config$seri[config === null || config === void 0 ? void 0 : config.seriesIndex];
              var selectedValue = selectedSeries === null || selectedSeries === void 0 ? void 0 : (_selectedSeries$data2 = selectedSeries.data) === null || _selectedSeries$data2 === void 0 ? void 0 : _selectedSeries$data2[config === null || config === void 0 ? void 0 : config.dataPointIndex];
              if (selectedSeries && selectedValue) {
                _dataPointSelection = true;
                events.onClick({
                  selectedDataPoint: selectedValue,
                  name: selectedSeries === null || selectedSeries === void 0 ? void 0 : selectedSeries.name,
                  type: selectedSeries === null || selectedSeries === void 0 ? void 0 : selectedSeries.type,
                  chartKey: chartType,
                  dataPointIndex: config === null || config === void 0 ? void 0 : config.dataPointIndex,
                  seriesIndex: config === null || config === void 0 ? void 0 : config.seriesIndex,
                  values: values
                }, event, chartContext, config);
              }
            }
          }
        },
        toolbar: {
          "export": {
            csv: {
              filename: values === null || values === void 0 ? void 0 : (_values$graphDetails2 = values.graphDetails) === null || _values$graphDetails2 === void 0 ? void 0 : _values$graphDetails2.graphName
            },
            svg: {
              filename: values === null || values === void 0 ? void 0 : (_values$graphDetails3 = values.graphDetails) === null || _values$graphDetails3 === void 0 ? void 0 : _values$graphDetails3.graphName
            },
            png: {
              filename: values === null || values === void 0 ? void 0 : (_values$graphDetails4 = values.graphDetails) === null || _values$graphDetails4 === void 0 ? void 0 : _values$graphDetails4.graphName
            }
          }
        }
      },
      plotOptions: {
        bar: {
          horizontal: (graphConfig === null || graphConfig === void 0 ? void 0 : graphConfig.horizontal) || false,
          borderRadius: "2px",
          columnWidth: "80%"
        }
      },
      xaxis: {
        showForNullSeries: true,
        type: "category",
        title: {
          text: graphConfig !== null && graphConfig !== void 0 && graphConfig.horizontal ? values === null || values === void 0 ? void 0 : (_values$graphDetails5 = values.graphDetails) === null || _values$graphDetails5 === void 0 ? void 0 : _values$graphDetails5.yTitle : (values === null || values === void 0 ? void 0 : (_values$graphDetails6 = values.graphDetails) === null || _values$graphDetails6 === void 0 ? void 0 : _values$graphDetails6.xTitle) || (values === null || values === void 0 ? void 0 : (_values$graphDetails7 = values.graphDetails) === null || _values$graphDetails7 === void 0 ? void 0 : _values$graphDetails7.xTitle)
        },
        tickPlacement: "on",
        labels: {
          show: true,
          offsetY: 0,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          style: {
            fontSize: "14px",
            fontFamily: "Roboto",
            fontWeight: 400
          },
          trim: true
        }
      },
      yaxis: {
        showAlways: true,
        showForNullSeries: true,
        title: {
          text: graphConfig !== null && graphConfig !== void 0 && graphConfig.horizontal ? values === null || values === void 0 ? void 0 : (_values$graphDetails8 = values.graphDetails) === null || _values$graphDetails8 === void 0 ? void 0 : _values$graphDetails8.xTitle : (values === null || values === void 0 ? void 0 : (_values$graphDetails9 = values.graphDetails) === null || _values$graphDetails9 === void 0 ? void 0 : _values$graphDetails9.yTitle) || (values === null || values === void 0 ? void 0 : (_values$graphDetails10 = values.graphDetails) === null || _values$graphDetails10 === void 0 ? void 0 : _values$graphDetails10.yTitle)
        },
        tickPlacement: "on",
        labels: {
          style: {
            hideOverlappingLabels: true,
            fontSize: "14px",
            fontFamily: "Roboto",
            fontWeight: 400
          }
        }
      },
      zoom: {
        enabled: false
      },
      colors: graphColor !== null && graphColor !== void 0 ? graphColor : defaultColor,
      dataLabels: {
        enabled: false
      },
      tooltip: {
        shared: true,
        intersect: false,
        theme: "light"
      }
    }
  };
  return state;
}
function getPieMetadata(chartType, values, graphColor, events) {
  var _values$series;
  var graphConfig = _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType];
  var state = {
    series: (values === null || values === void 0 ? void 0 : (_values$series = values.series) === null || _values$series === void 0 ? void 0 : _values$series.map(Number)) || (values === null || values === void 0 ? void 0 : values.series) || [],
    options: {
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: "Roboto",
        width: 200,
        horizontalAlign: "center",
        fontWeight: 400,
        itemMargin: {
          vertical: 7
        }
      },
      chart: {
        width: "100%",
        height: "100%",
        type: (graphConfig === null || graphConfig === void 0 ? void 0 : graphConfig.chartKey) || "bar",
        fontFamily: "Roboto",
        events: {
          dataPointSelection: function dataPointSelection(event, chartContext, config) {
            if (events !== null && events !== void 0 && events.onClick) {
              var _config$w2, _config$w2$config, _config$w2$config$lab, _config$w3, _config$w3$config, _config$w3$config$ser;
              var selectedLabel = config === null || config === void 0 ? void 0 : (_config$w2 = config.w) === null || _config$w2 === void 0 ? void 0 : (_config$w2$config = _config$w2.config) === null || _config$w2$config === void 0 ? void 0 : (_config$w2$config$lab = _config$w2$config.labels) === null || _config$w2$config$lab === void 0 ? void 0 : _config$w2$config$lab[config === null || config === void 0 ? void 0 : config.dataPointIndex];
              var selectedValue = config === null || config === void 0 ? void 0 : (_config$w3 = config.w) === null || _config$w3 === void 0 ? void 0 : (_config$w3$config = _config$w3.config) === null || _config$w3$config === void 0 ? void 0 : (_config$w3$config$ser = _config$w3$config.series) === null || _config$w3$config$ser === void 0 ? void 0 : _config$w3$config$ser[config === null || config === void 0 ? void 0 : config.dataPointIndex];
              if (selectedLabel && selectedValue) {
                events.onClick({
                  selectedDataPoint: {
                    x: selectedLabel,
                    y: selectedValue,
                    id: values.id[config === null || config === void 0 ? void 0 : config.dataPointIndex]
                  },
                  name: selectedLabel,
                  type: graphConfig === null || graphConfig === void 0 ? void 0 : graphConfig.chartKey,
                  chartKey: chartType,
                  dataPointIndex: config === null || config === void 0 ? void 0 : config.dataPointIndex,
                  seriesIndex: config === null || config === void 0 ? void 0 : config.seriesIndex,
                  values: values
                }, event, chartContext, config);
              }
            }
          }
        }
      },
      tooltip: {
        shared: true,
        intersect: false,
        theme: "light",
        y: [{
          formatter: function formatter(y) {
            return y.toFixed(0);
          }
        }]
      },
      dataLabels: {
        enabled: false
      },
      labels: (values === null || values === void 0 ? void 0 : values.label) || [],
      colors: graphColor !== null && graphColor !== void 0 ? graphColor : defaultColor,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            fontFamily: "Roboto"
          },
          legend: {
            show: true,
            fontSize: "14px",
            fontFamily: "Roboto",
            width: 100,
            horizontalAlign: "center",
            fontWeight: 400,
            itemMargin: {
              vertical: 7
            }
          }
        }
      }]
    }
  };
  return state;
}
function getTimelineMetadata(chartType, values, graphColor, events) {
  var graphConfig = _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType];
  var state = {
    series: [{
      data: [{
        x: "Code",
        y: [1551484800000, 1551657600000]
      }, {
        x: "Test",
        y: [1551657600000, 1552003200000]
      }, {
        x: "Validation",
        y: [1552003200000, 1552348800000]
      }, {
        x: "Deployment",
        y: [1552348800000, 1552867200000]
      }] || []
    }],
    options: {
      chart: {
        height: 600,
        type: (graphConfig === null || graphConfig === void 0 ? void 0 : graphConfig.chartKey) || "rangeBar"
      },
      plotOptions: {
        bar: {
          horizontal: (graphConfig === null || graphConfig === void 0 ? void 0 : graphConfig.horizontal) || true
        }
      },
      colors: graphColor !== null && graphColor !== void 0 ? graphColor : defaultColor,
      xaxis: {
        type: "datetime"
      }
    }
  };
  return state;
}
function getBubbleMetadata(chartType, values, graphColor, events) {
  var graphConfig = _graphConfigs["default"] === null || _graphConfigs["default"] === void 0 ? void 0 : _graphConfigs["default"][chartType];
  var state = {
    series: [{
      name: "Bubble1",
      data: [[571, 38, 33], [639, 24, 73], [210, 16, 32], [207, 53, 54], [563, 19, 52], [356, 20, 59], [508, 58, 33], [575, 43, 52], [566, 15, 59], [505, 26, 61], [115, 13, 67], [433, 42, 23], [520, 48, 16], [660, 36, 69], [539, 16, 38], [391, 52, 56], [79, 50, 27], [695, 58, 71], [224, 59, 46], [227, 19, 61]]
    }, {
      name: "Bubble2",
      data: [[431, 14, 59], [300, 56, 59], [504, 12, 54], [91, 14, 20], [431, 38, 41], [311, 45, 68], [467, 22, 67], [75, 23, 24], [459, 60, 56], [413, 51, 46], [709, 23, 17], [462, 34, 73], [495, 12, 67], [531, 47, 58], [302, 15, 19], [18, 29, 18], [122, 29, 37], [587, 40, 66], [93, 23, 50], [632, 52, 64]]
    }],
    options: {
      chart: {
        height: 350,
        type: "bubble"
      },
      colors: graphColor !== null && graphColor !== void 0 ? graphColor : defaultColor,
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 0.8
      },
      xaxis: {
        tickAmount: 12,
        type: "category"
      },
      yaxis: {
        max: 70
      }
    }
  };
  return state;
}