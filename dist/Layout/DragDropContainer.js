"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _map = _interopRequireDefault(require("lodash/map"));
var _range = _interopRequireDefault(require("lodash/range"));
var _random = _interopRequireDefault(require("lodash/random"));
var _reactGridLayout = require("react-grid-layout");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var ResponsiveReactGridLayout = (0, _reactGridLayout.WidthProvider)(_reactGridLayout.Responsive);

// Please Note ---- Added by Arpita 16/03/22
// Temporary fix- hidden expand icon for all non static div.
// To fix we can have ".react-grid-item > .react-resizable-handle " this in makestyle and add span with this classname in the generate dom
// In future updates will be replacing the parent library with some other library
var DragDropContainer = /*#__PURE__*/function (_React$Component) {
  _inherits(DragDropContainer, _React$Component);
  var _super = _createSuper(DragDropContainer);
  function DragDropContainer(props) {
    var _this;
    _classCallCheck(this, DragDropContainer);
    _this = _super.call(this, props);
    _this.state = {
      currentBreakpoint: props.currentBreakpoint,
      compactType: props.compactType,
      mounted: props.mounted,
      layouts: {
        lg: props.layouts
      },
      layout: props.layout,
      styles: props.styles
    };
    _this.onLayoutChange = _this.onLayoutChange.bind(_assertThisInitialized(_this));
    _this.onBreakpointChange = _this.onBreakpointChange.bind(_assertThisInitialized(_this));
    _this.onLayoutChange = _this.onLayoutChange.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DragDropContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        mounted: true
      });
    }
  }, {
    key: "generateDOM",
    value: function generateDOM(border) {
      return (0, _map["default"])(this.state.layouts.lg, function (l, i) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: i,
          style: border
        }, l.render);
      });
    }
  }, {
    key: "onBreakpointChange",
    value: function onBreakpointChange(breakpoint) {
      var _this$props;
      this.setState({
        currentBreakpoint: breakpoint
      });
      (_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.onBreakpointChange(breakpoint);
    }
  }, {
    key: "onLayoutChange",
    value: function onLayoutChange(layout, layouts) {
      var _this$props2;
      this.setState({
        layout: layout
      });
      (_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.onLayoutChange(layout, layouts);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, this.props.children, /*#__PURE__*/_react["default"].createElement(ResponsiveReactGridLayout, _extends({}, this.props, {
        layouts: this.state.layouts,
        cols: {
          lg: 12,
          md: 10,
          sm: 6,
          xs: 4,
          xxs: 2
        },
        breakpoints: {
          lg: 1200,
          md: 996,
          sm: 768,
          xs: 480,
          xxs: 0
        }
        // rowHeight={300}
        // width={1000}
        // onBreakpointChange={this.onBreakpointChange}
        // onLayoutChange={this.onLayoutChange}
        // WidthProvider option
        ,
        measureBeforeMount: false
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        ,
        useCSSTransforms: this.state.mounted,
        compactType: this.state.compactType,
        preventCollision: !this.state.compactType
      }), this.generateDOM(this.state.styles)));
    }
  }]);
  return DragDropContainer;
}(_react["default"].Component);
exports["default"] = DragDropContainer;
DragDropContainer.propTypes = {
  onLayoutChange: _propTypes["default"].func.isRequired
};
DragDropContainer.defaultProps = {
  className: "layout",
  rowHeight: 30,
  compactType: "horizontal",
  cols: {
    lg: 12,
    md: 10,
    sm: 6,
    xs: 4,
    xxs: 2
  },
  children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
  mounted: false,
  layouts: {
    lg: generateLayout()
  },
  layout: [],
  onBreakpointChange: function onBreakpointChange() {},
  onLayoutChange: function onLayoutChange() {}
};
function generateLayout() {
  var temp = (0, _map["default"])((0, _range["default"])(0, 10), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (0, _random["default"])(0, 5) * 2 % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      "static": false
    };
  });
  return temp;
}