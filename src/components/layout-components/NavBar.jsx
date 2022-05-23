import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import BookIcon from "@mui/icons-material/Book";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

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

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Bar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: "white",
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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          //   color="inherit"
          sx={{ color: "green" }}
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

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
      <Box
        sx={{
          display: "flex",
          backgroundColor: "green",
          height: "40px",
          justifyContent: "space-between",
          paddingTop:"-5px"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneAndroidIcon />
          <Typography sx={{ fontSize: "10px" }}>
            Download Bookstore App
          </Typography>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '300px'}}>
          <Typography sx={{ color: "white", fontSize: "11px" }}>
            Tentang Bookstore
          </Typography>
          <Typography sx={{ color: "white", fontSize: "11px" }}>
            Mitra Bookstore
          </Typography>
          <Typography sx={{ color: "white", fontSize: "11px" }}>
            Promo
          </Typography>
          <Typography sx={{ color: "white", fontSize: "11px" }}>
           Bookstore Care
          </Typography>
        </Box>
      </Box>
      <AppBar position="static" sx={{ marginTop: -1.5 }}>
        <Bar>
          <Toolbar>
            <BookIcon
              sx={{ marginTop: "-2px", marginRight: "2px", color: "green" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block", color: "green" } }}
            >
              <Typography
                sx={{ display: "inline", fontSize: "20px", fontWeight: "bold" }}
              >
                Book
              </Typography>
              store
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  marginLeft: "10px",
                  fontSize: "11px",
                  color: "#6C727C",
                  marginLeft: "20px",
                },
              }}
            >
              Kategori
            </Typography>

            <Box sx={{}}>
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
                    placeholder="Cari buku pemrograman"
                    inputProps={{ "aria-label": "search" }}
                    sx={{
                      marginLeft: "-35px",
                      color: "#6C727C",
                      fontSize: "12px",
                      minWidth:
                        windowDimenion.winWidth < 1500
                          ? windowDimenion.winWidth * 0.57
                          : windowDimenion.winWidth * 0.68,
                      marginTop: "-1px",
                      // backgroundColor: '#F2F3F4'
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
                <Typography sx={{ color: "#6C727C", fontSize: "11px" }}>
                  Pengembangan Diri
                </Typography>
                <Typography sx={{ color: "#6C727C", fontSize: "11px" }}>
                  Fiksi
                </Typography>
                <Typography sx={{ color: "#6C727C", fontSize: "11px" }}>
                  Biografi
                </Typography>
                <Typography sx={{ color: "#6C727C", fontSize: "11px" }}>
                  Misteri
                </Typography>
                <Typography sx={{ color: "#6C727C", fontSize: "11px" }}>
                  Kesehatan & Fitness
                </Typography>
                <Typography sx={{ color: "#6C727C", fontSize: "11px" }}>
                  Sci-Fi
                </Typography>
                {/* <Typography sx={{color: '#6C727C', fontSize: '11px'}}>Memasak</Typography>
                <Typography sx={{color: '#6C727C', fontSize: '11px'}}>Romansa</Typography>
                <Typography sx={{color: '#6C727C', fontSize: '11px'}}>Sejarah</Typography>
                <Typography sx={{color: '#6C727C', fontSize: '11px'}}>Petualangan</Typography> */}
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon
                    sx={{ color: "#6C727C", fontSize: "18px" }}
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
                    sx={{ color: "#6C727C", fontSize: "18px" }}
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
                  <EmailIcon sx={{ color: "#6C727C", fontSize: "18px" }} />
                </Badge>
              </IconButton>
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
              {/* <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle sx={{ color: "#6C727C" }} />
              </IconButton> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "20px",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    color: "green",
                    border: "1px solid green",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: "bold",
                    height: "30px",
                  }}
                >
                  Masuk
                </Button>
              </Box>
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
                    backgroundColor: "green",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "12px",
                    fontWeight: "bold",
                    height: "30px",
                  }}
                >
                  Daftar
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Bar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
  );
}
