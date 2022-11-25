import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';

const Categories = () => {

    const {data: categories = []} = useQuery({
        queryKey: ["categories"],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/categories')
            const data = res.json();
            return data;
        }
    })

    return (
            <div className='grid lg:grid-cols-4 items-center lg:h-screen w-11/12 mx-auto'>
            {
                categories?.map(category => <CategoryCard
                    key={category._id}
                    category = {category}
                ></CategoryCard>)
            }
            <div className='flex lg:w-[1200px] mx-auto'><Link to='/products/allProducts' className='btn btn-secondary w-56 mx-auto'>See All Cars</Link></div>
        </div>
    );
};

export default Categories;