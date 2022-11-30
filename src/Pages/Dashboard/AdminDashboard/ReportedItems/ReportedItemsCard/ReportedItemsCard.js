import React, { useState } from "react";
import toast from "react-hot-toast";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";

const ReportedItemsCard = ({ item, setRefetch }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = (id ) => {
    const proceed = window.confirm("Confirm Delete?");
    setLoading(true);
    if (proceed) {
      fetch(`https://4wheelanes-server.vercel.app/deleteProduct?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.acknowledged) {
            toast.success("Successfully Deleted The Product From This Website");
            setRefetch(true);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          toast.error('Something is wrong. Please try to log out and log in again.')
        });
    }
    else{
        setLoading(false)
    }
  };

  return (
    <tr className="">
      <td className="p-0">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <PhotoProvider>
                <PhotoView src={item?.image}>
                  <img src={item?.image} alt="Car" />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
          <div>
            <div className="font-bold text-xl mb-2">{item.carName}</div>
            <div className="font-bold">Price: {item?.resalePrice}$</div>
          </div>
        </div>
      </td>
      <td className="p-0 py-4">
        <img
          src={item?.sellerImage}
          className="w-8 ml-5 rounded-full"
          alt=""
        ></img>
        {item?.sellername}
        <br />
        <span className="badge badge-ghost badge-sm">{item?.sellerEmail}</span>
      </td>
      <td className="text-sm py-2 p-0">
        Category: <span className="font-semibold">{item?.category}</span>
        <br />
        {item?.location}
      </td>
      <th className="p-0">
        <Link className="btn btn-accent btn-xs">details</Link>
      </th>
      <th className="p-0">
        <Link
          onClick={() => handleDelete(item?._id)}
          className="btn btn-error flex w-16 justify-center mx-auto btn-xs"
        >
          Delete
        </Link>
      </th>
    </tr>
  );
};

export default ReportedItemsCard;
