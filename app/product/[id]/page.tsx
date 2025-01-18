"use client";
import { useParams, useRouter } from 'next/navigation';
import { StepBackIcon } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';
import CartCircle from '@/components/derived/Cartcircle';
import Image from 'next/image';

const dummyProducts = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Electronics',
      price: 100,
      description: 'A high-quality electronic device that combines functionality with sleek design. Perfect for everyday use and built to last.',
      image: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Electronics',
      price: 200,
      description: 'An advanced electronic gadget with cutting-edge technology, offering exceptional performance and versatility.',
      image: '/images/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Clothing',
      price: 50,
      description: 'A stylish and comfortable piece of clothing made from premium materials. Ideal for casual outings or daily wear.',
      image: '/images/product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Clothing',
      price: 120,
      description: 'A fashionable and elegant garment designed for special occasions. Crafted with attention to detail and superior quality.',
      image: '/images/product4.jpg',
    },
  ];
  

const Page = () => {
  const { id } = useParams();
  const router = useRouter();
  const productId = Number(id);
  const product = dummyProducts.find((product) => product.id === productId);
  const relatedProducts = dummyProducts.filter((p) => p.category === product?.category && p.id !== productId);
  const { addToCart } = useCart();

  const [feedback, setFeedback] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback('');
    setFeedbackSubmitted(true);
    setTimeout(() => setFeedbackSubmitted(false), 3000);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-6">
      <CartCircle />
      <div className="bg-blue-400 p-3 flex items-center justify-start bg-opacity-20 mb-6 cursor-pointer">
        <StepBackIcon
          size={24}
          className="text-blue-600"
          onClick={() => router.push('/buyers')}
        />
        <span className="ml-2 text-blue-600 font-semibold">Back to Buyers</span>
      </div>

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">{product.name}</h1>

      <div className="flex justify-center mb-6">
        <Image
          src={product.image}
          alt={product.name}
          className="w-64 h-64 object-cover rounded-md"
        />
      </div>

      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-bold text-blue-500 mb-6">${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Add to Cart
      </button>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Leave Your Feedback</h2>
        <form onSubmit={handleSubmitFeedback} className="space-y-4">
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Write your feedback here..."
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>

        {feedbackSubmitted && (
          <p className="mt-4 text-green-600 font-semibold">
            Your response has been submitted!
          </p>
        )}
      </div>

      <h2 className="text-2xl font-semibold text-blue-600 mt-12 mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((related) => (
          <div key={related.id} className="border p-4 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <Link href={`/product/${related.id}`}>
              <Image
                src={related.image}
                alt={related.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">{related.name}</h3>
              <p className="text-gray-600">{related.category}</p>
              <p className="text-lg font-bold text-blue-500">${related.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
