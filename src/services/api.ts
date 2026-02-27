// Simulated API service - Replace with actual backend calls

import productsData from '../data/products.json';
import testimonialsData from '../data/testimonials.json';
import categoriesData from '../data/categories.json';
import sizesData from '../data/sizes.json';
import statsData from '../data/stats.json';

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Stats {
  awards: { count: string; label: string; icon: string };
  athletes: { count: string; label: string; icon: string };
  experience: { count: string; label: string; icon: string };
}

// Products API
export const getProducts = async (): Promise<Product[]> => {
  await delay(300); // Simulate network delay
  return productsData;
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  await delay(200);
  return productsData.find(product => product.id === id);
};

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  await delay(300);
  if (category === 'All' || category === 'all') {
    return productsData;
  }
  return productsData.filter(product => product.category === category);
};

// Testimonials API
export const getTestimonials = async (): Promise<Testimonial[]> => {
  await delay(300);
  return testimonialsData;
};

// Categories API
export const getCategories = async (): Promise<Category[]> => {
  await delay(200);
  return categoriesData;
};

// Sizes API
export const getSizes = async (): Promise<string[]> => {
  await delay(100);
  return sizesData;
};

// Stats API
export const getStats = async (): Promise<Stats> => {
  await delay(200);
  return statsData;
};

// Search Products
export const searchProducts = async (query: string): Promise<Product[]> => {
  await delay(300);
  const lowerQuery = query.toLowerCase();
  return productsData.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery)
  );
};

// Filter Products
export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
}

export const filterProducts = async (filters: FilterOptions): Promise<Product[]> => {
  await delay(300);
  let filtered = [...productsData];

  if (filters.category && filters.category !== 'All') {
    filtered = filtered.filter(p => p.category === filters.category);
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(p => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice!);
  }

  if (filters.minRating !== undefined) {
    filtered = filtered.filter(p => p.rating >= filters.minRating!);
  }

  return filtered;
};
