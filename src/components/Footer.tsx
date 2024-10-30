import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box component={"footer"} borderTop={"1px solid grey"}>
      <Typography
        component={"p"}
        variant="h5"
        textAlign={"center"}
        p={"2rem 0"}
      >
        Some company 2024
      </Typography>
    </Box>
  );
};

export default Footer;
