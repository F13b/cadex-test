import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      borderTop={"1px solid grey"}
      sx={{ position: "relative", bottom: 0, left: 0 }}
    >
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
