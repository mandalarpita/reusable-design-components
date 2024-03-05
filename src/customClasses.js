import { makeStyles } from "@mui/styles";
import { customTheme } from "./theme";
import { getContrastColor, getContrastTextColor, getLighterBackground } from "./Utility/colorUtility";
export const useCustomStyles = makeStyles((theme) => {
  if (Object.keys(theme).length === 0) {
    theme = customTheme;
  }
  // const  small=theme.spacing(4), medium=theme.spacing(4), large=theme.spacing(4);
  return {
    // https://codesandbox.io/s/textfield-outlined-forked-dd9xf?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.js:1096-1108

    customGlobal: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ,.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "1px solid #E0E0E0 !important" },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover ,  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover,  .MuiOutlinedInput-notchedOutline:hover": { border: "1px solid red !important" },

      "& .MuiOutlinedInput-input, :hover .MuiOutlinedInput-input, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input, .MuiInputLabel-outlined, :hover .MuiInputLabel-outlined , .MuiInputLabel-outlined.Mui-focused": { color: "#1D1D11" },
      "& .MuiTextField-root	, .MuiInputBase-root": { background: "white" },

      "&. .MuiInput-sizeSmall MuiOutlinedInput-notchedOutline, .MuiInput-sizeMedium MuiOutlinedInput-notchedOutline, .MuiInput-sizeLarge MuiOutlinedInput-notchedOutline": { zIndex: "1", border: "1px solid red", "& legend": { width: "0%" } },
    },
    cwXSmallInputBase: {
      // height: "1.75rem",
      // fontSize: "0.875rem",
      "&  .MuiTextField-root,&.MuiButton-root, .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": { minHeight: "1.75rem", fontSize: "0.875rem", paddingTop: "0px ", paddingBottom: "0px " },
      "& .MuiAutocomplete-inputRoot": { padding: "0 14px !important" },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": { height: "1.75rem" },
      "& .MuiInputBase-multiline": { paddingTop: 6, paddingBottom: 6 },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": { margin: "4px 2px !important" },
      "&.MuiCheckbox-root, &.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(0.632)", //24 - 16px icon
      },
      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "1.75rem", //28width: "1.75rem",//28fontSize: "0.75rem", //12
        width: "1.75rem", //28width: "1.75rem",//28fontSize: "0.75rem", //12
        fontSize: "0.75rem", //10paddingTop: "0px !important",paddingBottom: "0px !important",
      },
      "&.MuiChip-root": {
        height: "1.75rem",
        fontSize: "0.625rem", //10paddingTop: "0px !important",paddingBottom: "0px !important",
      },
    },
    cwSmallInputBase: {
      // height: "2rem",
      // fontSize: "0.875rem",
      "&  .MuiTextField-root,&.MuiButton-root, .MuiButton-root, .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": { minHeight: "2rem", fontSize: "0.875rem", paddingTop: "0px", paddingBottom: "0px" },
      "& .MuiAutocomplete-inputRoot": { padding: "0 14px !important" },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": { height: "2rem" },
      "& .MuiInputBase-multiline": { paddingTop: 6, paddingBottom: 6 },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": { margin: "4px 2px !important" },
      "&.MuiCheckbox-root, &.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(0.736)", //28 - 18px icon
      },
      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2rem", //32width: "2rem", //32fontSize: "0.75rem", //12
        width: "2rem", //32width: "2rem", //32fontSize: "0.75rem", //12
        fontSize: "0.8rem", //10paddingTop: "0px !important",paddingBottom: "0px !important",
      },
      "&.MuiChip-root": {
        height: "1.875rem", //30fontSize: "0.75rem", //12paddingTop: "0px !important",paddingBottom: "0px !important",
      },
    },
    cwMediumInputBase: {
      "& .MuiTextField-root,&.MuiButton-root, &.MuiChip-root, &.MuiButton-root,  .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": { minHeight: "2.25rem", fontSize: "0.875rem", paddingTop: "0px", paddingBottom: "0px" },
      "& .MuiAutocomplete-inputRoot": { padding: "0 14px !important" },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": { height: "2.25rem" },
      "& .MuiInputBase-multiline": { paddingTop: 6, paddingBottom: 6 },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": { margin: "4px 2px !important" },
      "&.MuiCheckbox-root, &.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(0.842)", //32
      },
      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2.25rem", //36width: "2.25rem", //36fontSize: "0.875rem", //14
        width: "2.25rem", //36width: "2.25rem", //36fontSize: "0.875rem", //14
        fontSize: "1rem", //36width: "2.25rem", //36fontSize: "0.875rem", //14
      },
      "&.MuiChip-root": {
        height: "2rem",
        fontSize: "0.75rem", //12paddingTop: "0px !important",paddingBottom: "0px !important",
      },
    },
    cwLargeInputBase: {
      // height: "2.5rem",
      // fontSize: "1rem",
      "& .MuiTextField-root	, &.MuiButton-root, &.MuiChip-root,  &.MuiButton-root, .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": { minHeight: "2.5rem", fontSize: "1rem", paddingTop: "0px", paddingBottom: "0px" },
      "& .MuiAutocomplete-inputRoot": { padding: "0 14px !important" },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": { height: "2.5rem" },
      "& .MuiInputBase-multiline": { paddingTop: 6, paddingBottom: 6 },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": { margin: "4px 2px !important" },
      "&.MuiCheckbox-root, &.MuiSwitch-root, &.MuiRadio-root": {
        transform: "scale(0.947)", //36
      },
      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2.5rem", //40width: "2.5rem", //40fontSize: "0.875rem", //14
        width: "2.5rem", //40width: "2.5rem", //40fontSize: "0.875rem", //14
        fontSize: "1.125rem", //40width: "2.5rem", //40fontSize: "0.875rem", //14
      },
      "&.MuiChip-root": {
        height: "2.125rem",
        fontSize: "0.875rem", //14paddingTop: "0px !important",paddingBottom: "0px !important",
      },
    },
    cwXLargeInputBase: {
      // height: "2.75rem",
      // fontSize: "1.25rem",
      "& .MuiTextField-root, &.MuiButton-root, &.MuiChip-root,  &.MuiButton-root	,.MuiInputBase-root,.rs-picker-default .rs-picker-toggle.rs-btn": { minHeight: "2.75rem", fontSize: "1.25rem", paddingTop: "0px", paddingBottom: "0px" },
      "& .MuiAutocomplete-inputRoot": { padding: "0 14px !important" },
      // :not(.irrelevant)
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": { height: "2.75rem" },
      "& .MuiInputBase-multiline": { paddingTop: 6, paddingBottom: 6 },

      "& .MuiAutocomplete-root .MuiAutocomplete-tag": { margin: "4px 2px !important" },
      "&.MuiCheckbox-root,&.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(1.052)", //40
      },
      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2.75rem", //44width: "2.75rem", //44fontSize: "1rem", //16
        width: "2.75rem", //44width: "2.75rem", //44fontSize: "1rem", //16
        fontSize: "1.5rem", //44width: "2.75rem", //44fontSize: "1rem", //16
      },
      "&.MuiChip-root": {
        height: "2.25rem",
        fontSize: "0.875rem", //14paddingTop: "0px !important",paddingBottom: "0px !important",
      },
    },
    customButton: {
      fontWeight: 400,
      boxShadow: "none",
      "&.MuiButton-root": { fontWeight: 400, boxShadow: "none", textTransform: "none" },
      "&.MuiButton-containedPrimary": {
        backgroundColor: ({ color }) => (color ? color : theme.palette.primary.main),
        color: ({ color }) => getContrastTextColor(color || theme.palette.primary.main, theme.palette.primary.main),
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.primary.main, "66")), backgroundColor: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.primary.main, "66")) },
        "&:hover": { backgroundColor: ({ color }) => (color ? color : theme.palette.primary.light), color: ({ color }) => (color ? getContrastTextColor(color, theme.palette.primary.main) : getContrastColor(theme.palette.primary.main, theme.palette.primary.light, theme.palette.contrastThreshold)), boxShadow: "none" },
      },
      "&.MuiButton-containedSecondary": {
        backgroundColor: ({ color }) => (color ? color : theme.palette.secondary.main),
        color: ({ color }) => (color ? getContrastTextColor(color) : getContrastTextColor(theme.palette.secondary.main)),
        "&:hover": { color: ({ color }) => (color ? getContrastTextColor(color) : getContrastColor(theme.palette.secondary.main, theme.palette.secondary.light, theme.palette.contrastThreshold)), backgroundColor: ({ color }) => (color ? color : theme.palette.secondary.light), boxShadow: "none" },
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")), backgroundColor: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")) },
      },
      "&.MuiButton-textPrimary": {
        color: ({ color }) => (color ? color : theme.palette.primary.main),
        "&:hover": { color: ({ color }) => (color ? color : theme.palette.primary.main), backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)) },
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.primary.main, "66")) },
      },
      "&.MuiButton-outlinedPrimary": {
        color: ({ color }) => (color ? color : theme.palette.primary.main),
        borderColor: ({ color }) => (color ? color : theme.palette.primary.main),
        "&:hover": { color: ({ color }) => (color ? color : theme.palette.primary.main), borderColor: ({ color }) => (color ? color : theme.palette.primary.main), backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)), boxShadow: "none" },
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.primary.main, "66")), borderColor: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.primary.main, "66")) },
      },
      "&.MuiButton-outlinedSecondary": {
        color: ({ color }) => (color ? color : theme.palette.secondary.main),
        borderColor: ({ color }) => (color ? color : theme.palette.secondary.main),
        backgroundColor: "transparent",
        "&:hover": { color: ({ color }) => (color ? color : theme.palette.secondary.main), borderColor: ({ color }) => (color ? color : theme.palette.secondary.main), backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.secondary.main)), boxShadow: "none" },
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")), borderColor: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")) },
      },
      "&.MuiButton-containedPrimary:disabled, &.MuiButton-containedSecondary:disabled": { backgroundColor: "#F5F5F5", boxShadow: "none" },
      "&.MuiButton-containedPrimary:disabled, &.MuiButton-containedSecondary:disabled": { backgroundColor: "#F5F5F5", boxShadow: "none" },
    },
    customChip: {
      fontWeight: 400,
      boxShadow: "none",

      "&.MuiChip-root": { fontWeight: 400, boxShadow: "none", textTransform: "none" },
      "&.MuiChip-filledPrimary": {
        backgroundColor: theme.palette.primary.main,
        color: getContrastTextColor(theme.palette.primary.main),
        "&:hover": { backgroundColor: theme.palette.primary.main, color: getContrastColor(theme.palette.primary.main, theme.palette.primary.light, theme.palette.contrastThreshold), boxShadow: "none" },
        "&.MuiChip-root .MuiChip-deleteIcon:hover": { color: "rgba(255, 255, 255, 0.9)" },
        "&.MuiChip-root .MuiChip-deleteIcon": { color: "rgba(255, 255, 255, 0.7)" },
      },
      "&.MuiChip-filledSecondary": {
        color: getContrastTextColor(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
        "&:hover": { color: getContrastTextColor(theme.palette.secondary.main), backgroundColor: theme.palette.secondary.main, boxShadow: "none" },
        "&.MuiChip-root .MuiChip-deleteIcon:hover": { color: "rgba(255, 255, 255, 0.9)" },
        "&.MuiChip-root .MuiChip-deleteIcon": { color: "rgba(255, 255, 255, 0.7)" },
      },
      "&.MuiChip-oulinedPrimary": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        "&:hover": { color: theme.palette.primary.main, backgroundColor: theme.palette.primary.main, backgroundColor: "transparent", boxShadow: "none" },
        "&.MuiChip-root .MuiChip-deleteIcon:hover": { color: getLighterBackground(theme.palette.primary.main, "db") },
        "&.MuiChip-root .MuiChip-deleteIcon": { color: getLighterBackground(theme.palette.primary.main, "b3") },
      },
      "&.MuiChip-outlinedSecondary": { color: theme.palette.secondary.main, "&:hover": { color: theme.palette.secondary.main, backgroundColor: "transparent", boxShadow: "none" }, "&.MuiChip-root .MuiChip-deleteIcon:hover": { color: getLighterBackground(theme.palette.secondary.main, "db") }, "&.MuiChip-root .MuiChip-deleteIcon": { color: getLighterBackground(theme.palette.secondary.main, "b3") } },
      "&.MuiChip-containedPrimary:disabled, &.MuiChip-containedSecondary:disabled": { backgroundColor: "#F5F5F5", boxShadow: "none" },
      "&.MuiChip-containedPrimary:disabled, &.MuiChip-containedSecondary:disabled": { backgroundColor: "#F5F5F5", boxShadow: "none" },
    },
    customAvatar: {
      "&.MuiAvatar-root": { color: ({ color }) => ((color ? color : getContrastTextColor(theme.palette.primary.light)) === "#000000" ? theme.palette.primary.main : "#ffffff"), backgroundColor: ({ backgroundColor }) => (backgroundColor ? backgroundColor : theme.palette.primary.light) },
    },
    customAutoComplete: {
      "& .MuiAutocomplete-option, .MuiAutocomplete-popper": { zIndex: 4 },
      "&.MuiAutocomplete-root .MuiAutocomplete-tag": { margin: 3 },
      "& .MuiAutocomplete-input": { padding: "0rem !important" },
      "& .MuiAutocomplete-endAdornment": { zIndex: 2, "& .MuiIconButton-root": { background: "transparent", color: "#1D1D11" } },
    },
    customInput: {
      "& cwSmallInputBase": {
        // height: "1.75rem",
      },
    },

    customAutoCompleteMultiple: {
      "& .MuiTextField-root": { height: "100% !important" },
    },
    customMultiLine: {
      "& .MuiTextField-root": { height: "100% !important" },
    },
    customCheckbox: {
      "&.MuiCheckbox-root": { color: "#1D1D11" },
      "&.MuiCheckbox-root.MuiCheckbox-colorPrimary": { "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)) } },
      "&.MuiCheckbox-root.MuiCheckbox-colorSecondary": { "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.secondary.main)) }, "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")) } },
      "&.MuiCheckbox-colorPrimary.MuiCheckbox-root.Mui-checked": {
        color: ({ color }) => (color ? color : theme.palette.primary.main),
        "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)) },
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.primary.main, "66")) },
      },

      "&.MuiCheckbox-colorSecondary.MuiCheckbox-root.Mui-checked": { color: ({ color }) => (color ? color : theme.palette.secondary.main), "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.secondary.main)) } },
    },
    customRadio: {
      "&.MuiRadio-root.MuiRadio-colorPrimary": { "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)) } },
      "&.MuiRadio-root.MuiRadio-colorSecondary": { "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.secondary.main)) } },
      "&.MuiRadio-root.Mui-checked.MuiRadio-colorPrimary": {
        color: ({ color }) => (color ? color : theme.palette.primary.main),
        "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)) },
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.primary.main, "66")) },
      },
      "&.MuiRadio-root.Mui-checked.MuiRadio-colorSecondary": {
        color: ({ color }) => (color ? color : theme.palette.secondary.main),
        "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.secondary.main)) },
        "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")) },
      },
      "&.MuiButtonBase-root-MuiRadio-root": { "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)) } },
    },
    customSwitch: {
      "&.MuiSwitch-root": { color: "#1D1D11" },
      "&$checked+$track": { opacity: "0.4 !important" },
      "& .MuiSwitch-track": { height: "85%", margin: "auto", opacity: "0.4", background: "#9E9E9E" },
      "& .MuiSwitch-thumb": { boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" },
      "&.MuiSwitch-root .Mui-checked.MuiSwitch-colorPrimary": { color: ({ color }) => (color ? color : theme.palette.primary.main), "&:hover": { backgroundColor: ({ color }) => (color ? getLighterBackground(color) : getLighterBackground(theme.palette.primary.main)) } },
      // .css-19tgncc-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track
      "& .MuiSwitch-colorPrimary.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": { backgroundColor: ({ color }) => (color ? color : theme.palette.primary.main), opacity: "0.4", "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")) } },
      "& .MuiSwitch-colorSecondary.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": { backgroundColor: ({ color }) => (color ? color : theme.palette.secondary.main), opacity: "0.4", "&.Mui-disabled": { color: ({ color }) => (color ? getLighterBackground(color, "66") : getLighterBackground(theme.palette.secondary.main, "66")) } },
    },

    customDateRangePicker: {},
    cwSmallDRP: {
      "& .rs-picker-default .rs-picker-toggle.rs-btn": { height: theme.spacing(4), paddingTop: theme.spacing(2) },
    },
    cwMediumDRP: {
      "&  .rs-picker-default .rs-picker-toggle.rs-btn": { height: theme.spacing(5), paddingTop: theme.spacing(2) },
    },
    cwLargeDRP: {
      "&  .rs-picker-default .rs-picker-toggle.rs-btn": { height: theme.spacing(6), paddingTop: theme.spacing(2) },
    },
    option: {
      "& .MuiAutocomplete-option, .MuiAutocomplete-popper": { zIndex: 4 },
      zIndex: 4,
    },
    cwErrorMsg: {
      color: theme.palette.error.main,
      // paddingTop: theme.spacing(0.5),
    },
    cwErrorMsgSmall: {
      fontSize: "0.75rem ", //12
    },
    cwErrorMsgMedium: {
      fontSize: "0.75rem", //12
    },
    cwErrorMsgLarge: {
      fontSize: "0.875rem", //14
    },
    customTab: {
      fontSize: "0.75rem !important", //12
      color: `${theme.palette.common.black} !important`,
      flexDirection: `row !important`,
      alignItems: `center !important`,
      fontWeight: `${400} !important`,
      textTransform: `capitalize !important`,
      textDecoration: `none !important`,
      "&.Mui-selected": { fontWeight: `${500} !important`, border: `none !important`, backgroundColor: `${theme.palette.common.white} !important`, transition: `all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms` },
    },
    customTabs: {
      "&.MuiTabs-root": { position: "relative" },
      "& .MuiTabs-scrollButtons": { backgroundColor: `${theme.palette.common.white} !important`, width: `1.5rem`, height: `1.5rem`, margin: `auto 2px`, borderRadius: "50%", boxShadow: `0px 2px 1px -1px rgba(0, 0, 0, 0.2)`, filter: `drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12))`, opacity: 1 },
      "& .MuiTabs-scrollButtons:first-child": { position: "absolute", top: 0, bottom: 0, zIndex: 1 },
      "& .MuiTabs-indicator": { backgroundColor: `transparent !important` },
      "& .MuiTab-root:first-child": { borderRadius: "0.75rem 0 0 0" },
      "& .Mui-disabled": { opacity: `0 !important` },
    },
    customTabsLabel: {
      padding: `0.5rem`,
    },
    customTabPanel: {
      background: `#FFFFFF`,
    },
    customPopper: {
      "&.MuiPaper-root": {
        // boxShadow: "0px 1px 24px rgba(92, 92, 92, 0.25)",
      },
      background: theme.palette.background.paper,
      borderRadius: theme.spacing(0.5),
      // padding: theme.spacing(1),
      zIndex: "1000",
    },
    customDialogContent: {
      "&.MuiDialogContent-root": {
        padding: " 0 1rem",
      },
    },
    customDialogActions: {
      "&.MuiDialogActions-root": {
        padding: "1.5rem 2rem",
      },
    },
  };
});
export function getClassBySize(size, component, color, overrideColor) {
  const customClasses = overrideColor ? useCustomStyles({ color: overrideColor }) : useCustomStyles();

  let errorstyle = "";
  let classes = ` ${customClasses.customGlobal}`;
  switch (size) {
    case "xs":
    case "xsmall":
      classes = ` ${customClasses.customGlobal}  ${customClasses.cwXSmallInputBase} `;
      errorstyle = `${customClasses.cwErrorMsg} ${customClasses.cwErrorMsgSmall}`;
      break;
    case "sm":
    case "small":
      classes = ` ${customClasses.customGlobal}  ${customClasses.cwSmallInputBase} `;
      errorstyle = `${customClasses.cwErrorMsg} ${customClasses.cwErrorMsgSmall}`;
      break;
    case "md":
    case "medium":
      classes = ` ${customClasses.customGlobal}  ${customClasses.cwMediumInputBase} `;
      errorstyle = `${customClasses.cwErrorMsg} ${customClasses.cwErrorMsgMedium}`;

      break;
    case "lg":
    case "large":
      classes = ` ${customClasses.customGlobal}  ${customClasses.cwLargeInputBase} `;
      errorstyle = `${customClasses.cwErrorMsg} ${customClasses.cwErrorMsgLarge}`;
      break;

    case "xl":
    case "xlarge":
      classes = ` ${customClasses.customGlobal}  ${customClasses.cwXLargeInputBase} `;
      errorstyle = `${customClasses.cwErrorMsg} ${customClasses.cwErrorMsgLarge}`;
      break;
    default:
      classes = `  ${customClasses.customGlobal} `;
      errorstyle = `${customClasses.cwErrorMsg} ${customClasses.cwErrorMsgSmall}`;
  }
  classes = component ? `${classes}  ${customClasses[component]}` : `${classes}`;

  return { classes: classes, errorstyle: errorstyle };
}

export const groupedComponentTextSize = (size, placement) => {
  let options = {
    variant: "body2",
    direction: "row",
    // justifyContent: "",
  };
  switch (size) {
    case "xs":
    case "xsmall":
      options.variant = "caption";
      break;
    case "sm":
    case "small":
      options.variant = "caption";
      break;
    case "md":
    case "medium":
      options.variant = "body2";
      break;
    case "lg":
    case "large":
      options.variant = "body2";
      break;
    case "xl":
    case "xlarge":
      options.variant = "body1";
      break;
    default:
      options.variant = "body2";
  }

  switch (placement?.toLowerCase()) {
    case "top":
      options.direction = "column-reverse";
      break;
    case "bottom":
      options.direction = "column";

      break;
    case "left":
      options.direction = "row-reverse";
      break;
    case "right":
      options.direction = "row";
      break;
    default:
      options.direction = "row";
  }
  return options;
};

export const getColorsProps = (color, overrideColor) => {
  let colorProps = {};
  if (!overrideColor) {
    colorProps = { color: color };
  }
  return colorProps;
};
