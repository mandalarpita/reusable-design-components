import React from "react";
import { Avatar as MUIAvatar } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { getClassBySize, useCustomStyles } from "../customClasses";
import { getAvatarColors, getContrastTextColor } from "../Utility/colorUtility";
import { useTheme } from "@mui/system";
import { customTheme } from "../theme";

// default export of custom avater component takes src and name
export default function Avatar(props) {
  let { size = "md", name, alt = "", children, elementid = "cw-design-system-avatar", overrideColor, className, generateBackground = false, ...others } = props;
  let classes = "";
  if (!name) {
    name = alt;
  }
  const theme = useTheme();
  if (props.color === "secondary" && !overrideColor) {
    overrideColor = theme?.palette?.secondary?.main || customTheme?.palette?.secondary?.main;
  }
  if (overrideColor || generateBackground) {
    classes = getClassBySize(size, "");
    let customColorsClasses;
    if (overrideColor) {
      customColorsClasses = customColors({
        backgroundColor: overrideColor,
        color: getContrastTextColor(overrideColor),
      });
    } else if (generateBackground) {
      const randomColors = getAvatarColors(stringAvatar(name));
      customColorsClasses = customColors({
        backgroundColor: randomColors.backgroundColor,
        color: "white",
      });
    }
    classes.classes = ` ${classes.classes}  ${customColorsClasses.runtimeColors} `;
  } else {
    classes = getClassBySize(size, "customAvatar");
  }

  return (
    <MUIAvatar elementid={elementid} disableTouchRipple className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} {...others}>
      {stringAvatar(name)}
    </MUIAvatar>
  );
}
function generateBackground(overrideColor, generateBackground) {}
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
export const customColors = makeStyles(() => {
  return {
    runtimeColors: {
      "&.MuiAvatar-root": {
        color: ({ color }) => color,
        backgroundColor: ({ backgroundColor }) => backgroundColor,
      },
    },
  };
});
function stringAvatar(name) {
  name = name.toUpperCase() || "";
  var splittedName = [""];
  if (name) {
    splittedName = name.trim().split(",")[0].split(" ");
  }
  return splittedName.length > 1 ? `${splittedName[0][0]}${splittedName[splittedName.length - 1][0]}` : splittedName[0].length > 0 ? `${splittedName[0][0]}` : "";
}

// generateBackground - generate from a palette
// override colors  - take the color
// default - if dark
