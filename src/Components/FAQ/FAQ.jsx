import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer: "You'll need a valid driver's license, credit/debit card, and proof of insurance. International renters need a passport and international driving permit."
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Yes, you can cancel or modify your booking up to 24 hours before the pickup time free of charge. Late cancellations may incur a fee."
    },
    {
      question: "Is there a mileage limit?",
      answer: "Most rentals include unlimited mileage. Some luxury or special vehicles may have daily limits, which will be clearly stated during booking."
    },
    {
      question: "What happens if the car breaks down?",
      answer: "All our cars include 24/7 roadside assistance. Just call our emergency number and we'll help you immediately, whether it's a flat tire or mechanical issue."
    },
    {
      question: "Can I pick up the car from one location and drop at another?",
      answer: "Yes, we offer one-way rentals between most major cities. Additional fees may apply depending on the distance between locations."
    },
    {
      question: "Do you offer long-term rentals?",
      answer: "Absolutely! We offer special discounts for rentals longer than 30 days. Contact our support team for customized long-term rental plans."
    },
    {
      question: "What's included in the rental price?",
      answer: "The rental price includes the vehicle, basic insurance, and 24/7 roadside assistance. Additional options like GPS, child seats, or extra insurance are available."
    },
    {
      question: "How do I extend my rental period?",
      answer: "You can extend your rental through our app, website, or by calling customer service, subject to vehicle availability."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about renting with RentWheels
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our customer support team is available 24/7 to assist you with any queries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;