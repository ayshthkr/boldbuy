import CTASection from "@/components/derived/CTA";
import { FeaturesSectionWithHoverEffects } from "@/components/derived/feature-section";
import { FollowingPointerCTA } from "@/components/derived/following-pointer-cta";
import { Footer } from "@/components/derived/footer";
import HeroHeader from "@/components/derived/HeroHeader";
import HowItWorks from "@/components/derived/Howitworks";
import { Navbar } from "@/components/derived/navbar";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col items-center justify-center">
      <Navbar />
      <HeroHeader />
      <FeaturesSectionWithHoverEffects />
      <HowItWorks />
      <CTASection />
      <FollowingPointerCTA />
      <Footer />
    </div>
  );
}
