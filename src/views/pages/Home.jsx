import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import NavBar from "../../components/layout-components/NavBar";
import Carousel from "../../components/shared-components/Carousel";

const CarouselWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px'
}));

function Home() {
  return (
    <Box>
      <NavBar />
      <CarouselWrapper>
        <Carousel />
      </CarouselWrapper>
    </Box>
  );
}

export default Home;
