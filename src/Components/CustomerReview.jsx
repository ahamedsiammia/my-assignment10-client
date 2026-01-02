import React from 'react';
import { IoIosStar } from 'react-icons/io';

const CustomerReview = () => {
    return (
        <div className='container mx-auto'>
          <h1 className='text-3xl text-center font-bold p-10'>Customer testimonials</h1>
       <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-5 gap-5'>
           <div className='bg-white shadow-xl p-5 text-black rounded-lg'>
            <div className='flex items-center gap-5'>
                <img className='rounded-full w-[80px] h-[80px] ' src="https://i.pinimg.com/736x/97/84/d4/9784d40e25a4cf511f651548a6bcd7d0.jpg" alt="" />
                <div>
                    <p className='text-lg font-bold'>Lisa Smith</p>
                    <p className='text-orange-300 flex'><IoIosStar /> <IoIosStar /> <IoIosStar /><IoIosStar /><IoIosStar /></p>
                </div>
            </div>
            <p>Renting a car from this service was <br /> a fantastic experience. the booking <br />process is simple and the cars are in <br />excellent condition.</p>
          </div>

           <div className='bg-white shadow-xl p-5 text-black rounded-lg'>
            <div className='flex items-center gap-5'>
                <img className='rounded-full w-[80px] h-[80px] ' src="https://i.ibb.co.com/1YJWmB7W/Whats-App-Image-2025-11-03-at-20-12-28-50bfedae.jpg" alt="" />
                <div>
                    <p className='text-lg font-bold'>Siam Ahamed</p>
                    <p className='text-orange-300 flex'><IoIosStar /> <IoIosStar /> <IoIosStar /><IoIosStar /><IoIosStar /></p>
                </div>
            </div>
            <p>The prices are unbeatable,and the <br /> selection is excellent,i will defnitely use <br /> this servi-co egain!</p>
          </div>

           <div className='bg-white shadow-xl p-5 text-black rounded-lg'>
            <div className='flex items-center gap-5'>
                <img className='rounded-full w-[80px] h-[80px] ' src="https://i.pinimg.com/736x/b5/3b/43/b53b43442d62e7a2d5f7f8eb26776754.jpg" alt="" />
                <div>
                    <p className='text-lg font-bold'>Sadia Islam</p>
                    <p className='text-orange-300 flex'><IoIosStar /> <IoIosStar /> <IoIosStar /><IoIosStar /><IoIosStar /></p>
                </div>
            </div>
            <p>Excellent customer,service and a <br /> wide range of vehicles to choose <br /> from.Higly recommended!</p>
          </div>

       </div>
        </div>
    );
};

export default CustomerReview;