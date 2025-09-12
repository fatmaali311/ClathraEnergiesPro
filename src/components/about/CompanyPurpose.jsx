import React from "react";
import { motion } from "framer-motion";
import { slideUp, viewportSettings } from "../../utils/animations";

export default function CompanyPurpose() {
  return (
    <section className="section-container">
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={slideUp}
        viewport={viewportSettings}
        className="section-title mb-12 text-center"
      >
        Company Purpose
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        variants={slideUp}
        transition={{ delay: 0.2 }}
        viewport={viewportSettings}
        className="text-[var(--text-gray-600)] text-base md:text-lg leading-relaxed text-center md:text-left max-w-5xl mx-auto md:mx-0"
      >
        To contribute to the global energy transition by accelerating the
        deployment of renewable gas technologies, innovative energy storage, and
        intelligent process solutions — while circular economy and scientific
        innovation.
      </motion.p>
    </section>
  );
}