import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { RoomListToolBar }  from '../components/room/room-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { RoomCard } from '../components/room/room-card';
import { API_URL } from 'src/utils/api-endpoint';

function Rooms({ rooms }) {
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
                rooms.map((product) => (
                  <Grid item key={product.id} lg={4} md={6} xs={12}>
                    <RoomCard room={product} />
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

export async function getStaticProps() {
  const res = await fetch(API_URL + "/room/all");
  const rooms = await res.json();

  return {
    props: {
      rooms,
    },
    revalidate: 1,
  };
}

export default Rooms;