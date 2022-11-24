import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Link className='btn btn-primary' to='/dashboard/sellCar'>Add A Product</Link>
        </div>
    );
};

export default Dashboard;