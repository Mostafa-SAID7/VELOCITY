import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Input from '../components/Input';
import { useToast } from '../context/ToastContext';

export default function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (isSignUp && !formData.name.trim()) {
      toast.warning('Please enter your name');
      return;
    }
    
    if (!formData.email.trim()) {
      toast.warning('Please enter your email');
      return;
    }
    
    if (!formData.password.trim()) {
      toast.warning('Please enter your password');
      return;
    }
    
    if (formData.password.length < 6) {
      toast.warning('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (isSignUp) {
        toast.success('Account created successfully! Welcome to Velocity!');
      } else {
        toast.success('Welcome back! Signed in successfully.');
      }
      
      // Reset form
      setFormData({ name: '', email: '', password: '' });
      
      // Navigate to home after 1 second
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <section className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 shadow-2xl transition-colors duration-300">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">
                {isSignUp ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {isSignUp 
                  ? 'Join the Velocity community today' 
                  : 'Sign in to your account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {isSignUp && (
                <Input
                  type="text"
                  name="name"
                  label="Full Name"
                  value={formData.name}
                  onChange={(value) => handleChange('name', value)}
                  placeholder="Enter your name"
                  icon={<User className="w-5 h-5" />}
                  required={isSignUp}
                />
              )}

              <Input
                type="email"
                name="email"
                label="Email Address"
                value={formData.email}
                onChange={(value) => handleChange('email', value)}
                placeholder="Enter your email"
                icon={<Mail className="w-5 h-5" />}
                required
              />

              <Input
                type="password"
                name="password"
                label="Password"
                value={formData.password}
                onChange={(value) => handleChange('password', value)}
                placeholder="Enter your password"
                icon={<Lock className="w-5 h-5" />}
                required
              />

              {!isSignUp && (
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input 
                      id="remember-me"
                      name="rememberMe"
                      type="checkbox" 
                      className="mr-2" 
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-lime-500 hover:text-lime-400 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-lime-500 to-orange-500 text-black py-4 rounded-full font-bold hover:shadow-lg hover:shadow-lime-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
                    {isSignUp ? 'Creating Account...' : 'Signing In...'}
                  </span>
                ) : (
                  isSignUp ? 'Create Account' : 'Sign In'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
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
                  <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => toast.info('Google sign-in coming soon!')}
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-3 rounded-xl font-semibold transition-colors"
                >
                  Google
                </button>
                <button 
                  type="button"
                  onClick={() => toast.info('Facebook sign-in coming soon!')}
                  className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 py-3 rounded-xl font-semibold transition-colors"
                >
                  Facebook
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
