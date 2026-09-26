const fs = require('fs');
let content = fs.readFileSync('src/app/about/page.tsx', 'utf8');

content = content.replace(
  'Built by founders,<br /> for founders.',
  'How It All Started'
);

content = content.replace(
  /\`relative rounded-\[2rem\] overflow-hidden aspect-\[3\/4\] shadow-md group bg-slate-200 \$\{isEven \? 'order-1' : 'order-2'\}\`/,
  '"relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-md group bg-slate-200 order-1"'
);

content = content.replace(
  /\`rounded-\[2rem\] p-8 shadow-md flex flex-col justify-center \$\{colorClass\} \$\{isEven \? 'order-2' : 'order-1'\}\`/,
  '`rounded-[2rem] p-8 shadow-md flex flex-col justify-center ${colorClass} order-2`'
);

fs.writeFileSync('src/app/about/page.tsx', content);
