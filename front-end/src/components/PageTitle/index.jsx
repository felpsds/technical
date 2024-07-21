import React from "react";
import { Typography, Box } from "@mui/material";
const PageTitle = ({ title, subtitle }) => {
  return (
    <Box mb={"20px"}>
      <Typography variant="h1">
        {title}
      </Typography>

      <Typography sx={{
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        marginTop: "13px",
        marginRight: "25px",
        maxWidth: "800px"
      }}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageTitle;