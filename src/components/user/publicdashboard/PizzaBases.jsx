import React from 'react';

const bases = [
  { name: 'Thin Crust', price: '₹299', icon: '🍕', description: 'Crispy & Light', popular: true, discount: '20% off' },
  { name: 'Thick Crust', price: '₹349', icon: '🍞', description: 'Soft & Fluffy', popular: false },
  { name: 'Stuffed Crust', price: '₹449', icon: '🧀', description: 'Cheese Filled', popular: true, discount: '15% off' },
  { name: 'Whole Wheat', price: '₹399', icon: '🌾', description: 'Healthy Choice', popular: false },
  { name: 'Gluten-Free', price: '₹499', icon: '🌱', description: 'Diet Friendly', popular: false }
];

const PizzaBases = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Choose Your Base</h2>
        <p className="text-center text-gray-600 mb-8 text-sm">Start with the perfect foundation</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {bases.map((base, index) => (
            <div 
              key={index} 
              className="group relative animate-float"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {base.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-25"></div>
                    <span className="relative bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg">
                      Popular
                    </span>
                  </div>
                </div>
              )}
              {base.discount && (
                <div className="absolute -top-2 -left-2 z-10">
                  <span className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg">
                    {base.discount}
                  </span>
                </div>
              )}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 border border-transparent hover:border-red-200">
                <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform">
                  {base.icon}
                </div>
                <h3 className="font-bold text-sm mb-1">{base.name}</h3>
                <p className="text-[10px] text-gray-500 mb-2">{base.description}</p>
                <p className="text-red-600 font-bold text-base">{base.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PizzaBases;