import React from 'react';

const steps = [
  { step: '01', title: 'Choose Base', desc: 'Select from 5 artisan bases', icon: '🍕', color: 'red' },
  { step: '02', title: 'Pick Sauce', desc: 'Choose signature sauces', icon: '🥫', color: 'orange' },
  { step: '03', title: 'Add Toppings', desc: 'Add veggies & meats', icon: '🥬', color: 'green' },
  { step: '04', title: 'Enjoy', desc: 'Hot delivery in 30 mins', icon: '🚚', color: 'blue' }
];

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How It Works</h2>
        <p className="text-center text-gray-600 mb-8 text-sm">Create your perfect pizza in 4 simple steps</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((item, index) => (
            <div key={index} className="relative group">
              <div className={`absolute inset-0 bg-${item.color}-600 rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative bg-white rounded-xl p-5 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center text-lg font-bold mx-auto mb-3 text-${item.color}-600`}>
                  {item.step}
                </div>
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-base mb-1">{item.title}</h3>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;