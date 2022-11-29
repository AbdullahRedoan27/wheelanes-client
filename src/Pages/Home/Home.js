import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvertisedProducts from "./AdvertisedProducts/AdvertisedProducts";
import Banner from "./Banner/Banner";

const Home = () => {

  const [advertisedProducts, setAdvertisedProducts] = useState([]);
    useEffect( ()=>{
        axios
        .get('http://localhost:5000/advertisedProducts')
        .then(function(response){
            setAdvertisedProducts(response?.data);
        })
    },[])

  return (
    <div>
        <Banner></Banner>
        {
          advertisedProducts.length > 0 &&
          <AdvertisedProducts></AdvertisedProducts>
        }
    </div>
  );
};

export default Home;
