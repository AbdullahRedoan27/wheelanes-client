import axios from "axios";
import React, { useEffect, useState } from "react";
import AdvertisedProducts from "./AdvertisedProducts/AdvertisedProducts";
import Banner from "./Banner/Banner";
import Stats from "./Stats/Stats";

const Home = () => {

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
        <Banner></Banner>
        {
          advertisedProducts.length > 0 &&
          <AdvertisedProducts></AdvertisedProducts>
        }
        <Stats></Stats>
    </div>
  );
};

export default Home;
