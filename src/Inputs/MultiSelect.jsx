import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { getClassBySize, useCustomStyles } from "../customClasses";
import { Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

const MultiSelectWrapper = (props) => {
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
              <MultiSelect
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
        <>
          <MultiSelect {...other} />
        </>
      )}
    </>
  );
};

const MultiSelect = (props) => {
  const { handleChange, onChange, name = "", placeholder = "", elementid = "cw-design-system-multiselect", className, value = null, optionLabel, optionKey, size = "small", options = [], errors = {}, ...fields } = props;

  const classes = getClassBySize(size, "customAutoComplete");

  return (
    <>
      <Autocomplete
        elementid={elementid}
        name={name}
        multiple
        options={options}
        autoComplete
        disableCloseOnSelect
        forcePopupIcon={true}
        fullWidth
        onChange={(e, v) => {
          let aSelected = v;
          if (optionKey) {
            aSelected = aSelected.map(function (obj) {
              return obj[optionKey];
            });
          }
          onChange(aSelected);
          if (handleChange) {
            handleChange(aSelected, v);
          }
        }}
        getOptionLabel={(option) => {
          return optionKey && optionLabel ? option?.[optionLabel] : option;
        }}
        filterOptions={props?.filterOptions}
        value={
          optionKey
            ? options.filter(function (option) {
                return value.includes(option[optionKey]);
              }) ?? []
            : value
        }
        className={className ? `${classes.classes} ${className} ` : `${classes.classes}`}
        openOnFocus
        clearOnBlur
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            className="customAutoCompleteMultiple"
            {...params}
            error={errors?.["message"]}
            variant="outlined"
            size="small"
            InputProps={{
              placeholder: placeholder,
              ...params.InputProps,
            }}
          />
        )}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => <Chip {...getTagProps({ index })} sx={{ margin: "0 0.25rem" }} size="small" label={optionLabel ? option[optionLabel] : option} />);
        }}
        {...fields}
      />
      <Typography className={classes.errorstyle}>{errors?.["message"]}</Typography>
    </>
  );
};
export default MultiSelectWrapper;
