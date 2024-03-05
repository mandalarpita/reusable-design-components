"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariantsChip = exports.ThemeingChip = exports.SizeOfChip = exports.Interactive = exports.DeleteIcon = exports.DeletableClickableChip = exports.DeletableChip = exports.Clickable = exports.ChipsArray = exports.ChipAdornments = exports.BorderRadiusChip = exports.BasicUsageExample = void 0;
exports["default"] = CustomChip;
var _react = _interopRequireWildcard(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _styles = require("@mui/material/styles");
var _theme = require("../theme");
var _Chip = _interopRequireDefault(require("../DataDisplay/Chip"));
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _Avatar = _interopRequireDefault(require("../DataDisplay/Avatar"));
var _RadioButton = _interopRequireDefault(require("../Inputs/RadioButton"));
var _Button = _interopRequireDefault(require("../Inputs/Button"));
var _Input = _interopRequireDefault(require("../Inputs/Input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // rds components
// material imports
// theme and external imports
function CustomChip() {
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
  }, /*#__PURE__*/_react["default"].createElement(SizeOfChip, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(VariantsChip, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ThemeingChip, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BorderRadiusChip, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DeletableChip, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(Clickable, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DeletableClickableChip, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DeleteIcon, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(ChipAdornments, null))));
}
var BasicUsageExample = function BasicUsageExample() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled",
    color: "primary",
    size: "xs"
  })));
};
exports.BasicUsageExample = BasicUsageExample;
var SizeOfChip = function SizeOfChip() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Size - XS",
    color: "primary",
    size: "xs"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Size - SM",
    color: "primary",
    size: "sm"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Size - MD",
    color: "secondary",
    size: "md"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Size - LG",
    color: "secondary",
    size: "lg"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Size - XL",
    color: "secondary",
    size: "xl"
  })));
};
exports.SizeOfChip = SizeOfChip;
var VariantsChip = function VariantsChip() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Outlined Variant",
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    variant: "outlined"
  })));
};
exports.VariantsChip = VariantsChip;
var ThemeingChip = function ThemeingChip() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "column",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Outlined Variant",
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    variant: "outlined"
  })), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    textColor: "#FDFEFE"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip outlined with variant no border color",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#D35400"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#DE3163"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined with border",
    variant: "outlined",
    borderColor: "#D7BDE2",
    backgroundColor: "#DE3163",
    textColor: "#DE3163"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined in light background",
    variant: "filled",
    backgroundColor: "#eae9f8",
    textColor: "#2F26B9",
    borderColor: "#2F26B9"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined with border",
    variant: "outlined",
    borderColor: "#196F3D",
    backgroundColor: "#DE3163",
    textColor: "#DE3163"
  }))));
};
exports.ThemeingChip = ThemeingChip;
var BorderRadiusChip = function BorderRadiusChip() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Default Border",
    color: "primary"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Border - 1rem",
    borderRadius: "1rem",
    color: "primary",
    variant: "outlined"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Border - 3rem",
    borderRadius: "3rem",
    backgroundColor: "#DE3163",
    textColor: "#FDFEFE"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Border - 50%",
    borderRadius: "50%",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#DE3163"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Border - theme.spacing",
    borderRadius: _theme.customTheme.spacing(2),
    variant: "outlined",
    borderColor: "#D7BDE2",
    backgroundColor: "#DE3163",
    textColor: "#DE3163"
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Border - 1 vh",
    variant: "outlined",
    borderRadius: "1vh",
    borderColor: "#196F3D",
    backgroundColor: "#DE3163",
    textColor: "#DE3163"
  })));
};
exports.BorderRadiusChip = BorderRadiusChip;
var DeletableChip = function DeletableChip() {
  var handleDelete = function handleDelete() {
    console.info("You clicked the delete icon.");
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary",
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Outlined Variant",
    color: "primary",
    variant: "outlined",
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    variant: "outlined",
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    textColor: "#FDFEFE",
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip outlined with variant no border color",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#D35400",
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#DE3163",
    onDelete: handleDelete
  })));
};
exports.DeletableChip = DeletableChip;
var Clickable = function Clickable() {
  var handleClick = function handleClick(e) {
    console.log("On Click of Chip");
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary",
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Outlined Variant",
    color: "primary",
    variant: "outlined",
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    variant: "outlined",
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    textColor: "#FDFEFE",
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip outlined with variant no border color",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#D35400",
    onClick: handleClick
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#DE3163",
    onClick: handleClick
  })));
};
exports.Clickable = Clickable;
var DeletableClickableChip = function DeletableClickableChip() {
  var handleClick = function handleClick(e) {
    console.log("On Click of Chip");
  };
  var handleDelete = function handleDelete() {
    console.info("You clicked the delete icon.");
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary",
    onClick: handleClick,
    size: "xs",
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    size: "sm",
    textColor: "#FDFEFE",
    onClick: handleClick,
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    size: "md",
    textColor: "#FDFEFE",
    onClick: handleClick,
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip outlined with variant no border color",
    variant: "outlined",
    size: "lg",
    backgroundColor: "#DE3163",
    textColor: "#D35400",
    onClick: handleClick,
    onDelete: handleDelete
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined",
    variant: "outlined",
    backgroundColor: "#DE3163",
    size: "xl",
    textColor: "#DE3163",
    onClick: handleClick,
    onDelete: handleDelete
  })));
};
exports.DeletableClickableChip = DeletableClickableChip;
var DeleteIcon = function DeleteIcon() {
  var handleClick = function handleClick(e) {
    console.log("On Click of Chip");
  };
  var handleDelete = function handleDelete() {
    console.info("You clicked the delete icon.");
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary",
    onClick: handleClick,
    size: "xs",
    onDelete: handleDelete,
    deleteIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "MaterialIcon.MdOutlineDelete"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    size: "sm",
    textColor: "#FDFEFE",
    onClick: handleClick,
    onDelete: handleDelete,
    deleteIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "MaterialIcon.MdOutlineDelete"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    size: "md",
    textColor: "#FDFEFE",
    onClick: handleClick,
    onDelete: handleDelete,
    deleteIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "MaterialIcon.MdOutlineDelete"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip outlined with variant no border color",
    variant: "outlined",
    size: "lg",
    backgroundColor: "#DE3163",
    textColor: "#D35400",
    onClick: handleClick,
    onDelete: handleDelete,
    deleteIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "MaterialIcon.MdOutlineDelete"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined",
    variant: "outlined",
    backgroundColor: "#DE3163",
    size: "xl",
    textColor: "#DE3163",
    onClick: handleClick,
    onDelete: handleDelete,
    deleteIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "MaterialIcon.MdOutlineDelete",
      size: "md"
    })
  })));
};
exports.DeleteIcon = DeleteIcon;
var ChipAdornments = function ChipAdornments() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "column",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Outlined Variant",
    color: "primary",
    variant: "outlined",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    variant: "outlined",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  })), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    size: "xs",
    backgroundColor: "#DE3163",
    textColor: "#FDFEFE",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip outlined with variant no border color",
    size: "sm",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#D35400",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined",
    variant: "outlined",
    size: "md",
    backgroundColor: "#DE3163",
    textColor: "#DE3163",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined with border",
    variant: "outlined",
    size: "lg",
    borderColor: "#D7BDE2",
    backgroundColor: "#DE3163",
    textColor: "#DE3163",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined in light background",
    variant: "outlined",
    size: "xl",
    backgroundColor: "#eae9f8",
    textColor: "#2F26B9",
    borderColor: "#2F26B9",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined with border",
    variant: "outlined",
    size: "xl",
    borderColor: "#196F3D",
    backgroundColor: "#DE3163",
    textColor: "#DE3163",
    avatar: /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      name: "Arpita Mandal"
    })
  })), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Default Variant",
    color: "primary",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Primary Outlined Variant",
    color: "primary",
    variant: "outlined",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Secondary Default Variant",
    color: "secondary",
    variant: "outlined",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  })), /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
    direction: "row",
    spacing: 2,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Filled without variant",
    backgroundColor: "#DE3163",
    size: "xs",
    textColor: "#FDFEFE",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip outlined with variant no border color",
    size: "sm",
    variant: "outlined",
    backgroundColor: "#DE3163",
    textColor: "#D35400",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined",
    variant: "outlined",
    backgroundColor: "#DE3163",
    size: "md",
    textColor: "#DE3163",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined with border",
    variant: "outlined",
    size: "lg",
    borderColor: "#D7BDE2",
    backgroundColor: "#DE3163",
    textColor: "#DE3163",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined in light background",
    variant: "filled",
    size: "xl",
    backgroundColor: "#eae9f8",
    textColor: "#2F26B9",
    borderColor: "#2F26B9",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }), /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Chip Outlined with border",
    variant: "outlined",
    size: "xl",
    borderColor: "#196F3D",
    backgroundColor: "#DE3163",
    textColor: "#DE3163",
    icon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      icon: "FontAwesome.FaUserAstronaut"
    })
  }))));
};
// Not fully done - skip
exports.ChipAdornments = ChipAdornments;
var Interactive = function Interactive() {
  var _useState = (0, _react.useState)("filled"),
    _useState2 = _slicedToArray(_useState, 2),
    variant = _useState2[0],
    setVariant = _useState2[1];
  var _useState3 = (0, _react.useState)("xs"),
    _useState4 = _slicedToArray(_useState3, 2),
    size = _useState4[0],
    setSize = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = _slicedToArray(_useState5, 2),
    textColor = _useState6[0],
    setTextColor = _useState6[1];
  var _useState7 = (0, _react.useState)(),
    _useState8 = _slicedToArray(_useState7, 2),
    backgroundColor = _useState8[0],
    setBackgroundColor = _useState8[1];
  var _useState9 = (0, _react.useState)(),
    _useState10 = _slicedToArray(_useState9, 2),
    borderColor = _useState10[0],
    setBorderColor = _useState10[1];
  var _useState11 = (0, _react.useState)("secondary"),
    _useState12 = _slicedToArray(_useState11, 2),
    color = _useState12[0],
    setColor = _useState12[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: "Interactive Chip",
    variant: variant,
    color: color,
    size: size
  }), /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    label: "Filled",
    value: "filled",
    checked: variant === "filled",
    onChange: function onChange(e, val) {
      setVariant("filled");
    }
  }), /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    label: "Outlined",
    value: "outlined",
    checked: variant === "outlined",
    onChange: function onChange(e, val) {
      setVariant("outlined");
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: function onClick(e, val) {
      setVariant();
    }
  }, "Reset"), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    label: "xs",
    value: "xs",
    checked: size === "xs",
    onChange: function onChange(e, val) {
      setSize("xs");
    }
  }), /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    label: "sm",
    value: "sm",
    checked: size === "sm",
    onChange: function onChange(e, val) {
      setSize("sm");
    }
  }), /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    label: "md",
    value: "md",
    checked: size === "md",
    onChange: function onChange(e, val) {
      setSize("md");
    }
  }), /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    label: "lg",
    value: "lg",
    checked: size === "lg",
    onChange: function onChange(e, val) {
      setSize("lg");
    }
  }), /*#__PURE__*/_react["default"].createElement(_RadioButton["default"], {
    label: "xl",
    value: "xl",
    checked: size === "xl",
    onChange: function onChange(e, val) {
      setSize("xl");
    }
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    onClick: function onClick(e, val) {
      setSize();
    }
  }, "Reset"), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: color,
    onChange: function onChange(e, val) {
      setColor(e);
    },
    placeholder: "set primary or secondary"
  }));
};
exports.Interactive = Interactive;
var ChipsArray = function ChipsArray() {};
exports.ChipsArray = ChipsArray;