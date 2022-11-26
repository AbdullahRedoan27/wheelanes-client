import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserCard from '../UserCard/UserCard';
import Loading from '../../../../Components/Loading/Loading';

const AllSeller = () => {
    const [reFetch, setRefetch] = useState(false);
    const [sellers, setSellerss] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
      axios
        .get("http://localhost:5000/allseller")
        .then((res) => {
            setSellerss(res.data)
            setLoading(false)
        });
    }, [reFetch]);

    if(loading){
        return <Loading></Loading>
      }

    return (
        <div>
            <div className="overflow-x-auto w-full">
        <table className="table w-11/12 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Type</th>
              <th>Make Admin</th>
              <th>Delete Seller</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((user) => (
              <UserCard key={user?._id} user={user}
              btnName={"Seller"}
              setRefetch={setRefetch}
              ></UserCard>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllSeller;