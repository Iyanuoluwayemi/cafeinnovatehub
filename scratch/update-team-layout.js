const fs = require('fs');

let pagePath = 'src/app/about/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

// Replace the grid container
content = content.replace(
  '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">',
  '<div className="flex flex-wrap justify-center gap-6">'
);

// Replace the MotionDiv child to have explicit width
content = content.replace(
  'className="flex flex-col gap-6"',
  'className="flex flex-col gap-6 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[250px]"'
);

fs.writeFileSync(pagePath, content);
console.log("Updated team section to use flex wrap and justify-center");
