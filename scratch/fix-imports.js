const fs = require('fs');

const path = 'src/app/community/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace('../../sanity/client', '../../../sanity/client');
content = content.replace('../../sanity/image', '../../../sanity/image');

fs.writeFileSync(path, content);
console.log('Fixed imports');
