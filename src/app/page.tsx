"use client";

import { motion, Variants } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import EclipseButton from "@/components/ui/eclipse-button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { OfferCarousel, OfferCardProps } from "@/components/ui/offer-carousel";
import Image from "next/image";
import Link from "next/link";

// Framer Motion variants with explicit cubic-bezier tuple typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden">

      {/* Immersive Dark Hero & Impact Section */}
      <section className="relative w-full overflow-hidden bg-[#0a0f0d] pt-32 pb-24 lg:pt-40 lg:pb-32 flex flex-col items-center">
        {/* Immersive Background Image with deep fade */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0d]/10 via-[#0a0f0d]/60 to-[#0a0f0d] z-10"></div>
          <Image
            src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_1920/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg"
            alt="Cafe Innovate Hub Immersive Background"
            fill
            priority
            className="object-cover object-top opacity-50 mix-blend-luminosity"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-12 lg:mt-24">
          
          {/* Floating Pill Tags (Decorative) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute -top-12 left-10 md:left-20 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold tracking-widest flex items-center gap-2 hidden md:flex"
          >
            <span className="w-2 h-2 rounded-full bg-cihLightBlue"></span>
            Build Smart
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-20 -right-4 md:right-12 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs font-bold tracking-widest flex items-center gap-2 hidden md:flex"
          >
            <span className="w-2 h-2 rounded-full bg-cihYellow"></span>
            Grow Faster
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bricolage font-black text-white leading-[1.1] tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Practical digital skills.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              Real business growth.
            </span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Empowering business owners and young professionals with digital skills to improve their business, operations, and career.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="/programs">
              <EclipseButton variant="yellow" className="w-full sm:w-auto px-8 py-4 text-base">
                Explore Our Trainings
              </EclipseButton>
            </Link>
            <Link href="/community">
              <EclipseButton variant="ghost" className="w-full sm:w-auto px-8 py-4 text-base">
                Join the Community
              </EclipseButton>
            </Link>
          </motion.div>
        </div>

        {/* Impact Numbers integrated beautifully below */}
        <motion.div 
          className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 lg:mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-start border-t border-white/10 pt-16">
            <div className="lg:col-span-1">
              <h3 className="text-2xl md:text-3xl font-bricolage font-bold text-white leading-tight">
                A year of real impact, one person and one business at a time.
              </h3>
            </div>
            
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div variants={cardVariants} className="flex flex-col">
                <span className="text-5xl font-bricolage font-black text-cihYellow mb-2">50+</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">Businesses Trained</span>
              </motion.div>

              <motion.div variants={cardVariants} className="flex flex-col">
                <span className="text-5xl font-bricolage font-black text-cihLightBlue mb-2">200+</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">Professionals</span>
              </motion.div>

              <motion.div variants={cardVariants} className="flex flex-col">
                <span className="text-5xl font-bricolage font-black text-white mb-2">5</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">Cohorts Run</span>
              </motion.div>

              <motion.div variants={cardVariants} className="flex flex-col">
                <span className="text-3xl font-bricolage font-black text-white mb-3">Bi-monthly</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-widest leading-relaxed">Free Live<br/>Webinars</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>



      {/* What We Do Section - Upgraded */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden z-10">
        {/* Soft ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cihYellow/[0.05] rounded-full blur-[100px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cihBlue/[0.03] rounded-full blur-[100px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 lg:pr-12"
            >
              <span className="text-sm font-bold text-cihLightBlue uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cihLightBlue"></span>
                Digital Skills Accelerator
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-black text-cihBlue leading-[1.1] tracking-tight">
                Turn a phone and internet connection into real opportunity.
              </h2>
              <div className="text-lg text-slate-600 font-medium leading-relaxed space-y-6">
                <p>
                  Cafe Innovate Hub is helping small business owners and young professionals grow through practical, accessible digital skills training programs.
                </p>
                <p>
                  From digital marketing to graphic design, we keep our trainings affordable—and often free—so cost is never the reason someone gets left behind.
                </p>
              </div>
              <div className="pt-4">
                <Link href="/about" className="inline-flex items-center gap-2 text-cihBlue font-bold text-lg group hover:text-cihLightBlue transition-colors">
                  Our Origin Story
                  <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Right Image / Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-end"
            >
              {/* Decorative shapes behind */}
              <div className="absolute top-10 right-10 w-[80%] h-[80%] bg-blue-50 rounded-[3rem] -z-10 rotate-6"></div>
              
              {/* The Standardized Image Container */}
              <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/DMM_pz1swq.png"
                  alt="Cafe Innovate Hub Training"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stat Card overlapping */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="absolute bottom-10 left-0 md:-left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex flex-col gap-1 z-20 w-[240px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-cihYellow/20 flex items-center justify-center text-yellow-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Accessible</span>
                </div>
                <span className="text-3xl font-bricolage font-black text-slate-900">100%</span>
                <span className="text-sm font-medium text-slate-500 leading-tight">Focus on practical, hands-on growth</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Programs Section with Top-Down Layout */}
      <section id="programs" className="relative py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
        {/* CSS Grid Pattern for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Soft glowing ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cihBlue/[0.03] rounded-full blur-[120px] z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row */}
          <motion.div 
            className="flex flex-col items-center text-center gap-6 mb-12 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
                Our Training Programs
              </h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Master industry-leading skills through hands-on, intensive bootcamps designed for real-world impact and immediate business growth.
              </p>
            </div>
            <div className="shrink-0 mt-2">
              <Link href="/programs">
                <EclipseButton variant="outline">
                  View Full Catalog
                </EclipseButton>
              </Link>
            </div>
          </motion.div>

          {/* Carousel Row */}
          <motion.div 
            className="w-full overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <OfferCarousel offers={[
              {
                title: "Graphic Design Bootcamp",
                description: "A free training for beginners ready to add design to their skill set.",
                tag: "8 Weeks",
                imageSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800,c_scale/Learn_Graphic_Design_from_Scratch_6_hgcjru.png",
                brandName: "Cafe Innovate Hub",
                brandLogoSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png",
                href: "/programs/graphic-design"
              },
              {
                title: "Digital Marketing",
                description: "Practical marketing skills to help any business attract customers and sell online.",
                tag: "4 Weeks",
                imageSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800,c_scale/DMM_pz1swq.png",
                brandName: "Cafe Innovate Hub",
                brandLogoSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png",
                href: "/programs/digital-marketing"
              },
              {
                title: "Driving Digital Adoption for MSMEs (D-DAM)",
                description: "Our flagship Digital Transformation program designed to help MSMEs adopt the digital tools and systems to grow.",
                tag: "Coming Soon",
                imageSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800,c_scale/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg",
                brandName: "Cafe Innovate Hub",
                brandLogoSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png",
                href: "/programs/d-dam"
              }
            ]} />
          </motion.div>
        </div>
      </section>



      {/* Testimonials Section (Continuous Marquee) */}
      <section id="community" className="py-32 bg-[#0a0f0d] border-y border-[#0a0f0d] overflow-hidden flex flex-col items-center relative z-10 shadow-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="text-center max-w-3xl mx-auto mb-20 px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bricolage font-black text-white tracking-tight mb-4">
            Real people. Real growth.
          </h2>
          <p className="text-lg text-slate-400 font-medium font-sans">
            Hear from those who have been through our programs.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full flex overflow-x-hidden group">
          <style>{`
            @keyframes infinite-scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 40s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-infinite-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="animate-infinite-scroll flex gap-6 px-3">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-6 shrink-0">
                
                {/* Card 1 */}
                <div className="w-[300px] md:w-[360px] min-w-[300px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                      "Since I joined Cafe Innovate Hub, I have learned how to market my business more intentionally. I learned useful tips on using Facebook Marketplace, Instagram, creating better captions, and knowing what kind of content to post. I am now more intentional and consistent with how I promote Midefreshmart online."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="shrink-0 w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/20">
                      <Image 
                        src="https://res.cloudinary.com/dykvipays/image/upload/556300.jpg_uxifis.jpg"
                        alt="@MideFreshMart"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans">@MideFreshMart</h4>
                      <p className="text-cihLightBlue text-sm font-medium font-sans">Community Member</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-[300px] md:w-[360px] min-w-[300px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                      "Since connecting with Cafe Innovate Hub, I have gained tremendous value. The community introduced me to powerful digital tools. I frequently leverage CapCut, Facebook Marketplace, and Ads to promote my brand. These skills, combined with practical tips on consistent content creation and audience engagement, have significantly strengthened my brand’s online presence."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans ring-2 ring-white/10">
                      MO
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans">Mr Olumide</h4>
                      <p className="text-cihLightBlue text-sm font-medium font-sans">@Declutterify.Ng</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 (Duplicate of 1 for scrolling width) */}
                <div className="w-[300px] md:w-[360px] min-w-[300px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                      "Since I joined Cafe Innovate Hub, I have learned how to market my business more intentionally. I learned useful tips on using Facebook Marketplace, Instagram, creating better captions, and knowing what kind of content to post. I am now more intentional and consistent with how I promote Midefreshmart online."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="shrink-0 w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/20">
                      <Image 
                        src="https://res.cloudinary.com/dykvipays/image/upload/556300.jpg_uxifis.jpg"
                        alt="@MideFreshMart"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans">@MideFreshMart</h4>
                      <p className="text-cihLightBlue text-sm font-medium font-sans">Community Member</p>
                    </div>
                  </div>
                </div>

                {/* Card 4 (Duplicate of 2 for scrolling width) */}
                <div className="w-[300px] md:w-[360px] min-w-[300px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                      "Since connecting with Cafe Innovate Hub, I have gained tremendous value. The community introduced me to powerful digital tools. I frequently leverage CapCut, Facebook Marketplace, and Ads to promote my brand. These skills, combined with practical tips on consistent content creation and audience engagement, have significantly strengthened my brand’s online presence."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans ring-2 ring-white/10">
                      MO
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans">Mr Olumide</h4>
                      <p className="text-cihLightBlue text-sm font-medium font-sans">@Declutterify.Ng</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          {/* Subtle gradient edges for the marquee to fade smoothly */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0a0f0d] to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0a0f0d] to-transparent pointer-events-none z-10"></div>
        </div>
      </section>


      {/* Blog / Latest Articles Section */}
      <section id="blog" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 space-y-6 md:space-y-0">
            <div>
              <h2 className="text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
                Latest Insights
              </h2>
              <p className="text-lg text-slate-600 font-medium font-sans max-w-2xl">
                Discover the latest trends in digital marketing, design tips, and stories from our alumni.
              </p>
            </div>
            <div className="hidden md:block shrink-0">
              <EclipseButton variant="outline">View All Articles</EclipseButton>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {/* Article 1 */}
            <motion.article 
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden group flex flex-col hover:border-slate-300 transition-colors shadow-sm hover:shadow-lg"
            >
              <div className="aspect-video bg-slate-100 w-full overflow-hidden relative">
                <Image 
                  src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_600/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg" 
                  alt="Design Trends" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Design
                </div>
                <h3 className="text-xl font-bold font-sans text-slate-900 mb-3 group-hover:text-cihBlue transition-colors">
                  10 UI Trends Shaping the Future of Web Apps
                </h3>
                <p className="text-slate-600 font-medium mb-6 flex-grow line-clamp-3">
                  Explore how micro-interactions, dark mode strategies, and glassmorphism are redefining user experiences in modern web applications.
                </p>
                <a href="#" className="inline-flex items-center text-cihLightBlue font-bold hover:text-cihBlue transition-colors group/link w-fit">
                  Read More 
                  <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.article>

            {/* Article 2 */}
            <motion.article 
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden group flex flex-col hover:border-slate-300 transition-colors shadow-sm hover:shadow-lg"
            >
              <div className="aspect-video bg-slate-100 w-full overflow-hidden relative">
                <Image 
                  src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_600/DMM_pz1swq.png" 
                  alt="Marketing Trends" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Marketing
                </div>
                <h3 className="text-xl font-bold font-sans text-slate-900 mb-3 group-hover:text-cihBlue transition-colors">
                  The Power of Data-Driven Storytelling
                </h3>
                <p className="text-slate-600 font-medium mb-6 flex-grow line-clamp-3">
                  Learn how to leverage analytics to craft compelling narratives that resonate with your audience and drive actual business conversions.
                </p>
                <a href="#" className="inline-flex items-center text-cihLightBlue font-bold hover:text-cihBlue transition-colors group/link w-fit">
                  Read More 
                  <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.article>

            {/* Article 3 */}
            <motion.article 
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden group flex flex-col hover:border-slate-300 transition-colors shadow-sm hover:shadow-lg"
            >
              <div className="aspect-video bg-slate-100 w-full overflow-hidden relative">
                <Image 
                  src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_600/Modify_business_owner_image_2K_20260919125210_hswh8s.jpg" 
                  alt="Community Spotlight" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                  Community
                </div>
                <h3 className="text-xl font-bold font-sans text-slate-900 mb-3 group-hover:text-cihBlue transition-colors">
                  Alumni Spotlight: Building a SaaS in 30 Days
                </h3>
                <p className="text-slate-600 font-medium mb-6 flex-grow line-clamp-3">
                  Read how one of our bootcamp graduates went from absolute beginner to launching a fully functional SaaS product that generates recurring revenue.
                </p>
                <a href="#" className="inline-flex items-center text-cihLightBlue font-bold hover:text-cihBlue transition-colors group/link w-fit">
                  Read More 
                  <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
