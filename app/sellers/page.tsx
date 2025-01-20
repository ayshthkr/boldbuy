import { Hero } from "./(homepage)/hero";
import { GetStarted } from "./(homepage)/get-started";
import { ManageStores } from "./(homepage)/manage-stores";
import { InventoryFeatures } from "./(homepage)/inventory-features";
import { CTA } from "./(homepage)/cta";
import { Footer } from "@/components/derived/footer";
import { AnimatedGridPattern } from "@/components/derived/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[100%] skew-y-12 fixed",
        )}
      />
      <main className="flex-1 w-full mx-auto py-8">
        <Hero />
        <GetStarted />
        <ManageStores />
        <InventoryFeatures />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
