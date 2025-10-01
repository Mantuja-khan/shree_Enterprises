import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/ProductCard';
import { productCards } from '../data/productCards';
import { categories } from '../data/productCards';

const ProductCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryData = categories.find(cat => cat.id === category);
  const categoryProducts = productCards.filter(product => product.category === category);

  if (!categoryData) {
    return <div>Category not found</div>;
  }
  return (
    <>
      <Helmet>
        <title>{categoryData.name} - Shree Enterprises |  Quality Engine Oils</title>
        <meta name="description" content={`Premium ${categoryData.name.toLowerCase()} products from Shree Enterprises. Helmet-grade quality assurance for optimal engine performance.`} />
        <meta name="keywords" content={`${categoryData.name.toLowerCase()}, engine oil, helmet quality, automotive lubricants, Shree Enterprises`} />
      </Helmet>

      <div className="bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryData.name}</h1>
        </div>
      </div>
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No products available in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductCategoryPage;