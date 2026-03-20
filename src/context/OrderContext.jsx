import React, { createContext, useState, useContext, useEffect } from 'react';
import toast from 'react-hot-toast';

const OrderContext = createContext();

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({
    base: null,
    sauce: null,
    cheese: null,
    veggies: [],
    meats: []
  });

  // Load cart from localStorage on initial load
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedOrders = localStorage.getItem('orders');
    
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
    
    if (savedOrders) {
      try {
        setOrders(JSON.parse(savedOrders));
      } catch (error) {
        console.error('Error loading orders:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Save orders to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (pizza) => {
    const newItem = { 
      ...pizza, 
      id: Date.now() + Math.random(),
      quantity: 1,
      price: pizza.price || calculatePizzaPrice(pizza)
    };
    setCart(prevCart => [...prevCart, newItem]);
    toast.success('🍕 Pizza added to cart!');
  };

  const calculatePizzaPrice = (pizza) => {
    let total = 0;
    if (pizza.base) total += pizza.base.price || 0;
    if (pizza.sauce) total += pizza.sauce.price || 0;
    if (pizza.cheese) total += pizza.cheese.price || 0;
    if (pizza.veggies) total += pizza.veggies.reduce((sum, v) => sum + (v.price || 0), 0);
    if (pizza.meats) total += pizza.meats.reduce((sum, m) => sum + (m.price || 0), 0);
    return total;
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    toast.success('Item removed from cart');
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
    toast.success('Cart cleared');
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const updatePizzaComponent = (type, value) => {
    setCurrentOrder(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const resetPizzaBuilder = () => {
    setCurrentOrder({
      base: null,
      sauce: null,
      cheese: null,
      veggies: [],
      meats: []
    });
  };

  const placeOrder = (orderData) => {
    const newOrder = {
      ...orderData,
      _id: 'ORD' + Date.now(),
      orderNumber: 'ORD' + Date.now().toString().slice(-8),
      status: 'order received',
      createdAt: new Date().toISOString(),
      items: cart,
      totalAmount: getCartTotal()
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);
    clearCart();
    toast.success(`✅ Order placed successfully! Order ID: ${newOrder.orderNumber}`);
    return newOrder;
  };

  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  const value = {
    cart,
    orders,
    currentOrder,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    updatePizzaComponent,
    resetPizzaBuilder,
    placeOrder,
    getCartTotal,
    cartCount: getCartCount(),
    calculatePizzaPrice
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};