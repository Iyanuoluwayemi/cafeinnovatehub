const fs = require('fs');

let footerPath = 'src/components/layout/Footer.tsx';
let footerCode = fs.readFileSync(footerPath, 'utf8');

if (!footerCode.includes('NewsletterForm')) {
  // Add import
  footerCode = footerCode.replace(
    'import { client } from "../../../sanity/client";',
    'import { client } from "../../../sanity/client";\nimport NewsletterForm from "../ui/NewsletterForm";'
  );

  // Add the newsletter section right after the opening container div
  const newsletterSection = `
        {/* Newsletter Section */}
        <div className="mb-16 border-b border-white/10 pb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bricolage font-black mb-3">Join our Newsletter</h3>
            <p className="text-slate-300 text-sm md:text-base font-medium">
              Get the latest insights on digital marketing, design tips, and community stories delivered straight to your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto flex-shrink-0">
            <NewsletterForm />
          </div>
        </div>
`;
  footerCode = footerCode.replace(
    '<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">',
    '<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">' + newsletterSection
  );

  fs.writeFileSync(footerPath, footerCode);
  console.log("Newsletter form injected into Footer.tsx");
} else {
  console.log("NewsletterForm already exists in Footer.");
}
