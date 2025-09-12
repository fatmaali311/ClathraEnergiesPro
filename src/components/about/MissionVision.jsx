import React from "react";
import { motion } from "framer-motion";
import { containerVariants, cardVariants, viewportSettings } from "../../utils/animations";
import { missionVisionCards } from "../../data/missionVision";

export default function MissionVision() {
  return (
    <section className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportSettings}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {missionVisionCards.map((card, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.03,
              boxShadow:
                "-12px 12px 24px rgba(107,114,128,0.45), -8px 0px 18px rgba(107,114,128,0.3)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className={`pt-16 p-10 text-white ${card.color} flex flex-col items-center text-center cursor-pointer card-shadow w-full max-w-lg mx-auto min-h-[380px]`}
          >
            <h3 className="text-4xl font-bold flex items-center justify-center mb-4">
              <motion.span
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="mr-2"
              >
                <img src={card.icon} alt={`${card.title} Icon`} className="md:w-16 md:h-16 w-12 h-12" />
              </motion.span>
              {card.title}
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 + 0.4 }}
              viewport={{ once: true }}
              className="text-sm md:text-base leading-relaxed"
            >
              {card.text}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}