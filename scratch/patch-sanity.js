const { createClient } = require('next-sanity');

const client = createClient({
  projectId: '3mh37foj',
  dataset: 'production',
  apiVersion: '2026-09-20',
  useCdn: false,
  token: 'skjUVI7SNEv7MfqC1d1xQvde57w55qYrh0HQTXieFtLYE1gE2HKi6S30Xb8TfSo8KYK7F6cnNBxZwo56VyUS7R11g5wUEaeptU9VmPMz9XamUYl3Jmgl0BqSQttmFLJA94cJtbkJCNYlFbMk38OMhBj3JOiASEjPMSh0CqgMw7AEsjRhGYKD'
});

async function run() {
  try {
    const res = await client
      .patch('global-footer')
      .set({
        tagline: 'What we do',
        whatWeDoText: 'Empowering MSMEs for a Digital Future'
      })
      .commit();
    console.log("Sanity successfully patched!", res);
  } catch (err) {
    console.error("Error patching Sanity:", err.message);
    
    // In case 'global-footer' doesn't exist, let's create it
    if (err.message.includes('not found') || err.message.includes('Document to patch does not exist')) {
       console.log("Document doesn't exist, attempting to createOrReplace...");
       try {
           const createRes = await client.createOrReplace({
              _id: 'global-footer',
              _type: 'footer',
              tagline: 'What we do',
              whatWeDoText: 'Empowering MSMEs for a Digital Future',
              whatsappNumber: '2349030898649',
              socialLinks: []
           });
           console.log("Successfully created!", createRes);
       } catch (e2) {
           console.error("Error creating:", e2);
       }
    }
  }
}

run();
