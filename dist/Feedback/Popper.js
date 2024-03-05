"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Popper;
var React = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
var _Fade = _interopRequireDefault(require("@mui/material/Fade"));
var _Paper = _interopRequireDefault(require("@mui/material/Paper"));
var _styles = require("@mui/styles");
var _customClasses = require("../customClasses");
var _excluded = ["children", "open", "onClose", "anchorEl", "elementid", "placement"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function useOnClickOutside(ref, handler) {
  (0, React.useEffect)(function () {
    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("scroll", listener);
    return function () {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.removeEventListener("scroll", listener);
    };
  },
  // Add ref and handler to effect dependencies
  // It's worth noting that because passed in handler is a new ...
  // ... function on every render that will cause this effect ...
  // ... callback/cleanup to run every render. It's not a big deal ...
  // ... but to optimize you can wrap handler in useCallback before ...
  // ... passing it into this hook.
  [ref, handler]);
}
function Popper(props) {
  var children = props.children,
    open = props.open,
    onClose = props.onClose,
    anchorEl = props.anchorEl,
    _props$elementid = props.elementid,
    elementid = _props$elementid === void 0 ? "cw-design-system-popper" : _props$elementid,
    placement = props.placement,
    others = _objectWithoutProperties(props, _excluded);
  var classes = (0, _customClasses.useCustomStyles)();
  var ref = React.useRef();
  useOnClickOutside(ref, function (e) {
    return onClose(e);
  });
  return /*#__PURE__*/React.createElement(_material.Popper, _extends({
    elementid: elementid,
    sx: {
      zIndex: 1000
    },
    open: open,
    ref: ref,
    anchorEl: anchorEl,
    placement: placement,
    transition: true
  }, others), function (_ref) {
    var TransitionProps = _ref.TransitionProps;
    return /*#__PURE__*/React.createElement(_Fade["default"], _extends({}, TransitionProps, {
      timeout: 350
    }), /*#__PURE__*/React.createElement(_Paper["default"], {
      className: classes.popperCard
    }, children));
  });
}

// To use a Popper, follow these lines

// In the parent component:

// const [anchorEl, setAnchorEl] = useState(false);
// const [open, setOpen] = useState(false);

// const handleClick = (placement, event) => {
//   setAnchorEl(event?.currentTarget || null);
//   setOpen((prev) => placement !== placement || !prev);
// };

// Call popper
// <Popper
// open={open}
// anchorEl={anchorEl}
// placement={"bottom"}
// onClose={() => {
//   handleClick(null);
// }}
// >