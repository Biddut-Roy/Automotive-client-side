import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "contacts/:contactId",
          element: <h1>s</h1>,
        },
      ],
    },
  ]);

  export default router;