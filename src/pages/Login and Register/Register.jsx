import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/Fc';


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form  className="card-body">
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
      <div className=" mx-auto mb-1"><FcGoogle className=" w-16 h-16" /></div>
      <div>
        <p href="#" className="label-text-alt link link-hover mx-5">Already have a account?<span className=" font-semibold text-xl  text-green-600"><Link to={"/login"}>Log in</Link></span></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;