import * as React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  FormControl,
  Rating,
  Typography,
} from "@mui/material";
import { API_URL } from 'src/utils/api-endpoint';

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('Room title is required'),
    description: Yup.string()
        .required('Room description is required')
        .max(300, 'Description should be minimaliste'),
    capacity: Yup.number()
        .required('Room capacity is required')
        .min(1, 'need one player')
        .max(50, "room can't host more 50 players"),
    duration: Yup.number()
      .required(1, 'need one minute')
});

export function AddRoomDialog(props) {
  const { onClose, open } = props;
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleClose = () => {
    onClose();
  };

  async function onSubmit(data) {
    await fetch(API_URL + '/rooms', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add room</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new room, please enter a title, description and capacity.
        </DialogContentText>
        <FormControl fullWidth>
          <TextField
            error={errors.title ? true : false}
            fullWidth
            label="Room title"
            margin="normal"
            type="text"
            name="title"
            autoFocus
            variant="outlined"
            required
            {...register('title')}
            sx={{ marginTop: 5 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            required
            {...register('description')}
            error={errors.description ? true : false}
          />
          <TextField
            autoFocus
            margin="dense"
            id="capacity"
            label="Capacity"
            type="number"
            fullWidth
            variant="outlined"
            required
            {...register('capacity')}
            error={errors.capacity ? true : false}
          />
          <TextField
            autoFocus
            margin="dense"
            id="duration"
            label="Duration (minute)"
            type="number"
            fullWidth
            variant="outlined"
            required
            {...register('duration')}
            error={errors.duration ? true : false}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}