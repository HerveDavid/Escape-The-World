import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";
import { CustomerLayout } from "src/components/customer-layout";
import { RoomCard } from "src/components/room/client/room-card";
import useRoomsStore from "src/hooks/rooms-store";

const Tours = () => {

  const { rooms, fetch } = useRoomsStore();

  useEffect(fetch, []);

  return (
    <>
      <Head>
          <title>Rooms</title>
      </Head>
      <Box>
        <Container maxWidth={false}>
          <Box sx={{ pt: 3}}>
            <Grid container spacing={3}>
              {rooms && rooms.map((room, index) => (
                <Grid item key={index} lg={4} md={6} xs={12}>
                  <RoomCard room={room}/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

Tours.getLayout = (page) => <CustomerLayout>{page}</CustomerLayout>

export default Tours;