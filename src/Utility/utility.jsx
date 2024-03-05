import moment from "moment";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon from "../DataDisplay/Icon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
toast.configure();

// return the year, month, week and date of a date in number formate
export const formatDate = (date) => ({
  year: moment(date).year(),
  month: moment(date).month(),
  week: moment(date).week(),
  date: moment(date).date(),
});

// return the category of task in term of date
export const dateCategory = (date, t_date) => {
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
export const getDateDifference = (start, end) => {
  const sd = moment(new Date(start)); //todays date
  const ed = moment(new Date(end)); // another date
  const duration = moment.duration(sd.diff(ed));
  return duration.asDays();
};
// Moment js to format date in the application
export const dateTimeFormatter = (requestedDate, formatter, bRelative, timeFormatter) => {
  if (!requestedDate) {
    return "-";
  }
  let date = "";
  let defaultDateFormat = "DD MMM YYYY hh:mm A";
  let defaultTimeFormat = "hh:mm A";

  if (bRelative) {
    const givenDate = new Date(requestedDate);
    const day = givenDate.getDate(); // given date
    const month = givenDate.getMonth(); // given month
    const year = givenDate.getFullYear(); // given year
    const today = new Date();
    const currentDate = today.getDate(); // today's date
    const currentMonth = today.getMonth(); // today's month
    const currentYear = today.getFullYear(); // today's year
    if (day === currentDate && month === currentMonth && year === currentYear) {
      date = moment(requestedDate).format(timeFormatter || defaultTimeFormat);
      return date;
    } else if (day === currentDate - 1 && month === currentMonth && year === currentYear) {
      date = "Yesterday," + " " + moment(requestedDate).format(timeFormatter || defaultTimeFormat);
      return date;
    } else if (day === currentDate + 1 && month === currentMonth && year === currentYear) {
      date = "Tomorrow," + " " + moment(requestedDate).format(timeFormatter || defaultTimeFormat);
      return date;
    } else {
      date = moment(requestedDate).format(formatter || defaultDateFormat);
      return date;
    }
  } else {
    date = moment(requestedDate).format(formatter || defaultDateFormat);
    return date;
  }
};

// when hover on scrollbar, width increase
export const scrollBarWidthChange = (ref) => {
  ref?.current?.addEventListener("mousemove", (e) => {
    let distance = ref?.current?.offsetWidth - e?.offsetX;
    distance < 15 && distance > -15 ? ref?.current?.classList?.add("cwitmScrollHover") : ref?.current?.classList?.remove("cwitmScrollHover");
  });
};

export const showToastMessage = (
  sMessage,
  sType,
  position,
  autoClose,
  hideProgressBar,
  toastLoader // to dispaly the toast loader value will be boolean(true/false)
) => {
  if (!toast.isActive(sMessage)) {
    if (sType === "success") {
      toast(
        <Stack direction="row" spacing={1.5} alignItems="center" maxWidth={320}>
          <Icon
            style={{
              color: "#C3F3BA",
              width: "1.125rem",
              height: "1.125rem",
              left: "8.33%",
              margin: "0.5rem",
            }}
            icon={"IonIcon5.IoCheckmarkCircleOutline"}
          />
          <Typography sx={{ fontSize: "0.875rem" }}>{sMessage}</Typography>
        </Stack>,
        {
          position: position || "bottom-left", // top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
          autoClose: autoClose || 5000, // in ms
          hideProgressBar: hideProgressBar || true, // boolean
          closeOnClick: true, // boolean
          pauseOnHover: true, // boolean
          theme: "dark",
          toastId: sMessage,
        }
      );
    } else if (toastLoader) {
      toast.loading(sMessage, {
        type: sType, // default, error, info, success, warning
        position: position || "bottom-left", // top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
        theme: "dark", // light, dark, colored
        toastId: sMessage,
      });
    } else {
      toast(sMessage, {
        type: sType, // default, error, info, success, warning
        position: position || "bottom-left", // top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
        autoClose: autoClose || 5000, // in ms
        hideProgressBar: hideProgressBar || true, // boolean
        closeOnClick: true, // boolean
        pauseOnHover: true, // boolean
        theme: "dark", // light, dark, colored
        toastId: sMessage,
      });
    }
  }
};

// Method to clear the toast message of that perticular toast ID
export const clearToastMessage = (toastId) => {
  if (toastId) {
    toast.dismiss(toastId);
  } else {
    toast.dismiss();
  }
};
