import { useEffect, useState } from "react";
// import { DateRangePicker } from "@mantine/dates";
// import DateRangePicker from "rsuite/DateRangePicker";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import "./styles.css";
import { createStyles } from "@mui/styles";
import * as React from "react";
import { getClassBySize, useCustomStyles } from "../../../itm_ui/src/ITM/Controls/customClasses";
import { Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";

export const DateTimeRangePicker = (props) => {
  let { control, rules, name = "", errors = {}, root, ...other } = props;
  if (root) {
    let roots = root.split(".");
    errors = errors?.[roots[0]]?.[roots[1]]?.[name];
    name = `${root}.${name}`;
  } else {
    errors = errors?.[name];
  }
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { ref, onChange, ...fields } }) => (
          <>
            <DateTimePicker name={name} errors={errors} onChange={onChange} {...fields} {...other} />
          </>
        )}
      />
    </>
  );
};
export const DateTimePicker = (props) => {
  let { handleChange, onChange, name = "", amountOfMonths = 2, value, size = "sm", placeholder = "", errors = {}, ...fields } = props;

  value = value ? [value[0] instanceof Date ? value[0] : new Date(value[0]), value[1] instanceof Date ? value[1] : new Date(value[0])] : null;

  switch (size) {
    case "small": {
      size = "sm";
      break;
    }
    case "medium": {
      size = "md";
      break;
    }
    case "large": {
      size = "lg";
      break;
    }
    default: {
      size = "sm";
    }
  }
  const classes = getClassBySize(size, "cwSmallDRP");

  return (
    <>
      <DateRangePicker
        className={"cwSmallDRP"}
        name={name}
        size={size}
        value={value}
        onChange={(v) => {
          onChange(v);
          if (handleChange) {
            handleChange(v);
          }
        }}
        // disabledDate={disabledDate}
        // {...fields}
      />

      <Typography className={classes.errorstyle}>{errors?.["message"]}</Typography>
    </>
  );
};
