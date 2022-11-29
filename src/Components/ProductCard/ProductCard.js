import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";
import {MdVerified} from 'react-icons/md';

const ProductCard = ({ product }) => {
  return (
    <tr className="">
      <td className="p-0">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <PhotoProvider>
                <PhotoView src={product?.image}>
                  <img src={product?.image} alt="Car" />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl mb-2">{product.carName}</div>
            <div className="font-bold">Price: {product?.resalePrice}$</div>
          </div>
        </div>
      </td>
      <td className="p-0 py-4">
        <span className="flex m-0 items-center gap-2"><img src={product?.sellerImage} className="w-8 ml-5 rounded-full" alt=""></img>{product?.sellername} 
        {product?.sellerVerified === true &&
          <MdVerified></MdVerified>
        }</span>
        <br />
        <span className="badge badge-ghost badge-sm">
          {product?.sellerEmail}
        </span>
      </td>
      <td className="text-sm py-2 p-0">
        Category: <span className="font-semibold">{product?.category}</span>
        <br />
        {product?.location}
      </td>
      <td className="text-sm py-2 p-0">
        Quality: {product?.quality}<br />
        {product?.status}
      </td>
      <th className="p-0">
        <Link to={`/dashboard/productDetails/${product._id}`} className="btn btn-accent btn-xs">details</Link>
      </th>
    </tr>
  );
};

export default ProductCard;
