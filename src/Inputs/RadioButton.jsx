import * as React from "react";
import Radio from "@mui/material/Radio";
import { getClassBySize, getColorsProps, groupedComponentTextSize } from "../customClasses";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const RadioButton = (props) => {
  let { control, rules, className, root, color, placement = "right", overrideColor, onChange, name, label, value, errors = {}, elementid = "cw-design-system-radiobutton", size = "md", isValidate = name ? true : false, ...other } = props;
  // if (root) {
  //   let roots = root.split(".");
  //   errors = errors?.[roots[0]]?.[roots[1]]?.[name];
  //   name = `${root}.${name}`;
  // }
  // let err = false;
  // if (name in errors && "message" in errors[name]) {
  //   err = true;
  // }

  if (root) {
    let roots = root.split(".");
    errors = errors?.[roots[0]]?.[roots[1]]?.[name];
    name = `${root}.${name}`;
  } else {
    errors = errors?.[name];
  }
  const colorProps = getColorsProps(color, overrideColor);
  const options = groupedComponentTextSize(size, placement);

  const classes = getClassBySize(size, "customRadio", color, overrideColor);
  const handleChange = (e) => {
    if (onChange && typeof onChange === "function") {
      onChange(e.target.checked);
    }
  };
  return (
    <>
      {isValidate ? (
        <>
          <Grid container direction={options.direction} justifyContent="start" alignItems="center" alignContent={"flex-start"} width={"fit-content"}>
            <Grid item>
              <Radio elementid={elementid} {...colorProps} checked={value} disableTouchRipple onChange={handleChange} className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} {...other} />
            </Grid>
            {label && (
              <Grid item>
                <Typography variant={options.variant}>{label}</Typography>
              </Grid>
            )}
          </Grid>
          {errors && errors[name].message}
        </>
      ) : (
        <Grid container direction={options.direction} justifyContent="start" alignItems="center" alignContent={"flex-start"} width={"fit-content"}>
          <Grid item>
            <Radio elementid={elementid} {...colorProps} checked={value} disableTouchRipple onChange={handleChange} className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} {...other} />
          </Grid>
          {label && (
            <Grid item>
              <Typography variant={options.variant}>{label}</Typography>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
};
export default RadioButton;
