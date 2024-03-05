import graphDimensions from "./graphConfigs";
// Add events for these
//  onClick;
// onLegendClick;
// onMarkerClick;
// onXAxisLabelClick;
export const defaultColor = ["#FFC887", "#FEA69B", "#8276CB", "#5CC0B4", "#E6DCF4", "#C4C4C4", "#A1C9F1", "#FF6B6B", "#0D8A6A", "#FFA6A6", "#957DAD"];
export function getMixedMetadata(chartType, values, graphColor, events) {
  let series = structuredClone(values?.data);
  if (series?.length === 1 && !series?.[0]?.name) {
    series[0].name = values?.graphDetails?.yTitle || "";
  }
  let zoomed = false,
    dataPointSelection = false;
  const graphConfig = graphDimensions?.[chartType];
  let state = {
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
          vertical: 32,
        },
      },
      stroke: {
        curve: "smooth",
      },
      chart: {
        type: graphConfig?.chartKey || "bar",
        stacked: graphConfig?.stacked ?? false,
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

          zoomed: function (chartContext, { xaxis, yaxis }) {
            zoomed = true;
          },

          click: function (event, chartContext, config) {
            if (zoomed) {
              zoomed = false;
              return false; // Prevent click event during pan and zoom
            }
            if (dataPointSelection) {
              dataPointSelection = false;
              return false; // Prevent click event during dataPointSelection
            }
            //  && graphConfig?.chartKey !== "bar" && graphConfig?.chartKey !== "column" && !event.target.className.animVal.includes("hovering-zoom")
            if (events?.onClick) {
              let selectedSeries = config?.config?.series?.[config?.seriesIndex];
              let selectedValue = selectedSeries?.data?.[config?.dataPointIndex];
              if (selectedSeries && selectedValue) {
                events.onClick(
                  {
                    selectedDataPoint: selectedValue,
                    name: selectedSeries?.name,
                    type: selectedSeries?.type,
                    chartKey: chartType,
                    dataPointIndex: config?.dataPointIndex,
                    seriesIndex: config?.seriesIndex,
                    values: values,
                  },
                  event,
                  chartContext,
                  config
                );
              }
            }
          },
          dataPointSelection: function (event, chartContext, config) {
            if (events?.onClick) {
              let selectedSeries = config?.w?.config?.series?.[config?.seriesIndex];
              let selectedValue = selectedSeries?.data?.[config?.dataPointIndex];
              if (selectedSeries && selectedValue) {
                dataPointSelection = true;
                events.onClick(
                  {
                    selectedDataPoint: selectedValue,
                    name: selectedSeries?.name,
                    type: selectedSeries?.type,
                    chartKey: chartType,
                    dataPointIndex: config?.dataPointIndex,
                    seriesIndex: config?.seriesIndex,
                    values: values,
                  },
                  event,
                  chartContext,
                  config
                );
              }
            }
          },
        },
        toolbar: {
          export: {
            csv: {
              filename: values?.graphDetails?.graphName,
            },
            svg: {
              filename: values?.graphDetails?.graphName,
            },
            png: {
              filename: values?.graphDetails?.graphName,
            },
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: graphConfig?.horizontal || false,
          borderRadius: "2px",
          columnWidth: "80%",
        },
      },
      xaxis: {
        showForNullSeries: true,
        type: "category",
        title: {
          text: graphConfig?.horizontal ? values?.graphDetails?.yTitle : values?.graphDetails?.xTitle || values?.graphDetails?.xTitle,
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
            fontWeight: 400,
          },
          trim: true,
        },
      },
      yaxis: {
        showAlways: true,
        showForNullSeries: true,
        title: {
          text: graphConfig?.horizontal ? values?.graphDetails?.xTitle : values?.graphDetails?.yTitle || values?.graphDetails?.yTitle,
        },
        tickPlacement: "on",
        labels: {
          style: {
            hideOverlappingLabels: true,
            fontSize: "14px",
            fontFamily: "Roboto",
            fontWeight: 400,
          },
        },
      },
      zoom: {
        enabled: false,
      },
      colors: graphColor ?? defaultColor,
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        shared: true,
        intersect: false,
        theme: "light",
      },
    },
  };

  return state;
}

