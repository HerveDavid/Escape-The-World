import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export function BookRoomDialog({ open, onClose, room }) {

  const handleClose = onClose;

  const handleBook = () => {
    console.log("Send booking: " + room.id)
    handleClose();
  };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>{room.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{room.description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleBook} disabled={true}>Book now</Button>
      </DialogActions>
    </Dialog>
  );
}

BookRoomDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  room: PropTypes.object.isRequired,
};