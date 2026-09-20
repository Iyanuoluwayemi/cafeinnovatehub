export const team = {
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'role', type: 'string', title: 'Role' },
    { name: 'bio', type: 'text', title: 'One-line Bio' },
    { name: 'image', type: 'image', title: 'Headshot', options: { hotspot: true } },
    { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
    { name: 'displayOrder', type: 'number', title: 'Display Order (1 for Founder, 2 for next, etc.)' },
  ],
};
