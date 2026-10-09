const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /\{marqueeCards\.map\(\(test: Testimonial, idx: number\) => \{[\s\S]*?return \([\s\S]*?<div[\s\S]*?key=\{\`\$\{loopIndex\}-\$\{idx\}\`\}[\s\S]*?<\/div>\s*\);\s*\}\)\}/;

const replacement = `{marqueeCards.map((test: Testimonial, idx: number) => (
  <TestimonialCard key={\`\${loopIndex}-\${idx}\`} test={test} />
))}`;

content = content.replace(regex, replacement);

fs.writeFileSync(path, content);
console.log('Fixed page.tsx');
