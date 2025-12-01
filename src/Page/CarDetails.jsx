import React, { use, useState } from 'react';
import UseCar from '../Components/Hook/UseCar';
import { Link, useLoaderData} from 'react-router';
import { IoLocationSharp } from 'react-icons/io5';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-toastify';
const CarDetails = () => {
 const car =useLoaderData();
 const {imageUrl,status,carName,category,description,rentPrice,location,providerEmail,providerName}=car;
const {user}=use(AuthContext);
  const [isBooking, setIsBooking] = useState(false);



const hendlebooking = () =>{
  setIsBooking(true);
  fetch("http://localhost:3000/booking",{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({...car,booking_by:user.email})
  })
  .then(res=>res.json())
  .then(data =>{
    toast.success("Your Booking successfull")
    console.log(data)
  })
  .catch(error=>console.log(error))
}

    return (
        <div className='p-5 mt-10 bg-white shadow-xl container mx-auto '>
            <div className='lg:flex justify-around'>
                <div>
                <h1 className='text-3xl font-bold mb-5'> Car Name: {carName}</h1>
                <img className='w-[400px] h-[400px] rounded-xl' src={imageUrl} alt="" />  
                
                <h1 className='mt-5'>{description}</h1>
            </div>
            <div className='lg:p-30 '>
                <h1 className='text-xl font-semibold mb-5'>Category :{category}</h1>
                <button className='btn rounded-2xl mb-5 bg-green-500 p-4 '>{status}</button>
                <h1 className='text-2xl font-semibold '>RentPrice:<span className='text-green-500'>{rentPrice}$</span></h1>
                <div className='flex items-end'>
                    <span className='mt-5 text-green-500'><IoLocationSharp size={50} /></span>
                <h1 className='text-xl'> {location}</h1> 
                </div>
                 
                 <button onClick={hendlebooking}  disabled={isBooking}
                     className="mt-10 px-6 py-3 w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-all duration-200">
            Book Now
            </button>
          
                
            </div>

            <div className=' flex  items-center '>
                 <div className="flex-1 mt-10 lg:mt-0">
          <div className="bg-gray-50 p-5 shadow-md rounded-xl">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Provided By
            </h2>
            <p className="text-green-500"><strong>Name:</strong> {providerName}</p>
            <p className="text-green-500"><strong>Email:</strong> {providerEmail}</p>
          </div>
        </div>
            </div>

        </div>
        </div>
    );
};
export default CarDetails;




