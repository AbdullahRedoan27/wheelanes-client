import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";
import Loading from "../../../../Components/Loading/Loading";
import toast from "react-hot-toast";

const AllUsers = () => {
    const [reFetch, setRefetch] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://4wheelanes-server.vercel.app/alluser", {
        headers: {
          'content-type': 'application/json', 
          authorization: `bearer ${localStorage.getItem('wheelanesToken')}`
      }
      })
      .then((res) => {
        setUsers(res.data)
        setLoading(false)
    })
    .catch(err => {
      console.error(err)
      setLoading(false)
      toast.error('Something is wrong. Please try to log out and log in again.')
    })
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
              <th></th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserCard key={user?._id} user={user}
              btnName={"User"}
              setRefetch={setRefetch}
              ></UserCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
