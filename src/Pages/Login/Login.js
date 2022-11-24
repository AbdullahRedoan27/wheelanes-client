import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import {GoogleAuthProvider} from 'firebase/auth';

const Login = () => {
    const {googleSignIn } = useContext(AuthContext);
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);

    const handleSignIn = data => {
        const email = data.email;
        const password = data.password;
        signIn(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            toast.success('Logged In Successfully')
        })
        .catch(err =>{
            console.error(err);
            toast.error(err.message);
        });
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
        .then(res => {
            const user = res.user;
            console.log(user);
        })
    }
  return (
    <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-8">
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p
                className="text-red-500"
                role="alert"
              >{`*${errors.email?.message}`}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Password"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p
                className="text-red-500"
                role="alert"
              >{`*${errors?.password?.message}`}</p>
            )}
          </div>
          <small className="text-left">
            <Link to="/">Forgot Password</Link>
          </small>
          <input
            type="submit"
            value="login"
            className="btn btn-secondary mt-4 mx-auto w-full"
          />
        </form>
        <small className="text-left">
          Don't have an account?{" "}
          <Link to="/register" className="text-secondary">
            Register
          </Link>
        </small>
        <div className="divider">or</div>
        <button onClick={handleGoogleSignIn} className="btn btn-neutral btn-sm mx-auto w-full">
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
