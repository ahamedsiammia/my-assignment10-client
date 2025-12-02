import axios from "axios";
import React, { useEffect, useState } from 'react';

const UseCar = () => {
    const [car,setCar]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios("https://my-assignment10-server.vercel.app/cars")
        .then(data=>setCar(data.data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])

    return {car,loading};
};

export default UseCar;
