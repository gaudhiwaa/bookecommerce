import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  COLOR_GREY_SECONDARY,
} from "../../constants/ThemeConstant";
import { CategorySection_KategoriPilihan, CategorySection_PelayananKami } from "../../constants/TypographyConstant";
import ServiceList from "./ServiceList";

function CategorySection() {
    
  return (
    <Box sx={{maxWidth: '100%'}}>
      <Paper
        elevation={2}
        sx={{ padding: "20px 12px 20px 12px", borderRadius: "8px" }}
      >
        <Box sx={{display: 'flex'}}>
          <Box sx={{width: "50%"}}>
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                {CategorySection_KategoriPilihan}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <Box sx={{ width: "22%", height: "100%", display: "flex" }}>
                <Box
                  component="img"
                  src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/12/3127195/3127195_fbdff656-9985-4524-a3aa-b3413f47fc17.jpg.webp"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    border: "1px solid" + COLOR_GREY_SECONDARY,
                  }}
                />
              </Box>
              <Box sx={{ width: "22%", height: "100%", display: "flex" }}>
                <Box
                  component="img"
                  src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/12/3127195/3127195_b75c9326-8ef8-48d9-9d22-97b03742a6a9.jpg.webp"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    border: "1px solid" + COLOR_GREY_SECONDARY,
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "22%",
                  height: "100%",
                  display: "flex",
                  border: "1px solid" + COLOR_GREY_SECONDARY,
                  borderRadius: "8px",
                }}
              >
                <Box
                  component="img"
                  src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/8/11/3127195/3127195_ccc449f6-bbde-44df-b282-acdfe6552471.jpg.webp"
                  sx={{ width: "100%", height: "100%", borderRadius: "8px" }}
                />
              </Box>
              <Box
                sx={{
                  width: "22%",
                  height: "100%",
                  display: "flex",
                  border: "1px solid" + COLOR_GREY_SECONDARY,
                  borderRadius: "8px",
                }}
              >
                <Box
                  component="img"
                  src="https://images.tokopedia.net/img/cache/200-square/attachment/2018/11/29/26958584/26958584_0551f378-40d9-4695-b7a5-d215f93881a1.jpg.webp"
                  sx={{ width: "100%", height: "100%", borderRadius: "8px" }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{width: '10px'}}/>
          <Box sx={{ width: "50%",}}>
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>{CategorySection_PelayananKami}</Typography>
            </Box>
            <Box sx={{marginTop: "10px"}}>
                <ServiceList/>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default CategorySection;
