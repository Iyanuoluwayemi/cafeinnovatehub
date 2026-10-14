export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'About Page Content',
      hidden: true,
    },
    {
      name: 'originStory',
      title: 'Origin Story (Full Founder Writeup)',
      type: 'text',
      rows: 15,
      description: "The founder's complete writeup and origin story for Cafe Innovate Hub. Supports multi-paragraph narratives.",
    },
    {
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
      description: 'The core mission of Cafe Innovate Hub.',
    },
    {
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      rows: 4,
      description: 'The long-term vision of Cafe Innovate Hub.',
    },
  ],
};
