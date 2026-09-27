import { NextResponse } from 'next/server';
import { client } from '../../../../sanity/client';

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
  _id: 'global-footer',
  _type: 'footer',
  tagline: 'Empowering MSMEs for a digital future',
  whatWeDoText: 'Cafe Innovate Hub is a digital skills accelerator...',
  whatsappNumber: '2348000000000',
  socialLinks: [
    { platform: 'Twitter', url: 'https://twitter.com' },
    { platform: 'LinkedIn', url: 'https://linkedin.com' }
  ]
};

export async function GET() {
  try {
    for (let index = 0; index < insightsData.length; index++) {
      const insight = insightsData[index];
      await client.createOrReplace({
        ...insight,
        _id: `seeded-post-${index}`
      });
    }
    
    await client.createOrReplace(footerData);
    
    return NextResponse.json({ success: true, message: 'Seeded insights and footer successfully with createOrReplace' });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
