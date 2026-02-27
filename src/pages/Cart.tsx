import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const toast = useToast();

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

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-600" />
            <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-400 mb-8">Add some amazing products to get started!</p>
            <Link 
              to="/products" 
              className="inline-block bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">
            Shopping <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Cart</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="bg-gray-800 rounded-2xl p-6 flex items-center gap-6">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-400 mb-1">Size: {item.size}</p>
                    <p className="text-sm text-lime-500 mb-2">{item.category}</p>
                    <p className="text-2xl font-bold text-orange-500">${item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center bg-gray-700 rounded-full">
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-600 rounded-full transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-600 rounded-full transition-colors"
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
              <div className="bg-gray-800 rounded-2xl p-6 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-lime-500">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => toast.info('Checkout feature coming soon!')}
                  className="w-full bg-gradient-to-r from-lime-500 to-orange-500 text-black py-4 rounded-full font-bold hover:shadow-lg hover:shadow-lime-500/25 transition-all duration-300 mb-4"
                >
                  Proceed to Checkout
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
