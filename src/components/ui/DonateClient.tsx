"use client";

import React, { useState } from 'react';
import EclipseButton from '@/components/ui/eclipse-button';
import { toast } from 'sonner';

interface DonateData {
  headline?: string;
  heading?: string;
  description?: string;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
}

export default function DonateClient({ data }: { data?: DonateData | null }) {
  const [copied, setCopied] = useState(false);

  const headline = data?.headline || "Donate to support digital access";
  const heading = data?.heading || "Support Digital Empowerment";
  const description = data?.description || "Your generous contributions enable Cafe Innovate Hub to train young professionals and empower MSMEs with the critical digital skills needed to thrive in today's economy. Together, we are building a more innovative future.";
  
  const cta1Text = data?.cta1Text || "Donate via Flutterwave";
  const cta1Link = data?.cta1Link || "https://flutterwave.com/pay/lsuxaiyde2t8";
  
  const cta2Text = data?.cta2Text || "Send with PayPal";
  const paypalTarget = data?.cta2Link || "cafeinnovate@gmail.com";

  const handleCopyPayPal = () => {
    if (paypalTarget.startsWith("http://") || paypalTarget.startsWith("https://")) {
      window.open(paypalTarget, "_blank", "noopener,noreferrer");
      return;
    }
    navigator.clipboard.writeText(paypalTarget);
    setCopied(true);
    toast.success("PayPal address copied to clipboard!", {
      description: paypalTarget,
    });
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col font-sans">
      <main className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-cihBlue/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 bg-white p-10 md:p-16 rounded-[2rem] shadow-2xl border border-slate-100 transition-all duration-300 hover:shadow-3xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-cihYellow/20 rounded-2xl flex items-center justify-center text-cihYellow shadow-inner">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </div>

          {headline && (
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-cihBlue text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              {headline}
            </span>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bricolage font-black text-slate-900 tracking-tighter mb-6">
            {heading}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={cta1Link} target="_blank" rel="noopener noreferrer">
              <EclipseButton variant="yellow" className="py-4 px-8 text-lg font-bold w-full sm:w-auto shadow-lg hover:-translate-y-1 transition-all duration-300">
                {cta1Text}
              </EclipseButton>
            </a>
            
            <EclipseButton 
              onClick={handleCopyPayPal}
              variant="outline" 
              className="py-4 px-8 text-lg font-bold w-full sm:w-auto"
            >
              {copied ? "PayPal Address Copied!" : cta2Text}
            </EclipseButton>
          </div>
          
          {copied && (
            <div className="mt-6 p-4 bg-green-50 text-green-700 font-medium rounded-xl inline-block text-sm">
              Successfully copied <strong>{paypalTarget}</strong> to your clipboard.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
