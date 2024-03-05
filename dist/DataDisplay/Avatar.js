"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.customColors = void 0;
exports["default"] = Avatar;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _customClasses = require("../customClasses");
var _colorUtility = require("../Utility/colorUtility");
var _system = require("@mui/system");
var _theme = require("../theme");
var _excluded = ["size", "name", "alt", "children", "elementid", "overrideColor", "className", "generateBackground"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// default export of custom avater component takes src and name
function Avatar(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? "md" : _props$size,
    name = props.name,
    _props$alt = props.alt,
    alt = _props$alt === void 0 ? "" : _props$alt,
    children = props.children,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-avatar" : _props$elementid,
    overrideColor = props.overrideColor,
    className = props.className,
    _props$generateBackgr = props.generateBackground,
    generateBackground = _props$generateBackgr === void 0 ? false : _props$generateBackgr,
    others = _objectWithoutProperties(props, _excluded);
  var classes = "";
  if (!name) {
    name = alt;
  }
  var theme = (0, _system.useTheme)();
  if (props.color === "secondary" && !overrideColor) {
    var _theme$palette, _theme$palette$second, _customTheme$palette, _customTheme$palette$;
    overrideColor = (theme === null || theme === void 0 ? void 0 : (_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$second = _theme$palette.secondary) === null || _theme$palette$second === void 0 ? void 0 : _theme$palette$second.main) || (_theme.customTheme === null || _theme.customTheme === void 0 ? void 0 : (_customTheme$palette = _theme.customTheme.palette) === null || _customTheme$palette === void 0 ? void 0 : (_customTheme$palette$ = _customTheme$palette.secondary) === null || _customTheme$palette$ === void 0 ? void 0 : _customTheme$palette$.main);
  }
  if (overrideColor || generateBackground) {
    classes = (0, _customClasses.getClassBySize)(size, "");
    var customColorsClasses;
    if (overrideColor) {
      customColorsClasses = customColors({
        backgroundColor: overrideColor,
        color: (0, _colorUtility.getContrastTextColor)(overrideColor)
      });
    } else if (generateBackground) {
      var randomColors = (0, _colorUtility.getAvatarColors)(stringAvatar(name));
      customColorsClasses = customColors({
        backgroundColor: randomColors.backgroundColor,
        color: "white"
      });
    }
    classes.classes = " ".concat(classes.classes, "  ").concat(customColorsClasses.runtimeColors, " ");
  } else {
    classes = (0, _customClasses.getClassBySize)(size, "customAvatar");
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Avatar, _extends({
    elementid: elementid,
    disableTouchRipple: true,
    className: className ? "".concat(classes.classes, " ").concat(className, " ") : "".concat(classes.classes)
  }, others), stringAvatar(name));
}
function generateBackground(overrideColor, generateBackground) {}
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
var customColors = (0, _styles.makeStyles)(function () {
  return {
    runtimeColors: {
      "&.MuiAvatar-root": {
        color: function color(_ref) {
          var _color = _ref.color;
          return _color;
        },
        backgroundColor: function backgroundColor(_ref2) {
          var _backgroundColor = _ref2.backgroundColor;
          return _backgroundColor;
        }
      }
    }
  };
});
exports.customColors = customColors;
function stringAvatar(name) {
  name = name.toUpperCase() || "";
  var splittedName = [""];
  if (name) {
    splittedName = name.trim().split(",")[0].split(" ");
  }
  return splittedName.length > 1 ? "".concat(splittedName[0][0]).concat(splittedName[splittedName.length - 1][0]) : splittedName[0].length > 0 ? "".concat(splittedName[0][0]) : "";
}

// generateBackground - generate from a palette
// override colors  - take the color
// default - if dark