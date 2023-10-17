import { Outlet } from "react-router-dom";
import Footer from "../pages/staticPage/Footer";
import Navbar from "../pages/staticPage/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;