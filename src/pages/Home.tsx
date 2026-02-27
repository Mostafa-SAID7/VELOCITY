import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Premium sportswear engineered for champions. Where performance meets style, and dreams become reality.
            </p>
            <Link to="/products" className="group bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-lime-500 via-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Stay in the Game
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Get exclusive access to new releases, training tips, and special offers
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-black placeholder-gray-500 bg-white/90 backdrop-blur-sm border-0 focus:outline-none focus:ring-4 focus:ring-white/50"
            />
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
