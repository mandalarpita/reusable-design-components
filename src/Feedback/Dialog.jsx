import React from "react";
import { Dialog as MUIDialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import { DialogContentText, IconButton, Stack } from "@mui/material";
import Icon from "../DataDisplay/Icon";
import { makeStyles } from "@mui/styles";
import Button from "../Inputs/Button";
import { useCustomStyles } from "../customClasses";

const Dialog = (props) => {
  const classes = useCustomStyles();

  const { title, children, open, setOpen, onClose = function () {}, elementid = "cw-design-system-dialog", onConfirm, scroll = "paper", dialogActions = <></>, ...others } = props;

  return (
    <>
      <MUIDialog
        open={open}
        elementid={elementid}
        onClose={() => {
          setOpen(false);
          if (onClose) {
            onClose();
          }
        }}
        scroll={scroll}
        {...others}
      >
        <DialogTitle>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
            <Typography variant="body" noWrap color="text.primary">
              {title}
            </Typography>
            <IconButton
              elementid={"cw-design-system-dialog-close"}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Icon sx={{ cursor: "pointer" }} icon={"MaterialIcon.MdClose"} hoverIcon={"MaterialIcon.MdClose"} isSelected={false}></Icon>
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent className={classes.customDialogContent}>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.customDialogActions}>{dialogActions}</DialogActions>
      </MUIDialog>
    </>
  );
};
export default Dialog;
