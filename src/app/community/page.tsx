"use client";

import Image from "next/image";
import EclipseButton from "@/components/ui/eclipse-button";

export default function CommunityPage() {
  const benefits = [
    {
      title: "Connect with peers",
      description: "Connect with other business owners and professionals on the same journey as you.",
      icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    },
    {
      title: "First access",
      description: "Get first access to new trainings, workshops, and exclusive opportunities.",
      icon: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    },
    {
      title: "Be celebrated",
      description: "Be featured and celebrated for the work you are doing in your industry.",
      icon: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    },
    {
      title: "Grow together",
      description: "Learn alongside people who genuinely want to see you grow and succeed.",
      icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> // Replacing with group icon for now
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cihBlue via-cihBlue to-cihBlueDark opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bricolage font-black tracking-tight mb-6">
            Join the Community
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Cafe Innovate Hub is a growing community of business owners and young professionals who are learning, building, and supporting each other along the way.
          </p>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
              Why join?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 text-center flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm text-cihLightBlue mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {benefit.icon}
                    {idx === 0 && <circle cx="9" cy="7" r="4"></circle>}
                    {idx === 2 && <polyline points="22 4 12 14.01 9 11.01"></polyline>}
                    {idx === 3 && <>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </>}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
              Meet our community
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Meet a few of the people and businesses growing with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Member 1 */}
            <div className="bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                  <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                  <path d="M10 11c0 2.5-1.5 5-4 6"/>
                  <path d="M21 11c0 2.5-1.5 5-4 6"/>
                </svg>
                <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                  "Since I joined Cafe Innovate Hub, I have learned how to market my business more intentionally. I learned useful tips on using Facebook Marketplace, Instagram, creating better captions, and knowing what kind of content to post."
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

            {/* Member 2 */}
            <div className="bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
              <div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                  <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                  <path d="M10 11c0 2.5-1.5 5-4 6"/>
                  <path d="M21 11c0 2.5-1.5 5-4 6"/>
                </svg>
                <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                  "Since connecting with Cafe Innovate Hub, I have gained tremendous value. The community introduced me to powerful digital tools. I frequently leverage CapCut, Facebook Marketplace, and Ads to promote my brand."
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-cihBlue tracking-tight mb-8">
            Ready to be part of it?
          </h2>
          <a href="https://wa.me/2349030898649" target="_blank" rel="noopener noreferrer">
            <EclipseButton variant="primary" className="px-8 py-4 text-lg">
              Join the Community
            </EclipseButton>
          </a>
        </div>
      </section>
    </div>
  );
}
