import TextField from "@mui/material/TextField";
import React from "react";
import { getClassBySize, getColorsProps, useCustomStyles } from "../customClasses";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";
import Grid from "@mui/material/Grid";

const Input = (props) => {
  let { control, name, rules = {}, root, errors = {}, isValidate = name ? true : false, ...other } = props;

  if (root) {
    let roots = root.split(".");
    errors = errors?.[roots[0]]?.[roots[1]]?.[name];
    name = `${root}.${name}`;
  } else {
    errors = errors?.[name];
  }
  let lengthProps = {};
  if (!isValidate || (isValidate && props?.showCount)) {
    if (typeof rules?.maxLength === "number") {
      lengthProps = {
        maxLength: {
          value: rules?.maxLength,
          message: "",
        },
        isValidate,
      };
    } else {
      lengthProps = {
        maxLength: {
          value: rules?.maxLength?.value,
          message: isValidate ? rules?.maxLength?.message || "" : "",
        },
        isValidate,
      };
    }
  }
  return (
    <>
      {isValidate ? (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { ref, onChange, ...field } }) => (
            <>
              <InputWrapper name={name} errors={errors} onChange={onChange} {...field} {...other} {...lengthProps} />
            </>
          )}
        />
      ) : (
        <InputWrapper {...other} {...lengthProps} />
      )}
    </>
  );
};

const InputWrapper = (props) => {
  let { onChange, isValidate, handleChange, color, elementid = "cw-design-system-input", showCount, maxLength = { value: 0, message: "" }, handleBlur, name, value = "", errors = {}, size = "md", fields, className, ...other } = props;
  if (typeof maxLength === "number") {
    maxLength = {
      value: maxLength,
      message: "",
    };
  }
  let colorProps = getColorsProps(color);
  const classes = getClassBySize(size, "Input", color);

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="stretch">
        <Grid item>
          <TextField
            elementid={elementid}
            error={errors?.["message"]}
            fullWidth
            {...colorProps}
            value={value}
            hiddenLabel
            variant="outlined"
            className={className ? `${classes.classes} ${className} ` : `${classes.classes}`}
            onChange={(e) => {
              if (!maxLength?.value || (maxLength?.value && e.target.value.length <= maxLength?.value)) {
                if (onChange) {
                  onChange(e.target.value.trimStart());
                }
                if (handleChange) {
                  handleChange(e.target.value.trimStart());
                }
              }
            }}
            onBlur={(e) => {
              if (!maxLength?.value || (maxLength?.value && e.target.value.length <= maxLength?.value)) {
                if (onChange) {
                  onChange(e.target.value.trimStart());
                }
                if (handleBlur) {
                  handleBlur(e.target.value.trimStart());
                }
              }
            }}
            {...fields}
            {...other}
          />
        </Grid>

        <Grid item container justifyContent={"space-between"}>
          <Grid item>
            <Typography className={classes.errorstyle}>{showCount && value?.length === maxLength?.value ? maxLength.message || "" : errors?.["message"]}</Typography>
          </Grid>

          {showCount && (
            <Grid item sx={{ alignSelf: "end" }}>
              <Typography>
                {value?.length || 0}
                {maxLength.value !== undefined && `/${maxLength?.value}`}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default Input;
