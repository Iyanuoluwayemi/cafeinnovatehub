const fs = require('fs');

const path = 'src/components/layout/Footer.tsx';
let content = fs.readFileSync(path, 'utf8');

if (!content.includes('import { client }')) {
  content = content.replace(
    'import Image from "next/image";',
    'import Image from "next/image";\nimport { client } from "../../../sanity/client";'
  );
}

content = content.replace(
  'export default function Footer() {',
  `export default async function Footer() {
  const footerData = await client.fetch("*[_type == 'footer'][0]");
  const waNum = footerData?.whatsappNumber || '2349030898649';`
);

// Replace paragraph
const paraRegex = /<p className="max-w-md text-sm leading-relaxed text-slate-300 font-sans">[\s\S]*?<\/p>/;
content = content.replace(paraRegex, `<p className="max-w-md text-sm leading-relaxed text-slate-300 font-sans">
              {footerData?.whatWeDoText || "Cafe Innovate Hub is a digital skills accelerator empowering MSMEs for a digital future."}
            </p>`);

// Replace whatsapp link
const waRegex = /<a href="https:\/\/wa\.me\/2349030898649"[\s\S]*?WhatsApp: 0903 089 8649\r?\n\s*<\/a>/;
content = content.replace(waRegex, `<a href={\`https://wa.me/\${waNum}?text=I%20want%20to%20join%20the%20community\`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  WhatsApp
                </a>`);

fs.writeFileSync(path, content);
console.log('Footer updated successfully');
