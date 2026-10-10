import Image from "next/image";
import EclipseButton from "@/components/ui/eclipse-button";
import { client } from "../../../../sanity/client";
import { urlFor } from "../../../../sanity/image";
import { notFound } from "next/navigation";

export const revalidate = 10;

export default async function DynamicProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const query = `*[_type == "program" && slug.current == $slug][0]`;
  const program = await client.fetch(query, { slug });

  if (!program) {
    notFound();
  }

  const autoplayEmbed = program.videoEmbedCode?.replace(/src="([^"]+)"/, (match: string, url: string) => `src="${url}${url.includes('?') ? '&' : '?'}autoplay=1&mute=1"`);

  return (
    <div className="min-h-[100dvh] bg-slate-50 font-sans pb-24">
      {/* Hero Section (Gradient + Video) */}
      <section className="relative w-full bg-gradient-to-br from-cihYellow to-cihBlue overflow-hidden pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto py-16 px-6 relative z-10">
          
          {/* Hero Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-cihBlue"></span>
              {program.duration || 'Program'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-black text-white leading-tight max-w-xl">
              {program.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium max-w-lg">
              {program.shortDescription}
            </p>
          </div>

          {/* Hero Right (Video Player or Cover) */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-slate-900 relative">
            {program.videoEmbedCode ? (
              <div className="aspect-video w-full overflow-hidden rounded-xl [&>iframe]:w-full [&>iframe]:h-full" dangerouslySetInnerHTML={{ __html: autoplayEmbed }} />
            ) : program.coverImage ? (
              <Image 
                src={urlFor(program.coverImage).url()} 
                alt={program.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full text-slate-500 font-medium">
                Media coming soon
              </div>
            )}
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
                {program.shortDescription}
              </p>
            </div>

            {/* Who it is for */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-cihBlue mb-4">Who it is for</h2>
              <p className="text-slate-600 font-medium leading-relaxed text-lg">
                {program.targetAudience}
              </p>
            </div>

            {/* What you will learn - Hardcoded template block */}
            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-cihBlue mb-6">What you will learn</h2>
              <ul className="space-y-4">
                {[
                  "The basics and fundamentals",
                  "How to use standard industry tools",
                  "How to build a consistent look and system",
                  "Intensive practice and case studies"
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
                  <p className="text-slate-800 font-bold mb-2">{program.duration}</p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Cost</div>
                  <p className="text-2xl font-black text-cihBlue">{program.cost}</p>
                </div>

                <div className="pt-6">
                  <a href={program.registrationLink || '#'} className="block w-full">
                    <EclipseButton variant="primary" className="w-full justify-center py-4 text-lg">
                      Apply Now
                    </EclipseButton>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

