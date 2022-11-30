import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';

const AdvertisedProducts = () => {
    const [advertisedProducts, setAdvertisedProducts] = useState([]);
    useEffect( ()=>{
        axios
        .get('https://4wheelanes-server.vercel.app/advertisedProducts')
        .then(function(response){
            setAdvertisedProducts(response?.data);
        })
    },[])
    return (
        <div>
            <p className='text-center text-xl font-semibold my-4'>Here Are Some Best Products</p>
            <div className='w-11/12 mx-auto border p-5 rounded-xl border-gray-700'>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Car</th>
                <th>Seller</th>
                <th>Category & Location</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {advertisedProducts.map((product) => (
                <ProductCard key={product?._id} product={product}></ProductCard>
              ))}
            </tbody>
          </table>
        </div>
        </div>
    );
};

export default AdvertisedProducts;