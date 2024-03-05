import { CircularProgress, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { makeStyles } from "@mui/styles";
import { getMixedMetadata, getPieMetadata, getTimelineMetadata, getBubbleMetadata, defaultColor } from "./graphUtility";
import graphDimensions from "./graphConfigs";
import { customTheme } from "../theme";
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
const useCustomStyles = makeStyles(() => {
  return {
    graphLoader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: ({ height }) => (height ? height : "100%"),
      width: ({ width }) => (width ? width : "100%"),
    },
    xAxisLabel: {
      alignSelf: "center",
      fontSize: 11,
      color: "rgb(55, 61, 63)",
      fontWeight: 900,
      marginBottom: "2rem",
    },
    illustration: {
      width: "6.75rem",
    },
    width100: {
      width: "100%",
    },
    height100: {
      height: "100%",
    },
    containerMargin: {
      paddingMargin: "1rem",
    },
  };
});
export default function GraphCard(props) {
  let { graphColor = defaultColor, values, isLoading = false, error = false, errMsg = "", events, height = "100%", width = "100%", ...others } = props;

  const chartType = values?.graphDetails?.chartType || "";
  const classes = useCustomStyles({
    height: height,
    width: width,
  });
  const chartRef = useRef(null);
  const graphConfig = graphDimensions?.[chartType];

  const getGenerator = (values) => {
    let graphObj;
    if (chartType === "PIE" || chartType === "DONUT") {
      graphObj = getPieMetadata(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    } else if (chartType === "BAR" || chartType === "COLUMN" || chartType === "STACK_COLUMN" || chartType === "STACK_BAR" || chartType === "MIXED" || chartType === "AREA" || chartType === "LINE") {
      graphObj = getMixedMetadata(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    } else if (chartType === "BTIMELINE") {
      return getTimelineMetadata(chartType, values, graphColor, events);
    } else if (chartType === "BUBBLE") {
      graphObj = getBubbleMetadata(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    } else {
      graphObj = getMixedMetadata(chartType, values, graphColor, events);
      // graphObj.options.colors = graphColor;
    }
    if (chartRef?.current?.updateOptions) {
      chartRef?.current?.updateOptions(graphObj?.graphData?.options);
      chartRef?.current?.updateSeries(graphObj?.graphData?.series);
    }

    return graphObj;
  };
  const [state, setState] = useState({
    chartKey: graphDimensions?.[chartType]?.chartKey,
    graphData: getGenerator(values),
  });

  useEffect(() => {
    setState((prev) => {
      return {
        ...prev,
        chartKey: graphDimensions?.[chartType]?.chartKey,
        graphData: getGenerator(values),
      };
    });
  }, [isLoading, values]);

  return (
    <>
      {/* sx={{width}} className={`${classes.graphLoader}`}  */}
      {isLoading ? (
        <Stack className={`${classes.graphLoader}`} elementid="cwitm-chart-loader">
          <CircularProgress />
        </Stack>
      ) : error ? (
        <Stack className={`${classes.width100} ${classes.height100}  ${classes.graphLoader}`} style={{ backgroundColor: "#FFFFFF" }} justifyContent="center" alignItems="Center">
          {/* <img src={GraphError} className={classes.illustration}></img> */}
          <Typography variant="body2" sx={{ color: "#9A9A9A", fontWeight: "600" }} className={classes.containerMargin}>
            {"Image failed to load"}
          </Typography>
          <Typography variant="body2" sx={{ color: "#9A9A9A", fontWeight: "600" }} className={classes.containerMargin}>
            {errMsg}
          </Typography>
        </Stack>
      ) : (
        <Stack elementid="cwitm-chart-canvas">
          <ReactApexChart ref={chartRef} options={state?.graphData?.options} series={state?.graphData?.series} type={state?.chartKey} />
        </Stack>
      )}
    </>
  );
}
