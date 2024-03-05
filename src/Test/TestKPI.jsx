import React, { useEffect, useState } from "react";
// rds components

// material imports
import Grid from "@mui/material/Grid";
import KPICard from "../Reports/KPICard";

export default function TestKPI() {
  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <StandardKPI />
      </Grid>
      <Grid item>
        <LoadingKPI />
      </Grid>
    </Grid>
  );
}
export function StandardKPI() {
  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
      <Grid item sx={{ width: "25%" }}>
        <KPICard value={45} graphName={"Total Tasks"} isLoading={false} />
      </Grid>
      <Grid item sx={{ width: "25%" }}>
        <KPICard value={20} graphName={"In Progress Tasks"} isLoading={false} />
      </Grid>
      <Grid item sx={{ width: "25%" }}>
        <KPICard value={5} graphName={"Breached Tasks"} isLoading={false} />
      </Grid>
    </Grid>
  );
}

export function LoadingKPI() {
  const [loadTotalTasks, setLoadingTotalTasks] = useState(true);
  const [loadInprogress, setLoadingInprogress] = useState(true);
  const [loadBreached, setLoadingBreached] = useState(true);
  const time = [getRandomArbitrary(1, 2), getRandomArbitrary(3, 4), getRandomArbitrary(2, 3)];

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingTotalTasks(false);
    }, time[0]);

    return () => clearTimeout(timeout);
  }, []);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingInprogress(false);
    }, time[1]);

    return () => clearTimeout(timeout);
  }, []);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingBreached(false);
    }, time[2]);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
      <Grid item sx={{ width: "25%" }}>
        <KPICard value={45} graphName={"Total Tasks"} isLoading={loadTotalTasks} />
      </Grid>
      <Grid item sx={{ width: "25%" }}>
        <KPICard value={20} graphName={"In Progress Tasks"} isLoading={loadInprogress} />
      </Grid>
      <Grid item sx={{ width: "25%" }}>
        <KPICard value={5} graphName={"Breached Tasks"} isLoading={loadBreached} />
      </Grid>
    </Grid>
  );
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min * 1000;
}
