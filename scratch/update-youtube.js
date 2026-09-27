const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Add helper function above return
if (!content.includes('const getYoutubeId')) {
  content = content.replace(
    'return (',
    `const getYoutubeId = (url?: string) => { if (!url) return null; const match = url.match(/(?:youtu\\.be\\/|youtube\\.com\\/(?:.*v=|.*\\/|.*embed\\/))([^&?]+)/); return match ? match[1] : null; };
  const videoId = getYoutubeId(homeData?.featureVideoUrl);
  return (`
  );
}

// 2. Replace the iframe block
const targetRegex = /<div className="relative w-\[90%\] h-\[90%\] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">[\s\S]*?<\/div>/;

const replacementBlock = `{videoId ? (
                  <iframe className="w-full aspect-video rounded-xl shadow-lg" src={\`https://www.youtube.com/embed/\${videoId}?autoplay=1&mute=1\`} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
                ) : (
                  <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 flex items-center justify-center">
                    <div className="text-slate-400 font-medium">Video coming soon</div>
                  </div>
                )}`;

content = content.replace(targetRegex, replacementBlock);

fs.writeFileSync(path, content);
console.log('Replaced successfully!');
