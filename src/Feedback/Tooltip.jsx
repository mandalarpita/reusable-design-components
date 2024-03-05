//To use this as the regular Tooltip just replace the tag by Tooltip.
// Example:
// <Tooltip title={"Apps"} enterDelay={700} enterNextDelay={700}>
//   <CustomIcon icon={"MaterialIcon.MdApps"} style={{ fontSize: "27px", cursor: "pointer" }} />
// </Tooltip>

//To use only when text is trimmed, necessary parameters are as follows:
// useTrimTextTooltip - boolean, true for trimming, false for not trimming
// innerContentText - displayed text to be checked for trimming
// innerContentTextClass - class to be used for displayed text
// IMPORTANT: Custom trimming won't work for Tooltips with children and can only work with text props as mentioned above
// IMPORTANT: Custom trimming will also render the text to be displayed along with the tooltip
// Example:
// <Tooltip
//   useTrimTextTooltip={true}
//   innerContentText={task.createdByName ?? task.createdBy}
//   innerContentTextClass={classes.colSpan}
//   title={task.createdByName ?? task.createdBy}
//   placement="bottom-start"
// />

// All props from Tooltip work out of the box
import React from "react";
import { useRef, useEffect, useState, useCallback } from "react";
import { Tooltip as MUITooltip } from "@mui/material";
const Tooltip = (props) => {
  let { innerContent, useTrimTextTooltip, innerContentText, enterDelay, enterNextDelay, innerContentTextClass, children, ...other } = props;

  const compareSize = useCallback(() => {
    const compare = textElementRef?.current?.scrollWidth >= textElementRef?.current?.clientWidth + 1;
    setHover(compare);
  }, []);
  const textElementRef = useRef();

  const [hoverStatus, setHover] = useState(false);

  useEffect(() => {
    if (useTrimTextTooltip) {
      compareSize();
      window.addEventListener("resize", compareSize);
      return () => {
        window.removeEventListener("resize", compareSize);
      };
    }
  });

  return (
    <>
      {useTrimTextTooltip ? (
        <MUITooltip disableHoverListener={!hoverStatus} {...other} enterDelay={enterDelay || 700} enterNextDelay={enterNextDelay || 700}>
          <div ref={textElementRef} className={innerContentTextClass}>
            {innerContentText}
          </div>
        </MUITooltip>
      ) : (
        <MUITooltip enterDelay={enterDelay || 700} enterNextDelay={enterNextDelay || 700} {...other}>
          {children}
        </MUITooltip>
      )}
    </>
  );
};

export default Tooltip;
