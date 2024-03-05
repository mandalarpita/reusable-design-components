"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/styles");
var AntIcon = _interopRequireWildcard(require("react-icons/ai"));
var BootstrapIcon = _interopRequireWildcard(require("react-icons/bs"));
var BoxIcon = _interopRequireWildcard(require("react-icons/bi"));
var CircumIcon = _interopRequireWildcard(require("react-icons/ci"));
var DevIcon = _interopRequireWildcard(require("react-icons/di"));
var FeatherIcon = _interopRequireWildcard(require("react-icons/fi"));
var FlatColorIcon = _interopRequireWildcard(require("react-icons/fc"));
var FontAwesomeIcon = _interopRequireWildcard(require("react-icons/fa"));
var FontAwesomeIcon6 = _interopRequireWildcard(require("react-icons/fa6"));
var GameIcon = _interopRequireWildcard(require("react-icons/gi"));
var GitIcon = _interopRequireWildcard(require("react-icons/go"));
var GrommetIcon = _interopRequireWildcard(require("react-icons/gr"));
var HeroIcon = _interopRequireWildcard(require("react-icons/hi"));
var HeroIcon2 = _interopRequireWildcard(require("react-icons/hi2"));
var IcoMoonIcon2 = _interopRequireWildcard(require("react-icons/im"));
var Icons8Icon = _interopRequireWildcard(require("react-icons/lia"));
var IonIcon = _interopRequireWildcard(require("react-icons/io"));
var IonIcon5 = _interopRequireWildcard(require("react-icons/io5"));
var LucideIcon = _interopRequireWildcard(require("react-icons/lu"));
var MaterialIcon = _interopRequireWildcard(require("react-icons/md"));
var PhosphorIcon = _interopRequireWildcard(require("react-icons/pi"));
var RadixIcon = _interopRequireWildcard(require("react-icons/rx"));
var RemixIcon = _interopRequireWildcard(require("react-icons/ri"));
var SimpleIcon = _interopRequireWildcard(require("react-icons/si"));
var SimpleLineIcon = _interopRequireWildcard(require("react-icons/sl"));
var TablerIcon = _interopRequireWildcard(require("react-icons/tb"));
var ThemifyIcon = _interopRequireWildcard(require("react-icons/tfi"));
var TypeIcon = _interopRequireWildcard(require("react-icons/ti"));
var VSCIcon = _interopRequireWildcard(require("react-icons/vsc"));
var CSSGGIcon = _interopRequireWildcard(require("react-icons/cg"));
var WeatherIcon = _interopRequireWildcard(require("react-icons/wi"));
var _customClasses = require("../customClasses");
var _system = require("@mui/system");
var _excluded = ["isSelected", "icon", "hoverIcon", "elementid"],
  _excluded2 = ["icon", "size", "height", "width", "color", "overrideColor"]; // Can be replaced with you style class
