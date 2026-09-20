"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EclipseButton from "@/components/ui/eclipse-button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Join the Community", href: "/community" },
    { name: "Blog", href: "/blog" },
  ];

  if (pathname && pathname.startsWith('/studio')) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-3 group shrink-0" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image 
            src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png" 
            width={120} 
            height={30} 
            alt="Cafe Innovate Hub" 
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-cihBlue ${
                pathname === link.href ? "text-cihBlue font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/community" className="hidden sm:block">
            <EclipseButton variant="primary" className="py-2.5 px-5 text-sm">
              Join the Community
            </EclipseButton>
          </Link>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-slate-100 transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`bg-slate-900 block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : '-translate-y-1'}`} />
            <span className={`bg-slate-900 block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm my-1 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`bg-slate-900 block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : 'translate-y-1'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-x-0 top-[73px] bg-white z-40 overflow-hidden flex flex-col border-t border-slate-100 shadow-2xl"
          >
            <nav className="flex flex-col px-6 py-8 gap-6 text-xl font-bold font-bricolage text-slate-800">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full py-2 border-b border-slate-100 transition-colors ${
                      pathname === link.href ? "text-cihBlue border-cihBlue/30" : "hover:text-cihLightBlue"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA (only on very small screens where the header button is hidden) */}
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 20 }}
                 transition={{ duration: 0.3, delay: 0.3 }}
                 className="mt-6 sm:hidden"
              >
                <Link href="/community" onClick={() => setIsMobileMenuOpen(false)}>
                  <EclipseButton variant="primary" className="w-full py-4 text-base shadow-lg">
                    Join the Community
                  </EclipseButton>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
