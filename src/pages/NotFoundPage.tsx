import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found - Shree Enterprises | 404 Error</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Shree Enterprises homepage to explore our premium engine oils and automotive lubricants." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="mx-auto h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Search className="h-12 w-12 text-blue-600" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              Sorry, we couldn't find the page you're looking for. The page might have been moved, 
              deleted, or you might have entered the wrong URL.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <Home className="h-5 w-5 mr-2" />
              Go to Homepage
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link to="/products" className="text-blue-600 hover:text-blue-800 transition-colors">
                Our Products
              </Link>
              <Link to="/about" className="text-blue-600 hover:text-blue-800 transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                Contact Us
              </Link>
              <Link to="/achievements" className="text-blue-600 hover:text-blue-800 transition-colors">
                Our Achievements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;