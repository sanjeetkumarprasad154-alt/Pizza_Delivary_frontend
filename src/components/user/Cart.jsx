import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';
import { useOrder } from '../../context/OrderContext';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, clearCart, updateQuantity, placeOrder, getCartTotal } = useOrder();
  const { user } = useAuth();

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    const orderData = {
      userId: user?.id || 'guest',
      userName: user?.name || 'Guest',
      totalAmount: getCartTotal() + 40, // Including delivery fee
      paymentMethod: 'Cash on Delivery'
    };

    const newOrder = placeOrder(orderData);
    toast.success('Order placed successfully!');
    navigate(`/order/${newOrder._id}`);
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const calculateItemTotal = (item) => {
    return (item.price || 0) * (item.quantity || 1);
  };

  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any pizzas to your cart yet.</p>
          <button
            onClick={() => navigate('/build-pizza')}
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Build Your First Pizza
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cart.map((item, index) => (
            <div key={item.id || index} className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">Custom Pizza</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p><span className="font-medium">Base:</span> {item.base?.name || 'N/A'}</p>
                    <p><span className="font-medium">Sauce:</span> {item.sauce?.name || 'N/A'}</p>
                    <p><span className="font-medium">Cheese:</span> {item.cheese?.name || 'N/A'}</p>
                    {item.veggies?.length > 0 && (
                      <p><span className="font-medium">Veggies:</span> {item.veggies.map(v => v.name).join(', ')}</p>
                    )}
                    {item.meats?.length > 0 && (
                      <p><span className="font-medium">Meats:</span> {item.meats.map(m => m.name).join(', ')}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col items-end mt-4 sm:mt-0">
                  <div className="flex items-center space-x-3 mb-3">
                    <button
                      onClick={() => handleQuantityChange(item, (item.quantity || 1) - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      <FiMinus className="text-sm" />
                    </button>
                    <span className="font-semibold w-8 text-center">{item.quantity || 1}</span>
                    <button
                      onClick={() => handleQuantityChange(item, (item.quantity || 1) + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                    >
                      <FiPlus className="text-sm" />
                    </button>
                  </div>
                  <p className="font-bold text-lg mb-2">₹{calculateItemTotal(item)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 flex items-center text-sm"
                  >
                    <FiTrash2 className="mr-1" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cart.length} items)</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              {subtotal > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Free delivery on orders above ₹500</span>
                  <span>{subtotal >= 500 ? 'Applied' : `Need ₹${500 - subtotal} more`}</span>
                </div>
              )}
              <div className="border-t pt-3 font-bold flex justify-between text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors mb-3"
            >
              Place Order (Cash on Delivery)
            </button>
            
            <button
              onClick={clearCart}
              className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors mb-3"
            >
              Clear Cart
            </button>

            <button
              onClick={() => navigate('/build-pizza')}
              className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm"
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;