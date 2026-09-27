const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

const regex = /\{videoId \? \([\s\S]*?<\/div>\r?\n\s*\)\}/;

const replacement = `{videoId && (
                  <iframe className="w-full aspect-video rounded-xl shadow-lg" src={\`https://www.youtube.com/embed/\${videoId}?autoplay=1&mute=1\`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                )}`;

if (content.match(regex)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync(path, content);
  console.log("Successfully applied self-closing iframe and removed fallback!");
} else {
  console.log("Could not find the target block.");
}
