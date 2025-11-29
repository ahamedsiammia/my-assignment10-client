import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router';

const ShowCar = ({car}) => {
     const {carName,providerName,rentPrice,location,imageUrl,_id}=car;
    return (
        <div className='shadow-sm  p-4 border border-gray-200  bg-gradient-to-br from-[#f0fff4] to-[#e6ffe6] transition-all duration-300 ease-out 
      hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.03]'>
            <div className='mb-5'>
                <img className='w-full h-[300px] object-cover rounded-2xl   transition-all duration-500 ease-out
    hover:scale-90' src={imageUrl} alt="" />
            </div>
              <h1 className='text-2xl font-bold'>{carName}</h1>
            <div className='flex justify-between font-semibold mt-3 text-xl' >
                <h1>Provider Name: {providerName}</h1>
                <p>Price:{rentPrice}$</p>
            </div>
            <div className='flex gap-2 items-center '>
                <span className='text-green-500'><IoLocationSharp size={24} /></span>
            <h1 className='font-semibold mt-2 text'> {location}</h1>
          </div>
        <Link to={`/cardetails/${_id}`}>
        <button className='mt-5 w-full text-white text-lg py-3 rounded-xl 
        bg-gradient-to-r from-[#8A00FF] to-[#FF6A00]
        hover:opacity-90 transition-all duration-300
        shadow-md hover:shadow-lg'>View Details</button>
        </Link>
        </div>
    );
};

export default ShowCar;
