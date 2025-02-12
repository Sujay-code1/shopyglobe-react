import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg mt-8 hover:bg-blue-700 transition-colors"
        >
          <Home className="h-5 w-5" />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}