export const community = {
  name: 'community',
  title: 'Join the Community Page',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'benefits',
      title: 'Why Join? (Benefits)',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'communityLink',
      title: 'Community Group Link',
      type: 'string',
      description: 'WhatsApp or Telegram invite link for joining the community',
      initialValue: 'https://wa.link/8fwiwq',
    },
  ],
};

export default community;
