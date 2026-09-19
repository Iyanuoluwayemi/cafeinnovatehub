import Link from "next/link";
import EclipseButton from "@/components/ui/eclipse-button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cihBlue text-white shadow-sm transition-transform group-hover:scale-105">
            <span className="text-xl font-extrabold tracking-wider">CIH</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-cihBlue group-hover:text-cihLightBlue transition-colors">
              Cafe Innovate Hub
            </span>
            <span className="text-xs font-medium text-slate-500">
              Innovate • Connect • Create
            </span>
          </div>
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
            href="#about"
            className="transition-colors hover:text-cihBlue"
          >
            About
          </Link>
          <Link
            href="#programs"
            className="transition-colors hover:text-cihBlue"
          >
            Programs
          </Link>
          <Link
            href="#community"
            className="transition-colors hover:text-cihBlue"
          >
            Community
          </Link>
          <Link
            href="#blog"
            className="transition-colors hover:text-cihBlue"
          >
            Blog
          </Link>
        </nav>

        {/* Action Button - Using EclipseButton standard */}
        <div className="flex items-center gap-3">
          <EclipseButton variant="primary" className="py-2.5 px-5 text-sm">
            Join the Hub
          </EclipseButton>
        </div>
      </div>
    </header>
  );
}
