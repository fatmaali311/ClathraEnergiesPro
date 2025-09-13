import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-bg.jpg";
import { slideLeft, slideUp, viewportSettings } from "../../utils/animations";

export default function HeroSection() {
  const buttons = [
    { label: "Start a Project", path: "/start-project", ariaLabel: "Start a project with Clathra Energies" },
    { label: "Explore Services", path: "/services", ariaLabel: "Explore Clathra Energies services" },
  ];

  return (
    <section
      className="relative min-h-[85vh] bg-[center_60%] bg-cover flex items-center w-full"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[var(--primary-green)]/85 via-[var(--primary-green)]/75 to-[var(--primary-blue)]/70" />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white font-sans">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-tight max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
        >
          Modular process solutions for <br /> renewable gases
        </motion.h1>
        <motion.p
          className="mt-8 sm:mt-10 text-lg sm:text-xl font-normal leading-relaxed max-w-3xl text-white/95 text-center lg:text-left mx-auto lg:mx-0"
          variants={slideUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={viewportSettings}
        >
          ClathraEnergies designs biogas & biomethane plants and develops
          breakthrough technologies for gas storage and transport.
        </motion.p>
        <motion.div
          className="mt-14 flex flex-col md:flex-row gap-4 sm:gap-5 lg:gap-8 w-full items-center justify-center"
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.4 }}
          viewport={viewportSettings}
        >
          {buttons.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              aria-label={item.ariaLabel}
              className="w-full sm:w-[260px] md:w-[280px] lg:w-[240px] h-[65px] sm:h-[70px] md:h-[75px] lg:h-[80px] text-base sm:text-lg font-normal flex items-center justify-center bg-white text-[var(--primary-green)] transition-all duration-300 hover:bg-[var(--primary-green)] hover:text-white shadow-md hover:shadow-xl hover:cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}