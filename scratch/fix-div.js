const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the duplicate div
content = content.replace(/<\/div>\s*<\/div>\s*\{\/\* Subtle gradient edges/g, '</div>\n          {/* Subtle gradient edges');

fs.writeFileSync(path, content);
console.log("Fixed duplicate div");
