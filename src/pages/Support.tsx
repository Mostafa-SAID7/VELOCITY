import { useParams, Link } from 'react-router-dom';
import { Ruler, Package, Truck, Mail, ArrowLeft, Phone, MapPin, Clock } from 'lucide-react';

export default function Support() {
  const { page } = useParams<{ page: string }>();

  const renderContent = () => {
    switch (page) {
      case 'size-guide':
        return (
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-lime-500 to-orange-500 p-4 rounded-2xl">
                <Ruler className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Size <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Guide</span>
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Find your perfect fit with our comprehensive size guide. We want you to feel comfortable and confident in every step.
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6">Footwear Size Chart</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-300 dark:border-gray-700">
                        <th className="pb-4 pr-4">US Size</th>
                        <th className="pb-4 pr-4">UK Size</th>
                        <th className="pb-4 pr-4">EU Size</th>
                        <th className="pb-4">CM</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-400">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 pr-4">7</td>
                        <td className="py-3 pr-4">6</td>
                        <td className="py-3 pr-4">40</td>
                        <td className="py-3">25.0</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 pr-4">8</td>
                        <td className="py-3 pr-4">7</td>
                        <td className="py-3 pr-4">41</td>
                        <td className="py-3">25.7</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 pr-4">9</td>
                        <td className="py-3 pr-4">8</td>
                        <td className="py-3 pr-4">42</td>
                        <td className="py-3">26.7</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 pr-4">10</td>
                        <td className="py-3 pr-4">9</td>
                        <td className="py-3 pr-4">43</td>
                        <td className="py-3">27.3</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 pr-4">11</td>
                        <td className="py-3 pr-4">10</td>
                        <td className="py-3 pr-4">44</td>
                        <td className="py-3">28.0</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">12</td>
                        <td className="py-3 pr-4">11</td>
                        <td className="py-3 pr-4">45</td>
                        <td className="py-3">28.7</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-lime-500/10 border-l-4 border-lime-500 rounded-r-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-3">💡 Pro Tip</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Measure your feet at the end of the day when they're at their largest. Stand on a piece of paper and trace your foot, then measure from heel to toe for the most accurate sizing.
                </p>
              </div>
            </div>
          </div>
        );

      case 'returns':
        return (
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-lime-500 to-orange-500 p-4 rounded-2xl">
                <Package className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Returns & <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Exchanges</span>
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Not satisfied? We offer hassle-free returns within 30 days of purchase.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center transition-colors duration-300">
                  <div className="text-4xl mb-3">📦</div>
                  <h3 className="text-xl font-bold mb-2">30 Days</h3>
                  <p className="text-gray-600 dark:text-gray-400">Return window from delivery date</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center transition-colors duration-300">
                  <div className="text-4xl mb-3">🆓</div>
                  <h3 className="text-xl font-bold mb-2">Free Returns</h3>
                  <p className="text-gray-600 dark:text-gray-400">No restocking fees or hidden charges</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center transition-colors duration-300">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold mb-2">Fast Refunds</h3>
                  <p className="text-gray-600 dark:text-gray-400">Processed within 5-7 business days</p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 mb-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6">Return Process</h2>
                <ol className="space-y-4 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Initiate Return:</strong> Contact our support team or use your account dashboard to start a return.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Pack Items:</strong> Place items in original packaging with all tags attached.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Ship Back:</strong> Use the prepaid return label we provide via email.
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-lime-500 text-black rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-gray-900 dark:text-white">Get Refund:</strong> Receive your refund once we process your return.
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        );

      case 'shipping':
        return (
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-lime-500 to-orange-500 p-4 rounded-2xl">
                <Truck className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Shipping <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Information</span>
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Fast, reliable shipping to get your gear to you as quickly as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                  <h3 className="text-2xl font-bold mb-4">Standard Shipping</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">5-7 business days</p>
                  <p className="text-3xl font-bold text-lime-500">$15.00</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Free on orders over $100</p>
                </div>
                <div className="bg-gradient-to-r from-lime-500 to-orange-500 rounded-2xl p-8 text-black">
                  <h3 className="text-2xl font-bold mb-4">Express Shipping</h3>
                  <p className="mb-4">2-3 business days</p>
                  <p className="text-3xl font-bold">$25.00</p>
                  <p className="text-sm mt-2">Order before 2 PM for same-day dispatch</p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6">Shipping Locations</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We currently ship to all 50 US states and internationally to over 100 countries. International shipping times vary by location (typically 7-14 business days).
                </p>
                <div className="flex items-center gap-2 text-lime-500 font-semibold">
                  <MapPin className="w-5 h-5" />
                  <span>Track your order in real-time with our tracking system</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-lime-500 to-orange-500 p-4 rounded-2xl">
                <Mail className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Contact <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Us</span>
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Have questions? We're here to help! Reach out to our support team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center transition-colors duration-300">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-lime-500" />
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href="mailto:support@velocity.com" className="text-lime-500 hover:text-lime-400">
                    support@velocity.com
                  </a>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center transition-colors duration-300">
                  <Phone className="w-12 h-12 mx-auto mb-4 text-lime-500" />
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href="tel:1-800-VELOCITY" className="text-lime-500 hover:text-lime-400">
                    1-800-VELOCITY
                  </a>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 text-center transition-colors duration-300">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-lime-500" />
                  <h3 className="text-xl font-bold mb-2">Hours</h3>
                  <p className="text-gray-600 dark:text-gray-400">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-colors"
                    />
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-colors"
                    />
                  </div>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-colors"
                  />
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500 transition-colors"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-lime-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">How can we help you today?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link to="/support/size-guide" className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Ruler className="w-12 h-12 mx-auto mb-4 text-lime-500" />
                <h3 className="text-xl font-bold mb-2">Size Guide</h3>
                <p className="text-gray-600 dark:text-gray-400">Find your perfect fit</p>
              </Link>
              <Link to="/support/returns" className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Package className="w-12 h-12 mx-auto mb-4 text-lime-500" />
                <h3 className="text-xl font-bold mb-2">Returns</h3>
                <p className="text-gray-600 dark:text-gray-400">Easy returns & exchanges</p>
              </Link>
              <Link to="/support/shipping" className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Truck className="w-12 h-12 mx-auto mb-4 text-lime-500" />
                <h3 className="text-xl font-bold mb-2">Shipping</h3>
                <p className="text-gray-600 dark:text-gray-400">Delivery information</p>
              </Link>
              <Link to="/support/contact" className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Mail className="w-12 h-12 mx-auto mb-4 text-lime-500" />
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p className="text-gray-600 dark:text-gray-400">Get in touch with us</p>
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-lime-500 hover:text-lime-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>

          {renderContent()}
        </div>
      </section>
    </div>
  );
}
