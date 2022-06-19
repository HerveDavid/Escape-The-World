import * as React from 'react';
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
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
} from "@mui/material";
import { TurnedIn } from '@mui/icons-material';

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
});

export function AddRoomDialog(props) {
  const { onClose, open } = props;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleClose = () => {
    onClose();
  };

  const isValidForm = errors => {
    return !errors;
  }

  const onSubmit = data => {
      console.log(JSON.stringify(data, null, 2));
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add room</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new room, please enter a title, description and capacity.
        </DialogContentText>
        <FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Room title"
            type="text"
            fullWidth
            variant="outlined"
            required
            {...register('title')}
            error={errors.title ? true : false}
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
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  );
}