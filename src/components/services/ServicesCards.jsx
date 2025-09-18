import { motion } from "framer-motion";
import { servicesData } from "../../data/services";
import {
  containerVariants,
  cardSlideUp,
  fadeUp,
  listContainer,
  listItem,
} from "../../utils/animations";

export default function ServicesCards() {
  return (
    <section className="section-container bg-white">
      <div className="flex flex-col gap-24 mb-12">
        {servicesData.map((obj, i) => (
          <motion.div
            key={i}
            variants={cardSlideUp}
            initial="hidden"
            animate={i === 0 ? "show" : undefined}
            whileInView={i !== 0 ? "show" : undefined}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -12, scale: 1.01 }}
            className={`relative bg-gray-50 cursor-pointer
              flex flex-col items-center text-center
              w-full max-w-6xl mx-auto p-6 sm:p-10 md:p-16 pt-20
              shadow-[8px_8px_20px_rgba(0,0,0,0.15)]
              transition-all duration-300 ${obj.borderColor}`}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp(i, 0.2)}
              initial="hidden"
              animate={i === 0 ? "visible" : undefined}
              whileInView={i !== 0 ? "visible" : undefined}
              viewport={{ once: true, amount: 0.2 }}
              className={`absolute -top-6 -left-2 sm:-left-4 md:-top-8 md:-left-4
                w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20
                flex items-center justify-center
                text-white text-lg sm:text-xl md:text-3xl font-bold
                ${obj.numberBgColor} shadow-[6px_6px_15px_rgba(0,0,0,0.25)]`}
            >
              {obj.number}
            </motion.div>

            {/* Title + Subtitle + Text */}
            <motion.div
              variants={fadeUp(i, 0.3)}
              initial="hidden"
              animate={i === 0 ? "visible" : undefined}
              whileInView={i !== 0 ? "visible" : undefined}
              viewport={{ once: true, amount: 0.2 }}
              className="px-4 sm:px-12 mb-10 mx-auto text-center"
            >
              <h3 className="text-xl sm:text-3xl md:text-5xl font-medium mb-6 text-gray-400">
                {obj.title}
              </h3>

              {obj.subtitle && (
                <p className="text-gray-700 text-sm sm:text-lg md:text-xl mb-4">
                  {obj.subtitle}
                </p>
              )}

              <p className="text-gray-700 text-sm sm:text-lg md:text-xl leading-relaxed">
                {obj.text}
              </p>
            </motion.div>
            {/* Boxes */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 w-full grid-cols-1 sm:grid-cols-2 justify-items-center items-stretch"
            >
              {obj.boxes.map((box, j) => {
                const isLastOdd =
                  obj.boxes.length % 2 !== 0 && j === obj.boxes.length - 1;

                return (
                  <motion.div
                    key={j}
                    variants={cardSlideUp}
                    className={`p-6 sm:p-8 flex flex-col items-center justify-start
                      w-full max-w-sm sm:max-w-md flex-1 min-h-[250px]
                      text-center text-white shadow-md card-shadow
                      ${obj.buttonBgColor}
                      ${isLastOdd ? "sm:col-span-2 sm:w-1/2 mx-auto" : ""}`}
                  >
                    {/* Icon */}
                    <div className="mb-3">
                      <img
                        src={box.icon}
                        alt={box.title}
                        className="w-14 h-14 sm:w-18 sm:h-18 md:w-22 md:h-22"
                      />
                    </div>

                    {/* Title */}
                    <h4
                      className={`mb-6 text-center font-bold
                        text-2xl sm:text-3xl lg:text-4xl
                        ${isLastOdd ? "text-xl sm:text-2xl lg:text-3xl font-medium" : ""}`}
                    >
                      {box.title}
                    </h4>

                    {/* Points */}
                    <motion.ol
  variants={listContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className={`list-decimal w-full space-y-1 text-left max-w-xs
              pl-5 sm:pl-7 md:pl-10 lg:pl-14
              text-md sm:text-xl
              ${isLastOdd ? "text-md sm:text-lg" : ""}`}
>
  {box.points.map((p, k) => (
    <motion.li
      key={k}
      variants={listItem}
      className="leading-relaxed"
    >
      {p}
    </motion.li>
  ))}
</motion.ol>





                  </motion.div>
                );
              })}
            </motion.div>

            {/* Button */}
            <motion.button
              variants={fadeUp(i, 0.4)}
              initial="hidden"
              animate={i === 0 ? "visible" : undefined}
              whileInView={i !== 0 ? "visible" : undefined}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Learn more about ${obj.title}`}
              className={`w-full sm:w-[230px] h-[55px] sm:h-[75px] mt-10 p-2
                text-white text-base sm:text-lg font-medium text-center
                rounded-lg shadow-lg shadow-gray-400/40
                transition-all duration-300 
                ${obj.buttonBgColor} ${obj.buttonHoverBgColor}`}
            >
              {obj.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
