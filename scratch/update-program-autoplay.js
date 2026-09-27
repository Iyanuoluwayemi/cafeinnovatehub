const fs = require('fs');

const path = 'src/app/programs/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Insert autoplay logic before return
if (!content.includes('const autoplayEmbed =')) {
  content = content.replace(
    '  return (',
    `  const autoplayEmbed = program.videoEmbedCode?.replace(/src="([^"]+)"/, (match: string, url: string) => \`src="\${url}\${url.includes('?') ? '&' : '?'}autoplay=1&mute=1"\`);\n\n  return (`
  );
}

// Replace dangerouslySetInnerHTML
content = content.replace(
  /dangerouslySetInnerHTML=\{\{\s*__html:\s*program\.videoEmbedCode\s*\}\}/g,
  'dangerouslySetInnerHTML={{ __html: autoplayEmbed }}'
);

fs.writeFileSync(path, content);
console.log('Programs page autoplay successfully added!');
