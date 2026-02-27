import React from 'react';
import { Award, Users, Zap, Target, Heart, TrendingUp } from 'lucide-react';

export default function Story() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The journey of passion, innovation, and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Born from <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Passion</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Born from the relentless pursuit of excellence, Velocity represents more than just sportswear—we're a movement that believes in pushing boundaries and breaking limits.
                </p>
                <p>
                  Every stitch, every design, and every innovation is crafted with the champion mindset. We understand that greatness isn't just about crossing the finish line first; it's about the journey, the dedication, and the unwavering spirit to never give up.
                </p>
                <p>
                  Join millions of athletes worldwide who trust Velocity to fuel their passion and elevate their performance to extraordinary heights.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Athletes training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-lime-500 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center">
                <Zap className="w-12 h-12 text-black" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-r from-lime-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-lime-500 mb-2">50+</div>
              <div className="text-gray-400">Awards Won</div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">2M+</div>
              <div className="text-gray-400">Athletes Trust Us</div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
              <div className="text-gray-400">Years of Excellence</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-lime-500 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center">
                <Target className="w-12 h-12 text-black" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  At Velocity, our mission is simple yet powerful: to empower every athlete to reach their full potential through innovative design, cutting-edge technology, and unwavering commitment to quality.
                </p>
                <p>
                  We believe that everyone is an athlete, whether you're training for the Olympics or taking your first steps toward a healthier lifestyle. Our products are designed to support you at every stage of your journey.
                </p>
                <div className="flex items-start space-x-4 bg-gray-900/50 p-6 rounded-xl">
                  <Heart className="w-8 h-8 text-lime-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Sustainability Commitment</h3>
                    <p className="text-gray-400">
                      We're dedicated to reducing our environmental impact through sustainable materials and ethical manufacturing practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
