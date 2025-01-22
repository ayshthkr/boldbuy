"use client";

import {  Dot, MousePointer2 } from "lucide-react";

export function ManageStores() {
  const features = [
    "Easily monitor and manage all your stores from a single, intuitive dashboard.",
    "Stay updated on every order with live status updates and customizable filters.",
    "Use our simple complaint management system to address issues promptly and maintain customer satisfaction.",
  ];

  return <TextParallaxContentExample subheading={features} />;
}

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const TextParallaxContentExample = ({
  subheading,
}: {
  subheading: string[];
}) => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1508163356824-03f81a9d4e9b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        heading="Manage Your Stores Effortlessly"
        subheading={subheading}
      />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: any) => {
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
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-4 text-white"
    >
      <Link
        href="/sellers/stores"
        className="text-center text-4xl font-bold md:text-7xl hover:underline flex items-baseline gap-2 group"
      >
        {heading}
        <MousePointer2 className="rotate-90 group-hover:rotate-[135deg] transition " />
      </Link>
      <div className="mb-2 text-center text-base md:mb-4 md:text-2xl">
        {subheading.map((sh: any) => (
          <p key={sh} className="flex gap-2w">
            <span>
              <Dot />
            </span>
            {sh}
          </p>
        ))}
      </div>
    </motion.div>
  );
};
