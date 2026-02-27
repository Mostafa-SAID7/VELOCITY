import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Story from './pages/Story';
import Reviews from './pages/Reviews';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import Success from './pages/Success';
import NotFound from './pages/NotFound';
import Support from './pages/Support';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <CartProvider>
          <Router>
            <ErrorBoundary>
              <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetails />} />
                  <Route path="/story" element={<Story />} />
                  <Route path="/reviews" element={<Reviews />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/success" element={<Success />} />
                  <Route path="/support" element={<Support />} />
                  <Route path="/support/:page" element={<Support />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </div>
            </ErrorBoundary>
          </Router>
        </CartProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
