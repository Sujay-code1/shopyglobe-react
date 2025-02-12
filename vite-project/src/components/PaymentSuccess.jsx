import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';

export default function PaymentSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8">
        <div className="flex justify-center mb-4">
          <CheckCircle className="h-20 w-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/orders"
            className="inline-flex items-center space-x-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span>View Orders</span>
          </Link>
        </div>
      </div>
    </div>
  );
}