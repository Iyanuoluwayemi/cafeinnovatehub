import Image from "next/image";
import EclipseButton from "@/components/ui/eclipse-button";

export default function DDAMProgram() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Hero Section (Gradient + Video) */}
      <section className="relative w-full bg-gradient-to-br from-cihYellow to-cihBlue overflow-hidden pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto py-16 px-6 relative z-10">
          
          {/* Hero Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cihBlue"></span>
              Coming Soon
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-black text-white leading-tight max-w-xl">
              Driving Digital Adoption for MSMEs (D-DAM)
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-lg">
              Our flagship program designed to help MSMEs adopt the digital tools, skills and systems they need to compete and grow in a digital economy.
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
              <div className="space-y-4">
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  Our flagship program designed to help MSMEs adopt the digital tools, skills and systems they need to compete and grow in a digital economy.
                </p>
                <p className="text-slate-600 font-medium leading-relaxed text-lg">
                  This is the full digital transformation journey for your business.
                </p>
              </div>
            </div>

            {/* Who it is for */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-cihBlue mb-4">Who it is for</h2>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                MSMEs ready to move their entire business operations into a digital ecosystem.
              </p>
            </div>

            {/* Status Alert */}
            <div className="bg-cihBlue text-white rounded-[2rem] p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cihYellow"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                Status: Coming soon.
              </h2>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 text-slate-300 font-medium text-lg leading-relaxed">
                We are currently building out this program. Join the waitlist to be the first to know when applications open.
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
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Cost</div>
                  <p className="text-2xl font-black text-cihBlue">Free</p>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <EclipseButton variant="primary" className="w-full justify-center py-4 text-lg">
                    Join the Waitlist
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
