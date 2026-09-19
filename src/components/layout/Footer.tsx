import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="mt-auto border-t border-cihBlue/20 bg-cihBlueDark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <Image 
                src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png" 
                width={160} 
                height={40} 
                alt="Cafe Innovate Hub" 
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="max-w-md text-sm leading-relaxed text-slate-300 font-sans">
              Fueling bold ideas and brewing high-impact innovation. A dynamic virtual ecosystem connecting innovators, founders, technologists, and creatives.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a href="#" aria-label="Instagram" className="text-slate-300 hover:text-cihYellow transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-slate-300 hover:text-cihYellow transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-slate-300 hover:text-cihYellow transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-300 hover:text-cihYellow transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-cihLightBlue font-sans">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300 font-medium font-sans">
              <li>
                <Link href="/" className="transition-colors hover:text-cihYellow">Home</Link>
              </li>
              <li>
                <Link href="#about" className="transition-colors hover:text-cihYellow">About Us</Link>
              </li>
              <li>
                <Link href="#programs" className="transition-colors hover:text-cihYellow">Programs</Link>
              </li>
              <li>
                <Link href="#community" className="transition-colors hover:text-cihYellow">Community</Link>
              </li>
              <li>
                <Link href="#blog" className="transition-colors hover:text-cihYellow">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold tracking-wider uppercase text-cihLightBlue font-sans">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300 font-medium font-sans">
              <li>
                <a href="mailto:cafeinnovate@gmail.com" className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  cafeinnovate@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:09030898649" className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  0903 089 8649
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4 font-medium font-sans">
          <p>© {new Date().getFullYear()} Cafe Innovate Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-cihLightBlue transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-cihLightBlue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
