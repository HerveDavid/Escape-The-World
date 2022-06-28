import { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { RoomCard } from "src/components/room/client/room-card";
import useRoomsStore from "src/hooks/rooms-store";
import { CustomerLayout } from "src/components/customer-layout";


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
        <Container maxWidth={false}>
          <Typography sx={{ m: 1 }} variant="h6">
            Top Rooms
          </Typography>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {rooms && rooms.map((room, index) => (
                  <Grid item key={index} lg={4} md={6} xs={12}>
                    <RoomCard room={room} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Index.getLayout = (page) => <CustomerLayout>{page}</CustomerLayout>;

export default Index;