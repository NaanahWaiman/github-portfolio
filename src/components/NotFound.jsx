// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container mx-auto px-4 py-8 text-center'>
      <h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
