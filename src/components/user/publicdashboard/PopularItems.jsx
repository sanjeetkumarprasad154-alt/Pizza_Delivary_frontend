import React from 'react';

const popularItems = [
  { name: 'Margherita', price: '₹399', originalPrice: '₹499', image: '🍕', orders: '2.5K+', discount: '20%' },
  { name: 'Pepperoni', price: '₹499', originalPrice: '₹599', image: '🍕', orders: '3K+', discount: '17%' },
  { name: 'BBQ Chicken', price: '₹599', originalPrice: '₹749', image: '🍕', orders: '1.8K+', discount: '20%' }
];

const PopularItems = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">🔥 Most Popular</h2>
        <p className="text-center text-gray-600 mb-8 text-sm">Customer favorites this week</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularItems.map((item, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                  {item.discount} OFF
                </div>
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl font-bold text-red-600">{item.price}</span>
                  <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                </div>
                <p className="text-xs text-gray-500 mb-4">{item.orders} orders this week</p>
                <button className="bg-red-600 text-white px-5 py-2 rounded-full text-sm hover:bg-red-700 transition transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularItems;