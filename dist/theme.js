"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customTheme = void 0;
var _material = require("@mui/material");
var customTheme = (0, _material.createTheme)({
  spacing: function spacing(factor) {
    return "".concat(0.5 * factor, "rem");
  },
  palette: {
    primary: {
      main: "#AF3265",
      //application primary theme colour
      light: "#f4d8e4"
    },
    secondary: {
      main: "#E57C23",
      //secondary brand colour ----lighter version of the application theme color
      light: "#E8AA42"
    }
  },
  shape: {
    borderRadius: 8
  },
  props: {
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true,
      // No more ripple, on the whole application!
      borderRadius: "8px"
    }
  }
});
exports.customTheme = customTheme;