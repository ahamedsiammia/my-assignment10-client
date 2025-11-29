import React, { Suspense } from 'react';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';
import Loading from '../Loading';
import WhyRent from '../WhyRent';
import CustomerReview from '../CustomerReview';
import TopRateCar from '../TopRateCar/TopRateCar';
const latestCar = fetch("http://localhost:3000/latest-cars").then(res=>res.json())
const Home = () => {
    return (
        <div>
          <Slider></Slider>
          
           <h1 className='text-center text-4xl font-bold my-8'>Featured <span className='text-[#FF6B00]'>Cars</span></h1>
           <Suspense fallback={<div> <Loading></Loading> </div>}>
          <Card latestCar={latestCar}></Card>
           </Suspense>
           <WhyRent></WhyRent>
           <CustomerReview></CustomerReview>
           <TopRateCar></TopRateCar>
        </div>
    );
};

export default Home;