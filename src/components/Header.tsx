import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MButton from "./MButton";

const Header = () => {
  return (
    <header>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"1rem 0"}
      >
        <Typography variant="h5" textTransform={"capitalize"}>
          some company
        </Typography>
        <MButton title="Contact us" />
      </Box>
    </header>
  );
};

export default Header;
