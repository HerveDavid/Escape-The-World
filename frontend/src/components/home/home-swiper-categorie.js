import { Box, Container } from "@mui/material";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { RoomCard } from "src/components/room/client/room-card";
import useRoomsStore from "src/hooks/rooms-store";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

export function HomeSwiperCategorie({ categorie }) {

  const [rooms, setRooms] = useState([]);
  const {fetchWithCategorie} = useRoomsStore();

  useEffect(() => {
    fetchWithCategorie(categorie)
      .then(setRooms)
  }, [categorie]);
  
  return (
    <Box sx={{ pt: 3 }}>
      <Swiper
        className="mySwiper"
        spaceBetween={35}
        slidesPerView={3}
        loop={true}
        direction={"horizontal"}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        mousewheel={true}
        modules={[Mousewheel, Pagination]}
      >
        {rooms &&
          rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <RoomCard room={room} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}