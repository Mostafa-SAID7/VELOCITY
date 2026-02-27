import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent mb-4 inline-block">
              VELOCITY
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              Empowering athletes worldwide to reach their full potential through innovative sportswear and unwavering dedication to excellence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-800 hover:bg-lime-500 dark:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-gray-700 dark:text-white hover:text-black">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-800 hover:bg-lime-500 dark:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-gray-700 dark:text-white hover:text-black">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-800 hover:bg-lime-500 dark:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-gray-700 dark:text-white hover:text-black">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-200 dark:bg-gray-800 hover:bg-lime-500 dark:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-gray-700 dark:text-white hover:text-black">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><Link to="/products" className="hover:text-lime-500 transition-colors duration-200">All Products</Link></li>
              <li><Link to="/products?category=Running" className="hover:text-lime-500 transition-colors duration-200">Running Shoes</Link></li>
              <li><Link to="/products?category=Training" className="hover:text-lime-500 transition-colors duration-200">Training Gear</Link></li>
              <li><Link to="/products?category=Basketball" className="hover:text-lime-500 transition-colors duration-200">Basketball</Link></li>
              <li><Link to="/products?category=Lifestyle" className="hover:text-lime-500 transition-colors duration-200">Lifestyle</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li><Link to="/support/size-guide" className="hover:text-lime-500 transition-colors duration-200">Size Guide</Link></li>
              <li><Link to="/support/returns" className="hover:text-lime-500 transition-colors duration-200">Returns</Link></li>
              <li><Link to="/support/shipping" className="hover:text-lime-500 transition-colors duration-200">Shipping</Link></li>
              <li><Link to="/support/contact" className="hover:text-lime-500 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2025 Velocity. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
