"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { faqMeta, faqItems } from "@/data/faqData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

function normalizeHash(hash) {
  return hash.replace(/^#/, "").toLowerCase();
}

function getIdFromHash(hash) {
  const id = normalizeHash(hash);
  return faqItems.find((item) => item.id === id)?.id ?? null;
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null);
  const itemRefs = useRef({});

  const scrollToItem = useCallback((id) => {
    const el = itemRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []);

  const expandFromHash = useCallback(
    (hash, shouldScroll = true) => {
      const matchId = getIdFromHash(hash);
      if (!matchId) return;

      setOpenId(matchId);

      if (shouldScroll) {
        requestAnimationFrame(() => scrollToItem(matchId));
      }
    },
    [scrollToItem],
  );

  useEffect(() => {
    const applyHash = () => expandFromHash(window.location.hash);

    applyHash();
    const timer = setTimeout(applyHash, 300);

    window.addEventListener("hashchange", applyHash);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", applyHash);
    };
  }, [expandFromHash]);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        {/* Section heading */}
        <motion.div {...fadeUp(0.05)} className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 text-[#FFD700] text-[11px] tracking-[4px] uppercase font-semibold">
            <span className="w-6 h-px bg-[#FFD700]" />
            {faqMeta.label}
            <span className="w-6 h-px bg-[#FFD700]" />
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-[42px] font-bold text-gray-900 tracking-tight leading-tight">
            {faqMeta.heading}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{faqMeta.headingAccent}</span>
          </h2>
          <p className="mt-3 text-gray-500 text-[14px] sm:text-[15px] max-w-lg mx-auto leading-relaxed">{faqMeta.subheading}</p>
        </motion.div>

        {/* Accordion */}
        <motion.div {...fadeUp(0.15)} className="flex flex-col gap-3 sm:gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                id={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`rounded-[20px] sm:rounded-[22px] border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-orange-200 bg-white shadow-md shadow-orange-100/50"
                    : "border-gray-100 bg-gray-50 hover:border-gray-200 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${item.id}`}
                  className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span
                    className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white" : "bg-white text-orange-500 border border-orange-100"
                    }`}
                  >
                    <FaQuestionCircle className="text-sm" />
                  </span>

                  <span className="flex-1 text-[14px] sm:text-[15px] font-semibold text-gray-900 leading-snug pr-2">{item.question}</span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isOpen ? "bg-orange-50 text-orange-500" : "bg-white text-gray-400 border border-gray-100"
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[4.5rem] sm:pl-[5.5rem]">
                        <p className="text-gray-600 text-[13px] sm:text-[14px] leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
