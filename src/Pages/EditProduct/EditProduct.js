import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";

const EditProduct = () => {
  const product = useLoaderData();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [usingPeriod, setUsingPeriod] = useState();
  const [seller, setSeller] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      fetch(`https://4wheelanes-server.vercel.app/users?email=${user?.email}`, {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("wheelanesToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setSeller(data);
        })
        .catch(err => {
          console.error(err)
          setLoading(false)
          toast.error('Something is wrong. Please try to log out and log in again.')
        })
    }
    setLoading(false);
  }, [user?.email]);

  const handleEditProduct = (data) => {
    setLoading(true);
    const sellername = seller?.name;
    const sellerEmail = seller?.email;
    const sellerImage = seller?.photo;
    const sellerVerified = seller?.verified;
    const carName = data.carName;
    const category = data.category;
    const carDetails = data.details;
    const location = data.location;
    const usingPeriod = data.usingPeriod;
    const quality = data.quality;
    const usingPeriodSecondary = data.usingPeriodSecondary;
    const usingPeriodSecondaryUnit = data.usingPeriodSecondaryUnit;
    const originalPrice = data.originalPrice;
    const resalePrice = data.resalePrice;

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgbbKey = process.env.REACT_APP_imgbb_Key;
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const image = data.data.url;

          const updatedCar = {
            sellername,
            sellerEmail,
            sellerImage,
            sellerVerified,
            carName: carName,
            category: category,
            image: image,
            carDetails: carDetails,
            location: location,
            usingPeriod: usingPeriod,
            quality: quality,
            usingPeriodSecondary,
            usingPeriodSecondaryUnit,
            originalPrice: originalPrice,
            resalePrice: resalePrice,
          };

          fetch(`https://4wheelanes-server.vercel.app/updateCarDetails?id=${product?._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedCar),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Your car information has been updated");
                navigate("/dashboard/myProducts");
              }
              setLoading(false);
              reset();
            });
        }
      });
  };

  const handleUsingPeriod = (event) => {
    const selectedValue = event.target.value;
    setUsingPeriod(selectedValue);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-2/5 mx-auto">
      <form onSubmit={handleSubmit(handleEditProduct)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Car's Name</span>
          </label>
          <input
            type="text"
            {...register("carName", {
              required: "car name is required",
            })}
            defaultValue={product.carName}
            className="input input-bordered w-full"
          />
          {errors.carName && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors.carName?.message}`}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            type="text"
            {...register("category", {
              required: "Category is required",
            })}
            defaultValue={product?.category}
            className="select select-bordered w-full"
          >
            <option>Sedan</option>
            <option>Off Road</option>
            <option>Muscle</option>
            <option>SUV</option>
          </select>
          {errors.category && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors.category?.message}`}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Car's Image</span>
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
            <span className="label-text">Car Details</span>
          </label>
          <textarea
            type="text"
            {...register("details", {
              required: "Details is required",
            })}
            defaultValue={product?.carDetails}
            className="textarea textarea-bordered w-full"
          />
          {errors.details && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors.details?.message}`}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Your Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "Location is required",
            })}
            defaultValue={product?.location}
            className="input input-bordered w-full"
          />
          {errors.location && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors?.location?.message}`}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Years used</span>
          </label>
          <select
            {...register("usingPeriod", {})}
            defaultValue={product?.usingPeriod}
            onChange={handleUsingPeriod}
            className="select select-bordered w-full"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>less than a year</option>
            <option>more then 10 years</option>
          </select>
          {errors.usingPeriod && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors?.usingPeriod?.message}`}</p>
          )}
        </div>
        <div>
          {usingPeriod === "less than a year" && (
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Please input the exact number of time.
                  </span>
                </label>
                <input
                  type="text"
                  {...register("usingPeriodSecondary", {
                    required: "This field is required",
                  })}
                  defaultValue={product?.usingPeriodSecondary}
                  className="input input-bordered w-full"
                />
                {errors.usingPeriodSecondary && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors?.usingPeriodSecondary?.message}`}</p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Select an unit</span>
                </label>
                <select
                  type="text"
                  {...register("usingPeriodSecondaryUnit", {
                    required: "This field is required",
                  })}
                  className="select select-bordered w-full"
                >
                  <option>Years</option>
                  <option>Months</option>
                  <option>Days</option>
                </select>
                {errors.usingPeriodSecondaryUnit && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors?.usingPeriodSecondaryUnit?.message}`}</p>
                )}
              </div>
            </div>
          )}
          {usingPeriod === "more then 10 years" && (
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Please input the exact number of year.
                  </span>
                </label>
                <input
                  type="text"
                  {...register("usingPeriodSecondary", {
                    required: "This field is required",
                  })}
                  defaultValue={product?.usingPeriodSecondary}
                  className="input input-bordered w-full"
                />
                {errors.usingPeriodSecondary && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors?.usingPeriodSecondary?.message}`}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Unit</span>
                </label>
                <select
                  type="text"
                  {...register("usingPeriodSecondaryUnit", {
                    required: "This field is required",
                  })}
                  className="select select-bordered w-full"
                >
                  <option>Years</option>
                </select>
                {errors.usingPeriodSecondaryUnit && (
                  <p
                    className="text-red-500"
                    role="alert"
                  >{`*${errors?.usingPeriodSecondaryUnit?.message}`}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Quality of product</span>
          </label>
          <select
            {...register("quality", {})}
            className="select select-bordered w-full"
          >
            <option>Good</option>
            <option>Excellent</option>
            <option>Not bad</option>
          </select>
          {errors.quality && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors?.quality?.message}`}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Original Price (please don't put $ or any other currency sign)
            </span>
          </label>
          <input
            type="text"
            {...register("originalPrice", {
              required: "Original Price is required",
            })}
            defaultValue={product?.originalPrice}
            className="input input-bordered w-full"
          />
          {errors.originalPrice && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors?.originalPrice?.message}`}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Resale Price (please don't put $ or any other currency sign)
            </span>
          </label>
          <input
            type="text"
            {...register("resalePrice", {
              required: "Resale Price is required",
            })}
            defaultValue={product?.resalePrice}
            className="input input-bordered w-full"
          />
          {errors.resalePrice && (
            <p
              className="text-red-500"
              role="alert"
            >{`*${errors?.resalePrice?.message}`}</p>
          )}
        </div>
        <input
          type="submit"
          value="Update"
          className="btn btn-accent mt-4 mx-auto w-full"
        />
      </form>
    </div>
  );
};

export default EditProduct;
