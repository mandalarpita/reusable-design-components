import React, { useState } from "react";
import { useTheme } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
import Avatar from "../DataDisplay/Avatar";
import Tabs from "../Navigation/Tabs";
import Tab from "../Navigation/Tab";
export const states = ["state 1", "state 2"];
export const countries = ["country 1", "country 2"];

export default function TestTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs onChange={handleChange} value={value}>
        <Tab label="Item One" endIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} />
        <Tab label="Item Two" startIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} />
        <Tab label="Item Three" startIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} endIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} />
        <Tab label="Item Four" startIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} endIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} />
        <Tab label="Item Five" startIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} endIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} />
        <Tab label="Item Six" startIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} endIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} />
        <Tab label="Item Seven" startIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} endIcon={<Avatar name="Remy Sharp" sx={{ width: 20, height: 20, fontSize: `12px` }} src="/static/images/avatar/1.jpg" />} />4
      </Tabs>
    </>
  );
}
