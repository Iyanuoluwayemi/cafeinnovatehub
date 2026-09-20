import { createClient } from 'next-sanity';

export const client = createClient({ 
  projectId: "3mh37foj", 
  dataset: "production", 
  apiVersion: "2026-09-20", 
  useCdn: false 
});
