const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  '                )}\r\n              </div>\r\n\r\n              {/* Floating Stat Card overlapping */}',
  '                )}\r\n\r\n              {/* Floating Stat Card overlapping */}'
);

content = content.replace(
  '                )}\n              </div>\n\n              {/* Floating Stat Card overlapping */}',
  '                )}\n\n              {/* Floating Stat Card overlapping */}'
);

fs.writeFileSync(path, content);
console.log('Fixed extra div!');
