import React from "react";
import { Link } from "react-router-dom";
import smoke from "../../images/30739985_web1_221028-MCR-driftober-trucks_1.jpg";

const NotFoundPage = () => {
  return (
    <div className="lg:h-[500px] w-full mx-atuo items-center">
      <h3 className="text-8xl font-bold text-center mx-auto">404</h3>
      <p className="text-xl text-center mt-2">OOPS! PAGE NOT BE FOUND</p>
      <p className="text-center mx-auto w-96">
        Sorry but the page you are looking for does not exist, have been removed
    , name changed or temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary mx-auto justify-center flex w-56 mt-5">Back to home page</Link>
    </div>
  );
};

export default NotFoundPage;
