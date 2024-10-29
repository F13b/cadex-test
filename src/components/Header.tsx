import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MButton from "./MButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"2rem 0"}
        m={"0 2rem"}
      >
        <Typography variant="h5" textTransform={"capitalize"}>
          some company
        </Typography>
        <MButton title="Contact us" action={() => navigate("/contact-us")} />
      </Box>
    </header>
  );
};

export default Header;
