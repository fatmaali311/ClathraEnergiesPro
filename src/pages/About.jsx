import AboutHero from "../components/about/AboutHero";
import CompanyPurpose from "../components/about/CompanyPurpose";
import MissionVision from "../components/about/MissionVision";
import StrategicObjectives from "../components/about/StrategicObjectives";
import { Helmet } from 'react-helmet';

export default function About() {
  return (
    <>
    <Helmet>
        <title>About ClathraEnergies - Mission, Vision, and Strategic Objectives</title>
        <meta name="description" content="Learn about ClathraEnergies: A deep-tech engineering company focused on renewable gases, biogas plants, and sustainable energy innovations." />
        <meta name="keywords" content="ClathraEnergies about, renewable energy mission, biogas vision, sustainable gas storage, energy transition company, deep-tech engineering France" /> 
        <meta property="og:title" content="About ClathraEnergies" />
        <meta property="og:description" content="Bridging scientific research and practical energy solutions for a sustainable future." />
        <meta property="og:image" content="https://www.clathraenergies.fr/about-bg.jpg" />
        <meta property="og:url" content="https://www.clathraenergies.fr/about" />
        <link rel="canonical" href="https://www.clathraenergies.fr/about" />
      </Helmet>
      <AboutHero />
      <div className="relative">
        {/* Vertical Lines */}
        <div className="absolute top-0 left-4 md:left-6 lg:left-8 xl:left-10 h-full  flex-row z-0 gap-1 hidden md:flex">
          <div className="w-[1px] h-full bg-green-400"></div>
          <div className="w-[1px] h-full bg-green-500"></div>
        </div>

        {/* Content with padding to avoid overlap */}
        <div className="md:pl-10 ">
          <CompanyPurpose />
          <MissionVision />
          <StrategicObjectives />
        </div>
      </div>
    </>
  );
}
