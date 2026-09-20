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

import Link from "next/link";

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
    <div 
      className="flex flex-col w-[320px] min-h-[440px] rounded-[2rem] group shrink-0 snap-start bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 p-3"
    >
      <div className="flex flex-col flex-1 p-5 pb-4">
        {/* Header (Tag & Arrow) */}
        <div className="flex justify-between items-start gap-4 mb-6">
          {tag && (
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest flex-1">{tag}</span>
          )}
          <div className="flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 flex-shrink-0 text-slate-400 group-hover:bg-[#0f172a] group-hover:text-white transition-colors group-hover:-rotate-45 shadow-sm">
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-bricolage font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-cihBlue transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
      
      {/* Bottom Image Container (Bento Style) */}
      <div className="relative w-full h-[220px] rounded-3xl overflow-hidden mt-auto isolate">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
        
        {/* Accent floating block over the image */}
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-cihYellow text-slate-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </div>
      </div>
    </div>
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
      <div className="flex items-center justify-center gap-3 mt-2 px-4 sm:px-6 lg:px-8">
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
