import { useState } from 'react';
import { FaEnvelope, FaGift, FaShieldAlt } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would typically make an API call
      console.log('Subscribed:', email);
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <FaEnvelope className="text-3xl text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Stay Updated</h2>
                </div>
                
                <p className="text-gray-600 mb-6">
                  Subscribe to our newsletter and be the first to know about exclusive deals, new car additions, and special promotions.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-grow px-4 py-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="px-8 py-3 bg-gradient-to-r from-[#8A00FF] to-[#FF6A00] text-white font-semibold rounded-lg hover:from-[#8A00FF] hover:to-[#FF6A00]tion-all duration-300 transform hover:scale-105"
                    >
                      Subscribe
                    </button>
                  </div>
                  
                  {subscribed && (
                    <div className="bg-green-50 text-green-700 p-3 rounded-lg">
                      Thank you for subscribing! Check your email for confirmation.
                    </div>
                  )}
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <FaShieldAlt className="mr-2" />
                    <span>We respect your privacy. No spam, ever.</span>
                  </div>
                </form>
              </div>
              
              <div className="md:w-1/3 text-black bg-amber-400  p-8 md:p-12">
                <div className="flex items-center mb-6">
                  <FaGift className="text-3xl mr-3" />
                  <h3 className="text-2xl font-bold">Subscribe & Get</h3>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white  rounded-full flex items-center justify-center mr-3 font-bold">1</span>
                    <span>15% OFF your first rental</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white  rounded-full flex items-center justify-center mr-3 font-bold">2</span>
                    <span>Early access to deals</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white  rounded-full flex items-center justify-center mr-3 font-bold">3</span>
                    <span>Free upgrades occasionally</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white  rounded-full flex items-center justify-center mr-3 font-bold">4</span>
                    <span>Members-only events</span>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm opacity-90">
                    Join <span className="font-bold">25,000+</span> subscribers already enjoying our perks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;