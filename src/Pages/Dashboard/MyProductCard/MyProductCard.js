import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const MyProductCard = ({ product }) => {

    const handleChangeStatus = ( id ) => {
        const proceed = window.confirm('Sure? Your product will be removed from our website.')
        console.log(id);
        if(proceed){
            fetch(`http://localhost:5000/changeStatus?id=${id}`, {
                method:'PUT', 
            })
            .then(data => console.log(data))
            .catch(err => console.error(err))
        }
    }

  const handleDeleteProduct = id => {
        const proceed = window.confirm('Sure? Your product will be removed from our website.')
        console.log(id);
        if(proceed){
            fetch(`http://localhost:5000/deleteProduct?id=${id}`, {
                method:'DELETE', 
            })
            .then(data => console.log(data))
            .catch(err => console.error(err))
        }
  }

  return (
    <tr className="m-6 w-96">
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
        <img src={product?.sellerImage} className="w-8 ml-5 rounded-full" alt=""></img>{product?.sellername}
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
      <th className="p-0">
        <Link to={`/dashboard/productDetails/${product?._id}`} className="btn btn-ghost btn-xs">details</Link>
      </th>
      <th className="p-0">
        <Link onClick={()=>handleDeleteProduct(product?._id)} className="btn btn-primary btn-xs">Delete</Link>
      </th>
      <th className="p-0">
        <Link to={`/dashboard/productDetails/editProduct/${product?._id}`} className="btn btn-secondary btn-xs">Edit Product</Link>
      </th>
      <th>
        <select onChange={()=>handleChangeStatus(product?._id)} defaultValue={product?.status} className="select select-sm select-bordered">
            <option>Available</option>
            <option>Sold</option>
        </select>
      </th>
    </tr>
  );
};

export default MyProductCard;
