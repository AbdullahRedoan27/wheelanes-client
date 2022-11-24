import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import Navbar from '../../Components/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;