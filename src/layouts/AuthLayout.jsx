import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div>
           <header className='p-5'>
            <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;