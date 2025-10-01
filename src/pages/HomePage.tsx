import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {  Handshake } from 'lucide-react';
import { ArrowRight, Shield, Truck, Award } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/productCards';
import logo from "../assets/logo.webp"
import short_about from "../assets/home_about.jpg"

const HomePage: React.FC = () => {
  // Show only first 3 products
  const featuredCategories = categories.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Shree Enterprises - Vehicle Engine Oils </title>
        <meta name="description" content="Leading provider of premium vehicle engine oils for trucks, bikes, cars, and CNG vehicles. Quality helmet-grade protection for optimal engine performance." />
        <meta name="keywords" content="vehicle engine oil, truck oil, bike oil, car oil, CNG oil, helmet quality, engine protection, Shree Enterprises" />
      </Helmet>

      {/* Hero Section */}
      <HeroSlider />

      {/* About Preview Section */}
     <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Side - About Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          About Shree Enterprises
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          With over two decades of excellence in the  industry oils, 
          Shree Enterprises has established itself as a trusted name in providing 
          quality industries oils.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Our commitment to quality, innovation, and customer satisfaction has made us 
          the preferred choice for vehicle owners, fleet operators, and industrial clients 
          across the country.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
        >
          <span>Read More</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      {/* Right Side - Image - Fixed sizing */}
<div className="flex justify-center">
  <img 
    src={short_about} 
    alt="Shree Enterprises" 
    className="rounded-lg shadow-lg w-full max-w-lg h-96 object-cover"
  />
</div>


    </div>
  </div>
</section>


      {/* Products Preview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our top industries oils , 
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              <span>View More Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Handshake className="h-7 w-7 text-orange-600" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Channel Partners</h2>
            </div>
            <p className="text-base text-gray-600">
              Trusted partnerships with GS Caltex India Pvt. Ltd.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section - smaller height */}
              <div className="lg:w-1/3 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Channel Partners"
                  className="w-40 h-50 object-contain"
                />
              </div>

              {/* Content Section - reduced */}
              <div className="lg:w-2/3 p-6">
                <h3 className="text-xl md:text-1xl font-bold text-gray-900 mb-4">
                  GS Caltex India Pvt Ltd. CIN: U51109MH2010PTC1995610
                </h3>

                <ul className="space-y-3 text-sm text-gray-700">
                  <li>✅A Wing, # 1011-12, 10th Floor
                    Kanakia Wall Street, Chakala, Andheri-Kurla Road, Andheri (East),
                    Mumbai – 400 093</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default HomePage;