"use client"
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function BuyersConnect() {
  return (
    <TextParallaxContentExample></TextParallaxContentExample>
  )
}
const TextParallaxContentExample = () => {
  return (
    <div className="bg-white my-10">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="We're here for you"
        heading="Get in Touch"
      >
        <ExampleContent />
      </TextParallaxContent>


    </div>
  );
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }: any) => {
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

const StickyImage = ({ imgUrl }: any) => {
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

const OverlayCopy = ({ subheading, heading }: any) => {
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

import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ExampleContent = () => (
  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-2">
    <div className="space-y-6">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
        Let&apos;s Start a Conversation
      </h2>

    </div>
    <div className="space-y-6">
      <button className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-9 py-4 text-xl font-semibold text-white">
        <span className="relative z-10 flex items-center justify-center">
          Send Message
          <FiArrowUpRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
        </span>
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 transition-opacity group-hover:opacity-100"></div> */}

      </button>
      <div className="flex items-center gap-4 text-xl text-gray-700">
        <div className="rounded-full bg-blue-100 p-3">
          <FiMail className="h-6 w-6 text-blue-600" />
        </div>
        <p>contact@boldbuy.com</p>
      </div>
      <div className="flex items-center gap-4 text-xl text-gray-700">
        <div className="rounded-full bg-blue-100 p-3">
          <FiPhone className="h-6 w-6 text-blue-600" />
        </div>
        <p>+1 (555) 123-4567</p>
      </div>
      <div className="flex items-center gap-4 text-xl text-gray-700">
        <div className="rounded-full bg-blue-100 p-3">
          <FiMapPin className="h-6 w-6 text-blue-600" />
        </div>
        <p>123 Business Street, Suite 100<br />New York, NY 10001</p>
      </div>
    </div>
  </div>
);

