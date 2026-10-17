export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero & Impact Section' },
    { name: 'feature', title: 'What We Do (Feature)' },
    { name: 'insights', title: 'Latest Insights' },
  ],
  fields: [
    { name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Home Page Content', hidden: true },

    {
      name: 'insightsSubtitle',
      title: 'Latest Insights Subtitle',
      type: 'string',
      group: 'insights',
      initialValue: 'Discover the latest trends in digital marketing, design tips, and stories from our alumni.',
    },

    /* HERO & IMPACT SECTION */
    { name: 'heroHeadline', title: 'Hero Headline', type: 'string', group: 'hero' },
    { name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', group: 'hero' },
    { name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true }, group: 'hero' },
    { name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string', group: 'hero' },
    { name: 'primaryCtaLink', title: 'Primary CTA URL', type: 'string', group: 'hero' },
    { name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string', group: 'hero' },
    { name: 'secondaryCtaLink', title: 'Secondary CTA URL', type: 'string', group: 'hero' },

    {
      name: 'impactHeading',
      title: 'Impact Section Heading (Deprecated)',
      type: 'string',
      group: 'hero',
      hidden: true,
    },

    {
      name: 'stats',
      title: 'Metrics & Achievements',
      type: 'array',
      group: 'hero',
      description: 'Key metrics displayed on the home page (e.g. over 50+ Businesses trained, 200+ Professionals trained)',
      of: [
        {
          type: 'object',
          name: 'stat',
          title: 'Metric',
          fields: [
            { name: 'value', title: 'Metric Value (e.g. over 50+, 200+, 5, Bi-monthly)', type: 'string' },
            { name: 'label', title: 'Metric Label (e.g. Businesses trained, Professionals trained)', type: 'string' },
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
            prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
              return {
                title: title || 'No value',
                subtitle: subtitle || 'No label',
              };
            },
          },
        },
      ],
    },

    /* FEATURE SECTION */
    {
      name: 'introCopy',
      title: 'Intro Copy / SEO Accelerator Text',
      type: 'text',
      rows: 4,
      group: 'feature',
      description: 'Specific SEO description of Cafe Innovate Hub as a digital skills accelerator.',
      initialValue: 'Cafe Innovate Hub is a digital skills accelerator helping small business owners and young professionals grow through practical, accessible digital skills training programs. From digital marketing to graphic design, we teach the skills that turn a phone and an internet connection into real opportunity, and we keep it affordable so cost is never the reason someone or a business gets left behind.',
    },

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
