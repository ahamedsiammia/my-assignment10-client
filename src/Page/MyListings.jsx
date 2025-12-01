import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import Loading from '../Components/Loading';
import ShowListings from './ShowListings';

const MyListings = () => {
    const {user}=use(AuthContext)
    const [cars,setCars]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch(`http://localhost:3000/cars/email/${user.email}`)
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
            <div className='grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1'>
                {
                    cars.map(car=><ShowListings cars={cars} setCars={setCars} key={car._id} car={car}></ShowListings>)
                }
            </div>
        </div>
    );
};

export default MyListings;