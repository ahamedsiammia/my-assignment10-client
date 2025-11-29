import React from 'react';
import { Link } from 'react-router';

const Slider = () => {
    return (
        <div className="carousel w-full ">
            
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co.com/kVwHhRfY/Gemini-Generated-Image-9nyd5p9nyd5p9nyd.png"
                    className="w-full h-[800px] object-cover" />
                
                {/* 1. Navigation buttons are here.
                  2. Add a higher z-index (like z-20) to this div 
                     to ensure buttons are above the content overlay (which is z-10).
                */}
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20"> 
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>

                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center bg-opacity-40">
                    <h1 className="text-6xl font-bold text-white mb-4">
                        Find Your Dream Car
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-2xl">
                        Explore our extensive collection of high-quality vehicles. Luxury, performance, or utility—we have the perfect match for your journey.
                    </p>
                    <Link to="/BrowsCar" 
                       
                        className="btn rounded-2xl bg-gradient-to-r from-[#FF6B00] to-[#FF2D55] btn-lg transition-transform duration-300 hover:scale-95 text-white" 
                    >
                        Browse Cars
                    </Link>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src="https://i.pinimg.com/1200x/8c/00/91/8c009148639e74c7ee8a01a6dd92d1d2.jpg"
                    className="w-full h-[800px] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src="https://i.pinimg.com/736x/be/3e/62/be3e62b6f66f1c761b1ec85e40fbf094.jpg"
                    className="w-full h-[800px] object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src="https://i.pinimg.com/736x/28/18/35/28183584fbeee29bd1b1d535dce21b38.jpg"
                    className="w-full h-[800px]" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-20">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;