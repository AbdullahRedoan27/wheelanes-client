import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const ContactModal = ({ product }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const sellerEmail = product?.sellerEmail;
  const sellerLocation = product?.location;
  
  const handleSubmitModal = (data) => {
    const buyerName = data.userName;
    const buyerEmail = data.userEmail;
    const buyerNumber = data.userContact;
    const buyerLocation = data.userLocation;
    const order = {
        buyerName,
        buyerEmail,
        buyerNumber,
        buyerLocation,
        ...product
    }

    fetch('http://localhost:5000/dashboard/addOrder',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.acknowledged){
        toast.success('Order placed successfully')
        reset();
      }
      else{
        toast.error(data.message)
      }
    })
  };

  return (
    <div>
      <input type="checkbox" id="contactModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            You are about to contact the seller of this car.
          </h3>
          <div className="w-96 p-8">
            <form onSubmit={handleSubmit(handleSubmitModal)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  {...register("userName", {
                    required: "User Name is required",
                  })}
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
                {errors.userName && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors?.userName?.message}`}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  {...register("userEmail", { value: `${userEmail}` })}
                  disabled
                  className="input input-bordered w-full"
                />
                {errors.userEmail && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors.userEmail?.message}`}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  {...register("sellerEmail", { value: `${sellerEmail}` })}
                  disabled
                  className="input input-bordered w-full"
                />
                {errors.sellerEmail && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors.sellerEmail?.message}`}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Seller Location</span>
                </label>
                <input
                  type="text"
                  {...register("sellerLocation", {
                    value: `${sellerLocation}`,
                  })}
                  disabled
                  className="input input-bordered w-full"
                />
                {errors.sellerLocation && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors.sellerLocation?.message}`}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Put a location you want to meet with the seller.
                  </span>
                </label>
                <input
                  type="text"
                  {...register("userLocation", {
                    required: "Your location is required",
                  })}
                  placeholder="Your Location"
                  className="input input-bordered w-full"
                />
                {errors.userLocation && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors.userLocation?.message}`}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">
                    Put a location you want to meet with the seller.
                  </span>
                </label>
                <input
                  type="text"
                  {...register("userContact", {
                    required: "Contact number is required",
                  })}
                  placeholder="Your Contact Number"
                  className="input input-bordered w-full"
                />
                {errors.userContact && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors.userContact?.message}`}</p>
                )}
              </div>
              <input type="submit" className="btn btn-success mr-3 mt-4" />
              <label htmlFor="contactModal" className="btn">
                Close
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
