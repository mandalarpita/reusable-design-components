import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import { customTheme } from "../theme";
import RadioButton from "../Inputs/RadioButton";
export default function TestRadioButtons() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <SizesOfRadioButton />
        </Grid>
        <Grid item>
          <ThemedRadioButton />
        </Grid>
        <Grid item>
          <DisabledRadioButton />
        </Grid>
        <Grid item>
          <RadioGroupExample />
        </Grid>
        <Grid item>
          <LabelRadio />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export const SizesOfRadioButton = () => {
  return (
    // <BrowserWindow url="Example : Sizes of Radio Button">
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2}>
        <Grid item>
          <RadioButton size="xs" />
        </Grid>
        <Grid item>
          <RadioButton size="sm" />
        </Grid>
        <Grid item>
          <RadioButton size="md" />
        </Grid>
        <Grid item>
          <RadioButton size="lg" />
        </Grid>
        <Grid item>
          <RadioButton size="xl" />
        </Grid>
      </Grid>
    </ThemeProvider>
    // </BrowserWindow>
  );
};

export const ThemedRadioButton = () => {
  return (
    // <BrowserWindow url="Example : Themed Radio Button">
    <ThemeProvider theme={customTheme}>
      <Grid conatiner spacing="2">
        <Grid item container spacing={2}>
          <Grid item>
            <RadioButton color="primary" />
          </Grid>
          <Grid item>
            <RadioButton color="secondary" />
          </Grid>

          <Grid item>
            <RadioButton overrideColor={customTheme.palette.primary.light} />
          </Grid>
          <Grid item>
            <RadioButton overrideColor={customTheme.palette.primary.dark} />
          </Grid>
          <Grid item>
            <RadioButton overrideColor={customTheme.palette.secondary.light} />
          </Grid>
          <Grid item>
            <RadioButton overrideColor={customTheme.palette.secondary.dark} />
          </Grid>
          <Grid item>
            <RadioButton overrideColor={"#99627A"} />
          </Grid>
          <Grid item>
            <RadioButton overrideColor={"#D25380"} />
          </Grid>
          <Grid item>
            <RadioButton overrideColor={"#C4DFDF"} />
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
            <RadioButton disabled checked={true} color="primary" />
          </Grid>
          <Grid item>
            <RadioButton disabled checked={true} color="secondary" />
          </Grid>

          <Grid item>
            <RadioButton disabled checked={true} overrideColor={customTheme.palette.primary.light} />
          </Grid>
          <Grid item>
            <RadioButton disabled checked={true} overrideColor={customTheme.palette.primary.dark} />
          </Grid>
          <Grid item>
            <RadioButton disabled checked={true} overrideColor={customTheme.palette.secondary.light} />
          </Grid>
          <Grid item>
            <RadioButton disabled checked={true} overrideColor={customTheme.palette.secondary.dark} />
          </Grid>
          <Grid item>
            <RadioButton disabled checked={true} overrideColor={"#99627A"} />
          </Grid>
          <Grid item>
            <RadioButton disabled checked={true} overrideColor={"#D25380"} />
          </Grid>
          <Grid item>
            <RadioButton disabled checked={true} overrideColor={"#C4DFDF"} />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
    // </BrowserWindow>
  );
};

export const RadioGroupExample = () => {
  const [value, setValue] = useState("female");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <ThemeProvider theme={customTheme}>
      <FormControl>
        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" value={value} onChange={handleChange} name="radio-buttons-group">
          <FormControlLabel value="female" control={<RadioButton color="secondary" />} label="Female" />
          <FormControlLabel value="male" control={<RadioButton color="secondary" />} label="Male" />
          <FormControlLabel value="other" control={<RadioButton color="secondary" />} label="Other" />
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};
export const LabelRadio = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2}>
        <Grid item>
          <RadioButton size="xs" label="Create PR" />
        </Grid>
        <Grid item>
          <RadioButton size="sm" label="Placement - top" placement="top" />
        </Grid>
        <Grid item>
          <RadioButton size="md" label="Placement - right" placement="right" />
        </Grid>
        <Grid item>
          <RadioButton size="lg" label="Placement - bottom" placement="bottom" />
        </Grid>
        <Grid item>
          <RadioButton size="xl" label="Placement - left" placement="left" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
