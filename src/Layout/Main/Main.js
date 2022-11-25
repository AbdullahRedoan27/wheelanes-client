import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';
import Navbar from '../../Components/Shared/Navbar/Navbar';
import '../../Pages/Home/Banner/Banner.css';

const Main = () => {
    return (
        <div className='banner'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;