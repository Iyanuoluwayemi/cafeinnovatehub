const fs = require('fs');
const path = 'src/app/community/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/"use client";/g, '');
content = content.replace(/'use client';/g, '');

fs.writeFileSync(path, content);
console.log('Removed use client');
