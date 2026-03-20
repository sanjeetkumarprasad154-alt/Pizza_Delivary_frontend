import React from 'react';
import { useParams } from 'react-router-dom';

const OrderStatus = () => {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Order Status</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <p className="text-gray-600 mb-4">Order ID: {id}</p>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
            <p className="text-sm">Order Received</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm">In Kitchen</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm">Out for Delivery</p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-2"></div>
            <p className="text-sm">Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;