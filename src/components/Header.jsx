import React from 'react';
import logo  from '../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
     <div >
        <img src={logo} alt="" />
     </div>
     <h1 className='font-popains'>Journalism Without Jr or Favour</h1>
     <h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
        </div>
    );
};

export default Header;