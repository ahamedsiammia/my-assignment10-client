import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaUserCheck } from 'react-icons/fa';
import { HiDocumentCurrencyDollar } from 'react-icons/hi2';
import { LuCalendarHeart } from 'react-icons/lu';

const WhyRent = () => {
    return (
        <div className='bg-gray-100 '>
            <h1 className='text-5xl text-center font-bold p-10'>why Rent with us</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 container mx-auto  gap-5 p-5 '>
                <div className=' bg-white shadow-lg rounded-xl p-15 text-center'>
                    <p className='flex justify-center'><LuCalendarHeart size={150}/></p>
                    <h1 className='text-2xl font-bold text-center'>Easy <br />Booking</h1>
                    <p className='font-semibold'>Book your ride with <br /> just a few clicks</p>
                </div>

                <div className='bg-white shadow-lg rounded-xl p-15 text-center'>
                    <p className='flex justify-center'><HiDocumentCurrencyDollar size={150} /></p>
                    <p className='text-2xl font-bold text-center'>Affordable <br /> Rates</p>
                    <p className='font-semibold'>Get competive Pri- <br />ces on all rentals</p>
                </div>

                <div className='bg-white shadow-lg rounded-xl p-15 text-center'>
                    <p className='flex justify-center ml-9'><FaUserCheck size={150} /></p>
                    <p className='text-2xl font-bold text-center'>Trusted <br /> Providers</p>
                    <p className='font-semibold'>all our providers are <br /> vetted for quality</p>
                </div>

                <div className='bg-white shadow-lg rounded-xl p-15 text-center'>
                    <p className='flex justify-center'><BiSupport size={150} /></p>
                    <p className='text-2xl font-bold text-center'>24/7 <br />Support</p>
                    <p className='font-semibold'>Our team is available <br /> around the clock</p>
                </div>
            </div>
        </div>
    );
};

export default WhyRent;