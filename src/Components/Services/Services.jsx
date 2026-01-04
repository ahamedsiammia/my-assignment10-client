// components/Services.jsx
import { 
  FaRoad, 
  FaBriefcase, 
  FaPlane, 
  FaUmbrellaBeach, 
  FaCarSide, 
  FaUserFriends 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaBriefcase className="text-5xl text-blue-500" />,
      title: "Business Travel",
      description: "Premium cars for corporate travel with professional drivers available.",
      features: ["GPS Navigation", "WiFi Hotspot", "Priority Support"]
    },
    {
      icon: <FaUmbrellaBeach className="text-5xl text-green-500" />,
      title: "Vacation Rentals",
      description: "Perfect cars for family vacations and road trips.",
      features: ["Child Seats Available", "Luggage Space", "Tourist Guide Access"]
    },
    {
      icon: <FaPlane className="text-5xl text-purple-500" />,
      title: "Airport Transfers",
      description: "Seamless airport pickups and drops with flight tracking.",
      features: ["Meet & Greet", "Flight Monitoring", "30 Min Free Wait"]
    },
    {
      icon: <FaRoad className="text-5xl text-orange-500" />,
      title: "Long Distance",
      description: "Reliable vehicles for interstate and long-distance travel.",
      features: ["Unlimited Mileage", "Roadside Assistance", "Multiple Driver"]
    },
    {
      icon: <FaCarSide className="text-5xl text-red-500" />,
      title: "Daily Commute",
      description: "Fuel-efficient cars for your daily transportation needs.",
      features: ["Flexible Hours", "City Pass Included", "Parking Assistance"]
    },
    {
      icon: <FaUserFriends className="text-5xl text-indigo-500" />,
      title: "Special Events",
      description: "Luxury cars for weddings, parties, and special occasions.",
      features: ["Decoration Available", "Chauffeur Service", "Flexible Timing"]
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We cater to all your mobility needs with a wide range of specialized services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:border-blue-200"
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="p-4 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-700 mb-2">Includes:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;