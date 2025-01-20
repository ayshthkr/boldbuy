"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { TextGenerateEffect } from "./text-generate-effect";

export function Navbar() {
  return (
    <header className=" border-b-2 fixed top-0 w-full backdrop-blur-md z-[10] ">
      <div className=" relative z-50 !max-w-[100vw]">
        <div className="flex h-16 items-center justify-between md:justify-evenly ">
          <Link href={"/"}>
            <Button
              variant={"default"}
              className="flex items-center justify-center"
            >
              <TextGenerateEffect
                duration={0.25}
                filter={true}
                words={"BoldBuy"}
                color="text-white"
              />
              <Image
                src="/favicon.png"
                height={64}
                width={64}
                alt="BoldBuy Logo"
                className="w-full h-full"
              />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="z-[100] ">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <div className="bg-yellow-300 z-[100000]">
                <SheetContent side="right">
                  <SheetTitle>Menu</SheetTitle>
                  <nav className="flex flex-col gap-4">
                    <Link href="/" className="text-lg font-medium">
                      Home
                    </Link>
                    <Link href="/buyers" className="text-lg font-medium">
                      For Buyers
                    </Link>
                    <Link href="/sellers" className="text-lg font-medium">
                      For Sellers
                    </Link>
                    <Link href="/support" className="text-lg font-medium">
                      Support
                    </Link>
                  </nav>
                </SheetContent>
              </div>
            </Sheet>
          </div>

          {/* Desktop Menu */}
          <nav className=" relative hidden md:flex items-center gap-6 z-[1000]">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="/buyers"
              className="text-sm font-medium hover:text-primary"
            >
              For Buyers
            </Link>
            <Link
              href="/sellers"
              className="text-sm font-medium hover:text-primary"
            >
              For Sellers
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium hover:text-primary"
            >
              Support
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/auth">Join us</Link>
            </Button>
            <Button asChild>
              <Link href="/buyers">Shop now</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
