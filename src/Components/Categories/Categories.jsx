// components/Categories.jsx
import { 
  FaCar, 
  FaCarSide, 
  FaCarAlt, 
  FaCarCrash, 
  FaGasPump,
  FaBus
} from 'react-icons/fa';

const Categories = () => {
  const categories = [
    {
      icon: <FaCar className="text-4xl" />,
      title: "Sedan",
      count: "85+ Cars",
      description: "Comfortable and fuel-efficient for city drives",
      color: "from-blue-500 to-blue-600",
      price: "$35/day"
    },
    {
      icon: <FaCarSide className="text-4xl" />,
      title: "SUV",
      count: "45+ Cars",
      description: "Spacious and powerful for family trips",
      color: "from-green-500 to-green-600",
      price: "$55/day"
    },
    {
      icon: <FaCarAlt className="text-4xl" />,
      title: "Luxury",
      count: "25+ Cars",
      description: "Premium vehicles for special occasions",
      color: "from-purple-500 to-purple-600",
      price: "$120/day"
    },
    {
      icon: <FaCarCrash className="text-4xl" />,
      title: "Sports",
      count: "18+ Cars",
      description: "High-performance cars for enthusiasts",
      color: "from-red-500 to-red-600",
      price: "$150/day"
    },
    {
      icon: <FaGasPump className="text-4xl" />,
      title: "Electric",
      count: "32+ Cars",
      description: "Eco-friendly and cost-effective",
      color: "from-teal-500 to-teal-600",
      price: "$45/day"
    },
    {
      icon: <FaBus className="text-4xl" />,
      title: "Vans & Buses",
      count: "28+ Vehicles",
      description: "Perfect for groups and cargo",
      color: "from-orange-500 to-orange-600",
      price: "$75/day"
    }
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold  mb-4">Car Categories</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse through our diverse collection of vehicles to find your perfect match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.count}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-gray-800">{category.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    View All
                  </button>
                  <div className="text-sm text-gray-500">
                    Starting at {category.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

export default Categories;