import React from "react";
import {useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Box, IconButton } from "@mui/material";
import { COLOR_WHITE } from "../../constants/ThemeConstant";
import CAROUSEL_SLIDE1 from "../../assets/carousel/1.png"
import CAROUSEL_SLIDE2 from "../../assets/carousel/2.png"
import CAROUSEL_SLIDE3 from "../../assets/carousel/3.png"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Superbrand Festifal",
    imgPath: CAROUSEL_SLIDE1,
  },
  {
    label: "Dampak",
    imgPath: CAROUSEL_SLIDE2,
  },
  {
    label: "Program Donasi Buku",
    imgPath: CAROUSEL_SLIDE3,
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <Box
      sx={{
        maxWidth: 1000,
        height: 260,
        bgcolor: 'red',
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        borderRadius: '10px',
      }}
    >
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <Box key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: "block",
                  overflow: "hidden",
                  maxWidth: "100%",
                  borderRadius: '10px',
                  marginBottom: 10
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ position: "absolute", height: "100%", width: "100%" }}>
        <Box sx={{display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center",}}>
          <IconButton
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "white",
            margin: "0 8px",}}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "white",
            margin: "0 8px",}}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        </Box>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        sx={{ position: "relative", top: -32, backgroundColor: "transparent", "& .MuiMobileStepper-dotActive": {bgcolor: COLOR_WHITE}, display: 'flex', justifyContent: 'flex-start', marginBottom: -3}}
        backButton={<Box />}
        nextButton={<Box />}
      />
    </Box>
  );
}

export default Carousel;
