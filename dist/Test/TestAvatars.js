"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Avatars;
var _Avatar = _interopRequireDefault(require("../DataDisplay/Avatar"));
var _Badge = _interopRequireDefault(require("../DataDisplay/Badge"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _system = require("@mui/system");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// rds components

// material imports

function Avatars() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, "BasicUsageExample", /*#__PURE__*/React.createElement(BasicUsageExample, null)), /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, "AvatarSizesExample", /*#__PURE__*/React.createElement(AvatarSizesExample, null)), /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, "AvatarBadgeExample", /*#__PURE__*/React.createElement(AvatarBadgeExample, null)), /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, "AvatarShapeExample", /*#__PURE__*/React.createElement(AvatarShapeExample, null)), /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, "AvatarThemeExample", /*#__PURE__*/React.createElement(AvatarThemeExample, null)), /*#__PURE__*/React.createElement(_Grid["default"], {
    item: true
  }, "AvatarGenerateBackgroundExample", /*#__PURE__*/React.createElement(AvatarGenerateBackgroundExample, null))));
}
var BasicUsageExample = function BasicUsageExample() {
  return /*#__PURE__*/React.createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    name: "Arpita Lang"
  }));
};
var AvatarSizesExample = function AvatarSizesExample() {
  return /*#__PURE__*/React.createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "xs",
    name: "Scott Lang"
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "sm",
    name: "Scott Lang"
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    name: "Scott Lang"
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "lg",
    name: "Scott Lang"
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "xl",
    name: "Scott Lang"
  }));
};
var AvatarBadgeExample = function AvatarBadgeExample() {
  return /*#__PURE__*/React.createElement(_Stack["default"], {
    direction: "row",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_Badge["default"], {
    badgeContent: 4,
    color: "primary"
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    color: "primary",
    size: "md",
    name: "Scott Lang"
  })));
};
var AvatarShapeExample = function AvatarShapeExample() {
  return /*#__PURE__*/React.createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    overrideColor: "#643843",
    name: "Scott Lang"
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    overrideColor: "#99627A",
    name: "Scott Lang",
    variant: "rounded"
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    overrideColor: "#C88EA7",
    name: "Scott Lang",
    variant: "square"
  }));
};
var AvatarThemeExample = function AvatarThemeExample() {
  return /*#__PURE__*/React.createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    color: "primary",
    name: "Scott Lang"
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    color: "secondary",
    name: "Scott Lang"
  }));
};
var AvatarGenerateBackgroundExample = function AvatarGenerateBackgroundExample() {
  return /*#__PURE__*/React.createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    name: "opitdsa snkjaddsafas",
    generateBackground: true
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    name: "asnfkajsfkaf mandal",
    generateBackground: false
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    name: "wweqqwe mandal",
    generateBackground: true
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    name: " mandal",
    generateBackground: true
  }), /*#__PURE__*/React.createElement(_Avatar["default"], {
    size: "md",
    name: "arpidssta mandal",
    generateBackground: true
  }));
};