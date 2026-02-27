import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingBag, Heart, Share2, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { getProducts, getSizes, Product } from '../services/api';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const { addToCart } = useCart();
  const toast = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsData, sizesData] = await Promise.all([
          getProducts(),
          getSizes()
        ]);

        const currentProduct = productsData.find(p => p.id === parseInt(id || '0'));
        if (currentProduct) {
          setProduct(currentProduct);
          // Get related products from same category
          const related = productsData
            .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
            .slice(0, 4);
          setRelatedProducts(related);
        } else {
          navigate('/products');
        }

        setSizes(sizesData);
      } catch (error) {
        console.error('Error fetching product:', error);
        toast.error('Failed to load product details');
        navigate('/products');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, navigate, toast]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.warning('Please select a size');
      return;
    }

    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize,
        category: product.category,
        quantity
      });
      toast.success(`${product.name} added to cart!`);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product?.name,
        text: product?.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-200 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
            <div className="space-y-6">
              <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3 animate-pulse"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  // Mock multiple images (in real app, these would come from product data)
  const productImages = [product.image, product.image, product.image];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-8 animate-fade-in">
          <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors">Home</Link>
          <span className="text-gray-400">/</span>
          <Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors">Products</Link>
          <span className="text-gray-400">/</span>
          <Link to={`/products?category=${product.category}`} className="text-gray-600 dark:text-gray-400 hover:text-lime-500 transition-colors">{product.category}</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 dark:text-white font-semibold">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div className="animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
              <img 
                src={productImages[activeImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === index
                      ? 'border-lime-500 scale-105'
                      : 'border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-in">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="inline-block px-4 py-1 bg-lime-500/20 text-lime-500 rounded-full text-sm font-semibold mb-4">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isFavorite
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-orange-500 fill-current' : 'text-gray-400'}`} />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="text-4xl font-bold text-orange-500 mb-6">${product.price}</div>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Select Size</h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? 'bg-lime-500 text-black scale-105'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center font-bold text-xl"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center justify-center font-bold text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gradient-to-r from-lime-500 to-orange-500 text-black py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-lime-500/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mb-6"
            >
              <ShoppingBag className="w-6 h-6" />
              <span>Add to Cart</span>
            </button>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors duration-300">
                <Truck className="w-6 h-6 text-lime-500" />
                <div>
                  <div className="font-semibold text-sm">Free Shipping</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">On orders $100+</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors duration-300">
                <Shield className="w-6 h-6 text-lime-500" />
                <div>
                  <div className="font-semibold text-sm">2 Year Warranty</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Quality guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors duration-300">
                <RotateCcw className="w-6 h-6 text-lime-500" />
                <div>
                  <div className="font-semibold text-sm">Easy Returns</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">30-day policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              You May Also <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Like</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-lime-500/10 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 group-hover:text-lime-500 transition-colors">{relatedProduct.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-orange-500">${relatedProduct.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-orange-500 fill-current" />
                        <span className="text-sm">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
