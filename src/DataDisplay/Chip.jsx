import React from "react";
import Chip from "@mui/material/Chip";
import { getClassBySize, getColorsProps, useCustomStyles } from "../customClasses";
import { alpha } from "@mui/material/styles";
import { getContrastTextColor, getLighterBackground } from "../Utility/colorUtility";
import Icon from "./Icon";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/system";
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
export const getDimension = makeStyles(() => {
  return {
    customDimension: {
      "&.MuiChip-root .MuiChip-avatar": {
        height: ({ size }) => (size === "xs" ? "18px" : "20px"),
        width: ({ size }) => (size === "xs" ? "18px" : "20px"),
        fontSize: ({ size }) => (size === "xs" ? "0.5rem" : "0.6rem"),
      },
    },
    filledAvatar: {
      "&.MuiChip-root .MuiChip-avatar": {
        color: ({ color }) => color,
        backgroundColor: ({ backgroundColor }) => backgroundColor,
      },
    },
    outlinedAvatar: {
      "&.MuiChip-root .MuiChip-avatar": {
        borderColor: ({ color }) => color,
        color: ({ color }) => color,
        backgroundColor: "white",
      },
    },
  };
});

// default export of custom avater component takes src and name
export default function CustomChip(props) {
  let { size = "md", name, children, borderRadius = "10rem", avatar, icon, color, deleteIcon, elementid = "cw-design-system-chip", backgroundColor, textColor, borderColor, className, ...others } = props;
  const classes = getClassBySize(size, "customChip", color);
  const colorProps = getColorsProps(color);
  const theme = useTheme();
  function getIconColor() {
    let returnObj;
    if (props?.variant === "outlined") {
      returnObj = { backgroundColor: backgroundColor ? backgroundColor : theme.palette[color]["main"] };
    } else {
      returnObj = { backgroundColor: backgroundColor ? getContrastTextColor(backgroundColor) : getContrastTextColor(theme.palette[color]["main"]) };
    }
    return returnObj;
  }
  function getAvatarColor() {
    let returnObj;
    if (props?.variant === "outlined") {
      returnObj = { color: backgroundColor ? getContrastTextColor(backgroundColor) : getContrastTextColor(theme.palette[color]["main"]), backgroundColor: backgroundColor || theme.palette[color]["main"] };
    } else {
      returnObj = { backgroundColor: backgroundColor ? getContrastTextColor(backgroundColor) : getContrastTextColor(theme.palette[color]["main"]), color: backgroundColor || theme.palette[color]["main"] };
    }
    return returnObj;
  }
  if (props?.onDelete && !deleteIcon) {
    deleteIcon = <Icon icon="IonIcon.IoIosCloseCircle" />;
  }
  if (deleteIcon && !deleteIcon.props.size) {
    deleteIcon = { ...deleteIcon, props: { ...deleteIcon.props, size: size === "xs" ? "xs" : size == "sm" ? "sm" : "md" } };
  }
  if (icon && !icon.props.size) {
    icon = { ...icon, props: { ...icon.props, size: "xs" } };
  }
  if (icon && !icon.props.color && !icon.props.overrideColor) {
    const getCoo = getIconColor();
    icon = { ...icon, props: { ...icon.props, backgroundColor: getCoo.backgroundColor } };
  }
  if (avatar && !avatar.props.size) {
    if (!avatar.props.size && size !== "xs" && size !== "sm") {
      avatar = { ...avatar, props: { ...avatar.props, size: "md" } };
    } else if (!avatar.props.size && (size === "sm" || size === "xs")) {
      const sizeSmall = getDimension({ size: size });

      className = `${className} ${sizeSmall.customDimension}`;
    }
    // Add logic for color of avatar
    if (avatar.props) {
      let colors = getAvatarColor();
      const getColor = getDimension(colors);
      className = `${className} ${getColor.filledAvatar}`;
    }
  }
  return (
    <Chip disableTouchRipple {...colorProps} deleteIcon={deleteIcon} icon={icon} avatar={avatar} className={className ? `${classes.classes} ${className} ` : `${classes.classes}`} sx={props?.color ? { ...others?.sx, borderRadius: borderRadius } : { ...others?.sx, borderRadius: borderRadius, ...getStyles(props?.variant, backgroundColor, borderColor, textColor) }} elementid={elementid} {...others} />
  );
}

function getStyles(variant, backgroundColor, borderColor, textColor) {
  let styles = { color: textColor };
  if (!variant || variant === "filled") {
    const customStyle = {
      backgroundColor: backgroundColor ? backgroundColor : alpha(textColor, 0.05),
      "&.MuiChip-root:hover": {
        backgroundColor: backgroundColor ? backgroundColor : alpha(textColor, 0.05),
      },
      "&.MuiChip-root .MuiChip-deleteIcon": {
        color: "rgba(255, 255, 255, 0.7)",
      },
      "&.MuiChip-root .MuiChip-deleteIcon:hover": {
        color: "rgba(255, 255, 255, 0.9)",
      },
    };

    styles = { ...customStyle, ...styles }; //check opacity if background color is not there
    if (borderColor) {
      styles = { ...styles, borderColor, border: "1px solid" };
    }
  } else {
    const customStyle = {
      borderColor: borderColor ? borderColor : textColor,
      "&.MuiChip-root:hover": {
        backgroundColor: borderColor || textColor ? getLighterBackground(borderColor || textColor, "0a") : "red",
      },

      "&.MuiChip-root .MuiChip-deleteIcon:hover": {
        color: getLighterBackground(borderColor || textColor, "db"),
      },
      "&.MuiChip-root .MuiChip-deleteIcon": {
        color: getLighterBackground(borderColor || textColor, "b3"),
      },
    };
    styles = { ...customStyle, ...styles };
  }
  return styles;
}
