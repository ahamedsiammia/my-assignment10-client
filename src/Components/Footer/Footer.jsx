import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router';
const Footer = () => {
    return (
        <div className='  '>
            <div className='container mx-auto  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-10 '>
            <div className='space-y-5 text-gray-500'>
                <h1 className='text-2xl font-bold '> <span className="text-3xl font-extrabold text-blue-500">CS</span> CarSpot</h1>
                <p>You trusted patform for local car <br /> rentals,connecting  you with providers <br /> across the city.</p>
                <div className='flex items-center gap-2'>
                    <span><FaEnvelope></FaEnvelope></span>
                <p>support@carspot.com</p>
                </div>
                <div className='flex items-center gap-2'>
                    <span><FaPhoneAlt></FaPhoneAlt></span>
                <p>02956417235</p>
                </div>
            </div>
            <div className='text-gray-500 space-y-5'>
                <h1 className='text-xl '>Navigation</h1>
                <div className='flex flex-col gap-4'>
                    <Link  to="/">Home</Link>
                <Link to="/BrowsCar">Browse Car</Link>
                <Link to="/BrowsCar">Add Car</Link> 
                <Link to="/MyBookings">My Booking</Link>
                </div>
            </div>

            <div className='text-gray-500'>
                <h1 className='text-xl '>Legal</h1>
                <p className='mt-4 mb-2'>Terms & Conditions</p>
                <p>Privacy Pllicy</p>
            </div>

            <div>
                <h1 className='text-xl '>Connect</h1>
                <div className='flex gap-5 text-gray-500 mt-5'>
                    <a target='_blank' href="https://www.facebook.com/farhan.ahamed.siam.2024"><FaFacebook  size={30}></FaFacebook></a>
                    <FaTwitter   size={30}></FaTwitter>
                    <a target='_blank' href="https://www.instagram.com/siam.farhanahamed/"><FaInstagram size={30}></FaInstagram></a>
                </div>
            </div>

        </div>

        <div className='text-center  p-5 border-t '>
            <p>@ 2025 RentWheels. All rights reserved.</p>
        </div>
        </div>
    );
};

export default Footer;
