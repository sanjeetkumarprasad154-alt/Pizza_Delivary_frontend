import React from 'react';
import { Link } from 'react-router-dom';
import { FiPackage, FiShoppingBag, FiUsers, FiAlertCircle } from 'react-icons/fi';

const AdminDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Orders</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <FiShoppingBag className="text-3xl text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Inventory Items</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <FiPackage className="text-3xl text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <FiUsers className="text-3xl text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Low Stock Items</p>
              <p className="text-2xl font-bold">0</p>
            </div>
            <FiAlertCircle className="text-3xl text-red-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/admin/inventory" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Manage Inventory</h2>
          <p className="text-gray-600">Add, edit, or remove inventory items</p>
        </Link>

        <Link to="/admin/orders" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Manage Orders</h2>
          <p className="text-gray-600">View and update order status</p>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;