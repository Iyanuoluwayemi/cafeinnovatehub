const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the specific block of text
content = content.replace(
`}
              </div>

              {/* Floating Stat Card overlapping */}`,
`}

              {/* Floating Stat Card overlapping */}`
);

fs.writeFileSync(path, content);
console.log('Fixed unmatched div tag!');
