import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const { register, formState:{errors}, handleSubmit } = useForm();

    const handleRegister = data => {
        const name = data.name;
        const email = data.email;
        const password = data.password;
        const role = data.role;

        createUser(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            toast.success('Successfully Registered')
        })
        .catch(err => {
            console.error(err)
            toast.error(err.message)
        })

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const imgbbKey = process.env.REACT_APP_imgbb_Key;
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgbbKey}`
        fetch(url, {
            method:'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                const image = data.data.url;
                const user = {
                    name: name,
                    email: email,
                    image: image,
                    role: role,
                }

                const profile = {
                    displayName: name,
                    photoURL: image
                }

                updateUserProfile(profile)
                .then(res => console.log(res))
                .catch(err => console.error(err))

                fetch('http://localhost:5000/users', {
                    method:'POST', 
                    headers: {
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
            }
        })
    }
    return (
        <div className="h-[500px] flex justify-center items-center">
      <div className="w-96 p-8">
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
              placeholder="Full name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p
                className="text-red-500"
                role="alert"
              >{`*${errors.name?.message}`}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              {...register("image", {
                required: "image is required",
              })}
              className="file-input input-bordered w-full"
            />
            {errors.image && (
              <p
                className="text-red-500"
                role="alert"
              >{`*${errors.image?.message}`}</p>
            )}
          </div>
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
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Account type</span>
            </label>
            <select
              {...register("role", {
              })}
              className="select select-bordered w-full"
            >
                <option>Buyer/User</option>
                <option>Seller</option>
            </select>
            {errors.role && (
              <p
                className="text-red-500"
                role="alert"
              >{`*${errors?.role?.message}`}</p>
            )}
          </div>
          <small className="text-left">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary">
              Log In
            </Link>
          </small>
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-accent mt-4 mx-auto w-full"
          />
        </form>
      </div>
    </div>
    );
};

export default Register;