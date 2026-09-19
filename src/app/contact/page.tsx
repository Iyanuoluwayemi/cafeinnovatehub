"use client";

import { motion } from "framer-motion";
import EclipseButton from "@/components/ui/eclipse-button";
import FaqAccordion from "@/components/ui/FaqAccordion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      {/* Header */}
      <section className="bg-cihBlue text-white py-24 border-b border-cihBlueDark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
          <h1 className="text-4xl md:text-5xl font-bricolage font-black tracking-tight mb-6">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
            Have questions about our programs or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold text-cihBlue mb-6">Contact Information</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Reach out to us directly via email or WhatsApp. Our team usually responds within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-cihBlue shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Email Us</h3>
                    <a href="mailto:cafeinnovate@gmail.com" className="text-cihLightBlue font-medium hover:underline">cafeinnovate@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-cihBlue shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">WhatsApp</h3>
                    <a href="https://wa.me/2349030898649" target="_blank" rel="noopener noreferrer" className="text-cihLightBlue font-medium hover:underline">+234 903 089 8649</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-cihBlue mb-6">Follow Us</h2>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/cafeinnovatehub" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-cihBlue hover:border-cihBlue transition-colors shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://www.tiktok.com/@cafeinnovatehub" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-cihBlue hover:border-cihBlue transition-colors shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </a>
                <a href="https://youtube.com/@cafeinnovatehub" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-cihBlue hover:border-cihBlue transition-colors shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
                <a href="https://www.linkedin.com/company/cafeinnovatehub/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-cihBlue hover:border-cihBlue transition-colors shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://www.facebook.com/share/1CL41kEPLb/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-cihBlue hover:border-cihBlue transition-colors shadow-sm">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cihLightBlue focus:border-cihLightBlue outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cihLightBlue focus:border-cihLightBlue outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-cihLightBlue focus:border-cihLightBlue outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <EclipseButton variant="primary" className="w-full justify-center py-4 text-base">
                Send Message
              </EclipseButton>
            </form>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-cihBlue tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Everything you need to know about our programs and community.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
