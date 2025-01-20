'use client';

import { Button } from "@/components/ui/button"
import { useRef } from "react";
import ParallaxScroll from "@/components/derived/parallax";
import Link from "next/link";

export function GetStarted() {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section 
      className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 overflow-y-hidden" 
      ref={sectionRef}
    >
      <div className="container px-6 md:px-8 lg:px-12 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex items-center justify-center">
            <ParallaxScroll
              images={images} 
              containerRef={sectionRef}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 z-[2] bg-white/20 backdrop-blur-3xl p-8 rounded-xl"> 
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Get Started with BoldBuy now
              </h2>
              <p className="max-w-[600px] md:text-xl">
                Join BoldBuy and take your business online in minutes! Easily sign up, verify your details, and set your communication preferences. Whether it&apos;s through email, SMS, or WhatsApp, stay updated at every step.
              </p>
            </div>
            <div>
              <Link href={'/auth'}>
                <Button variant="outline" className="text-blue-600 border-blue-600">
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const images = [
  "/demo-image-1.png",
  "/demo-image-2.png",
  "/demo-image-3.png",
  "/demo-image-4.png",
  "/demo-image-1.png",
  "/demo-image-2.png",
  "/demo-image-3.png",
  "/demo-image-4.png",
  "/demo-image-1.png",
  "/demo-image-2.png",
  "/demo-image-3.png",
  "/demo-image-4.png",
  "/demo-image-1.png",
  "/demo-image-2.png",
  "/demo-image-1.png",
  "/demo-image-2.png",
  "/demo-image-3.png",
  "/demo-image-4.png",
  "/demo-image-1.png",
  "/demo-image-2.png",
  "/demo-image-1.png",
  "/demo-image-2.png",
  "/demo-image-3.png",
  "/demo-image-4.png",
  "/demo-image-1.png",
  "/demo-image-2.png",
];