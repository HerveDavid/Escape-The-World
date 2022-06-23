import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export function BookRoomDialog(props) {
  const { open, onClose } = props;

  return (
    <Dialog fullScreen onClose={onClose} open={open}>
        <DialogTitle>Hello</DialogTitle>
        <DialogContent>
            <DialogContentText>Au revoir</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
        </DialogActions>
    </Dialog>
  );
}