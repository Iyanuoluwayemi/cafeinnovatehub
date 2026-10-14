export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'feature', title: 'Feature Section' },
  ],
  fields: [
    { name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Home Page Content', hidden: true },

    {
      name: 'insightsSubtitle',
      title: 'Latest Insights Subtitle',
      type: 'string',
      initialValue: 'Discover the latest trends in digital marketing, design tips, and stories from our alumni.',
    },

    {
      name: 'impactHeading',
      title: 'Impact Heading',
      type: 'string',
      description: 'Heading for the impact section (e.g. "A year of real impact, one person and one business at a time.")',
      initialValue: 'A year of real impact, one person and one business at a time.',
    },

    {
      name: 'introCopy',
      title: 'Intro Copy / SEO Accelerator Text',
      type: 'text',
      rows: 4,
      description: 'Specific SEO description of Cafe Innovate Hub as a digital skills accelerator.',
      initialValue: 'Cafe Innovate Hub is a digital skills accelerator where small business owners and young professionals converge to learn practical tools, improve their businesses, and turn a simple internet connection into real opportunity.',
    },

    /* HERO SECTION */
    { name: 'heroHeadline', title: 'Hero Headline', type: 'string', group: 'hero' },
    { name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', group: 'hero' },
    { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true }, group: 'hero' },
    { name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string', group: 'hero' },
    { name: 'primaryCtaLink', title: 'Primary CTA URL', type: 'string', group: 'hero' },
    { name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string', group: 'hero' },
    { name: 'secondaryCtaLink', title: 'Secondary CTA URL', type: 'string', group: 'hero' },
    {
      name: 'stats',
      title: 'Metrics & Achievements',
      type: 'array',
      group: 'hero',
      description: 'Key metrics displayed on the home page (e.g. 50+ Businesses Trained, 200+ Professionals)',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Metric Value (e.g. 200+, 50+)', type: 'string' },
            { name: 'label', title: 'Metric Label (e.g. PROFESSIONALS)', type: 'string' },
          ],
        },
      ],
    },

    /* FEATURE SECTION */
    { name: 'featureTag', title: 'Eyebrow Tag', type: 'string', group: 'feature', initialValue: 'What We Do' },
    { name: 'featureHeadline', title: 'Feature Headline', type: 'string', group: 'feature', initialValue: 'What We Do' },
    { name: 'featureDescription', title: 'Feature Description', type: 'text', group: 'feature', initialValue: 'Cafe Innovate Hub is a digital skills accelerator empowering MSMEs for a digital future.' },
    { name: 'featureLinkText', title: 'Link Text', type: 'string', group: 'feature' },
    { name: 'featureLinkUrl', title: 'Link URL', type: 'string', group: 'feature' },
    { name: 'featureVideoUrl', title: 'Feature YouTube Video URL', type: 'string', group: 'feature' },
    { name: 'badgeTitle', title: 'Floating Badge Title (e.g. 100%)', type: 'string', group: 'feature' },
    { name: 'badgeSubtitle', title: 'Floating Badge Subtitle', type: 'string', group: 'feature' },
  ],
};
