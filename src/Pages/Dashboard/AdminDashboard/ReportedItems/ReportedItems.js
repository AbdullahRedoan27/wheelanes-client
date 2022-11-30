import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportedItemsCard from "./ReportedItemsCard/ReportedItemsCard";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const [reportedItems, setReportedItems] = useState([]);
  const [reFetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get("https://4wheelanes-server.vercel.app/dashboard/reportedItems", {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("wheelanesToken")}`,
        },
      })
      .then(function (response) {
        setReportedItems(response.data);
      })
      .catch(err => {
        console.error(err)
        toast.error('Something is wrong. Please try to log out and log in again.')
      })
  }, [reFetch]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Car</th>
              <th>Seller</th>
              <th>Category & Location</th>
              <th>Details</th>
              <th className="px-1">Delete From Website</th>
              <th className="px-1">Remove From Reported Items</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems.map((item) => (
              <ReportedItemsCard
                key={item?._id}
                item={item}
                setRefetch={setRefetch}
              ></ReportedItemsCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;
