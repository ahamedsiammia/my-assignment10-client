import React, { use, useState } from 'react';
import ShowCar from './ShowCar';

const Card = ({latestCar}) => {
    const latestcars = use(latestCar);

const [searchText,setSearchText]=useState("");

const filteredCars = latestcars.filter(car=>car.carName.toLowerCase().includes(searchText.toLowerCase()));
    
    return (
       <div className='container mx-auto my-5'>

        <div className='md:flex justify-between items-center'>
        <h1 className=' text-4xl font-bold my-8'>Featured <span className='text-[#FF6B00]'>Cars</span></h1>
        <input type="search" 
        name="search"
        value={searchText}
        onChange={(e)=>setSearchText(e.target.value)}
         className='bg-[#FFE0CC] h-10 w-64 px-4 rounded-2xl border border-orange-400 outline-none'
          placeholder='search your car '  id="" />

        </div>
        
         <div className='container mx-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
           {
            filteredCars.map(car=> <ShowCar  key={car._id} car={car} ></ShowCar>)
           } 
        </div>
       </div>
    );
};

export default Card;
