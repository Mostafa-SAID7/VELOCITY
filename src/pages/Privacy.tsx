import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function Privacy() {
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

          <div className="animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-lime-500 to-orange-500 p-4 rounded-2xl">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Privacy <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Policy</span>
              </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: February 27, 2026</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support. This may include your name, email address, shipping address, and payment information.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Process and fulfill your orders</li>
                  <li>Send you order confirmations and updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our products and services</li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  You have the right to access, update, or delete your personal information at any time. You can also opt out of marketing communications by following the unsubscribe link in our emails.
                </p>
              </div>

              <div className="bg-lime-500/10 border-l-4 border-lime-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold mb-3">Questions?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  If you have any questions about our Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@velocity.com" className="text-lime-500 hover:text-lime-400">
                    privacy@velocity.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
