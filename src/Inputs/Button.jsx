import * as React from "react";
import { Button as MUIButton } from "@mui/material";
import { getClassBySize, getColorsProps } from "../customClasses";
import Icon from "../DataDisplay/Icon";
import { makeStyles } from "@mui/styles";
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
const spinStyles = makeStyles(() => ({
  spinningIcon: {
    animation: "$spin 1s infinite linear",
  },
  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));
const Button = (props) => {
  let { size = "md", startIcon = <></>, disabled = false, variant = "default", children, elementid = "cw-design-system-button", loading = false, className, color, overrideColor, ...others } = props;
  let classes = getClassBySize(size, "customButton", color, overrideColor);
  const colorProps = getColorsProps(color, overrideColor);
  const spinClasses = spinStyles();
  if (loading) {
    startIcon = <Icon icon="AntIcon.AiOutlineLoading3Quarters" className={spinClasses.spinningIcon} />;
    disabled = true;
  }
  return (
    <MUIButton elementid={elementid} disabled={disabled} startIcon={startIcon} disableTouchRipple variant={variant} {...colorProps} className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} {...others}>
      {children}
    </MUIButton>
  );
};

export default Button;
