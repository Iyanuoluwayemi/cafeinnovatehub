const fs = require('fs');

let pagePath = 'src/app/about/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// Replace the single <p> tag with a mapped array of <p> tags for multiple paragraphs
const targetText = `<p>{aboutData?.originStory}</p>`;
const replacementText = `
                    {aboutData?.originStory ? (
                      aboutData.originStory.split('\\n').filter((p: string) => p.trim() !== '').map((paragraph: string, idx: number) => (
                        <p key={idx}>{paragraph}</p>
                      ))
                    ) : (
                      <p>Loading our story...</p>
                    )}
`;

if (content.includes(targetText)) {
  content = content.replace(targetText, replacementText);
  fs.writeFileSync(pagePath, content);
  console.log("Updated about/page.tsx frontend to handle multiple paragraphs.");
} else {
  console.log("Could not find exact <p> match. Searching for alternatives...");
}
