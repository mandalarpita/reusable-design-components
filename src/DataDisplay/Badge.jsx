import React from "react";
import Badge from "@mui/material/Badge";
import { getClassBySize, getColorsProps } from "../customClasses";
import { getContrastTextColor } from "../Utility/colorUtility";

// default export of custom avater component takes src and name
export default function CustomBadge(props) {
  let { size = "md", name, color, sx, overrideColor, children, elementid = "cw-design-system-badge", className, ...others } = props;

  const classes = getClassBySize(size, "", color, overrideColor);
  let colorProps = getColorsProps(color, overrideColor);
  if (overrideColor) {
    const badgeStyle = {
      "& .MuiBadge-badge": {
        color: getContrastTextColor(overrideColor),
        backgroundColor: overrideColor,
      },
    };
    colorProps = {
      sx: badgeStyle,
      ...colorProps,
      ...sx,
    };
  } else {
    colorProps = {
      ...colorProps,
      ...sx,
    };
  }

  return (
    <Badge disableTouchRipple {...colorProps} className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} elementid={elementid} {...others}>
      {children}
    </Badge>
  );
}
