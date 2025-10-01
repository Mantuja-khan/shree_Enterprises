import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import CategoryCard from '../components/CategoryCard';
import { categories, industrialCategories } from '../data/productCards';

const ProductsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'automotive' | 'industrial'>('all');

  const getFilteredCategories = () => {
    switch (activeFilter) {
     
      case 'industrial':
        return categories.filter(cat => industrialCategories.includes(cat.id));
      default:
        return categories;
    }
  };

  const filteredCategories = getFilteredCategories();

  return (
    <>
      <Helmet>
        <title>Products - Shree Enterprises | Industrial Oils and Lubricants </title>
        <meta name="description" content="Explore our complete range of premium engine oils for trucks, bikes, cars, and CNG vehicles. Helmet-grade quality assurance for optimal engine protection." />
        <meta name="keywords" content="engine oils, truck oil, bike oil, car oil, CNG oil, gear oil, greases, helmet quality, automotive lubricants" />
      </Helmet>

      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Premium quality Industrial Oil and lubricants 
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeFilter === 'all'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Products
            </button> */}
            
            <button
              onClick={() => setActiveFilter('industrial')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                activeFilter === 'industrial'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Industrial
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products available in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductsPage;