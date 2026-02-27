import React, { useState } from 'react';

export default function Products() {
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Elite Pro Runner",
      price: 189,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Running",
      description: "Lightweight running shoes with advanced cushioning technology"
    },
    {
      id: 2,
      name: "Power Lift Max",
      price: 159,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Training",
      description: "Heavy-duty training shoes for maximum stability"
    },
    {
      id: 3,
      name: "Court Dominator",
      price: 199,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Basketball",
      description: "High-performance basketball shoes with superior grip"
    },
    {
      id: 4,
      name: "Street Style Pro",
      price: 149,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Lifestyle",
      description: "Casual lifestyle shoes with premium comfort"
    },
    {
      id: 5,
      name: "Sprint Master",
      price: 179,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Running",
      description: "Speed-focused running shoes for competitive athletes"
    },
    {
      id: 6,
      name: "Flex Trainer",
      price: 139,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Training",
      description: "Versatile training shoes for all workout types"
    },
    {
      id: 7,
      name: "Slam Dunk Elite",
      price: 209,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Basketball",
      description: "Professional-grade basketball shoes with ankle support"
    },
    {
      id: 8,
      name: "Urban Walker",
      price: 129,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Lifestyle",
      description: "Comfortable everyday shoes for urban exploration"
    }
  ];

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our complete collection of performance gear designed for champions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-lime-500/10 transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-lime-500 font-semibold mb-2">{product.category}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-lime-500 transition-colors duration-300">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-500">${product.price}</span>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
