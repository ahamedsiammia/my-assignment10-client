import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading';
import ShowCar from '../Card/ShowCar';

const MyBookingsCar = () => {
    const [loading,setLoading]=useState(true)
    const [cars,setCars]=useState([])
    const {user}=use(AuthContext)
     useEffect(()=>{
            fetch(`http://localhost:3000/booking/email/${user.email}`)
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
    return (
        <div className='container mx-auto gap-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                cars.map(car=><ShowCar key={car._id} car={car}></ShowCar>)
            }
        </div>
    );
};

export default MyBookingsCar;