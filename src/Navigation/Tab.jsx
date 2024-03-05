import React from "react";
import { Tab as MUITab } from "@mui/material";
import { useCustomStyles } from "../customClasses";

export default function Tab(props) {
  let { elementid = "cw-design-system-tab", className, labelStyle, label, startIcon = <></>, endIcon = <></>, ...others } = props;
  const customClasses = useCustomStyles();

  return (
    <MUITab
      className={className ? `${className} ${customClasses.customTab}` : customClasses.customTab}
      label={
        <>
          {startIcon}
          <span className={labelStyle ? `${labelStyle} ${customClasses.customTabsLabel}` : customClasses.customTabsLabel}>{label}</span>
          {endIcon}
        </>
      }
      {...others}
    />
  );
}
