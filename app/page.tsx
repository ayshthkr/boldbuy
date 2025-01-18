import CTASection from "@/components/derived/CTA";
import FeatureSection from "@/components/derived/FeatureSection";
import { Footer } from "@/components/derived/footer";
import HeroHeader from "@/components/derived/HeroHeader";
import HowItWorks from "@/components/derived/Howitworks";
import { Navbar } from "@/components/derived/navbar";
import SupportPage from "./(home)/support/page";


export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <HeroHeader></HeroHeader>
    <FeatureSection></FeatureSection>
    <HowItWorks></HowItWorks>
    <CTASection></CTASection>
    <SupportPage/>
    <Footer></Footer>
    </>
   
  );
}
