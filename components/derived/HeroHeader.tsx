import React from "react";

const HeroHeader = () => {
  return (
    <header className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-4xl font-bold">Welcome to BoldBuy</h1>
      <p className="mt-4 text-lg text-gray-600">
        The Unified Digital Platform for Sellers and Buyers
      </p>
      <button className="px-6 py-3 mt-6 text-white bg-purple-600 rounded hover:bg-purple-700">
        Get Started
      </button>
    </header>
  );
};

export default HeroHeader;
