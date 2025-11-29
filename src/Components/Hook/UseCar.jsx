import axios from "axios";
import React, { useEffect, useState } from 'react';

const UseCar = () => {
    const [car,setCar]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        axios("http://localhost:3000/cars")
        .then(data=>setCar(data.data))
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))
    },[])

    return {car,loading};
};

export default UseCar;
