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
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[85vh]">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dykvipays/image/upload/Modify_business_owner_image_2K_20260919125210_hswh8s.jpg"
          alt="Cafe Innovate Hub Background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>

        <motion.div 
          className="relative w-full max-w-5xl mx-auto text-center z-10"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          {/* Floating Pill 1: Graphic Design */}
          <motion.div
            className="hidden md:flex absolute top-0 left-4 rotate-[-6deg]"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -10, 0] 
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              scale: { duration: 0.6, delay: 0.3 },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }
            }}
          >
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cihLightBlue" />
              <span className="text-sm font-bold text-white">Graphic Design</span>
            </div>
          </motion.div>

          {/* Floating Pill 2: Digital Marketing */}
          <motion.div
            className="hidden md:flex absolute -bottom-4 right-4 rotate-[4deg]"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, 10, 0] 
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              scale: { duration: 0.6, delay: 0.4 },
              y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" }
            }}
          >
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cihYellow" />
              <span className="text-sm font-bold text-white">Digital Marketing</span>
            </div>
          </motion.div>

          {/* H1 */}
          <motion.h1 
            className="font-bricolage text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Practical digital skills for<br />
            real business growth.
          </motion.h1>

          <motion.p 
            className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Empowering business owners and young professionals with digital skills to improve their business and career.
          </motion.p>
          
          {/* Hero CTAs */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-4 justify-center relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <EclipseButton variant="primary">
              Explore Our Trainings
            </EclipseButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="relative py-16 bg-slate-50 border-y border-slate-200 shadow-xs z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-cihBlue tracking-tight max-w-3xl mx-auto">
              A year of real impact, one person and one business at a time.
            </h2>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 md:divide-x divide-slate-200 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {/* Stat 1: 50+ */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-4 transition-transform hover:-translate-y-1">
              <AnimatedCounter 
                value={50} 
                suffix="+" 
                className="font-bricolage text-5xl md:text-6xl font-black text-cihBlue tracking-tighter" 
              />
              <p className="mt-3 text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                Businesses Trained
              </p>
            </motion.div>

            {/* Stat 2: 200+ */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-4 transition-transform hover:-translate-y-1">
              <AnimatedCounter 
                value={200} 
                suffix="+" 
                className="font-bricolage text-5xl md:text-6xl font-black text-cihBlue tracking-tighter" 
              />
              <p className="mt-3 text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                Professionals Trained
              </p>
            </motion.div>

            {/* Stat 3: 5 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-4 transition-transform hover:-translate-y-1">
              <AnimatedCounter 
                value={5} 
                className="font-bricolage text-5xl md:text-6xl font-black text-cihBlue tracking-tighter" 
              />
              <p className="mt-3 text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                Cohorts Run
              </p>
            </motion.div>

            {/* Stat 4: Bi-monthly */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-4 transition-transform hover:-translate-y-1">
              <div className="font-bricolage text-4xl md:text-5xl font-black text-cihBlue tracking-tighter leading-tight">
                Bi monthly
              </div>
              <p className="mt-3 text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">
                free live webinars
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-24 bg-white border-b border-slate-200 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-cihBlue tracking-tight">
              What We Do
            </h2>
            <div className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed space-y-6">
              <p>
                Cafe Innovate Hub is a digital skills accelerator helping small business owners and young Professionals grow through practical, accessible digital skills training programs.
              </p>
              <p>
                From digital marketing to graphic design, we teach the skills that turn a phone and an internet connection into real opportunity, and we keep it affordable so cost is never the reason someone or a business, gets left behind.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section with Top-Down Layout */}
      <section id="programs" className="relative py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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

      {/* About Section */}
      <section id="about" className="relative py-24 bg-gradient-to-b from-slate-50 to-blue-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:min-h-[600px] relative">
            
            {/* Left Side: Origin Story */}
            <motion.div 
              className="relative lg:pr-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="space-y-6">
                <span className="text-sm font-bold text-cihLightBlue uppercase tracking-widest">
                  Our Origin Story
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-cihBlue tracking-tight leading-[1.1]">
                  Built by founders,<br /> for founders.
                </h2>
                <div className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed">
                  <p>
                    Cafe Innovate Hub started with a simple observation: raw talent is everywhere, but access to structured digital training, mentorship, and premium resources is gatekept by geography and cost.
                  </p>
                  <p>
                    We set out to build more than just a bootcamp or a training program. We created a virtual ecosystem where learning digital skills naturally flows into real-world collaboration and business growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Image and Floating Cards */}
            <div className="relative w-full h-[500px] lg:h-[600px] mt-12 lg:mt-0">
              
              {/* Main Background Image */}
              <div className="absolute right-0 top-0 w-[95%] sm:w-[85%] h-full rounded-[2rem] shadow-2xl overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_1000/Upscale_image_and_remove_noise_2K_20260919152445_kwspty.jpg" 
                  alt="Cafe Innovate Hub Team" 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card 1: Mission (Floating) */}
              <motion.div 
                className="absolute top-8 left-0 lg:-left-8 z-10 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 p-8 shadow-2xl w-[85%] sm:w-[75%] max-w-[340px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cihBlue text-white shadow-md mb-4">
                  {/* Untitled UI Target / Mission Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  To democratize access to premium digital education and professional networks, empowering the next generation of creatives and tech entrepreneurs to build sustainable businesses.
                </p>
              </motion.div>

              {/* Card 2: Vision (Floating) */}
              <motion.div 
                className="absolute bottom-8 left-6 lg:left-8 z-20 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/40 p-8 shadow-2xl w-[85%] sm:w-[75%] max-w-[340px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cihLightBlue text-cihBlueDark shadow-md mb-4">
                  {/* Untitled UI Eye / Vision Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-700 font-medium leading-relaxed">
                  A globally connected network of digital hubs where innovation thrives, transforming talent into global digital leaders who drive real economic impact.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-slate-600 font-medium font-sans">
              The passionate minds behind Cafe Innovate Hub, dedicated to empowering the next generation of digital leaders.
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {/* Team Member 1: Mercy Kowu */}
            <motion.div variants={cardVariants} className="bg-white border border-slate-200 rounded-3xl flex flex-col shadow-sm hover:shadow-lg transition-shadow relative group overflow-hidden">
              {/* Image container acts as a full-width header */}
              <div className="w-full bg-gradient-to-b from-blue-50 to-blue-100 relative pt-[80%] sm:pt-[100%] overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/dykvipays/image/upload/539088.jpg_iylwly.jpg" 
                  alt="Mercy Kowu" 
                  fill
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Text container below the image */}
              <div className="p-6 sm:p-8 relative flex-grow flex flex-col">
                <div className="absolute -top-6 right-6 z-10">
                  <a href="https://www.linkedin.com/in/mercy-kowu-523732407/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 hover:text-cihBlue shadow-md transition-all border border-slate-100 hover:scale-110" aria-label="LinkedIn Profile">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
                <h3 className="text-2xl font-bold font-sans text-slate-900 mb-1">Mercy Kowu</h3>
                <p className="text-cihLightBlue font-bold text-sm font-sans uppercase tracking-widest mb-4">Community Manager</p>
                <p className="text-slate-600 font-medium font-sans leading-relaxed mt-auto">
                  Nursing student at Obafemi Awolowo University who also explores project management, community management, and content strategy. As Community Manager at Cafe Innovate Hub, she builds and engages a vibrant community while driving strategic initiatives.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2: Peaceland Nmesoma Obiechefu */}
            <motion.div variants={cardVariants} className="bg-white border border-slate-200 rounded-3xl flex flex-col shadow-sm hover:shadow-lg transition-shadow relative group overflow-hidden">
              {/* Image container acts as a full-width header */}
              <div className="w-full bg-gradient-to-b from-blue-50 to-blue-100 relative pt-[80%] sm:pt-[100%] overflow-hidden">
                <Image 
                  src="https://res.cloudinary.com/dykvipays/image/upload/c02d90d3-6b4d-4758-84da-9c908a33e54c_derstt.jpg" 
                  alt="Peaceland Nmesoma Obiechefu" 
                  fill
                  className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Text container below the image */}
              <div className="p-6 sm:p-8 relative flex-grow flex flex-col">
                <div className="absolute -top-6 right-6 z-10">
                  <a href="https://www.linkedin.com/in/peaceland-obiechefu/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 hover:text-cihBlue shadow-md transition-all border border-slate-100 hover:scale-110" aria-label="LinkedIn Profile">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
                <h3 className="text-2xl font-bold font-sans text-slate-900 mb-1">Peaceland Nmesoma Obiechefu</h3>
                <p className="text-cihLightBlue font-bold text-sm font-sans uppercase tracking-widest mb-4">Virtual Assistant</p>
                <p className="text-slate-600 font-medium font-sans leading-relaxed mt-auto">
                  Virtual Assistant specializing in partnership research, digital operations, and executive support. Over 3 years helping founders stay organized, building databases, and running content systems. B.Sc. from Imo State University, based in Enugu.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section (Continuous Marquee) */}
      <section id="community" className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden flex flex-col items-center relative">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
            Real people. Real growth.
          </h2>
          <p className="text-lg text-slate-600 font-medium font-sans">
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
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-cihBlue text-white border-t border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-300 font-medium leading-relaxed font-sans">
              Everything you need to know about our programs, mentorship, and community.
            </p>
          </motion.div>
          
          <FaqAccordion />
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
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
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
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
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
                <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500"></div>
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
