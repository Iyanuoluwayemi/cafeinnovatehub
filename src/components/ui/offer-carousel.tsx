"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import EclipseButton from "@/components/ui/eclipse-button";

// SVG Icons to avoid external dependencies
const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);

export interface OfferCardProps {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  tag?: string;
  brandName?: string;
  brandLogoSrc?: string;
}

export function OfferCard({ title, description, imageSrc, href = "#", tag }: OfferCardProps) {
  return (
    <motion.a 
      href={href}
      className="flex flex-col w-[320px] min-h-[420px] rounded-3xl overflow-hidden group shrink-0 snap-start bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top Image Container */}
      <div className="relative w-full h-[200px] overflow-hidden shrink-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-opacity duration-300 z-10 pointer-events-none" />
        
        {/* Tag */}
        {tag && (
          <div className="absolute top-4 left-4 bg-white text-cihBlue text-xs font-bold px-3 py-1 rounded-full z-20 shadow-sm">
            {tag}
          </div>
        )}
      </div>
      
      {/* Bottom Content Container */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-white mb-2 font-sans leading-tight line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-slate-300 mb-6 font-sans leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/20">
          <span className="text-sm font-bold text-white">View Program</span>

          <div 
            className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-cihYellow group-hover:text-cihBlue group-hover:-rotate-45"
          >
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export interface OfferCarouselProps {
  offers: OfferCardProps[];
}

export function OfferCarousel({ offers }: OfferCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!offers || offers.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto group/carousel">
      {/* Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4 px-4 sm:px-6 lg:px-8 -mx-4 sm:-mx-6 lg:-mx-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {offers.map((offer, index) => (
          <div key={index} className="snap-start shrink-0 h-auto flex">
            <OfferCard {...offer} />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-end gap-3 mt-2 px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => scroll("left")}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-cihLightBlue hover:text-white hover:border-cihLightBlue shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cihLightBlue focus:ring-offset-2"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon />
        </button>
        <button 
          onClick={() => scroll("right")}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-cihLightBlue hover:text-white hover:border-cihLightBlue shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cihLightBlue focus:ring-offset-2"
          aria-label="Scroll right"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
