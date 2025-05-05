import { Navbar } from "../landingcomponents";
import {
  About,
  Hero
} from "../sections";
import FeaturesSection from "@/sections/FeatureSection";
import HowItWorksSection from "@/sections/HowItWorks";
import TokenomicsSection from "@/sections/Tokenomics";
import SecuritySection from "@/sections/SecurityTrust";
import FAQSection from "@/sections/FAQ";
import ToTop from "@/sections/ToTal";
import { StarsCanvas } from "@/landingcomponents/starBackground";
import SplashCursor from "@/animation/SplashCursor/SplashCursor";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#030014] text-white overflow-hidden relative">
      <Navbar />
      <Hero />
      <div className="bg-transparent overflow-hidden max-w-[85rem] mx-auto w-full flex flex-col justify-center items-center">
        <section className="relative z-20">
          <About />
          <FeaturesSection />
          <HowItWorksSection />
          <TokenomicsSection />
          <SecuritySection />
          <FAQSection />
        </section>
        <ToTop />
      </div>
      {/* <Footer /> */}
      <StarsCanvas />
      <SplashCursor />
    </div>
  );
}
