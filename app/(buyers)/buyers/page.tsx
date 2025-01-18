'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartCircle from '@/components/derived/Cartcircle';
import { UserNavbar } from '@/components/derived/usernavbar';

const dummyProducts = [
  {
    id: 1,
    name: 'mac',
    category: 'Electronics',
    price: 100,
    description: 'A high-quality electronic device that combines functionality with sleek design. Perfect for everyday use and built to last.',
    image: 'https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/master/pass/macbookair3.jpg',
  },
  {
    id: 2,
    name: 'speaker',
    category: 'Electronics',
    price: 200,
    description: 'An advanced electronic gadget with cutting-edge technology, offering exceptional performance and versatility.',
    image: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    name: 'jacket',
    category: 'Clothing',
    price: 50,
    description: 'A stylish and comfortable piece of clothing made from premium materials. Ideal for casual outings or daily wear.',
    image: 'https://3.imimg.com/data3/AU/KI/MY-646899/men-s-jackets-500x500.jpg',
  },
  {
    id: 4,
    name: 'jeans',
    category: 'Clothing',
    price: 120,
    description: 'A fashionable and elegant garment designed for special occasions. Crafted with attention to detail and superior quality.',
    image: 'https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964',
  },
  { 
    id:5,
    category: 'furniture',
    name: 'Modern Sofa',
    price:70,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-P0XlqcD5bTOxfDppJ1VCYgZO-E96bXmnFQ&s',
    description: 'A stylish and comfortable modern sofa that brings contemporary flair to any living room. Upholstered in soft fabric, it offers both luxury and durability, making it perfect for relaxing or entertaining guests.'
  },
  {
    id:6,
    category: 'furniture',
    price:70,
    name: 'Emily Flared Arm 2-Seater Sofa',
    image: 'https://craftsmill.in/cdn/shop/files/sofas-accent-chairs-cider-orange-soft-velvet-touch-fabric-emily-flared-arm-2-seater-sofa-60-46567514931491.jpg?v=1725047510',
    description: 'This elegant Emily Flared Arm 2-Seater Sofa features soft velvet-touch fabric in a rich cider orange color. Its flared arms and sleek design add a touch of sophistication to your home while providing exceptional comfort.'
  },
];


export default function Page() {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);

  const addToWishlist = (product:any) => {
    
    const existingWishlist = JSON.parse(localStorage.getItem("wishlist")!) || [];
    console.log(existingWishlist)


    const isAlreadyInWishlist = existingWishlist.some((item:any) => item.id === product.id);

    if (!isAlreadyInWishlist) {

      const updatedWishlist = [...existingWishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      alert(`${product.name} added to your wishlist!`);
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  };

  const filteredProducts = dummyProducts.filter((product) => {
    return (
      (searchTerm ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  return (
    <div>
      <UserNavbar/>
      <div className="container mx-auto p-6">
      <CartCircle />
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
            <button
              onClick={() => addToWishlist(product)}
              className="mt-2 w-full py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
  
