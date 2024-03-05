import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import { makeStyles } from "@mui/styles";

/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
const useCustomStyles = makeStyles(() => {
  return {
    graphKPICard: {
      "&.MuiCard-root": {
        borderRadius: "10px",
        height: "92px",
        boxShadow: " 0px 4px 8px rgba(187, 210, 227, 0.25)",
      },
      containerPadding: {
        paddingBottom: "0.5rem",
      },
      weight500: {
        fontWeight: "500 !important",
      },
      weight700: {
        fontWeight: "700 !important",
      },
    },
  };
});

const KPICard = ({ value, graphName, isLoading }) => {
  const classes = useCustomStyles();
  return (
    <Card elementid="cwitm-kpi-card" className={classes.graphKPICard}>
      <CardContent>
        <Stack sx={{ textAlign: "center" }}>
          {isLoading ? (
            <Stack alignItems="center" className={classes.containerPadding}>
              <Skeleton variant="rectangular" width={"40%"} height={21} sx={{ borderRadius: "4px" }}></Skeleton>
            </Stack>
          ) : (
            <Stack alignItems="center" className={classes.containerPadding}>
              <Typography variant="h6" color="text.primary" sx={{ fontWeight: 500 }}>
                {/* {props?.kpiValue?.[props?.kpiDetails?.graphConfigId]?.value || 0} */}
                {value || 0}
              </Typography>
            </Stack>
          )}

          <Typography variant="body2" sx={{ fontWeight: 700 }} color="primary.main">
            {graphName || "Test"}
            {/* {props?.kpiDetails?.graphName} */}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default KPICard;
