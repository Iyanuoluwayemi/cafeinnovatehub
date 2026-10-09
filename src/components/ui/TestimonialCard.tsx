import Image from "next/image";

export interface Testimonial {
  _id?: string;
  quote?: string;
  name?: string;
  role?: string;
  image?: any;
}

export function cleanQuote(quote?: string): string {
  if (!quote) return "";
  return quote.trim().replace(/^["'“]+/, "").replace(/["'”]+$/, "").trim();
}

export function getInitials(name?: string): string {
  if (!name) return "CI";
  const cleaned = name.replace(/^@/, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return cleaned.substring(0, 2).toUpperCase() || "CI";
}

export function getImageUrl(source: any): string | null {
  if (!source) return null;
  if (typeof source === 'string') return source;
  if (source.asset && source.asset._ref) {
    const parts = source.asset._ref.split('-');
    if (parts.length === 4) {
      return `https://cdn.sanity.io/images/3mh37foj/production/${parts[1]}-${parts[2]}.${parts[3]}`;
    }
  }
  return null;
}

interface TestimonialCardProps {
  test: Testimonial;
}

export default function TestimonialCard({ test }: TestimonialCardProps) {
  const imgUrl = getImageUrl(test.image);
  
  return (
    <div className="w-[300px] md:w-[360px] min-w-[300px] md:min-w-[360px] h-[280px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 hover:border-white/20 text-white rounded-3xl p-6 md:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between shrink-0 overflow-hidden">
      <div>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/90 mb-3 shrink-0"
          aria-hidden="true"
        >
          <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
          <path d="M10 11c0 2.5-1.5 5-4 6"/>
          <path d="M21 11c0 2.5-1.5 5-4 6"/>
        </svg>
        <p className="text-slate-100 text-sm md:text-base font-medium font-sans leading-relaxed line-clamp-4">
          {cleanQuote(test.quote)}
        </p>
      </div>
      <div className="flex items-center gap-3.5 mt-auto pt-3 shrink-0">
        {imgUrl ? (
          <div className="shrink-0 w-11 h-11 relative rounded-full overflow-hidden ring-2 ring-white/20">
            <Image 
              src={imgUrl}
              alt={test.name || 'Testimonial Author'}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans text-sm ring-2 ring-white/10">
            {getInitials(test.name)}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h4 className="text-white font-bold font-sans text-sm md:text-base truncate">{test.name}</h4>
          <p className="text-cihLightBlue text-xs md:text-sm font-medium font-sans truncate">{test.role}</p>
        </div>
      </div>
    </div>
  );
}
