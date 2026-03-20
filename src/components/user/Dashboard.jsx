import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Pizza Delivery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/build-pizza" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">Build Your Pizza</h2>
          <p className="text-gray-600">Create your custom pizza with your favorite ingredients</p>
        </Link>
        
        <Link to="/cart" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">View Cart</h2>
          <p className="text-gray-600">Check your cart and proceed to checkout</p>
        </Link>
        
        <Link to="/orders" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-red-600">Your Orders</h2>
          <p className="text-gray-600">Track your order status and history</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;