import * as React from "react";
import { Switch as MUISwitch } from "@mui/material";
import { Controller } from "react-hook-form";
import { getClassBySize, getColorsProps, groupedComponentTextSize } from "../customClasses";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Switch = (props) => {
  let { control, rules, root, color, overrideColor, placement = "right", disabled = false, onChange, className, sx, name, value, label, errors = {}, elementid = "cw-design-system-switch", size = "md", isValidate = name ? true : false, ...other } = props;
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
  let colorProps = getColorsProps(color, overrideColor);
  if (disabled) {
    if (sx) {
      colorProps = { ...colorProps, sx: { ...sx, opacity: 0.4 }, disabled };
    } else {
      colorProps = { ...colorProps, sx: { opacity: 0.4 }, disabled };
    }
  }
  const options = groupedComponentTextSize(size, placement);
  const classes = getClassBySize(size, "customSwitch", color, overrideColor);
  const handleChange = (e) => {
    if (onChange && typeof onChange === "function") {
      onChange(e.target.checked);
    }
  };
  return (
    <>
      {isValidate ? (
        <>
          <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { ref, onChange, ...fields } }) => (
              <>
                <Grid container direction={options.direction} justifyContent="start" alignItems="center" alignContent={"flex-start"} width={"fit-content"}>
                  <Grid item>
                    <MUISwitch {...colorProps} elementid={elementid} disableTouchRipple className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} onChange={handleChange} {...fields} {...other} />
                  </Grid>
                  {label && (
                    <Grid item>
                      <Typography variant={options.variant}>{label}</Typography>
                    </Grid>
                  )}
                </Grid>
                {errors && errors[name].message}
              </>
            )}
          />
        </>
      ) : (
        <Grid container direction={options.direction} justifyContent="start" alignItems="center" alignContent={"flex-start"} width={"fit-content"}>
          <Grid item>
            <MUISwitch {...colorProps} checked={true} disabled elementid={elementid} disableTouchRipple className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} {...other} />
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

export default Switch;
