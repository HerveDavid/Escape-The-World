import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { RoomListToolBar }  from '../components/room/admin/room-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { RoomCard } from '../components/room/admin/room-card';
import useRoomsStore from 'src/hooks/rooms-store';
import { useEffect } from 'react';

function Rooms() {

  const { rooms, fetch } = useRoomsStore();

  useEffect(fetch, []);

  return (
    <>
      <Head>
        <title>Rooms</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <RoomListToolBar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {rooms &&
                rooms.map((room, index) => (
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
}

Rooms.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Rooms;