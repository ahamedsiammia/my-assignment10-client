import { 
  FaShieldAlt, 
  FaLock, 
  FaCertificate, 
  FaHandshake, 
  FaCreditCard,
  FaHeadset
} from 'react-icons/fa';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <FaShieldAlt className="text-3xl text-green-500" />,
      title: "Fully Insured",
      description: "Comprehensive insurance included with every rental"
    },
    {
      icon: <FaLock className="text-3xl text-blue-500" />,
      title: "Secure Payment",
      description: "256-bit SSL encryption for all transactions"
    },
    {
      icon: <FaCertificate className="text-3xl text-purple-500" />,
      title: "Verified Owners",
      description: "All car owners undergo background checks"
    },
    {
      icon: <FaHandshake className="text-3xl text-orange-500" />,
      title: "Trusted Partners",
      description: "Partnered with leading insurance companies"
    },
    {
      icon: <FaCreditCard className="text-3xl text-red-500" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no surprises"
    },
    {
      icon: <FaHeadset className="text-3xl text-teal-500" />,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance"
    }
  ];

  return (
    <section className="py-12 border-y border-gray-200 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold  mb-2">Why You Can Trust RentWheels</h3>
          <p className="text-gray-500">We prioritize your safety and satisfaction</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow mb-4 group-hover:scale-110 transition-transform duration-300">
                {indicator.icon}
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">{indicator.title}</h4>
              <p className="text-sm text-gray-500">{indicator.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <span>BBB A+ Rating</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
              <span>PCI DSS Compliant</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
              <span>GDPR Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;