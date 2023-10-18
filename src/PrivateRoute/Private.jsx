import { useContext } from "react";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";
import { globalAuthContext } from "../Authprovider/GlobalAuth";


const Private = ({ children }) => {
    const location = useLocation();
    const { user , loader } = useContext(globalAuthContext);
    if (loader) {
        return <div className=" flex justify-center mt-16">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if(user){
        return children;
    }
    return  <Navigate state={location.pathname} to={"/login"}></Navigate> ;
};

Private.propTypes = {
    children: PropTypes.node
  };

export default Private;