const fs = require('fs');

const path = 'src/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
`}
                )}
              </div>`,
`}`
);

fs.writeFileSync(path, content);
console.log('Fixed syntax error!');
