import map from "../../assets/images/map.png";
import GButton from "../common/GButton";
import { motion } from "framer-motion";
import { slideLeft, slideRight, viewportSettings } from "../../utils/animations";

export default function WhoWeAre() {
  return (
    <section
      className="relative bg-white"
      aria-labelledby="who-we-are-title"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 block lg:flex justify-center gap-2 items-center relative overflow-hidden">
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          className="w-full text-center lg:text-left lg:text-base lg:w-5/12 lg:ml-6 mt-20"
        >
          <header>
            <h2
              id="who-we-are-title"
              className="section-title mb-8"
            >
              Who Are We?
            </h2>
          </header>
          <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed font-medium text-[var(--text-gray-600)] mb-8">
            <p>
              ClathraEnergies is a mission-driven deep-tech engineering company dedicated
              to turning advanced scientific research into real-world energy solutions. We
              focus on renewable gases, gas treatment, storage and transportation,
              AI-powered engineering, and the industrial deployment of clean technologies.
              Our diverse international team brings over 15 years of combined experience
              in process engineering, energy systems, and technology development — with
              80% of our core team holding PhDs and a majority-women founding group.
            </p>
          </div>
          <div className="inline-block mt-4">
            <GButton
              to="/contact"
              size="md"
              className="sm:min-h-[64px] sm:px-12 sm:text-lg lg:min-h-[80px] lg:px-16 lg:text-xl"
              aria-label="Learn more about ClathraEnergies"
            >
              Contact Us
            </GButton>
          </div>
        </motion.div>
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportSettings}
          className="w-full lg:w-7/12 p-4 rounded-xl flex flex-col items-center relative mt-8 lg:mt-0"
        >
          <figure className="relative w-full">
            <img
              src={map}
              alt="World map highlighting ClathraEnergies offices in France, Egypt, and China"
              className="w-full h-auto max-h-[650px] object-cover rounded-lg"
              loading="lazy"
              onError={(e) => (e.target.src = '/path/to/fallback-image.jpg')}
            />
            <figcaption className="sr-only">
              ClathraEnergies has offices in France, Egypt, and China, marked on the map.
            </figcaption>
            <div className="grid grid-cols-3 mt-4 w-full text-[var(--text-gray-500)] text-[0.8rem] sm:text-[1rem] font-semibold text-center">
              <span className="text-left lg:pl-8 md:pl-4 sm:pl-2">FRANCE</span>
              <span className="text-center">EGYPT</span>
              <span className="text-right lg:pr-6 md:pr-4 sm:pr-2">CHINA</span>
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}