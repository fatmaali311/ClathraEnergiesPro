import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/about-bg.jpg";
import { slideUp } from "../../utils/animations";

export default function AboutHero() {
  return (
    <section
      className="relative flex items-center justify-center h-[300px] md:h-[300px] lg:h-[400px] w-full bg-cover bg-[right_center]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[var(--primary-green)]/85 via-[var(--primary-green)]/75 to-[var(--primary-blue)]/70" />
      <motion.div
        initial="hidden"
        animate="show"
        variants={slideUp}
        className="relative z-10 text-center px-4 max-w-3xl"
      >
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          Our Story
        </h1>
        <p className="text-white/90 text-sm md:text-lg leading-relaxed">
          ClathraEnergies was founded to bridge the gap between cutting-edge
          research and practical application. Our purpose is to deliver modular,
          scalable, and cost-effective technologies that accelerate the
          transition to clean energy.
        </p>
      </motion.div>
    </section>
  );
}