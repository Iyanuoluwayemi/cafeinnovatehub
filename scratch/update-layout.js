const fs = require('fs');

const path = 'src/app/layout.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add data-scroll-behavior="smooth" to <html>
if (!content.includes('data-scroll-behavior="smooth"')) {
  content = content.replace(/<html\s+([^>]*)>/, '<html $1 data-scroll-behavior="smooth">');
  fs.writeFileSync(path, content);
  console.log('Updated layout.tsx');
} else {
  console.log('layout.tsx already updated');
}
