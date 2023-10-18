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
import DetailsCard from "../pages/brandCard/productDetails/DetailsCard";
import MyCard from "../pages/Mycard/MyCard";
import Update from "../pages/Mycard/Update/Update";
import Private from "../PrivateRoute/Private";




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
          element: <Private><Add></Add></Private>,
        },
        {
          path: "/models/:name",
          element: <Models></Models>,
          loader:({params})=>fetch(`http://localhost:5000/models/${params.name}`)
        },
        {
          path: "/models/id/:id",
          element:<Private><DetailsCard></DetailsCard></Private>,
          loader:({params})=>fetch(`http://localhost:5000/models/id/${params.id}`)
        },
        {
          path:"/card",
          element:<Private><MyCard></MyCard></Private>,
          loader:()=>fetch("http://localhost:5000/mycard")
        },
        {
            path:"/update/:id",
            element: <Update></Update>,
            loader: ({params})=>fetch(`http://localhost:5000/models/id/${params.id}`)
        },
        

      ],
    },
  ]);

  export default router;