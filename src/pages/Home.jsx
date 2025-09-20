import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "../components/home/WhoWeAre";
import FeaturesSection from "../components/home/FeaturesSection";
import ServicesSection from "../components/home/ServicesSection";
import CTASection from "../components/home/CTASection";


export default function Home() {
  return (
    <>
        <title>ClathraEnergies - Modular Biogas and Biomethane Solutions</title>
        <meta name="description" content="ClathraEnergies designs biogas and biomethane plants, develops breakthrough gas storage technologies for renewable energy transition." />
        <meta name="keywords" content="biogas plants, biomethane production, renewable gas storage, clean energy solutions, biogas upgrading France, sustainable energy engineering, ClathraEnergies" /> 
        <meta property="og:title" content="ClathraEnergies - Renewable Gas Innovations" />
        <meta property="og:description" content="Accelerating the transition to clean energy with modular biogas solutions and AI-powered engineering." />
        <meta property="og:image" content="https://www.clathraenergies.fr/hero-bg.jpg" /> 
        <meta property="og:url" content="https://www.clathraenergies.fr/" />
        <link rel="canonical" href="https://www.clathraenergies.fr/" />
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