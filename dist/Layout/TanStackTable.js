"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
require("./index.css");
var _reactTable = require("@tanstack/react-table");
var _reactQuery = require("@tanstack/react-query");
var _reactVirtual = require("react-virtual");
var _bs = require("react-icons/bs");
var _Input = _interopRequireDefault(require("../Inputs/Input"));
var _matchSorterUtils = require("@tanstack/match-sorter-utils");
var _excluded = ["columns", "getPageData", "pageData", "enableMultiSelect", "fetchSize", "globalFilter", "setGlobalFilter"],
  _excluded2 = ["indeterminate", "className"],
  _excluded3 = ["value", "onChange", "debounce"]; //3 TanStack Libraries!!!
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var queryClient = new _reactQuery.QueryClient();
function TanStackTable(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactQuery.QueryClientProvider, {
    client: queryClient
  }, /*#__PURE__*/_react["default"].createElement(App, props)));
}
function App(props) {
  var _data$pages$0$meta$to, _data$pages2, _data$pages2$, _data$pages2$$meta, _virtualRows$, _virtualRows;
  var columns = props.columns,
    getPageData = props.getPageData,
    pageData = props.pageData,
    enableMultiSelect = props.enableMultiSelect,
    fetchSize = props.fetchSize,
    globalFilter = props.globalFilter,
    setGlobalFilter = props.setGlobalFilter,
    others = _objectWithoutProperties(props, _excluded);
  if (enableMultiSelect) {
    columns = [{
      id: "select",
      header: function header(_ref) {
        var table = _ref.table;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "px-1"
        }, /*#__PURE__*/_react["default"].createElement(IndeterminateCheckbox, {
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: function onChange(e) {
            table.getToggleAllRowsSelectedHandler()(e);
            setSelectAllFlag(e.target.checked);
          }
        }));
      },
      size: 50,
      cell: function cell(_ref2) {
        var row = _ref2.row,
          table = _ref2.table;
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "px-1 "
        }, /*#__PURE__*/_react["default"].createElement(IndeterminateCheckbox, {
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: function onChange(e) {
            row.getToggleSelectedHandler()(e);
          }
        }));
      }
    }].concat(_toConsumableArray(columns));
  }
  var rerender = _react["default"].useReducer(function () {
    return {};
  }, {})[1];

  //we need a reference to the scrolling element for logic down below
  var tableContainerRef = _react["default"].useRef(null);
  var _React$useState = _react["default"].useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sorting = _React$useState2[0],
    setSorting = _React$useState2[1];
  var _React$useState3 = _react["default"].useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    selectAllFlag = _React$useState4[0],
    setSelectAllFlag = _React$useState4[1];

  //react-query has an useInfiniteQuery hook just for this situation!
  var _useInfiniteQuery = (0, _reactQuery.useInfiniteQuery)(["table-data", sorting],
    /*#__PURE__*/
    //adding sorting state as key causes table to reset and fetch from new beginning upon sort
    function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref3) {
        var _ref3$pageParam, pageParam, start, fetchedData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _ref3$pageParam = _ref3.pageParam, pageParam = _ref3$pageParam === void 0 ? 0 : _ref3$pageParam;
              // onScrollBottom()
              start = pageParam * fetchSize;
              fetchedData = getPageData(pageParam, start, fetchSize, sorting); //pretend api call
              // const fetchedData = getPageData(pageParam, start, fetchSize, sorting); //pretend api call
              return _context.abrupt("return", fetchedData);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), {
      getNextPageParam: function getNextPageParam(_lastGroup, groups) {
        return groups.length;
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false
    }),
    data = _useInfiniteQuery.data,
    fetchNextPage = _useInfiniteQuery.fetchNextPage,
    isFetching = _useInfiniteQuery.isFetching,
    isLoading = _useInfiniteQuery.isLoading;

  //we must flatten the array of arrays from the useInfiniteQuery hook
  // const [flatData, setFlatData] = useState(React.useMemo(() => data?.pages?.flatMap((page) => page.data) ?? [], [data]));
  var flatData = _react["default"].useMemo(function () {
    var _data$pages$flatMap, _data$pages;
    return (_data$pages$flatMap = data === null || data === void 0 ? void 0 : (_data$pages = data.pages) === null || _data$pages === void 0 ? void 0 : _data$pages.flatMap(function (page) {
      return page.data;
    })) !== null && _data$pages$flatMap !== void 0 ? _data$pages$flatMap : [];
  }, [data]);
  var totalDBRowCount = (_data$pages$0$meta$to = data === null || data === void 0 ? void 0 : (_data$pages2 = data.pages) === null || _data$pages2 === void 0 ? void 0 : (_data$pages2$ = _data$pages2[0]) === null || _data$pages2$ === void 0 ? void 0 : (_data$pages2$$meta = _data$pages2$.meta) === null || _data$pages2$$meta === void 0 ? void 0 : _data$pages2$$meta.totalRowCount) !== null && _data$pages$0$meta$to !== void 0 ? _data$pages$0$meta$to : 0;
  var totalFetched = flatData.length;

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  var fetchMoreOnBottomReached = _react["default"].useCallback(function (containerRefElement) {
    if (containerRefElement) {
      var scrollHeight = containerRefElement.scrollHeight,
        scrollTop = containerRefElement.scrollTop,
        clientHeight = containerRefElement.clientHeight;

      //once the user has scrolled within 300px of the bottom of the table, fetch more data if there is any
      if (scrollHeight - scrollTop - clientHeight < 300 && !isFetching && totalFetched < totalDBRowCount) {
        fetchNextPage();
      }
    }
  }, [fetchNextPage, isFetching, totalFetched, totalDBRowCount]);

  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  _react["default"].useEffect(function () {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);
  var fuzzyFilter = function fuzzyFilter(row, columnId, value, addMeta) {
    // console.log(row,columnId,value)
    // Rank the item
    var itemRank = (0, _matchSorterUtils.rankItem)(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank: itemRank
    });
    // Return if the item should be filtered in/out
    return itemRank.passed;
  };
  var table = (0, _reactTable.useReactTable)({
    data: flatData,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    columns: columns,
    state: {
      sorting: sorting,
      // columnFilters,
      globalFilter: globalFilter
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting,
    getCoreRowModel: (0, _reactTable.getCoreRowModel)(),
    getSortedRowModel: (0, _reactTable.getSortedRowModel)(),
    getFilteredRowModel: (0, _reactTable.getFilteredRowModel)(),
    debugTable: true
  });
  var _table$getRowModel = table.getRowModel(),
    rows = _table$getRowModel.rows;

  //Method to select all rows if header checkbox is selected
  //This is for infinite scrolling

  _react["default"].useMemo(function () {
    if (selectAllFlag) {
      table.toggleAllRowsSelected(true);
    }
  }, [rows, selectAllFlag]);

  //Virtualizing is optional, but might be necessary if we are going to potentially have hundreds or thousands of rows
  var rowVirtualizer = (0, _reactVirtual.useVirtual)({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10
  });
  var virtualRows = rowVirtualizer.virtualItems,
    totalSize = rowVirtualizer.totalSize;
  var paddingTop = virtualRows.length > 0 ? (virtualRows === null || virtualRows === void 0 ? void 0 : (_virtualRows$ = virtualRows[0]) === null || _virtualRows$ === void 0 ? void 0 : _virtualRows$.start) || 0 : 0;
  var paddingBottom = virtualRows.length > 0 ? totalSize - ((virtualRows === null || virtualRows === void 0 ? void 0 : (_virtualRows = virtualRows[virtualRows.length - 1]) === null || _virtualRows === void 0 ? void 0 : _virtualRows.end) || 0) : 0;
  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Loading...");
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-2"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container",
    onScroll: function onScroll(e) {
      return fetchMoreOnBottomReached(e.target);
    },
    ref: tableContainerRef
  }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, table.getHeaderGroups().map(function (headerGroup) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: headerGroup.id
    }, headerGroup.headers.map(function (header) {
      var _asc$desc$header$colu;
      return /*#__PURE__*/_react["default"].createElement("th", {
        key: header.id,
        colSpan: header.colSpan,
        style: {
          width: header.getSize()
        }
      }, header.isPlaceholder ? null : /*#__PURE__*/_react["default"].createElement("div", {
        className: header.column.getCanSort() ? "cursor-pointer select-none display-row" : "",
        onClick: header.column.getToggleSortingHandler()
      }, (0, _reactTable.flexRender)(header.column.columnDef.header, header.getContext()), (_asc$desc$header$colu = {
        asc: /*#__PURE__*/_react["default"].createElement(_bs.BsSortDownAlt, {
          className: "icon-size"
        }),
        desc: /*#__PURE__*/_react["default"].createElement(_bs.BsSortDown, {
          className: "icon-size"
        })
      }[header.column.getIsSorted()]) !== null && _asc$desc$header$colu !== void 0 ? _asc$desc$header$colu : null));
    }));
  })), /*#__PURE__*/_react["default"].createElement("tbody", null, paddingTop > 0 && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      height: "".concat(paddingTop, "px")
    }
  })), virtualRows.map(function (virtualRow) {
    var row = rows[virtualRow.index];
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: row.id
    }, row.getVisibleCells().map(function (cell) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: cell.id
      }, (0, _reactTable.flexRender)(cell.column.columnDef.cell, cell.getContext()));
    }));
  }), paddingBottom > 0 && /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
    style: {
      height: "".concat(paddingBottom, "px")
    }
  }))))), /*#__PURE__*/_react["default"].createElement("div", null, "Fetched ", flatData.length, " of ", totalDBRowCount, " Rows."), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return rerender();
    }
  }, "Force Rerender")));
}
function IndeterminateCheckbox(_ref5) {
  var indeterminate = _ref5.indeterminate,
    _ref5$className = _ref5.className,
    className = _ref5$className === void 0 ? "" : _ref5$className,
    rest = _objectWithoutProperties(_ref5, _excluded2);
  var ref = _react["default"].useRef(null);
  _react["default"].useEffect(function () {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);
  return /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "checkbox",
    ref: ref,
    className: className + " cursor-pointer input-dimension"
  }, rest));
}
var _default = TanStackTable;
exports["default"] = _default;
function DebouncedInput(_ref6) {
  var initialValue = _ref6.value,
    onChange = _ref6.onChange,
    _ref6$debounce = _ref6.debounce,
    debounce = _ref6$debounce === void 0 ? 500 : _ref6$debounce,
    props = _objectWithoutProperties(_ref6, _excluded3);
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