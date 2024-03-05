import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

import { makeStyles } from "@mui/styles";

import React, { useEffect, useState } from "react";
import { customTheme } from "../theme";

/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
const useCustomStyles = makeStyles((theme) => {
  if (Object.keys(theme).length === 0) {
    theme = customTheme;
  }
  return {
    listHeader: {
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(2),
      height: 62,
      borderRadius: 4,
      marginBottom: theme.spacing(1),
      overflow: "hidden",
    },

    listItem: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
      height: 62,
      borderRadius: 4,
      width: "100%",
      border: `1px solid ${theme.palette.primary.light}`,
      boxShadow: "0px 0px 16px rgb(207 207 207 / 25%), 0px 0px 2px #e0e0e0",
    },
  };
});
export const TableHeader = (props) => {
  const classes = useCustomStyles();
  return (
    <>
      <Stack spacing={1}>
        <Stack
          justifyContent={props?.justifyContent ? props?.justifyContent : "space-between"}
          style={props?.style ? props?.style : {}}
          sx={props.sx ? props.sx : {}}
          className={
            // cwitmScroll
            props.className ? `${props.className} ${classes.listHeader}` : `${classes.listHeader}`
          }
          direction="row"
          alignItems="center"
        >
          {props.children}
        </Stack>
      </Stack>
    </>
  );
};

export const TableRows = (props) => {
  const classes = useCustomStyles();
  return (
    <Stack
      direction="row"
      justifyContent={props?.justifyContent ? props?.justifyContent : "space-between"}
      className={`${classes.listItem} ${props.className}`}
      style={props.style}
      sx={props.sx}
      alignItems="center"
      onClick={() => {
        if (props.onClick) {
          props.onClick(props?.row);
        }
      }}
    >
      {props?.children}
    </Stack>
  );
};
export const TableRowContainer = (props) => {
  const classes = useCustomStyles();
  return (
    <>
      <Stack spacing={1} justifyContent="start" alignItems="center" className={props.className ? `cwitmScroll cwitmSetWidth100 ${props.className}` : "cwitmScroll cwitmSetWidth100"} style={props?.style} sx={props?.sx}>
        {props?.enableLoading ? (
          <>
            {Array.from(new Array(props?.skeletonLength || 10))?.map((index) => (
              <div key={index} className={"cwitmSetWidth100"}>
                <Skeleton
                  className={classes.listItem}
                  // width={"100%"}
                  // height={110}
                  component={"div"}
                  variant={"rectangular"}
                />
              </div>
            ))}
          </>
        ) : (
          <>{props.children}</>
        )}
      </Stack>
    </>
  );
};
