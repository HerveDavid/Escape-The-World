import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Pagination, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { RoomCard } from "src/components/room/client/room-card";
import useRoomsStore from "src/hooks/rooms-store";
import { CustomerLayout } from "src/components/customer-layout";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Index = () => {
  const { rooms, fetch } = useRoomsStore();

  useEffect(fetch, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Typography variant="h2" sx={{ ml: 3, mb: 5 }}>
          Popular Categories
        </Typography>
        <Container maxWidth={false}>
          <Typography sx={{ m: 1 }} variant="h6">
            Top Rooms
          </Typography>
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
        </Container>
      </Box>
    </>
  );
};

Index.getLayout = (page) => <CustomerLayout>{page}</CustomerLayout>;

export default Index;