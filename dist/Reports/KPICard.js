"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = _interopRequireDefault(require("@mui/material/Card"));
var _CardContent = _interopRequireDefault(require("@mui/material/CardContent"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _styles = require("@mui/styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
var useCustomStyles = (0, _styles.makeStyles)(function () {
  return {
    graphKPICard: {
      "&.MuiCard-root": {
        borderRadius: "10px",
        height: "92px",
        boxShadow: " 0px 4px 8px rgba(187, 210, 227, 0.25)"
      },
      containerPadding: {
        paddingBottom: "0.5rem"
      },
      weight500: {
        fontWeight: "500 !important"
      },
      weight700: {
        fontWeight: "700 !important"
      }
    }
  };
});
var KPICard = function KPICard(_ref) {
  var value = _ref.value,
    graphName = _ref.graphName,
    isLoading = _ref.isLoading;
  var classes = useCustomStyles();
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    elementid: "cwitm-kpi-card",
    className: classes.graphKPICard
  }, /*#__PURE__*/_react["default"].createElement(_CardContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    sx: {
      textAlign: "center"
    }
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    alignItems: "center",
    className: classes.containerPadding
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    width: "40%",
    height: 21,
    sx: {
      borderRadius: "4px"
    }
  })) : /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    alignItems: "center",
    className: classes.containerPadding
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    color: "text.primary",
    sx: {
      fontWeight: 500
    }
  }, value || 0)), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      fontWeight: 700
    },
    color: "primary.main"
  }, graphName || "Test"))));
};
var _default = KPICard;
exports["default"] = _default;