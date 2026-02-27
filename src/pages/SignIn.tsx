import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Input from '../components/Input';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <section className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className="text-gray-400">
                {isSignUp 
                  ? 'Join the Velocity community today' 
                  : 'Sign in to your account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(value) => handleChange('name', value)}
                    placeholder="Enter your name"
                    icon={<User className="w-5 h-5" />}
                    required={isSignUp}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(value) => handleChange('email', value)}
                  placeholder="Enter your email"
                  icon={<Mail className="w-5 h-5" />}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Password</label>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(value) => handleChange('password', value)}
                  placeholder="Enter your password"
                  icon={<Lock className="w-5 h-5" />}
                  required
                />
              </div>

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span className="text-sm text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-lime-500 hover:text-lime-400 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-lime-500 to-orange-500 text-black py-4 rounded-full font-bold hover:shadow-lg hover:shadow-lime-500/25 transition-all duration-300"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-lime-500 hover:text-lime-400 font-semibold transition-colors"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-800 text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button className="bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-semibold transition-colors">
                  Google
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 py-3 rounded-xl font-semibold transition-colors">
                  Facebook
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/" className="text-gray-400 hover:text-lime-500 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
