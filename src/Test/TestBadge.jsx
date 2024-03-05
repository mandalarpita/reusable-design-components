import React from "react";
// rds components

// material imports
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// theme and external imports
import { ThemeProvider } from "@mui/material/styles";
import Badge from "../DataDisplay/Badge";
import Icon from "../DataDisplay/Icon";
import { customTheme as theme } from "../theme";

export default function CustomBadge() {
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
        <Grid item>
          <VariantsBadge />
        </Grid>
        <Grid item>
          <OnClickBadge />
        </Grid>
        <Grid item>
          <BadgeVisibility />
        </Grid>
        <Grid item>
          <BadgeAlignnment />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export const BasicUsageExample = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Badge badgeContent={4} color="primary" size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
      </Stack>
    </>
  );
};

export const SizesBadge = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Badge badgeContent={4} color="primary">
          <Icon icon={"BoxIcon.BiSmile"} size="xs" hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <Icon icon={"BoxIcon.BiSmile"} size="sm" hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <Icon icon={"BoxIcon.BiSmile"} size="md" hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <Icon icon={"BoxIcon.BiSmile"} size="lg" hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="primary">
          <Icon icon={"BoxIcon.BiSmile"} size="xl" hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
      </Stack>
    </>
  );
};

export const ThemeBadge = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Badge badgeContent={4} color="primary" size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="secondary" size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="primary" overrideColor={theme.palette.primary.light} size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="primary" overrideColor={theme.palette.primary.light} size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="secondary" overrideColor={theme.palette.secondary.light} size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={4} color="secondary" overrideColor={theme.palette.secondary.dark} size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
      </Stack>
    </ThemeProvider>
  );
};

export const VariantsBadge = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Badge color="primary" size="sm" badgeContent=" ">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge color="secondary" size="sm" badgeContent=" " variant="dot">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge color="primary" overlap="circular" badgeContent=" " overrideColor={theme.palette.primary.light} size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge color="primary" overlap="circular" badgeContent=" " variant="dot" overrideColor={theme.palette.primary.light} size="sm">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
      </Stack>
    </ThemeProvider>
  );
};

export const OnClickBadge = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Badge
          badgeContent={0}
          color="primary"
          size="sm"
          onClick={() => {
            console.log("Add functions here");
          }}
        >
          {"Check Console"}
        </Badge>
      </Stack>
    </>
  );
};

export const BadgeVisibility = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Badge badgeContent={0} color="primary" size="md">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={0} color="primary" size="md" showZero>
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={400000} color="primary" size="md">
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge badgeContent={400000} color="primary" size="md" max={400000}>
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
      </Stack>
    </>
  );
};

export const BadgeAlignnment = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Badge
          badgeContent={10}
          color="primary"
          size="md"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
        <Badge
          badgeContent={10}
          color="primary"
          size="md"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
        </Badge>
      </Stack>
    </>
  );
};
