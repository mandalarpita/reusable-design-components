import * as React from "react";
import { AvatarGroup as MUIAavatarGroup } from "@mui/material";
import { getClassBySize } from "../customClasses";

const AvatarGroup = (props) => {
  let { size = "md", variant = "circle", children = <></>, elementid = "cw-design-system-button", className, ...others } = props;

  const classes = getClassBySize(size, "customAvatar");

  if (children && Array.isArray(children) && children.length > 0)
    children = children.map((child) => {
      return { ...child, props: { ...child.props, size: size, variant: variant } };
    });

  return (
    <MUIAavatarGroup elementid={elementid} disableTouchRipple className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} variant={variant} {...others}>
      {children}
    </MUIAavatarGroup>
  );
};

export default AvatarGroup;
