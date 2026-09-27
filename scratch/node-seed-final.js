const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: "3mh37foj",
  dataset: "production",
  apiVersion: "2026-09-20",
  token: "skjUVI7SNEv7MfqC1d1xQvde57w55qYrh0HQTXieFtLYE1gE2HKi6S30Xb8TfSo8KYK7F6cnNBxZwo56VyUS7R11g5wUEaeptU9VmPMz9XamUYl3Jmgl0BqSQttmFLJA94cJtbkJCNYlFbMk38OMhBj3JOiASEjPMSh0CqgMw7AEsjRhGYKD", // Extracted token
  useCdn: false
});

const insightsData = [
  {
    _type: 'post',
    title: '10 UI Trends Shaping the Future of Web Apps',
    slug: { _type: 'slug', current: '10-ui-trends-shaping-future-web-apps' },
    category: 'Design',
    excerpt: 'Explore how micro-interactions, dark mode strategies, and glassmorphism are redefining user experiences in modern web applications.',
    publishedAt: new Date().toISOString()
  },
  {
    _type: 'post',
    title: 'The Power of Data-Driven Storytelling',
    slug: { _type: 'slug', current: 'power-data-driven-storytelling' },
    category: 'Marketing',
    excerpt: 'Learn how to leverage analytics to craft compelling narratives that resonate with your audience and drive actual business conversions.',
    publishedAt: new Date().toISOString()
  },
  {
    _type: 'post',
    title: 'Alumni Spotlight: Building a SaaS in 30 Days',
    slug: { _type: 'slug', current: 'alumni-spotlight-building-saas-30-days' },
    category: 'Community',
    excerpt: 'Read how one of our bootcamp graduates went from absolute beginner to launching a fully functional SaaS product that generates recurring revenue.',
    publishedAt: new Date().toISOString()
  }
];

const footerData = {
  _type: 'footer',
  tagline: 'Empowering MSMEs for a digital future',
  whatWeDoText: 'Cafe Innovate Hub is a digital skills accelerator...',
  whatsappNumber: '2348000000000',
  socialLinks: [
    { platform: 'Twitter', url: 'https://twitter.com' },
    { platform: 'LinkedIn', url: 'https://linkedin.com' }
  ]
};

async function seed() {
  try {
    for (const insight of insightsData) {
      await client.create(insight);
    }
    await client.create(footerData);
    console.log('Seeded successfully!');
  } catch (err) {
    console.error('Error:', err);
  }
}

seed();
