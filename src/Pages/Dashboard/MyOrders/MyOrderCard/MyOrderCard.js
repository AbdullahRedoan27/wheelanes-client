import React from "react";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const MyOrderCard = ({ order, refetch }) => {

  const handleDeleteOrder = id => {
        const proceed = window.confirm('Are You Sure To Cancel This Order?')
        console.log(id);
        if(proceed){
            fetch(`https://4wheelanes-server.vercel.app/dashboard/deleteorder/${id}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json', 
              authorization: `bearer ${localStorage.getItem('wheelanesToken')}`
          }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Deleted successfully`)
            }
        })
        .catch(err => {
          console.error(err)
          toast.error('Something is wrong. Please try to log out and log in again.')
        })
    }
}

  return (
    <tr className="m-6 w-96">
      <td className="p-0">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <PhotoProvider>
                <PhotoView src={order?.image}>
                  <img src={order?.image} alt="Car" />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl mb-2">{order?.carName}</div>
            <div className="font-bold">Price: {order?.resalePrice}$</div>
          </div>
        </div>
      </td>
      <td className="p-0 py-4">
        <img src={order?.sellerImage} className="w-8 ml-5 rounded-full" alt=""></img>{order?.sellername}
        <br />
        <span className="badge badge-ghost badge-sm">
          {order?.sellerEmail}
        </span>
      </td>
      <td className="text-sm py-2 p-0">
        Category: <span className="font-semibold">{order?.category}</span>
        <br />
        {order?.location}
      </td>
      <th className="p-0">
        <Link to={`/dashboard/productDetails/${order?._id}`} className="btn btn-ghost btn-xs">details</Link>
      </th>
      <th className="p-0">
        <Link onClick={()=>handleDeleteOrder(order?._id)} className="btn btn-error btn-xs">Cancel Order</Link>
      </th>
    </tr>
  );
};

export default MyOrderCard;
