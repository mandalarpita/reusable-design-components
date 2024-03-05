"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CustomChip;
exports.getDimension = void 0;
var _react = _interopRequireDefault(require("react"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _customClasses = require("../customClasses");
var _styles = require("@mui/material/styles");
var _colorUtility = require("../Utility/colorUtility");
var _Icon = _interopRequireDefault(require("./Icon"));
var _styles2 = require("@mui/styles");
var _system = require("@mui/system");
var _excluded = ["size", "name", "children", "borderRadius", "avatar", "icon", "color", "deleteIcon", "elementid", "backgroundColor", "textColor", "borderColor", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
var getDimension = (0, _styles2.makeStyles)(function () {
  return {
    customDimension: {
      "&.MuiChip-root .MuiChip-avatar": {
        height: function height(_ref) {
          var size = _ref.size;
          return size === "xs" ? "18px" : "20px";
        },
        width: function width(_ref2) {
          var size = _ref2.size;
          return size === "xs" ? "18px" : "20px";
        },
        fontSize: function fontSize(_ref3) {
          var size = _ref3.size;
          return size === "xs" ? "0.5rem" : "0.6rem";
        }
      }
    },
    filledAvatar: {
      "&.MuiChip-root .MuiChip-avatar": {
        color: function color(_ref4) {
          var _color = _ref4.color;
          return _color;
        },
        backgroundColor: function backgroundColor(_ref5) {
          var _backgroundColor = _ref5.backgroundColor;
          return _backgroundColor;
        }
      }
    },
    outlinedAvatar: {
      "&.MuiChip-root .MuiChip-avatar": {
        borderColor: function borderColor(_ref6) {
          var color = _ref6.color;
          return color;
        },
        color: function color(_ref7) {
          var _color2 = _ref7.color;
          return _color2;
        },
        backgroundColor: "white"
      }
    }
  };
});

// default export of custom avater component takes src and name
exports.getDimension = getDimension;
function CustomChip(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    name = props.name,
    children = props.children,
    _props$borderRadius = props.borderRadius,
    borderRadius = _props$borderRadius === void 0 ? "10rem" : _props$borderRadius,
    avatar = props.avatar,
    icon = props.icon,
    color = props.color,
    deleteIcon = props.deleteIcon,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-chip" : _props$elementid,
    backgroundColor = props.backgroundColor,
    textColor = props.textColor,
    borderColor = props.borderColor,
    className = props.className,
    others = _objectWithoutProperties(props, _excluded);
  var classes = (0, _customClasses.getClassBySize)(size, "customChip", color);
  var colorProps = (0, _customClasses.getColorsProps)(color);
  var theme = (0, _system.useTheme)();
  function getIconColor() {
    var returnObj;
    if ((props === null || props === void 0 ? void 0 : props.variant) === "outlined") {
      returnObj = {
        backgroundColor: backgroundColor ? backgroundColor : theme.palette[color]["main"]
      };
    } else {
      returnObj = {
        backgroundColor: backgroundColor ? (0, _colorUtility.getContrastTextColor)(backgroundColor) : (0, _colorUtility.getContrastTextColor)(theme.palette[color]["main"])
      };
    }
    return returnObj;
  }
  function getAvatarColor() {
    var returnObj;
    if ((props === null || props === void 0 ? void 0 : props.variant) === "outlined") {
      returnObj = {
        color: backgroundColor ? (0, _colorUtility.getContrastTextColor)(backgroundColor) : (0, _colorUtility.getContrastTextColor)(theme.palette[color]["main"]),
        backgroundColor: backgroundColor || theme.palette[color]["main"]
      };
    } else {
      returnObj = {
        backgroundColor: backgroundColor ? (0, _colorUtility.getContrastTextColor)(backgroundColor) : (0, _colorUtility.getContrastTextColor)(theme.palette[color]["main"]),
        color: backgroundColor || theme.palette[color]["main"]
      };
    }
    return returnObj;
  }
  if (props !== null && props !== void 0 && props.onDelete && !deleteIcon) {
    deleteIcon = /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "IonIcon.IoIosCloseCircle"
    });
  }
  if (deleteIcon && !deleteIcon.props.size) {
    deleteIcon = _objectSpread(_objectSpread({}, deleteIcon), {}, {
      props: _objectSpread(_objectSpread({}, deleteIcon.props), {}, {
        size: size === "xs" ? "xs" : size == "sm" ? "sm" : "md"
      })
    });
  }
  if (icon && !icon.props.size) {
    icon = _objectSpread(_objectSpread({}, icon), {}, {
      props: _objectSpread(_objectSpread({}, icon.props), {}, {
        size: "xs"
      })
    });
  }
  if (icon && !icon.props.color && !icon.props.overrideColor) {
    var getCoo = getIconColor();
    icon = _objectSpread(_objectSpread({}, icon), {}, {
      props: _objectSpread(_objectSpread({}, icon.props), {}, {
        backgroundColor: getCoo.backgroundColor
      })
    });
  }
  if (avatar && !avatar.props.size) {
    if (!avatar.props.size && size !== "xs" && size !== "sm") {
      avatar = _objectSpread(_objectSpread({}, avatar), {}, {
        props: _objectSpread(_objectSpread({}, avatar.props), {}, {
          size: "md"
        })
      });
    } else if (!avatar.props.size && (size === "sm" || size === "xs")) {
      var sizeSmall = getDimension({
        size: size
      });
      className = "".concat(className, " ").concat(sizeSmall.customDimension);
    }
    // Add logic for color of avatar
    if (avatar.props) {
      var colors = getAvatarColor();
      var getColor = getDimension(colors);
      className = "".concat(className, " ").concat(getColor.filledAvatar);
    }
  }
  return /*#__PURE__*/_react["default"].createElement(_Chip["default"], _extends({
    disableTouchRipple: true
  }, colorProps, {
    deleteIcon: deleteIcon,
    icon: icon,
    avatar: avatar,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes),
    sx: props !== null && props !== void 0 && props.color ? _objectSpread(_objectSpread({}, others === null || others === void 0 ? void 0 : others.sx), {}, {
      borderRadius: borderRadius
    }) : _objectSpread(_objectSpread({}, others === null || others === void 0 ? void 0 : others.sx), {}, {
      borderRadius: borderRadius
    }, getStyles(props === null || props === void 0 ? void 0 : props.variant, backgroundColor, borderColor, textColor)),
    elementid: elementid
  }, others));
}
function getStyles(variant, backgroundColor, borderColor, textColor) {
  var styles = {
    color: textColor
  };
  if (!variant || variant === "filled") {
    var customStyle = {
      backgroundColor: backgroundColor ? backgroundColor : (0, _styles.alpha)(textColor, 0.05),
      "&.MuiChip-root:hover": {
        backgroundColor: backgroundColor ? backgroundColor : (0, _styles.alpha)(textColor, 0.05)
      },
      "&.MuiChip-root .MuiChip-deleteIcon": {
        color: "rgba(255, 255, 255, 0.7)"
      },
      "&.MuiChip-root .MuiChip-deleteIcon:hover": {
        color: "rgba(255, 255, 255, 0.9)"
      }
    };
    styles = _objectSpread(_objectSpread({}, customStyle), styles); //check opacity if background color is not there
    if (borderColor) {
      styles = _objectSpread(_objectSpread({}, styles), {}, {
        borderColor: borderColor,
        border: "1px solid"
      });
    }
  } else {
    var _customStyle = {
      borderColor: borderColor ? borderColor : textColor,
      "&.MuiChip-root:hover": {
        backgroundColor: borderColor || textColor ? (0, _colorUtility.getLighterBackground)(borderColor || textColor, "0a") : "red"
      },
      "&.MuiChip-root .MuiChip-deleteIcon:hover": {
        color: (0, _colorUtility.getLighterBackground)(borderColor || textColor, "db")
      },
      "&.MuiChip-root .MuiChip-deleteIcon": {
        color: (0, _colorUtility.getLighterBackground)(borderColor || textColor, "b3")
      }
    };
    styles = _objectSpread(_objectSpread({}, _customStyle), styles);
  }
  return styles;
}