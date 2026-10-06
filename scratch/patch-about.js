const { createClient } = require('next-sanity');

const client = createClient({
  projectId: '3mh37foj',
  dataset: 'production',
  apiVersion: '2026-09-20',
  useCdn: false,
  token: 'skjUVI7SNEv7MfqC1d1xQvde57w55qYrh0HQTXieFtLYE1gE2HKi6S30Xb8TfSo8KYK7F6cnNBxZwo56VyUS7R11g5wUEaeptU9VmPMz9XamUYl3Jmgl0BqSQttmFLJA94cJtbkJCNYlFbMk38OMhBj3JOiASEjPMSh0CqgMw7AEsjRhGYKD'
});

async function run() {
  const originStory = `Cafe Innovate Hub was created to help close that gap.

More than a training provider, the Hub is a growing community where young people, entrepreneurs, and MSMEs can learn relevant digital skills, explore new opportunities, and gain practical support for their work and businesses. Its programmes are intentionally hands-on: participants are encouraged not only to learn concepts, but to apply them in real time through guided practicals, exercises, and implementation-focused sessions.

The name reflects this vision. “Café” represents a welcoming gathering place, a space for conversation, learning, connection, and shared growth. “Innovate Hub” reflects the organisation’s commitment to helping people discover smarter ways to create, work, and grow in an increasingly digital world.

The journey began with the Coffee Chat Series, which brought industry professionals together for conversations around business, digital transformation, and skills development. From there, Cafe Innovate Hub expanded into practical training programs, beginning with digital marketing and growing into areas such as graphic design and other digital skills relevant to careers and small businesses.

In just over a year, Cafe Innovate Hub has trained more than 200 people, supported over 50 businesses, and delivered three training programs. Its Graphic Design Fundamentals Bootcamp received approximately 600 applications within three weeks… an important reflection of the growing demand for accessible, practical digital skills training.

The organisation has grown through commitment, collaboration, and the support of facilitators, partners, and community members who believe in the vision. It continues to work toward securing grants, donations, and strategic partnerships that will enable it to deliver more free and highly affordable programs, especially for young people and businesses who are ready to learn but may not otherwise have access.

Cafe Innovate Hub is building more than digital skills. It is helping people see possibility: a young person discovering an income-relevant skill, a business owner reaching new customers online, or a small team using digital tools, automation, and AI to work with greater clarity and efficiency.

The mission is clear: to make digital opportunity more accessible, practical, and transformative… one person, one business, and one community at a time.`;

  try {
    // Check if an about document exists
    const aboutDocs = await client.fetch("*[_type == 'about']");
    if (aboutDocs.length > 0) {
      const docId = aboutDocs[0]._id;
      const res = await client.patch(docId).set({ originStory }).commit();
      console.log("Patched existing about document:", res);
    } else {
      const res = await client.create({
        _type: 'about',
        title: 'About Page Content',
        originStory,
        mission: 'To empower MSMEs and individuals.',
        vision: 'A digitally transformed future.'
      });
      console.log("Created new about document:", res);
    }
  } catch (err) {
    console.error("Error updating sanity:", err);
  }
}

run();
