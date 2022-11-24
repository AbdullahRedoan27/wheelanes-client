import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  return (
    <tr>
      <td>
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
      <td>
        <img src={product?.sellerImage} className="w-8 ml-5 rounded-full" alt=""></img>{product?.sellername}
        <br />
        <span className="badge badge-ghost badge-sm">
          {product?.sellerEmail}
        </span>
      </td>
      <td className="text-sm">
        Category: <span className="font-semibold">{product?.category}</span>
        <br />
        {product?.location}
      </td>
      <th>
        <Link to={`/dashboard/productDetails/${product?._id}`} className="btn btn-ghost btn-xs">details</Link>
      </th>
    </tr>
  );
};

export default ProductCard;
