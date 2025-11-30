import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaUserCheck } from 'react-icons/fa';
import { HiDocumentCurrencyDollar } from 'react-icons/hi2';
import { LuCalendarHeart } from 'react-icons/lu';

const WhyRent = () => {
    return (
        <div className="bg-gray-100 py-16">
            <h1 className="text-3xl  text-center font-bold mb-12">
                Why Rent With Us
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">


                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition duration-300">
                    <div className="flex justify-center mb-4">
                        <LuCalendarHeart size={80} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Easy Booking</h2>
                    <p className="text-gray-600 font-medium">
                        Book your ride with just a few clicks.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition duration-300">
                    <div className="flex justify-center mb-4">
                        <HiDocumentCurrencyDollar size={80} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Affordable Rates</h2>
                    <p className="text-gray-600 font-medium">
                        Enjoy competitive pricing on every rental.
                    </p>
                </div>

                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition duration-300">
                    <div className="flex justify-center mb-4">
                        <FaUserCheck size={80} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Trusted Providers</h2>
                    <p className="text-gray-600 font-medium">
                        All providers are verified and trusted.
                    </p>
                </div>


                <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition duration-300">
                    <div className="flex justify-center mb-4">
                        <BiSupport size={80} className="text-primary" />
                    </div>
                    <h2 className="text-xl font-bold mb-2">24/7 Support</h2>
                    <p className="text-gray-600 font-medium">
                        Our team is here to help anytime.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default WhyRent;
