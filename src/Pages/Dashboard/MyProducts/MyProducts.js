import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductCard from '../MyProductCard/MyProductCard';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const {data: products = []} = useQuery({
        queryKey:["products", user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/dashboard/myProducts?email=${user?.email}`)
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
              <th>Edit</th>
              <th>Change Status</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {
                products.map(product => <MyProductCard
                    key={product?._id}
                    product={product}
                ></MyProductCard>)
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyProducts;