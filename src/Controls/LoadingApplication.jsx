import React from "react";
import CherryworkLogo from "../Assets/CherryworkLogo.svg";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// @params
// message - TEXT
// variant - options ( null/determinate)
// value - % needed for the progress
// function  - for logout of the user
// Button text - Example "refresh" or "logout"
// status - "loading, failure, success"

function LinearDeterminate({ value }) {
  const [progress, setProgress] = React.useState(value[0]);
  let initial = value[0];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const increment = Math.floor(Math.random() * (value[1] - initial) + initial);
        initial = oldProgress + increment;
        return Math.min(initial, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <LinearProgress
      sx={{
        // margin: "10px 0px 10px 0px",
        width: "16%",
        height: "5px",
        borderRadius: "6px",
      }}
      variant="determinate"
      value={progress}
    />
  );
}

const LoadingApplication = ({ message, status, variant, progressValue, onClick, btnText }) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" className="cwitmSetHeight100">
      <img src={CherryworkLogo} alt="Logo" height="60px" style={{ marginBottom: "10px" }}></img>
      {status === "loading" && variant === "determinate" && (
        <LinearProgress
          sx={{
            // margin: "10px 0px 10px 0px",
            width: "16%",
            height: "5px",
            borderRadius: "6px",
          }}
        />
        // <LinearDeterminate value={progressValue || [0, 100]} />
      )}
      {status === "loading" && !variant && (
        <LinearProgress
          sx={{
            // margin: "10px 0px 10px 0px",
            width: "16%",
            height: "5px",
            borderRadius: "6px",
          }}
        />
      )}
      <Typography sx={{ fontSize: "16px !important", marginTop: "10px" }} color="text.primary" gutterBottom>
        {message}
      </Typography>
      {status === "failure" || status === "success" ? (
        <>
          <Button variant="contained" size="small" onClick={onClick}>
            {btnText}
          </Button>
        </>
      ) : (
        <></>
      )}
    </Grid>
  );
};
export default LoadingApplication;
