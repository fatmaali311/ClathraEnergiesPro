import React from "react";
import { motion } from "framer-motion";
import { containerVariants, cardVariants, viewportSettings } from "../../utils/animations";
import { servicesData } from "../../data/services";

export default function Services() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center md:mb-24 mb-16 ">
       ClathraEnergies Services
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={viewportSettings}
        className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-16 md:gap-22 lg:gap-28"
      >
        {servicesData.map((service) => (
          <motion.div
            key={service.number}
            variants={cardVariants}
            whileHover={{
              y: -12,
              scale: 1.01,
              boxShadow: "0 14px 20px -5px rgba(107,114,128,0.3)",
              transition: { type: "spring", stiffness: 300, damping: 20 },
            }}
            className="w-full max-w-[400px] transition-all duration-300 mb-12"
          >
            <div
              className={`relative flex flex-col items-center  ${service.borderColor} transition-all duration-300 p-5 sm:p-6 min-h-[340px] sm:min-h-[380px] md:min-h-[480px]`}
              style={{ boxShadow: "0 10px 15px -5px rgba(0,0,0,0.2)" }}
            >
              <div
                className={`absolute top-6 left-6 flex items-center justify-center rounded-full text-white w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 text-2xl sm:text-3xl md:text-4xl ${service.numberBgColor} hover:shadow-[0_8px_12px_-3px_rgba(107,114,128,0.3)] transition-shadow duration-200`}
                style={{ boxShadow: "0 6px 10px -3px rgba(0,0,0,0.2)" }}
              >
                {service.number}
              </div>
              <div className="flex flex-col items-center gap-6 mt-12 md:mt-20">
                <div
                  className="flex items-center justify-center rounded-full border border-gray-600 shadow-sm overflow-hidden w-30 h-30 sm:w-36 sm:h-36 md:w-44 md:h-44"
                >
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    className="object-contain w-3/4 h-3/4"
                    loading="lazy"
                  />
                </div>
              </div>
              <h3
                className={`mb-4 md:mb-2 mt-4 md:mt-2 font-medium text-center ${service.titleColor} text-lg sm:text-xl md:text-2xl`}
              >
                {service.title}
              </h3>
              <div className="flex justify-center w-full mt-auto pb-4 sm:pb-2 md:pb-0">
                <button
                  type="button"
                  aria-label={`Learn more about ${service.title}`}
                  className={`w-11/12 sm:w-4/5 h-12 sm:h-14 md:h-20 text-white font-bold shadow-lg shadow-gray-400/40 transition-all duration-200 transform hover:scale-105 text-base sm:text-lg md:text-xl ${service.buttonBgColor} ${service.buttonHoverBgColor}`}
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}