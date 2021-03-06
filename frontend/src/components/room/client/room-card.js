import PropTypes from "prop-types";
import Image from "next/image";
import { Card, CardActionArea, CardContent, CardActions, Button, Typography, Box, Rating, Grid, Item } from "@mui/material";
import { BookRoomDialog } from "src/components/room/client/room-book-dialog";
import { useClickModal } from "src/hooks/use-click-modal";


export function RoomCard({ room }) {
  const [isOpen, handleOpen, handleClose] = useClickModal();

  return (
    <>
      <Card sx={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover'}}>
        <CardActionArea onClick={handleOpen}>
          <Image
            src="/static/images/rooms/example.jpg"
            alt={"Picture of " + room.title}
            width={800}
            height={300}
          />
          <CardContent>
            <Typography color="textPrimary" gutterBottom variant="h6">
              {room.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {room.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button>See more</Button>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Rating defaultValue={room.rating} size="small" readOnly />
          </CardActions>
        </CardActionArea>
      </Card>
      <BookRoomDialog open={isOpen} onClose={handleClose} room={room} />
    </>
  );
}

RoomCard.propTypes = {
  room: PropTypes.object.isRequired,
};