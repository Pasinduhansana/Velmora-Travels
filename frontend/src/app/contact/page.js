"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaClock, FaCheckCircle } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function ContactPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-12 sm:py-16 lg:py-10 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between items-center">
          {/* Heading */}
          <motion.div {...fadeUp(0.1)} className="text-left mb-12">
            <span className="inline-flex items-center gap-2 text-[#FFD700] text-[11px] tracking-[4px] uppercase font-semibold">
              <span className="w-6 h-px bg-[#FFD700]" />
              Contact Us
              <span className="w-6 h-px bg-[#FFD700]" />
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-[46px] font-bold text-gray-900 tracking-tight leading-tight">
              Let’s Plan Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Journey</span>
            </h1>

            <p className="mt-5 text-gray-500 text-[15px] max-w-2xl  leading-relaxed">
              Whether you're planning a holiday escape, adventure tour, or cultural journey, we help you create unforgettable travel experiences
              tailored just for you. Reach out to discuss your travel plans, request a quote, or start planning your perfect trip.
            </p>
          </motion.div>

          {/* Back Button */}
          <motion.div {...fadeUp()}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 border py-2 px-4 rounded-full text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors mb-8"
            >
              <FaArrowLeft /> <span>Back to Home</span>
            </Link>
          </motion.div>
        </div>

        {/* Main Content */}
        <motion.div {...fadeUp(0.15)} className="bg-white grid lg:grid-cols-[1.4fr_0.9fr] gap-5 rounded-[26px] p-7 sm:p-9  border border-gray-100">
          {/* Contact Form */}
          <div className="flex flex-col pr-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>

            <p className="text-gray-500 text-sm mb-8">
              Tell us about your travel plans and we’ll get back to you shortly with the best options for your journey.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>

                <input
                  type="text"
                  placeholder="Tour Inquiry"
                  className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-orange-500 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your tour requirements..."
                  className="w-full p-4 rounded-xl border border-gray-200 focus:border-orange-500 outline-none resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 h-12 rounded-xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h3>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Looking for your next unforgettable adventure? We help travelers discover breathtaking destinations, unique experiences, and carefully
              curated tours designed to create lasting memories. Let us make your journey smooth, exciting, and stress-free.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-500 text-sm">hello@yourcompany.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-500 text-sm">+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-500 text-sm">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/94771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 h-12 rounded-xl bg-[#25D366] text-white font-semibold hover:opacity-90 transition"
            >
              <FaWhatsapp className="text-lg" />
              Chat on WhatsApp
            </a>

            {/* Trust Section */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
              <div className="flex items-center gap-3">
                <FaClock className="text-orange-500" />
                <span className="text-sm text-gray-600">Response within 24 hours</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                <span className="text-sm text-gray-600">Free tour consultation</span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-orange-500" />
                <span className="text-sm text-gray-600">Personalized tour planning</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
