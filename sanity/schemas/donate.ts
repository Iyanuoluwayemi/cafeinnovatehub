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
      name: 'cta1Text',
      title: 'CTA 1 Text (Flutterwave)',
      type: 'string',
      description: 'e.g. "Donate via Flutterwave"',
      initialValue: 'Donate via Flutterwave',
    },
    {
      name: 'cta1Link',
      title: 'CTA 1 Link',
      type: 'url',
      description: 'e.g. Flutterwave payment link',
      initialValue: 'https://flutterwave.com/pay/lsuxaiyde2t8',
    },
    {
      name: 'cta2Text',
      title: 'CTA 2 Text (PayPal)',
      type: 'string',
      description: 'e.g. "Send with PayPal"',
      initialValue: 'Send with PayPal',
    },
    {
      name: 'cta2Link',
      title: 'CTA 2 Link',
      type: 'url',
      description: 'e.g. PayPal.me link or payment URL',
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
      name: 'buttonText1',
      title: 'Legacy Button 1 Text',
      type: 'string',
      hidden: true,
    },
    {
      name: 'buttonLink1',
      title: 'Legacy Button 1 URL',
      type: 'url',
      hidden: true,
    },
    {
      name: 'buttonText2',
      title: 'Legacy Button 2 Text',
      type: 'string',
      hidden: true,
    },
    {
      name: 'buttonLink2',
      title: 'Legacy Button 2 Link',
      type: 'string',
      hidden: true,
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
