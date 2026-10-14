export const donate = {
  name: 'donate',
  title: 'Donate Page',
  type: 'document',
  fields: [
    {
      name: 'headline',
      title: 'Headline / Eyebrow',
      type: 'string',
      description: 'e.g. "Donate to support digital access"',
      initialValue: 'Donate to support digital access',
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Main display heading for the donation page',
      initialValue: 'Support Digital Empowerment',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      initialValue: "Your generous contributions enable Cafe Innovate Hub to train young professionals and empower MSMEs with the critical digital skills needed to thrive in today's economy. Together, we are building a more innovative future.",
    },
    {
      name: 'cta1Text',
      title: 'CTA 1 Text (Flutterwave)',
      type: 'string',
      initialValue: 'Donate via Flutterwave',
    },
    {
      name: 'cta1Link',
      title: 'CTA 1 Link (Flutterwave URL)',
      type: 'url',
      initialValue: 'https://flutterwave.com/pay/lsuxaiyde2t8',
    },
    {
      name: 'cta2Text',
      title: 'CTA 2 Text (PayPal)',
      type: 'string',
      initialValue: 'Send with PayPal',
    },
    {
      name: 'cta2Link',
      title: 'CTA 2 Link / PayPal Email',
      type: 'string',
      initialValue: 'cafeinnovate@gmail.com',
    },
    {
      name: 'callsToAction',
      title: 'Additional Call To Actions (Optional List)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform Name (e.g. Flutterwave, PayPal)', type: 'string' },
            { name: 'buttonText', title: 'Button Text', type: 'string' },
            { name: 'urlOrValue', title: 'URL or Payment Address', type: 'string' },
            { name: 'isCopyAction', title: 'Is this a copy-to-clipboard action?', type: 'boolean', initialValue: false },
          ],
        },
      ],
    },
  ],
};

export default donate;
