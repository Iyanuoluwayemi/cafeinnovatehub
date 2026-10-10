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

    // Phase 3: 100vh -> 100dvh / 100svh
    content = content.replace(/min-h-screen/g, 'min-h-[100dvh]');
    content = content.replace(/h-screen/g, 'h-[100dvh]');
    
    // Replace scale-0 with scale-95 (Tailwind classes)
    content = content.replace(/scale-0/g, 'scale-95 opacity-0');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated mobile viewports in ${filePath}`);
    }
  }
});
