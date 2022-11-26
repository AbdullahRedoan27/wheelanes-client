import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../UserCard/UserCard";

const AllUsers = () => {
    const [reFetch, setRefetch] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/alluser")
      .then((res) => setUsers(res.data));
  }, [reFetch]);
  console.log(users);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-11/12 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>User Type</th>
              <th>Make Admin</th>
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
