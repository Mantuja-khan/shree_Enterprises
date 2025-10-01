import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from "../assets/main_logo.png"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logo}
                alt="Shree Enterprises"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of industrial oils and lubricants for machinery, manufacturing equipment, and heavy-duty applications. Quality products designed to ensure maximum performance, protection, and long-term efficiency
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link to="/achievements" className="text-gray-400 hover:text-orange-500 transition-colors">Achievements</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91 99287-43929</span>

              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>singhamar979@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Khasra No.260 Naya Bazar Tapukara Bhiwadi 301707</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Shree Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;