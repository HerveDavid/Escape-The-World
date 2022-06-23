import { useEffect } from "react";
import { RoomCard } from "src/components/room/client/room-card";
import useRoomsStore from "src/hooks/rooms-store";


const Index = () => {
  const {rooms, fetch, removeRoom} = useRoomsStore();

  useEffect(fetch, [])

  return (
  <>
    <p>Total: {rooms.length}</p>
    <div>
      {rooms.map((room, index) => (<RoomCard key={index} room={room} />))}
    </div>
  </>
  );
};

export default Index;