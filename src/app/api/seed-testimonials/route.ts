import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '3mh37foj',
  dataset: 'production',
  apiVersion: '2026-09-20',
  useCdn: false,
  token: 'skjUVI7SNEv7MfqC1d1xQvde57w55qYrh0HQTXieFtLYE1gE2HKi6S30Xb8TfSo8KYK7F6cnNBxZwo56VyUS7R11g5wUEaeptU9VmPMz9XamUYl3Jmgl0BqSQttmFLJA94cJtbkJCNYlFbMk38OMhBj3JOiASEjPMSh0CqgMw7AEsjRhGYKD'
});

const testimonials = [
  {
    quote: "Since I joined Cafe Innovate Hub, I have learned how to market my business more intentionally. I learned useful tips on using Facebook Marketplace, Instagram, creating better captions, and knowing what kind of content to post. I am now more intentional and consistent with how I promote Midefreshmart online.",
    name: "@MideFreshMart",
    role: "Community Member"
  },
  {
    quote: "Since connecting with Cafe Innovate Hub, I have gained tremendous value. The community introduced me to powerful digital tools. I frequently leverage CapCut, Facebook Marketplace, and Ads to promote my brand. These skills, combined with practical tips on consistent content creation and audience engagement, have significantly strengthened my brand's online presence.",
    name: "Mr Olumide",
    role: "@Declutterify.Ng"
  }
];

export async function GET() {
  try {
    const results = [];
    for (const item of testimonials) {
      const result = await client.create({
        _type: 'testimonial',
        quote: item.quote,
        name: item.name,
        role: item.role
      });
      results.push(result);
    }
    return NextResponse.json({ success: true, message: "Testimonials successfully seeded to Sanity", results });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
