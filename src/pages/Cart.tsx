import { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRemoveItem = (id: number, name: string) => {
    removeFromCart(id);
    toast.success(`${name} removed from cart`);
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      const item = cartItems.find(item => item.id === id);
      if (item) {
        handleRemoveItem(id, item.name);
      }
    } else {
      updateQuantity(id, quantity);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 15 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      // Simulate payment processing
      toast.info('Processing your order...');
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful payment
      toast.success('Payment successful! Redirecting...');
      
      // Wait a bit before redirect
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Redirect to success page
      navigate('/success');
      
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to process payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-2xl mx-auto">
            {/* Animated Shopping Bag Icon */}
            <div className="relative inline-block mb-8 animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full p-8 transition-colors duration-300">
                <ShoppingBag className="w-24 h-24 mx-auto text-gray-400 dark:text-gray-600 animate-bounce" strokeWidth={1.5} />
              </div>
            </div>

            {/* Title with gradient */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Cart is <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Empty</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 animate-slide-up leading-relaxed">
              Add some amazing products to get started!
            </p>

            {/* CTA Button with hover effect */}
            <Link 
              to="/products" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-lime-500 to-orange-500 text-black px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105 animate-slide-up"
            >
              <ShoppingBag className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Start Shopping</span>
            </Link>

            {/* Decorative elements */}
            <div className="mt-16 grid grid-cols-3 gap-6 opacity-50">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 animate-fade-in transition-colors duration-300" style={{ animationDelay: '0.1s' }}>
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Premium Quality</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 animate-fade-in transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl mb-2">🚀</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fast Shipping</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 animate-fade-in transition-colors duration-300" style={{ animationDelay: '0.3s' }}>
                <div className="text-3xl mb-2">💯</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Best Prices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Shopping <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Cart</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 flex items-center gap-6 transition-colors duration-300">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">Size: {item.size}</p>
                    <p className="text-sm text-lime-500 mb-2">{item.category}</p>
                    <p className="text-2xl font-bold text-orange-500">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300">
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button 
                      onClick={() => handleRemoveItem(item.id, item.name)}
                      className="p-2 hover:bg-red-500/20 rounded-full transition-colors text-red-500"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 sticky top-24 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-lime-500">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-lime-500 to-orange-500 text-black py-4 rounded-full font-bold hover:shadow-lg hover:shadow-lime-500/25 transition-all duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      <span>Proceed to Checkout</span>
                    </>
                  )}
                </button>

                <Link 
                  to="/products"
                  className="block text-center text-lime-500 hover:text-lime-400 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
