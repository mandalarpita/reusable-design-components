import React from "react";
// rds components

// material imports
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Tooltip from "../Feedback/Tooltip";
import Input from "../Inputs/Input";

const useStyles = makeStyles((theme) => {
  return {
    tooltipClass: {
      display: "block",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  };
});

export default function TestTooltips() {
  return (
    <>
      <Grid container spacing={2} direction="column" width={"100%"}>
        <Grid item width={"100%"}>
          <BasicUsageExample />
        </Grid>
        <Grid item width={"100%"}>
          <DelayedUsageExample />
        </Grid>

        <Grid item width={"100%"}>
          <TrimTooltipExample />
        </Grid>
      </Grid>
    </>
  );
}

const BasicUsageExample = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Tooltip title={"The quick brown fox jumps over the lazy dog."}>
        <Typography variant="body">The quick brown fox jumps over the lazy dog.</Typography>
      </Tooltip>
    </Stack>
  );
};

const DelayedUsageExample = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Tooltip title={"The quick brown fox jumps over the lazy dog."} enterDelay={2000}>
        <Typography variant="body">The quick brown fox jumps over the lazy dog.</Typography>
      </Tooltip>
    </Stack>
  );
};

const TrimTooltipExample = () => {
  const classes = useStyles();
  const [state, setState] = React.useState("The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.");
  return (
    <Stack direction="row" justifyContent={"center"}>
      <Stack width={"70%"} direction="column" justifyContent={"center"} spacing={2}>
        <Paper sx={{ backgroundColor: "#F9F5E7", padding: "1rem" }} variant="outlined">
          <Typography variant={"h6"} sx={{ marginBottom: "1rem" }}>
            Please fill the input box to manipulate length of content.
          </Typography>
          <Input
            value={state}
            onChange={(e) => {
              setState(e);
            }}
          />
        </Paper>
        <Stack direction="row" justifyContent={"start"} spacing={2}>
          <Stack width={"50%"}>
            <Paper sx={{ backgroundColor: "#E3F4F4", padding: "1rem" }} variant="outlined">
              <Typography variant={"h6"} sx={{ marginBottom: "0.5rem" }}>
                Constant Tooltip
              </Typography>
              <Tooltip title={state}>
                <Typography variant="body" className={classes.tooltipClass}>
                  {state}
                </Typography>
              </Tooltip>
            </Paper>
          </Stack>
          <Stack width={"50%"}>
            <Paper sx={{ backgroundColor: "#F8E8EE", padding: "1rem" }} variant="outlined">
              <Typography variant={"h6"} sx={{ marginBottom: "0.5rem" }}>
                Conditional Tooltip
              </Typography>
              <Tooltip title={state} useTrimTextTooltip={true} innerContentText={state} innerContentTextClass={classes.tooltipClass}></Tooltip>
            </Paper>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
