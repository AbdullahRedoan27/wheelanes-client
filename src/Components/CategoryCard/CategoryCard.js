import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({category}) => {
  return (
    <div>
      <div className="card bg-base-300 my-4 py-5 w-56 shadow-xl">
      <img
            src={category?.categoryImg}
            alt={category?.category}
            className="rounded-xl w-3/5 mx-auto m-3"
          />
        <div className="card-body items-center text-center p-2">
          <h2 className="card-title">{category?.category}</h2>
          <div className="card-actions">
            <Link to={`/products/${category?.category}`} className="btn btn-primary btn-sm">See all</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
