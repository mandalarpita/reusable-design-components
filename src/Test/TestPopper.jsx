import React, { useState } from "react";
import Button from "../Inputs/Button";

// material imports
import Stack from "@mui/material/Stack";
import Popper from "../Feedback/Popper";

export default function PopperExample() {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(false);
  const [open, setOpen] = useState(false);
  const [reElement, setRefElement] = useState(null);

  const handlePopperClose = () => {
    setAnchorEl(!anchorEl);
    handlePopperClick(null);
  };

  const handlePopperClick = (placement, event) => {
    setAnchorEl(event?.currentTarget || null);
    setOpen((prev) => placement !== placement || !prev);
  };
  return (
    <>
      <Button
        color="primary"
        aria-haspopup="true"
        onClick={(e) => {
          handlePopperClick("bottom-start", e);
        }}
        innerRef={setRefElement}
        ref={setRefElement}
      >
        {"Click to proceed"}
      </Button>

      <Popper
        open={Boolean(anchorEl)}
        referenceElement={reElement}
        placement={"bottom-end"}
        anchorEl={anchorEl}
        onClose={() => {
          handlePopperClick(null);
        }}
      >
        <Stack alignItems={"start"}>
          <Button>{"Add user"}</Button>
          <Button>{"Delete user"}</Button>
          <Button>{"Activate user"}</Button>
        </Stack>
      </Popper>
    </>
  );
}
