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
    answer: "You can join by checking our website and social media pages for open calls, upcoming training programs, and application instructions. Some programs are free, while others are offered at a highly affordable fee. If you are unsure which program is right for you, send us a message and our team will guide you."
  },
  {
    question: "Does Cafe Innovate Hub offer training for small businesses?",
    answer: "Yes. We support MSMEs and small business owners with practical digital skills and digital transformation training. Our programs are designed to help businesses improve their online presence, use digital tools more effectively, reach new customers, and build simpler workflows using tools such as social media, automation, AI, and business management tools."
  },
  {
    question: "Can my organisation partner with Cafe Innovate Hub?",
    answer: "Yes. We welcome partnerships with organisations, businesses, institutions, industry experts, facilitators, and community leaders who share our goal of expanding access to practical digital skills. You can contact us to discuss training partnerships, sponsorships, speaking opportunities, community projects, technical support, or other collaboration ideas."
  },
  {
    question: "How can I support or donate to Cafe Innovate Hub?",
    answer: "You can support our work by making a donation, sponsoring a program, partnering with us, providing learning resources, or volunteering your expertise. Your support helps us provide free or affordable training, engage facilitators, support participants, and reach young people and small business owners who may not otherwise have access to digital skills opportunities."
  },
  {
    question: "How soon will I receive a response after contacting you?",
    answer: "Our team aims to respond to messages as soon as possible. For general enquiries, training questions, and partnership requests, please allow a reasonable response period, especially during active training programs. To help us respond more effectively, include your name, the reason for contacting us, and any relevant details in your message."
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
                  isOpen ? 'bg-cihYellow text-cihBlueDark' : 'bg-white/10 text-cihYellow group-hover:bg-cihYellow group-hover:text-cihBlueDark'
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
