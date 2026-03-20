import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';
import toast from 'react-hot-toast';

const VerifyEmail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-redirect to login after 3 seconds
    toast.success('Email verification is disabled in demo mode');
    setTimeout(() => {
      navigate('/login');
    }, 3000);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <FiCheckCircle className="mx-auto text-6xl text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900">Demo Mode</h2>
          <p className="mt-2 text-gray-600 mb-4">
            Email verification is disabled in demo mode.
          </p>
          <Link
            to="/login"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;