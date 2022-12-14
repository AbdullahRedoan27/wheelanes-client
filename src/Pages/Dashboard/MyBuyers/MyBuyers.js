import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthProvider";
import BuyerContactModal from "./BuyerContactModal/BuyerContactModal";
import toast from "react-hot-toast";
const MyBuyers = () => {
  const { user } = useContext(AuthContext);
  const [buyers, setBuyers] = useState([]);
  const [contactDetails, setContactDetails] = useState();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://4wheelanes-server.vercel.app/mybuyers?email=${user?.email}`, {
          headers: {
            "content-type": "application/json",
            authorization: `bearer ${localStorage.getItem("wheelanesToken")}`
          }
        })
        .then(function (response) {
          setBuyers(response.data);
        })
        .catch(err => {
          console.error(err)
          toast.error('Something is wrong. Please try to log out and log in again.')
        })
    }
  }, [user]);

  return (
    <div>
      {buyers?.length > 0 ? (
        <div className="overflow-x-auto w-full">
          <table className="table w-11/12 mx-auto">
            <thead>
              <tr>
                <th>Buyer Name</th>
                <th>Ordered Product</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map((buyer) => (
                <tr key={buyer?._id}>
                  <td>
                    <div>
                      <div className="font-bold">{buyer?.buyerName}</div>
                      <div className="text-sm opacity-50">
                        {buyer?.buyerEmail}
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="flex">
                      <img
                        className="mask mask-squircle w-12 m-0"
                        src={buyer?.image}
                        alt=""
                      ></img>{" "}
                      {buyer?.carName}
                    </span>
                    <br />
                    Category: {buyer?.category}
                  </td>
                  <th>
                    <label
                      onClick={() => setContactDetails(buyer?._id)}
                      htmlFor="buyerContactModal"
                      className="btn btn-primary btn-xs"
                    >
                      Contact Buyer
                    </label>
                  </th>
                  {contactDetails && (
                    <BuyerContactModal
                      key={buyer?._id}
                      buyer={buyer}
                    ></BuyerContactModal>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-xl">
          Sorry, No one have ordered your product.
        </p>
      )}
    </div>
  );
};

export default MyBuyers;
