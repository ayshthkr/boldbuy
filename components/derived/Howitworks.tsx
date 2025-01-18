import React from "react";

const HowItWorks = () => {
  const steps = [
    "Sellers register and set up their inventory.",
    "Customers place orders online.",
    "BoldBuy handles order fulfillment and delivery.",
  ];

  return (
    <section className="p-8 bg-white">
      <h2 className="text-2xl font-bold text-center">How It Works</h2>
      <ol className="mt-6 space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start">
            <span className="flex items-center justify-center w-8 h-8 text-white bg-purple-600 rounded-full">
              {index + 1}
            </span>
            <p className="ml-4 text-gray-600">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default HowItWorks;
