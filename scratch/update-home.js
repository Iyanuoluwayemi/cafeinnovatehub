const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Remove "use client";
content = content.replace(/"use client";\r?\n+/, '');

// 2. Add imports
const imports = `import { client } from "../../sanity/client";
import { urlFor } from "../../sanity/image";
import { MotionDiv, MotionH1, MotionP, MotionSpan, MotionSection } from "@/components/ui/motion-wrapper";
`;
content = content.replace(/import { motion, Variants } from "framer-motion";\r?\n/, imports);

// 3. Convert function to async
content = content.replace(/export default function Home\(\) {/, `export default async function Home() {
  const homeData = await client.fetch("*[_type == 'home'][0]");`);

// 4. Map Variables in Hero
content = content.replace(/Practical digital skills\.<br \/>\s*<span[^>]*>\s*Real business growth\.\s*<\/span>/, `{homeData?.heroHeadline}`);
content = content.replace(/Empowering business owners and young professionals with digital skills to improve their business, operations, and career\./, `{homeData?.heroSubheadline}`);

// 5. Replace Hero Buttons
content = content.replace(/Explore Our Trainings/, `{homeData?.primaryCtaText}`);
content = content.replace(/<Link href="\/programs">/, `<Link href={homeData?.primaryCtaLink || "/programs"}>`);

content = content.replace(/Join the Community/, `{homeData?.secondaryCtaText}`);
content = content.replace(/<Link href="\/community">/, `<Link href={homeData?.secondaryCtaLink || "/community"}>`);

// 6. Map Stats
const statsRegex = /<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">([\s\S]*?)<\/div>\s*<\/motion\.div>/;
const statsReplacement = `<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
              {homeData?.stats?.map((stat: any, index: number) => (
                <MotionDiv key={index} variants={cardVariants} className="flex flex-col">
                  <span className="text-5xl font-bricolage font-black text-white mb-2">{stat.value}</span>
                  <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">{stat.label}</span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>`;
content = content.replace(statsRegex, statsReplacement);

// 7. Replace Feature Variables
content = content.replace(/DIGITAL SKILLS ACCELERATOR/, `{homeData?.featureTag}`);
content = content.replace(/Build, launch, and scale your dream business\./, `{homeData?.featureHeadline}`);
content = content.replace(/Join our intensive, mentor-led programs designed to turn your raw ideas into sustainable, revenue-generating businesses\. From digital marketing to product design, we give you the tools to succeed in the modern economy\./, `{homeData?.featureDescription}`);
content = content.replace(/Start Learning Now/, `{homeData?.featureLinkText}`);
// Feature link URL update
content = content.replace(/<Link href="\/programs">\s*<EclipseButton variant="outline">\s*\{homeData\?\.featureLinkText\}\s*<\/EclipseButton>\s*<\/Link>/, `<Link href={homeData?.featureLinkUrl || "/programs"}>\n                <EclipseButton variant="outline">\n                  {homeData?.featureLinkText}\n                </EclipseButton>\n              </Link>`);

content = content.replace(/>100%</, `>{homeData?.badgeTitle}<`);
content = content.replace(/Practical Curriculum/, `{homeData?.badgeSubtitle}`);

// 8. Replace motion.* tags
content = content.replace(/<motion\.div/g, '<MotionDiv');
content = content.replace(/<\/motion\.div>/g, '</MotionDiv>');
content = content.replace(/<motion\.h1/g, '<MotionH1');
content = content.replace(/<\/motion\.h1>/g, '</MotionH1>');
content = content.replace(/<motion\.p/g, '<MotionP');
content = content.replace(/<\/motion\.p>/g, '</MotionP>');
content = content.replace(/<motion\.span/g, '<MotionSpan');
content = content.replace(/<\/motion\.span>/g, '</MotionSpan>');
content = content.replace(/<motion\.section/g, '<MotionSection');
content = content.replace(/<\/motion\.section>/g, '</MotionSection>');
content = content.replace(/<motion\.article/g, '<MotionArticle');
content = content.replace(/<\/motion\.article>/g, '</MotionArticle>');

fs.writeFileSync('src/app/page.tsx', content);
