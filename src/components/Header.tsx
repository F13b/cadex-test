import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MButton from "./MButton";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box component={"header"} borderBottom={"1px solid grey"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"2rem 0"}
        m={"0 2rem"}
      >
        <Typography
          component={Link}
          to={"/"}
          variant="h5"
          textTransform={"capitalize"}
          sx={(theme) => ({
            [theme.breakpoints.up("xs")]: { fontSize: "1rem" },
            [theme.breakpoints.up("sm")]: { fontSize: "1rem" },
            [theme.breakpoints.up("md")]: { fontSize: "1.5rem" },
            [theme.breakpoints.up("lg")]: { fontSize: "2rem" },
          })}
        >
          some company
        </Typography>
        <MButton title="Contact us" action={() => navigate("/contact-us")} />
      </Box>
    </Box>
  );
};

export default Header;
