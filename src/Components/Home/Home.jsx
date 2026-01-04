import React, { Suspense } from 'react';
import Slider from '../Slider/Slider';
import Card from '../Card/Card';
import Loading from '../Loading';
import WhyRent from '../WhyRent';
import CustomerReview from '../CustomerReview';
import TopRateCar from '../TopRateCar/TopRateCar';
import Features from '../Features/Features';
import Services from '../Services/Services';
import Categories from '../Categories/Categories';
import Newsletter from '../Newsletter/Newsletter';
import FAQ from '../FAQ/FAQ';
import CTA from '../CTA/CTA';
import Process from '../Process/Process';
import TrustIndicators from '../TrustIndicators/TrustIndicators';
const latestCar = fetch("https://my-assignment10-server.vercel.app/latest-cars").then(res=>res.json())
const Home = () => {
    return (
        <div>
          <Slider></Slider>
           <Suspense fallback={<div> <Loading></Loading> </div>}>
          <Card latestCar={latestCar}></Card>
           </Suspense>

           <TrustIndicators></TrustIndicators>


        <Features></Features>

         <Services></Services>

         <Categories></Categories>

          <Process></Process>

          <CustomerReview></CustomerReview>


         <Newsletter></Newsletter>

        {/* <FAQ></FAQ> */}


        <CTA></CTA>


       

        
           {/* <WhyRent></WhyRent> */}

           

           
        </div>
    );
};

export default Home;