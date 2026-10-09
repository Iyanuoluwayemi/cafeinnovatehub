const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add import
content = content.replace('import Link from "next/link";', 'import Link from "next/link";\nimport TestimonialCard, { Testimonial } from "@/components/ui/TestimonialCard";');

// Remove the inline functions and interface
const removeRegex = /interface Testimonial \{[\s\S]*?function getImageUrl\([\s\S]*?\}\s*\}/;
content = content.replace(removeRegex, '');

// The JSX for the card mapping in page.tsx
const cardRegex = /<div\s+key=\{`\$\{loopIndex\}-\$\{idx\}`\}[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*\)\s*\}\)/;
const replacement = `<TestimonialCard key={\`\${loopIndex}-\${idx}\`} test={test} />
                      )})`;

content = content.replace(cardRegex, replacement);

fs.writeFileSync(path, content);
console.log('Successfully refactored page.tsx');
