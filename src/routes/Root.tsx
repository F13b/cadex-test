import { Box, Grid2, Typography } from "@mui/material";
import Header from "../components/Header";
import MButton from "../components/MButton";
import Footer from "../components/Footer";
import { css } from "../../styled-system/css";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <Box
          sx={(theme) => ({
            p: "1rem",
            pb: "4rem",
            bgcolor: "#f5f5f5",
            [theme.breakpoints.up("md")]: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "top",
              p: "3rem",
            },
          })}
        >
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("sm")]: { width: "100%" },
              [theme.breakpoints.up("md")]: { width: "40%" },
            })}
          >
            <Typography
              component={"h1"}
              variant="h3"
              sx={(theme) => ({
                fontWeight: "bold",
                [theme.breakpoints.up("xs")]: { fontSize: "1rem" },
                [theme.breakpoints.up("sm")]: { fontSize: "2rem" },
                [theme.breakpoints.up("md")]: { fontSize: "3rem" },
              })}
            >
              Most important title on the page
            </Typography>
            <Typography component={"p"} mt={"1rem"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique quasi aperiam fugiat deserunt molestias iure facere
              veniam illum atque earum, corporis ea odio accusantium temporibus
              architecto. Praesentium, ea? Quod, tempore.
            </Typography>
          </Box>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allowFullScreen
            frameBorder={0}
            className={css({
              width: { base: "100%", sm: "100%", lg: "45%" },
              height: { base: "200px", sm: "400px", lg: "500px" },
              mt: { base: "1rem", lg: "0rem" },
            })}
          ></iframe>
        </Box>
        <Box
          width={"80%"}
          m={"4rem auto"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            component={"h2"}
            variant="h3"
            sx={(theme) => ({
              fontWeight: "bold",
              textAlign: "center",
              mb: "4rem",
              [theme.breakpoints.up("xs")]: { fontSize: "2rem" },
              [theme.breakpoints.up("sm")]: { fontSize: "2rem" },
              [theme.breakpoints.up("md")]: { fontSize: "3rem" },
            })}
          >
            Also very important title
          </Typography>
          <Grid2 container spacing={12} mb={"3rem"}>
            <Grid2
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                  <Box>
                    <Typography
                      component={"h5"}
                      variant="h5"
                      fontWeight={"bold"}
                    >
                      Title
                    </Typography>
                    <Typography component={"p"} mt={"1rem"} color="#757575">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam mattis, leo et condimentum
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <MButton title="Contact us" action={() => navigate("/contact-us")} />
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          bgcolor={"#f5f5f5"}
          p={"4rem 0"}
        >
          <Typography
            component={"h3"}
            variant="h3"
            sx={(theme) => ({
              fontWeight: "bold",
              mb: "3rem",
              [theme.breakpoints.up("xs")]: { fontSize: "2rem" },
              [theme.breakpoints.up("sm")]: { fontSize: "2rem" },
              [theme.breakpoints.up("md")]: { fontSize: "3rem" },
            })}
          >
            Less important title
          </Typography>
          <MButton title="Contact us" action={() => navigate("/contact-us")} />
        </Box>
        <Footer />
      </main>
    </>
  );
};

export default Root;
