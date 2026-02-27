import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Truck, Award, TrendingUp, Star } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { getProducts, Product } from '../services/api';

export default function Home() {
  const [email, setEmail] = useState('');
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const products = await getProducts();
        // Get top 3 rated products
        const featured = products
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
        setFeaturedProducts(featured);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.warning('Please enter your email address');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
  };

  const categories = [
    {
      name: 'Running',
      image: 'https://images.pexels.com/photos/2526878/pexels-photo-2526878.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Built for speed and endurance'
    },
    {
      name: 'Training',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Power through every workout'
    },
    {
      name: 'Basketball',
      image: 'https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dominate the court'
    },
    {
      name: 'Lifestyle',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Style meets comfort'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance First',
      description: 'Engineered with cutting-edge technology for maximum performance'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Guaranteed',
      description: '2-year warranty on all products with hassle-free returns'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Shipping',
      description: 'Free express shipping on orders over $100'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Award Winning',
      description: 'Recognized globally for innovation and design excellence'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1920')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span className="block">UNLEASH</span>
              <span className="block bg-gradient-to-r from-lime-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                YOUR POWER
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 dark:text-gray-300 mb-8 leading-relaxed">
              Premium sportswear engineered for champions. Where performance meets style, and dreams become reality.
            </p>
            <Link to="/products" className="group bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Velocity</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experience the difference that quality and innovation make
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-lime-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 text-black">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Shop by <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find the perfect gear for your sport
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/products?category=${category.name}`}
                className="group relative overflow-hidden rounded-2xl aspect-square animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-lime-500 transition-colors duration-300">{category.name}</h3>
                  <p className="text-sm text-gray-300">{category.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-lime-500 font-semibold">
                    <span>Shop Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Featured <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Products</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Our top-rated gear loved by athletes
              </p>
            </div>
            <Link 
              to="/products"
              className="hidden md:inline-flex items-center gap-2 text-lime-500 hover:text-lime-400 font-semibold transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 animate-pulse">
                  <div className="aspect-square bg-gray-300 dark:bg-gray-700 rounded-xl mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <Link
                  key={product.id}
                  to="/products"
                  className="group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-orange-500 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">({product.reviews})</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-lime-500 transition-colors">{product.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-orange-500">${product.price}</span>
                      <span className="text-lime-500 font-semibold group-hover:translate-x-2 transition-transform duration-300">Shop Now →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12 md:hidden">
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-lime-500 via-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
            <div className="animate-fade-in">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">50K+</div>
              </div>
              <p className="text-lg font-semibold">Happy Athletes</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">100+</div>
              </div>
              <p className="text-lg font-semibold">Awards Won</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">4.9</div>
              </div>
              <p className="text-lg font-semibold">Average Rating</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-center mb-2">
                <Truck className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">24h</div>
              </div>
              <p className="text-lg font-semibold">Fast Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-lime-500 via-orange-500 to-red-500 rounded-3xl p-12 animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Stay in the Game
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Get exclusive access to new releases, training tips, and special offers
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
              <input 
                id="newsletter-email"
                name="email"
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-black placeholder-gray-600 bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-white/50"
              />
              <button 
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
