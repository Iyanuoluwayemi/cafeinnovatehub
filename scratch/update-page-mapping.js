const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const regex = /<OfferCarousel offers=\{sanityPrograms\.map\(\(p: any\) => \(\{[\s\S]*?\}\)\)\} \/>/;

const replacement = `<OfferCarousel>
              {sanityPrograms.map((p: any, index: number) => (
                <Link key={p._id || index} href={\`/programs/\${p.slug?.current || ''}\`} className="snap-start shrink-0 h-auto flex">
                  <OfferCard
                    title={p.title || ""}
                    description={p.shortDescription || ""}
                    tag={p.duration || ""}
                    imageSrc={p.coverImage ? urlFor(p.coverImage).url() : "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/DMM_pz1swq.png"}
                    brandName="Cafe Innovate Hub"
                    brandLogoSrc="https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png"
                  />
                </Link>
              ))}
            </OfferCarousel>`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/app/page.tsx', content);
