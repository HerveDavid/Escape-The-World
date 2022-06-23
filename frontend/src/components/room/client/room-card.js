import PropTypes from "prop-types";
import { Card, CardActionArea, CardContent } from "@mui/material";
import { BookRoomDialog } from "src/components/room/client/room-book-dialog";
import { useClickModal } from "src/hooks/use-click-modal";

export function RoomCard({ room }) {
  const [isOpen, handleOpen, handleClose] = useClickModal(); 

  return (
    <>
      <Card>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <p>{room.title}</p>
            <p>{room.id}</p>
          </CardContent>
        </CardActionArea>
      </Card>
      <BookRoomDialog open={isOpen} onClose={handleClose} />
    </>
  );
}

RoomCard.propTypes = {
  room: PropTypes.object.isRequired,
};