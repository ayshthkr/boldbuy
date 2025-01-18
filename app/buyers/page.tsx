'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartCircle from '@/components/derived/Cartcircle';

const dummyProducts = [
  { id: 1, name: 'Product 1', category: 'Electronics', price: 100, image: '/images/product1.jpg' },
  { id: 2, name: 'Product 2', category: 'Electronics', price: 200, image: '/images/product2.jpg' },
  { id: 3, name: 'Product 3', category: 'Clothing', price: 50, image: '/images/product3.jpg' },
  { id: 4, name: 'Product 4', category: 'Clothing', price: 120, image: '/images/product4.jpg' },
  { id: 5, name: 'Product 5', category: 'Furniture', price: 300, image: '/images/product5.jpg' },
  { id: 6, name: 'Product 6', category: 'Furniture', price: 150, image: '/images/product6.jpg' },
];


export default function Page() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  const filteredProducts = dummyProducts.filter((product) => {
    return (
      (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  return (
    <div className="container mx-auto p-6">
      <CartCircle></CartCircle>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Product Search</h1>

      <div className="flex justify-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Furniture">Furniture</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/product/${product.id}`}>
          
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-600">{product.name}</h3>
                <p className="text-gray-600">{product.category}</p>
                <p className="text-lg font-bold text-blue-500">${product.price}</p>
        
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
  }
  
