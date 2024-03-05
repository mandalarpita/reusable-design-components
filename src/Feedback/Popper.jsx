import * as React from "react";
import { Popper as MUIPopper } from "@mui/material";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import { useCustomStyles } from "../customClasses";
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      document.addEventListener("scroll", listener);

      return () => {
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
    [ref, handler]
  );
}

export default function Popper(props) {
  const { children, open, onClose, anchorEl, elementid = "cw-design-system-popper", placement, ...others } = props;
  const classes = useCustomStyles();

  const ref = React.useRef();
  useOnClickOutside(ref, (e) => onClose(e));
  return (
    <MUIPopper elementid={elementid} sx={{ zIndex: 1000 }} open={open} ref={ref} anchorEl={anchorEl} placement={placement} transition {...others}>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper className={classes.popperCard}>{children}</Paper>
        </Fade>
      )}
    </MUIPopper>
  );
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
