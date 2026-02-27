import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Success() {
  const { cartItems, clearCart } = useCart();
  const [orderNumber] = useState(() => `VEL-${Date.now().toString().slice(-8)}`);
  const [orderDate] = useState(() => new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }));

  useEffect(() => {
    // Clear cart after successful checkout
    const timer = setTimeout(() => {
      clearCart();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Success Icon */}
          <div className="relative inline-block mb-8 animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative bg-lime-500 rounded-full p-8">
              <CheckCircle className="w-24 h-24 mx-auto text-black" strokeWidth={2} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Order <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Confirmed!</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up">
            Thank you for your purchase! Your order has been successfully placed and will be shipped soon.
          </p>

          {/* Order Details Card */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8 max-w-2xl mx-auto text-left animate-slide-up transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Package className="w-6 h-6 text-lime-500" />
              Order Details
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-300 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Order Number</span>
                <span className="font-bold text-lime-500">{orderNumber}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-300 dark:border-gray-700">
                <span className="text-gray-600 dark:text-gray-400">Order Date</span>
                <span className="font-semibold">{orderDate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-400">Status</span>
                <span className="px-4 py-1 bg-lime-500 text-black rounded-full text-sm font-bold">
                  Confirmed
                </span>
              </div>
            </div>
          </div>

          {/* What's Next Card */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-12 max-w-2xl mx-auto text-left animate-slide-up transition-colors duration-300">
            <h2 className="text-2xl font-bold mb-6">What's Next?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">Order Confirmation Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    You'll receive a confirmation email with your order details shortly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">Processing</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We'll prepare your order for shipment within 1-2 business days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">Shipping Updates</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Track your package with the tracking number sent to your email.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">Delivery</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your order will arrive within 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-lime-500 hover:text-lime-400 font-semibold transition-colors"
            >
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Support Info */}
          <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need help with your order?
            </p>
            <Link
              to="/support/contact"
              className="text-lime-500 hover:text-lime-400 font-semibold transition-colors"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
