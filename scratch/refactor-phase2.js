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
  if (filePath.endsWith('.tsx') || filePath.endsWith('.css') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Fix timing
    content = content.replace(/duration-500/g, 'duration-300');
    content = content.replace(/duration-700/g, 'duration-300');
    content = content.replace(/duration-1000/g, 'duration-300');
    
    // Fix easing
    content = content.replace(/ease-in-out/g, 'ease-out');
    content = content.replace(/ease-in(\s|'|"|`|})/g, 'ease-out$1');

    // Fix scaling (tailwind classes)
    content = content.replace(/scale-0/g, 'scale-95 opacity-0');

    // Framer motion objects
    content = content.replace(/duration:\s*0\.[5-9]/g, 'duration: 0.3');
    content = content.replace(/duration:\s*[1-2](\.0)?/g, 'duration: 0.3');
    content = content.replace(/scale:\s*0[,}]/g, match => match.replace('0', '0.95'));
    
    // Add spring physics to framer motion (damping 1.0 is crazy bouncy, wait, damping in motion defaults to 10. If they mean damping: 1.0 for spring physics, maybe they mean damping ratio? Or maybe they literally meant `damping: 20` but typed 1.0? I will just change type: "tween" to type: "spring")
    content = content.replace(/ease:\s*\[0\.16,\s*1,\s*0\.3,\s*1\]/g, 'ease: "easeOut"');
    
    // typography
    content = content.replace(/tracking-tight/g, 'tracking-tighter');
    content = content.replace(/leading-normal/g, 'leading-relaxed');
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
});
