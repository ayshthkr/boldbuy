import { Metadata } from "next";
import { ProductForm } from "./product-form";
import { Footer } from "@/components/derived/footer";
import { AnimatedGridPattern } from "@/components/derived/animated-grid-pattern";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Create Catalogue - BoldBuy",
  description: "Create a new product catalogue on BoldBuy",
};

export default function CreateCataloguePage() {
  return (
    <div className="min-h-screen bg-gray-100 w-full items-center justify-center">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.05}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[100%] skew-y-12 fixed"
        )}
      />
      <main className="container mx-auto px-4 py-28 z-100">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create Product Catalogue
        </h1>
        <ProductForm />
      </main>
      <Footer />
    </div>
  );
}
