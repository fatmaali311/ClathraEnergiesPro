import { useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";
import { motion } from "framer-motion";
import { contactInfo } from "../data/contactInfo";
import { Helmet } from 'react-helmet';

export default function NotFound() {
  const navigate = useNavigate();
  const handleGoHome = () => navigate("/");
  const handleGoBack = () => navigate(-1);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | ClathraEnergies</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Explore our biogas and renewable energy solutions instead."
        />
        <meta
          name="keywords"
          content="ClathraEnergies 404, page not found, renewable energy error"
        />
        <meta property="og:title" content="404 - ClathraEnergies" />
        <meta
          property="og:description"
          content="Oops! Page not found. Return to home for clean energy innovations."
        />
        <meta
          property="og:image"
          content="https://www.clathraenergies.fr/assets/images/logo.png"
        />
        <meta property="og:url" content="https://www.clathraenergies.fr/404" />
        <link rel="canonical" href="https://www.clathraenergies.fr/404" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <motion.div
          className="w-full max-w-md text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Icon */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <motion.div
              className="mx-auto w-24 h-24 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-green), var(--primary-blue))",
              }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <FaExclamationTriangle className="text-white text-3xl" />
            </motion.div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1
              className="text-6xl font-bold mb-2"
              style={{ color: "var(--primary-green)" }}
            >
              404
            </h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Sorry, the page you’re looking for cannot be found. It may have
              been moved, deleted, or the link you followed is incorrect.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2, delayChildren: 0.6 },
              },
            }}
          >
            <motion.button
              onClick={handleGoHome}
              aria-label="Go to homepage"
              className="w-full text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-green), var(--primary-blue))",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHome className="mr-2" />
              Go to Home
            </motion.button>

            <motion.button
              onClick={handleGoBack}
              aria-label="Go back to previous page"
              className="w-full bg-white border-2 font-medium py-3 px-6 rounded-lg flex items-center justify-center shadow-md"
              style={{
                borderColor: "var(--primary-green)",
                color: "var(--primary-green)",
              }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowLeft className="mr-2" />
              Go Back
            </motion.button>
          </motion.div>
          {/* Contact Info Section */}
          <motion.div
            className="mt-8 mx-auto w-full max-w-2xl bg-white rounded-lg p-4 sm:p-6 shadow-sm text-sm sm:text-base text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="font-medium text-gray-800">Need help?</p>
            <p className="text-gray-600 mt-1 text-sm">
              Something went wrong. Reach out to us:
            </p>

            <div className="mt-3 space-y-3">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[var(--primary-green)]">{item.icon}</span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="hover:underline text-[var(--primary-green)] break-all"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
          {/* Footer */}
          <motion.div
            className="mt-6 text-xs text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <p>ClathraEnergies</p>
            <p>Sustainable Energy Solutions</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}