import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className=''>
            <div className='flex justify-center'>
                <img  src="https://i.ibb.co/HL19kqX0/Screenshot-2025-11-27-112350.png" alt="" />
            </div>
           <Link className='flex justify-center mt-5 mb-5' to="/">
           <button className=' btn  rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF2D55] btn-lg transition-transform duration-300 hover:scale-95 text-white" 
'>
            Go Home
           </button>
           </Link>
        </div>
    );
};

export default Error;