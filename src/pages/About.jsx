import AboutHero from "../components/about/AboutHero";
import CompanyPurpose from "../components/about/CompanyPurpose";
import MissionVision from "../components/about/MissionVision";
import StrategicObjectives from "../components/about/StrategicObjectives";

export default function About() {
  return (
    <>
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
