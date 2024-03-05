"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _CherryworkLogo = _interopRequireDefault(require("../Assets/CherryworkLogo.svg"));
var _LinearProgress = _interopRequireDefault(require("@mui/material/LinearProgress"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// @params
// message - TEXT
// variant - options ( null/determinate)
// value - % needed for the progress
// function  - for logout of the user
// Button text - Example "refresh" or "logout"
// status - "loading, failure, success"
function LinearDeterminate(_ref) {
  var value = _ref.value;
  var _React$useState = _react["default"].useState(value[0]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    progress = _React$useState2[0],
    setProgress = _React$useState2[1];
  var initial = value[0];
  _react["default"].useEffect(function () {
    var timer = setInterval(function () {
      setProgress(function (oldProgress) {
        var increment = Math.floor(Math.random() * (value[1] - initial) + initial);
        initial = oldProgress + increment;
        return Math.min(initial, 100);
      });
    }, 500);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], {
    sx: {
      // margin: "10px 0px 10px 0px",
      width: "16%",
      height: "5px",
      borderRadius: "6px"
    },
    variant: "determinate",
    value: progress
  });
}
var LoadingApplication = function LoadingApplication(_ref2) {
  var message = _ref2.message,
    status = _ref2.status,
    variant = _ref2.variant,
    progressValue = _ref2.progressValue,
    onClick = _ref2.onClick,
    btnText = _ref2.btnText;
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    className: "cwitmSetHeight100"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _CherryworkLogo["default"],
    alt: "Logo",
    height: "60px",
    style: {
      marginBottom: "10px"
    }
  }), status === "loading" && variant === "determinate" && /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], {
    sx: {
      // margin: "10px 0px 10px 0px",
      width: "16%",
      height: "5px",
      borderRadius: "6px"
    }
  })
  // <LinearDeterminate value={progressValue || [0, 100]} />
  , status === "loading" && !variant && /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], {
    sx: {
      // margin: "10px 0px 10px 0px",
      width: "16%",
      height: "5px",
      borderRadius: "6px"
    }
  }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    sx: {
      fontSize: "16px !important",
      marginTop: "10px"
    },
    color: "text.primary",
    gutterBottom: true
  }, message), status === "failure" || status === "success" ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    size: "small",
    onClick: onClick
  }, btnText)) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
};
var _default = LoadingApplication;
exports["default"] = _default;