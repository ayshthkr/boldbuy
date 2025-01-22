"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");
  }

  return (
    <section className="py-12 bg-gradient-to-b to-purple-200/50 from-violet-400/50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with BoldBuy</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates, tips, and best
            practices for using the BoldBuy platform.
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {isSuccess && (
            <p className="text-green-600 mt-4">
              Thank you for subscribing! You&apos;ll receive our next newsletter
              soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
