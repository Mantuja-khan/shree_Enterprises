import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    image: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/products/${category.id}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 w-full max-w-sm mx-auto"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-contain bg-gray-50 transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 sm:p-4 lg:p-5">
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 line-clamp-2 leading-tight">{category.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 sm:space-x-2 text-orange-600 font-medium text-xs sm:text-sm lg:text-base group-hover:text-orange-700 transition-colors duration-200">
            <span>Explore Products</span>
            <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;