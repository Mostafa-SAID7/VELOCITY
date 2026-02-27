import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Story from './pages/Story';
import Reviews from './pages/Reviews';
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gray-900 dark:bg-gray-900 light:bg-white text-white dark:text-white light:text-gray-900 transition-colors duration-300">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/story" element={<Story />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </CartProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
