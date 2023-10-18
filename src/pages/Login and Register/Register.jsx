import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/Fc';
import { useContext, useState } from "react";
import { globalAuthContext } from "../../Authprovider/GlobalAuth";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser , signInGoogle } = useContext(globalAuthContext)
    const [error , setError]= useState()
    const navigate = useNavigate();

    const handelSignUp = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.')
            return;
        }
          if (!/[A-Z]/.test(password)) {
            setError("Password must be 1 Uppercase latter")
            return;
        }
          if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
            setError("Password must Special character")
            return;
        }

        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Registration Success',
                showConfirmButton: false,
                timer: 1500
              })
              navigate("/")
          })
          .catch((error) => {
            console.log(error.message);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `${error.message}`,
                showConfirmButton: false,
                timer: 1500
              })
          });
          form.reset();
    }

    // Google 
    const handelGoogle = ()=>{
        signInGoogle()
       .then((result) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Registration Success',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/")
          console.log(result.user);
        })
       .catch((error) => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 1500
          })
        });
      }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelSignUp}  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" className="btn btn-primary" value="Registration" />
        </div>
      </form>
      <div className=" text-center text-red-700 font-medium text-xl">
          <p>{error}</p>
        </div>
      <div onClick={handelGoogle} className=" mx-auto mb-1"><FcGoogle className=" w-16 h-16" /></div>
      <div>
        <p href="#" className="label-text-alt link link-hover mx-5">Already have a account?<span className=" font-semibold text-xl  text-green-600"><Link to={"/login"}>Log in</Link></span></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;