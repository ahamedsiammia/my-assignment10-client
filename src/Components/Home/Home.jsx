import React, { Suspense } from 'react';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';
import Loading from '../Loading';
import WhyRent from '../WhyRent';
import CustomerReview from '../CustomerReview';
const latestCar = fetch("http://localhost:3000/latest-cars").then(res=>res.json())
const Home = () => {
    return (
        <div>
          <Slider></Slider>
          
           
           <Suspense fallback={<div> <Loading></Loading> </div>}>
          <Card latestCar={latestCar}></Card>
           </Suspense>
           <WhyRent></WhyRent>
           <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;