"use client";

import { motion, Variants } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import EclipseButton from "@/components/ui/eclipse-button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Image from "next/image";

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
            Practical digital skills.<br />
            Real business growth.
          </motion.h1>

          <motion.p 
            className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Empower your career and scale your business with hands-on training, expert mentorship, and a community of innovators at Cafe Innovate Hub.
          </motion.p>
          
          {/* Hero CTAs */}
          <motion.div 
            className="mt-10 flex flex-wrap gap-4 justify-center relative z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <EclipseButton variant="primary">
              Start Learning
            </EclipseButton>
            <EclipseButton variant="outline">
              Explore Programs
            </EclipseButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="relative py-16 bg-slate-50 border-y border-slate-200 shadow-xs z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {/* Stat 1: 200+ */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-6 transition-transform hover:-translate-y-1">
              <AnimatedCounter 
                value={200} 
                suffix="+" 
                className="font-bricolage text-6xl md:text-7xl font-black text-cihBlue tracking-tighter" 
              />
              <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                Students Trained
              </p>
            </motion.div>

            {/* Stat 2: 50+ */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-6 transition-transform hover:-translate-y-1">
              <AnimatedCounter 
                value={50} 
                suffix="+" 
                className="font-bricolage text-6xl md:text-7xl font-black text-cihBlue tracking-tighter" 
              />
              <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                Business Partners
              </p>
            </motion.div>

            {/* Stat 3: 5 */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center p-6 transition-transform hover:-translate-y-1">
              <AnimatedCounter 
                value={5} 
                className="font-bricolage text-6xl md:text-7xl font-black text-cihBlue tracking-tighter" 
              />
              <p className="mt-4 text-sm font-bold text-slate-500 uppercase tracking-widest">
                Core Programs
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section with Split Layout & Staggered Bento Cards */}
      <section className="relative py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
            
            {/* Left Side: Sticky Heading */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="lg:sticky lg:top-32 space-y-6">
                <h2 className="text-4xl md:text-5xl font-extrabold text-cihBlue tracking-tight leading-[1.1]">
                  Our Training Programs
                </h2>
                <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md">
                  Master industry-leading skills through hands-on, intensive bootcamps designed for real-world impact and immediate business growth.
                </p>
                <div className="pt-4">
                  <EclipseButton variant="outline">
                    View Full Catalog
                  </EclipseButton>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Staggered Bento Cards Cascade */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={containerVariants}
            >
              {/* Card 1: Graphic Design Bootcamp */}
              <motion.div 
                variants={cardVariants}
                className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-cihLightBlue/50 flex flex-col sm:flex-row gap-6 items-start justify-between"
              >
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-cihBlue/5 text-cihBlue group-hover:scale-110 group-hover:bg-cihBlue group-hover:text-white transition-all duration-300">
                    {/* Untitled UI Layers / Design Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Graphic Design Bootcamp</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Master visual communication, branding, and UI design using industry-standard tools like Figma, Illustrator, and Photoshop. Create a portfolio that converts.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 pt-4 sm:pt-0">
                  <EclipseButton variant="primary">
                    Apply Now
                  </EclipseButton>
                </div>
              </motion.div>

              {/* Card 2: Digital Marketing */}
              <motion.div 
                variants={cardVariants}
                className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-cihLightBlue/50 flex flex-col sm:flex-row gap-6 items-start justify-between"
              >
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-cihBlue/5 text-cihBlue group-hover:scale-110 group-hover:bg-cihBlue group-hover:text-white transition-all duration-300">
                    {/* Untitled UI Trending Up / Growth Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Digital Marketing</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Drive scalable growth through advanced SEO, paid media strategies, social commerce, and data-driven marketing campaigns.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 pt-4 sm:pt-0">
                  <EclipseButton variant="primary">
                    Apply Now
                  </EclipseButton>
                </div>
              </motion.div>

              {/* Card 3: D-DAM */}
              <motion.div 
                variants={cardVariants}
                className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-cihLightBlue/50 flex flex-col sm:flex-row gap-6 items-start justify-between"
              >
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-cihBlue/5 text-cihBlue group-hover:scale-110 group-hover:bg-cihBlue group-hover:text-white transition-all duration-300">
                    {/* Untitled UI Database / Analytics Icon */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">D-DAM</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Digital Data Analytics & Management. Transform raw data into strategic business insights using industry tools, dashboarding, and analytics infrastructure.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 pt-4 sm:pt-0">
                  <EclipseButton variant="primary">
                    Apply Now
                  </EclipseButton>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-blue-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 relative">
            
            {/* Left Side: Sticky Origin Story */}
            <motion.div 
              className="relative lg:pr-12"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <div className="lg:sticky lg:top-32 space-y-6">
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

            {/* Right Side: Overlapping Glass Cards */}
            <div className="relative pt-10 pb-20 lg:py-10">
              {/* Card 1: Mission */}
              <motion.div 
                className="relative z-10 rounded-3xl bg-white/70 backdrop-blur-lg border border-white p-8 md:p-10 shadow-xl shadow-slate-200/50 w-[90%] md:w-[85%]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cihBlue text-white shadow-md mb-6">
                  {/* Untitled UI Target / Mission Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  To democratize access to premium digital education and professional networks, empowering the next generation of creatives and tech entrepreneurs to build sustainable businesses.
                </p>
              </motion.div>

              {/* Card 2: Vision */}
              <motion.div 
                className="relative z-20 rounded-3xl bg-white/70 backdrop-blur-lg border border-white p-8 md:p-10 shadow-xl shadow-slate-200/50 w-[90%] md:w-[85%] ml-auto -mt-16 md:-mt-24"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cihLightBlue text-cihBlueDark shadow-md mb-6">
                  {/* Untitled UI Eye / Vision Icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
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
            <motion.div variants={cardVariants} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow relative group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Image 
                    src="https://res.cloudinary.com/dykvipays/image/upload/539088.jpg_iylwly.jpg" 
                    alt="Mercy Kowu" 
                    width={64} 
                    height={64} 
                    className="w-16 h-16 rounded-full object-cover shadow-sm ring-4 ring-slate-50"
                  />
                  <a href="https://www.linkedin.com/in/mercy-kowu-523732407/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cihBlue transition-colors" aria-label="LinkedIn Profile">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
                <h3 className="text-2xl font-bold font-sans text-slate-900 mb-1">Mercy Kowu</h3>
                <p className="text-cihLightBlue font-bold text-sm font-sans uppercase tracking-widest mb-4">Community Manager</p>
                <p className="text-slate-600 font-medium font-sans leading-relaxed">
                  Nursing student at Obafemi Awolowo University who also explores project management, community management, and content strategy. As Community Manager at Cafe Innovate Hub, she builds and engages a vibrant community while driving strategic initiatives.
                </p>
              </div>
            </motion.div>
            
            {/* Team Member 2: Peaceland Nmesoma Obiechefu */}
            <motion.div variants={cardVariants} className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-lg transition-shadow relative group">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <Image 
                    src="https://res.cloudinary.com/dykvipays/image/upload/c02d90d3-6b4d-4758-84da-9c908a33e54c_derstt.jpg" 
                    alt="Peaceland Nmesoma Obiechefu" 
                    width={64} 
                    height={64} 
                    className="w-16 h-16 rounded-full object-cover shadow-sm ring-4 ring-slate-50"
                  />
                  <a href="https://www.linkedin.com/in/peaceland-obiechefu/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cihBlue transition-colors" aria-label="LinkedIn Profile">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
                <h3 className="text-2xl font-bold font-sans text-slate-900 mb-1">Peaceland Nmesoma Obiechefu</h3>
                <p className="text-cihLightBlue font-bold text-sm font-sans uppercase tracking-widest mb-4">Virtual Assistant</p>
                <p className="text-slate-600 font-medium font-sans leading-relaxed">
                  Virtual Assistant specializing in partnership research, digital operations, and executive support. Over 3 years helping founders stay organized, building databases, and running content systems. B.Sc. from Imo State University, based in Enugu.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section (Continuous Marquee) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden flex flex-col items-center relative">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <h2 className="text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
            Hear from Our Community
          </h2>
          <p className="text-lg text-slate-600 font-medium font-sans">
            Success stories from the designers, marketers, and founders who call Cafe Innovate Hub their home.
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
                <div className="w-[350px] md:w-[420px] min-w-[350px] bg-cihBlue text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-white text-lg font-medium font-sans leading-relaxed mb-8">
                      "Since I joined Cafe Innovate Hub, I have learned how to market my business more intentionally. I learned useful tips on using Facebook Marketplace, Instagram, creating better captions, and knowing what kind of content to post. I am now more intentional and consistent with how I promote Midefreshmart online."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans ring-2 ring-white/10">
                      MF
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans">@MideFreshMart</h4>
                      <p className="text-cihLightBlue text-sm font-medium font-sans">Community Member</p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="w-[350px] md:w-[420px] min-w-[350px] bg-cihBlue text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-white text-lg font-medium font-sans leading-relaxed mb-8">
                      "Since connecting with Cafe Innovate Hub, I have gained tremendous value. The community introduced me to powerful digital tools. I frequently leverage CapCut, Facebook Marketplace, and Ads to promote my brand. These skills, combined with practical tips on consistent content creation and audience engagement, have significantly strengthened my brand’s online presence."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="shrink-0 w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/20">
                      <Image 
                        src="https://res.cloudinary.com/dykvipays/image/upload/556300.jpg_uxifis.jpg"
                        alt="Mr Olumide"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans">Mr Olumide</h4>
                      <p className="text-cihLightBlue text-sm font-medium font-sans">@Declutterify.Ng</p>
                    </div>
                  </div>
                </div>

                {/* Card 3 (Duplicate of 1 for scrolling width) */}
                <div className="w-[350px] md:w-[420px] min-w-[350px] bg-cihBlue text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-white text-lg font-medium font-sans leading-relaxed mb-8">
                      "Since I joined Cafe Innovate Hub, I have learned how to market my business more intentionally. I learned useful tips on using Facebook Marketplace, Instagram, creating better captions, and knowing what kind of content to post. I am now more intentional and consistent with how I promote Midefreshmart online."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans ring-2 ring-white/10">
                      MF
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-sans">@MideFreshMart</h4>
                      <p className="text-cihLightBlue text-sm font-medium font-sans">Community Member</p>
                    </div>
                  </div>
                </div>

                {/* Card 4 (Duplicate of 2 for scrolling width) */}
                <div className="w-[350px] md:w-[420px] min-w-[350px] bg-cihBlue text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between shrink-0">
                  <div>
                    {/* Untitled UI Quote Icon (White) */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                      <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                      <path d="M10 11c0 2.5-1.5 5-4 6"/>
                      <path d="M21 11c0 2.5-1.5 5-4 6"/>
                    </svg>
                    <p className="text-white text-lg font-medium font-sans leading-relaxed mb-8">
                      "Since connecting with Cafe Innovate Hub, I have gained tremendous value. The community introduced me to powerful digital tools. I frequently leverage CapCut, Facebook Marketplace, and Ads to promote my brand. These skills, combined with practical tips on consistent content creation and audience engagement, have significantly strengthened my brand’s online presence."
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="shrink-0 w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/20">
                      <Image 
                        src="https://res.cloudinary.com/dykvipays/image/upload/556300.jpg_uxifis.jpg"
                        alt="Mr Olumide"
                        fill
                        className="object-cover"
                      />
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
      <section className="py-24 bg-slate-50 border-t border-slate-200">
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
