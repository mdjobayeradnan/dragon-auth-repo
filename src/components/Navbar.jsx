import React from 'react';
import { Link } from 'react-router-dom';
import loginUser from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between'>
           <div>image</div>
           <div className='space-x-1.5'>
            <Link to="/" >Home</Link>
            <Link to="/about" >about</Link>
            <Link to="/carrier" >Carrier</Link>
           </div>
           <div className='login'>
            <div className='flex items-center space-x-1.5'>
  <img src={loginUser} alt="" />
  
  <Link to='/auth/login'> Login </Link>
            </div>
           
           </div>
        </div>
    );
};

export default Navbar;
