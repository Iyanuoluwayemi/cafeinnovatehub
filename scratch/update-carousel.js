const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add the fetch query for sanityPrograms
if (!content.includes('sanityPrograms')) {
  content = content.replace(
    'const homeData = await client.fetch("*[_type == \'home\'][0]");',
    'const homeData = await client.fetch("*[_type == \'home\'][0]");\n  const sanityPrograms = await client.fetch("*[_type == \'program\'] | order(displayOrder asc)");'
  );
}

// Replace the hardcoded OfferCarousel
const carouselRegex = /<OfferCarousel offers=\s*\{\[\s*\{[\s\S]*?\}\s*\]\}\s*\/>/;
const carouselReplacement = `<OfferCarousel offers={sanityPrograms.map((p: any) => ({
                title: p.title || "",
                description: p.shortDescription || "",
                tag: p.duration || "",
                imageSrc: p.coverImage ? urlFor(p.coverImage).url() : "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_800/DMM_pz1swq.png",
                brandName: "Cafe Innovate Hub",
                brandLogoSrc: "https://res.cloudinary.com/dykvipays/image/upload/f_auto,q_auto,w_250,c_scale/CIH_Black_logo_fadnbk.png",
                href: \`/programs/\${p.slug?.current || ''}\`
              }))} />`;

content = content.replace(carouselRegex, carouselReplacement);

fs.writeFileSync('src/app/page.tsx', content);
