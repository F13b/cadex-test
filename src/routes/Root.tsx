import { Box, Grid2, Typography } from "@mui/material";
import Header from "../components/Header";
import MButton from "../components/MButton";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <main>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"top"}
          p={"3rem"}
          pb={"4rem"}
          bgcolor={"#f5f5f5"}
        >
          <Box width={"40%"}>
            <Typography component={"h1"} variant="h3" fontWeight={"bold"}>
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
            frameBorder={0}
            allowFullScreen
            width={"45%"}
            height={"400px"}
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
            textAlign={"center"}
            mb={"4rem"}
            fontWeight={"bold"}
          >
            Also very important title
          </Typography>
          <Grid2 container spacing={12} mb={"3rem"}>
            <Grid2
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
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
            fontWeight={"bold"}
            mb={"4rem"}
          >
            Less important title
          </Typography>
          <MButton title="Contact us" action={() => navigate("/contact-us")}/>
        </Box>
        <Footer />
      </main>
    </>
  );
};

export default Root;
