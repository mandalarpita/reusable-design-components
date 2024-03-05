import React, { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Switch from "../Inputs/Switch";
import { customTheme } from "../theme";
export default function TestSwitch() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <SizesOfSwitch />
        </Grid>
        <Grid item>
          <ThemedSwitch />
        </Grid>
        <Grid item>
          <DisabledRadioButton />
        </Grid>
        <Grid item>
          <LabelSwitch />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export const SizesOfSwitch = () => {
  return (
    // <BrowserWindow url="Example : Sizes of Switch">
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2}>
        <Grid item>
          <Switch size="xs" />
        </Grid>
        <Grid item>
          <Switch size="sm" />
        </Grid>
        <Grid item>
          <Switch size="md" />
        </Grid>
        <Grid item>
          <Switch size="lg" />
        </Grid>
        <Grid item>
          <Switch size="xl" />
        </Grid>
      </Grid>
    </ThemeProvider>
    // </BrowserWindow>
  );
};

export const ThemedSwitch = () => {
  return (
    // <BrowserWindow url="Example : Themed Radio Button">
    <ThemeProvider theme={customTheme}>
      <Grid conatiner spacing="2">
        <Grid item container spacing={2}>
          <Grid item>
            <Switch color="primary" />
          </Grid>
          <Grid item>
            <Switch color="secondary" />
          </Grid>

          <Grid item>
            <Switch overrideColor={customTheme.palette.primary.light} />
          </Grid>
          <Grid item>
            <Switch overrideColor={customTheme.palette.primary.dark} />
          </Grid>
          <Grid item>
            <Switch overrideColor={customTheme.palette.secondary.light} />
          </Grid>
          <Grid item>
            <Switch overrideColor={customTheme.palette.secondary.dark} />
          </Grid>
          <Grid item>
            <Switch overrideColor={"#99627A"} />
          </Grid>
          <Grid item>
            <Switch overrideColor={"#D25380"} />
          </Grid>
          <Grid item>
            <Switch overrideColor={"#C4DFDF"} />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
    // </BrowserWindow>
  );
};
export const DisabledRadioButton = () => {
  return (
    // <BrowserWindow url="Example : Disabled Radio Button">
    <ThemeProvider theme={customTheme}>
      <Grid conatiner spacing="2">
        <Grid item container spacing={2}>
          <Grid item>
            <Switch disabled checked={true} color="primary" />
          </Grid>
          <Grid item>
            <Switch disabled checked={true} color="secondary" />
          </Grid>

          <Grid item>
            <Switch disabled checked={true} overrideColor={customTheme.palette.primary.light} />
          </Grid>
          <Grid item>
            <Switch disabled checked={true} overrideColor={customTheme.palette.primary.dark} />
          </Grid>
          <Grid item>
            <Switch disabled checked={true} overrideColor={customTheme.palette.secondary.light} />
          </Grid>
          <Grid item>
            <Switch disabled checked={true} overrideColor={customTheme.palette.secondary.dark} />
          </Grid>
          <Grid item>
            <Switch disabled checked={true} overrideColor={"#99627A"} />
          </Grid>
          <Grid item>
            <Switch disabled checked={true} overrideColor={"#D25380"} />
          </Grid>
          <Grid item>
            <Switch disabled checked={true} overrideColor={"#C4DFDF"} />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
    // </BrowserWindow>
  );
};

export const LabelSwitch = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2}>
        <Grid item>
          <Switch size="xs" checked={false} label="Create PR" />
        </Grid>
        <Grid item>
          <Switch size="sm" label="Placement - top" placement="top" />
        </Grid>
        <Grid item>
          <Switch size="md" label="Placement - right" placement="right" />
        </Grid>
        <Grid item>
          <Switch size="lg" label="Placement - bottom" placement="bottom" />
        </Grid>
        <Grid item>
          <Switch size="xl" label="Placement - left" placement="left" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
