import React from "react";
import Button from "../Inputs/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
const ConfirmDialog = (props) => {
  const { title, children, open, setOpen, cancelLabel = "No", submitLabel = "Yes", onConfirm, elementid = "cw-design-system-confirm-dialog", elementidleftaction = "cw-design-system-confirm-dialog-cancel", elementidrightaction = "cw-design-system-confirm-dialog-submit" } = props;
  return (
    <Dialog elementid={elementid} open={open} onClose={() => setOpen(false)} aria-labelledby="confirm-dialog">
      <DialogTitle id="confirm-dialog">
        <Typography variant="body1" noWrap color="text.primary">
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body2" noWrap color="text.primary">
          {children}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          elementid={elementidleftaction}
          variant="outlined"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setOpen(false);
          }}
          color="primary"
        >
          {cancelLabel}
        </Button>
        <Button
          elementid={elementidrightaction}
          variant="contained"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setOpen(false);
            onConfirm();
          }}
          color="primary"
        >
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
