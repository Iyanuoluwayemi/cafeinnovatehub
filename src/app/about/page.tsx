import Image from "next/image";
import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/image";
import { MotionDiv } from "@/components/ui/motion-wrapper";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const cardBgs = [
  "bg-[#0a0f0d] text-white",
  "bg-blue-50 text-slate-900",
  "bg-cihYellow text-slate-900"
];

const tagBgs = [
  "bg-[#0a0f0d]/95 text-white border border-white/10",
  "bg-blue-50/95 text-cihBlue border border-blue-100",
  "bg-cihYellow/95 text-slate-900 border border-yellow-300"
];

const nameColors = [
  "text-white",
  "text-cihBlue",
  "text-slate-900"
];

const roleColors = [
  "text-slate-300",
  "text-slate-600",
  "text-slate-700"
];

const buttonBgs = [
  "bg-white text-[#0a0f0d] hover:bg-slate-200",
  "bg-cihBlue text-white hover:bg-cihBlueDark",
  "bg-slate-900 text-white hover:bg-slate-800"
];

export default async function AboutPage() {
  const teamMembers = await client.fetch("*[_type == 'team'] | order(displayOrder asc)");

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionDiv 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-bricolage font-black tracking-tight mb-6">
              About Us
            </h1>
            <p className="text-xl text-cihLightBlue font-medium leading-relaxed">
              We are building the premier innovation hub where founders, developers, creators, and technology leaders converge to fuel ideas and brew innovation.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Origin Story & Vision */}
      <section className="py-24 bg-white relative overflow-hidden z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:min-h-[600px] relative">
            
            {/* Left Side: Origin Story */}
            <MotionDiv 
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
            </MotionDiv>

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
              <MotionDiv 
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
              </MotionDiv>

              {/* Card 2: Vision (Floating) */}
              <MotionDiv 
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
              </MotionDiv>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member: any, index: number) => {
              // 1. Math to determine the alternating layout
              const isEven = index % 2 === 0;
              
              // 2. Your alternating brand colors
              const bgColors = [
                'bg-[#0f172a] text-white', // Dark Slate for Hope
                'bg-[#f0f9ff] text-slate-900', // Light Blue for Peace
                'bg-[#facc15] text-slate-900', // Yellow for Mercy
                'bg-[#0f172a] text-white'  // Dark Slate for you
              ];
              const colorClass = bgColors[index % bgColors.length];

              return (
                <MotionDiv 
                  key={member._id} 
                  variants={cardVariants} 
                  className="flex flex-col gap-6"
                >
                  
                  {/* IMAGE BLOCK */}
                  <div className={`relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-md group bg-slate-200 ${isEven ? 'order-1' : 'order-2'}`}>
                    {member.image ? (
                      <Image 
                        src={urlFor(member.image).url()} 
                        alt={member.name} 
                        fill 
                        className="object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 p-8 text-center">
                        Awaiting photo upload in Studio
                      </div>
                    )}
                    
                    {/* Floating Name Badge */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/90 backdrop-blur-md rounded-full p-3 px-5 flex justify-between items-center text-white">
                      <div>
                        <h3 className="font-bold text-sm">{member.name}</h3>
                        <p className="text-xs text-gray-300">{member.role}</p>
                      </div>
                      {/* Add your LinkedIn icon/link here if needed */}
                    </div>
                  </div>

                  {/* TEXT BLOCK */}
                  <div className={`rounded-[2rem] p-8 shadow-md flex flex-col justify-center ${colorClass} ${isEven ? 'order-2' : 'order-1'}`}>
                     <h3 className="text-xl font-bold mb-4">{member.role}</h3>
                     <p className="text-sm opacity-90 leading-relaxed">{member.bio}</p>
                  </div>

                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
