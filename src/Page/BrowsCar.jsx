import React from 'react';
import ShowCar from '../Components/Card/ShowCar';
import UseCar from '../Components/Hook/UseCar';
import Loading from '../Components/Loading';
const BrowsCar = () => {
    const {car,loading}=UseCar();
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1' >
            {
                car.map(car=><ShowCar key={car._id} car={car}></ShowCar>)
            }
            
        </div>
    );
};

export default BrowsCar;