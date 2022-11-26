import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReportedItems = () => {
    const [reportedItems, setReportedItems] = useState([]);

    useEffect(()=>{
        axios
        .get('http://localhost:5000/dashboard/reportedItems')
        .then(function(response){
            setReportedItems(response.data);
        })
    },[])

    return (
        <div>
            reportedProduct
        </div>
    );
};

export default ReportedItems;