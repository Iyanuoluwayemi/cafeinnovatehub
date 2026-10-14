"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import EclipseButton from '@/components/ui/eclipse-button';
import { toast } from 'sonner';

interface CtaItem {
  _key?: string;
  text?: string;
  link?: string;
  variant?: 'yellow' | 'primary' | 'outline' | 'ghost';
}

interface DonateData {
  _id?: string;
  headline?: string;
  heading?: string;
  description?: string;
  buttonText1?: string;
  buttonLink1?: string;
  buttonText2?: string;
  buttonLink2?: string;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
  callToAction?: string;
  ctas?: CtaItem[];
}

export default function DonateClient({ data }: { data?: DonateData | null }) {
  const [copied, setCopied] = useState(false);

  const headline = data?.headline || "Donate to support digital access";
  const heading = data?.heading || "Help someone start, grow, and thrive in the digital economy.";
  const rawDescription = data?.description || 
    "Your donation helps Cafe Innovate Hub provide practical digital skills training and digital transformation support for young people, small business owners, and MSMEs.\n\nYour support contributes to facilitator costs, learning resources, participant support, and free or affordable programs for people who may not otherwise have access.";

  // Prepare buttons list dynamically
  const buttons: Array<{ text: string; link: string; variant: 'yellow' | 'primary' | 'outline' | 'ghost'; isEmail?: boolean }> = [];

  if (data?.ctas && data.ctas.length > 0) {
    data.ctas.forEach((cta) => {
      const link = cta.link || '#';
      const isEmail = !link.startsWith('http://') && !link.startsWith('https://') && !link.startsWith('/') && link.includes('@');
      buttons.push({
        text: cta.text || 'Donate',
        link,
        variant: cta.variant || 'yellow',
        isEmail,
      });
    });
  } else {
    // Primary Button
    const btn1Text = data?.cta1Text || data?.buttonText1 || data?.callToAction || "Donate via Flutterwave";
    const btn1Link = data?.cta1Link || data?.buttonLink1 || "https://flutterwave.com/pay/lsuxaiyde2t8";
    buttons.push({
      text: btn1Text,
      link: btn1Link,
      variant: 'yellow',
    });

    // Secondary Button
    const btn2Text = data?.cta2Text || data?.buttonText2 || "Send with PayPal";
    const btn2Link = data?.cta2Link || data?.buttonLink2 || "https://paypal.me/cafeinnovate";
    const isEmail = !btn2Link.startsWith('http://') && !btn2Link.startsWith('https://') && !btn2Link.startsWith('/') && btn2Link.includes('@');
    buttons.push({
      text: btn2Text,
      link: btn2Link,
      variant: 'outline',
      isEmail,
    });
  }

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    toast.success("Payment address copied to clipboard!", {
      description: value,
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const paragraphs = rawDescription.split('\n').filter((p) => p.trim() !== '');

  return (
    <div className="min-h-[100dvh] bg-slate-50 flex flex-col font-sans">
      <main className="flex-grow flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[37.5rem] h-[37.5rem] bg-cihBlue/[0.03] blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] shadow-2xl border border-slate-100 transition-all duration-300 hover:shadow-3xl">
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
          
          <div className="text-lg md:text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-2xl mx-auto space-y-4">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((btn, idx) => {
              if (btn.isEmail) {
                return (
                  <EclipseButton 
                    key={idx}
                    onClick={() => handleCopy(btn.link)}
                    variant={btn.variant}
                    className="py-4 px-8 text-lg font-bold w-full sm:w-auto"
                  >
                    {copied ? "Address Copied!" : btn.text}
                  </EclipseButton>
                );
              }

              return (
                <Link 
                  key={idx} 
                  href={btn.link} 
                  target={btn.link.startsWith('http') ? '_blank' : undefined} 
                  rel={btn.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-full sm:w-auto"
                >
                  <EclipseButton 
                    variant={btn.variant} 
                    className="py-4 px-8 text-lg font-bold w-full sm:w-auto shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {btn.text}
                  </EclipseButton>
                </Link>
              );
            })}
          </div>
          
          {copied && (
            <div className="mt-6 p-4 bg-green-50 text-green-700 font-medium rounded-xl inline-block text-sm">
              Successfully copied payment address to your clipboard.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
