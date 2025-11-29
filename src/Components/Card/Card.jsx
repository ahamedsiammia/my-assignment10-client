import React, { use } from 'react';
import ShowCar from './ShowCar';

const Card = ({latestCar}) => {
    const latestcars = use(latestCar);
    return (
        <div className='container mx-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1'>
           {
            latestcars.map(car=> <ShowCar key={car._id} car={car} ></ShowCar>)
           } 
        </div>
    );
};

export default Card;