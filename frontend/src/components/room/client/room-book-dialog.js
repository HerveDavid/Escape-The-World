import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
        <Typography sx={{mt: 2}}>Availabilities</Typography>
        <Box sx={{ mt: 2, flexGrow: 1 }}>
          <Grid container spacing={{  }} columns={{  }}>
            {Array.from(Array(24)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Button>10:{index}</Button>
              </Grid>
            ))}
          </Grid>
        </Box>
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