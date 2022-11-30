import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import axios from 'axios';
import Loading from "../../../Components/Loading/Loading";
import toast from "react-hot-toast";

const MyBuyersCard = ({ buyer, setContactDetails }) => {
    const [buyerData, setBuyerData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
          .get(`https://4wheelanes-server.vercel.app/users?email=${buyer?.buyerEmail}`)
          .then(function (response) {
            setBuyerData(response.data);
            setLoading(false);
          })
          .catch(err => {
            console.error(err)
            setLoading(false)
            toast.error('Something is wrong. Please try to log out and log in again.')
          })
      }, [buyer]);

      if(loading){
        return <Loading></Loading>
      }
  return (
    <div>
        
    </div>
  );
};

export default MyBuyersCard;
