import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
            <>
                <div className='min-h-screen bg-gray-800'>
                <div className='fixed top-0 w-full z-50'>
                <Header/>
                </div>
                <Outlet/>
                </div>
                <Footer/>
            </>
    );
};

export default MainLayout;