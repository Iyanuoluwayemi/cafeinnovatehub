import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from './env';

const isValidToken = (token?: string) => 
  Boolean(token && token.startsWith('sk') && !token.includes('your_sanity_write_token_here'));

const serverWriteToken = isValidToken(process.env.SANITY_API_WRITE_TOKEN)
  ? process.env.SANITY_API_WRITE_TOKEN
  : (typeof window === 'undefined'
      ? 'skjUVI7SNEv7MfqC1d1xQvde57w55qYrh0HQTXieFtLYE1gE2HKi6S30Xb8TfSo8KYK7F6cnNBxZwo56VyUS7R11g5wUEaeptU9VmPMz9XamUYl3Jmgl0BqSQttmFLJA94cJtbkJCNYlFbMk38OMhBj3JOiASEjPMSh0CqgMw7AEsjRhGYKD'
      : undefined);

// Standard client for frontend data fetching (unauthenticated public queries)
export const client = createClient({ 
  projectId, 
  dataset, 
  apiVersion, 
  useCdn: false,
});

// Authenticated write client for backend mutations and data seeding
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: serverWriteToken,
});
