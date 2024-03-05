"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactHookForm = require("react-hook-form");
var _Input = require("../Input");
var _TestComponents = require("../TestComponents");
var _Select = require("../Select");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import "../styles.css";

var renderCount = 0;
var defaultValues = [{
  attrKey: "CREATED_BY",
  attrDesc: null,
  attrLabel: "",
  dataElementId: "",
  isVisible: 1,
  isEditable: 1,
  isMandatory: 1,
  dataElementName: "",
  runTime: 0,
  isLookup: 0,
  lookUpId: "",
  runTimeValue: ""
}, {
  attrKey: "CREATED_ON",
  attrDesc: undefined,
  attrLabel: "",
  dataElementId: "",
  isVisible: 1,
  isEditable: 1,
  isMandatory: 1,
  dataElementName: "",
  runTime: 0,
  isLookup: 0,
  lookUpId: "",
  runTimeValue: ""
}, {
  attrKey: "PO_NUMBER",
  attrDesc: "",
  attrLabel: "",
  dataElementId: "",
  isVisible: 1,
  isEditable: 1,
  isMandatory: 1,
  dataElementName: "",
  runTime: 0,
  isLookup: 0,
  lookUpId: "",
  runTimeValue: ""
}];
function TestForm() {
  // control, handleSubmit, formState
  var _useForm = (0, _reactHookForm.useForm)({
      defaultValues: {
        test: defaultValues
      }
    }),
    control = _useForm.control,
    handleSubmit = _useForm.handleSubmit,
    errors = _useForm.formState.errors,
    reset = _useForm.reset;
  var _useFieldArray = (0, _reactHookForm.useFieldArray)({
      control: control,
      name: "test"
    }),
    fields = _useFieldArray.fields,
    append = _useFieldArray.append,
    prepend = _useFieldArray.prepend,
    remove = _useFieldArray.remove,
    swap = _useFieldArray.swap,
    move = _useFieldArray.move,
    insert = _useFieldArray.insert,
    replace = _useFieldArray.replace;
  var onSubmit = function onSubmit(data) {
    return console.log("data", data);
  };

  // if you want to control your fields with watch
  // const watchResult = watch("test");
  // console.log(watchResult);

  // The following is useWatch example
  // console.log(useWatch({ name: "test", control }));

  renderCount++;
  return /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/_react["default"].createElement("h1", null, "Field Array "), /*#__PURE__*/_react["default"].createElement("p", null, "The following demo allow you to delete, append, prepend items"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "counter"
  }, "Render Count: ", renderCount), /*#__PURE__*/_react["default"].createElement("ul", null, fields.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: item.id
    }, /*#__PURE__*/_react["default"].createElement(_Input.Input, {
      root: "test.".concat(index),
      control: control // Mandatory - Passed from useForm
      ,
      name: "attrKey" // Mandatory - Attribute from the default values
      ,
      rules: {
        required: "This is a required field"
      } // Optional -  Validation parameters
      ,
      errors: errors,
      placeholder: "SMALL -  Input" // Optional - Any prop for Textfield.
      ,
      size: "small" // Optional - Fully customisable
    }), /*#__PURE__*/_react["default"].createElement(_Select.Select, {
      root: "test.".concat(index),
      control: control,
      name: "attrDesc",
      rules: {
        required: "Required sd"
      },
      options: _TestComponents.cars,
      optionKey: "carId",
      optionLabel: "type",
      placeholder: "DEFAULT -  Select",
      errors: errors
    }), /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return remove(index);
      }
    }, "Delete"));
  })), /*#__PURE__*/_react["default"].createElement("section", null, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      append({
        firstName: "appendBill",
        lastName: "appendLuo"
      });
    }
  }, "append"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return prepend({
        firstName: "prependFirstName",
        lastName: "prependLastName"
      });
    }
  }, "prepend"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return insert(parseInt(2, 10), {
        firstName: "insertFirstName",
        lastName: "insertLastName"
      });
    }
  }, "insert at"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return swap(1, 2);
    }
  }, "swap"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return move(1, 2);
    }
  }, "move"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return replace([{
        firstName: "test1",
        lastName: "test1"
      }, {
        firstName: "test2",
        lastName: "test2"
      }]);
    }
  }, "replace"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return remove(1);
    }
  }, "remove at"), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return reset({
        test: [{
          firstName: "Bill",
          lastName: "Luo"
        }]
      });
    }
  }, "reset")), /*#__PURE__*/_react["default"].createElement("input", {
    type: "submit"
  }));
}
var _default = TestForm;
exports["default"] = _default;