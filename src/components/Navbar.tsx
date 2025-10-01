import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Search } from 'lucide-react';
import logo from "../assets/main_logo_1.png";
import { categories } from '../data/productCards';
import baseoil from "../assets/base_oil_navbar.jpeg"
import polymers from "../assets/polymers_navbar.jpeg"


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isIndustrialOpen, setIsIndustrialOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products', dropdown: true },
    { name: 'About', path: '/about' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' },
  ];

  // Helper function to get image from categories
  const getImageFromCategories = (productId: string) => {
    const category = categories.find(cat => cat.id === productId);
    return category ? category.image : 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop';
  };

  // Helper function to get category image for main dropdown items
  const getCategoryImage = (categoryName: string) => {
    const categoryImageMap: { [key: string]: string } = {
      'Industrial': getImageFromCategories('hydrolic-oil'), // Use hydraulic oil as representative
      'Baseoil': baseoil,
      'Polymers': polymers
    };
    return categoryImageMap[categoryName] ;
  };

  const industrialItems = [
    { name: 'Hydraulic Oil', path: '/products/hydrolic-oil', image: getImageFromCategories('hydrolic-oil') },
    { name: 'Heavy Duty Diesel Engine Oil', path: '/products/heavy-duty-diesel-engine-oil', image: getImageFromCategories('heavy-duty-diesel-engine-oil') },
    { name: 'Gear Oil', path: '/products/gear-oil', image: getImageFromCategories('gear-oil') },
    { name: 'Transmission Oil', path: '/products/transmission-oil', image: getImageFromCategories('transmission-oil') },
    { name: 'Industrial Greases', path: '/products/industrial-oil', image: getImageFromCategories('industrial-oil') },
    { name: 'Compressor Oil', path: '/products/compressor-oil', image: getImageFromCategories('compressor-oil') },
    { name: 'Turbine Oil', path: '/products/turbine-oil', image: getImageFromCategories('turbine-oil') },
    { name: 'Coolant', path: '/products/coolant', image: getImageFromCategories('coolant') },
    { name: 'Heat Transfer Fluid', path: '/products/heat-transfer-fluid', image: getImageFromCategories('heat-transfer-fluid') },
    { name: 'Cutting Oil', path: '/products/cutting-oil', image: getImageFromCategories('cutting-oil') },
    { name: 'Slideway Machine Oil', path: '/products/slideway-machine-oil', image: getImageFromCategories('slideway-machine-oil') },
    { name: 'Rockdrill', path: '/products/rockdrill-oil', image: getImageFromCategories('rockdrill-oil') },
  ];

  const otherItems = [
    { name: 'Baseoil', path: '/pages/baseoil', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100&h=100&fit=crop' },
    { name: 'Polymers', path: '/pages/polymers', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=100&h=100&fit=crop' },
  ];

  const allProducts = [...industrialItems, ...otherItems];

  const productItems = [
    { name: 'Industrial', sub: industrialItems },
    { name: 'Baseoil', path: '/pages/baseoil' },
    { name: 'Polymers', path: '/pages/polymers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }

    const filtered = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
    setIsSearchOpen(true);
  }, [searchQuery]);

  // Close search dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchResultClick = () => {
    setSearchQuery('');
    setIsSearchOpen(false);
    setIsMobileSearchOpen(false);
  };

  const handleMobileSearchToggle = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    setSearchQuery('');
    setSearchResults([]);
    if (!isMobileSearchOpen) {
      // Focus the input after the state updates
      setTimeout(() => {
        mobileSearchRef.current?.focus();
      }, 100);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Shree Enterprises" className="h-16 w-auto" />
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8" ref={searchRef}>
            <div className="relative w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>

              {/* Search Results Dropdown */}
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                  {searchResults.map((product, index) => (
                    <Link
                      key={index}
                      to={product.path}
                      onClick={handleSearchResultClick}
                      className="flex items-center p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md mr-3"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop';
                        }}
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                        <p className="text-xs text-gray-500">Product</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {/* No Results */}
              {isSearchOpen && searchQuery && searchResults.length === 0 && (
                <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                  <p className="text-sm text-gray-500">No products found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => {
                      setIsProductsOpen(false);
                      setIsIndustrialOpen(false);
                    }}
                  >
                    <button
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200 ${
                        isActive(item.path)
                          ? 'bg-blue-800 text-white'
                          : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>

                    {isProductsOpen && (
                      <div className="absolute left-0 top-full w-64 bg-white shadow-lg rounded-md border z-50">
                        {productItems.map((subItem) =>
                          subItem.sub ? (
                            <div
                              key={subItem.name}
                              className="relative group"
                              onMouseEnter={() => setIsIndustrialOpen(true)}
                              onMouseLeave={() => setIsIndustrialOpen(false)}
                            >
                              <button className="w-full flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800 border-b border-gray-100 last:border-b-0">
                                <div className="flex items-center">
                                  <img
                                    src={getCategoryImage(subItem.name)}
                                    alt={subItem.name}
                                    className="w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0"
                                    onError={(e) => {
                                      e.currentTarget.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop';
                                    }}
                                  />
                                  <span>{subItem.name}</span>
                                </div>
                                <ChevronRight className="h-4 w-4" />
                              </button>

                              {/* Industrial submenu */}
                              {(subItem.name === 'Industrial' && isIndustrialOpen) && (
                                <div className="absolute left-full top-0 w-72 bg-white shadow-lg rounded-md border z-50 max-h-96 overflow-y-auto">
                                  {industrialItems.map((ind) => (
                                    <Link
                                      key={ind.name}
                                      to={ind.path}
                                      className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800 border-b border-gray-100 last:border-b-0"
                                    >
                                      <img
                                        src={ind.image}
                                        alt={ind.name}
                                        className="w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0"
                                        onError={(e) => {
                                          e.currentTarget.src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&h=100&fit=crop';
                                        }}
                                      />
                                      <span className="truncate">{ind.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              key={subItem.name}
                              to={subItem.path!}
                              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800 border-b border-gray-100 last:border-b-0"
                            >
                              <img
                                src={getCategoryImage(subItem.name)}
                                alt={subItem.name}
                                className="w-8 h-8 object-cover rounded-md mr-3 flex-shrink-0"
                                onError={(e) => {
                                  e.currentTarget.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop';
                                }}
                              />
                              <span>{subItem.name}</span>
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? 'bg-blue-800 text-white'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile Search Icon and Menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={handleMobileSearchToggle}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-100 focus:outline-none"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar Overlay */}
      {isMobileSearchOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex items-center p-4">
            <div className="flex-1 relative">
              <input
                ref={mobileSearchRef}
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-base"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <button
              onClick={handleMobileSearchToggle}
              className="ml-3 p-2 rounded-md text-gray-700 hover:text-blue-800 hover:bg-blue-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Search Results */}
          {searchQuery && (
            <div className="border-t border-gray-200 max-h-80 overflow-y-auto">
              {searchResults.length > 0 ? (
                <div>
                  {searchResults.map((product, index) => (
                    <Link
                      key={index}
                      to={product.path}
                      onClick={handleSearchResultClick}
                      className="flex items-center p-4 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-md mr-4"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=100&h=100&fit=crop';
                        }}
                      />
                      <div>
                        <h4 className="text-base font-medium text-gray-900">{product.name}</h4>
                        <p className="text-sm text-gray-500">Product</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4">
                  <p className="text-base text-gray-500">No products found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Background overlay */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="p-4 border-b bg-blue-800">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-white">Menu</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-md text-white hover:bg-blue-700"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto">
                <div className="px-4 py-2 space-y-1">
                  {navItems.map((item) =>
                    item.dropdown ? (
                      <div key={item.name}>
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="w-full text-left flex items-center justify-between px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-800"
                        >
                          {item.name}
                          <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isProductsOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {/* Industrial Section */}
                            <div>
                              <p className="px-3 py-2 font-semibold text-gray-700 bg-gray-50 rounded">Industrial</p>
                              <div className="ml-2 space-y-1">
                                {industrialItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-800 rounded"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <img
                                      src={sub.image}
                                      alt={sub.name}
                                      className="w-6 h-6 object-cover rounded-md mr-3 flex-shrink-0"
                                      onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=100&h=100&fit=crop';
                                      }}
                                    />
                                    <span className="truncate">{sub.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Other products */}
                            <div className="space-y-1 mt-3">
                              <Link
                                to="/pages/baseoil"
                                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded bg-gray-50"
                                onClick={() => setIsOpen(false)}
                              >
                                Baseoil
                              </Link>
                              <Link
                                to="/pages/polymers"
                                className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-800 rounded bg-gray-50"
                                onClick={() => setIsOpen(false)}
                              >
                                Polymers
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`block px-3 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                          isActive(item.path)
                            ? 'bg-blue-800 text-white'
                            : 'text-gray-700 hover:bg-blue-100 hover:text-blue-800'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;