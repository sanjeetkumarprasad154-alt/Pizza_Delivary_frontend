import React from 'react';

const sauces = [
  { name: 'Classic Marinara', price: '₹99', icon: '🍅', description: 'Rich Tomato Base', popular: true },
  { name: 'BBQ', price: '₹129', icon: '🔥', description: 'Smoky & Sweet', popular: false },
  { name: 'Pesto', price: '₹149', icon: '🌿', description: 'Fresh Basil & Garlic', popular: true },
  { name: 'Creamy Alfredo', price: '₹129', icon: '🥛', description: 'Rich & Creamy', popular: false },
  { name: 'Spicy Arrabbiata', price: '₹139', icon: '🌶️', description: 'Hot & Spicy', popular: false }
];

const SaucesSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Signature Sauces</h2>
        <p className="text-center text-gray-600 mb-8 text-sm">Handcrafted with authentic Indian spices</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sauces.map((sauce, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-2">{sauce.icon}</div>
                <h3 className="font-bold text-sm mb-1">{sauce.name}</h3>
                <p className="text-[10px] text-gray-500 mb-2">{sauce.description}</p>
                <p className="text-orange-600 font-bold text-base">{sauce.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaucesSection;