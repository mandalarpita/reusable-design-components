import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import React, { useState } from "react";
import Icon from "../DataDisplay/Icon";
import CheckBox from "../Inputs/CheckBox";
import { customTheme } from "../theme";

export default function TestCheckbox() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <SizesOfCheckBox />
        </Grid>
        <Grid item>
          <ThemedCheckBox />
        </Grid>
        <Grid item>
          <DisabledCheckbox />
        </Grid>
        <Grid item>
          <LabelCheckbox />
        </Grid>
        <Grid item>
          <CustomiseIcon />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export const SizesOfCheckBox = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <CheckBox size="xs" />
      </Grid>
      <Grid item>
        <CheckBox size="sm" />
      </Grid>
      <Grid item>
        <CheckBox size="md" />
      </Grid>
      <Grid item>
        <CheckBox size="lg" />
      </Grid>
      <Grid item>
        <CheckBox size="xl" />
      </Grid>
    </Grid>
  );
};

export const ThemedCheckBox = () => {
  return (
    <Grid conatiner spacing="2">
      <Grid item container spacing={2}>
        <Grid item>
          <CheckBox color="primary" />
        </Grid>
        <Grid item>
          <CheckBox color="secondary" />
        </Grid>

        <Grid item>
          <CheckBox overrideColor={customTheme.palette.primary.light} />
        </Grid>
        <Grid item>
          <CheckBox overrideColor={customTheme.palette.primary.dark} />
        </Grid>
        <Grid item>
          <CheckBox overrideColor={customTheme.palette.secondary.light} />
        </Grid>
        <Grid item>
          <CheckBox overrideColor={customTheme.palette.secondary.dark} />
        </Grid>
        <Grid item>
          <CheckBox overrideColor={"#99627A"} />
        </Grid>
        <Grid item>
          <CheckBox overrideColor={"#D25380"} />
        </Grid>
        <Grid item>
          <CheckBox overrideColor={"#C4DFDF"} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export const DisabledCheckbox = () => {
  return (
    <Grid conatiner spacing="2">
      <Grid item container spacing={2}>
        <Grid item>
          <CheckBox disabled checked={true} color="primary" />
        </Grid>
        <Grid item>
          <CheckBox disabled checked={true} color="secondary" />
        </Grid>

        <Grid item>
          <CheckBox disabled checked={true} overrideColor={customTheme.palette.primary.light} />
        </Grid>
        <Grid item>
          <CheckBox disabled checked={true} overrideColor={customTheme.palette.primary.dark} />
        </Grid>
        <Grid item>
          <CheckBox disabled checked={true} overrideColor={customTheme.palette.secondary.light} />
        </Grid>
        <Grid item>
          <CheckBox disabled checked={true} overrideColor={customTheme.palette.secondary.dark} />
        </Grid>
        <Grid item>
          <CheckBox disabled checked={true} overrideColor={"#99627A"} />
        </Grid>
        <Grid item>
          <CheckBox disabled checked={true} overrideColor={"#D25380"} />
        </Grid>
        <Grid item>
          <CheckBox disabled checked={true} overrideColor={"#C4DFDF"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export const LabelCheckbox = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <CheckBox size="xs" label="Create PR" />
      </Grid>
      <Grid item>
        <CheckBox size="sm" label="Placement - top" placement="top" />
      </Grid>
      <Grid item>
        <CheckBox size="md" label="Placement - right" placement="right" />
      </Grid>
      <Grid item>
        <CheckBox size="lg" label="Placement - bottom" placement="bottom" />
      </Grid>
      <Grid item>
        <CheckBox size="xl" label="Placement - left" placement="left" />
      </Grid>
    </Grid>
  );
};

export const CustomiseIcon = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <CheckBox color="primary" icon={<Icon icon="RemixIcon.RiAdvertisementLine" />} checkedIcon={<Icon icon="RemixIcon.RiAdvertisementFill" />} label="Display Ads" />
      </Grid>
      <Grid item>
        <CheckBox size={"lg"} color="secondary" icon={<Icon icon="MaterialIcon.MdDocumentScanner" />} checkedIcon={<Icon icon="MaterialIcon.MdDocumentScanner" />} label="Scan Document" />
      </Grid>
      <Grid item>
        <CheckBox size={"xl"} icon={<Icon icon="BoxIcon.BiBellOff" />} checkedIcon={<Icon icon="BoxIcon.BiBell" />} overrideColor="#E91E62" label="Enable Notification" />
      </Grid>
    </Grid>
  );
};
