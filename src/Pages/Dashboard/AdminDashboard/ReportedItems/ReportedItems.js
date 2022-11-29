import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportedItemsCard from "./ReportedItemsCard/ReportedItemsCard";

const ReportedItems = () => {
  const [reportedItems, setReportedItems] = useState([]);
  const [reFetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dashboard/reportedItems", {
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("wheelanesToken")}`,
        },
      })
      .then(function (response) {
        setReportedItems(response.data);
      });
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
