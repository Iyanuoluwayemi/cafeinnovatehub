const { createClient } = require('next-sanity');

const client = createClient({
  projectId: '3mh37foj',
  dataset: 'production',
  apiVersion: '2026-09-20',
  useCdn: false,
  token: 'skjUVI7SNEv7MfqC1d1xQvde57w55qYrh0HQTXieFtLYE1gE2HKi6S30Xb8TfSo8KYK7F6cnNBxZwo56VyUS7R11g5wUEaeptU9VmPMz9XamUYl3Jmgl0BqSQttmFLJA94cJtbkJCNYlFbMk38OMhBj3JOiASEjPMSh0CqgMw7AEsjRhGYKD'
});

async function run() {
  await client.create({
    _type: 'program',
    title: 'Software Development',
    shortDescription: 'Comprehensive training covering web and mobile app development for aspiring software engineers.',
    targetAudience: 'Beginners and aspiring developers looking to build full-stack web and mobile applications.',
    cost: 'Coming soon',
    duration: '12 Weeks',
    displayOrder: 4,
    slug: { _type: 'slug', current: 'software-development' }
  });
  console.log("Inserted Software Development program!");
}

run().catch(console.error);
