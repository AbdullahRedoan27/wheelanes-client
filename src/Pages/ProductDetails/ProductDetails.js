import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <PhotoProvider>
          <PhotoView src={product?.image}>
            <img
              className="m-0 mx-auto rounded-xl"
              src={product?.image}
              alt="Car"
            />
          </PhotoView>
        </PhotoProvider>

        <h2 className=" mt-4 text-center">
          <span className="font-semibold text-2xl">{product?.carName}</span>
          <br />
          <span className="">{product?.category}</span>
        </h2>
        <div>
          <p className="font-semibold">Seller :</p>
          <div className="flex items-center gap-3">
            <img
              className="w-8 rounded-full"
              src={product?.sellerImage}
              alt=""
            />
            <p>
              {product?.sellername}
              <br />
              <span className="text-xs">{product?.sellerEmail}</span>
            </p>
          </div>
          <p className="my-2">Description: {product?.carDetails}</p>
        </div>
        <p>Location: {product?.location}</p>
        <p>
          {product?.usingPeriod === 'less than a year' && <>{product?.usingPeriodSecondary} {product?.usingPeriodSecondaryUnit} used</>}
          {product?.usingPeriod === 'more than 10 years' && <>{product?.usingPeriodSecondary} years used</>}
          {product?.usingPeriod !== 'less than a year' && <>{product?.usingPeriod} {product?.usingPeriod === 1 ? "year" : "years"} used</>}
        </p>
        <p className="font-semibold text-lg">Original Price: <span>{product?.originalPrice}$</span></p>
        <p className="font-semibold text-lg">Resale Price: <span>{product?.resalePrice}$</span></p>
      </div>
      <Link className="btn btn-primary mx-auto mt-4 ">Contact Seller</Link>
    </div>
  );
};

export default ProductDetails;
