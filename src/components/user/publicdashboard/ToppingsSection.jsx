import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const toppings = [
  { 
    category: 'Fresh Vegetables', 
    icon: '🥬',
    color: 'green',
    items: ['Mushrooms', 'Onions', 'Capsicum', 'Black Olives', 'Sweet Corn', 'Tomatoes', 'Spinach', 'Jalapeños'] 
  },
  { 
    category: 'Premium Meats', 
    icon: '🥩',
    color: 'red',
    items: ['Pepperoni', 'Grilled Chicken', 'Bacon', 'Ham', 'Italian Sausage', 'Beef', 'Meatballs', 'Prosciutto'] 
  },
  { 
    category: 'Specialty Cheese', 
    icon: '🧀',
    color: 'yellow',
    items: ['Fresh Mozzarella', 'Cheddar', 'Parmesan', 'Feta', 'Vegan Cheese', 'Ricotta', 'Provolone', 'Blue Cheese'] 
  }
];

const ToppingsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Fresh Toppings</h2>
        <p className="text-center text-gray-600 mb-8 text-sm">50+ premium toppings starting at just ₹49</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {toppings.map((category, idx) => (
            <div key={idx} className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-transparent hover:border-red-200">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${category.color}-100 rounded-xl flex items-center justify-center text-2xl transform group-hover:rotate-6 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold ml-3 text-gray-800">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {category.items.slice(0, 6).map((item, index) => (
                    <div key={index} className="flex items-center space-x-1 bg-white p-1.5 rounded-md hover:shadow-sm transition-shadow">
                      <FiCheckCircle className={`text-${category.color}-500 text-xs flex-shrink-0`} />
                      <span className="text-xs text-gray-700 truncate">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-500">+{category.items.length - 6} more • Starting ₹49</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToppingsSection;