import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Pizza<span className="text-red-500">Delivery</span>
            </h3>
            <p className="text-sm text-gray-400 mb-4">Building happiness one pizza at a time since 2020</p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <FiFacebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <FiTwitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <FiInstagram size={14} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white hover:translate-x-1 inline-block transition">Home</Link></li>
              <li><Link to="/menu" className="hover:text-white hover:translate-x-1 inline-block transition">Menu</Link></li>
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 inline-block transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 inline-block transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-base mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Delivery Info</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-base mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center">
                <FiPhone className="mr-2 text-red-500" size={14} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-2 text-red-500" size={14} />
                <span>hello@pizzadelivery.in</span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="mr-2 text-red-500 mt-1" size={14} />
                <span>123, Pizza Street, MG Road, Bangalore - 560001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-xs md:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Pizza Delivery India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;