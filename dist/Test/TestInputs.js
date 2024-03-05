"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Inputs;
var _react = _interopRequireWildcard(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _Input = _interopRequireDefault(require("../Inputs/Input"));
var _material = require("@mui/material");
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _reactHookForm = require("react-hook-form");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function Inputs() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(BasicUsageExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputSizesExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputTypesExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputWithIconsExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputPlaceholderExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputCharacterCountExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputHelperTextExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputMultilineExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputMultilineSizesExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputMultiLineCharacterCountExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputReadOnlyExample, null)), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(InputDisabledExample, null))));
}
var BasicUsageExample = function BasicUsageExample() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], null));
};
var InputSizesExample = function InputSizesExample() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    xs = _useState2[0],
    setXS = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    sm = _useState4[0],
    setSM = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    md = _useState6[0],
    setMD = _useState6[1];
  var _useState7 = (0, _react.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    lg = _useState8[0],
    setLG = _useState8[1];
  var _useState9 = (0, _react.useState)(""),
    _useState10 = _slicedToArray(_useState9, 2),
    xl = _useState10[0],
    setXL = _useState10[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "xs",
    placeholder: "Input Size -  xs",
    value: xs,
    onChange: function onChange(e) {
      setXS(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "sm",
    placeholder: "Input Size -  sm",
    value: sm,
    onChange: function onChange(e) {
      setSM(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "md",
    placeholder: "Input Size -  md",
    value: md,
    onChange: function onChange(e) {
      setMD(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "lg",
    placeholder: "Input Size -  lg",
    value: lg,
    onChange: function onChange(e) {
      setLG(e);
    }
  }), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "xl",
    placeholder: "Input Size -  xl",
    value: xl,
    onChange: function onChange(e) {
      setXL(e);
    }
  }));
};
var InputTypesExample = function InputTypesExample() {
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    text = _useState12[0],
    setText = _useState12[1];
  var _useState13 = (0, _react.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    number = _useState14[0],
    setNumber = _useState14[1];
  var _useState15 = (0, _react.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    password = _useState16[0],
    setPassword = _useState16[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "xs",
    value: text,
    placeholder: " Type Text",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "sm",
    value: password,
    placeholder: "Type password",
    type: "password",
    onChange: function onChange(e) {
      setPassword(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "md",
    value: number,
    placeholder: "Type Number",
    type: "number",
    onChange: function onChange(e) {
      setNumber(e);
    }
  }));
};
var InputWithIconsExample = function InputWithIconsExample() {
  var _useState17 = (0, _react.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    text = _useState18[0],
    setText = _useState18[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "BoxIcon.BiSmile",
        hoverIcon: "BoxIcon.BiWinkSmile"
      }))
    },
    placeholder: "Start Adornment",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    },
    showCount: true
    // maxLength={100}
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    InputProps: {
      endAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "BoxIcon.BiSmile",
        hoverIcon: "BoxIcon.BiWinkSmile"
      }))
    },
    placeholder: "End Adornment",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    InputProps: {
      endAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "BoxIcon.BiSmile",
        hoverIcon: "BoxIcon.BiWinkSmile"
      })),
      startAdornment: /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        icon: "RemixIcon.RiAppsFill",
        hoverIcon: "RemixIcon.RiAppsFill"
      }))
    },
    placeholder: "Start and End Adornment",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    }
  }));
};
var InputPlaceholderExample = function InputPlaceholderExample() {
  var _useState19 = (0, _react.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    text = _useState20[0],
    setText = _useState20[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    placeholder: "Placeholder Text",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    }
  }));
};
var InputCharacterCountExample = function InputCharacterCountExample() {
  var _useState21 = (0, _react.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    textWithoutMessage = _useState22[0],
    setTextWithMessage = _useState22[1];
  var _useState23 = (0, _react.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    text = _useState24[0],
    setText = _useState24[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: textWithoutMessage,
    placeholder: "Charater limit Example",
    type: "text",
    onChange: function onChange(e) {
      setTextWithMessage(e);
    },
    showCount: true,
    rules: {
      required: "Required",
      maxLength: {
        value: 25,
        message: ""
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    placeholder: "Charater limit with maxLength",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    },
    showCount: true,
    rules: {
      required: "Required",
      maxLength: 10
    }
  }));
};
var InputHelperTextExample = function InputHelperTextExample() {
  var _useState25 = (0, _react.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    textLg = _useState26[0],
    setTextLg = _useState26[1];
  var _useState27 = (0, _react.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    text = _useState28[0],
    setText = _useState28[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    placeholder: "Helper Text with Max Count",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    },
    helperText: "Some important text",
    showCount: true,
    rules: {
      required: "Required",
      maxLength: 10
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: textLg,
    placeholder: "Helper Text for larger input",
    type: "text",
    onChange: function onChange(e) {
      setTextLg(e);
    },
    showCount: true,
    size: "lg",
    helperText: "Some important text"
  }));
};
var InputMultilineSizesExample = function InputMultilineSizesExample() {
  var _useState29 = (0, _react.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    multilineText = _useState30[0],
    setMultilineText = _useState30[1];
  var _useState31 = (0, _react.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    rowsText = _useState32[0],
    setRowsText = _useState32[1];
  var _useState33 = (0, _react.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    maxRowsText = _useState34[0],
    setMaxRowsText = _useState34[1];
  var _useState35 = (0, _react.useState)(""),
    _useState36 = _slicedToArray(_useState35, 2),
    rowsWithMaxRowsText = _useState36[0],
    setRowsWithMaxRows = _useState36[1];
  var _useState37 = (0, _react.useState)(""),
    _useState38 = _slicedToArray(_useState37, 2),
    rowsWithMaxRowsTextXL = _useState38[0],
    setRowsWithMaxRowsXL = _useState38[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    size: "xs",
    placeholder: "xs - Rows (3)",
    multiline: true,
    rows: 3,
    value: multilineText,
    onChange: function onChange(e) {
      setMultilineText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "sm - Rows (3)",
    multiline: true,
    size: "sm",
    rows: 3,
    value: rowsText,
    onChange: function onChange(e) {
      setRowsText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "md - Rows (3)",
    multiline: true,
    size: "md",
    rows: 3,
    value: maxRowsText,
    onChange: function onChange(e) {
      setMaxRowsText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "lg - Rows (3)",
    size: "lg",
    multiline: true,
    rows: 3,
    value: rowsWithMaxRowsText,
    onChange: function onChange(e) {
      setRowsWithMaxRows(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "xl - Rows (3) ",
    size: "xl",
    multiline: true,
    rows: 3,
    maxRows: 10,
    value: rowsWithMaxRowsTextXL,
    onChange: function onChange(e) {
      setRowsWithMaxRowsXL(e);
    }
  }));
};
var InputMultilineExample = function InputMultilineExample() {
  var _useState39 = (0, _react.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    multilineText = _useState40[0],
    setMultilineText = _useState40[1];
  var _useState41 = (0, _react.useState)(""),
    _useState42 = _slicedToArray(_useState41, 2),
    rowsText = _useState42[0],
    setRowsText = _useState42[1];
  var _useState43 = (0, _react.useState)(""),
    _useState44 = _slicedToArray(_useState43, 2),
    maxRowsText = _useState44[0],
    setMaxRowsText = _useState44[1];
  var _useState45 = (0, _react.useState)("Rows and Max rows together does not show up, it is not supported by MUI at the time of publish |"),
    _useState46 = _slicedToArray(_useState45, 2),
    rowsWithMaxRowsText = _useState46[0],
    setRowsWithMaxRows = _useState46[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "No rows or max rows defined Default Size - (md)",
    multiline: true,
    value: multilineText,
    onChange: function onChange(e) {
      setMultilineText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "Rows set to 4 - Default Size - (md)",
    multiline: true,
    rows: 4,
    value: rowsText,
    onChange: function onChange(e) {
      setRowsText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "Max Rows set to 10 Default Size - (md)",
    multiline: true,
    maxRows: 10,
    value: maxRowsText,
    onChange: function onChange(e) {
      setMaxRowsText(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "Rows and Max rows together does not show up, it is not supported by MUI at the time of publish | Rows (4) and max rows (10) defined Default Size - (md)",
    multiline: true,
    rows: 4,
    maxRows: 10,
    value: rowsWithMaxRowsText,
    onChange: function onChange(e) {
      setRowsWithMaxRows(e);
    }
  }));
};
var InputMultiLineCharacterCountExample = function InputMultiLineCharacterCountExample() {
  var _useState47 = (0, _react.useState)(""),
    _useState48 = _slicedToArray(_useState47, 2),
    textWithoutMessage = _useState48[0],
    setTextWithMessage = _useState48[1];
  var _useState49 = (0, _react.useState)(""),
    _useState50 = _slicedToArray(_useState49, 2),
    text = _useState50[0],
    setText = _useState50[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: textWithoutMessage,
    placeholder: "Charater limit Example",
    type: "text",
    multiline: true,
    rows: 4,
    maxRows: 10,
    onChange: function onChange(e) {
      setTextWithMessage(e);
    },
    showCount: true,
    rules: {
      required: "Required",
      maxLength: {
        value: 25,
        message: ""
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    placeholder: "Charater limit with maxLength",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    },
    multiline: true,
    maxRows: 4,
    showCount: true,
    rules: {
      required: "Required",
      maxLength: 10
    }
  }));
};
var InputReadOnlyExample = function InputReadOnlyExample() {
  var _useState51 = (0, _react.useState)("This is Read Only text in Input Control"),
    _useState52 = _slicedToArray(_useState51, 2),
    text = _useState52[0],
    setText = _useState52[1];
  var _useState53 = (0, _react.useState)("This is Read Only text in Input Multiline Control"),
    _useState54 = _slicedToArray(_useState53, 2),
    multilineText = _useState54[0],
    setMultilineText = _useState54[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    onChange: function onChange(e) {
      setText(e);
    },
    InputProps: {
      readOnly: true
    }
  }), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: multilineText,
    onChange: function onChange(e) {
      setMultilineText(e);
    },
    InputProps: {
      readOnly: true
    },
    multiline: true,
    rows: 3
  }));
};
var InputDisabledExample = function InputDisabledExample() {
  var _useState55 = (0, _react.useState)("This is Disabled text in Input Control"),
    _useState56 = _slicedToArray(_useState55, 2),
    text = _useState56[0],
    setText = _useState56[1];
  var _useState57 = (0, _react.useState)("This is Disabled text in Input Multiline Control"),
    _useState58 = _slicedToArray(_useState57, 2),
    multilineText = _useState58[0],
    setMultilineText = _useState58[1];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    onChange: function onChange(e) {
      setText(e);
    },
    InputProps: {
      readOnly: true
    },
    disabled: true
  }), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: multilineText,
    onChange: function onChange(e) {
      setMultilineText(e);
    },
    InputProps: {
      readOnly: true
    },
    disabled: true,
    multiline: true,
    rows: 3
  }));
};
var InputCharacterCountRHFExample = function InputCharacterCountRHFExample() {
  var _useState59 = (0, _react.useState)(""),
    _useState60 = _slicedToArray(_useState59, 2),
    textWithoutMessage = _useState60[0],
    setTextWithMessage = _useState60[1];
  var _useState61 = (0, _react.useState)(""),
    _useState62 = _slicedToArray(_useState61, 2),
    text = _useState62[0],
    setText = _useState62[1];
  var _useForm = (0, _reactHookForm.useForm)({
      defaultValues: {
        graphName: "",
        graphType: ""
      }
    }),
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    formState = _useForm.formState;
  var onSubmit = function onSubmit(payload) {
    console.log("submited");
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "Placeholder Text",
    type: "text",
    control: control,
    name: "graphName",
    rules: {
      required: "Required",
      maxLength: 7
    },
    errors: formState === null || formState === void 0 ? void 0 : formState.errors,
    showCount: true
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    placeholder: "Placeholder Text",
    type: "text",
    control: control,
    name: "graphType",
    rules: {
      required: "Required",
      maxLength: {
        value: 10,
        message: "graphType - Character limit exceeded"
      }
    },
    errors: formState === null || formState === void 0 ? void 0 : formState.errors,
    showCount: true
  })), /*#__PURE__*/_react["default"].createElement("p", null), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: textWithoutMessage,
    placeholder: "Placeholder Text",
    type: "text",
    onChange: function onChange(e) {
      setTextWithMessage(e);
    },
    showCount: true,
    rules: {
      required: "Required",
      maxLength: {
        value: 25,
        message: "Character limit exceeded"
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    value: text,
    placeholder: "Placeholder Text",
    type: "text",
    onChange: function onChange(e) {
      setText(e);
    },
    showCount: true,
    rules: {
      required: "Required",
      maxLength: 10
    }
  }));
};