import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import axios from 'axios';
import Loading from "../../../Components/Loading/Loading";

const MyBuyersCard = ({ buyer, setContactDetails }) => {
    const [buyerData, setBuyerData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
          .get(`http://localhost:5000/users?email=${buyer?.buyerEmail}`)
          .then(function (response) {
            setBuyerData(response.data);
            setLoading(false);
          });
      }, [buyer]);

      const handleModalOpen = (id) => {
        
      }
      if(loading){
        return <Loading></Loading>
      }
  return (
    <div>
        
    </div>
  );
};

export default MyBuyersCard;
