import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const SocialLogin = () => {
    return (
        <div className=''>
            <h1 className='font-semibold mb-3'>Login with</h1>
            <div className='w-[200px] space-y-2'>
            <button className='btn'>  <FaFacebookF />
            Login with</button>
            <button  className='btn'> <FaGithub />
            Login with</button>
            </div>
        
           

        </div>
    );
};

export default SocialLogin;