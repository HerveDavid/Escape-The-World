import PropTypes from "prop-types";
import Image from "next/image";
import { Card, CardActionArea, CardContent, CardActions, Button, Typography } from "@mui/material";
import { BookRoomDialog } from "src/components/room/client/room-book-dialog";
import { useClickModal } from "src/hooks/use-click-modal";

export function RoomCard({ room }) {
  const [isOpen, handleOpen, handleClose] = useClickModal();

  return (
    <>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <Image src={room.media} alt={"Picture of " + room.title} width={800} height={300} />
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