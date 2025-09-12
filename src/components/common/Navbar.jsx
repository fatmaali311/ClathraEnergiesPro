import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/logo.png";
import Button from "./GButton";
import { navLinks } from "../../data/navLinks";
import { menuVariants, itemVariants } from "../../utils/animations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block nav-link transition-all duration-300 ${
      isActive ? "text-[var(--primary-green)] font-bold" : "text-gray-800"
    } hover:text-[var(--primary-green)]`;

  const desktopLinks = navLinks.slice(0, -1); // Exclude Contact for desktop menu

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="transition-transform duration-300 hover:scale-105"
        >
          <img src={logo} alt="Company Logo" className="h-16 md:h-20" />
        </Link>
        <ul className="hidden md:flex flex-1 justify-center gap-10 text-gray-800 font-medium">
          {desktopLinks.map(({ path, name }, index) => (
            <li
              key={path}
              className="animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <NavLink to={path} end={path === "/"} className={navLinkClass}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden md:inline-block">
          <Button to="/contact">Contact Us</Button>
        </div>
        <div
          className="md:hidden cursor-pointer text-3xl text-gray-800 transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={menuVariants}
            className="md:hidden bg-white shadow-xl rounded-b-xl px-6 py-8 space-y-6 mobile-menu"
          >
            <motion.ul
              className="flex flex-col space-y-5 text-lg"
              variants={menuVariants}
            >
              {desktopLinks.map(({ path, name }) => (
                <motion.li key={path} variants={itemVariants}>
                  <NavLink
                    to={path}
                    end={path === "/"}
                    className={navLinkClass}
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                variants={itemVariants}
                className="pt-4 border-t border-gray-200"
              >
                <div onClick={() => setIsOpen(false)} className="flex justify-center">
                  <Button className="shadow-xl" size="lg" to="/contact">
                    Contact Us
                  </Button>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}