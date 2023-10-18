import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/home/Home";
import Register from "../pages/Login and Register/Register";
import Login from "../pages/Login and Register/Login";
import Add from "../pages/AddProduct/Add";
import Models from "../pages/brandCard/Models";
import Erroe from "../pages/ErrorPAge/Erroe";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Erroe></Erroe>,
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
        {
          path: "/models/:id",
          element: <Models></Models>,
          loader:({params})=>fetch(`http://localhost:5000/models/${params.id}`)
        },

      ],
    },
  ]);

  export default router;