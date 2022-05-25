import { Box, Typography } from "@mui/material";
import React from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  COLOR_GREY_SECONDARY,
} from "../../constants/ThemeConstant";
import { CategorySection_BukuBerkualitas, CategorySection_KirimKemanapun, CategorySection_PengirimanSeluruh, CategorySection_SelaluAda } from "../../constants/TypographyConstant";
function ServiceList() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "107px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid" + COLOR_GREY_SECONDARY,
        borderRadius: "8px",
        padding: '0px 18px 0px 18px'
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{ backgroundColor: "#F2F2F2", padding: 1, borderRadius: "20px" }}
        >
          <LocalOfferIcon sx={{ fontSize: "15px" }} />
        </Box>
        <Box sx={{ marginLeft: "6px" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
            {CategorySection_BukuBerkualitas}
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {CategorySection_SelaluAda}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F2F2F2",
          width: "2px",
          height: "50%",
          ml: "10px",
          mr: "10px",
        }}
      />
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{ backgroundColor: "#F2F2F2", padding: 1, borderRadius: "20px" }}
        >
          <LocalShippingIcon sx={{ fontSize: "15px" }} />
        </Box>
        <Box sx={{ marginLeft: "6px" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
            {CategorySection_PengirimanSeluruh}
          </Typography>
          <Typography sx={{ fontSize: "13px" }}>
            {CategorySection_KirimKemanapun}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ServiceList;
