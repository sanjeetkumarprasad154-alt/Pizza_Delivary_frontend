import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiLogOut, 
  FiUser, 
  FiShoppingCart, 
  FiHome, 
  FiPackage, 
  FiList, 
  FiLogIn, 
  FiUserPlus,
  FiChevronDown,
  FiSettings,
  FiClock,
  FiHeart,
  FiTruck,
  FiStar,
  FiMenu
} from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import { useOrder } from '../../context/OrderContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { cartCount = 0 } = useOrder();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo with Image - BIGGER SIZE */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-4 group">
              <img 
                src={logo} 
                alt="Pizza Delivery Logo" 
                className="h-14 w-14 md:h-16 md:w-16 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent leading-tight">
                  Pizza
                </span>
                <span className="text-sm md:text-base font-semibold text-gray-600 -mt-1 tracking-wide">
                  Fresh Delivery
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Home link - always visible */}
            <Link 
              to="/" 
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <FiHome className="inline mr-1" /> Home
            </Link>

            {isAuthenticated ? (
              <>
                {/* User Navigation - Non-admin */}
                {!isAdmin && (
                  <>
                    <Link 
                      to="/build-pizza" 
                      className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <FiStar className="inline mr-1" /> Build Pizza
                    </Link>
                    <Link 
                      to="/cart" 
                      className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium relative transition-colors"
                    >
                      <FiShoppingCart className="inline mr-1" /> Cart
                      {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse shadow-md">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                  </>
                )}

                {/* Admin Navigation */}
                {isAdmin && (
                  <>
                    <Link 
                      to="/admin" 
                      className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <FiPackage className="inline mr-1" /> Dashboard
                    </Link>
                    <Link 
                      to="/admin/inventory" 
                      className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Inventory
                    </Link>
                    <Link 
                      to="/admin/orders" 
                      className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <FiList className="inline mr-1" /> Orders
                    </Link>
                  </>
                )}

                {/* User Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 border-l pl-4 ml-2 focus:outline-none hover:text-red-600 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-red-100 to-red-50 rounded-full flex items-center justify-center shadow-sm">
                      <FiUser className="text-red-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 max-w-[100px] truncate">
                      {user?.name?.split(' ')[0] || 'User'}
                    </span>
                    <FiChevronDown className={`text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100 z-50 animate-fade-in">
                      {/* User Info Header with Logo */}
                      <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg">
                        <div className="flex items-center space-x-2">
                          <img 
                            src={logo} 
                            alt="Logo" 
                            className="h-10 w-10 object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.style.display = 'none';
                            }}
                          />
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
                            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items for Regular Users */}
                      {!isAdmin && (
                        <>
                          <Link
                            to="/dashboard"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiHome className="mr-3 text-gray-500" />
                            Dashboard
                          </Link>
                          <Link
                            to="/build-pizza"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiStar className="mr-3 text-gray-500" />
                            Build Pizza
                          </Link>
                          <Link
                            to="/cart"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiShoppingCart className="mr-3 text-gray-500" />
                            Cart
                            {cartCount > 0 && (
                              <span className="ml-auto bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                                {cartCount}
                              </span>
                            )}
                          </Link>
                          <Link
                            to="/orders"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiClock className="mr-3 text-gray-500" />
                            My Orders
                          </Link>
                          <Link
                            to="/favorites"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiHeart className="mr-3 text-gray-500" />
                            Favorites
                          </Link>
                        </>
                      )}

                      {/* Menu Items for Admin */}
                      {isAdmin && (
                        <>
                          <Link
                            to="/admin"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiPackage className="mr-3 text-gray-500" />
                            Admin Dashboard
                          </Link>
                          <Link
                            to="/admin/inventory"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiList className="mr-3 text-gray-500" />
                            Inventory
                          </Link>
                          <Link
                            to="/admin/orders"
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                            onClick={() => setIsDropdownOpen(false)}
                          >
                            <FiTruck className="mr-3 text-gray-500" />
                            Manage Orders
                          </Link>
                        </>
                      )}

                      {/* Divider */}
                      <div className="border-t border-gray-100 my-2"></div>

                      {/* Settings & Logout */}
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <FiSettings className="mr-3 text-gray-500" />
                        Profile Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <FiLogOut className="mr-3 text-red-500" />
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* Login/Signup for non-authenticated users */
              <>
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium border border-gray-300 transition-all hover:border-red-600"
                >
                  <FiLogIn className="inline mr-1" /> Login
                </Link>
                <Link 
                  to="/register" 
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-red-700 hover:to-red-800 transition-all shadow-sm"
                >
                  <FiUserPlus className="inline mr-1" /> Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none p-2 rounded-lg hover:bg-red-50 transition-colors"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-down" ref={mobileMenuRef}>
            <div className="flex flex-col space-y-3">
              {/* Mobile Logo Section - BIGGER SIZE */}
              <div className="flex items-center space-x-3 px-3 py-3 border-b border-gray-100 mb-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="h-12 w-12 object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                <div>
                  <span className="text-xl font-bold text-red-600">Pizza Delivery</span>
                  <p className="text-xs text-gray-500">Hot & Fresh Pizza</p>
                </div>
              </div>

              <Link
                to="/"
                className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FiHome className="inline mr-2" /> Home
              </Link>

              {isAuthenticated ? (
                <>
                  {!isAdmin && (
                    <>
                      <Link
                        to="/dashboard"
                        className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FiUser className="inline mr-2" /> Dashboard
                      </Link>
                      <Link
                        to="/build-pizza"
                        className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FiStar className="inline mr-2" /> Build Pizza
                      </Link>
                      <Link
                        to="/cart"
                        className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium relative transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FiShoppingCart className="inline mr-2" /> Cart
                        {cartCount > 0 && (
                          <span className="ml-2 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
                            {cartCount}
                          </span>
                        )}
                      </Link>
                      <Link
                        to="/orders"
                        className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FiClock className="inline mr-2" /> My Orders
                      </Link>
                    </>
                  )}

                  {isAdmin && (
                    <>
                      <Link
                        to="/admin"
                        className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FiPackage className="inline mr-2" /> Admin Dashboard
                      </Link>
                      <Link
                        to="/admin/inventory"
                        className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FiList className="inline mr-2" /> Inventory
                      </Link>
                      <Link
                        to="/admin/orders"
                        className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <FiTruck className="inline mr-2" /> Manage Orders
                      </Link>
                    </>
                  )}

                  <div className="border-t border-gray-200 my-2 pt-3">
                    <div className="px-3 py-2 bg-gray-50 rounded-lg mx-2 mb-2">
                      <div className="flex items-center space-x-2">
                        <img 
                          src={logo} 
                          alt="Logo" 
                          className="h-8 w-8 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                          }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/profile"
                      className="flex items-center text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <FiSettings className="mr-2" /> Profile Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full text-left text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      <FiLogOut className="mr-2" /> Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiLogIn className="inline mr-2" /> Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-2 rounded-md text-sm font-medium text-center transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FiUserPlus className="inline mr-2" /> Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;