"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How can I join a Cafe Innovate Hub training program?",
    answer: "You can apply directly through our website by selecting a program from our catalog. Applications are reviewed on a rolling basis, and our admissions team will guide you through the next steps, including enrollment and scholarship options."
  },
  {
    question: "Do I need prior experience to join the bootcamps?",
    answer: "No prior experience is required for our foundational bootcamps. Our curriculum is designed to take you from beginner to industry-ready, providing comprehensive mentorship and hands-on projects."
  },
  {
    question: "What makes the CIH community different from other online networks?",
    answer: "CIH is built specifically for digital creators and tech founders. You gain direct access to a curated virtual community of innovators, exclusive online networking events, expert mentorship, and a global talent pool."
  },
  {
    question: "Are there scholarships or financial aid available?",
    answer: "Yes! Our mission is to democratize digital education. We offer partial and full scholarships for underrepresented talent. You can indicate your interest in financial aid during the standard application process."
  },
  {
    question: "Can my company partner with Cafe Innovate Hub?",
    answer: "Absolutely. We actively collaborate with industry partners for hiring pipelines, corporate training, and event sponsorships. Please reach out via our contact page to explore partnership opportunities."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 space-y-2">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="border-b border-white/20">
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between py-6 text-left focus:outline-none group cursor-pointer"
            >
              <span className="text-lg md:text-xl font-bold text-white group-hover:text-cihLightBlue transition-colors pr-8 font-sans">
                {faq.question}
              </span>
              <div 
                className={`shrink-0 flex items-center justify-center h-8 w-8 rounded-full transition-colors ${
                  isOpen ? 'bg-cihYellow text-cihBlueDark' : 'bg-white/10 text-white group-hover:bg-white/20'
                }`}
              >
                {isOpen ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                )}
              </div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-slate-300 font-medium leading-relaxed pr-12 font-sans">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
