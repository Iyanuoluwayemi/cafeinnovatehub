const fs = require('fs');

// 1. Update Footer.tsx
let footerPath = 'src/components/layout/Footer.tsx';
let footerCode = fs.readFileSync(footerPath, 'utf8');

if (!footerCode.includes('footerData?.tagline')) {
  // Add the tagline as a heading above the paragraph
  const textToReplace = `<p className="max-w-md text-sm leading-relaxed text-slate-300 font-sans">
              {footerData?.whatWeDoText || "Cafe Innovate Hub is a digital skills accelerator empowering MSMEs for a digital future."}
            </p>`;
  
  const replacementText = `<h3 className="text-sm font-bold tracking-wider uppercase text-cihLightBlue font-sans">
              {footerData?.tagline || "What we do"}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-300 font-sans">
              {footerData?.whatWeDoText || "Empowering MSMEs for a Digital Future"}
            </p>`;
  
  footerCode = footerCode.replace(textToReplace, replacementText);
  fs.writeFileSync(footerPath, footerCode);
  console.log("Updated Footer.tsx");
} else {
  // Update fallback text just in case
  footerCode = footerCode.replace(
    'Cafe Innovate Hub is a digital skills accelerator empowering MSMEs for a digital future.',
    'Empowering MSMEs for a Digital Future'
  );
  fs.writeFileSync(footerPath, footerCode);
  console.log("Updated fallback in Footer.tsx");
}

// 2. Update seed-final/route.ts
let seedPath = 'src/app/api/seed-final/route.ts';
let seedCode = fs.readFileSync(seedPath, 'utf8');

seedCode = seedCode.replace(
  /tagline:\s*'.*?'/,
  "tagline: 'What we do'"
);

seedCode = seedCode.replace(
  /whatWeDoText:\s*'.*?'/,
  "whatWeDoText: 'Empowering MSMEs for a Digital Future'"
);

fs.writeFileSync(seedPath, seedCode);
console.log("Updated seed-final/route.ts");
