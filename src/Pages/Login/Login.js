import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Loading from "../../Components/Loading/Loading";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const [loading, setLoading] = useState(false);
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation()

  const from = location?.state?.from?.pathname || '/';

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  if (token) {
    navigate(from, { replace: true });
  }

  const handleSignIn = (data) => {
    const email = data.email;
    const password = data.password;
    setLoading(true);
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        setLoading(false);
        toast.success("Logged In Successfully");
        setLoginUserEmail(user?.email);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.error(err.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider).then((res) => {
      const user = res.user;
      console.log(user);
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="h-[500px] mt-10 flex justify-center items-center">
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
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-neutral btn-sm mx-auto w-full"
        >
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
