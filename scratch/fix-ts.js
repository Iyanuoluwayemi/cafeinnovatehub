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

    // Fix TS error
    content = content.replace(/type:\s*"spring",\s*bounce/g, 'type: "spring" as const, bounce');

    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`Updated TS types in ${filePath}`);
    }
  }
});
