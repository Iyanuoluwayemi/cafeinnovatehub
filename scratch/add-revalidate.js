const fs = require('fs');

function addRevalidate(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('export const revalidate')) {
    const importMatch = content.match(/(import .*?;?\n)+/);
    if (importMatch) {
      const insertionPoint = importMatch.index + importMatch[0].length;
      content = content.slice(0, insertionPoint) + '\nexport const revalidate = 10;\n' + content.slice(insertionPoint);
      fs.writeFileSync(filePath, content);
      console.log(`Added revalidate to ${filePath}`);
    }
  } else {
    console.log(`Revalidate already exists in ${filePath}`);
  }
}

addRevalidate('src/app/page.tsx');
addRevalidate('src/app/about/page.tsx');
