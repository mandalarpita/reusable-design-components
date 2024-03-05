"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogExample = DialogExample;
exports.LongText = LongText;
exports.XSDialog = XSDialog;
exports["default"] = TestDialog;
var _react = _interopRequireWildcard(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _styles = require("@mui/material/styles");
var _DialogContent = _interopRequireDefault(require("@mui/material/DialogContent"));
var _Button = _interopRequireDefault(require("../Inputs/Button"));
var _Dialog = _interopRequireDefault(require("../Feedback/Dialog"));
var _theme = require("../theme");
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
function TestDialog() {
  return /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(DialogExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(LongText, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(XSDialog, null))));
}
function DialogExample() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    confirmOpen = _useState2[0],
    setConfirmOpen = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    spacing: 2,
    alignItems: "start",
    justifyContent: "start"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "primary",
    onClick: function onClick() {
      setConfirmOpen(true);
    }
  }, "Click to proceed"), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: confirmOpen,
    title: "Confirm delete",
    setOpen: setConfirmOpen,
    maxWidth: "md",
    dialogActions: /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
      justifyContent: "end",
      direction: "row"
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      onClick: function onClick() {
        return setConfirmOpen(false);
      }
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "contained",
      onClick: function onClick() {
        alert("Clicked on Delete");
      }
    }, "Delete"))
  }, /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      color: "black"
    }
  }, "You are about to delete a system assigned to user. Click delete to proceed.")))))));
}
function LongText() {
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    confirmOpen = _useState4[0],
    setConfirmOpen = _useState4[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "row",
    spacing: 2,
    alignItems: "start",
    justifyContent: "start"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "primary",
    onClick: function onClick() {
      setConfirmOpen(true);
    }
  }, "Click to proceed"), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: confirmOpen,
    title: "Confirm delete",
    setOpen: setConfirmOpen,
    maxWidth: "md",
    dialogActions: /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
      justifyContent: "end",
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      onClick: function onClick() {
        return setConfirmOpen(false);
      }
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "contained",
      onClick: function onClick() {
        alert("Clicked on Delete");
      }
    }, "Delete"))
  }, /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      color: "black"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Volutpat odio facilisis mauris sit. Id semper risus in hendrerit gravida rutrum quisque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ornare arcu dui vivamus arcu felis bibendum. Nibh tortor id aliquet lectus proin nibh nisl. Urna nunc id cursus metus aliquam eleifend mi. Vel quam elementum pulvinar etiam. Lacus sed viverra tellus in hac habitasse platea dictumst. Gravida quis blandit turpis cursus in hac habitasse. Lacus sed turpis tincidunt id aliquet risus feugiat in. Arcu non odio euismod lacinia at quis risus sed. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Sit amet dictum sit amet justo donec enim. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Nunc mattis enim ut tellus elementum sagittis vitae et.", " "), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      color: "black"
    }
  }, "Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Metus aliquam eleifend mi in nulla posuere sollicitudin. Tempor commodo ullamcorper a lacus vestibulum sed. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Nec ullamcorper sit amet risus nullam eget felis. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Enim nunc faucibus a pellentesque sit amet. Tortor aliquam nulla facilisi cras fermentum odio eu. At volutpat diam ut venenatis tellus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. Rhoncus dolor purus non enim praesent elementum. Varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Est velit egestas dui id ornare arcu. Ultrices tincidunt arcu non sodales. Viverra nam libero justo laoreet sit amet cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis rhoncus urna neque viverra justo.", " "), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      color: "black"
    }
  }, "Dolor sed viverra ipsum nunc aliquet bibendum enim. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Sed nisi lacus sed viverra tellus in hac habitasse. Ipsum suspendisse ultrices gravida dictum fusce ut. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Eu non diam phasellus vestibulum. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Lectus sit amet est placerat in. Fusce ut placerat orci nulla pellentesque. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nibh tortor id aliquet lectus proin nibh nisl. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a erat nam. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Urna id volutpat lacus laoreet. Elementum nibh tellus molestie nunc non blandit massa. Tortor posuere ac ut consequat semper viverra nam libero. Eget nunc scelerisque viverra mauris in aliquam."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      color: "black"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc. Vivamus arcu felis bibendum ut tristique et egestas quis. Rhoncus est pellentesque elit ullamcorper dignissim. Velit sed ullamcorper morbi tincidunt ornare. Mollis aliquam ut porttitor leo a diam. Eget gravida cum sociis natoque penatibus et magnis dis. Eu facilisis sed odio morbi quis commodo. In nibh mauris cursus mattis molestie a. Metus aliquam eleifend mi in. Diam sit amet nisl suscipit adipiscing bibendum. Tristique nulla aliquet enim tortor at auctor. Tincidunt ornare massa eget egestas purus viverra. Pellentesque adipiscing commodo elit at imperdiet dui. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Rhoncus mattis rhoncus urna neque viverra. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Tempus urna et pharetra pharetra massa massa ultricies."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      color: "black"
    }
  }, "Imperdiet sed euismod nisi porta lorem mollis aliquam. Amet nulla facilisi morbi tempus iaculis. Pretium fusce id velit ut tortor pretium viverra. Nibh cras pulvinar mattis nunc sed blandit. At tellus at urna condimentum mattis pellentesque. Leo duis ut diam quam nulla porttitor massa id. Sem et tortor consequat id. Neque sodales ut etiam sit amet nisl purus in. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Bibendum est ultricies integer quis. Euismod quis viverra nibh cras pulvinar mattis nunc. Lacus laoreet non curabitur gravida. Pellentesque dignissim enim sit amet venenatis urna cursus. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Quis ipsum suspendisse ultrices gravida. Ante in nibh mauris cursus mattis molestie a. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Sit amet nisl suscipit adipiscing bibendum. Semper eget duis at tellus at urna. Non quam lacus suspendisse faucibus interdum. Eleifend donec pretium vulputate sapien nec sagittis. Faucibus scelerisque eleifend donec pretium. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nibh sit amet commodo nulla facilisi nullam. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Neque egestas congue quisque egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi. Urna porttitor rhoncus dolor purus non. Fusce ut placerat orci nulla pellentesque. Tortor aliquam nulla facilisi cras fermentum odio eu. Turpis massa tincidunt dui ut. Lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor condimentum lacinia quis. Vulputate mi sit amet mauris commodo quis. Amet dictum sit amet justo donec enim diam vulputate. Vel eros donec ac odio. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Sit amet est placerat in egestas. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Tristique senectus et netus et. Vitae suscipit tellus mauris a diam maecenas sed. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Vestibulum lorem sed risus ultricies. Faucibus purus in massa tempor. Volutpat ac tincidunt vitae semper. Suscipit adipiscing bibendum est ultricies integer. Posuere lorem ipsum dolor sit. Ut venenatis tellus in metus vulputate eu.")))))));
}
function XSDialog() {
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    confirmOpen = _useState6[0],
    setConfirmOpen = _useState6[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_styles.ThemeProvider, {
    theme: _theme.customTheme
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "primary",
    onClick: function onClick() {
      setConfirmOpen(true);
    }
  }, "Max width - xs"), /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    open: confirmOpen,
    title: "Confirm delete",
    setOpen: setConfirmOpen,
    maxWidth: "xs",
    dialogActions: /*#__PURE__*/_react["default"].createElement(_Stack["default"], {
      justifyContent: "end",
      direction: "row",
      spacing: 2
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      onClick: function onClick() {
        return setConfirmOpen(false);
      }
    }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      variant: "contained",
      onClick: function onClick() {
        alert("Clicked on Delete");
      }
    }, "Delete"))
  }, /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], null, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "body2",
    sx: {
      color: "black"
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Volutpat odio facilisis mauris sit. Id semper risus in hendrerit gravida rutrum quisque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ornare arcu dui vivamus arcu felis bibendum. Nibh tortor id aliquet lectus proin nibh nisl. Urna nunc id cursus metus aliquam eleifend mi. Vel quam elementum pulvinar etiam. Lacus sed viverra tellus in hac habitasse platea dictumst. Gravida quis blandit turpis cursus in hac habitasse. Lacus sed turpis tincidunt id aliquet risus feugiat in. Arcu non odio euismod lacinia at quis risus sed. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Sit amet dictum sit amet justo donec enim. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Nunc mattis enim ut tellus elementum sagittis vitae et.", " ")))));
}