import { FaCar, FaShieldAlt, FaClock, FaDollarSign } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaCar className="text-4xl text-blue-600" />,
      title: "Wide Selection",
      description: "Choose from hundreds of well-maintained vehicles including sedans, SUVs, luxury cars, and electric vehicles.",
      bgColor: "bg-blue-50"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-600" />,
      title: "Fully Insured",
      description: "Every rental comes with comprehensive insurance coverage for complete peace of mind.",
      bgColor: "bg-green-50"
    },
    {
      icon: <FaClock className="text-4xl text-purple-600" />,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to assist you with any queries.",
      bgColor: "bg-purple-50"
    },
    {
      icon: <FaDollarSign className="text-4xl text-orange-600" />,
      title: "Best Price Guarantee",
      description: "We offer the most competitive rates with no hidden charges. Find a better price? We'll match it!",
      bgColor: "bg-orange-50"
    },
    {
      icon: <FaCar className="text-4xl text-red-600" />,
      title: "Easy Pickup & Drop",
      description: "Convenient pickup and drop locations across the city. Airport delivery available.",
      bgColor: "bg-red-50"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-indigo-600" />,
      title: "Verified Owners",
      description: "All car owners go through a rigorous verification process for your safety.",
      bgColor: "bg-indigo-50"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">Why Choose RentWheels?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience the best car rental service with premium features designed for your comfort and convenience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;