import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiCheckCircle } from 'react-icons/fi';

const CTASection = () => {
  return (
    <div className="relative bg-fixed bg-cover bg-center py-16" style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/50 to-orange-600/50 mix-blend-multiply"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">Ready to Satisfy Your Cravings?</h2>
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Join thousands of happy customers and start building your perfect pizza today!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/register"
            className="group bg-white text-red-600 px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center justify-center"
          >
            Create Free Account
            <FiChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/login"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-red-600 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
          >
            Sign In
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center text-xs md:text-sm text-gray-300">
          <span className="flex items-center"><FiCheckCircle className="mr-1 text-green-400" /> No credit card required</span>
          <span className="flex items-center"><FiCheckCircle className="mr-1 text-green-400" /> Free delivery on first order</span>
          <span className="flex items-center"><FiCheckCircle className="mr-1 text-green-400" /> 100% satisfaction guaranteed</span>
        </div>
      </div>
    </div>
  );
};

export default CTASection;