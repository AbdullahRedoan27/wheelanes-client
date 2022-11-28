import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import axios from 'axios';
import { AuthContext } from "../../../Context/AuthProvider";
import Loading from "../../../Components/Loading/Loading";

const MyBuyersCard = ({ buyer }) => {
    const [buyerData, setBuyerData] = useState();
    const [loading, setLoading] = useState(false);
    console.log(buyer);

    useEffect(() => {
        setLoading(true);
        axios
          .get(`http://localhost:5000/users?email=${buyer?.buyerEmail}`)
          .then(function (response) {
            setBuyerData(response.data);
            setLoading(false);
          });
      }, [buyer]);

      if(loading){
        return <Loading></Loading>
      }
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <PhotoProvider>
                <PhotoView src={buyerData?.photo}>
                  <img src={buyerData?.photo} alt="buyer" />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold">{buyer?.buyerName}</div>
          <div className="text-sm opacity-50">{buyer?.buyerEmail}</div>
        </div>
      </td>
      <td>{buyerData?.role}</td>
      <th>
        <button
          className="btn btn-error btn-xs"
        >
          Contact Buyer
        </button>
      </th>
    </tr>
  );
};

export default MyBuyersCard;
