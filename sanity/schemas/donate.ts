export const donate = {
  name: 'donate',
  title: 'Donate Page',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline / Eyebrow Tag',
      type: 'string',
      description: 'e.g. "Donate to support digital access"',
      initialValue: 'Donate to support digital access',
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Main display heading for the donation page',
      initialValue: 'Help someone start, grow, and thrive in the digital economy.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      description: 'Explanation of how donations support learners and MSMEs.',
    },
    {
      name: 'buttonText1',
      title: 'Button 1 Text (Primary CTA)',
      type: 'string',
      description: 'e.g. "Donate via Flutterwave"',
      initialValue: 'Donate via Flutterwave',
    },
    {
      name: 'buttonLink1',
      title: 'Button 1 URL (Primary Link)',
      type: 'url',
      description: 'e.g. Flutterwave payment link',
      initialValue: 'https://flutterwave.com/pay/lsuxaiyde2t8',
    },
    {
      name: 'buttonText2',
      title: 'Button 2 Text (Secondary CTA)',
      type: 'string',
      description: 'e.g. "Send with PayPal"',
      initialValue: 'Send with PayPal',
    },
    {
      name: 'buttonLink2',
      title: 'Button 2 Link or Email (Secondary Link)',
      type: 'string',
      description: 'e.g. PayPal.me link or PayPal email',
      initialValue: 'https://paypal.me/cafeinnovate',
    },
    {
      name: 'ctas',
      title: 'Custom CTA Buttons Array (Optional)',
      type: 'array',
      description: 'Add more custom call to actions if needed.',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Button Text', type: 'string' },
            { name: 'link', title: 'Button URL', type: 'string' },
            { 
              name: 'variant', 
              title: 'Button Variant', 
              type: 'string', 
              options: { list: ['yellow', 'primary', 'outline', 'ghost'] },
              initialValue: 'yellow' 
            },
          ],
        },
      ],
    },
    {
      name: 'callToAction',
      title: 'Legacy Call to Action (Deprecated)',
      type: 'string',
      hidden: true,
    },
  ],
};

export default donate;
