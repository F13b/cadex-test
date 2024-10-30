import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { css } from "../../styled-system/css";
import { useState } from "react";
import * as Yup from "yup";

interface MyFormValues {
  Name: string;
  Email: string;
  Message: string;
}

const labelStyles = css({
  display: "block",
  mb: ".25rem",
});

const inputStyles = css({
  display: "block",
  width: "100%",
  height: "calc(2.25rem + 2px)",
  padding: "0.375rem 0.75rem",
  fontFamily: "inherit",
  fontSize: "1rem",
  lineHeight: "1.5",
  color: "#212529",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid #bdbdbd",
  borderRadius: "0.25rem",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  overflowY: "hidden",
  resize: "both",
  _focus: {
    borderColor: "#bdbdbd",
    outline: 0,
    boxShadow: "0 0 0 0.2rem rgba(158, 158, 158, 0.25)",
  },
});

const formSchema = Yup.object().shape({
  Name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  Email: Yup.string().email("Invalid email").required("Required"),
  Message: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactUs = () => {
  const initialValues: MyFormValues = { Name: "", Email: "", Message: "" };
  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <Header />
      <Box component={"main"} sx={{ minHeight: "70vh" }}>
        {isSubmitted ? (
          <Typography
            component={"h1"}
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              pt: "2rem",
            }}
          >
            Thank you for your interest, {username}
          </Typography>
        ) : (
          <Box width={"80%"} m={"3rem auto"}>
            <Typography
              component={"h1"}
              variant="h3"
              fontWeight={"bold"}
              textAlign={"center"}
              mb={"4rem"}
            >
              Only CTA on the page
            </Typography>
            <Card
              className={css({
                width: {
                  sm: "80%",
                  md: "70%",
                  lg: "40%",
                },
                margin: "0 auto",
              })}
            >
              <CardContent>
                <Formik
                  initialValues={initialValues}
                  validationSchema={formSchema}
                  onSubmit={(values) => {
                    console.log({ values });
                    setUsername(values.Name);
                    setIsSubmitted(true);
                  }}
                >
                  <Form>
                    <Box mb={"1rem"}>
                      <label htmlFor="name" className={labelStyles}>
                        Name
                      </label>
                      <Field
                        id="name"
                        name="Name"
                        placeholder="Your name"
                        className={inputStyles}
                      />
                      <ErrorMessage
                        name="Name"
                        component={"p"}
                        className={css({ mt: ".5rem", color: "red.500" })}
                      />
                    </Box>
                    <Box mb={"1rem"}>
                      <label htmlFor="email" className={labelStyles}>
                        Email
                      </label>
                      <Field
                        id="email"
                        name="Email"
                        type="email"
                        placeholder="Your Email"
                        className={inputStyles}
                      />
                      <ErrorMessage
                        name="Email"
                        component={"p"}
                        className={css({ mt: ".5rem", color: "red.500" })}
                      />
                    </Box>
                    <Box mb={"1rem"}>
                      <label htmlFor="message" className={labelStyles}>
                        Message
                      </label>
                      <Field
                        id="message"
                        name="Message"
                        as="textarea"
                        placeholder="Your message..."
                        className={inputStyles}
                      />
                      <ErrorMessage
                        name="Message"
                        component={"p"}
                        className={css({ mt: ".5rem", color: "red.500" })}
                      />
                    </Box>
                    <Button
                      type="submit"
                      sx={{
                        width: "100%",
                        backgroundColor: "black",
                        color: "white",
                      }}
                    >
                      Submit
                    </Button>
                  </Form>
                </Formik>
              </CardContent>
            </Card>
          </Box>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;
