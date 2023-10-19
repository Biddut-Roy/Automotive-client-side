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
          loader: () => fetch("https://top-auto-brand-53sj6su0h-biddut-roys-projects.vercel.app/brand")
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
          loader:({params})=>fetch(`https://top-auto-brand-53sj6su0h-biddut-roys-projects.vercel.app/models/${params.name}`)
        },
        {
          path: "/models/id/:id",
          element:<Private><DetailsCard></DetailsCard></Private>,
          loader:({params})=>fetch(`https://top-auto-brand-53sj6su0h-biddut-roys-projects.vercel.app/models/id/${params.id}`)
        },
        {
          path:"/card",
          element:<Private><MyCard></MyCard></Private>,
          loader:()=>fetch("https://top-auto-brand-53sj6su0h-biddut-roys-projects.vercel.app/mycard")
        },
        {
            path:"/update/:id",
            element: <Private><Update></Update></Private>,
            loader: ({params})=>fetch(`https://top-auto-brand-53sj6su0h-biddut-roys-projects.vercel.app/models/id/${params.id}`)
        },
        

      ],
    },
  ]);

  export default router;