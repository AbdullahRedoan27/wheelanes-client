import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import { AuthContext } from '../../../Context/AuthProvider';

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
    console.log(products);

    return (
        <div>
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Car</th>
              <th>Seller</th>
              <th>Category & Location</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                products.map(product => <ProductCard
                    key={product?._id}
                    product={product}
                ></ProductCard>)
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default MyProducts;