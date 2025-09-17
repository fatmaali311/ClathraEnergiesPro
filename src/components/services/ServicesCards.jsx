import { motion } from "framer-motion";
import { servicesData } from "../../data/services";

// SlideUp Cards
const cardSlideUp = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Fade Up Items
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay } },
});

// Container with Stagger
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};
// جوه الملف نفسه أو في utils/animations
const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesCards() {
  return (
    <section className="section-container bg-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col gap-24 mb-12"
      >
        {servicesData.map((obj, i) => (
          <motion.div
            key={i}
            variants={cardSlideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -12, scale: 1.01 }}
            className={`relative bg-gray-50 
              flex flex-col items-center text-center   
              p-10 sm:p-12 md:p-16 pt-20
              w-full max-w-6xl mx-auto
              cursor-pointer shadow-[8px_8px_20px_rgba(0,0,0,0.15)] 
              transition-all duration-300 ${obj.borderColor}`}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp(i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`absolute -top-6 sm:-top-8 -left-4 sm:-left-6 
                w-14 h-14 sm:w-20 sm:h-20 
                flex items-center justify-center 
                text-white text-2xl sm:text-3xl font-bold 
                ${obj.numberBgColor} shadow-[6px_6px_15px_rgba(0,0,0,0.25)]`}
            >
              {obj.number}
            </motion.div>

            {/* Title + Subtitle + Text */}
            <motion.div
              variants={fadeUp(i * 0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="px-4 sm:px-12 mb-10"
            >
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-6 text-gray-400">
                {obj.title}
              </h3>
              {obj.subtitle && (
                <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-4 ">
                  {obj.subtitle}
                </p>
              )}
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                {obj.text}
              </p>
            </motion.div>

            {/* Boxes */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className={`grid gap-8 w-full ${obj.boxes.length === 3
                ? "grid-cols-1 sm:grid-cols-2 justify-items-center"
                : "grid-cols-1 sm:grid-cols-2"
                }`}
            >
              {obj.boxes.map((box, j) => (
                <motion.div
                  key={j}
                  variants={cardSlideUp}
                  className={`p-8 flex flex-col items-center justify-start
                    text-center shadow-md text-white 
                    w-full ${obj.buttonBgColor} 
                    max-w-md mx-auto card-shadow
                    ${obj.boxes.length === 3 && j === 2
                      ? "sm:col-span-2 h-auto max-w-auto"
                      : "h-auto"
                    }`}
                >
                  {/* Icon */}
                  <div className="mb-3">
                    <img src={box.icon} alt={box.title} className="w-20 h-20" />
                  </div>

                  {/* Title */}
                  <h4 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                    {box.title}
                  </h4>

                  {/* Points */}
                  <motion.ol
                    variants={listContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="list-decimal list-outside text-md sm:text-xl max-w-xs  mx-auto space-y-1 text-left pl-6"
                  >
                    {box.points.map((p, k) => (
                      <motion.li key={k} variants={listItem}>
                        {p}
                      </motion.li>
                    ))}
                  </motion.ol>

                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.button
              variants={fadeUp(i * 0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`w-[230px] h-[75px] p-2
                 text-white font-medium text-lg
                  shadow-lg shadow-gray-400/40 mt-10  
                  text-center  transition-all duration-300
                  ${obj.buttonBgColor} ${obj.buttonHoverBgColor}`}
            >
              {obj.buttonText}
            </motion.button>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
