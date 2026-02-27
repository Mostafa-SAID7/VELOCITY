import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
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
                <FileText className="w-8 h-8 text-black" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">
                Terms of <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Service</span>
              </h1>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-8">Last updated: February 27, 2026</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  By accessing and using Velocity's website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>You must be at least 18 years old to make purchases</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>You agree to provide accurate and complete information</li>
                  <li>You will not use our services for any illegal purposes</li>
                </ul>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Product Information</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions, colors, or other content is accurate, complete, or error-free.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  All content on this website, including text, graphics, logos, and images, is the property of Velocity and protected by copyright and trademark laws.
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Velocity shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.
                </p>
              </div>

              <div className="bg-lime-500/10 border-l-4 border-lime-500 rounded-r-xl p-6">
                <h3 className="text-xl font-bold mb-3">Questions?</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  If you have any questions about our Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@velocity.com" className="text-lime-500 hover:text-lime-400">
                    legal@velocity.com
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
