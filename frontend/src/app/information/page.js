"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { informationSections } from "../../data/informationData";
import { useRouter } from "next/navigation";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function InformationPage() {
  const router = useRouter();
  const [active, setActive] = useState("terms");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      setActive(hash);

      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <section className="bg-gray-50 min-h-screen py-12 sm:py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="P-10 mx-auto">
        <div className="flex flex-row-reverse items-center justify-between mb-105">
          {/* Back Button */}
          <motion.div {...fadeUp()}>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 border py-2 px-4 rounded-full text-gray-600 hover:border-orange-300 hover:text-orange-500 transition-colors mb-8"
            >
              <FaArrowLeft />
              <span>Back to Page</span>
            </button>
          </motion.div>

          {/* Heading */}
          <motion.div {...fadeUp(0.1)} className="text-left mb-12">
            <span className="inline-flex items-center gap-2 text-[#FFD700] text-[11px] tracking-[4px] uppercase font-semibold">
              <span className="w-6 h-px bg-[#FFD700]" />
              Information Centre
              <span className="w-6 h-px bg-[#FFD700]" />
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-[46px] font-bold text-gray-900">
              Important Travel <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Information</span>
            </h1>

            <p className="mt-4 max-w-2xl  text-gray-500 text-[15px] leading-relaxed">
              Please review the following information before booking your Sri Lankan adventure. These guidelines help ensure a safe, enjoyable, and
              transparent travel experience.
            </p>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 bg-white rounded-[26px]">
          {/* Sidebar */}
          <motion.div {...fadeUp(0.2)} className="bg-white  m-5 p-5 h-fit sticky top-6">
            <div className="space-y-2">
              {informationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => {
                    setActive(section.id);

                    document.getElementById(section.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium ${
                    active === section.id ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white" : "text-gray-600 hover:bg-orange-50"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-5">
            {informationSections.map((section, index) => (
              <motion.div key={section.id} id={section.id} {...fadeUp(index * 0.1)} className="p-7 sm:p-9 ">
                {/*Horizontal Seperator */}
                {index > 0 && <div className="w-full h-px bg-gray-200 mb-10" />}
                <h2 className="text-2xl font-bold text-gray-900 mb-5">{section.title}</h2>

                <div className="space-y-4">
                  {section.content.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
