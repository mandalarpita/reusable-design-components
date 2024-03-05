import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { getClassBySize, useCustomStyles } from "../customClasses";
import { Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";
const SelectWrapper = (props) => {
  let {
    control,
    rules,
    name = "",
    // options,
    errors = {},
    root,
    isValidate = name ? true : false,
    ...other
  } = props;
  if (root) {
    let roots = root.split(".");
    errors = errors?.[roots[0]]?.[roots[1]]?.[name];
    name = `${root}.${name}`;
  } else {
    errors = errors?.[name];
  }
  return (
    <>
      {isValidate ? (
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { ref, onChange, ...fields } }) => (
            <>
              <Select
                name={name}
                // options={options}
                errors={errors}
                onChange={onChange}
                {...fields}
                {...other}
              />
            </>
          )}
        />
      ) : (
        <Select {...other} />
      )}
    </>
  );
};
const Select = (props) => {
  const { handleChange, onChange, className, name = "", elementid = "cw-design-system-singleselect", value = null, optionLabel, optionKey, size = "small", options = [], errors = {}, ...fields } = props;

  const classes = getClassBySize(size, "customAutoComplete");

  return (
    <>
      <Autocomplete
        name={name}
        elementid={elementid}
        multiple={false}
        autoComplete
        forcePopupIcon={true}
        fullWidth
        className={className ? `${classes.classes} ${className} ` : `${classes.classes}`}
        options={options}
        getOptionLabel={(option) => {
          return optionKey && optionLabel ? option?.[optionLabel] : option;
        }}
        filterOptions={props?.filterOptions}
        onChange={(e, v) => {
          let oSelected = v;
          if (optionKey && v) {
            v = v[optionKey];
          }
          if (onChange) {
            onChange(v);
          }
          if (handleChange) {
            handleChange(v, oSelected);
          }
        }}
        value={
          optionKey
            ? options.find((option) => {
                return value === option?.[optionKey];
              }) ?? null
            : value
        }
        renderInput={(params) => (
          <TextField
            {...params}
            error={errors?.["message"]}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
            }}
            placeholder={fields?.placeholder}
          />
        )}
        {...fields}
      />
      <Typography className={classes.errorstyle}>{errors?.["message"]}</Typography>
    </>
  );
};
export default SelectWrapper;
