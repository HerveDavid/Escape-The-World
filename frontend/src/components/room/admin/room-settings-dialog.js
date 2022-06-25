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
import useRoomsStore from 'src/hooks/rooms-store';

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
  
  const { updateRoom, removeRoom } = useRoomsStore();
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

  function onSubmit(data) {
    updateRoom({...data, id: room.id});
    onClose();
  }

  function handleRemove() {
    removeRoom(room)
    onClose();
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