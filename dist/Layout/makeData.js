"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchData = void 0;
exports.makeData = makeData;
var _faker = require("@faker-js/faker");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var range = function range(len) {
  var arr = [];
  for (var i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
var newPerson = function newPerson(index) {
  return {
    id: index + 1,
    firstName: _faker.faker.name.firstName(),
    lastName: _faker.faker.name.lastName(),
    age: _faker.faker.datatype.number(40),
    visits: _faker.faker.datatype.number(1000),
    progress: _faker.faker.datatype.number(100),
    createdAt: _faker.faker.datatype.datetime({
      max: new Date().getTime()
    }),
    status: _faker.faker.helpers.shuffle(["relationship", "complicated", "single"])[0]
  };
};
function makeData() {
  for (var _len = arguments.length, lens = new Array(_len), _key = 0; _key < _len; _key++) {
    lens[_key] = arguments[_key];
  }
  var makeDataLevel = function makeDataLevel() {
    var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var len = lens[depth];
    return range(len).map(function (d) {
      return _objectSpread({}, newPerson(d));
    });
  };
  return makeDataLevel();
}
var data = makeData(1000);

//simulates a backend api
var fetchData = function fetchData(start, size, sorting) {
  var dbData = _toConsumableArray(data);
  if (sorting.length) {
    var sort = sorting[0];
    var id = sort.id,
      desc = sort.desc;
    dbData.sort(function (a, b) {
      if (desc) {
        return a[id] < b[id] ? 1 : -1;
      }
      return a[id] > b[id] ? 1 : -1;
    });
  }
  return {
    data: dbData.slice(start, start + size),
    meta: {
      totalRowCount: dbData.length
    }
  };
};
exports.fetchData = fetchData;