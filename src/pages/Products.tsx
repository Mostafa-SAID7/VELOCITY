import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Grid, List, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import CustomDropdown from '../components/CustomDropdown';
import Input from '../components/Input';
import { ProductCardSkeleton } from '../components/Skeleton';
import { getProducts, getCategories, getSizes, Product as ProductType } from '../services/api';

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const itemsPerPage = 6;

  // Data from API
  const [allProducts, setAllProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const toast = useToast();

  // Update category when URL parameter changes
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam, categories]);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData, sizesData] = await Promise.all([
          getProducts(),
          getCategories(),
          getSizes()
        ]);
        
        setAllProducts(productsData);
        // Categories already include "All" from API, no need to add it again
        setCategories(categoriesData.map(cat => cat.name));
        setSizes(sizesData);
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: ProductType) => {
    setSelectedProduct(product);
    setSelectedSize('');
  };

  const confirmAddToCart = () => {
    if (selectedProduct && selectedSize) {
      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
        size: selectedSize,
        category: selectedProduct.category
      });
      setSelectedProduct(null);
      setSelectedSize('');
      toast.success(`${selectedProduct.name} added to cart!`);
    } else if (!selectedSize) {
      toast.warning('Please select a size first!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
        <section className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Products</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">Loading products...</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Skeleton Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-200 dark:bg-gray-700/50 rounded-2xl p-6 sticky top-24 transition-colors duration-300">
                  <div className="h-6 w-32 bg-gray-300 dark:bg-gray-700 rounded mb-6 animate-pulse"></div>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skeleton Products */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-20 transition-colors duration-300">
      {/* Size Selection Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 relative transition-colors duration-300">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-bold mb-4">Select Size</h3>
            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-20 h-20 object-cover rounded-xl"
              />
              <div>
                <h4 className="font-bold text-lg">{selectedProduct.name}</h4>
                <p className="text-orange-500 font-bold text-xl">${selectedProduct.price}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 rounded-xl font-semibold transition-all ${
                    selectedSize === size
                      ? 'bg-lime-500 text-black'
                      : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>

            <button
              onClick={confirmAddToCart}
              disabled={!selectedSize}
              className="w-full bg-gradient-to-r from-lime-500 to-orange-500 text-black py-4 rounded-full font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      <section className="py-12 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {filteredAndSortedProducts.length} products available
            </p>
          </div>

          {/* Search and View Toggle */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                type="text"
                value={searchQuery}
                onChange={(value) => {
                  setSearchQuery(value);
                  setCurrentPage(1);
                }}
                placeholder="Search products..."
                icon={<Search className="w-5 h-5" />}
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-lime-500 text-black' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'list' 
                    ? 'bg-lime-500 text-black' 
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-200 dark:bg-gray-700/50 rounded-2xl p-6 sticky top-24 transition-colors duration-300">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-lime-500" />
                  <h2 className="text-xl font-bold">Filters</h2>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Category</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                          selectedCategory === category
                            ? 'bg-lime-500 text-black font-semibold'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      value={priceRange[1]}
                      onChange={(e) => {
                        setPriceRange([priceRange[0], parseInt(e.target.value)]);
                        setCurrentPage(1);
                      }}
                      className="w-full accent-lime-500"
                    />
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        value={priceRange[0].toString()}
                        onChange={(value) => {
                          setPriceRange([parseInt(value) || 0, priceRange[1]]);
                          setCurrentPage(1);
                        }}
                        placeholder="Min"
                        min="0"
                        max="300"
                      />
                      <Input
                        type="number"
                        value={priceRange[1].toString()}
                        onChange={(value) => {
                          setPriceRange([priceRange[0], parseInt(value) || 300]);
                          setCurrentPage(1);
                        }}
                        placeholder="Max"
                        min="0"
                        max="300"
                      />
                    </div>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <CustomDropdown
                    label="Sort By"
                    value={sortBy}
                    onChange={setSortBy}
                    options={[
                      { value: 'featured', label: 'Featured' },
                      { value: 'price-low', label: 'Price: Low to High' },
                      { value: 'price-high', label: 'Price: High to Low' },
                      { value: 'rating', label: 'Highest Rated' },
                      { value: 'name', label: 'Name: A to Z' }
                    ]}
                  />
                </div>

                {/* Reset Filters */}
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setPriceRange([0, 300]);
                    setSortBy('featured');
                    setCurrentPage(1);
                  }}
                  className="w-full mt-6 bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className="lg:col-span-3">
              {paginatedProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-2xl text-gray-600 dark:text-gray-400">No products found</p>
                  <p className="text-gray-500 dark:text-gray-500 mt-2">Try adjusting your filters</p>
                </div>
              ) : (
                <>
                  <div className={
                    viewMode === 'grid'
                      ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                      : 'space-y-4'
                  }>
                    {paginatedProducts.map((product) => (
                      viewMode === 'grid' ? (
                        <div key={product.id} className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-500/10 transition-all duration-500 transform hover:-translate-y-2">
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6">
                            <div className="text-sm text-lime-500 font-semibold mb-2">{product.category}</div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-lime-500 transition-colors duration-300">{product.name}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{product.description}</p>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-orange-500' : 'text-gray-400 dark:text-gray-600'}`}>★</span>
                                ))}
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">({product.reviews})</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-orange-500">${product.price}</span>
                              <button 
                                onClick={() => handleAddToCart(product)}
                                className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div key={product.id} className="group bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-500/10 transition-all duration-300 flex">
                          <div className="w-48 h-48 flex-shrink-0 overflow-hidden">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                              <div className="text-sm text-lime-500 font-semibold mb-2">{product.category}</div>
                              <h3 className="text-2xl font-bold mb-2 group-hover:text-lime-500 transition-colors duration-300">{product.name}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{product.description}</p>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`${i < Math.floor(product.rating) ? 'text-orange-500' : 'text-gray-400 dark:text-gray-600'}`}>★</span>
                                  ))}
                                </div>
                                <span className="text-gray-600 dark:text-gray-400">({product.reviews} reviews)</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <span className="text-3xl font-bold text-orange-500">${product.price}</span>
                              <button 
                                onClick={() => handleAddToCart(product)}
                                className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center gap-2">
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <button
                              key={page}
                              onClick={() => handlePageChange(page)}
                              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                                currentPage === page
                                  ? 'bg-lime-500 text-black'
                                  : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return <span key={page} className="text-gray-500 dark:text-gray-500">...</span>;
                        }
                        return null;
                      })}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
