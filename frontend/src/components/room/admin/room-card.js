import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography, CardActionArea, Rating } from '@mui/material';
import { Clock as ClockIcon } from '../../../icons/clock';
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { getFormatDate } from 'src/utils/get-format-date';
import { SettingsRoomDialog } from 'src/components/room/admin/room-settings-dialog';
import React from 'react';
import { useClickModal } from "src/hooks/use-click-modal";

export function RoomCard({ room, ...rest }) {

  const [isOpen, handleOpen, handleClose] = useClickModal();
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          
        }}
        {...rest}
      >
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 3
              }}
            >
              <Avatar
                alt="Product"
                src={room.media}
                variant="square"
              />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {room.title}
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="body1"
            >
              {room.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <Box sx={{ p: 2 }}>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <ClockIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                Updated {getFormatDate(room.uptatedAt)} ago
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <PeopleIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {room.capacity}
                {' '}
                Capacity
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <CalendarMonthIcon color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                sx={{ pl: 1 }}
                variant="body2"
              >
                {room.bookings || 0}
                {' '}
                Bookings
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <Rating readOnly value={room.rating || 0}></Rating>
            </Grid>
          </Grid>
        </Box>
      </Card>
      <SettingsRoomDialog open={isOpen} onClose={handleClose} room={room} />
    </>
  );
}

RoomCard.propTypes = {
  room: PropTypes.object.isRequired
};
