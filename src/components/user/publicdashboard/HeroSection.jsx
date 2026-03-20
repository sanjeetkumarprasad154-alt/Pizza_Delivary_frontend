import React from 'react';
import { Link } from 'react-router-dom';
import { FiGift, FiChevronRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white relative overflow-hidden">
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center relative">
        <div className="inline-block animate-bounce mb-4">
          <span className="text-6xl md:text-7xl">🍕</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 px-2 leading-tight">
          Build Your <span className="text-yellow-300">Perfect</span> Pizza
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 px-4">
          Choose from 5 artisan bases, 5 signature sauces, and 50+ fresh toppings
        </p>
        
        {/* Offer Banner */}
        <div className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-full inline-block mb-8 animate-pulse">
          <span className="font-bold flex items-center">
            <FiGift className="mr-2" /> First Order: 50% OFF | Use Code: FIRST50
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <Link
            to="/register"
            className="group bg-white text-red-600 px-8 md:px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl inline-flex items-center justify-center relative overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <FiChevronRight className="ml-2 group-hover:translate-x-2 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </Link>
          <Link
            to="/login"
            className="border-2 border-white text-white px-8 md:px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transform hover:scale-110 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;