const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /<div className="animate-infinite-scroll flex gap-6 px-3">[\s\S]*?(?=<\/div>\s*\{\/\* Subtle gradient edges)/;

const replacement = `<div className="animate-infinite-scroll flex gap-6 px-3">
              {[...Array(2)].map((_, loopIndex) => (
                <div key={loopIndex} className="flex gap-6 shrink-0">
                  {sanityTestimonials && sanityTestimonials.length > 0 ? sanityTestimonials.map((test: any, idx: number) => (
                    <div key={idx} className="w-[300px] md:w-[360px] min-w-[300px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between shrink-0">
                      <div>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                          <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                          <path d="M10 11c0 2.5-1.5 5-4 6"/>
                          <path d="M21 11c0 2.5-1.5 5-4 6"/>
                        </svg>
                        <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                          "{test.quote}"
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-auto">
                        {test.image ? (
                          <div className="shrink-0 w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/20">
                            <Image 
                              src={urlFor(test.image).url()}
                              alt={test.name}
                              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans ring-2 ring-white/10">
                            {test.name ? test.name.substring(0, 2).toUpperCase() : 'CI'}
                          </div>
                        )}
                        <div>
                          <h4 className="text-white font-bold font-sans">{test.name}</h4>
                          <p className="text-cihLightBlue text-sm font-medium font-sans">{test.role}</p>
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-white">No testimonials found.</div>
                  )}
                </div>
              ))}
            </div>
            
            `;

if (content.match(regex)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(path, content);
  console.log("Successfully replaced hardcoded testimonials with sanityTestimonials in page.tsx");
} else {
  console.log("Could not find the marquee block.");
}
