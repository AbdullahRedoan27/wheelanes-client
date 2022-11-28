import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Context/AuthProvider';
import MyBuyersCard from '../MybuyersCard/MyBuyersCard';
const MyBuyers = () => {

    const {user} = useContext(AuthContext);
    const [buyers, setBuyers] = useState([]);

    useEffect(()=>{
        if(user?.email){
            axios
        .get(`http://localhost:5000/mybuyers?email=${user?.email}`)
        .then(function(response){
            console.log(response);
            setBuyers(response.data);
        })
        }
    },[user])

    return (
        <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-11/12 mx-auto">
          <thead>
            <tr>
              <th>Image</th>
              <th>Buyer Name</th>
              <th>User Type</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
          {
                buyers?.map(buyer=><MyBuyersCard
                    key={buyer._id}
                    buyer={buyer}
                ></MyBuyersCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyBuyers;