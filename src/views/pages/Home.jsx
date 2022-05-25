import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Layout from "../../components/layout-components/Layout";
import NavBar from "../../components/layout-components/NavBar";
import SpacingBetweenElements from "../../components/layout-components/SpacingBetweenElements";
import Carousel from "../../components/shared-components/Carousel";
import CategorySection from "../../components/shared-components/CategorySection";

const CarouselWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px'
}));

function Home() {

  return (
    <Box>
      <NavBar/>
      <Layout>
      <CarouselWrapper>
        <Carousel />
      </CarouselWrapper>
      <SpacingBetweenElements/>
      <CategorySection>

      </CategorySection>
      </Layout>
    </Box>
  );
}

export default Home;
