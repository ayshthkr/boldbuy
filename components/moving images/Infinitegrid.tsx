"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/moving images/Infinitecards";
export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="flex w-full gap-4 px-4">
        <InfiniteMovingCards
          items={testimonials}
          direction="up"
          speed="slow"
          className="w-1/3"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="down"
          speed="normal"
          className="w-1/3"
        />
        <InfiniteMovingCards
          items={testimonials}
          direction="up"
          speed="fast"
          className="w-1/3"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote: "The best way to predict the future is to invent it.",
    name: "Alan Kay",
    title: "Computer Scientist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    name: "Steve Jobs",
    title: "Co-founder of Apple",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    name: "Steve Jobs",
    title: "Co-founder of Apple",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Stay hungry, stay foolish.",
    name: "Stewart Brand",
    title: "Writer",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    name: "Eleanor Roosevelt",
    title: "Former First Lady of the United States",
    image: "/placeholder.svg?height=100&width=100",
  },
];

