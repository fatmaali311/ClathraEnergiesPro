import React from "react";
import ServicesHero from "../components/services/ServicesHero";
import ServicesCards from "../components/services/ServicesCards";
import { Helmet } from 'react-helmet';
export default function Services() {
  return (
    <>
    <Helmet>
        <title>ClathraEnergies Services - Biogas Engineering and Gas Storage Innovations</title>
        <meta name="description" content="Explore ClathraEnergies services: Engineering for biogas plants, innovative hydrate-based gas storage, and sustainable energy solutions." />
        <meta name="keywords" content="biogas engineering services, biomethane plant design, gas storage technology, renewable gas solutions, hydrate storage innovation, ClathraEnergies services" /> {/* Keywords مخصصة */}
        <meta property="og:title" content="Services at ClathraEnergies" />
        <meta property="og:description" content="From feasibility studies to breakthrough technologies for renewable gases." />
        <meta property="og:image" content="https://www.clathraenergies.fr/assets/images/services.png" />
        <meta property="og:url" content="https://www.clathraenergies.fr/services" />
        <link rel="canonical" href="https://www.clathraenergies.fr/services" />
      </Helmet>
      <ServicesHero />
      <div className="relative">
        {/* Vertical Lines */}
        <div className="absolute top-0 left-4 md:left-6 lg:left-8 xl:left-10 h-full  flex-row z-0 gap-1 hidden md:flex">
          <div className="w-[1px] h-full bg-green-400"></div>
          <div className="w-[1px] h-full bg-green-500"></div>
        </div>

        {/* Content with padding to avoid overlap */}
        <div className="md:pl-10 ">
          <ServicesCards />
         
        </div>
      </div>
    </>
  );
}
