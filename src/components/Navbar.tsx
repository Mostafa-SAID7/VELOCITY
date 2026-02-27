import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 dark:bg-gray-900/90 light:bg-white backdrop-blur-md border-b border-gray-800 dark:border-gray-800 light:border-gray-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">
              VELOCITY
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white dark:text-white light:text-gray-700 hover:text-lime-500 transition-colors duration-200">Home</Link>
              <Link to="/products" className="text-white dark:text-white light:text-gray-700 hover:text-lime-500 transition-colors duration-200">Products</Link>
              <Link to="/story" className="text-white dark:text-white light:text-gray-700 hover:text-lime-500 transition-colors duration-200">Story</Link>
              <Link to="/reviews" className="text-white dark:text-white light:text-gray-700 hover:text-lime-500 transition-colors duration-200">Reviews</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-lime-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            
            <Link to="/cart" className="p-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-full transition-colors duration-200 relative text-white dark:text-white light:text-gray-700">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-lime-500 to-orange-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/signin" className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-lime-500/25 transition-all duration-300">
              Sign In
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-full transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-lime-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-full transition-colors duration-200 text-white dark:text-white light:text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 dark:bg-gray-900/95 light:bg-white backdrop-blur-md border-t border-gray-800 dark:border-gray-800 light:border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-md transition-colors duration-200 text-white dark:text-white light:text-gray-700" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-md transition-colors duration-200 text-white dark:text-white light:text-gray-700" onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link to="/story" className="block px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-md transition-colors duration-200 text-white dark:text-white light:text-gray-700" onClick={() => setIsMenuOpen(false)}>Story</Link>
            <Link to="/reviews" className="block px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-md transition-colors duration-200 text-white dark:text-white light:text-gray-700" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link to="/cart" className="block px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-md transition-colors duration-200 flex items-center justify-between text-white dark:text-white light:text-gray-700" onClick={() => setIsMenuOpen(false)}>
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="bg-gradient-to-r from-lime-500 to-orange-500 text-black text-xs font-bold rounded-full px-2 py-1">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/signin" className="block px-3 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100 rounded-md transition-colors duration-200 text-white dark:text-white light:text-gray-700" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
