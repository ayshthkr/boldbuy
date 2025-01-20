import React from "react";

const CTASection = () => {
  return (
    <section className="flex flex-col items-center p-8 text-center bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white w-full">
      <h2 className="text-3xl font-bold">Ready to Join BoldBuy?</h2>
      <p className="mt-4">
        Discover the benefits of our platform for buyers and sellers.
      </p>
      <button className="px-6 py-3 mt-6 bg-white text-purple-600 rounded hover:bg-gray-100">
        Sign Up Now
      </button>
    </section>
  );
};

export default CTASection;
