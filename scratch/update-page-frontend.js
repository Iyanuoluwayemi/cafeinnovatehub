const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add Sanity Queries
if (!content.includes('sanityTestimonials')) {
  content = content.replace(
    'const sanityPrograms = await client.fetch("*[_type == \'program\'] | order(displayOrder asc)");',
    `const sanityPrograms = await client.fetch("*[_type == 'program'] | order(displayOrder asc)");\n  const sanityTestimonials = await client.fetch("*[_type == 'testimonial']");\n  const sanityInsights = await client.fetch("*[_type == 'post'] | order(publishedAt desc)[0...3]");\n  const footerData = await client.fetch("*[_type == 'footer'][0]");`
  );
}

// 2. Replace Marquee Hardcoded Cards
const marqueeTargetRegex = /\{\[\.\.\.Array\(2\)\]\.map\(\(_, loopIndex\) => \([\s\S]*?\}\)/;

const newMarqueeBlock = `{[...Array(2)].map((_, loopIndex) => (
              <div key={loopIndex} className="flex gap-6 shrink-0">
                {sanityTestimonials.map((testimonial: any, idx: number) => (
                  <div key={idx} className="w-[300px] md:w-[360px] min-w-[300px] bg-gradient-to-br from-cihBlue via-[#0b3880] to-[#061e47] border border-white/10 text-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col justify-between shrink-0">
                    <div>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white mb-6 opacity-90">
                        <path d="M10 11h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10zm11 0h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h4v10z"/>
                        <path d="M10 11c0 2.5-1.5 5-4 6"/>
                        <path d="M21 11c0 2.5-1.5 5-4 6"/>
                      </svg>
                      <p className="text-slate-100 text-base font-medium font-sans leading-relaxed mb-8">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      {testimonial.image ? (
                        <div className="shrink-0 w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/20">
                          <Image 
                            src={urlFor(testimonial.image).url()}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cihLightBlue/20 text-white font-bold font-sans ring-2 ring-white/10">
                          {testimonial.name?.substring(0, 2).toUpperCase() || 'UI'}
                        </div>
                      )}
                      <div>
                        <h4 className="text-white font-bold font-sans">{testimonial.name}</h4>
                        <p className="text-cihLightBlue text-sm font-medium font-sans">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}`;

content = content.replace(marqueeTargetRegex, newMarqueeBlock);


// 3. Replace Insights Hardcoded Cards
const insightsTargetRegex = /<MotionDiv \s*className="grid grid-cols-1 md:grid-cols-3 gap-8"\s*initial="hidden"\s*whileInView="visible"\s*viewport=\{\{ once: true, margin: "-40px" \}\}\s*variants=\{containerVariants\}\s*>[\s\S]*?<\/MotionDiv>/;

const newInsightsBlock = `<MotionDiv 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={containerVariants}
          >
            {sanityInsights.map((post: any, idx: number) => (
              <MotionArticle 
                key={post._id || idx}
                variants={cardVariants}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden group flex flex-col hover:border-slate-300 transition-colors shadow-sm hover:shadow-lg"
              >
                <div className="aspect-video bg-slate-100 w-full overflow-hidden relative">
                  <Image 
                    src={post.mainImage ? urlFor(post.mainImage).url() : "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_600/Upscale_image_remove_noise_2K_20260919135611_mctuby.jpg"} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                    {post.category || 'Insight'}
                  </div>
                  <h3 className="text-xl font-bold font-sans text-slate-900 mb-3 group-hover:text-cihBlue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 font-medium mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link href={\`/blog/\${post.slug?.current || ''}\`} className="inline-flex items-center text-cihLightBlue font-bold hover:text-cihBlue transition-colors group/link w-fit">
                    Read More 
                    <svg className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </MotionArticle>
            ))}
          </MotionDiv>`;

content = content.replace(insightsTargetRegex, newInsightsBlock);

fs.writeFileSync(path, content);
console.log('Dynamic mapping replaced in page.tsx');
