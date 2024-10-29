import { Box, Grid2, Typography } from "@mui/material";
import Header from "../components/Header";
import MButton from "../components/MButton";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Box>
          <Box>
            <Typography component={"h1"} variant="h3">
              Most important title on the page
            </Typography>
            <Typography component={"p"}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique quasi aperiam fugiat deserunt molestias iure facere
              veniam illum atque earum, corporis ea odio accusantium temporibus
              architecto. Praesentium, ea? Quod, tempore.
            </Typography>
          </Box>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder={"0"}
            allowFullScreen
          ></iframe>
        </Box>
        <Box>
          <Typography>Also very important title</Typography>
          <Grid2 container spacing={8}>
            <Grid2
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid2 key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                  <Box>
                    <Typography>Title</Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam mattis, leo et condimentum
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <MButton title="Contact us" />
        </Box>
        <Box>
          <Typography>Less important title</Typography>
          <MButton title="Contact us" />
        </Box>
        <Footer />
      </main>
    </>
  );
};

export default Root;
