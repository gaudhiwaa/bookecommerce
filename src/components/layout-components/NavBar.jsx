import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import BookIcon from "@mui/icons-material/Book";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  NavBar_biografi,
  NavBar_book,
  NavBar_cariBuku,
  NavBar_daftar,
  NavBar_fiksi,
  NavBar_kategori,
  NavBar_kesehatanDanFitness,
  NavBar_masuk,
  NavBar_misteri,
  NavBar_pengembanganDiri,
  NavBar_sciFi,
  NavBar_store,
} from "../../constants/TypographyConstant";
import {
  COLOR_WHITE,
  COLOR_GREEN_PRIMARY,
  COLOR_GREY_PRIMARY,
} from "../../constants/ThemeConstant";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const Bar = styled(Toolbar)(() => ({
  backgroundColor: COLOR_WHITE,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavBar() {
  const mobileMenuId = "primary-search-account-menu-mobile";

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ marginTop: -1.5 }}>
        <Bar>
          <Toolbar>
            {/* title */}
            <BookIcon
              sx={{
                marginTop: "-2px",
                marginRight: "2px",
                color: COLOR_GREEN_PRIMARY,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  color: COLOR_GREEN_PRIMARY,
                },
              }}
            >
              <Typography
                sx={{ display: "inline", fontSize: "20px", fontWeight: "bold" }}
              >
                {NavBar_book}
              </Typography>
              {NavBar_store}
            </Typography>

            {/* category */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  fontSize: "11px",
                  color: COLOR_GREY_PRIMARY,
                  marginLeft: "20px",
                },
              }}
            >
              {NavBar_kategori}
            </Typography>

            {/* search */}
            <Box>
              <Search
                sx={{
                  border: "1px solid #E5E7E9",
                  height: "30px",
                  borderRadius: "8px",
                  marginTop: "25px",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <StyledInputBase
                    placeholder={NavBar_cariBuku}
                    inputProps={{ "aria-label": "search" }}
                    sx={{
                      marginLeft: "-35px",
                      color: COLOR_GREY_PRIMARY,
                      fontSize: "12px",
                      minWidth:
                        windowDimenion.winWidth < 1500
                          ? windowDimenion.winWidth * 0.57
                          : windowDimenion.winWidth * 0.68,
                      marginTop: "-1px",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#F2F3F4",
                      height: "30px",
                      width: "30px",
                      marginTop: "-2px",
                      borderRadius: "1px 7px 7px 0px",
                      justifyContent: "center",
                    }}
                  >
                    <SearchIcon sx={{ color: "#9FA6B0", fontSize: "20px" }} />
                  </Box>
                </Box>
              </Search>

              {/* category list */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "30px",
                  marginLeft: "26px",
                  marginTop: "0px",
                  width: "400px",
                }}
              >
                <Typography
                  sx={{ color: COLOR_GREY_PRIMARY, fontSize: "11px" }}
                >
                  {NavBar_pengembanganDiri}
                </Typography>
                <Typography
                  sx={{ color: COLOR_GREY_PRIMARY, fontSize: "11px" }}
                >
                  {NavBar_fiksi}
                </Typography>
                <Typography
                  sx={{ color: COLOR_GREY_PRIMARY, fontSize: "11px" }}
                >
                  {NavBar_biografi}
                </Typography>
                <Typography
                  sx={{ color: COLOR_GREY_PRIMARY, fontSize: "11px" }}
                >
                  {NavBar_misteri}
                </Typography>
                <Typography
                  sx={{ color: COLOR_GREY_PRIMARY, fontSize: "11px" }}
                >
                  {NavBar_kesehatanDanFitness}
                </Typography>
                <Typography
                  sx={{ color: COLOR_GREY_PRIMARY, fontSize: "11px" }}
                >
                  {NavBar_sciFi}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }} />

            {/* shop & notification */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon
                    sx={{ color: COLOR_GREY_PRIMARY, fontSize: "18px" }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{ marginLeft: "-20x" }}
              >
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon
                    sx={{ color: COLOR_GREY_PRIMARY, fontSize: "18px" }}
                  />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                sx={{ marginLeft: "-20x" }}
              >
                <Badge badgeContent={0} color="error">
                  <EmailIcon
                    sx={{ color: COLOR_GREY_PRIMARY, fontSize: "18px" }}
                  />
                </Badge>
              </IconButton>

              {/* divider */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "1px",
                    height: "25px",
                    backgroundColor: "#E0E0E0",
                  }}
                />
              </Box>

              {/* login & register */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginLeft: "20px",
                  marginTop: "20px",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: COLOR_GREEN_PRIMARY,
                      border: "1px solid" + COLOR_GREEN_PRIMARY,
                      borderRadius: "8px",
                      textTransform: "none",
                      fontSize: "12px",
                      fontWeight: "bold",
                      height: "30px",
                      ":hover": {
                        bgcolor: COLOR_WHITE,
                        color: COLOR_GREEN_PRIMARY,
                        border: "1px solid" + COLOR_GREEN_PRIMARY,
                      },
                    }}
                  >
                    {NavBar_masuk}
                  </Button>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: COLOR_GREEN_PRIMARY,
                        borderRadius: "8px",
                        textTransform: "none",
                        fontSize: "12px",
                        fontWeight: "bold",
                        height: "30px",
                        ":hover": {
                          bgcolor: COLOR_GREEN_PRIMARY,
                          color: COLOR_WHITE,
                        },
                      }}
                    >
                      {NavBar_daftar}
                    </Button>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "flex-end",
                    alignItems: 'center'
                    
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: "10px", color: COLOR_GREY_PRIMARY, marginTop: '2px', marginRight: '2px'}} />
                  <Typography
                    sx={{
                      color: COLOR_GREY_PRIMARY,
                      fontSize: "11px",
                      marginTop: "7px",
                      marginBottom: "1px",
                    }}
                  >
                    Dikirim ke {""}
                    <Typography sx={{ fontWeight: "bold", display: 'inline',fontSize: "11px",}}>Rumah</Typography>
                    <KeyboardArrowDownIcon sx={{ fontSize: "10px",}}/>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Bar>
      </AppBar>
    </Box>
  );
}
