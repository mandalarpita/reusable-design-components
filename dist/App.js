"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _TestComponents = _interopRequireDefault(require("./Test/TestComponents"));
var _styles = require("@mui/styles");
var _material = require("@mui/material");
var _theme = require("./theme");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "App",
    style: {
      height: "calc(96vh)",
      margin: "0",
      overflow: "auto",
      padding: "1rem"
    }
  }, /*#__PURE__*/_react["default"].createElement(_TestComponents["default"], null));
}
var _default = App;
exports["default"] = _default;