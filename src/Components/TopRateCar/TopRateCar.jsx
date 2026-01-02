import React from 'react';

const TopRateCar = () => {
    return (
 <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Top Rated Cars
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
            alt="Mercedes-Benz S-Class"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1 text-black">Mercedes-Benz S-Class</h3>
            <p className="text-yellow-500">⭐ 4.9 <span className="text-gray-500 text-sm">(200 reviews)</span></p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
            alt="Porsche 911"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1 text-black">Porsche 911</h3>
            <p className="text-yellow-500">⭐ 4.8 <span className="text-gray-500 text-sm">(150 reviews)</span></p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
          <img
            src="https://images.unsplash.com/photo-1525609004556-c46c7d6cf023"
            alt="Audi A6"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1 text-black">Audi A6</h3>
            <p className="text-yellow-500">⭐ 4.8 <span className="text-gray-500 text-sm">(180 reviews)</span></p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300">
          <img
            src="https://i.pinimg.com/736x/8f/9f/8b/8f9f8b9827a6c94456ff25ea331364de.jpg"
            alt="Chevrolet Camaro"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1 text-black">Chevrolet Camaro</h3>
            <p className="text-yellow-500">⭐ 4.8 <span className="text-gray-500 text-sm">(170 reviews)</span></p>
          </div>
        </div>

      </div>
    </div>
    );
};

export default TopRateCar;