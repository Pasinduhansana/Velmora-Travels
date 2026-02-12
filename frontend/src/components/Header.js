"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header({ scrolled = false, activeLink = "home" }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        activeLink === "gallery" ? "bg-white/95 backdrop-blur-sm shadow-sm" : scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-2 sm:mx-4 md:mx-[10px] px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer ${
                activeLink === "gallery" ? "text-gray-900 italic" : scrolled ? "text-primary" : "text-white"
              }`}
              style={activeLink === "gallery" ? { fontFamily: "Brush Script MT, cursive" } : {}}
            >
              {activeLink === "gallery" ? "Tourpoint" : "Wanderlust"}
            </motion.div>
          </Link>

          <div className="hidden md:flex space-x-4 lg:space-x-8 xl:space-x-10">
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`font-medium text-sm lg:text-base cursor-pointer transition-colors ${
                  activeLink === "home"
                    ? activeLink === "gallery"
                      ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                      : scrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-white hover:text-secondary"
                    : activeLink === "gallery"
                      ? "text-gray-700 hover:text-gray-900"
                      : scrolled
                        ? "text-gray-700 hover:text-primary"
                        : "text-white hover:text-secondary"
                }`}
              >
                Home
              </motion.span>
            </Link>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className={`font-medium transition-colors ${
                activeLink === "gallery"
                  ? "text-gray-700 hover:text-gray-900"
                  : scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-secondary"
              }`}
            >
              {activeLink === "gallery" ? "Tour" : "Destinations"}
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className={`font-medium transition-colors ${
                activeLink === "gallery"
                  ? "text-gray-700 hover:text-gray-900"
                  : scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-secondary"
              }`}
            >
              {activeLink === "gallery" ? "About" : "Tours"}
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className={`font-medium transition-colors ${
                activeLink === "gallery"
                  ? "text-gray-700 hover:text-gray-900"
                  : scrolled
                    ? "text-gray-700 hover:text-primary"
                    : "text-white hover:text-secondary"
              }`}
            >
              {activeLink === "gallery" ? "Packages" : "About"}
            </motion.a>

            {activeLink !== "gallery" && (
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className={`font-medium transition-colors ${scrolled ? "text-gray-700 hover:text-primary" : "text-white hover:text-secondary"}`}
              >
                Contact
              </motion.a>
            )}

            <Link href="/gallery">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`font-medium text-sm lg:text-base cursor-pointer transition-colors ${
                  activeLink === "gallery"
                    ? "text-gray-900 border-b-2 border-gray-900 pb-1"
                    : scrolled
                      ? "text-gray-700 hover:text-primary"
                      : "text-white hover:text-secondary"
                }`}
              >
                Gallery
              </motion.span>
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-full font-semibold transition-all shadow-lg ${
              activeLink === "gallery"
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : scrolled
                  ? "bg-primary text-white hover:bg-blue-600"
                  : "bg-white text-primary hover:bg-gray-100"
            }`}
          >
            {activeLink === "gallery" ? "Book Trip" : "Book Now"}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
