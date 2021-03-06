import { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { HomeSwiperCategorie } from "src/components/home/home-swiper-categorie";
import { roomsCategorie } from "src/hooks/rooms-categorie";
import useCategoriesStore from "src/hooks/categories-store";

const categories = [
  {
    label: "Top rooms",
    type: roomsCategorie.TOP,
  },
  {
    label: "Adventure",
    type: roomsCategorie.ADVENTURE,
  },
  {
    label: "Horror",
    type: roomsCategorie.HORROR,
  },
  {
    label: "Movie",
    type: roomsCategorie.MOVIE,
  }
]

export function HomePopularCategories() {

  const [value, setValue] = useState("0");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h2" sx={{ mb: 4 }}>
        Popular Categories
      </Typography>
      <Box sx={{ typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              {categories.map((categorie, index) => (
                <Tab key={index} label={categorie.label} value={index.toString()} />
              ))}
            </TabList>
          </Box>
            <TabPanel value={"0"}>
              <HomeSwiperCategorie categorie={categories[0].type} />
            </TabPanel>
            <TabPanel value={"1"}>
              <HomeSwiperCategorie categorie={categories[1].type} />
            </TabPanel>
            <TabPanel value={"2"}>
              <HomeSwiperCategorie categorie={categories[2].type} />
            </TabPanel>
            <TabPanel value={"3"}>
              <HomeSwiperCategorie categorie={categories[3].type} />
            </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
