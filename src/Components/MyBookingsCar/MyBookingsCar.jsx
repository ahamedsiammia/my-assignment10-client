import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../Loading';

const MyBookingsCar = () => {
    const [loading,setLoading]=useState(true)
    const [cars,setCars]=useState([])
    const {user}=use(AuthContext)
    console.log(user.email)
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
        <div>
            {
                cars.map(car=><h1>{car.carName}</h1>)
            }
        </div>
    );
};

export default MyBookingsCar;