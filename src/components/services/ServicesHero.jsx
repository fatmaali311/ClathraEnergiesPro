import React from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/services.png";
import { slideUp } from "../../utils/animations";

export default function ServicesHero() {
  return (
    <section
      className="relative flex items-center justify-center  h-[200px] md:h-[250px] lg:h-[300px] w-full bg-cover bg-[60%_30%]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[var(--primary-green)]/85 via-[var(--primary-green)]/75 to-[var(--primary-blue)]/70" />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={slideUp}
        className="relative z-10 flex items-center justify-center"
      >
        <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Services
        </h1>
      </motion.div>
    </section>
  );
}
