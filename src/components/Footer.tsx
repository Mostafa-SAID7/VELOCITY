import React from 'react';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 light:bg-gray-100 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent mb-4">
              VELOCITY
            </div>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed max-w-md">
              Empowering athletes worldwide to reach their full potential through innovative sportswear and unwavering dedication to excellence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 hover:bg-lime-500 dark:hover:bg-lime-500 light:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-white dark:text-white light:text-gray-700">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 hover:bg-lime-500 dark:hover:bg-lime-500 light:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-white dark:text-white light:text-gray-700">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 hover:bg-lime-500 dark:hover:bg-lime-500 light:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-white dark:text-white light:text-gray-700">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-gray-800 dark:bg-gray-800 light:bg-gray-200 hover:bg-lime-500 dark:hover:bg-lime-500 light:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 text-white dark:text-white light:text-gray-700">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white dark:text-white light:text-gray-900 font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-3 text-gray-400 dark:text-gray-400 light:text-gray-600">
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Running Shoes</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Training Gear</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Basketball</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Lifestyle</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white dark:text-white light:text-gray-900 font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400 dark:text-gray-400 light:text-gray-600">
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Size Guide</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Returns</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Shipping</a></li>
              <li><a href="#" className="hover:text-lime-500 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-800 light:border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">&copy; 2025 Velocity. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-lime-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 dark:text-gray-400 light:text-gray-600 hover:text-lime-500 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
