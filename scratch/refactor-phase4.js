const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Apply native iOS critically damped springs globally for Framer Motion
    content = content.replace(/ease:\s*"easeOut"\s*as\s*const/g, 'type: "spring", bounce: 0');
    content = content.replace(/ease:\s*"easeOut"/g, 'type: "spring", bounce: 0');
    content = content.replace(/ease:\s*\[0\.16,\s*1,\s*0\.3,\s*1\]/g, 'type: "spring", bounce: 0');
    content = content.replace(/ease:\s*"easeInOut"/g, 'type: "spring", bounce: 0');
    
    // Convert arbitrary Tailwind width/height pixels to rem for optical sizing
    content = content.replace(/w-\[([0-9]+)px\]/g, (match, p1) => {
      const rem = (parseInt(p1) / 16).toFixed(3).replace(/\.?0+$/, '');
      return `w-[${rem}rem]`;
    });
    content = content.replace(/h-\[([0-9]+)px\]/g, (match, p1) => {
      const rem = (parseInt(p1) / 16).toFixed(3).replace(/\.?0+$/, '');
      return `h-[${rem}rem]`;
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated Phase 4 physics in ${filePath}`);
    }
  }
});

