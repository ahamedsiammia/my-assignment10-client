// components/Process.jsx
import { FaSearch, FaCalendarCheck, FaCar, FaStar } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      icon: <FaSearch className="text-4xl" />,
      title: "Search & Select",
      description: "Browse our wide selection of cars by type, price, or location. Use filters to find your perfect vehicle.",
      color: "from-blue-400 to-blue-500",
      number: "01"
    },
    {
      icon: <FaCalendarCheck className="text-4xl" />,
      title: "Book Instantly",
      description: "Choose your pickup dates and times. Get instant confirmation with no hidden fees.Use filters to find your perfect vehicle.",
      color: "from-green-400 to-green-500",
      number: "02"
    },
    {
      icon: <FaCar className="text-4xl" />,
      title: "Pickup & Drive",
      description: "Show your license, sign the agreement, and hit the road. We offer contactless pickup options.",
      color: "from-purple-400 to-purple-500",
      number: "03"
    },
    {
      icon: <FaStar className="text-4xl" />,
      title: "Return & Review",
      description: "Return the car at the agreed time and location. Share your experience to help others.",
      color: "from-orange-400 to-orange-500",
      number: "04"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">How RentWheels Works</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Renting a car has never been easier. Follow these simple steps and get on the road in minutes.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-green-400 via-purple-400 to-orange-400 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`bg-gradient-to-br ${step.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-gray-800 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">2 min</div>
              <div className="text-gray-500">Average Booking Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">99%</div>
              <div className="text-gray-500">Instant Confirmation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-500">Booking Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;