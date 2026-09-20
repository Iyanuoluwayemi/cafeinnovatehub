export default {
name: 'home',
title: 'Home Page',
type: 'document',
groups: [
{ name: 'hero', title: 'Hero Section' },
{ name: 'feature', title: 'Feature Section' }
],
fields: [
{ name: 'title', title: 'Internal Title', type: 'string', initialValue: 'Home Page Content', hidden: true },

/* HERO SECTION */
{ name: 'heroHeadline', title: 'Hero Headline', type: 'string', group: 'hero' },
{ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', group: 'hero' },
{ name: 'heroImage', title: 'Hero Background Image', type: 'image', options: { hotspot: true }, group: 'hero' },
{ name: 'primaryCtaText', title: 'Primary CTA Text', type: 'string', group: 'hero' },
{ name: 'primaryCtaLink', title: 'Primary CTA URL', type: 'string', group: 'hero' },
{ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string', group: 'hero' },
{ name: 'secondaryCtaLink', title: 'Secondary CTA URL', type: 'string', group: 'hero' },
{ name: 'stats', title: 'Impact Statistics', type: 'array', group: 'hero', of: [{ type: 'object', fields: [
{ name: 'value', title: 'Stat Value (e.g. 50+)', type: 'string' },
{ name: 'label', title: 'Stat Label (e.g. BUSINESSES TRAINED)', type: 'string' }
]}]
},

/* FEATURE SECTION */
{ name: 'featureTag', title: 'Eyebrow Tag (e.g. DIGITAL SKILLS ACCELERATOR)', type: 'string', group: 'feature' },
{ name: 'featureHeadline', title: 'Feature Headline', type: 'string', group: 'feature' },
{ name: 'featureDescription', title: 'Feature Description', type: 'text', group: 'feature' },
{ name: 'featureLinkText', title: 'Link Text', type: 'string', group: 'feature' },
{ name: 'featureLinkUrl', title: 'Link URL', type: 'string', group: 'feature' },
{ name: 'featureImage', title: 'Feature Side Image', type: 'image', options: { hotspot: true }, group: 'feature' },
{ name: 'badgeTitle', title: 'Floating Badge Title (e.g. 100%)', type: 'string', group: 'feature' },
{ name: 'badgeSubtitle', title: 'Floating Badge Subtitle', type: 'string', group: 'feature' }
]
};
