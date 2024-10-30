import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";

interface MyFormValues {
  Name: string;
}

const ContactUs = () => {
  const initialValues: MyFormValues = { Name: "" };
  return (
    <>
      <Header />
      <main>
        <Box>
          <Typography
            component={"h1"}
            variant="h3"
            fontWeight={"bold"}
            textAlign={"center"}
            mb={"4rem"}
          >
            Only CTA on the page
          </Typography>
          <Card>
            <CardContent>
              <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                  console.log({ values, actions });
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }}
              >
                <Form>
                  <Field
                    component={TextField}
                    label="Name"
                    name="Name"
                    variant="outlined"
                  />
                  <Button type="submit">Submit</Button>
                </Form>
              </Formik>
            </CardContent>
          </Card>
        </Box>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;
