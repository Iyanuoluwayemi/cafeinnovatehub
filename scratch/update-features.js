const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// 1. Replace the Left Content Text
const featureTextRegex = /<div className="text-lg text-slate-600 font-medium leading-relaxed space-y-6">[\s\S]*?<\/div>/;
const featureTextReplacement = `<div className="text-lg text-slate-600 font-medium leading-relaxed space-y-6">
                <p>
                  {homeData?.featureDescription || "Cafe Innovate Hub is a digital skills accelerator empowering MSMEs for a digital future."}
                </p>
              </div>`;
content = content.replace(featureTextRegex, featureTextReplacement);

// 2. Replace the Right Image Content with Responsive iframe
const featureImageRegex = /<div className="relative w-\[90%\] h-\[90%\] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">[\s\S]*?<\/div>/;
const featureImageReplacement = `<div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                {homeData?.featureVideoUrl ? (
                  <iframe 
                    src={homeData.featureVideoUrl} 
                    title="Feature Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  ></iframe>
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-slate-400 font-medium">Video coming soon</div>
                )}
              </div>`;
content = content.replace(featureImageRegex, featureImageReplacement);

// 3. Update the Footer
let footerContent = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
const footerTextRegex = /<p className="max-w-md text-sm leading-relaxed text-slate-300 font-sans">[\s\S]*?<\/p>/;
const footerTextReplacement = `<p className="max-w-md text-sm leading-relaxed text-slate-300 font-sans">
              Cafe Innovate Hub is a digital skills accelerator empowering MSMEs for a digital future.
            </p>`;
footerContent = footerContent.replace(footerTextRegex, footerTextReplacement);
fs.writeFileSync('src/components/layout/Footer.tsx', footerContent);

fs.writeFileSync('src/app/page.tsx', content);
