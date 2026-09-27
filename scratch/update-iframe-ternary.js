const fs = require('fs');
const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /\{\s*videoId && \(\s*<iframe className="w-full aspect-video rounded-xl shadow-lg" src=\{`https:\/\/www\.youtube\.com\/embed\/\$\{videoId\}\?autoplay=1&mute=1`\} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen \/>\s*\)\s*\}/;

const replacement = `{videoId ? <iframe className="w-full aspect-video rounded-xl shadow-lg" src={\`https://www.youtube.com/embed/\${videoId}\`} allow="encrypted-media; picture-in-picture" allowFullScreen /> : null}`;

if (content.match(regex)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(path, content);
  console.log("Successfully replaced with the requested ternary syntax.");
} else {
  console.log("Regex didn't match. Attempting fallback replacement.");
  
  // Fallback regex in case formatting is slightly different
  const fallbackRegex = /\{\s*videoId && \([\s\S]*?allowFullScreen \/>\s*\)\s*\}/;
  if (content.match(fallbackRegex)) {
    content = content.replace(fallbackRegex, replacement);
    fs.writeFileSync(path, content);
    console.log("Successfully replaced using fallback regex.");
  } else {
    console.log("Could not find block to replace.");
  }
}
