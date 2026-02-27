import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, Zap } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto relative">
          {/* Animated Background Elements */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* 404 Number with Animation */}
          <div className="relative mb-8 animate-scale-in">
            <h1 className="text-[180px] md:text-[250px] font-bold leading-none bg-gradient-to-r from-lime-500 via-orange-500 to-red-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Zap className="w-24 h-24 text-lime-500 animate-bounce" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Oops! Page Not Found
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 animate-slide-up leading-relaxed">
            Looks like you've ventured into uncharted territory. The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link 
              to="/" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <Home className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>

            <Link 
              to="/products" 
              className="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-lime-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Search className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Browse Products</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/" 
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🏠</div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Home</p>
            </Link>

            <Link 
              to="/products" 
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">🛍️</div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Products</p>
            </Link>

            <Link 
              to="/story" 
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">📖</div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Story</p>
            </Link>

            <Link 
              to="/reviews" 
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">⭐</div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Reviews</p>
            </Link>
          </div>

          {/* Fun Message */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-gray-500 dark:text-gray-500 italic">
              "Not all who wander are lost... but this page definitely is." 🗺️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
