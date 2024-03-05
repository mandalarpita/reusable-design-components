"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TestTables;
var _react = _interopRequireWildcard(require("react"));
var _Grid = _interopRequireDefault(require("@mui/material/Grid"));
var _TanStackTable = _interopRequireDefault(require("../Layout/TanStackTable"));
var _makeData = require("../Layout/makeData");
var _excluded = ["value", "onChange", "debounce"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TestTables() {
  var columns = _react["default"].useMemo(function () {
    return [{
      accessorKey: "id",
      header: "ID",
      size: 60
    }, {
      accessorKey: "firstName",
      cell: function cell(info) {
        return info.getValue();
      },
      enablePinning: true
    }, {
      accessorFn: function accessorFn(row) {
        return row.lastName;
      },
      id: "lastName",
      cell: function cell(info) {
        return info.getValue();
      },
      header: function header() {
        return /*#__PURE__*/_react["default"].createElement("span", null, "Last Name");
      }
    }, {
      accessorKey: "age",
      header: function header() {
        return "Age";
      },
      cell: function cell(age) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "chip"
        }, age.getValue());
      },
      size: 50
    }, {
      accessorKey: "visits",
      header: function header() {
        return /*#__PURE__*/_react["default"].createElement("span", null, "Visits");
      },
      size: 50
    }, {
      accessorKey: "status",
      header: "Status"
    }, {
      accessorKey: "progress",
      header: "Profile Progress",
      size: 80
    }, {
      accessorKey: "createdAt",
      header: "Created At",
      cell: function cell(info) {
        return info.getValue().toLocaleString();
      }
    }];
  }, []);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    pageData = _useState2[0],
    setPageData = _useState2[1];
  // const getPageData = (page, start, fetchSize, sorting) => {
  //   if (page === 0) {
  //     setPageData({
  //       data: [
  //         {
  //           id: 1,
  //           firstName: "Telly",
  //           lastName: "Murphy",
  //           age: 39,
  //           visits: 331,
  //           progress: 93,
  //           createdAt: "2022-03-20T08:48:06.943Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 2,
  //           firstName: "Gladyce",
  //           lastName: "Blick",
  //           age: 6,
  //           visits: 731,
  //           progress: 57,
  //           createdAt: "2001-06-21T17:31:15.223Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 3,
  //           firstName: "Haven",
  //           lastName: "Fahey",
  //           age: 33,
  //           visits: 110,
  //           progress: 65,
  //           createdAt: "2016-12-18T22:45:31.252Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 4,
  //           firstName: "Zachery",
  //           lastName: "Cremin",
  //           age: 13,
  //           visits: 975,
  //           progress: 56,
  //           createdAt: "2002-06-24T12:22:31.081Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 5,
  //           firstName: "Jackeline",
  //           lastName: "Marvin",
  //           age: 33,
  //           visits: 339,
  //           progress: 55,
  //           createdAt: "1999-11-21T23:33:28.644Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 6,
  //           firstName: "Montana",
  //           lastName: "Auer",
  //           age: 39,
  //           visits: 943,
  //           progress: 69,
  //           createdAt: "2002-04-18T15:34:57.154Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 7,
  //           firstName: "Arturo",
  //           lastName: "Wehner",
  //           age: 35,
  //           visits: 96,
  //           progress: 44,
  //           createdAt: "2021-12-19T14:03:47.487Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 8,
  //           firstName: "Devonte",
  //           lastName: "Crona",
  //           age: 6,
  //           visits: 399,
  //           progress: 56,
  //           createdAt: "1995-02-22T22:32:45.695Z",
  //           status: "single",
  //         },
  //         {
  //           id: 9,
  //           firstName: "Violette",
  //           lastName: "Considine",
  //           age: 11,
  //           visits: 152,
  //           progress: 3,
  //           createdAt: "2005-07-25T00:35:54.461Z",
  //           status: "single",
  //         },
  //         {
  //           id: 10,
  //           firstName: "Zakary",
  //           lastName: "Fritsch",
  //           age: 3,
  //           visits: 428,
  //           progress: 81,
  //           createdAt: "1999-01-18T20:47:35.746Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 11,
  //           firstName: "Margie",
  //           lastName: "Toy",
  //           age: 14,
  //           visits: 300,
  //           progress: 94,
  //           createdAt: "2005-06-23T14:36:13.771Z",
  //           status: "single",
  //         },
  //         {
  //           id: 12,
  //           firstName: "Isidro",
  //           lastName: "Barton",
  //           age: 21,
  //           visits: 197,
  //           progress: 80,
  //           createdAt: "2017-02-10T14:34:23.214Z",
  //           status: "single",
  //         },
  //         {
  //           id: 13,
  //           firstName: "Marge",
  //           lastName: "Pfannerstill",
  //           age: 11,
  //           visits: 578,
  //           progress: 91,
  //           createdAt: "2001-05-02T03:15:18.406Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 14,
  //           firstName: "Zora",
  //           lastName: "Gulgowski",
  //           age: 23,
  //           visits: 211,
  //           progress: 26,
  //           createdAt: "2001-07-16T18:55:56.898Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 15,
  //           firstName: "Hortense",
  //           lastName: "Green",
  //           age: 16,
  //           visits: 174,
  //           progress: 34,
  //           createdAt: "2011-06-10T23:37:24.254Z",
  //           status: "single",
  //         },
  //         {
  //           id: 16,
  //           firstName: "Alanna",
  //           lastName: "Vandervort",
  //           age: 22,
  //           visits: 161,
  //           progress: 57,
  //           createdAt: "2016-07-19T08:31:24.210Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 17,
  //           firstName: "Rodrigo",
  //           lastName: "Rempel",
  //           age: 9,
  //           visits: 253,
  //           progress: 18,
  //           createdAt: "1993-01-27T18:53:48.703Z",
  //           status: "single",
  //         },
  //         {
  //           id: 18,
  //           firstName: "Nickolas",
  //           lastName: "Mohr",
  //           age: 16,
  //           visits: 446,
  //           progress: 5,
  //           createdAt: "1996-09-21T08:05:46.819Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 19,
  //           firstName: "Erna",
  //           lastName: "Kutch",
  //           age: 22,
  //           visits: 599,
  //           progress: 5,
  //           createdAt: "2009-03-24T14:08:49.932Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 20,
  //           firstName: "Trinity",
  //           lastName: "Stehr",
  //           age: 30,
  //           visits: 16,
  //           progress: 44,
  //           createdAt: "2014-04-20T20:09:08.609Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 21,
  //           firstName: "Ernesto",
  //           lastName: "Upton",
  //           age: 2,
  //           visits: 240,
  //           progress: 7,
  //           createdAt: "2021-09-14T02:54:38.846Z",
  //           status: "single",
  //         },
  //         {
  //           id: 22,
  //           firstName: "Armando",
  //           lastName: "Schneider",
  //           age: 12,
  //           visits: 110,
  //           progress: 22,
  //           createdAt: "2016-06-28T20:24:29.648Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 23,
  //           firstName: "Jazlyn",
  //           lastName: "Effertz",
  //           age: 7,
  //           visits: 698,
  //           progress: 5,
  //           createdAt: "2018-03-23T21:56:20.944Z",
  //           status: "single",
  //         },
  //         {
  //           id: 24,
  //           firstName: "Dedrick",
  //           lastName: "Sipes",
  //           age: 29,
  //           visits: 463,
  //           progress: 38,
  //           createdAt: "2020-01-26T10:05:39.967Z",
  //           status: "single",
  //         },
  //         {
  //           id: 25,
  //           firstName: "Alfonso",
  //           lastName: "Moore",
  //           age: 20,
  //           visits: 378,
  //           progress: 41,
  //           createdAt: "2000-04-21T10:04:58.649Z",
  //           status: "single",
  //         },
  //         ,
  //         {
  //           id: 1,
  //           firstName: "Telly",
  //           lastName: "Murphy",
  //           age: 39,
  //           visits: 331,
  //           progress: 93,
  //           createdAt: "2022-03-20T08:48:06.943Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 2,
  //           firstName: "Gladyce",
  //           lastName: "Blick",
  //           age: 6,
  //           visits: 731,
  //           progress: 57,
  //           createdAt: "2001-06-21T17:31:15.223Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 3,
  //           firstName: "Haven",
  //           lastName: "Fahey",
  //           age: 33,
  //           visits: 110,
  //           progress: 65,
  //           createdAt: "2016-12-18T22:45:31.252Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 4,
  //           firstName: "Zachery",
  //           lastName: "Cremin",
  //           age: 13,
  //           visits: 975,
  //           progress: 56,
  //           createdAt: "2002-06-24T12:22:31.081Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 5,
  //           firstName: "Jackeline",
  //           lastName: "Marvin",
  //           age: 33,
  //           visits: 339,
  //           progress: 55,
  //           createdAt: "1999-11-21T23:33:28.644Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 6,
  //           firstName: "Montana",
  //           lastName: "Auer",
  //           age: 39,
  //           visits: 943,
  //           progress: 69,
  //           createdAt: "2002-04-18T15:34:57.154Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 7,
  //           firstName: "Arturo",
  //           lastName: "Wehner",
  //           age: 35,
  //           visits: 96,
  //           progress: 44,
  //           createdAt: "2021-12-19T14:03:47.487Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 8,
  //           firstName: "Devonte",
  //           lastName: "Crona",
  //           age: 6,
  //           visits: 399,
  //           progress: 56,
  //           createdAt: "1995-02-22T22:32:45.695Z",
  //           status: "single",
  //         },
  //         {
  //           id: 9,
  //           firstName: "Violette",
  //           lastName: "Considine",
  //           age: 11,
  //           visits: 152,
  //           progress: 3,
  //           createdAt: "2005-07-25T00:35:54.461Z",
  //           status: "single",
  //         },
  //         {
  //           id: 10,
  //           firstName: "Zakary",
  //           lastName: "Fritsch",
  //           age: 3,
  //           visits: 428,
  //           progress: 81,
  //           createdAt: "1999-01-18T20:47:35.746Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 11,
  //           firstName: "Margie",
  //           lastName: "Toy",
  //           age: 14,
  //           visits: 300,
  //           progress: 94,
  //           createdAt: "2005-06-23T14:36:13.771Z",
  //           status: "single",
  //         },
  //         {
  //           id: 12,
  //           firstName: "Isidro",
  //           lastName: "Barton",
  //           age: 21,
  //           visits: 197,
  //           progress: 80,
  //           createdAt: "2017-02-10T14:34:23.214Z",
  //           status: "single",
  //         },
  //         {
  //           id: 13,
  //           firstName: "Marge",
  //           lastName: "Pfannerstill",
  //           age: 11,
  //           visits: 578,
  //           progress: 91,
  //           createdAt: "2001-05-02T03:15:18.406Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 14,
  //           firstName: "Zora",
  //           lastName: "Gulgowski",
  //           age: 23,
  //           visits: 211,
  //           progress: 26,
  //           createdAt: "2001-07-16T18:55:56.898Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 15,
  //           firstName: "Hortense",
  //           lastName: "Green",
  //           age: 16,
  //           visits: 174,
  //           progress: 34,
  //           createdAt: "2011-06-10T23:37:24.254Z",
  //           status: "single",
  //         },
  //         {
  //           id: 16,
  //           firstName: "Alanna",
  //           lastName: "Vandervort",
  //           age: 22,
  //           visits: 161,
  //           progress: 57,
  //           createdAt: "2016-07-19T08:31:24.210Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 17,
  //           firstName: "Rodrigo",
  //           lastName: "Rempel",
  //           age: 9,
  //           visits: 253,
  //           progress: 18,
  //           createdAt: "1993-01-27T18:53:48.703Z",
  //           status: "single",
  //         },
  //         {
  //           id: 18,
  //           firstName: "Nickolas",
  //           lastName: "Mohr",
  //           age: 16,
  //           visits: 446,
  //           progress: 5,
  //           createdAt: "1996-09-21T08:05:46.819Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 19,
  //           firstName: "Erna",
  //           lastName: "Kutch",
  //           age: 22,
  //           visits: 599,
  //           progress: 5,
  //           createdAt: "2009-03-24T14:08:49.932Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 20,
  //           firstName: "Trinity",
  //           lastName: "Stehr",
  //           age: 30,
  //           visits: 16,
  //           progress: 44,
  //           createdAt: "2014-04-20T20:09:08.609Z",
  //           status: "relationship",
  //         },
  //         {
  //           id: 21,
  //           firstName: "Ernesto",
  //           lastName: "Upton",
  //           age: 2,
  //           visits: 240,
  //           progress: 7,
  //           createdAt: "2021-09-14T02:54:38.846Z",
  //           status: "single",
  //         },
  //         {
  //           id: 22,
  //           firstName: "Armando",
  //           lastName: "Schneider",
  //           age: 12,
  //           visits: 110,
  //           progress: 22,
  //           createdAt: "2016-06-28T20:24:29.648Z",
  //           status: "complicated",
  //         },
  //         {
  //           id: 23,
  //           firstName: "Jazlyn",
  //           lastName: "Effertz",
  //           age: 7,
  //           visits: 698,
  //           progress: 5,
  //           createdAt: "2018-03-23T21:56:20.944Z",
  //           status: "single",
  //         },
  //         {
  //           id: 24,
  //           firstName: "Dedrick",
  //           lastName: "Sipes",
  //           age: 29,
  //           visits: 463,
  //           progress: 38,
  //           createdAt: "2020-01-26T10:05:39.967Z",
  //           status: "single",
  //         },
  //         {
  //           id: 25,
  //           firstName: "Alfonso",
  //           lastName: "Moore",
  //           age: 20,
  //           visits: 378,
  //           progress: 41,
  //           createdAt: "2000-04-21T10:04:58.649Z",
  //           status: "single",
  //         },
  //       ],
  //       meta: {
  //         totalRowCount: 1000,
  //       },
  //     });
  //   } else {
  //     return setPageData(fetchData(start, fetchSize, sorting));
  //   }
  // };
  var getPageData = function getPageData(page, start, fetchSize, sorting) {
    if (page === 0) {
      return {
        data: [{
          id: 1,
          firstName: "Telly",
          lastName: "Murphy",
          age: 39,
          visits: 331,
          progress: 93,
          createdAt: "2022-03-20T08:48:06.943Z",
          status: "relationship"
        }, {
          id: 2,
          firstName: "Gladyce",
          lastName: "Blick",
          age: 6,
          visits: 731,
          progress: 57,
          createdAt: "2001-06-21T17:31:15.223Z",
          status: "relationship"
        }, {
          id: 3,
          firstName: "Haven",
          lastName: "Fahey",
          age: 33,
          visits: 110,
          progress: 65,
          createdAt: "2016-12-18T22:45:31.252Z",
          status: "relationship"
        }, {
          id: 4,
          firstName: "Zachery",
          lastName: "Cremin",
          age: 13,
          visits: 975,
          progress: 56,
          createdAt: "2002-06-24T12:22:31.081Z",
          status: "complicated"
        }, {
          id: 5,
          firstName: "Jackeline",
          lastName: "Marvin",
          age: 33,
          visits: 339,
          progress: 55,
          createdAt: "1999-11-21T23:33:28.644Z",
          status: "relationship"
        }, {
          id: 6,
          firstName: "Montana",
          lastName: "Auer",
          age: 39,
          visits: 943,
          progress: 69,
          createdAt: "2002-04-18T15:34:57.154Z",
          status: "relationship"
        }, {
          id: 7,
          firstName: "Arturo",
          lastName: "Wehner",
          age: 35,
          visits: 96,
          progress: 44,
          createdAt: "2021-12-19T14:03:47.487Z",
          status: "complicated"
        }, {
          id: 8,
          firstName: "Devonte",
          lastName: "Crona",
          age: 6,
          visits: 399,
          progress: 56,
          createdAt: "1995-02-22T22:32:45.695Z",
          status: "single"
        }, {
          id: 9,
          firstName: "Violette",
          lastName: "Considine",
          age: 11,
          visits: 152,
          progress: 3,
          createdAt: "2005-07-25T00:35:54.461Z",
          status: "single"
        }, {
          id: 10,
          firstName: "Zakary",
          lastName: "Fritsch",
          age: 3,
          visits: 428,
          progress: 81,
          createdAt: "1999-01-18T20:47:35.746Z",
          status: "complicated"
        }, {
          id: 11,
          firstName: "Margie",
          lastName: "Toy",
          age: 14,
          visits: 300,
          progress: 94,
          createdAt: "2005-06-23T14:36:13.771Z",
          status: "single"
        }, {
          id: 12,
          firstName: "Isidro",
          lastName: "Barton",
          age: 21,
          visits: 197,
          progress: 80,
          createdAt: "2017-02-10T14:34:23.214Z",
          status: "single"
        }, {
          id: 13,
          firstName: "Marge",
          lastName: "Pfannerstill",
          age: 11,
          visits: 578,
          progress: 91,
          createdAt: "2001-05-02T03:15:18.406Z",
          status: "complicated"
        }, {
          id: 14,
          firstName: "Zora",
          lastName: "Gulgowski",
          age: 23,
          visits: 211,
          progress: 26,
          createdAt: "2001-07-16T18:55:56.898Z",
          status: "complicated"
        }, {
          id: 15,
          firstName: "Hortense",
          lastName: "Green",
          age: 16,
          visits: 174,
          progress: 34,
          createdAt: "2011-06-10T23:37:24.254Z",
          status: "single"
        }, {
          id: 16,
          firstName: "Alanna",
          lastName: "Vandervort",
          age: 22,
          visits: 161,
          progress: 57,
          createdAt: "2016-07-19T08:31:24.210Z",
          status: "relationship"
        }, {
          id: 17,
          firstName: "Rodrigo",
          lastName: "Rempel",
          age: 9,
          visits: 253,
          progress: 18,
          createdAt: "1993-01-27T18:53:48.703Z",
          status: "single"
        }, {
          id: 18,
          firstName: "Nickolas",
          lastName: "Mohr",
          age: 16,
          visits: 446,
          progress: 5,
          createdAt: "1996-09-21T08:05:46.819Z",
          status: "complicated"
        }, {
          id: 19,
          firstName: "Erna",
          lastName: "Kutch",
          age: 22,
          visits: 599,
          progress: 5,
          createdAt: "2009-03-24T14:08:49.932Z",
          status: "complicated"
        }, {
          id: 20,
          firstName: "Trinity",
          lastName: "Stehr",
          age: 30,
          visits: 16,
          progress: 44,
          createdAt: "2014-04-20T20:09:08.609Z",
          status: "relationship"
        }, {
          id: 21,
          firstName: "Ernesto",
          lastName: "Upton",
          age: 2,
          visits: 240,
          progress: 7,
          createdAt: "2021-09-14T02:54:38.846Z",
          status: "single"
        }, {
          id: 22,
          firstName: "Armando",
          lastName: "Schneider",
          age: 12,
          visits: 110,
          progress: 22,
          createdAt: "2016-06-28T20:24:29.648Z",
          status: "complicated"
        }, {
          id: 23,
          firstName: "Jazlyn",
          lastName: "Effertz",
          age: 7,
          visits: 698,
          progress: 5,
          createdAt: "2018-03-23T21:56:20.944Z",
          status: "single"
        }, {
          id: 24,
          firstName: "Dedrick",
          lastName: "Sipes",
          age: 29,
          visits: 463,
          progress: 38,
          createdAt: "2020-01-26T10:05:39.967Z",
          status: "single"
        }, {
          id: 25,
          firstName: "Alfonso",
          lastName: "Moore",
          age: 20,
          visits: 378,
          progress: 41,
          createdAt: "2000-04-21T10:04:58.649Z",
          status: "single"
        },, {
          id: 1,
          firstName: "Telly",
          lastName: "Murphy",
          age: 39,
          visits: 331,
          progress: 93,
          createdAt: "2022-03-20T08:48:06.943Z",
          status: "relationship"
        }, {
          id: 2,
          firstName: "Gladyce",
          lastName: "Blick",
          age: 6,
          visits: 731,
          progress: 57,
          createdAt: "2001-06-21T17:31:15.223Z",
          status: "relationship"
        }, {
          id: 3,
          firstName: "Haven",
          lastName: "Fahey",
          age: 33,
          visits: 110,
          progress: 65,
          createdAt: "2016-12-18T22:45:31.252Z",
          status: "relationship"
        }, {
          id: 4,
          firstName: "Zachery",
          lastName: "Cremin",
          age: 13,
          visits: 975,
          progress: 56,
          createdAt: "2002-06-24T12:22:31.081Z",
          status: "complicated"
        }, {
          id: 5,
          firstName: "Jackeline",
          lastName: "Marvin",
          age: 33,
          visits: 339,
          progress: 55,
          createdAt: "1999-11-21T23:33:28.644Z",
          status: "relationship"
        }, {
          id: 6,
          firstName: "Montana",
          lastName: "Auer",
          age: 39,
          visits: 943,
          progress: 69,
          createdAt: "2002-04-18T15:34:57.154Z",
          status: "relationship"
        }, {
          id: 7,
          firstName: "Arturo",
          lastName: "Wehner",
          age: 35,
          visits: 96,
          progress: 44,
          createdAt: "2021-12-19T14:03:47.487Z",
          status: "complicated"
        }, {
          id: 8,
          firstName: "Devonte",
          lastName: "Crona",
          age: 6,
          visits: 399,
          progress: 56,
          createdAt: "1995-02-22T22:32:45.695Z",
          status: "single"
        }, {
          id: 9,
          firstName: "Violette",
          lastName: "Considine",
          age: 11,
          visits: 152,
          progress: 3,
          createdAt: "2005-07-25T00:35:54.461Z",
          status: "single"
        }, {
          id: 10,
          firstName: "Zakary",
          lastName: "Fritsch",
          age: 3,
          visits: 428,
          progress: 81,
          createdAt: "1999-01-18T20:47:35.746Z",
          status: "complicated"
        }, {
          id: 11,
          firstName: "Margie",
          lastName: "Toy",
          age: 14,
          visits: 300,
          progress: 94,
          createdAt: "2005-06-23T14:36:13.771Z",
          status: "single"
        }, {
          id: 12,
          firstName: "Isidro",
          lastName: "Barton",
          age: 21,
          visits: 197,
          progress: 80,
          createdAt: "2017-02-10T14:34:23.214Z",
          status: "single"
        }, {
          id: 13,
          firstName: "Marge",
          lastName: "Pfannerstill",
          age: 11,
          visits: 578,
          progress: 91,
          createdAt: "2001-05-02T03:15:18.406Z",
          status: "complicated"
        }, {
          id: 14,
          firstName: "Zora",
          lastName: "Gulgowski",
          age: 23,
          visits: 211,
          progress: 26,
          createdAt: "2001-07-16T18:55:56.898Z",
          status: "complicated"
        }, {
          id: 15,
          firstName: "Hortense",
          lastName: "Green",
          age: 16,
          visits: 174,
          progress: 34,
          createdAt: "2011-06-10T23:37:24.254Z",
          status: "single"
        }, {
          id: 16,
          firstName: "Alanna",
          lastName: "Vandervort",
          age: 22,
          visits: 161,
          progress: 57,
          createdAt: "2016-07-19T08:31:24.210Z",
          status: "relationship"
        }, {
          id: 17,
          firstName: "Rodrigo",
          lastName: "Rempel",
          age: 9,
          visits: 253,
          progress: 18,
          createdAt: "1993-01-27T18:53:48.703Z",
          status: "single"
        }, {
          id: 18,
          firstName: "Nickolas",
          lastName: "Mohr",
          age: 16,
          visits: 446,
          progress: 5,
          createdAt: "1996-09-21T08:05:46.819Z",
          status: "complicated"
        }, {
          id: 19,
          firstName: "Erna",
          lastName: "Kutch",
          age: 22,
          visits: 599,
          progress: 5,
          createdAt: "2009-03-24T14:08:49.932Z",
          status: "complicated"
        }, {
          id: 20,
          firstName: "Trinity",
          lastName: "Stehr",
          age: 30,
          visits: 16,
          progress: 44,
          createdAt: "2014-04-20T20:09:08.609Z",
          status: "relationship"
        }, {
          id: 21,
          firstName: "Ernesto",
          lastName: "Upton",
          age: 2,
          visits: 240,
          progress: 7,
          createdAt: "2021-09-14T02:54:38.846Z",
          status: "single"
        }, {
          id: 22,
          firstName: "Armando",
          lastName: "Schneider",
          age: 12,
          visits: 110,
          progress: 22,
          createdAt: "2016-06-28T20:24:29.648Z",
          status: "complicated"
        }, {
          id: 23,
          firstName: "Jazlyn",
          lastName: "Effertz",
          age: 7,
          visits: 698,
          progress: 5,
          createdAt: "2018-03-23T21:56:20.944Z",
          status: "single"
        }, {
          id: 24,
          firstName: "Dedrick",
          lastName: "Sipes",
          age: 29,
          visits: 463,
          progress: 38,
          createdAt: "2020-01-26T10:05:39.967Z",
          status: "single"
        }, {
          id: 25,
          firstName: "Alfonso",
          lastName: "Moore",
          age: 20,
          visits: 378,
          progress: 41,
          createdAt: "2000-04-21T10:04:58.649Z",
          status: "single"
        }],
        meta: {
          totalRowCount: 1000
        }
      };
    } else {
      return (0, _makeData.fetchData)(start, fetchSize, sorting);
    }
  };
  var _React$useState = _react["default"].useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    globalFilter = _React$useState2[0],
    setGlobalFilter = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    globalFilterApi = _React$useState4[0],
    setGlobalFilterApi = _React$useState4[1];
  var enableMultiSelect = true;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    container: true,
    spacing: 2,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(DebouncedInput, {
    value: globalFilterApi !== null && globalFilterApi !== void 0 ? globalFilterApi : "",
    onChange: function onChange(value, e) {
      if (value) {
        setGlobalFilterApi(String(value));
        //add api
        setPageData({
          data: [{
            id: 1,
            firstName: "Telly NEW",
            lastName: "Murphy",
            age: 39,
            visits: 331,
            progress: 93,
            createdAt: "2022-03-20T08:48:06.943Z",
            status: "relationship"
          }],
          meta: {
            totalRowCount: 1000
          }
        });
      }
    },
    className: "p-2 font-lg shadow border border-block",
    placeholder: "Search all columns..."
  })), /*#__PURE__*/_react["default"].createElement(_TanStackTable["default"], {
    columns: columns,
    getPageData: getPageData,
    pageData: pageData,
    enableMultiSelect: enableMultiSelect,
    fetchSize: 50,
    globalFilter: globalFilterApi,
    setGlobalFilter: setGlobalFilter
  }))));
}
function DebouncedInput(_ref) {
  var initialValue = _ref.value,
    onChange = _ref.onChange,
    _ref$debounce = _ref.debounce,
    debounce = _ref$debounce === void 0 ? 500 : _ref$debounce,
    props = _objectWithoutProperties(_ref, _excluded);
  var _React$useState5 = _react["default"].useState(initialValue),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    value = _React$useState6[0],
    setValue = _React$useState6[1];
  _react["default"].useEffect(function () {
    setValue(initialValue);
  }, [initialValue]);
  _react["default"].useEffect(function () {
    var timeout = setTimeout(function () {
      onChange(value);
    }, debounce);
    return function () {
      return clearTimeout(timeout);
    };
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement("input", _extends({}, props, {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    }
  }));
}