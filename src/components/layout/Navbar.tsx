import Link from "next/link";
import EclipseButton from "@/components/ui/eclipse-button";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <Image 
            src="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png" 
            width={120} 
            height={30} 
            alt="Cafe Innovate Hub" 
            priority
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link
            href="/"
            className="text-cihBlue font-semibold transition-colors hover:text-cihLightBlue"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="transition-colors hover:text-cihBlue"
          >
            About
          </Link>
          <Link
            href="/#programs"
            className="transition-colors hover:text-cihBlue"
          >
            Programs
          </Link>
          <Link
            href="/#community"
            className="transition-colors hover:text-cihBlue"
          >
            Join the Community
          </Link>
          <Link
            href="/#blog"
            className="transition-colors hover:text-cihBlue"
          >
            Blog
          </Link>
        </nav>

        {/* Action Button - Using EclipseButton standard */}
        <div className="flex items-center gap-3">
          <Link href="/#community">
            <EclipseButton variant="primary" className="py-2.5 px-5 text-sm">
              Join the Community
            </EclipseButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
