const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

if (!content.includes("const testimonials = await client.fetch")) {
  content = content.replace(
    'const sanityPrograms = await client.fetch("*[_type == \'program\'] | order(displayOrder asc)");',
    'const sanityPrograms = await client.fetch("*[_type == \'program\'] | order(displayOrder asc)");\n  const testimonials = await client.fetch("*[_type == \'testimonial\']");'
  );
}

const marqueeRegex = /<div className="animate-infinite-scroll flex gap-6 px-3">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newMarquee = `<div className="animate-infinite-scroll flex gap-6 px-3">
            {[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-6 shrink-0">
                {testimonials?.map((t: any, idx: number) => (
                  <div key={idx} className="w-[300px] md:w-[360px] min-w-[300px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between shrink-0">
                    <div>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                        <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                        <path d="M10 11c0 2.5-1.5 5-4 6"/>
                        <path d="M21 11c0 2.5-1.5 5-4 6"/>
                      </svg>
                      <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      {t.image ? (
                        <div className="shrink-0 w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/20">
                          <Image src={urlFor(t.image).url()} alt={t.name || "Testimonial"} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans ring-2 ring-white/10">
                          {t.name ? t.name.substring(0,2).toUpperCase() : "CI"}
                        </div>
                      )}
                      <div>
                        <h4 className="text-white font-bold font-sans">{t.name}</h4>
                        <p className="text-cihLightBlue text-sm font-medium font-sans">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>`;

content = content.replace(marqueeRegex, newMarquee);
fs.writeFileSync('src/app/page.tsx', content);
