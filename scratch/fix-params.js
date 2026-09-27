const fs = require('fs');

const path = 'src/app/programs/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(
  'export default async function DynamicProgramPage({ params }: { params: { slug: string } }) {',
  'export default async function DynamicProgramPage({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;'
);

content = content.replace(
  'const program = await client.fetch(query, { slug: params.slug });',
  'const program = await client.fetch(query, { slug });'
);

fs.writeFileSync(path, content);
console.log('Done!');
