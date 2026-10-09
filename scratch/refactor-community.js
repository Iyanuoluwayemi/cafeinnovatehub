const fs = require('fs');

const path = 'src/app/community/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add import
content = content.replace('import EclipseButton from "@/components/ui/eclipse-button";', 'import EclipseButton from "@/components/ui/eclipse-button";\nimport TestimonialCard, { Testimonial } from "@/components/ui/TestimonialCard";');

// The JSX for the card mapping in community/page.tsx
const cardRegex = /\{testimonials\.length > 0 \? testimonials\.map\(\(test: any, idx: number\) => \([\s\S]*?\)\) : \(/;

const replacement = `{testimonials.length > 0 ? testimonials.map((test: Testimonial, idx: number) => (
                <TestimonialCard key={idx} test={test} />
              )) : (`;

content = content.replace(cardRegex, replacement);

fs.writeFileSync(path, content);
console.log('Successfully refactored community/page.tsx');
