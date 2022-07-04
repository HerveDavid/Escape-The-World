import { Box } from "@mui/material";
import { CustomerLayout } from "src/components/customer-layout";
import { HomePopularCategories } from "src/components/home/home-popular-categories";

const Index = () => {

  return (
    <>
      <Box>
        <HomePopularCategories />
      </Box>
    </>
  );
};

Index.getLayout = (page) => <CustomerLayout>{page}</CustomerLayout>;

export default Index;