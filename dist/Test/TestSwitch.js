"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemedSwitch = exports.SizesOfSwitch = exports.LabelSwitch = exports.DisabledRadioButton = void 0;
exports["default"] = TestSwitch;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Switch = _interopRequireDefault(require("../Inputs/Switch"));
var _theme = require("../theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function TestSwitch() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(SizesOfSwitch, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ThemedSwitch, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DisabledRadioButton, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(LabelSwitch, null))));
}
var SizesOfSwitch = function SizesOfSwitch() {
  return (
    /*#__PURE__*/
    // <BrowserWindow url="Example : Sizes of Switch">
    _react["default"].createElement(_styles.ThemeProvider, {
      theme: _theme.customTheme
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      size: "xs"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      size: "sm"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      size: "md"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      size: "lg"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      size: "xl"
    }))))
    // </BrowserWindow>
  );
};
exports.SizesOfSwitch = SizesOfSwitch;
var ThemedSwitch = function ThemedSwitch() {
  return (
    /*#__PURE__*/
    // <BrowserWindow url="Example : Themed Radio Button">
    _react["default"].createElement(_styles.ThemeProvider, {
      theme: _theme.customTheme
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      conatiner: true,
      spacing: "2"
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      color: "primary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      color: "secondary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      overrideColor: _theme.customTheme.palette.primary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      overrideColor: _theme.customTheme.palette.primary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      overrideColor: _theme.customTheme.palette.secondary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      overrideColor: _theme.customTheme.palette.secondary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      overrideColor: "#99627A"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      overrideColor: "#D25380"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      overrideColor: "#C4DFDF"
    })))))
    // </BrowserWindow>
  );
};
exports.ThemedSwitch = ThemedSwitch;
var DisabledRadioButton = function DisabledRadioButton() {
  return (
    /*#__PURE__*/
    // <BrowserWindow url="Example : Disabled Radio Button">
    _react["default"].createElement(_styles.ThemeProvider, {
      theme: _theme.customTheme
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      conatiner: true,
      spacing: "2"
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true,
      container: true,
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      color: "primary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      color: "secondary"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.primary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.primary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.secondary.light
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      overrideColor: _theme.customTheme.palette.secondary.dark
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      overrideColor: "#99627A"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      overrideColor: "#D25380"
    })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      disabled: true,
      checked: true,
      overrideColor: "#C4DFDF"
    })))))
    // </BrowserWindow>
  );
};
exports.DisabledRadioButton = DisabledRadioButton;
var LabelSwitch = function LabelSwitch() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    size: "xs",
    checked: false,
    label: "Create PR"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    size: "sm",
    label: "Placement - top",
    placement: "top"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    size: "md",
    label: "Placement - right",
    placement: "right"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    size: "lg",
    label: "Placement - bottom",
    placement: "bottom"
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
    size: "xl",
    label: "Placement - left",
    placement: "left"
  }))));
};
exports.LabelSwitch = LabelSwitch;