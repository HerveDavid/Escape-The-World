import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import { rooms } from '../__mocks__/rooms';
import { RoomListToolBar } from '../components/room/room-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { RoomCard } from '../components/room/room-card';

const Rooms = () => (
  <>
    <Head>
      <title>
          Rooms
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <RoomListToolBar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {rooms.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <RoomCard room={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
)

Rooms.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Rooms;