"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClassBySize = getClassBySize;
exports.useCustomStyles = exports.groupedComponentTextSize = exports.getColorsProps = void 0;
var _styles = require("@mui/styles");
var _theme = require("./theme");
var _colorUtility = require("./Utility/colorUtility");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var useCustomStyles = (0, _styles.makeStyles)(function (theme) {
  var _hover;
  if (Object.keys(theme).length === 0) {
    theme = _theme.customTheme;
  }
  // const  small=theme.spacing(4), medium=theme.spacing(4), large=theme.spacing(4);
  return {
    // https://codesandbox.io/s/textfield-outlined-forked-dd9xf?fontsize=14&hidenavigation=1&theme=dark&file=/src/index.js:1096-1108

    customGlobal: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline ,.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: "1px solid #E0E0E0 !important"
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover ,  .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline:hover,  .MuiOutlinedInput-notchedOutline:hover": {
        border: "1px solid red !important"
      },
      "& .MuiOutlinedInput-input, :hover .MuiOutlinedInput-input, .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input, .MuiInputLabel-outlined, :hover .MuiInputLabel-outlined , .MuiInputLabel-outlined.Mui-focused": {
        color: "#1D1D11"
      },
      "& .MuiTextField-root	, .MuiInputBase-root": {
        background: "white"
      },
      "&. .MuiInput-sizeSmall MuiOutlinedInput-notchedOutline, .MuiInput-sizeMedium MuiOutlinedInput-notchedOutline, .MuiInput-sizeLarge MuiOutlinedInput-notchedOutline": {
        zIndex: "1",
        border: "1px solid red",
        "& legend": {
          width: "0%"
        }
      }
    },
    cwXSmallInputBase: {
      // height: "1.75rem",
      // fontSize: "0.875rem",
      "&  .MuiTextField-root,&.MuiButton-root, .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": {
        minHeight: "1.75rem",
        fontSize: "0.875rem",
        paddingTop: "0px ",
        paddingBottom: "0px "
      },
      "& .MuiAutocomplete-inputRoot": {
        padding: "0 14px !important"
      },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": {
        height: "1.75rem"
      },
      "& .MuiInputBase-multiline": {
        paddingTop: 6,
        paddingBottom: 6
      },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": {
        margin: "4px 2px !important"
      },
      "&.MuiCheckbox-root, &.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(0.632)" //24 - 16px icon
      },

      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "1.75rem",
        //28width: "1.75rem",//28fontSize: "0.75rem", //12
        width: "1.75rem",
        //28width: "1.75rem",//28fontSize: "0.75rem", //12
        fontSize: "0.75rem" //10paddingTop: "0px !important",paddingBottom: "0px !important",
      },

      "&.MuiChip-root": {
        height: "1.75rem",
        fontSize: "0.625rem" //10paddingTop: "0px !important",paddingBottom: "0px !important",
      }
    },

    cwSmallInputBase: {
      // height: "2rem",
      // fontSize: "0.875rem",
      "&  .MuiTextField-root,&.MuiButton-root, .MuiButton-root, .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": {
        minHeight: "2rem",
        fontSize: "0.875rem",
        paddingTop: "0px",
        paddingBottom: "0px"
      },
      "& .MuiAutocomplete-inputRoot": {
        padding: "0 14px !important"
      },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": {
        height: "2rem"
      },
      "& .MuiInputBase-multiline": {
        paddingTop: 6,
        paddingBottom: 6
      },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": {
        margin: "4px 2px !important"
      },
      "&.MuiCheckbox-root, &.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(0.736)" //28 - 18px icon
      },

      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2rem",
        //32width: "2rem", //32fontSize: "0.75rem", //12
        width: "2rem",
        //32width: "2rem", //32fontSize: "0.75rem", //12
        fontSize: "0.8rem" //10paddingTop: "0px !important",paddingBottom: "0px !important",
      },

      "&.MuiChip-root": {
        height: "1.875rem" //30fontSize: "0.75rem", //12paddingTop: "0px !important",paddingBottom: "0px !important",
      }
    },

    cwMediumInputBase: {
      "& .MuiTextField-root,&.MuiButton-root, &.MuiChip-root, &.MuiButton-root,  .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": {
        minHeight: "2.25rem",
        fontSize: "0.875rem",
        paddingTop: "0px",
        paddingBottom: "0px"
      },
      "& .MuiAutocomplete-inputRoot": {
        padding: "0 14px !important"
      },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": {
        height: "2.25rem"
      },
      "& .MuiInputBase-multiline": {
        paddingTop: 6,
        paddingBottom: 6
      },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": {
        margin: "4px 2px !important"
      },
      "&.MuiCheckbox-root, &.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(0.842)" //32
      },

      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2.25rem",
        //36width: "2.25rem", //36fontSize: "0.875rem", //14
        width: "2.25rem",
        //36width: "2.25rem", //36fontSize: "0.875rem", //14
        fontSize: "1rem" //36width: "2.25rem", //36fontSize: "0.875rem", //14
      },

      "&.MuiChip-root": {
        height: "2rem",
        fontSize: "0.75rem" //12paddingTop: "0px !important",paddingBottom: "0px !important",
      }
    },

    cwLargeInputBase: {
      // height: "2.5rem",
      // fontSize: "1rem",
      "& .MuiTextField-root	, &.MuiButton-root, &.MuiChip-root,  &.MuiButton-root, .MuiInputBase-root, .rs-picker-default .rs-picker-toggle.rs-btn": {
        minHeight: "2.5rem",
        fontSize: "1rem",
        paddingTop: "0px",
        paddingBottom: "0px"
      },
      "& .MuiAutocomplete-inputRoot": {
        padding: "0 14px !important"
      },
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": {
        height: "2.5rem"
      },
      "& .MuiInputBase-multiline": {
        paddingTop: 6,
        paddingBottom: 6
      },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": {
        margin: "4px 2px !important"
      },
      "&.MuiCheckbox-root, &.MuiSwitch-root, &.MuiRadio-root": {
        transform: "scale(0.947)" //36
      },

      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2.5rem",
        //40width: "2.5rem", //40fontSize: "0.875rem", //14
        width: "2.5rem",
        //40width: "2.5rem", //40fontSize: "0.875rem", //14
        fontSize: "1.125rem" //40width: "2.5rem", //40fontSize: "0.875rem", //14
      },

      "&.MuiChip-root": {
        height: "2.125rem",
        fontSize: "0.875rem" //14paddingTop: "0px !important",paddingBottom: "0px !important",
      }
    },

    cwXLargeInputBase: {
      // height: "2.75rem",
      // fontSize: "1.25rem",
      "& .MuiTextField-root, &.MuiButton-root, &.MuiChip-root,  &.MuiButton-root	,.MuiInputBase-root,.rs-picker-default .rs-picker-toggle.rs-btn": {
        minHeight: "2.75rem",
        fontSize: "1.25rem",
        paddingTop: "0px",
        paddingBottom: "0px"
      },
      "& .MuiAutocomplete-inputRoot": {
        padding: "0 14px !important"
      },
      // :not(.irrelevant)
      "& .MuiInputBase-root:not(.MuiAutocomplete-inputRoot):not(.MuiInputBase-multiline)": {
        height: "2.75rem"
      },
      "& .MuiInputBase-multiline": {
        paddingTop: 6,
        paddingBottom: 6
      },
      "& .MuiAutocomplete-root .MuiAutocomplete-tag": {
        margin: "4px 2px !important"
      },
      "&.MuiCheckbox-root,&.MuiSwitch-root,&.MuiRadio-root": {
        transform: "scale(1.052)" //40
      },

      "&.MuiAvatar-root, & .MuiAvatarGroup-avatar": {
        height: "2.75rem",
        //44width: "2.75rem", //44fontSize: "1rem", //16
        width: "2.75rem",
        //44width: "2.75rem", //44fontSize: "1rem", //16
        fontSize: "1.5rem" //44width: "2.75rem", //44fontSize: "1rem", //16
      },

      "&.MuiChip-root": {
        height: "2.25rem",
        fontSize: "0.875rem" //14paddingTop: "0px !important",paddingBottom: "0px !important",
      }
    },

    customButton: _defineProperty({
      fontWeight: 400,
      boxShadow: "none",
      "&.MuiButton-root": {
        fontWeight: 400,
        boxShadow: "none",
        textTransform: "none"
      },
      "&.MuiButton-containedPrimary": {
        backgroundColor: function backgroundColor(_ref) {
          var color = _ref.color;
          return color ? color : theme.palette.primary.main;
        },
        color: function color(_ref2) {
          var _color = _ref2.color;
          return (0, _colorUtility.getContrastTextColor)(_color || theme.palette.primary.main, theme.palette.primary.main);
        },
        "&.Mui-disabled": {
          color: function color(_ref3) {
            var _color2 = _ref3.color;
            return _color2 ? (0, _colorUtility.getLighterBackground)(_color2, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "66");
          },
          backgroundColor: function backgroundColor(_ref4) {
            var color = _ref4.color;
            return color ? (0, _colorUtility.getLighterBackground)(color, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "66");
          }
        },
        "&:hover": {
          backgroundColor: function backgroundColor(_ref5) {
            var color = _ref5.color;
            return color ? color : theme.palette.primary.light;
          },
          color: function color(_ref6) {
            var _color3 = _ref6.color;
            return _color3 ? (0, _colorUtility.getContrastTextColor)(_color3, theme.palette.primary.main) : (0, _colorUtility.getContrastColor)(theme.palette.primary.main, theme.palette.primary.light, theme.palette.contrastThreshold);
          },
          boxShadow: "none"
        }
      },
      "&.MuiButton-containedSecondary": {
        backgroundColor: function backgroundColor(_ref7) {
          var color = _ref7.color;
          return color ? color : theme.palette.secondary.main;
        },
        color: function color(_ref8) {
          var _color4 = _ref8.color;
          return _color4 ? (0, _colorUtility.getContrastTextColor)(_color4) : (0, _colorUtility.getContrastTextColor)(theme.palette.secondary.main);
        },
        "&:hover": {
          color: function color(_ref9) {
            var _color5 = _ref9.color;
            return _color5 ? (0, _colorUtility.getContrastTextColor)(_color5) : (0, _colorUtility.getContrastColor)(theme.palette.secondary.main, theme.palette.secondary.light, theme.palette.contrastThreshold);
          },
          backgroundColor: function backgroundColor(_ref10) {
            var color = _ref10.color;
            return color ? color : theme.palette.secondary.light;
          },
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          color: function color(_ref11) {
            var _color6 = _ref11.color;
            return _color6 ? (0, _colorUtility.getLighterBackground)(_color6, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          },
          backgroundColor: function backgroundColor(_ref12) {
            var color = _ref12.color;
            return color ? (0, _colorUtility.getLighterBackground)(color, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          }
        }
      },
      "&.MuiButton-textPrimary": {
        color: function color(_ref13) {
          var _color7 = _ref13.color;
          return _color7 ? _color7 : theme.palette.primary.main;
        },
        "&:hover": {
          color: function color(_ref14) {
            var _color8 = _ref14.color;
            return _color8 ? _color8 : theme.palette.primary.main;
          },
          backgroundColor: function backgroundColor(_ref15) {
            var color = _ref15.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          }
        },
        "&.Mui-disabled": {
          color: function color(_ref16) {
            var _color9 = _ref16.color;
            return _color9 ? (0, _colorUtility.getLighterBackground)(_color9, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "66");
          }
        }
      },
      "&.MuiButton-outlinedPrimary": {
        color: function color(_ref17) {
          var _color10 = _ref17.color;
          return _color10 ? _color10 : theme.palette.primary.main;
        },
        borderColor: function borderColor(_ref18) {
          var color = _ref18.color;
          return color ? color : theme.palette.primary.main;
        },
        "&:hover": {
          color: function color(_ref19) {
            var _color11 = _ref19.color;
            return _color11 ? _color11 : theme.palette.primary.main;
          },
          borderColor: function borderColor(_ref20) {
            var color = _ref20.color;
            return color ? color : theme.palette.primary.main;
          },
          backgroundColor: function backgroundColor(_ref21) {
            var color = _ref21.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          },
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          color: function color(_ref22) {
            var _color12 = _ref22.color;
            return _color12 ? (0, _colorUtility.getLighterBackground)(_color12, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "66");
          },
          borderColor: function borderColor(_ref23) {
            var color = _ref23.color;
            return color ? (0, _colorUtility.getLighterBackground)(color, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "66");
          }
        }
      },
      "&.MuiButton-outlinedSecondary": {
        color: function color(_ref24) {
          var _color13 = _ref24.color;
          return _color13 ? _color13 : theme.palette.secondary.main;
        },
        borderColor: function borderColor(_ref25) {
          var color = _ref25.color;
          return color ? color : theme.palette.secondary.main;
        },
        backgroundColor: "transparent",
        "&:hover": {
          color: function color(_ref26) {
            var _color14 = _ref26.color;
            return _color14 ? _color14 : theme.palette.secondary.main;
          },
          borderColor: function borderColor(_ref27) {
            var color = _ref27.color;
            return color ? color : theme.palette.secondary.main;
          },
          backgroundColor: function backgroundColor(_ref28) {
            var color = _ref28.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main);
          },
          boxShadow: "none"
        },
        "&.Mui-disabled": {
          color: function color(_ref29) {
            var _color15 = _ref29.color;
            return _color15 ? (0, _colorUtility.getLighterBackground)(_color15, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          },
          borderColor: function borderColor(_ref30) {
            var color = _ref30.color;
            return color ? (0, _colorUtility.getLighterBackground)(color, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          }
        }
      },
      "&.MuiButton-containedPrimary:disabled, &.MuiButton-containedSecondary:disabled": {
        backgroundColor: "#F5F5F5",
        boxShadow: "none"
      }
    }, "&.MuiButton-containedPrimary:disabled, &.MuiButton-containedSecondary:disabled", {
      backgroundColor: "#F5F5F5",
      boxShadow: "none"
    }),
    customChip: _defineProperty({
      fontWeight: 400,
      boxShadow: "none",
      "&.MuiChip-root": {
        fontWeight: 400,
        boxShadow: "none",
        textTransform: "none"
      },
      "&.MuiChip-filledPrimary": {
        backgroundColor: theme.palette.primary.main,
        color: (0, _colorUtility.getContrastTextColor)(theme.palette.primary.main),
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
          color: (0, _colorUtility.getContrastColor)(theme.palette.primary.main, theme.palette.primary.light, theme.palette.contrastThreshold),
          boxShadow: "none"
        },
        "&.MuiChip-root .MuiChip-deleteIcon:hover": {
          color: "rgba(255, 255, 255, 0.9)"
        },
        "&.MuiChip-root .MuiChip-deleteIcon": {
          color: "rgba(255, 255, 255, 0.7)"
        }
      },
      "&.MuiChip-filledSecondary": {
        color: (0, _colorUtility.getContrastTextColor)(theme.palette.secondary.main),
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
          color: (0, _colorUtility.getContrastTextColor)(theme.palette.secondary.main),
          backgroundColor: theme.palette.secondary.main,
          boxShadow: "none"
        },
        "&.MuiChip-root .MuiChip-deleteIcon:hover": {
          color: "rgba(255, 255, 255, 0.9)"
        },
        "&.MuiChip-root .MuiChip-deleteIcon": {
          color: "rgba(255, 255, 255, 0.7)"
        }
      },
      "&.MuiChip-oulinedPrimary": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main,
        "&:hover": (_hover = {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.main
        }, _defineProperty(_hover, "backgroundColor", "transparent"), _defineProperty(_hover, "boxShadow", "none"), _hover),
        "&.MuiChip-root .MuiChip-deleteIcon:hover": {
          color: (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "db")
        },
        "&.MuiChip-root .MuiChip-deleteIcon": {
          color: (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "b3")
        }
      },
      "&.MuiChip-outlinedSecondary": {
        color: theme.palette.secondary.main,
        "&:hover": {
          color: theme.palette.secondary.main,
          backgroundColor: "transparent",
          boxShadow: "none"
        },
        "&.MuiChip-root .MuiChip-deleteIcon:hover": {
          color: (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "db")
        },
        "&.MuiChip-root .MuiChip-deleteIcon": {
          color: (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "b3")
        }
      },
      "&.MuiChip-containedPrimary:disabled, &.MuiChip-containedSecondary:disabled": {
        backgroundColor: "#F5F5F5",
        boxShadow: "none"
      }
    }, "&.MuiChip-containedPrimary:disabled, &.MuiChip-containedSecondary:disabled", {
      backgroundColor: "#F5F5F5",
      boxShadow: "none"
    }),
    customAvatar: {
      "&.MuiAvatar-root": {
        color: function color(_ref31) {
          var _color16 = _ref31.color;
          return (_color16 ? _color16 : (0, _colorUtility.getContrastTextColor)(theme.palette.primary.light)) === "#000000" ? theme.palette.primary.main : "#ffffff";
        },
        backgroundColor: function backgroundColor(_ref32) {
          var _backgroundColor = _ref32.backgroundColor;
          return _backgroundColor ? _backgroundColor : theme.palette.primary.light;
        }
      }
    },
    customAutoComplete: {
      "& .MuiAutocomplete-option, .MuiAutocomplete-popper": {
        zIndex: 4
      },
      "&.MuiAutocomplete-root .MuiAutocomplete-tag": {
        margin: 3
      },
      "& .MuiAutocomplete-input": {
        padding: "0rem !important"
      },
      "& .MuiAutocomplete-endAdornment": {
        zIndex: 2,
        "& .MuiIconButton-root": {
          background: "transparent",
          color: "#1D1D11"
        }
      }
    },
    customInput: {
      "& cwSmallInputBase": {
        // height: "1.75rem",
      }
    },
    customAutoCompleteMultiple: {
      "& .MuiTextField-root": {
        height: "100% !important"
      }
    },
    customMultiLine: {
      "& .MuiTextField-root": {
        height: "100% !important"
      }
    },
    customCheckbox: {
      "&.MuiCheckbox-root": {
        color: "#1D1D11"
      },
      "&.MuiCheckbox-root.MuiCheckbox-colorPrimary": {
        "&:hover": {
          backgroundColor: function backgroundColor(_ref33) {
            var color = _ref33.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          }
        }
      },
      "&.MuiCheckbox-root.MuiCheckbox-colorSecondary": {
        "&:hover": {
          backgroundColor: function backgroundColor(_ref34) {
            var color = _ref34.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main);
          }
        },
        "&.Mui-disabled": {
          color: function color(_ref35) {
            var _color17 = _ref35.color;
            return _color17 ? (0, _colorUtility.getLighterBackground)(_color17, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          }
        }
      },
      "&.MuiCheckbox-colorPrimary.MuiCheckbox-root.Mui-checked": {
        color: function color(_ref36) {
          var _color18 = _ref36.color;
          return _color18 ? _color18 : theme.palette.primary.main;
        },
        "&:hover": {
          backgroundColor: function backgroundColor(_ref37) {
            var color = _ref37.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          }
        },
        "&.Mui-disabled": {
          color: function color(_ref38) {
            var _color19 = _ref38.color;
            return _color19 ? (0, _colorUtility.getLighterBackground)(_color19, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "66");
          }
        }
      },
      "&.MuiCheckbox-colorSecondary.MuiCheckbox-root.Mui-checked": {
        color: function color(_ref39) {
          var _color20 = _ref39.color;
          return _color20 ? _color20 : theme.palette.secondary.main;
        },
        "&:hover": {
          backgroundColor: function backgroundColor(_ref40) {
            var color = _ref40.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main);
          }
        }
      }
    },
    customRadio: {
      "&.MuiRadio-root.MuiRadio-colorPrimary": {
        "&:hover": {
          backgroundColor: function backgroundColor(_ref41) {
            var color = _ref41.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          }
        }
      },
      "&.MuiRadio-root.MuiRadio-colorSecondary": {
        "&:hover": {
          backgroundColor: function backgroundColor(_ref42) {
            var color = _ref42.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main);
          }
        }
      },
      "&.MuiRadio-root.Mui-checked.MuiRadio-colorPrimary": {
        color: function color(_ref43) {
          var _color21 = _ref43.color;
          return _color21 ? _color21 : theme.palette.primary.main;
        },
        "&:hover": {
          backgroundColor: function backgroundColor(_ref44) {
            var color = _ref44.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          }
        },
        "&.Mui-disabled": {
          color: function color(_ref45) {
            var _color22 = _ref45.color;
            return _color22 ? (0, _colorUtility.getLighterBackground)(_color22, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main, "66");
          }
        }
      },
      "&.MuiRadio-root.Mui-checked.MuiRadio-colorSecondary": {
        color: function color(_ref46) {
          var _color23 = _ref46.color;
          return _color23 ? _color23 : theme.palette.secondary.main;
        },
        "&:hover": {
          backgroundColor: function backgroundColor(_ref47) {
            var color = _ref47.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main);
          }
        },
        "&.Mui-disabled": {
          color: function color(_ref48) {
            var _color24 = _ref48.color;
            return _color24 ? (0, _colorUtility.getLighterBackground)(_color24, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          }
        }
      },
      "&.MuiButtonBase-root-MuiRadio-root": {
        "&:hover": {
          backgroundColor: function backgroundColor(_ref49) {
            var color = _ref49.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          }
        }
      }
    },
    customSwitch: {
      "&.MuiSwitch-root": {
        color: "#1D1D11"
      },
      "&$checked+$track": {
        opacity: "0.4 !important"
      },
      "& .MuiSwitch-track": {
        height: "85%",
        margin: "auto",
        opacity: "0.4",
        background: "#9E9E9E"
      },
      "& .MuiSwitch-thumb": {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
      "&.MuiSwitch-root .Mui-checked.MuiSwitch-colorPrimary": {
        color: function color(_ref50) {
          var _color25 = _ref50.color;
          return _color25 ? _color25 : theme.palette.primary.main;
        },
        "&:hover": {
          backgroundColor: function backgroundColor(_ref51) {
            var color = _ref51.color;
            return color ? (0, _colorUtility.getLighterBackground)(color) : (0, _colorUtility.getLighterBackground)(theme.palette.primary.main);
          }
        }
      },
      // .css-19tgncc-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track
      "& .MuiSwitch-colorPrimary.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
        backgroundColor: function backgroundColor(_ref52) {
          var color = _ref52.color;
          return color ? color : theme.palette.primary.main;
        },
        opacity: "0.4",
        "&.Mui-disabled": {
          color: function color(_ref53) {
            var _color26 = _ref53.color;
            return _color26 ? (0, _colorUtility.getLighterBackground)(_color26, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          }
        }
      },
      "& .MuiSwitch-colorSecondary.MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
        backgroundColor: function backgroundColor(_ref54) {
          var color = _ref54.color;
          return color ? color : theme.palette.secondary.main;
        },
        opacity: "0.4",
        "&.Mui-disabled": {
          color: function color(_ref55) {
            var _color27 = _ref55.color;
            return _color27 ? (0, _colorUtility.getLighterBackground)(_color27, "66") : (0, _colorUtility.getLighterBackground)(theme.palette.secondary.main, "66");
          }
        }
      }
    },
    customDateRangePicker: {},
    cwSmallDRP: {
      "& .rs-picker-default .rs-picker-toggle.rs-btn": {
        height: theme.spacing(4),
        paddingTop: theme.spacing(2)
      }
    },
    cwMediumDRP: {
      "&  .rs-picker-default .rs-picker-toggle.rs-btn": {
        height: theme.spacing(5),
        paddingTop: theme.spacing(2)
      }
    },
    cwLargeDRP: {
      "&  .rs-picker-default .rs-picker-toggle.rs-btn": {
        height: theme.spacing(6),
        paddingTop: theme.spacing(2)
      }
    },
    option: {
      "& .MuiAutocomplete-option, .MuiAutocomplete-popper": {
        zIndex: 4
      },
      zIndex: 4
    },
    cwErrorMsg: {
      color: theme.palette.error.main
      // paddingTop: theme.spacing(0.5),
    },

    cwErrorMsgSmall: {
      fontSize: "0.75rem " //12
    },

    cwErrorMsgMedium: {
      fontSize: "0.75rem" //12
    },

    cwErrorMsgLarge: {
      fontSize: "0.875rem" //14
    },

    customTab: {
      fontSize: "0.75rem !important",
      //12
      color: "".concat(theme.palette.common.black, " !important"),
      flexDirection: "row !important",
      alignItems: "center !important",
      fontWeight: "".concat(400, " !important"),
      textTransform: "capitalize !important",
      textDecoration: "none !important",
      "&.Mui-selected": {
        fontWeight: "".concat(500, " !important"),
        border: "none !important",
        backgroundColor: "".concat(theme.palette.common.white, " !important"),
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      }
    },
    customTabs: {
      "&.MuiTabs-root": {
        position: "relative"
      },
      "& .MuiTabs-scrollButtons": {
        backgroundColor: "".concat(theme.palette.common.white, " !important"),
        width: "1.5rem",
        height: "1.5rem",
        margin: "auto 2px",
        borderRadius: "50%",
        boxShadow: "0px 2px 1px -1px rgba(0, 0, 0, 0.2)",
        filter: "drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12))",
        opacity: 1
      },
      "& .MuiTabs-scrollButtons:first-child": {
        position: "absolute",
        top: 0,
        bottom: 0,
        zIndex: 1
      },
      "& .MuiTabs-indicator": {
        backgroundColor: "transparent !important"
      },
      "& .MuiTab-root:first-child": {
        borderRadius: "0.75rem 0 0 0"
      },
      "& .Mui-disabled": {
        opacity: "0 !important"
      }
    },
    customTabsLabel: {
      padding: "0.5rem"
    },
    customTabPanel: {
      background: "#FFFFFF"
    },
    customPopper: {
      "&.MuiPaper-root": {
        // boxShadow: "0px 1px 24px rgba(92, 92, 92, 0.25)",
      },
      background: theme.palette.background.paper,
      borderRadius: theme.spacing(0.5),
      // padding: theme.spacing(1),
      zIndex: "1000"
    },
    customDialogContent: {
      "&.MuiDialogContent-root": {
        padding: " 0 1rem"
      }
    },
    customDialogActions: {
      "&.MuiDialogActions-root": {
        padding: "1.5rem 2rem"
      }
    }
  };
});
exports.useCustomStyles = useCustomStyles;
function getClassBySize(size, component, color, overrideColor) {
  var customClasses = overrideColor ? useCustomStyles({
    color: overrideColor
  }) : useCustomStyles();
  var errorstyle = "";
  var classes = " ".concat(customClasses.customGlobal);
  switch (size) {
    case "xs":
    case "xsmall":
      classes = " ".concat(customClasses.customGlobal, "  ").concat(customClasses.cwXSmallInputBase, " ");
      errorstyle = "".concat(customClasses.cwErrorMsg, " ").concat(customClasses.cwErrorMsgSmall);
      break;
    case "sm":
    case "small":
      classes = " ".concat(customClasses.customGlobal, "  ").concat(customClasses.cwSmallInputBase, " ");
      errorstyle = "".concat(customClasses.cwErrorMsg, " ").concat(customClasses.cwErrorMsgSmall);
      break;
    case "md":
    case "medium":
      classes = " ".concat(customClasses.customGlobal, "  ").concat(customClasses.cwMediumInputBase, " ");
      errorstyle = "".concat(customClasses.cwErrorMsg, " ").concat(customClasses.cwErrorMsgMedium);
      break;
    case "lg":
    case "large":
      classes = " ".concat(customClasses.customGlobal, "  ").concat(customClasses.cwLargeInputBase, " ");
      errorstyle = "".concat(customClasses.cwErrorMsg, " ").concat(customClasses.cwErrorMsgLarge);
      break;
    case "xl":
    case "xlarge":
      classes = " ".concat(customClasses.customGlobal, "  ").concat(customClasses.cwXLargeInputBase, " ");
      errorstyle = "".concat(customClasses.cwErrorMsg, " ").concat(customClasses.cwErrorMsgLarge);
      break;
    default:
      classes = "  ".concat(customClasses.customGlobal, " ");
      errorstyle = "".concat(customClasses.cwErrorMsg, " ").concat(customClasses.cwErrorMsgSmall);
  }
  classes = component ? "".concat(classes, "  ").concat(customClasses[component]) : "".concat(classes);
  return {
    classes: classes,
    errorstyle: errorstyle
  };
}
var groupedComponentTextSize = function groupedComponentTextSize(size, placement) {
  var options = {
    variant: "body2",
    direction: "row"
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
  switch (placement === null || placement === void 0 ? void 0 : placement.toLowerCase()) {
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
exports.groupedComponentTextSize = groupedComponentTextSize;
var getColorsProps = function getColorsProps(color, overrideColor) {
  var colorProps = {};
  if (!overrideColor) {
    colorProps = {
      color: color
    };
  }
  return colorProps;
};
exports.getColorsProps = getColorsProps;