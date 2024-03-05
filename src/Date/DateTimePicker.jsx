import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import { getClassBySize, useCustomStyles } from "../../../itm_ui/src/ITM/Controls/customClasses";
import { Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { getColorsProps } from "../customClasses";
const adapter = new AdapterDayjs();
export const DateTimePicker = (props) => {
  const { control, name = "", rules, errors, ...other } = props;
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{ required: "Required" }}
        render={({ field: { ref, onChange, ...field } }) => (
          <>
            <AddDatePicker errors={errors} name={name} onChange={onChange} {...other} {...field} />
          </>
        )}
      />
    </>
  );
};

const AddDatePicker = (props) => {
  let { handleChange, onChange, name = "", color, size = "small", errors = {}, value = null, minDate = null, maxDate = null, ...fields } = props;
  let err = false;
  if (name in errors && "message" in errors[name]) {
    err = true;
  }
  if (minDate) {
    minDate = new Date(adapter.date(new Date(minDate)));
  }
  if (maxDate) {
    maxDate = new Date(adapter.date(new Date(maxDate)));
  }
  const classes = getClassBySize(size, "customAutoComplete", color);
  const colorProps = getColorsProps(color);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          name={name}
          {...colorProps}
          className={`${props?.className} ${classes.classes}`}
          minDate={minDate}
          maxDate={maxDate}
          inputFormat="DD/MM/YYYY"
          value={value ? new Date(adapter.date(new Date(value))) : null}
          onChange={(newValue) => {
            onChange(newValue);
            if (handleChange) {
              handleChange(newValue);
            }
          }}
          renderInput={(params) => <TextField name={name} className={`${props?.className} ${classes.classes}`} {...params} />}
          size={size}
          {...fields}
        />
      </LocalizationProvider>
      <Typography className={classes.errorstyle}>{err && errors[name].message}</Typography>
    </>
  );
};
