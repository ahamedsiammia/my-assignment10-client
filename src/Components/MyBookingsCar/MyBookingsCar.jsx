import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading';
import ShowCar from '../Card/ShowCar';

const MyBookingsCar = () => {
    const [loading,setLoading]=useState(true)
    const [cars,setCars]=useState([])
    const {user}=use(AuthContext)
     useEffect(()=>{
            fetch(`https://my-assignment10-server.vercel.app/booking/email/${user.email}`)
            .then(res =>res.json())
            .then(data => {
                setLoading(false)
                setCars(data)
            })
            .catch(error =>{
                console.log(error)
            })
        },[])
        if(loading){
            return <Loading></Loading>
        }
        if(cars.length == 0){
            return  <div className='flex items-center justify-center h-screen'>
            <h1 className='text-4xl font-bold '>You haven't booked any car yet, please book a car</h1>
        </div>
        }
    return (
        <div className='container mx-auto gap-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {
                cars.map(car=><ShowCar key={car._id} car={car}></ShowCar>)
            }
        </div>
    );
};

export default MyBookingsCar;