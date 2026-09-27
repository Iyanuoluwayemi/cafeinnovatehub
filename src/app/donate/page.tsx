import React from 'react';
import EclipseButton from '@/components/ui/eclipse-button';
import Link from 'next/link';

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <main className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cihBlue/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 bg-white p-10 md:p-16 rounded-[2rem] shadow-2xl border border-slate-100 transition-all duration-500 hover:shadow-3xl">
          <div className="w-20 h-20 mx-auto mb-8 bg-cihYellow/20 rounded-2xl flex items-center justify-center text-cihYellow shadow-inner">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bricolage font-black text-slate-900 tracking-tight mb-6">
            Support Digital Empowerment
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            Your generous contributions enable Cafe Innovate Hub to train young professionals and empower MSMEs with the critical digital skills needed to thrive in today's economy. Together, we are building a more innovative future.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="mailto:cafeinnovate@gmail.com">
              <EclipseButton variant="yellow" className="py-4 px-8 text-lg font-bold w-full sm:w-auto shadow-lg hover:-translate-y-1 transition-all duration-500">
                Make a Donation
              </EclipseButton>
            </Link>
            <Link href="/contact">
              <EclipseButton variant="outline" className="py-4 px-8 text-lg font-bold w-full sm:w-auto">
                Contact Us
              </EclipseButton>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
