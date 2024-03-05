import React from "react";
import PropTypes from "prop-types";
import { useCustomStyles } from "../customClasses";

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const customClasses = useCustomStyles();

  return (
    <div className={`${props?.className} ${customClasses?.customTabPanel}`} role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
