"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bricolage font-black tracking-tight mb-6">
            About Cafe Innovate Hub
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Learn more about our story, our mission, and the team behind the vision.
          </p>
        </div>
      </section>

      {/* Origin Story, Mission, Vision */}
      <section className="relative py-24 bg-gradient-to-b from-slate-50 to-blue-50 border-b border-slate-200 overflow-hidden">
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
      <section className="py-24 bg-white relative overflow-hidden z-10 border-y border-slate-200">
        {/* Subtle Grid & Ambient Lighting */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cihLightBlue/[0.04] rounded-full blur-[120px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bricolage font-black text-cihBlue tracking-tight mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-slate-600 font-medium font-sans">
              The passionate minds behind Cafe Innovate Hub, dedicated to empowering the next generation of digital leaders.
            </p>
          </div>
          
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {/* Column 1: Hope */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              {/* Hope Image */}
              <motion.div variants={cardVariants} className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-md group">
                <Image src="https://res.cloudinary.com/dykvipays/image/upload/mrs_hope_k5peg3.png" alt="Hope Ukaegbu-Michail" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-[#0a0f0d]/95 backdrop-blur-md px-5 py-3 rounded-full flex items-center justify-between lg:justify-start gap-4 shadow-xl border border-white/10">
                  <div>
                    <p className="font-bold text-white text-sm leading-tight">Hope Ukaegbu-Michail</p>
                    <p className="text-xs text-slate-300 font-medium">Founder</p>
                  </div>
                  <a href="https://www.linkedin.com/in/hope-ukaegbu/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#0a0f0d] rounded-full p-1.5 w-7 h-7 flex items-center justify-center hover:bg-slate-200 transition-colors shrink-0 shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </motion.div>
              {/* Hope Bio */}
              <motion.div variants={cardVariants} className="bg-[#0a0f0d] text-white rounded-[2rem] p-8 shadow-xl flex flex-col relative overflow-hidden flex-grow">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cihBlue/20 rounded-full blur-[80px] pointer-events-none"></div>
                <h3 className="text-2xl font-bricolage font-bold mb-4 text-white relative z-10">Driving Digital Transformation</h3>
                <div className="text-slate-300 text-sm font-medium leading-relaxed space-y-4 relative z-10">
                  <p>Hope Ukaegbu-Michail is a digital transformation advocate passionate about helping young people, entrepreneurs, and small businesses gain practical digital skills that improve their careers, visibility, and business growth.</p>
                  <p>As the Founder and Program Coordinator, she designs and leads hands-on initiatives focused on the digital transformation of MSMEs, focusing on real-world application rather than theory alone.</p>
                  <p>Her work is centred on expanding access to affordable digital learning and helping MSMEs adopt simple, effective tools to connect with customers and thrive in the digital economy.</p>
                </div>
              </motion.div>
            </div>

            {/* Column 2: Peaceland */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              {/* Peaceland Bio */}
              <motion.div variants={cardVariants} className="bg-blue-50 rounded-[2rem] p-8 shadow-md flex flex-col flex-grow">
                <h3 className="text-2xl font-bricolage font-bold text-cihBlue mb-4">Operations & Partnerships</h3>
                <div className="text-slate-700 text-sm font-medium leading-relaxed space-y-4">
                  <p>Peaceland Obiechefu is an Executive Assistant and Partnerships Associate with over three years of experience in executive support, partnership research, digital operations, and content management.</p>
                  <p>She supports business operations, partnerships, and growth initiatives at Café Innovate Hub. She holds a B.Sc. from Imo State University and is based in Enugu, Nigeria.</p>
                </div>
              </motion.div>
              {/* Peaceland Image */}
              <motion.div variants={cardVariants} className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-md group">
                <Image src="https://res.cloudinary.com/dykvipays/image/upload/c02d90d3-6b4d-4758-84da-9c908a33e54c_derstt.jpg" alt="Peaceland Obiechefu" fill className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-blue-50/95 backdrop-blur-md px-5 py-3 rounded-full flex items-center justify-between lg:justify-start gap-4 shadow-xl border border-blue-100">
                  <div>
                    <p className="font-bold text-cihBlue text-sm leading-tight">Peaceland Obiechefu</p>
                    <p className="text-xs text-slate-600 font-medium">Executive Assistant</p>
                  </div>
                  <a href="https://www.linkedin.com/in/peaceland-obiechefu/" target="_blank" rel="noopener noreferrer" className="bg-cihBlue text-white rounded-full p-1.5 w-7 h-7 flex items-center justify-center hover:bg-cihBlueDark transition-colors shrink-0 shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Column 3: Mercy */}
            <div className="flex flex-col gap-6 w-full lg:w-1/3">
              {/* Mercy Image */}
              <motion.div variants={cardVariants} className="relative rounded-[2rem] overflow-hidden aspect-square shadow-md group">
                <Image src="https://res.cloudinary.com/dykvipays/image/upload/539088.jpg_iylwly.jpg" alt="Mercy Kowu" fill className="object-cover object-bottom group-hover:scale-105 transition-transform duration-700 ease-in-out" />
                <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-cihYellow/95 backdrop-blur-md px-5 py-3 rounded-full flex items-center justify-between lg:justify-start gap-4 shadow-xl border border-yellow-300">
                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-tight">Mercy Kowu</p>
                    <p className="text-xs text-slate-700 font-medium">Community Manager</p>
                  </div>
                  <a href="https://www.linkedin.com/in/mercy-kowu-523732407/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white rounded-full p-1.5 w-7 h-7 flex items-center justify-center hover:bg-slate-800 transition-colors shrink-0 shadow-sm">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </motion.div>
              {/* Mercy Bio */}
              <motion.div variants={cardVariants} className="bg-cihYellow text-slate-900 rounded-[2rem] p-8 shadow-md flex flex-col flex-grow">
                <h3 className="text-2xl font-bricolage font-bold mb-4">Building the Community</h3>
                <div className="text-slate-800 text-sm font-medium leading-relaxed space-y-4">
                  <p>Mercy Kowu is a Nursing student at Obafemi Awolowo University who also explores project management, community management, and content strategy.</p>
                  <p>As Community Manager at Cafe Innovate Hub, she builds and engages a vibrant community while driving strategic initiatives.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
