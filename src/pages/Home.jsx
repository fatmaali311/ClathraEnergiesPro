import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "../components/home/WhoWeAre";
import FeaturesSection from "../components/home/FeaturesSection";
import ServicesSection from "../components/home/ServicesSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Right-side lines for WhoWeAre, FeaturesSection, ServicesSection */}
      <div className="relative">
        <div className="absolute top-0 right-4 h-full  flex-row z-0 gap-1  hidden md:flex">
          <div className="w-[1px] h-full bg-green-400"></div>
          <div className="w-[1px] h-full bg-green-500"></div>
        </div>
        <div className="md:pr-10 ">
          <WhoWeAre />
          <FeaturesSection />
          <ServicesSection />
        </div>
      </div>
      <CTASection />
    </>
  );
}