// components/CTA.jsx
import { FaDownload, FaMobileAlt, FaGooglePlay, FaAppStore } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-16  ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <div className="flex items-center mb-6">
                <FaMobileAlt className="text-4xl text-blue-400 mr-3" />
                <h2 className="text-4xl font-bold">Get the RentWheels App</h2>
              </div>
              
              <p className="text-gray-500 mb-8 text-lg">
                Book cars instantly, manage your rentals, get exclusive app-only deals, and access 24/7 support - all from your mobile device.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Quick Bookings</h4>
                    <p className="text-gray-500">Find and book cars in under 60 seconds</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Exclusive Deals</h4>
                    <p className="text-gray-500">App-only discounts and special offers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Digital Key</h4>
                    <p className="text-gray-500">Unlock and start your car with your phone</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className=" rounded-2xl p-8 border border-gray-300">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
                    <FaDownload className="text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Download Now</h3>
                  <p className="text-gray-500">Join 100,000+ happy users</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-between  p-4 rounded-xl transition-colors border border-gray-700"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 text-green-500 rounded-lg flex items-center justify-center mr-4">
                        <FaAppStore className="text-2xl" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-gray-500">Download on the</div>
                        <div className="text-xl font-semibold">App Store</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">4.8★</div>
                      <div className="text-sm text-gray-400">12K reviews</div>
                    </div>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4  rounded-xl transition-colors border border-gray-700"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12  text-green-500 rounded-lg flex items-center justify-center mr-4">
                        <FaGooglePlay className="text-2xl" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-gray-500">Get it on</div>
                        <div className="text-xl font-semibold">Google Play</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">4.7★</div>
                      <div className="text-sm text-gray-400">15K reviews</div>
                    </div>
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">100K+</div>
                      <div className="text-sm text-gray-400">Downloads</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">4.8★</div>
                      <div className="text-sm text-gray-400">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex flex-wrap gap-4 text-black justify-center">
              <div className="px-4 py-2 bg-white rounded-lg backdrop-blur-sm">
                <span className="text-sm">No Credit Card Required</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg backdrop-blur-sm">
                <span className="text-sm">Free Cancellation</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg backdrop-blur-sm">
                <span className="text-sm">Instant Booking</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-lg backdrop-blur-sm">
                <span className="text-sm">Best Price Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;