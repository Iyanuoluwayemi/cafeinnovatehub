const fs = require('fs');

function updateFile(path) {
  let content = fs.readFileSync(path, 'utf8');
  let changed = false;

  // Add sizes to fill
  const imageFillRegex = /<Image([^>]*?)fill([^>]*?)>/g;
  content = content.replace(imageFillRegex, (match, p1, p2) => {
    if (match.includes('sizes=')) return match;
    changed = true;
    return `<Image${p1}fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"${p2}>`;
  });

  // Add w-auto h-auto to logo className if it's Navbar or Footer
  if (path.includes('Navbar') || path.includes('Footer')) {
    const logoRegex = /<Image\s*src="[^"]*CIH_Black_logo_fadnbk\.png"[^>]*className="([^"]*)"/g;
    content = content.replace(logoRegex, (match, p1) => {
      if (p1.includes('w-auto h-auto')) return match;
      changed = true;
      return match.replace(`className="${p1}"`, `className="${p1} w-auto h-auto"`);
    });
  }

  if (changed) {
    fs.writeFileSync(path, content);
    console.log(`Updated ${path}`);
  }
}

updateFile('src/app/page.tsx');
updateFile('src/components/layout/Navbar.tsx');
updateFile('src/components/layout/Footer.tsx');