export function getPieMetadata(chartType, values, graphColor, events) {
  const graphConfig = graphDimensions?.[chartType];
  const state = {
    series: values?.series?.map(Number) || values?.series || [],
    options: {
      legend: {
        show: true,
        fontSize: "14px",
        fontFamily: "Roboto",
        width: 200,
        horizontalAlign: "center",
        fontWeight: 400,
        itemMargin: {
          vertical: 7,
        },
      },

      chart: {
        width: "100%",
        height: "100%",
        type: graphConfig?.chartKey || "bar",
        fontFamily: "Roboto",
        events: {
          dataPointSelection: function (event, chartContext, config) {
            if (events?.onClick) {
              let selectedLabel = config?.w?.config?.labels?.[config?.dataPointIndex];
              let selectedValue = config?.w?.config?.series?.[config?.dataPointIndex];
              if (selectedLabel && selectedValue) {
                events.onClick(
                  {
                    selectedDataPoint: { x: selectedLabel, y: selectedValue, id: values.id[config?.dataPointIndex] },
                    name: selectedLabel,
                    type: graphConfig?.chartKey,
                    chartKey: chartType,
                    dataPointIndex: config?.dataPointIndex,
                    seriesIndex: config?.seriesIndex,
                    values: values,
                  },
                  event,
                  chartContext,
                  config
                );
              }
            }
          },
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        theme: "light",
        y: [
          {
            formatter: function (y) {
              return y.toFixed(0);
            },
          },
        ],
      },
      dataLabels: {
        enabled: false,
      },
      labels: values?.label || [],
      colors: graphColor ?? defaultColor,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
              fontFamily: "Roboto",
            },
            legend: {
              show: true,
              fontSize: "14px",
              fontFamily: "Roboto",
              width: 100,
              horizontalAlign: "center",
              fontWeight: 400,
              itemMargin: {
                vertical: 7,
              },
            },
          },
        },
      ],
    },
  };

  return state;
}
export function getTimelineMetadata(chartType, values, graphColor, events) {
  const graphConfig = graphDimensions?.[chartType];
  let state = {
    series: [
      {
        data:
          [
            {
              x: "Code",
              y: [1551484800000, 1551657600000],
            },
            {
              x: "Test",
              y: [1551657600000, 1552003200000],
            },
            {
              x: "Validation",
              y: [1552003200000, 1552348800000],
            },
            {
              x: "Deployment",
              y: [1552348800000, 1552867200000],
            },
          ] || [],
      },
    ],
    options: {
      chart: {
        height: 600,
        type: graphConfig?.chartKey || "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: graphConfig?.horizontal || true,
        },
      },
      colors: graphColor ?? defaultColor,
      xaxis: {
        type: "datetime",
      },
    },
  };
  return state;
}

export function getBubbleMetadata(chartType, values, graphColor, events) {
  const graphConfig = graphDimensions?.[chartType];
  let state = {
    series: [
      {
        name: "Bubble1",
        data: [
          [571, 38, 33],
          [639, 24, 73],
          [210, 16, 32],
          [207, 53, 54],
          [563, 19, 52],
          [356, 20, 59],
          [508, 58, 33],
          [575, 43, 52],
          [566, 15, 59],
          [505, 26, 61],
          [115, 13, 67],
          [433, 42, 23],
          [520, 48, 16],
          [660, 36, 69],
          [539, 16, 38],
          [391, 52, 56],
          [79, 50, 27],
          [695, 58, 71],
          [224, 59, 46],
          [227, 19, 61],
        ],
      },
      {
        name: "Bubble2",
        data: [
          [431, 14, 59],
          [300, 56, 59],
          [504, 12, 54],
          [91, 14, 20],
          [431, 38, 41],
          [311, 45, 68],
          [467, 22, 67],
          [75, 23, 24],
          [459, 60, 56],
          [413, 51, 46],
          [709, 23, 17],
          [462, 34, 73],
          [495, 12, 67],
          [531, 47, 58],
          [302, 15, 19],
          [18, 29, 18],
          [122, 29, 37],
          [587, 40, 66],
          [93, 23, 50],
          [632, 52, 64],
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bubble",
      },
      colors: graphColor ?? defaultColor,
      dataLabels: {
        enabled: false,
      },
      fill: {
        opacity: 0.8,
      },
      xaxis: {
        tickAmount: 12,
        type: "category",
      },
      yaxis: {
        max: 70,
      },
    },
  };

  return state;
}
