import React from "react";
import { Tabs as MUITabs } from "@mui/material";
import { useCustomStyles } from "../customClasses";

export default function Tabs(props) {
  let { elementid = "cw-design-system-tabs", className, ...others } = props;
  const customClasses = useCustomStyles();

  return <MUITabs elementid className={className ? `${className} ${customClasses.customTabs}` : customClasses.customTabs} variant="scrollable" scrollButtons allowScrollButtonsMobile aria-label="scrollable" {...others} />;
}
