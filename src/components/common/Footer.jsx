import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import globeVideo from "../../assets/videos/globe.mp4";

import { navLinks } from "../../data/navLinks";
import { socialLinks } from "../../data/socialLinks";
import { contactInfo } from "../../data/contactInfo";
import { workingHours } from "../../data/workingHours";
import { fadeUp, fadeLeft, fadeRight, viewportSettings } from "../../utils/animations";

export default function Footer() {
  return (
    <>
      <footer
        role="contentinfo"
        className="bg-[#3ab64a] text-white py-8 sm:py-12 font-sans overflow-hidden"
      >
        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-wide"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp(0)}
        >
          CLATHRAENERGIES
        </motion.h1>

        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 lg:gap-x-8 lg:gap-y-0 gap-6 sm:gap-10 text-center md:text-left">
          {/* Globe */}
          <motion.div
            className="flex justify-center md:col-span-2 lg:col-span-1"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeLeft(0.2)}
          >
            <video
              src={globeVideo}
              autoPlay
              loop
              muted
              playsInline
              onError={() => console.error("Failed to load globe video")}
              className="w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 rounded-full object-cover"
            />
          </motion.div>

          {/* Group for second row */}
          <div className="md:col-span-2 md:flex md:justify-between lg:col-span-2 lg:flex lg:justify-between pl-0 md:pl-32  lg:pl-8">
            {/* Working Hours */}
            <motion.div
              className="space-y-3 mt-6 flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeUp(0.4)}
            >
              <h4 className="font-bold mb-3 text-xl sm:text-2xl md:text-3xl">
                Working Hours
              </h4>
              {workingHours.map((wh, i) => (
                <p key={i} className="text-base sm:text-lg font-normal">
                  <span className="font-semibold">{wh.day}:</span>
                  <br /> {wh.time}
                </p>
              ))}
            </motion.div>

            {/* Contact */}
            <motion.div
              className="space-y-3 mt-6 flex-1"
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              variants={fadeRight(0.6)}
            >
              <h4 className="font-bold mb-3 text-xl sm:text-2xl md:text-3xl">
                Get In Touch
              </h4>

              {contactInfo.map((item, i) => {

                if (typeof item.text === "string") {
                  if (item.text.includes("@")) {
                    return (
                      <a
                        key={i}
                        href={`mailto:${item.text}`}
                        aria-label={`Email ${item.text}`}
                        className="flex items-center justify-center md:justify-start gap-2 hover:text-black transition-colors text-base sm:text-lg font-normal"
                      >
                        {item.icon} {item.text}
                      </a>
                    );
                  } else if (item.text.trim().startsWith("+")) {
                    return (
                      <a
                        key={i}
                        href={`tel:${item.text.replace(/\s+/g, "")}`}
                        aria-label={`Call ${item.text}`}
                        className="flex items-center justify-center md:justify-start gap-2 hover:text-black transition-colors text-base sm:text-lg font-normal"
                      >
                        {item.icon} {item.text}
                      </a>
                    );
                  } else {
                    return (
                      <p
                        key={i}
                        className="flex items-start justify-center md:justify-start gap-2 text-base sm:text-lg font-normal"
                      >
                        {item.icon}
                        <span>{item.text}</span>
                      </p>
                    );
                  }
                }
                return (
                  <p
                    key={i}
                    className="flex items-start justify-center md:justify-start gap-2 text-base sm:text-lg font-normal"
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </p>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Pages Links */}
        <motion.nav
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-8 sm:mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeUp(0.8)}
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 text-base sm:text-lg font-normal">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="relative hover:text-black transition-colors group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Divider line after links */}
          <motion.div
            className="border-t-2 border-white mt-6 w-3/4 sm:w-2/3 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportSettings}
            transition={{ duration: 0.8, delay: 1 }}
          />
        </motion.nav>

        {/* Socials */}
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex justify-center md:justify-end mt-6 gap-8 sm:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={fadeRight(1)}
        >
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.ariaLabel}
              className="flex items-center gap-2 hover:text-black transition-colors group relative"
            >
              <span className="text-xl sm:text-2xl">{item.icon}</span>
              <span className="relative text-base sm:text-lg font-normal group-hover:text-black transition-colors">
                {item.text}
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </motion.div>
      </footer>

      {/* Bottom Year */}
      <motion.div
        className="text-center mt-4 mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 hover:text-gray-800 transition-colors duration-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp(1.2)}
      >
        Copyright ©{new Date().getFullYear()} ClathraEnergies
      </motion.div>

    </>
  );
}
