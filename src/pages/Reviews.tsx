import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { getTestimonials, Testimonial } from '../services/api';
import { TestimonialSkeleton } from '../components/Skeleton';

export default function Reviews() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
        <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                What Champions <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Say</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Loading reviews...</p>
            </div>

            <div className="relative max-w-4xl mx-auto mb-20">
              <TestimonialSkeleton />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl transition-colors duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 animate-pulse mr-4"></div>
                    <div className="flex-1">
                      <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                      <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-3 w-20 bg-gray-300 dark:bg-gray-700 rounded mb-3 animate-pulse"></div>
                  <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded mb-2 animate-pulse"></div>
                  <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 flex items-center justify-center transition-colors duration-300">
        <p className="text-xl text-gray-600 dark:text-gray-400">No reviews available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              What Champions <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Say</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real stories from real athletes who trust Velocity
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-20">
            <div className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl transition-colors duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-6"
                />
                <div>
                  <h4 className="text-xl font-bold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-lime-500 font-semibold">{testimonials[currentTestimonial].role}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700/50 hover:bg-lime-500 dark:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 dark:bg-gray-700/50 hover:bg-lime-500 dark:hover:bg-lime-500 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-lime-500 scale-125' 
                      : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-lime-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
