"use client"

import { FlipWords } from "../ui/flip-words";

export function AboutBuyers() {
  const words = ["track", "manage", "show", "view", "see", "check"];

  return (
    <>
     <div className="min-h-[40rem] grid grid-cols-1 md:grid-cols-2 gap-8 px-4 py-12">
      {/* Left side - Existing content */}
      <div className="flex justify-center items-center">
        <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400">
          <FlipWords words={words} duration={500} /> <br /> your orders
          with boldbuy
        </div>
      </div>

      {/* Right side - BoldBuy details */}
      <div className="flex flex-col justify-center space-y-6 text-neutral-600 dark:text-neutral-400">
        <h2 className="text-3xl font-semibold">About BoldBuy</h2>
        <p className="text-lg">
          BoldBuy is your ultimate e-commerce companion, providing a seamless
          shopping experience with powerful order management capabilities.
        </p>
        
        <ul className="space-y-4 text-lg">
          <li>✨ Real-time order tracking</li>
          <li>🔒 Secure transaction processing</li>
          <li>📱 Mobile-friendly interface</li>
          <li>🎯 Personalized shopping recommendations</li>
        </ul>
        <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:border-blue-700 hover:text-blue-700 transition-colors w-fit">
          <Link href="/Orders">View Your Orders</Link>
         
        </button>
      </div>
    </div>
    <TextParallaxContentExample/>
    </>
   
  );
}
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

 const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Support"
        heading="at Your fingertips"
      >
        <ExampleContent />
      </TextParallaxContent>
     
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }:any) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }:any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }:any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      BoldBuy Support
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Need help? Our dedicated customer support team is always here for you, ready to assist you with any questions or concerns you may have. Feel free to browse our extensive FAQs section for quick answers to common inquiries, chat live with our friendly team for personalized assistance, or leave valuable feedback to help us improve your overall experience with our services. Your satisfaction is our top priority, and we are committed to ensuring that you receive the best support possible.
      </p>
    
      <button className="w-full rounded bg-blue-500 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);