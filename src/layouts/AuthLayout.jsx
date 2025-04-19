import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            <h1>this is auth layout</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;