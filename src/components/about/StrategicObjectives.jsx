import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { objectives, colorMap } from "../../data/strategicObjectives";

export default function StrategicObjectives() {
  return (
    <section className="section-container bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="section-title mb-16 text-center sm:mb-24"
      >
        Our Strategic Objectives for Impact
      </motion.h2>
      <div className="flex flex-col gap-14 sm:gap-20 md:gap-28 lg:gap-32 mb-12">
        {objectives.map((obj, i) => {
          const cardRef = useRef(null);
          const isInView = useInView(cardRef, { once: true, amount: 0.2 });

          return (
            <motion.div
              ref={cardRef}
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
                scale: isInView ? 1 : 0.95,
              }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              whileHover={{
                y: -12,
                scale: 1.01,
              }}
              className={`relative bg-gray-50 border-2 
                flex flex-col justify-center items-center   
                p-6 sm:p-8 md:p-12 pt-16 sm:pt-20
                min-h-[260px] sm:min-h-[300px] md:min-h-[340px]
                w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl
                mx-auto cursor-pointer 
                shadow-[8px_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300`}
              style={{
                borderColor: colorMap[obj.color],
              }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: isInView ? 1 : 0 }}
                transition={{ delay: i * 0.3, type: "spring", stiffness: 150 }}
                className={`absolute md:-top-8 -left-2 -top-6 sm:-left-4 md:-left-6 
                  w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 
                  flex items-center justify-center 
                  text-white text-xl sm:text-2xl md:text-3xl font-bold 
                  ${obj.badge} shadow-[6px_6px_15px_rgba(0,0,0,0.25)]`}
              >
                {obj.number}
              </motion.div>

              {/* Content */}
              <div className="text-center px-2 sm:px-6 md:px-12">
                <h3
                  className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 ${obj.color}`}
                >
                  {obj.title}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
                  {obj.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}