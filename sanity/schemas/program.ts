export const program = {
  name: 'program',
  title: 'Training Program',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'shortDescription', type: 'text', title: 'What it is' },
    { name: 'targetAudience', type: 'text', title: 'Who it is for' },
    { name: 'duration', type: 'string', title: 'Duration and format' },
    { name: 'cost', type: 'string', title: 'Cost' },
    { name: 'coverImage', type: 'image', title: 'Cover Image', options: { hotspot: true } },
  ],
};
