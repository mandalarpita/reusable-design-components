import React from "react";
// rds components

// material imports
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// theme and external imports
import { ThemeProvider } from "@mui/material/styles";
import Icon from "../DataDisplay/Icon";
import { customTheme as theme } from "../theme";

export default function Badge() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <BasicUsageExample />
        </Grid>
        <Grid item>
          <SizesBadge />
        </Grid>
        <Grid item>
          <ThemeBadge />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export const BasicUsageExample = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"} alignItems="center">
        <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} color="primary" />
      </Stack>
    </>
  );
};

export const SizesBadge = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"} alignItems="center">
        <Icon icon={"BoxIcon.BiSmile"} size="xs" hoverIcon={"BoxIcon.BiWinkSmile"} />
        <Icon icon={"BoxIcon.BiSmile"} size="sm" hoverIcon={"BoxIcon.BiWinkSmile"} />
        <Icon icon={"BoxIcon.BiSmile"} size="md" hoverIcon={"BoxIcon.BiWinkSmile"} />
        <Icon icon={"BoxIcon.BiSmile"} size="lg" hoverIcon={"BoxIcon.BiWinkSmile"} />
        <Icon icon={"BoxIcon.BiSmile"} size="xl" hoverIcon={"BoxIcon.BiWinkSmile"} />
      </Stack>
    </>
  );
};

export const ThemeBadge = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2} justifyContent={"center"} alignItems="center">
        <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} color="primary" />
        <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} color="secondary" />
        <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} overrideColor={theme.palette.primary.light} />
        <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} color="primary" overrideColor={theme.palette.primary.light} />
        <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} color="secondary" overrideColor={theme.palette.secondary.light} />
        <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} color="secondary" overrideColor={theme.palette.secondary.dark} />
      </Stack>
    </ThemeProvider>
  );
};
