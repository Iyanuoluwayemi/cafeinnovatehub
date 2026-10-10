const fs = require('fs');

const files = [
  "c:\\Users\\DELL\\Downloads\\SKILL.md",
  "c:\\Users\\DELL\\Downloads\\SKILL (1).md",
  "c:\\Users\\DELL\\Downloads\\SKILL (2).md",
  "c:\\Users\\DELL\\Downloads\\SKILL (3).md",
  "c:\\Users\\DELL\\Downloads\\SKILL (4).md"
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const match = content.match(/name:\s*(.+)/);
    console.log(`${f}: ${match ? match[1].trim() : 'UNKNOWN'}`);
  } else {
    console.log(`${f}: NOT FOUND`);
  }
});
