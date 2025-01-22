import CTASection from "@/components/derived/cta";
import { FeaturesSectionWithHoverEffects } from "@/components/derived/feature-section";
import ComparisonForTranslation from "@/components/derived/feature-with-image-comparison";
import { FollowingPointerCTA } from "@/components/derived/following-pointer-cta";
import { Footer } from "@/components/derived/footer";
import HeroHeader from "@/components/derived/hero-header";
import HowItWorks from "@/components/derived/how-it-works";
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
      <ComparisonForTranslation />
      <Footer />
    </div>
  );
}
