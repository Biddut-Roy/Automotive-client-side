import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/home/Home";
import Register from "../pages/Login and Register/Register";
import Login from "../pages/Login and Register/Login";
import Add from "../pages/AddProduct/Add";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch("http://localhost:5000/brand")
        },
        {
          path:"/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/Product",
          element: <Add></Add>,
        },
      ],
    },
  ]);

  export default router;