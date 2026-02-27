import { useState, useEffect } from 'react';
import { Award, Users, Zap, Target, Heart, TrendingUp, Globe, Leaf, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getStats, Stats } from '../services/api';
import { StatsCardSkeleton } from '../components/Skeleton';

export default function Story() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const timeline = [
    { year: '2020', title: 'The Beginning', description: 'Founded with a vision to revolutionize sportswear' },
    { year: '2021', title: 'First Collection', description: 'Launched our debut running shoe line' },
    { year: '2022', title: 'Global Expansion', description: 'Expanded to 50+ countries worldwide' },
    { year: '2023', title: 'Innovation Award', description: 'Won Best Sports Innovation Award' },
    { year: '2024', title: 'Sustainability', description: 'Achieved carbon-neutral production' },
    { year: '2025', title: 'Future Forward', description: 'Continuing to push boundaries' }
  ];

  const values = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Constantly pushing the boundaries of what\'s possible in sportswear technology'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Passion',
      description: 'Driven by our love for sports and commitment to athlete success'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'Committed to protecting our planet for future generations'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Community',
      description: 'Building a global community of athletes who inspire each other'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
        <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Story</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Loading...</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <div className="h-10 w-64 bg-gray-300 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
                <div className="space-y-4">
                  <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                  <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="aspect-square rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <StatsCardSkeleton key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Story</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The journey of passion, innovation, and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Born from <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Passion</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
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
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-colors duration-300">
              <div className="bg-gradient-to-r from-lime-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-lime-500 mb-2">{stats?.awards.count}</div>
              <div className="text-gray-600 dark:text-gray-400">{stats?.awards.label}</div>
            </div>

            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-colors duration-300">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-orange-500 mb-2">{stats?.athletes.count}</div>
              <div className="text-gray-600 dark:text-gray-400">{stats?.athletes.label}</div>
            </div>

            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center transition-colors duration-300">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-red-500 mb-2">{stats?.experience.count}</div>
              <div className="text-gray-600 dark:text-gray-400">{stats?.experience.label}</div>
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
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('mission')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'mission'
                      ? 'bg-gradient-to-r from-lime-500 to-orange-500 text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Mission
                </button>
                <button
                  onClick={() => setActiveTab('vision')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'vision'
                      ? 'bg-gradient-to-r from-lime-500 to-orange-500 text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Vision
                </button>
                <button
                  onClick={() => setActiveTab('values')}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === 'values'
                      ? 'bg-gradient-to-r from-lime-500 to-orange-500 text-black'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  Values
                </button>
              </div>

              {activeTab === 'mission' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Mission</span>
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      At Velocity, our mission is simple yet powerful: to empower every athlete to reach their full potential through innovative design, cutting-edge technology, and unwavering commitment to quality.
                    </p>
                    <p>
                      We believe that everyone is an athlete, whether you're training for the Olympics or taking your first steps toward a healthier lifestyle. Our products are designed to support you at every stage of your journey.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Vision</span>
                  </h2>
                  <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      We envision a world where every individual has access to high-performance sportswear that doesn't compromise on style, comfort, or sustainability.
                    </p>
                    <p>
                      By 2030, we aim to be the leading sustainable sportswear brand, inspiring millions to pursue active lifestyles while protecting our planet for future generations.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Values</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {values.map((value, index) => (
                      <div key={index} className="bg-white/50 dark:bg-gray-900/50 p-4 rounded-xl transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="text-lime-500">{value.icon}</div>
                          <h3 className="font-bold text-lg">{value.title}</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex items-start space-x-4 bg-white/50 dark:bg-gray-900/50 p-6 rounded-xl transition-colors duration-300">
                <Heart className="w-8 h-8 text-lime-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainability Commitment</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We're dedicated to reducing our environmental impact through sustainable materials and ethical manufacturing practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From humble beginnings to global impact
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-lime-500 via-orange-500 to-red-500 hidden md:block"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300 transform hover:-translate-y-1">
                        <div className="text-3xl font-bold text-lime-500 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden md:block w-6 h-6 bg-gradient-to-r from-lime-500 to-orange-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <div className="bg-gradient-to-r from-lime-500 via-orange-500 to-red-500 rounded-3xl p-12 animate-scale-in">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Join Our Journey
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
                Be part of a movement that's changing the world of sportswear
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/products"
                  className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now
                </Link>
                <Link
                  to="/reviews"
                  className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Read Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
