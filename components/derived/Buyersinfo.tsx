"use client";
import React from "react";

interface FeatureProps {
  title: string;
  description: string;
}

const features = [
  {
    title: "Easy Product Discovery",
    description:
      "Easily find products with our smart search, filters, and curated recommendations. BoldBuy links you to top local and online markets.",
  },
  {
    title: "Real-Time Order Tracking",
    description:
      "Stay updated with live tracking for all your orders. Know exactly when your items will arrive and enjoy a hassle-free shopping experience.",
  },
  {
    title: "Personalized Wishlist",
    description:
      "Create a custom wishlist to save your favorite items and purchase them when ready.",
  },
  {
    title: "Reliable Customer Support",
    description:
      "Get instant help with our 24/7 customer support. Whether through FAQs, live chat, or feedback, we ensure smooth shopping.",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-8 px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find What You Love, Fast</h1>
        <p className="text-lg text-gray-600">
          Explore a wide range of products from your favorite local stores and beyond. Use our smart search and category filters to quickly discover exactly what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mt-12">
        {/* Left Column */}
        <div className="flex flex-col items-center md:items-start">
          {features.slice(0, 2).map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </div>

        {/* Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-72 h-72 bg-gray-200 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Image Placeholder</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center md:items-start">
          {features.slice(2).map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="mt-12">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="mb-8 text-center md:text-left">
      <div className="flex justify-center md:justify-start mb-4">
        <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-full">
          {/* Icon Placeholder */}
          <span className="text-gray-500">🔲</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Gallery;
