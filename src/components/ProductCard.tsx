import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard as ProductCardType } from '../data/productCards';

interface ProductCardProps {
  product: ProductCardType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden w-full max-w-sm mx-auto">
      <div className="relative overflow-hidden h-40 sm:h-48 md:h-52 lg:h-56">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain bg-gray-50 transition-transform duration-300 hover:scale-105 p-2"
        />
      </div>
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>
        <p className="text-xs sm:text-sm text-blue-600 font-medium mb-2 uppercase tracking-wide">
          {product.type}
        </p>
        <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base line-clamp-3 leading-relaxed">
          {product.shortDescription}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="inline-flex items-center space-x-1 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 text-xs sm:text-sm md:text-base group"
        >
          <span>View Details</span>
          <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;