export const program = {
  name: 'program',
  title: 'Training Program',
  type: 'document',
  fields: [
    { 
      name: 'title', 
      type: 'string', 
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    { 
      name: 'slug', 
      type: 'slug', 
      title: 'Slug', 
      options: { 
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    { name: 'shortDescription', type: 'text', title: 'What it is' },
    { name: 'targetAudience', type: 'text', title: 'Who it is for' },
    { name: 'duration', type: 'string', title: 'Duration and format' },
    { name: 'cost', type: 'string', title: 'Cost' },
    { name: 'coverImage', type: 'image', title: 'Cover Image', options: { hotspot: true } },
    { name: 'displayOrder', type: 'number', title: 'Display Order (1 for first, 2 for second, etc.)' },
    { name: 'videoEmbedCode', title: 'YouTube Embed Code', type: 'text', description: 'Paste the full <iframe> code here.' },
    { name: 'registrationLink', title: 'Registration Form Link', type: 'string', description: 'Paste the Google Form or waitlist link here.' },
    {
      name: 'whatYouWillLearn',
      title: 'What You Will Learn',
      type: 'array',
      description: 'Bullet points detailing key takeaways and skills acquired',
      of: [{ type: 'string' }],
    },
    {
      name: 'whatParticipantsSay',
      title: 'What Participants Say (Testimonials)',
      type: 'array',
      description: 'Reviews and feedback from past participants for this program',
      of: [
        {
          type: 'object',
          name: 'review',
          title: 'Participant Review',
          fields: [
            { name: 'quote', type: 'text', title: 'Testimonial Quote' },
            { name: 'name', type: 'string', title: 'Participant Name' },
            { name: 'role', type: 'string', title: 'Role or Business' },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'role',
            },
          },
        },
      ],
    },
  ],
};

export default program;
