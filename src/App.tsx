import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ContactUs from "./routes/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
