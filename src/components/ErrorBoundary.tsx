import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center p-4 transition-colors duration-300">
          <div className="max-w-2xl w-full text-center animate-fade-in">
            {/* Animated Icon */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-gray-100 dark:bg-gray-800 rounded-full p-8 transition-colors duration-300">
                <AlertTriangle className="w-24 h-24 mx-auto text-red-500 animate-bounce" strokeWidth={1.5} />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Oops! Something Went <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Wrong</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              We encountered an unexpected error. Don't worry, we're on it!
            </p>

            {/* Error Details (only in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 p-4 bg-red-100 dark:bg-red-900/20 rounded-xl text-left max-w-xl mx-auto">
                <p className="text-sm font-mono text-red-800 dark:text-red-400 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={this.handleReset}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-lime-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                <span>Try Again</span>
              </button>

              <Link
                to="/"
                className="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:border-lime-500 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Go Home</span>
              </Link>
            </div>

            {/* Help Text */}
            <p className="mt-12 text-sm text-gray-500 dark:text-gray-500">
              If this problem persists, please contact our support team.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
