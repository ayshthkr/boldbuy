"use client";

import { TextGenerateEffect } from "./text-generate-effect";

const words = [
  "How BoldBuy Works",
  "   1. Seller Registration",
  "       Sellers register on BoldBuy, complete KYC, and set up their inventory for customers to browse.",
  "   2. Customers Place Orders",
  "       Customers explore products, place orders online, and enjoy the convenience of local markets from anywhere.",
  "   3. Order Fulfillment and Delivery",
  "       BoldBuy ensures smooth order fulfillment and reliable delivery, connecting sellers and buyers seamlessly.",
];

export default function HowItWorks() {
  return (
    <div className="container px-10 md:px-32 py-16 mx-auto !whitespace-pre-wrap relative w-full">
      <TextGenerateEffect
        duration={2}
        filter={false}
        words={words[0]}
        color="text-primary"
      />
      <TextGenerateEffect
        duration={2}
        filter={false}
        words={words[1]}
        color="text-primary"
      />
      <TextGenerateEffect
        duration={2}
        filter={false}
        words={words[2]}
        color="text-secondary"
      />

      <TextGenerateEffect
        duration={2}
        filter={false}
        words={words[3]}
        color="text-primary"
      />

      <TextGenerateEffect
        duration={2}
        filter={false}
        words={words[4]}
        color="text-secondary"
      />

      <TextGenerateEffect
        duration={2}
        filter={false}
        words={words[5]}
        color="text-primary"
      />

      <TextGenerateEffect
        duration={2}
        filter={false}
        words={words[6]}
        color="text-secondary"
      />
    </div>
  );
}
