import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion } from './env';

// Server-safe write token fallback if not provided in environment
const serverWriteToken =
  process.env.SANITY_API_WRITE_TOKEN ||
  (typeof window === 'undefined'
    ? 'skjUVI7SNEv7MfqC1d1xQvde57w55qYrh0HQTXieFtLYE1gE2HKi6S30Xb8TfSo8KYK7F6cnNBxZwo56VyUS7R11g5wUEaeptU9VmPMz9XamUYl3Jmgl0BqSQttmFLJA94cJtbkJCNYlFbMk38OMhBj3JOiASEjPMSh0CqgMw7AEsjRhGYKD'
    : undefined);

// Standard client for frontend data fetching
export const client = createClient({ 
  projectId, 
  dataset, 
  apiVersion, 
  useCdn: false,
  token: process.env.SANITY_API_WRITE_TOKEN,
});

// Authenticated write client for backend mutations and data seeding
export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: serverWriteToken,
});
