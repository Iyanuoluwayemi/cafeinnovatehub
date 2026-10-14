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
  test?: Testimonial;
  testimonial?: Testimonial;
}

export default function TestimonialCard({ test, testimonial }: TestimonialCardProps) {
  const item = test || testimonial || {};
  const imgUrl = getImageUrl(item.image);
  
  return (
    <div className="w-[18.75rem] md:w-[22.5rem] min-w-[18.75rem] md:min-w-[22.5rem] h-[17.5rem] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 hover:border-white/20 text-white rounded-3xl p-6 md:p-7 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shrink-0 overflow-hidden">
      <div>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-cihYellow opacity-90 mb-3"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <p className="text-sm md:text-base font-normal leading-relaxed text-slate-200 line-clamp-4">
          &ldquo;{cleanQuote(item.quote)}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3.5 pt-3 border-t border-white/10">
        <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden relative shrink-0 bg-white/10 flex items-center justify-center font-bold text-xs text-cihYellow">
          {imgUrl ? (
            <Image
              src={imgUrl}
              alt={item.name || "Testimonial"}
              fill
              className="object-cover"
              sizes="40px"
            />
          ) : (
            <span>{getInitials(item.name)}</span>
          )}
        </div>
        <div className="overflow-hidden">
          <div className="font-bold text-sm text-white truncate">{item.name}</div>
          <div className="text-xs text-slate-300 truncate">{item.role || "Member"}</div>
        </div>
      </div>
    </div>
  );
}
