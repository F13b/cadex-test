# CADEX Test task

An application with 2 pages has been implemented: the main page and the contact page with the form.
Both pages are adapted for small devices and tablets.

The application is available at the [link](https://preeminent-pastelito-cc6bd7.netlify.app/)

## Stack

The React library was used to develop the application. Vite was used as a meta-framework for building and creating a project.

### UI
To create a user interface, the MaterialUI component library is used. The Panda CSS library was used to write component styles.

### Routing
The React Router Dom library was used for page-by-page routing.

## About the work of the program

When a user visits the site, the `Root` home page opens. On it, the user sees a banner with text and video. Under the banner, he is presented with a block of information containing a table and a title.
There are buttons on the page to go to the `Contact us` page.

There is a small feedback form on the page. There are only 3 fields in it - username, email and message. All fields are required.

In the fields "Name" and "Message" there are restrictions on the minimum and maximum number of characters. Minimum - 2, maximum - 50.

The "Email" field is checked for the mandatory presence of the symbol `@`.

The `Formik` library was used to create the form itself. And `Yup` was used to create validation.

