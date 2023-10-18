import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { globalAuthContext } from "../../Authprovider/GlobalAuth";
import Swal from "sweetalert2";


const Navbar = () => {
  const [theme, setTheme] = useState('dark');
    const { user , logOut } = useContext(globalAuthContext)
    const list = <>
    <li><NavLink to={"/"}>Home</NavLink></li>                   
    <li><NavLink to={"/Product"}>Add Models</NavLink></li>                   
    <li><NavLink to={"/card"}>My Cart</NavLink></li>                                     
</>

const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
};

useEffect(() => {
  document.querySelector('html').setAttribute('data-theme', theme);
}, [theme]);

//  log out 
    const Out = ()=>{
      logOut()
      .then(() => {
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Log Out sucessfully',
              showConfirmButton: false,
              timer: 1500
            })
      }).catch((error) => {
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${error.message}`,
              showConfirmButton: false,
              timer: 1500
            })
      });

    }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {list}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className=" w-28 h-10" src="https://i.ibb.co/rGcXr5X/topauutobrand.png" alt="Logo" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {list}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          <div className="hidden md:flex lg:flex">
               <p>{user&& user.displayName}</p>
          </div>
          <div className=" w-10 h-10  ">
               <img className=" rounded-full" src={user? user.photoURL:``} alt="" />
          </div>
          {
            user?
            <NavLink ><button onClick={Out} className=" btn btn-neutral">Log out</button></NavLink>
            :
            <NavLink to={"/login"}><button className=" btn btn-neutral">Login</button></NavLink>
          }
              <label className="swap swap-rotate">
              <input onClick={toggleTheme} type="checkbox" />
              <div className="swap-on">DARK</div>
              <div className="swap-off">LIGHT</div>
            </label>
        </div>
      </div>
    );
};

export default Navbar;