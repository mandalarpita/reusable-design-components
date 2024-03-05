import Grid from "@mui/material/Grid";
import GraphCard from "../Reports/GraphCard";

import React, { useEffect, useState } from "react";
// rds components

// material imports

// theme and external imports
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../theme";
import { Box } from "@mui/material";
// import { graphDimensions } from "../Reports/graphConfigs";
import graphDimensions from "../Reports/graphConfigs";
const boxStyling = {
  width: "50%",
};

export default function TestReports({ chartType }) {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container>
        <Box sx={boxStyling}>
          <StandardGraph chartType={chartType} />
        </Box>
        <Box sx={boxStyling}>
          <LoadingGraph chartType={chartType} />
        </Box>
        <Box sx={boxStyling}>
          <ColorsGraph chartType={chartType} />
        </Box>
        <Box sx={boxStyling}>
          <GraphEvents chartType={chartType} />
        </Box>
      </Grid>
    </ThemeProvider>
  );
}

export function StandardGraph({ chartType }) {
  return (
    <ThemeProvider theme={customTheme}>
      <GraphCard height="30rem" values={getValues(chartType)} isLoading={false} />
    </ThemeProvider>
  );
}

export function LoadingGraph({ chartType }) {
  const [load, setLoading] = useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, getRandomArbitrary(2, 3));

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <GraphCard height="30rem" graphColor={color1} values={getValues(chartType)} isLoading={load} />
    </ThemeProvider>
  );
}

export function ColorsGraph({ chartType }) {
  const [load, setLoading] = useState(true);
  const graphColor = color2;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, getRandomArbitrary(2, 3));

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <GraphCard height="30rem" graphColor={graphColor} values={getValues(chartType)} isLoading={load} />
    </ThemeProvider>
  );
}
export function GraphEvents({ chartType }) {
  const [load, setLoading] = useState(true);
  const graphColor = color3;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, getRandomArbitrary(2, 3));

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <GraphCard
        height="30rem"
        graphColor={graphColor}
        values={getValues(chartType)}
        isLoading={load}
        events={{
          onClick: function (data) {
            console.log("onClick", data);
          },
        }}
      />
    </ThemeProvider>
  );
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min * 1000;
}

