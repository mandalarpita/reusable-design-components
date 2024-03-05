import { useEffect, useState } from "react";
// import { DateRangePicker } from "@mantine/dates";
import { createStyles } from "@mui/styles";

// const useCustomStyles = createStyles((theme) => ({
//   itmDateRange: {
//     "&:focus": {
//       border: "1px solid red",
//     },
//   },
// }));
const useCustomStyles = createStyles((theme) => ({
  mantine: {
    "&:focus": {
      border: "1px solid red",
    },
  },
}));

export default function DateTimeRangePicker(props) {
  const { classes, cx } = useCustomStyles();

  const [value, setValue] = useState(props.dates || [new Date(), new Date()]);
  const handleChange = (newValue) => {
    if (props?.handleChange) {
      props.handleChange(newValue);
    }
    setValue(newValue);
  };

  useEffect(() => {
    setValue(props.dates);
  }, [props.dates]);

  return (
    <></>
    // <DateRangePicker
    //   // dayClassName={(date, modifiers) =>
    //   //   cx({
    //   //     [classes.mantine]: modifiers.outside,
    //   //   })
    //   // }
    //   // className={classes.itmDateRange}
    //   amountOfMonths={2}
    //   placeholder="Pick dates range"
    //   value={value}
    //   minDate={props.minDate || false}
    //   maxDate={props.maxDate || false}
    //   onChange={(newValue) => {
    //     handleChange(newValue);
    //   }}
    // />
  );
}
