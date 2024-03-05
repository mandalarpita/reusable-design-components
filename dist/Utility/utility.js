"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToastMessage = exports.scrollBarWidthChange = exports.getDateDifference = exports.formatDate = exports.dateTimeFormatter = exports.dateCategory = exports.clearToastMessage = void 0;
var _moment = _interopRequireDefault(require("moment"));
var _reactToastify = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var _Icon = _interopRequireDefault(require("../DataDisplay/Icon"));
var _Stack = _interopRequireDefault(require("@mui/material/Stack"));
var _Typography = _interopRequireDefault(require("@mui/material/Typography"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_reactToastify.toast.configure();

// return the year, month, week and date of a date in number formate
var formatDate = function formatDate(date) {
  return {
    year: (0, _moment["default"])(date).year(),
    month: (0, _moment["default"])(date).month(),
    week: (0, _moment["default"])(date).week(),
    date: (0, _moment["default"])(date).date()
  };
};

// return the category of task in term of date
exports.formatDate = formatDate;
var dateCategory = function dateCategory(date, t_date) {
  if (date.year === t_date.year && date.month === t_date.month && date.week === t_date.week && date.date === t_date.date) {
    return "0";
  } else if (date.year === t_date.year && date.month === t_date.month && date.week === t_date.week && date.date + 1 === t_date.date) {
    return "1";
  } else if (date.year === t_date.year && date.month === t_date.month && date.week === t_date.week) {
    return "7";
  } else if (date.year === t_date.year && date.month === t_date.month && date.week + 1 === t_date.week) {
    return "14";
  } else if (date.year === t_date.year && date.month === t_date.month) {
    return "30";
  } else if (date.year === t_date.year && date.month + 1 === t_date.month) {
    return "60";
  } else if (date.year === t_date.year) {
    return "365";
  } else {
    return "older";
  }
};
// Get difference between dates
exports.dateCategory = dateCategory;
var getDateDifference = function getDateDifference(start, end) {
  var sd = (0, _moment["default"])(new Date(start)); //todays date
  var ed = (0, _moment["default"])(new Date(end)); // another date
  var duration = _moment["default"].duration(sd.diff(ed));
  return duration.asDays();
};
// Moment js to format date in the application
exports.getDateDifference = getDateDifference;
var dateTimeFormatter = function dateTimeFormatter(requestedDate, formatter, bRelative, timeFormatter) {
  if (!requestedDate) {
    return "-";
  }
  var date = "";
  var defaultDateFormat = "DD MMM YYYY hh:mm A";
  var defaultTimeFormat = "hh:mm A";
  if (bRelative) {
    var givenDate = new Date(requestedDate);
    var day = givenDate.getDate(); // given date
    var month = givenDate.getMonth(); // given month
    var year = givenDate.getFullYear(); // given year
    var today = new Date();
    var currentDate = today.getDate(); // today's date
    var currentMonth = today.getMonth(); // today's month
    var currentYear = today.getFullYear(); // today's year
    if (day === currentDate && month === currentMonth && year === currentYear) {
      date = (0, _moment["default"])(requestedDate).format(timeFormatter || defaultTimeFormat);
      return date;
    } else if (day === currentDate - 1 && month === currentMonth && year === currentYear) {
      date = "Yesterday," + " " + (0, _moment["default"])(requestedDate).format(timeFormatter || defaultTimeFormat);
      return date;
    } else if (day === currentDate + 1 && month === currentMonth && year === currentYear) {
      date = "Tomorrow," + " " + (0, _moment["default"])(requestedDate).format(timeFormatter || defaultTimeFormat);
      return date;
    } else {
      date = (0, _moment["default"])(requestedDate).format(formatter || defaultDateFormat);
      return date;
    }
  } else {
    date = (0, _moment["default"])(requestedDate).format(formatter || defaultDateFormat);
    return date;
  }
};

// when hover on scrollbar, width increase
exports.dateTimeFormatter = dateTimeFormatter;
var scrollBarWidthChange = function scrollBarWidthChange(ref) {
  var _ref$current;
  ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.addEventListener("mousemove", function (e) {
    var _ref$current2, _ref$current3, _ref$current3$classLi, _ref$current4, _ref$current4$classLi;
    var distance = (ref === null || ref === void 0 ? void 0 : (_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.offsetWidth) - (e === null || e === void 0 ? void 0 : e.offsetX);
    distance < 15 && distance > -15 ? ref === null || ref === void 0 ? void 0 : (_ref$current3 = ref.current) === null || _ref$current3 === void 0 ? void 0 : (_ref$current3$classLi = _ref$current3.classList) === null || _ref$current3$classLi === void 0 ? void 0 : _ref$current3$classLi.add("cwitmScrollHover") : ref === null || ref === void 0 ? void 0 : (_ref$current4 = ref.current) === null || _ref$current4 === void 0 ? void 0 : (_ref$current4$classLi = _ref$current4.classList) === null || _ref$current4$classLi === void 0 ? void 0 : _ref$current4$classLi.remove("cwitmScrollHover");
  });
};
exports.scrollBarWidthChange = scrollBarWidthChange;
var showToastMessage = function showToastMessage(sMessage, sType, position, autoClose, hideProgressBar, toastLoader // to dispaly the toast loader value will be boolean(true/false)
) {
  if (!_reactToastify.toast.isActive(sMessage)) {
    if (sType === "success") {
      (0, _reactToastify.toast)( /*#__PURE__*/React.createElement(_Stack["default"], {
        direction: "row",
        spacing: 1.5,
        alignItems: "center",
        maxWidth: 320
      }, /*#__PURE__*/React.createElement(_Icon["default"], {
        style: {
          color: "#C3F3BA",
          width: "1.125rem",
          height: "1.125rem",
          left: "8.33%",
          margin: "0.5rem"
        },
        icon: "IonIcon5.IoCheckmarkCircleOutline"
      }), /*#__PURE__*/React.createElement(_Typography["default"], {
        sx: {
          fontSize: "0.875rem"
        }
      }, sMessage)), {
        position: position || "bottom-left",
        // top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
        autoClose: autoClose || 5000,
        // in ms
        hideProgressBar: hideProgressBar || true,
        // boolean
        closeOnClick: true,
        // boolean
        pauseOnHover: true,
        // boolean
        theme: "dark",
        toastId: sMessage
      });
    } else if (toastLoader) {
      _reactToastify.toast.loading(sMessage, {
        type: sType,
        // default, error, info, success, warning
        position: position || "bottom-left",
        // top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
        theme: "dark",
        // light, dark, colored
        toastId: sMessage
      });
    } else {
      (0, _reactToastify.toast)(sMessage, {
        type: sType,
        // default, error, info, success, warning
        position: position || "bottom-left",
        // top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
        autoClose: autoClose || 5000,
        // in ms
        hideProgressBar: hideProgressBar || true,
        // boolean
        closeOnClick: true,
        // boolean
        pauseOnHover: true,
        // boolean
        theme: "dark",
        // light, dark, colored
        toastId: sMessage
      });
    }
  }
};

// Method to clear the toast message of that perticular toast ID
exports.showToastMessage = showToastMessage;
var clearToastMessage = function clearToastMessage(toastId) {
  if (toastId) {
    _reactToastify.toast.dismiss(toastId);
  } else {
    _reactToastify.toast.dismiss();
  }
};
exports.clearToastMessage = clearToastMessage;