// Import the packages that you need in your project.
// Name the import to something we can easily identify
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
//  As per UX needs, icons are switched when hovered.
// Without hover - it is an outlined icon
// On hover - the icon is filled.
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
var useCustomStyles = (0, _styles.makeStyles)(function () {
  return {
    iconContainer: {
      alignItems: "center",
      "&:hover": {
        "& $outlineIcon": {
          display: "none"
        },
        "& $filledIcon": {
          display: "flex"
        }
      }
    },
    filledIcon: {
      display: "none"
    },
    outlineIcon: {
      display: "flex"
    }
  };
});
// { iconSrc, isSelected, onClick }
var Icon = function Icon(props) {
  var _props$isSelected = props.isSelected,
    isSelected = _props$isSelected === void 0 ? false : _props$isSelected,
    icon = props.icon,
    hoverIcon = props.hoverIcon,
    elementid = props.elementid,
    others = _objectWithoutProperties(props, _excluded);
  var classes = useCustomStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isSelected ? /*#__PURE__*/_react["default"].createElement(IconWrapper, _extends({}, others, {
    icon: hoverIcon,
    elementid: elementid
  })) : /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.iconContainer,
    elementid: elementid
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(classes.outlineIcon)
  }, /*#__PURE__*/_react["default"].createElement(IconWrapper, _extends({}, others, {
    icon: icon || hoverIcon
  }))), /*#__PURE__*/_react["default"].createElement("span", {
    className: "".concat(classes.filledIcon)
  }, /*#__PURE__*/_react["default"].createElement(IconWrapper, _extends({}, others, {
    icon: hoverIcon || icon
  })))));
};
var _default = Icon;
exports["default"] = _default;
var IconWrapper = function IconWrapper(_ref) {
  var _ref2, _icon4;
  var _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? MaterialIcon["MdDoNotDisturb"] : _ref$icon,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "xs" : _ref$size,
    height = _ref.height,
    width = _ref.width,
    color = _ref.color,
    overrideColor = _ref.overrideColor,
    others = _objectWithoutProperties(_ref, _excluded2);
  // const classes = getClassBySize(size, "customIcon", color, overrideColor);
  var theme = (0, _system.useTheme)();
  var colorProps = getColor(color, overrideColor, theme);
  var iconSrc = "MdDoNotDisturb";
  if (typeof icon === "string" || icon instanceof String) {
    var _icon;
    if (((_icon = icon) === null || _icon === void 0 ? void 0 : _icon.split(".").length) === 2) {
      var _icon2, _icon3;
      iconSrc = (_icon2 = icon) === null || _icon2 === void 0 ? void 0 : _icon2.split(".")[1];
      switch ((_icon3 = icon) === null || _icon3 === void 0 ? void 0 : _icon3.split(".")[0]) {
        case "AntIcon":
          icon = AntIcon[iconSrc];
          break;
        case "BootstrapIcon":
          icon = BootstrapIcon[iconSrc];
          break;
        case "BoxIcon":
          icon = BoxIcon[iconSrc];
          break;
        case "CircumIcon":
          icon = CircumIcon[iconSrc];
          break;
        case "DevIcon":
          icon = DevIcon[iconSrc];
          break;
        case "FeatherIcon":
          icon = FeatherIcon[iconSrc];
          break;
        case "FlatColorIcon":
          icon = FlatColorIcon[iconSrc];
          break;
        case "FontAwesomeIcon":
          icon = FontAwesomeIcon[iconSrc];
          break;
        case "FontAwesomeIcon6":
          icon = FontAwesomeIcon6[iconSrc];
          break;
        case "GameIcon":
          icon = GameIcon[iconSrc];
          break;
        case "GitIcon":
          icon = GitIcon[iconSrc];
          break;
        case "GrommetIcon":
          icon = GrommetIcon[iconSrc];
          break;
        case "HeroIcon":
          icon = HeroIcon[iconSrc];
          break;
        case "HeroIcon2":
          icon = HeroIcon2[iconSrc];
          break;
        case "IcoMoonIcon2":
          icon = IcoMoonIcon2[iconSrc];
          break;
        case "Icons8Icon":
          icon = Icons8Icon[iconSrc];
          break;
        case "IonIcon":
          icon = IonIcon[iconSrc];
          break;
        case "IonIcon5":
          icon = IonIcon5[iconSrc];
          break;
        case "LucideIcon":
          icon = LucideIcon[iconSrc];
          break;
        case "MaterialIcon":
          icon = MaterialIcon[iconSrc];
          break;
        case "PhosphorIcon":
          icon = PhosphorIcon[iconSrc];
          break;
        case "RadixIcon":
          icon = RadixIcon[iconSrc];
          break;
        case "RemixIcon":
          icon = RemixIcon[iconSrc];
          break;
        case "SimpleIcon":
          icon = SimpleIcon[iconSrc];
          break;
        case "SimpleLineIcon":
          icon = SimpleLineIcon[iconSrc];
          break;
        case "TablerIcon":
          icon = TablerIcon[iconSrc];
          break;
        case "ThemifyIcon":
          icon = ThemifyIcon[iconSrc];
          break;
        case "TypeIcon":
          icon = TypeIcon[iconSrc];
          break;
        case "VSCIcon":
          icon = VSCIcon[iconSrc];
          break;
        case "CSSGGIcon":
          icon = CSSGGIcon[iconSrc];
          break;
        case "WeatherIcon":
          icon = WeatherIcon[iconSrc];
          break;
        case "SVGIcon":
          icon = iconSrc;
          break;
        default:
          icon = (_ref2 = [(_icon4 = icon) === null || _icon4 === void 0 ? void 0 : _icon4.split(".")[0]]) === null || _ref2 === void 0 ? void 0 : _ref2[iconSrc];
      }
      if (!icon) {
        // If the icon is not fetched it will show this icon.
        icon = MaterialIcon["MdDoNotDisturb"];
      }
    }
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(icon, _objectSpread(_objectSpread({
      style: getHeightWidth(size, height, width)
    }, colorProps), others)));
  } else {
    return icon;
  }
};
var getHeightWidth = function getHeightWidth(size, height, width) {
  if (!height && !width) {
    // Both height and width are not present
    switch (size) {
      case "xs":
      case "xsmall":
        return {
          height: "1.125rem",
          width: "1.125rem"
        }; // 18

        break;
      case "sm":
      case "small":
        return {
          height: "1.5rem",
          width: "1.5rem"
        }; //24

        break;
      case "md":
      case "medium":
        return {
          height: "1.875rem",
          width: "1.875rem"
        }; //30 - 32

        break;
      case "lg":
      case "large":
        return {
          height: "2.25rem",
          width: "2.25rem"
        }; //36 - 48

        break;
      case "xl":
      case "xlarge":
        return {
          height: "2.75rem",
          width: "2.75rem"
        }; //36   -  64

        break;
      default:
        return {
          height: "1.125rem",
          width: "1.125rem"
        };
      // 18
    }
  } else if (!height) {
    // Height is not present, assign initial value to height
    return {
      height: width,
      width: width
    };
  } else if (!width) {
    // Width is not present, assign initial value to width
    return {
      height: height,
      width: height
    };
  } else {
    // Both height and width are present
    return {
      height: height,
      width: width
    };
  }
};
var getColor = function getColor(color, overrideColor, theme) {
  if (overrideColor) {
    return {
      color: overrideColor
    };
  } else if (color) {
    var _theme$palette, _theme$palette$color;
    return {
      color: ((_theme$palette = theme.palette) === null || _theme$palette === void 0 ? void 0 : (_theme$palette$color = _theme$palette[color]) === null || _theme$palette$color === void 0 ? void 0 : _theme$palette$color["main"]) || "#000000"
    };
  } else {
    return {};
  }
};