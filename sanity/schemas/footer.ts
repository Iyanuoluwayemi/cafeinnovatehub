export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'whatWeDoText', title: 'What We Do Text', type: 'text' },
    { name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string', description: 'Enter number without + or spaces, e.g. 2348000000000' },
    { 
      name: 'socialLinks', 
      title: 'Social Links', 
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' }
          ]
        }
      ]
    }
  ]
};
