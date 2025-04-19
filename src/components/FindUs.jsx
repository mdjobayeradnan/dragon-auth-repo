import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const FindUs = () => {
    return (
        <div>
  <h1 className="font-semibold mb-3">Find us</h1>

  <div className="flex flex-wrap gap-3">
    <button type="submit" className="btn w-52"><FaFacebookF /> Facebook</button>
    <button type="submit" className="btn w-52"><FaInstagram/>Instagram </button>
    <button type="submit" className="btn w-52">Button</button>
    
  </div>
</div>

    );
};

export default FindUs;