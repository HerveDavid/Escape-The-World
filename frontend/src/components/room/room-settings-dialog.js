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
import { API_URL } from 'src/utils/api-endpoint';

const validationSchema = Yup.object().shape({
    title: Yup.string(),
    description: Yup.string()
        .max(300, 'Description should be minimaliste'),
    capacity: Yup.number()
        .min(1, 'need one player')
        .max(50, "room can't host more 50 players"),
    duration: Yup.number()
      .min(1, 'need one minute')
});

export function SettingsRoomDialog(props) {
  
  const { onClose, open, room } = props;
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
    await fetch(API_URL + '/room', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...data, id: room.id})
    })
  }

  async function handleRemove() {
    await fetch(API_URL + "/room/remove/" + room.id, {
      method: 'DELETE',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
    });
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Setting room</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Modification of room
        </DialogContentText>
        <FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Room title"
            type="text"
            defaultValue={room.title}
            fullWidth
            variant="outlined"
            {...register('title')}
            error={errors.title ? true : false}
            sx={{ marginTop: 5 }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            defaultValue={room.description}
            fullWidth
            variant="outlined"
            multiline
            {...register('description')}
            error={errors.description ? true : false}
          />
          <TextField
            autoFocus
            margin="dense"
            id="capacity"
            label="Capacity"
            defaultValue={room.capacity}
            type="number"
            fullWidth
            variant="outlined"
            {...register('capacity')}
            error={errors.capacity ? true : false}
          />
          <TextField
            autoFocus
            margin="dense"
            id="duration"
            label="Duration"
            defaultValue={room.duration}
            type="number"
            fullWidth
            variant="outlined"
            {...register('duration')}
            error={errors.duration ? true : false}
          />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRemove} sx={{ color: 'red' }}>Remove</Button>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit(onSubmit)}>Change</Button>
      </DialogActions>
    </Dialog>
  );
}