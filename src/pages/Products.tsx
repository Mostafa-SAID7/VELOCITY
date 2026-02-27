import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Grid, List, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Elite Pro Runner",
      price: 189,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Running",
      description: "Lightweight running shoes with advanced cushioning technology",
      rating: 4.8,
      reviews: 234
    },
    {
      id: 2,
      name: "Power Lift Max",
      price: 159,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Training",
      description: "Heavy-duty training shoes for maximum stability",
      rating: 4.6,
      reviews: 189
    },
    {
      id: 3,
      name: "Court Dominator",
      price: 199,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Basketball",
      description: "High-performance basketball shoes with superior grip",
      rating: 4.9,
      reviews: 312
    },
    {
      id: 4,
      name: "Street Style Pro",
      price: 149,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Lifestyle",
      description: "Casual lifestyle shoes with premium comfort",
      rating: 4.5,
      reviews: 156
    },
    {
      id: 5,
      name: "Sprint Master",
      price: 179,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Running",
      description: "Speed-focused running shoes for competitive athletes",
      rating: 4.7,
      reviews: 201
    },
    {
      id: 6,
      name: "Flex Trainer",
      price: 139,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Training",
      description: "Versatile training shoes for all workout types",
      rating: 4.4,
      reviews: 143
    },
    {
      id: 7,
      name: "Slam Dunk Elite",
      price: 209,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Basketball",
      description: "Professional-grade basketball shoes with ankle support",
      rating: 4.9,
      reviews: 278
    },
    {
      id: 8,
      name: "Urban Walker",
      price: 129,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Lifestyle",
      description: "Comfortable everyday shoes for urban exploration",
      rating: 4.3,
      reviews: 98
    },
    {
      id: 9,
      name: "Marathon Beast",
      price: 219,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Running",
      description: "Long-distance running shoes with maximum energy return",
      rating: 4.8,
      reviews: 267
    },
    {
      id: 10,
      name: "CrossFit Champion",
      price: 169,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Training",
      description: "Multi-purpose training shoes for intense workouts",
      rating: 4.7,
      reviews: 223
    },
    {
      id: 11,
      name: "Hoop Legend",
      price: 189,
      image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Basketball",
      description: "Mid-top basketball shoes with responsive cushioning",
      rating: 4.6,
      reviews: 187
    },
    {
      id: 12,
      name: "City Cruiser",
      price: 119,
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Lifestyle",
      description: "Stylish casual shoes for everyday wear",
      rating: 4.4,
      reviews: 134
    }
  ];

  const categories = ['All', 'Running', 'Training', 'Basketball', 'Lifestyle'];

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
  }, [searchQuery, selectedCategory, priceRange, sortBy, allProducts]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const paginatedProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-20">
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-lime-500 to-orange-500 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-400">
              {filteredAndSortedProducts.length} products available
            </p>
          </div>

          {/* Search and View Toggle */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-gray-700 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all"
              />
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-lime-500 text-black' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl transition-all ${
                  viewMode === 'list' 
                    ? 'bg-lime-500 text-black' 
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-700/50 rounded-2xl p-6 sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-lime-500" />
                  <h2 className="text-xl font-bold">Filters</h2>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-300">Category</h3>
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
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-300">Price Range</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-400">
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
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => {
                          setPriceRange([parseInt(e.target.value) || 0, priceRange[1]]);
                          setCurrentPage(1);
                        }}
                        className="w-full bg-gray-800 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Min"
                      />
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => {
                          setPriceRange([priceRange[0], parseInt(e.target.value) || 300]);
                          setCurrentPage(1);
                        }}
                        className="w-full bg-gray-800 px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="font-semibold mb-3 text-gray-300">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="name">Name: A to Z</option>
                  </select>
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
                  className="w-full mt-6 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className="lg:col-span-3">
              {paginatedProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-2xl text-gray-400">No products found</p>
                  <p className="text-gray-500 mt-2">Try adjusting your filters</p>
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
                        <div key={product.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-500/10 transition-all duration-500 transform hover:-translate-y-2">
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
                            <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                            <div className="flex items-center gap-2 mb-4">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-orange-500' : 'text-gray-600'}`}>★</span>
                                ))}
                              </div>
                              <span className="text-sm text-gray-400">({product.reviews})</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-2xl font-bold text-orange-500">${product.price}</span>
                              <button className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div key={product.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-lime-500/10 transition-all duration-300 flex">
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
                              <p className="text-gray-400 mb-3">{product.description}</p>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`${i < Math.floor(product.rating) ? 'text-orange-500' : 'text-gray-600'}`}>★</span>
                                  ))}
                                </div>
                                <span className="text-gray-400">({product.reviews} reviews)</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <span className="text-3xl font-bold text-orange-500">${product.price}</span>
                              <button className="bg-gradient-to-r from-lime-500 to-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
                        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                                  : 'bg-gray-700 hover:bg-gray-600 text-white'
                              }`}
                            >
                              {page}
                            </button>
                          );
                        } else if (
                          page === currentPage - 2 ||
                          page === currentPage + 2
                        ) {
                          return <span key={page} className="text-gray-500">...</span>;
                        }
                        return null;
                      })}

                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
