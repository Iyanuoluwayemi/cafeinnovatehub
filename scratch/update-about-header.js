const fs = require('fs');

let pagePath = 'src/app/about/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const targetText = 'We are building the premier innovation hub where founders, developers, creators, and technology leaders converge to fuel ideas and brew innovation.';
const replacementText = 'We are building a digital skills accelerator where small business owners and young professionals converge to learn practical tools, improve their businesses, and turn a simple internet connection into real opportunity.';

if (content.includes(targetText)) {
  content = content.replace(targetText, replacementText);
  fs.writeFileSync(pagePath, content);
  console.log("Updated About Us body text successfully.");
} else {
  console.log("Could not find the target text in src/app/about/page.tsx");
}
