"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariantsBadge = exports.ThemeBadge = exports.SizesBadge = exports.OnClickBadge = exports.BasicUsageExample = exports.BadgeVisibility = exports.BadgeAlignnment = void 0;
exports["default"] = CustomBadge;
var _react = _interopRequireDefault(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _styles = require("@mui/material/styles");
var _Badge = _interopRequireDefault(require("../DataDisplay/Badge"));
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// rds components
// material imports
// theme and external imports
function CustomBadge() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BasicUsageExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(SizesBadge, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ThemeBadge, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(VariantsBadge, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(OnClickBadge, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BadgeVisibility, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BadgeAlignnment, null))));
}
var BasicUsageExample = function BasicUsageExample() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary",
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }))));
};
exports.BasicUsageExample = BasicUsageExample;
var SizesBadge = function SizesBadge() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "xs",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "sm",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "md",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "lg",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    size: "xl",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }))));
};
exports.SizesBadge = SizesBadge;
var ThemeBadge = function ThemeBadge() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary",
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "secondary",
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary",
    overrideColor: _theme.customTheme.palette.primary.light,
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary",
    overrideColor: _theme.customTheme.palette.primary.light,
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "secondary",
    overrideColor: _theme.customTheme.palette.secondary.light,
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 4,
    color: "secondary",
    overrideColor: _theme.customTheme.palette.secondary.dark,
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }))));
};
exports.ThemeBadge = ThemeBadge;
var VariantsBadge = function VariantsBadge() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    color: "primary",
    size: "sm",
    badgeContent: " "
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    color: "secondary",
    size: "sm",
    badgeContent: " ",
    variant: "dot"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    color: "primary",
    overlap: "circular",
    badgeContent: " ",
    overrideColor: _theme.customTheme.palette.primary.light,
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    color: "primary",
    overlap: "circular",
    badgeContent: " ",
    variant: "dot",
    overrideColor: _theme.customTheme.palette.primary.light,
    size: "sm"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }))));
};
exports.VariantsBadge = VariantsBadge;
var OnClickBadge = function OnClickBadge() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 0,
    color: "primary",
    size: "sm",
    onClick: function onClick() {
      console.log("Add functions here");
    }
  }, "Check Console")));
};
exports.OnClickBadge = OnClickBadge;
var BadgeVisibility = function BadgeVisibility() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 0,
    color: "primary",
    size: "md"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 0,
    color: "primary",
    size: "md",
    showZero: true
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 400000,
    color: "primary",
    size: "md"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 400000,
    color: "primary",
    size: "md",
    max: 400000
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }))));
};
exports.BadgeVisibility = BadgeVisibility;
var BadgeAlignnment = function BadgeAlignnment() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 10,
    color: "primary",
    size: "md",
    anchorOrigin: {
      vertical: "top",
      horizontal: "left"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  })), /*#__PURE__*/_react["default"].createElement(_Badge["default"], {
    badgeContent: 10,
    color: "primary",
    size: "md",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    icon: "BoxIcon.BiSmile",
    hoverIcon: "BoxIcon.BiWinkSmile"
  }))));
};
exports.BadgeAlignnment = BadgeAlignnment;