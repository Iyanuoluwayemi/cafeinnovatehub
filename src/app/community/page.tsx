import Image from "next/image";
import EclipseButton from "@/components/ui/eclipse-button";
import TestimonialCard, { Testimonial } from "@/components/ui/TestimonialCard";

import { client } from "../../../sanity/client";
import { urlFor } from "../../../sanity/image";

export const revalidate = 10;

export default async function CommunityPage() {
  const testimonials = await client.fetch("*[_type == 'testimonial']");
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
            
            {testimonials.length > 0 ? testimonials.map((test: Testimonial, idx: number) => (
                <TestimonialCard key={idx} test={test} />
              )) : (
              <div className="col-span-full text-center text-slate-500 py-12">
                No testimonials found.
              </div>
            )}
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
