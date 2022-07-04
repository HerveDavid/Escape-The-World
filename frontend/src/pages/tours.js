import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";
import { useEffect } from "react";
import { CustomerLayout } from "src/components/customer-layout";
import { RoomCard } from "src/components/room/client/room-card";
import { RoomListToolBar } from "src/components/room/client/room-list-toolbar";
import { useState } from 'react';
import useRoomsStore from "src/hooks/rooms-store";


const Tours = () => {

  const [data, setData] = useState([]);
  const { fetchWithCategorie } = useRoomsStore();

  useEffect(() => {
    fetchWithCategorie("all")
      .then(setData);
  }, []);

  // /!\ in only one object
  const [categorie, setCategorie] = useState('all');
  const handleCategorie = (event) => {
      setCategorie(event.target.value);
  }

  const [dateStart, setDateStart] = useState(new Date());
  const handleDateStart = (newValue) => {
      setDateStart(newValue);
  }

  const [timeStart, setTimeStart] = useState(new Date());
  const handleTimeStart = (newValue) => {
      setTimeStart(newValue);
  }

  const handleSearch = () => {
      // console.log(categorie)
      // console.log(dateStart)
      // console.log(timeStart)
      console.log(categorie)
      fetchWithCategorie(categorie)
        .then(setData);
  }

  return (
    <>
      <Head>
          <title>Rooms</title>
      </Head>
      <Box>
        <Container maxWidth={false}>
        <RoomListToolBar 
          onCategorie={handleCategorie}
          defaultCategorie={categorie}

          onDateStart={handleDateStart}
          defaultDate={dateStart}
        
          onTimeStart={handleTimeStart}
          defaultTime={timeStart}
    
          onSearch={handleSearch}
        />
          <Box sx={{ pt: 3}}>
            <Grid container spacing={3}>
              {data && data.map((room, index) => (
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