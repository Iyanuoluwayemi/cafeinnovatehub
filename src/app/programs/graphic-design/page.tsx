import Image from "next/image";
import EclipseButton from "@/components/ui/eclipse-button";

export default function GraphicDesignProgram() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Hero Section (Gradient + Video) */}
      <section className="relative w-full bg-gradient-to-br from-cihYellow to-cihBlue overflow-hidden pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto py-16 px-6 relative z-10">
          
          {/* Hero Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cihBlue"></span>
              8 Weeks
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-black text-white leading-tight max-w-xl">
              Graphic Design Bootcamp
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-lg">
              A beginner friendly introduction to graphic design, built for anyone who wants to create professional looking visuals without hiring a designer.
            </p>
          </div>

          {/* Hero Right (Video Player) */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 relative">
            <iframe 
              src="YOUTUBE_LINK_HERE" 
              className="w-full h-full absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>

        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* What it is */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-cihBlue mb-4">What it is</h2>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                A beginner friendly introduction to graphic design, built for anyone who wants to create professional looking visuals without hiring a designer.
              </p>
            </div>

            {/* Who it is for */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-cihBlue mb-4">Who it is for</h2>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                Complete beginners. No design background or experience needed.
              </p>
            </div>

            {/* What you will learn */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-cihBlue mb-6">What you will learn</h2>
              <ul className="space-y-4">
                {[
                  "The basics of design, colour, layout and typography",
                  "How to use design tools to create professional graphics",
                  "How to design for social media, flyers, and simple branding",
                  "How to build a consistent look across everything you create",
                  "Intensive practice"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cihLightBlue shrink-0 mt-0.5">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <span className="text-slate-600 font-medium text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What past participants say */}
            <div className="bg-cihBlue text-white rounded-[2rem] p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4">What past participants say</h2>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 italic text-slate-300">
                Will provide testimonials, once available.
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar Info */}
          <div className="lg:col-span-1 lg:sticky lg:top-32 space-y-6">
            <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-100">
              
              <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">
                Program Details
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Duration and format</div>
                  <p className="text-slate-800 font-bold mb-2">Live Online classes across 2 cohorts every year</p>
                  <ul className="text-slate-600 font-medium space-y-1 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cihYellow"></div> Fundamentals (4 weeks)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cihLightBlue"></div> Advanced (4 Weeks)</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Cost</div>
                  <p className="text-2xl font-black text-cihBlue">Tuition Free.</p>
                  <p className="text-slate-500 font-medium text-sm mt-1">Commitment Fee: 1,000 NGN</p>
                </div>

                <div className="pt-6">
                  <EclipseButton variant="primary" className="w-full justify-center py-4 text-lg">
                    Apply Now
                  </EclipseButton>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
