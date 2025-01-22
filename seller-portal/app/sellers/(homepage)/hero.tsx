'use client';

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-6 md:px-8 lg:px-12 mx-auto">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 max-w-full">
          <div className="flex flex-col justify-center space-y-4  backdrop-blur-lg bg-white/50 rounded-lg p-8 ">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none">
                Empower Your Business with BoldBuy
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl">
                Elevate your store with BoldBuy&apos;s all-in-one digital platform.
                Enjoy seamless onboarding, efficient management, real-time
                inventory updates, and actionable analytics to succeed in
                today&apos;s competitive market. Join us in revolutionizing
                traditional markets!
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={'/auth'}>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Get Started Today
                </Button>
              </Link>
              <Link href={'/'}><Button variant="outline">Learn More</Button></Link>
            </div>
          </div>
          <div className="w-full max-w-full px-10 md:px-6">
            <Carousel plugins={[
              Autoplay({
                delay: 2000
              })
            ]}>
              <CarouselContent>
                {imageLinks.map((link, index) => (
                  <CarouselItem key={index}>
                    {/* <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6">
                      <span className="text-sm">
                        Platform Screenshot {index + 1}
                      </span>
                    </div> */}
                    <Image
                      width={650}
                      height={350}
                      className="object-cover"
                      src={link}
                      alt="Demo Image - 1"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

const imageLinks = [
  "/demo-sellers-1.png",
  "/demo-sellers-2.png",
  "/demo-sellers-3.png",
];