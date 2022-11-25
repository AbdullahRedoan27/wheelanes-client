import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCard from "../../../Components/CategoryCard/CategoryCard";
import ProductCard from "../../../Components/ProductCard/ProductCard";

const AllProducts = () => {

  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allProducts");
      const data = res.json();
      return data;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1 bg-base-100 p-4 border border-gray-700  rounded-xl">
        <h3 className="text-lg font-semibold text-center mb-3">Categories</h3>
        {
                categories.map(category => <CategoryCard
                    key={category?._id}
                    category={category}
                ></CategoryCard>)
        }
      </div>
      <div className="col-span-4 w-11/12 mt-5 mx-auto">
        <div>
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
              {products.map((product) => (
                <ProductCard key={product?._id} product={product}></ProductCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