function getValues(chartType) {
  let values;
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
        yTitle: "Popularity in %",
      },
      id: ["Chrome-2021", "Safari-2021", "Edge-2021", "Mozilla-Fifefox-2021"],
      label: ["Chrome", "Safari", "Edge", "Mozilla-Fifefox"],
      series: [80, 38, 3, 6],
      xyPayload: {},
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
        filterDefinition: "",
      },
      data: [
        {
          name: "Google Chrome",
          type: graphDimensions?.[chartType].chartKey,
          data: [
            {
              x: "2012",
              y: 35,
              id: "Chrome-2012",
            },
            {
              x: "2013",
              y: 40,
              id: "Chrome-2013",
            },
            {
              x: "2014",
              y: 45,
              id: "Chrome-2014",
            },
            {
              x: "2015",
              y: 50,
              id: "Chrome-2015",
            },
            {
              x: "2016",
              y: 55,
              id: "Chrome-2016",
            },
            {
              x: "2017",
              y: 60,
              id: "Chrome-2017",
            },
            {
              x: "2018",
              y: 65,
              id: "Chrome-2018",
            },
            {
              x: "2019",
              y: 70,
              id: "Chrome-2019",
            },
            {
              x: "2020",
              y: 75,
              id: "Chrome-2020",
            },
            {
              x: "2021",
              y: 80,
              id: "Chrome-2021",
            },
          ],
        },
        {
          name: "Mozilla Firefox",
          type: graphDimensions?.[chartType].chartKey,
          data: [
            {
              x: "2012",
              y: 20,
              id: "Firefox-2012",
            },
            {
              x: "2013",
              y: 18,
              id: "Firefox-2013",
            },
            {
              x: "2014",
              y: 16,
              id: "Firefox-2014",
            },
            {
              x: "2015",
              y: 14,
              id: "Firefox-2015",
            },
            {
              x: "2016",
              y: 12,
              id: "Firefox-2016",
            },
            {
              x: "2017",
              y: 10,
              id: "Firefox-2017",
            },
            {
              x: "2018",
              y: 9,
              id: "Firefox-2018",
            },
            {
              x: "2019",
              y: 8,
              id: "Firefox-2019",
            },
            {
              x: "2020",
              y: 7,
              id: "Firefox-2020",
            },
            {
              x: "2021",
              y: 6,
              id: "Firefox-2021",
            },
          ],
        },
        {
          name: "Safari",
          type: graphDimensions?.[chartType].chartKey,
          data: [
            {
              x: "2012",
              y: 15,
              id: "Safari-2012",
            },
            {
              x: "2013",
              y: 18,
              id: "Safari-2013",
            },
            {
              x: "2014",
              y: 20,
              id: "Safari-2014",
            },
            {
              x: "2015",
              y: 22,
              id: "Safari-2015",
            },
            {
              x: "2016",
              y: 25,
              id: "Safari-2016",
            },
            {
              x: "2017",
              y: 28,
              id: "Safari-2017",
            },
            {
              x: "2018",
              y: 30,
              id: "Safari-2018",
            },
            {
              x: "2019",
              y: 32,
              id: "Safari-2019",
            },
            {
              x: "2020",
              y: 35,
              id: "Safari-2020",
            },
            {
              x: "2021",
              y: 38,
              id: "Safari-2021",
            },
          ],
        },
        {
          name: "Microsoft Edge",
          type: graphDimensions?.[chartType].chartKey,
          data: [
            {
              x: "2012",
              y: 10,
              id: "Edge-2012",
            },
            {
              x: "2013",
              y: 9,
              id: "Edge-2013",
            },
            {
              x: "2014",
              y: 8,
              id: "Edge-2014",
            },
            {
              x: "2015",
              y: 7,
              id: "Edge-2015",
            },
            {
              x: "2016",
              y: 6,
              id: "Edge-2016",
            },
            {
              x: "2017",
              y: 5,
              id: "Edge-2017",
            },
            {
              x: "2018",
              y: 6,
              id: "Edge-2018",
            },
            {
              x: "2019",
              y: 5,
              id: "Edge-2019",
            },
            {
              x: "2020",
              y: 4,
              id: "Edge-2020",
            },
            {
              x: "2021",
              y: 3,
              id: "Edge-2021",
            },
          ],
        },
      ],
      xyPayload: {
        xAxis: "cw_itm_wn_system_master.SYSTEM_NAME",
        yAxis: [
          {
            name: "",
            column: "cw_itm_wn_tasks.TASK_ID",
            aggregation: "Count",
          },
        ],
        xLabel: [],
      },
    };
  }

  if (!graphDimensions?.[chartType].stacked) {
    values.data = values.data.splice(0, 1);
  }
  return values;
}

const color1 = ["#E74646", "#FA9884", "#FFE5CA", "#FFF3E2"];
const color2 = ["#AA77FF", "#C9EEFF", "#97DEFF", "#62CDFF"];
const color3 = ["#86626E", "#DBAFC1", "#E7C8DD", "#E2E4F6"];
const graphName = "stack_line_graph_example";
const data = [
  {
    x: "2012",
    y: 20,
    id: "Firefox-2012",
  },
  {
    x: "2013",
    y: 18,
    id: "Firefox-2013",
  },
  {
    x: "2014",
    y: 16,
    id: "Firefox-2014",
  },
  {
    x: "2015",
    y: 14,
    id: "Firefox-2015",
  },
  {
    x: "2016",
    y: 12,
    id: "Firefox-2016",
  },
  {
    x: "2017",
    y: 10,
    id: "Firefox-2017",
  },
  {
    x: "2018",
    y: 9,
    id: "Firefox-2018",
  },
  {
    x: "2019",
    y: 8,
    id: "Firefox-2019",
  },
  {
    x: "2020",
    y: 7,
    id: "Firefox-2020",
  },
  {
    x: "2021",
    y: 6,
    id: "Firefox-2021",
  },
];
