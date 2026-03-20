import React from 'react';
import { FiPackage, FiClock, FiAward, FiTruck, FiUsers, FiThumbsUp } from 'react-icons/fi';

const features = [
  {
    icon: <FiPackage className="text-3xl text-red-600" />,
    title: 'Custom Build',
    description: 'Create your own pizza with your favorite ingredients from our wide selection',
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    borderColor: 'border-red-200'
  },
  {
    icon: <FiClock className="text-3xl text-orange-600" />,
    title: '30 Min Delivery',
    description: 'Hot and fresh pizza delivered to your doorstep in 30 minutes or less',
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    borderColor: 'border-orange-200'
  },
  {
    icon: <FiAward className="text-3xl text-yellow-600" />,
    title: 'Premium Quality',
    description: 'Fresh ingredients sourced from local suppliers daily',
    bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
    borderColor: 'border-yellow-200'
  },
  {
    icon: <FiTruck className="text-3xl text-green-600" />,
    title: 'Free Delivery',
    description: 'Free delivery on orders above ₹499',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    borderColor: 'border-green-200'
  },
  {
    icon: <FiUsers className="text-3xl text-purple-600" />,
    title: '10K+ Customers',
    description: 'Trusted by thousands of pizza lovers across India',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    borderColor: 'border-purple-200'
  },
  {
    icon: <FiThumbsUp className="text-3xl text-blue-600" />,
    title: 'Satisfaction Guaranteed',
    description: 'Love it or get your money back - 100% guarantee',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    borderColor: 'border-blue-200'
  }
];

const FeaturesSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
          Why Pizza Lovers Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          We're committed to delivering the best pizza experience in India
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`${feature.bgColor} p-5 md:p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${feature.borderColor} relative overflow-hidden group`}
          >
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/30 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-md relative z-10">
              {feature.icon}
            </div>
            <h3 className="text-base md:text-lg font-bold mb-1 relative z-10">{feature.title}</h3>
            <p className="text-xs md:text-sm text-gray-600 relative z-10">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;