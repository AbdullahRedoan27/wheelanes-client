import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import "./banner2.css";
const Banner = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://4wheelanes-server.vercel.app/categories").then(function (response) {
      setCategories(response.data);
    });
  }, []);

  return (
    <div>
      <div className="hero min-h-screen bannerr">
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-6xl font-bold">
              Find Your <span className="text-orange-500 text-7xl">Dream</span>{" "}
              Car
            </h1>

            <div className="lg:grid lg:grid-cols-4 grid grid-cols-2 w-10/12 mx-auto">
              {categories?.map((category) => (
                <div key={category?._id}>
                  <div className="w-25 rounded-2xl p-3 h-44 mx-2 border-gray-300 border">
                    <img
                      className="w-4/6 rounded-full mx-auto"
                      src={category?.categoryImg}
                      alt=""
                    ></img>
                    <p className="text-center w-24 mx-auto font-semibold text-white mt-2 text-2xl">
                      {category?.category}
                    </p>
                    <Link
                      to={`/products/${category?.category}`}
                      className="btn btn-ghost border btn-sm mt-2 border-gray-300 "
                    >
                      See
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
