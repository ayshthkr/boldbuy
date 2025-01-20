'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CartCircle from '@/components/derived/Cartcircle';
import { UserNavbar } from '@/components/derived/usernavbar';
import Image from 'next/image';

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart } = useCart();

  // Fetch wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')!) || [];
    setWishlist(storedWishlist);
  }, []);

  // Remove an item from the wishlist
  const removeFromWishlist = (productId: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    alert('Item removed from wishlist!');
  };

  // Filter wishlist based on search term and category
  const filteredWishlist = wishlist.filter((product) => {
    return (
      (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
    );
  });

  return (
    <div className="">
        <UserNavbar></UserNavbar>
           <div className="container mx-auto p-6">
      <CartCircle />
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Your Wishlist</h1>

      {/* Filters */}
      <div className="flex justify-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search wishlist..."
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
      </div>

      {/* Wishlist Items */}
      {filteredWishlist.length === 0 ? (
        <p className="text-center text-gray-600">No items found in your wishlist!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredWishlist.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
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
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="mt-2 w-full py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
 
  );
}
