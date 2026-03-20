import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { OrderProvider } from "./context/OrderContext";

// Auth Components
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgotPassword from "./components/auth/ForgotPassword";
import VerifyEmail from "./components/auth/VerifyEmail";

// User Components
import PublicDashboard from "./components/user/PublicDashboard";
import Dashboard from "./components/user/Dashboard";
import PizzaBuilder from "./components/user/PizzaBuilder";
import Cart from "./components/user/Cart";
import OrderStatus from "./components/user/OrderStatus";

// Admin Components
import AdminDashboard from "./components/admin/AdminDashboard";
import InventoryManagement from "./components/admin/InventoryManagement";
import OrdersManagement from "./components/admin/OrdersManagement";

// Common Components
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/common/PrivateRoute";
import AdminRoute from "./components/common/AdminRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <OrderProvider>
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <Navbar />
            <Toaster 
              position="top-center"
              toastOptions={{
                duration: 3000,
                style: {
                  background: '#363636',
                  color: '#fff',
                  borderRadius: '10px',
                },
                success: {
                  duration: 3000,
                  iconTheme: {
                    primary: '#10B981',
                    secondary: '#fff',
                  },
                },
                error: {
                  duration: 4000,
                  iconTheme: {
                    primary: '#EF4444',
                    secondary: '#fff',
                  },
                },
              }}
            />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<PublicDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/verify-email/:token" element={<VerifyEmail />} />

              {/* Protected User Routes */}
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/build-pizza"
                element={
                  <PrivateRoute>
                    <PizzaBuilder />
                  </PrivateRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
              <Route
                path="/order/:id"
                element={
                  <PrivateRoute>
                    <OrderStatus />
                  </PrivateRoute>
                }
              />

              {/* Admin Routes */}
              <Route path="/admin">
                <Route
                  index
                  element={
                    <AdminRoute>
                      <AdminDashboard />
                    </AdminRoute>
                  }
                />
                <Route
                  path="inventory"
                  element={
                    <AdminRoute>
                      <InventoryManagement />
                    </AdminRoute>
                  }
                />
                <Route
                  path="orders"
                  element={
                    <AdminRoute>
                      <OrdersManagement />
                    </AdminRoute>
                  }
                />
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </OrderProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;