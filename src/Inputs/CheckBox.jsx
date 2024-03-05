import React from "react";
import { Checkbox as MUICheckbox } from "@mui/material";
import { getClassBySize, getColorsProps, groupedComponentTextSize, useCustomStyles } from "../customClasses";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CheckBox = (props) => {
  let { onChange, rules, root, name, color, placement = "right", overrideColor, value, label, errors = {}, elementid = "cw-design-system-checkbox", size = "md", isValidate = name ? true : false, className, ...other } = props;
  // if (root) {
  //   let roots = root.split(".");
  //   errors = errors?.[roots[0]]?.[roots[1]]?.[name];
  //   name = `${root}.${name}`;
  // }
  // let err = false;
  // if (name && errors[name] && "message" in errors?.[name]) {
  //   err = true;
  // }

  if (root) {
    let roots = root.split(".");
    errors = errors?.[roots[0]]?.[roots[1]]?.[name];
    name = `${root}.${name}`;
  } else {
    errors = errors?.[name];
  }

  const options = groupedComponentTextSize(size, placement);

  const colorProps = getColorsProps(color, overrideColor);

  const classes = getClassBySize(size, "customCheckbox", color, overrideColor);
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
              <MUICheckbox {...colorProps} elementid={elementid} disableTouchRipple checked={value} className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} onChange={handleChange} {...other} />
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
            <MUICheckbox {...colorProps} elementid={elementid} disableTouchRipple checked={value} className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} onChange={handleChange} {...other} />
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

export default CheckBox;
