import { Box } from "@mui/system";
import React from "react";

function Layout(props) {

    const [windowDimenion, detectHW] = React.useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
      });
    
      const detectSize = () => {
        detectHW({
          winWidth: window.innerWidth,
          winHeight: window.innerHeight,
        });
      };
    
      React.useEffect(() => {
        window.addEventListener("resize", detectSize);
    
        return () => {
          window.removeEventListener("resize", detectSize);
          console.log(windowDimenion.winWidth);
        };
      }, [windowDimenion]);
    
  return (
    <Box sx={{ display: "flex", maxWidth: windowDimenion.winWidth, justifyContent: "center", }}>
      <Box sx={{width: '1000px'}}>{props.children}</Box>
    </Box>
  );
}

export default Layout;
