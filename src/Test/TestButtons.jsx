import React, { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { customTheme } from "../theme";
import Button from "../Inputs/Button";
import Icon from "../DataDisplay/Icon";
export default function TestButtons() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TypesOfButton />
        </Grid>
        <Grid item>
          <SizesOfButton />
        </Grid>
        <Grid item>
          <DisabledButton />
        </Grid>
        <Grid item>
          <ThemedButton />
        </Grid>
        <Grid item>
          <OverrideColor />
        </Grid>
        <Grid item>
          <LoadingButton />
        </Grid>
        <Grid item>
          <IconButtons />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export const TypesOfButton = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2}>
        <Grid item>
          <Button size="xs">Default Button</Button>
        </Grid>
        <Grid item>
          <Button size="xs" variant="text">
            Text Button
          </Button>
        </Grid>

        <Grid item>
          <Button size="xs" variant="outlined">
            Outlined Button
          </Button>
        </Grid>
        <Grid item>
          <Button size="xs" variant="contained">
            Contained Button
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export const SizesOfButton = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2}>
        <Grid item>
          <Button size="xs" variant="contained">
            Button Size - xs
          </Button>
        </Grid>
        <Grid item>
          <Button size="sm" variant="contained">
            Button Size - sm
          </Button>
        </Grid>
        <Grid item>
          <Button size="md" variant="contained">
            Button Size - md
          </Button>
        </Grid>
        <Grid item>
          <Button size="lg" variant="contained">
            Button Size - lg
          </Button>
        </Grid>{" "}
        <Grid item>
          <Button size="xl" variant="contained">
            Button Size - xl
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export const DisabledButton = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2}>
        <Grid item>
          <Button disabled size="xs">
            Disabled Default Button
          </Button>
        </Grid>
        <Grid item>
          <Button disabled size="xs" variant="text">
            Disabled Text Button
          </Button>
        </Grid>
        <Grid item>
          <Button disabled size="xs" variant="outlined">
            Disabled Outlined Button
          </Button>
        </Grid>

        <Grid item>
          <Button disabled size="xs" variant="contained">
            Disabled Contained Button
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export const ThemedButton = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid direction="row" container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" color="primary">
              Default Button
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="primary" variant="text">
              Text Button
            </Button>
          </Grid>

          <Grid item>
            <Button size="xs" color="primary" variant="outlined">
              Outlined Button
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="primary" variant="contained">
              Contained Button
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" color="secondary">
              Default Button
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="text">
              Text Button
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="outlined">
              Outlined Button
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="contained">
              Contained Button
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export const OverrideColor = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid direction="row" container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" color="primary" variant="outlined" overrideColor={customTheme.palette.primary.main}>
              Primary Main Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="primary" variant="outlined" overrideColor={customTheme.palette.primary.light}>
              Primary Light Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="primary" variant="outlined" overrideColor={customTheme.palette.primary.dark}>
              Primary Dark Color
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" color="primary" variant="contained" overrideColor={customTheme.palette.primary.main}>
              Primary Main Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="primary" variant="contained" overrideColor={customTheme.palette.primary.light}>
              Primary Light Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="primary" variant="contained" overrideColor={customTheme.palette.primary.dark}>
              Primary Dark Color
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" color="secondary" variant="outlined" overrideColor={customTheme.palette.secondary.main}>
              Secondary Main Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="outlined" overrideColor={customTheme.palette.secondary.light}>
              Secondary Light Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="outlined" overrideColor={customTheme.palette.secondary.dark}>
              Secondary Dark Color
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" color="secondary" variant="contained" overrideColor={customTheme.palette.secondary.main}>
              Secondary Main Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="contained" overrideColor={customTheme.palette.secondary.light}>
              Secondary Light Color
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="contained" overrideColor={customTheme.palette.secondary.dark}>
              Secondary Dark Color
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" variant="text" overrideColor={"#99627A"}>
              Overriden Hex - #99627A
            </Button>
          </Grid>

          <Grid item>
            <Button size="xs" variant="outlined" overrideColor={"#D25380"}>
              Overriden Hex - #D25380
            </Button>
          </Grid>

          <Grid item>
            <Button size="xs" variant="contained" overrideColor={"#C4DFDF"}>
              Overriden Hex - #C4DFDF
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
export const LoadingButton = () => {
  const [load, setLoading] = useState(true);
  const scheduler = Math.random() * (5 - 4) + 4 * 1000;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, scheduler);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <ThemeProvider theme={customTheme}>
      <Grid direction="row" container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item>
            <Button loading={load} size="xs" color="primary">
              Build
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="primary" variant="text">
              Create Bug
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="primary" variant="outlined">
              Book Tickets
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="primary" variant="contained">
              Scan and Pay
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button loading={load} size="xs" color="secondary">
              Build
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="secondary" variant="text">
              Create Bug
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="secondary" variant="outlined">
              Book Tickets
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="secondary" variant="contained">
              Scan and Pay
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item>
            <Button loading={load} size="xs" color="primary" startIcon={<Icon icon="IonIcon.IoIosBuild" />}>
              Build
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="primary" variant="text" startIcon={<Icon icon="IonIcon.IoIosBug" />}>
              Create Bug
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="secondary" variant="outlined" startIcon={<Icon icon="IonIcon.IoIosAirplane" />}>
              Book Tickets
            </Button>
          </Grid>
          <Grid item>
            <Button loading={load} size="xs" color="secondary" variant="contained" startIcon={<Icon icon="IonIcon.IoIosFingerPrint" />}>
              Scan and Pay
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export const IconButtons = () => {
  const [load, setLoading] = useState(true);
  const scheduler = Math.random() * (5 - 4) + 4 * 1000;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, scheduler);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <ThemeProvider theme={customTheme}>
      <Grid direction="row" container spacing={2}>
        <Grid item container spacing={2}>
          <Grid item>
            <Button size="xs" color="primary" startIcon={<Icon icon="IonIcon.IoIosGlasses" />}>
              Buy
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="primary" variant="text" startIcon={<Icon icon="IonIcon.IoIosGitNetwork" />}>
              Connect
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="outlined" startIcon={<Icon icon="IonIcon.IoIosChatbubbles" />}>
              Chat
            </Button>
          </Grid>
          <Grid item>
            <Button size="xs" color="secondary" variant="contained" startIcon={<Icon icon="IonIcon.IoIosCloud" />}>
              Download
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
