import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Shield, Package, Award, CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import { productDetails } from '../data/productDetails';
import EnquiryModal from '../components/EnquiryModal';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productDetails.find(p => p.id === id);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product not found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} - {product.brand} | Quality Engine Oil</title>
        <meta name="description" content={`${product.description} Premium quality from Shree Enterprises.`} />
        <meta name="keywords" content={`${product.name}, ${product.brand}, ${product.type}, engine oil, automotive lubricants`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 sm:py-8 md:py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 text-blue-200 hover:text-white mb-3 sm:mb-4 transition-colors duration-200 text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Products</span>
            </button>
            <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl text-blue-200 font-medium">{product.brand}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Product Image - Smaller and Simplified */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 sticky top-6">
                <div className="w-full max-w-xs mx-auto mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
                
                {/* Simple CTA Button */}
                <button
                  onClick={() => setIsEnquiryModalOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Mail className="h-4 w-4" />
                  <span>Send Enquiry</span>
                </button>
              </div>
            </div>

            {/* Product Information */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Description */}
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Package className="h-5 w-5 text-blue-600 mr-2" />
                  Product Description
                </h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Key Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Performance Standards */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Shield className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Performance Standards</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.performanceStandards.map((standard, index) => (
                      <span key={index} className="inline-block bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
                        {standard}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pack Sizes */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Package className="h-6 w-6 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Available Sizes</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.packSizes.map((size, index) => (
                      <span key={index} className="inline-block bg-gray-200 text-gray-800 px-3 py-2 rounded-lg text-sm font-medium">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-6">
                
                {/* Recommended For */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="h-5 w-5 text-green-600" />
                    <h2 className="text-lg font-semibold text-gray-900">Recommended For</h2>
                  </div>
                  <ul className="space-y-3">
                    {product.recommendedFor.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customer Benefits */}
                {product.benefits && (
                  <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <h2 className="text-lg font-semibold text-gray-900">Customer Benefits</h2>
                    </div>
                    <ul className="space-y-3">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 text-sm sm:text-base">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        productName={product.name}
        productImage={product.image}
        productType={product.type}
      />
    </>
  );
};

export default ProductDetailPage;