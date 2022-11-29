import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const {data: orders = [], refetch} = useQuery({
        queryKey:["orders", user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/dashboard/myorders?email=${user?.email}`,{
                headers: {
                  'content-type': 'application/json', 
                  authorization: `bearer ${localStorage.getItem('wheelanesToken')}`
              }
            })
            const data = res.json();
            return data;
        }
    })

    return (
        <div className='w-11/12 mx-auto'>
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Car</th>
              <th>Seller</th>
              <th>Category & Location</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                orders?.length > 0 ?
                    orders.map(order => <MyOrderCard
                        key={order?._id}
                        order={order}
                        refetch={refetch}
                    ></MyOrderCard>)
                :
                <p className='m-3 text-center w-full'>You didn't ordered anything yet.</p>
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyOrders;