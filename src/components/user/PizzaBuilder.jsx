import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useOrder } from '../../context/OrderContext';
import toast from 'react-hot-toast';
import { FiChevronRight, FiChevronLeft, FiShoppingCart } from 'react-icons/fi';

const PizzaBuilder = () => {
  const [components, setComponents] = useState({
    bases: [],
    sauces: [],
    cheeses: [],
    veggies: [],
    meats: []
  });
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(1);
  const [pizza, setPizza] = useState({
    base: null,
    sauce: null,
    cheese: null,
    veggies: [],
    meats: []
  });
  
  const { token } = useAuth();
  const { addToCart, cartCount } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    // Mock data for pizza components
    const mockComponents = {
      bases: [
        { _id: '1', name: 'Thin Crust', price: 9.99, description: 'Crispy & Light', image: '🍕' },
        { _id: '2', name: 'Thick Crust', price: 10.99, description: 'Soft & Fluffy', image: '🍞' },
        { _id: '3', name: 'Stuffed Crust', price: 12.99, description: 'Cheese Filled', image: '🧀' },
        { _id: '4', name: 'Whole Wheat', price: 11.99, description: 'Healthy Choice', image: '🌾' },
        { _id: '5', name: 'Gluten-Free', price: 13.99, description: 'Diet Friendly', image: '🌱' }
      ],
      sauces: [
        { _id: '6', name: 'Classic Marinara', price: 1.99, description: 'Rich Tomato Base', image: '🍅' },
        { _id: '7', name: 'BBQ', price: 2.49, description: 'Smoky & Sweet', image: '🔥' },
        { _id: '8', name: 'Pesto', price: 2.99, description: 'Fresh Basil & Garlic', image: '🌿' },
        { _id: '9', name: 'Creamy Alfredo', price: 2.49, description: 'Rich & Creamy', image: '🥛' },
        { _id: '10', name: 'Spicy Arrabbiata', price: 2.49, description: 'Hot & Spicy', image: '🌶️' }
      ],
      cheeses: [
        { _id: '11', name: 'Fresh Mozzarella', price: 2.99, description: 'Creamy & Soft', image: '🧀' },
        { _id: '12', name: 'Cheddar', price: 2.49, description: 'Sharp & Rich', image: '🧀' },
        { _id: '13', name: 'Parmesan', price: 2.99, description: 'Aged & Nutty', image: '🧀' },
        { _id: '14', name: 'Feta', price: 2.99, description: 'Tangy & Crumbly', image: '🧀' },
        { _id: '15', name: 'Vegan Cheese', price: 3.49, description: 'Plant-Based', image: '🌱' }
      ],
      veggies: [
        { _id: '16', name: 'Mushrooms', price: 1.49, image: '🍄' },
        { _id: '17', name: 'Onions', price: 0.99, image: '🧅' },
        { _id: '18', name: 'Capsicum', price: 1.29, image: '🫑' },
        { _id: '19', name: 'Black Olives', price: 1.49, image: '🫒' },
        { _id: '20', name: 'Sweet Corn', price: 1.29, image: '🌽' },
        { _id: '21', name: 'Tomatoes', price: 0.99, image: '🍅' },
        { _id: '22', name: 'Spinach', price: 1.49, image: '🥬' },
        { _id: '23', name: 'Jalapeños', price: 1.29, image: '🌶️' }
      ],
      meats: [
        { _id: '24', name: 'Pepperoni', price: 2.49, image: '🥩' },
        { _id: '25', name: 'Grilled Chicken', price: 2.99, image: '🍗' },
        { _id: '26', name: 'Bacon', price: 2.49, image: '🥓' },
        { _id: '27', name: 'Ham', price: 2.49, image: '🍖' },
        { _id: '28', name: 'Italian Sausage', price: 2.99, image: '🌭' },
        { _id: '29', name: 'Beef', price: 2.99, image: '🥩' },
        { _id: '30', name: 'Meatballs', price: 2.99, image: '⚪' }
      ]
    };
    
    setComponents(mockComponents);
    setLoading(false);
  }, []);

  const handleBaseSelect = (base) => {
    setPizza({ ...pizza, base });
    setStep(2);
    toast.success(`Selected ${base.name} as base`);
  };

  const handleSauceSelect = (sauce) => {
    setPizza({ ...pizza, sauce });
    setStep(3);
    toast.success(`Selected ${sauce.name} sauce`);
  };

  const handleCheeseSelect = (cheese) => {
    setPizza({ ...pizza, cheese });
    setStep(4);
    toast.success(`Selected ${cheese.name} cheese`);
  };

  const handleVeggieToggle = (veggie) => {
    const exists = pizza.veggies.find(v => v._id === veggie._id);
    
    if (exists) {
      setPizza({
        ...pizza,
        veggies: pizza.veggies.filter(v => v._id !== veggie._id)
      });
      toast.success(`Removed ${veggie.name}`);
    } else {
      setPizza({
        ...pizza,
        veggies: [...pizza.veggies, veggie]
      });
      toast.success(`Added ${veggie.name}`);
    }
  };

  const handleMeatToggle = (meat) => {
    const exists = pizza.meats.find(m => m._id === meat._id);
    
    if (exists) {
      setPizza({
        ...pizza,
        meats: pizza.meats.filter(m => m._id !== meat._id)
      });
      toast.success(`Removed ${meat.name}`);
    } else {
      setPizza({
        ...pizza,
        meats: [...pizza.meats, meat]
      });
      toast.success(`Added ${meat.name}`);
    }
  };

  const calculatePrice = () => {
    let total = 0;
    if (pizza.base) total += pizza.base.price;
    if (pizza.sauce) total += pizza.sauce.price;
    if (pizza.cheese) total += pizza.cheese.price;
    if (pizza.veggies) total += pizza.veggies.reduce((sum, v) => sum + v.price, 0);
    if (pizza.meats) total += pizza.meats.reduce((sum, m) => sum + m.price, 0);
    return Math.round(total * 100) / 100;
  };

  const handleAddToCart = () => {
    if (!pizza.base || !pizza.sauce || !pizza.cheese) {
      toast.error('Please select base, sauce, and cheese');
      return;
    }

    const pizzaToAdd = {
      ...pizza,
      price: calculatePrice(),
      id: Date.now() + Math.random(),
      quantity: 1,
      timestamp: new Date().toISOString()
    };

    addToCart(pizzaToAdd);
    toast.success('✅ Pizza added to cart!');
    
    // Reset pizza builder
    setPizza({
      base: null,
      sauce: null,
      cheese: null,
      veggies: [],
      meats: []
    });
    setStep(1);
  };

  const goToCart = () => {
    navigate('/cart');
  };

  const resetBuilder = () => {
    setPizza({
      base: null,
      sauce: null,
      cheese: null,
      veggies: [],
      meats: []
    });
    setStep(1);
    toast('Builder reset', { icon: '🔄' });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with Cart Info */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Build Your Pizza</h1>
        <div className="flex items-center space-x-4">
          {cartCount > 0 && (
            <button
              onClick={goToCart}
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <FiShoppingCart />
              <span>View Cart ({cartCount})</span>
            </button>
          )}
          <button
            onClick={resetBuilder}
            className="text-gray-600 hover:text-gray-800 px-4 py-2"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step >= s ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {s}
              </div>
              {s < 5 && (
                <div className={`w-16 h-1 ${
                  step > s ? 'bg-red-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm font-medium">
          <span className={step >= 1 ? 'text-red-600' : 'text-gray-400'}>Base</span>
          <span className={step >= 2 ? 'text-red-600' : 'text-gray-400'}>Sauce</span>
          <span className={step >= 3 ? 'text-red-600' : 'text-gray-400'}>Cheese</span>
          <span className={step >= 4 ? 'text-red-600' : 'text-gray-400'}>Veggies</span>
          <span className={step >= 5 ? 'text-red-600' : 'text-gray-400'}>Meats</span>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose Your Pizza Base</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {components.bases.map((base) => (
                <div
                  key={base._id}
                  onClick={() => handleBaseSelect(base)}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all transform hover:scale-105 ${
                    pizza.base?._id === base._id
                      ? 'border-red-600 bg-red-50 shadow-lg'
                      : 'border-gray-200 hover:border-red-300 hover:shadow'
                  }`}
                >
                  <div className="text-4xl mb-3">{base.image}</div>
                  <h3 className="font-bold text-lg">{base.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{base.description}</p>
                  <p className="text-red-600 font-bold text-xl">₹{base.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose Your Sauce</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {components.sauces.map((sauce) => (
                <div
                  key={sauce._id}
                  onClick={() => handleSauceSelect(sauce)}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all transform hover:scale-105 ${
                    pizza.sauce?._id === sauce._id
                      ? 'border-red-600 bg-red-50 shadow-lg'
                      : 'border-gray-200 hover:border-red-300 hover:shadow'
                  }`}
                >
                  <div className="text-4xl mb-3">{sauce.image}</div>
                  <h3 className="font-bold text-lg">{sauce.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{sauce.description}</p>
                  <p className="text-red-600 font-bold text-xl">₹{sauce.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose Your Cheese</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {components.cheeses.map((cheese) => (
                <div
                  key={cheese._id}
                  onClick={() => handleCheeseSelect(cheese)}
                  className={`border-2 rounded-xl p-6 cursor-pointer transition-all transform hover:scale-105 ${
                    pizza.cheese?._id === cheese._id
                      ? 'border-red-600 bg-red-50 shadow-lg'
                      : 'border-gray-200 hover:border-red-300 hover:shadow'
                  }`}
                >
                  <div className="text-4xl mb-3">{cheese.image}</div>
                  <h3 className="font-bold text-lg">{cheese.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{cheese.description}</p>
                  <p className="text-red-600 font-bold text-xl">₹{cheese.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose Your Veggies (Optional)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {components.veggies.map((veggie) => (
                <div
                  key={veggie._id}
                  onClick={() => handleVeggieToggle(veggie)}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    pizza.veggies?.some(v => v._id === veggie._id)
                      ? 'border-red-600 bg-red-50 shadow'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{veggie.image}</div>
                  <h3 className="font-semibold">{veggie.name}</h3>
                  <p className="text-red-600 font-bold">₹{veggie.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Choose Your Meats (Optional)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {components.meats.map((meat) => (
                <div
                  key={meat._id}
                  onClick={() => handleMeatToggle(meat)}
                  className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                    pizza.meats?.some(m => m._id === meat._id)
                      ? 'border-red-600 bg-red-50 shadow'
                      : 'border-gray-200 hover:border-red-300'
                  }`}
                >
                  <div className="text-3xl mb-2">{meat.image}</div>
                  <h3 className="font-semibold">{meat.name}</h3>
                  <p className="text-red-600 font-bold">₹{meat.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
            >
              <FiChevronLeft className="mr-2" /> Previous
            </button>
          )}
          
          {step < 5 && (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition ml-auto"
            >
              Next <FiChevronRight className="ml-2" />
            </button>
          )}
          
          {step === 5 && (
            <button
              onClick={handleAddToCart}
              className="flex items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition ml-auto font-bold"
            >
              <FiShoppingCart className="mr-2" /> Add to Cart (₹{calculatePrice()})
            </button>
          )}
        </div>
      </div>

      {/* Current Selection Summary */}
      <div className="mt-6 bg-gradient-to-r from-gray-50 to-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-3">Your Pizza Summary:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className={`p-3 rounded-lg ${pizza.base ? 'bg-green-50' : 'bg-gray-100'}`}>
            <span className="text-sm text-gray-500">Base</span>
            <p className="font-semibold">{pizza.base?.name || 'Not selected'}</p>
          </div>
          <div className={`p-3 rounded-lg ${pizza.sauce ? 'bg-green-50' : 'bg-gray-100'}`}>
            <span className="text-sm text-gray-500">Sauce</span>
            <p className="font-semibold">{pizza.sauce?.name || 'Not selected'}</p>
          </div>
          <div className={`p-3 rounded-lg ${pizza.cheese ? 'bg-green-50' : 'bg-gray-100'}`}>
            <span className="text-sm text-gray-500">Cheese</span>
            <p className="font-semibold">{pizza.cheese?.name || 'Not selected'}</p>
          </div>
          <div className={`p-3 rounded-lg ${pizza.veggies?.length > 0 ? 'bg-green-50' : 'bg-gray-100'}`}>
            <span className="text-sm text-gray-500">Veggies</span>
            <p className="font-semibold">{pizza.veggies?.length || 0} items</p>
          </div>
          <div className={`p-3 rounded-lg ${pizza.meats?.length > 0 ? 'bg-green-50' : 'bg-gray-100'}`}>
            <span className="text-sm text-gray-500">Meats</span>
            <p className="font-semibold">{pizza.meats?.length || 0} items</p>
          </div>
        </div>
        <div className="mt-4 text-right">
          <span className="text-xl font-bold">Total: ₹{calculatePrice()}</span>
        </div>
      </div>
    </div>
  );
};

export default PizzaBuilder;